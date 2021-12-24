const jwt = require('jsonwebtoken');

const {
    jsonwebtoken: { algorithm },
} = require('../config');

const createToken = (data, secret, expireTime) => {
    return jwt.sign(data, secret, { expiresIn: expireTime, algorithm: algorithm });
};

const verifyToken = (token, secret) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

module.exports = {
    verifyToken,
    createToken,
};
