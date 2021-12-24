const { UserModel, RefreshTokenModel, BlackListedTokenModel } = require('../models');
const { createToken } = require('../utils/jsonwebtoken');
const {
    cookie: { accessCookieName, refreshCookieName, maxAge, httpOnly },
} = require('../config');

const {
    jsonwebtoken: { refreshSecret, accessSecret, refreshExpiresIn, accessExpiresIn },
} = require('../config');

const { formsValidator } = require('../utils');

const register = (req, res, next) => {
    const { email, username, password } = req.body;

    const err = formsValidator(req);

    if (err) {
        return res.status(400).json(err.message);
    }

    return UserModel.findOne({ email: email })
        .then((user) => {
            if (user) {
                return Promise.reject('User with that email already exists');
            }
            return UserModel.create({ email, username, password })
                .then((_) => res.status(201).json({ message: 'User has been created successfully' }))
                .catch((err) => next({ status: 400, message: err }));
        })
        .catch((err) => next({ status: 400, message: err }));
};

const login = (req, res, next) => {
    const { email, password } = req.body;

    const err = formsValidator(req);
    if (err) {
        return res.status(400).json(err.message);
    }

    return UserModel.findOne({ email })
        .then((user) => {
            return Promise.all([user, user ? user.passwordMatch(password) : undefined])
                .then(([user, match]) => {
                    if (!match) {
                        return Promise.reject('Password do not match!');
                    }
                    const { _id, email, username } = user;
                    const accessesToken = createToken({ id: _id }, accessSecret, accessExpiresIn);
                    const refreshToken = createToken({ id: _id }, refreshSecret, refreshExpiresIn);

                    RefreshTokenModel.create({
                        user: _id,
                        refreshToken,
                    })
                        .then((_) => {
                            return res
                                .status(200)
                                .cookie(refreshCookieName, refreshToken, { maxAge: maxAge }, { httpOnly: httpOnly })
                                .cookie(accessCookieName, accessesToken, { maxAge: maxAge }, { httpOnly: httpOnly })

                                .json({ email, username, id: _id });
                        })
                        .catch((err) => next(err));
                })
                .catch((err) => next({ status: 401, message: err }));
        })
        .catch((err) => next({ status: 401, message: err }));
};

const logout = (req, res, next) => {
    const refreshToken = req.cookies[refreshCookieName];
    req.user = null;

    return Promise.all([
        BlackListedTokenModel.create({ token: refreshToken }),
        RefreshTokenModel.deleteOne({ refreshToken: refreshToken }),
    ])
        .then((_) => {
            return res.clearCookie(refreshCookieName).clearCookie(accessCookieName).json({ message: 'Logged out' });
        })
        .catch((err) => next({ status: 500, message: err.message }));
};

const token = (req, res, next) => {
    const { _id } = req.user;
    const accessesToken = createToken({ id: _id }, accessSecret, accessExpiresIn);
    const refreshToken = createToken({ id: _id }, refreshSecret, refreshExpiresIn);
    return RefreshTokenModel.findOneAndUpdate({ user: _id }, { refreshToken: refreshToken })
        .then((data) => {
            return res
                .status(200)
                .cookie(refreshCookieName, data.refreshToken, { maxAge: maxAge }, { httpOnly: httpOnly })
                .cookie(accessCookieName, accessesToken, { maxAge: maxAge }, { httpOnly: httpOnly })

                .json({ message: 'Refreshed' });
        })
        .catch((err) => next({ status: 400, message: err.message }));
};

module.exports = {
    register,
    login,
    logout,
    token,
};
