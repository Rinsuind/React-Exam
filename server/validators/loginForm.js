const loginForm = (body) => {
    return [
        body('email', 'Invalid Email').isEmail().normalizeEmail(),
        body('password').custom((password) => {
            return password.length < 6 ? Promise.reject('Password must be at least six characters') : true;
        }),
    ];
};

module.exports = loginForm;
