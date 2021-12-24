const verify = (...args) => {
    const [UserModel, token, secret, verifyToken, next, req] = args;
    return verifyToken(token, secret)
        .then((data) => {
            UserModel.findById(data.id)
                .then((user) => {
                    req.user = user;
                    next();
                })
                .catch((err) => next({ status: 500, message: err.message }));
        })
        .catch((err) => next({ status: 400, message: err.message }));
};

module.exports = verify;
