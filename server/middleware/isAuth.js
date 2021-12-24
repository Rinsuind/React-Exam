const { verifyToken } = require('../utils/jsonwebtoken');
const { UserModel } = require('../models');
const verify = require('../helpers/verifyTokens');
const {
    jsonwebtoken: { accessSecret, refreshSecret },
    cookie: { refreshCookieName, accessCookieName },
} = require('../config');

const isAuth = (check) => {
    return (req, res, next) => {
        if (check) {
            return next();
        }
        if (req.url === '/token') {
            return verify(UserModel, req.cookies[refreshCookieName] || '', refreshSecret, verifyToken, next, req);
        }
        return verify(UserModel, req.cookies[accessCookieName] || '', accessSecret, verifyToken, next, req);
    };
};

module.exports = isAuth;
