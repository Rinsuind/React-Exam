const { body } = require('express-validator');

module.exports = {
    registerValidator: require('./registerForm')(body),
    loginValidator: require('./loginForm')(body),
    bookValidator: require('./bookForm')(body),
};
