const { UserModel } = require('../models');

const userProfile = (req, res, next) => {
    const { id } = req.user;

    return UserModel.findById({ _id: id })
        .then((user) => {
            const { _id, email, username } = user;
            res.status(200).json({ id: _id, email, username });
        })
        .catch((err) => next({ status: 400, message: err.message }));
};

module.exports = {
    userProfile,
};
