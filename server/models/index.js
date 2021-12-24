const {
    Schema,
    model,
    SchemaTypes: { ObjectId },
} = require('mongoose');
const bcrypt = require('bcrypt');
const { bcryptRounds } = require('../config');

module.exports = {
    UserModel: require('./user')(Schema, model, bcrypt, bcryptRounds, ObjectId),
    BlackListedTokenModel: require('./blackListedToken')(Schema, model),
    RefreshTokenModel: require('./refreshTokenModel')(Schema, model, ObjectId),
    BookModel: require('./book')(Schema, model, ObjectId),
};
