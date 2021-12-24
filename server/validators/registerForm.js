const registerForm = (body) => {
    return [
        body('email', 'Invalid Email').isEmail().normalizeEmail(),
        body('username').custom((username) => {
            const pattern = /^\w+$/gm;
            if (username.length < 3) {
                return Promise.reject('Username must be at least three characters');
            }
            if (!pattern.test(username)) {
                return Promise.reject("Username must contain only letter's or digits");
            }
            return true;
        }),
        body('password').custom((password) => {
            return password.length < 6 ? Promise.reject('Password must be at least six characters') : true;
        }),
        body('repeatPassword').custom((rePassword, { req }) => {
            return rePassword !== req.body.password ? Promise.reject('Passwords do not match') : true;
        }),
    ];
};

module.exports = registerForm;
