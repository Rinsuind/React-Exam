const { register, login, logout, token } = require('../controllers/auth');
const isAuth = require('../middleware/isAuth');
const { registerValidator, loginValidator } = require('../validators');

module.exports = {
    path: '/auth',
    config: (router) => {
        router.post('/register', registerValidator, register);
        router.post('/login', loginValidator, login);
        router.post('/logout', isAuth(), logout);
        router.get('/token', isAuth(), token);
        return router;
    },
};
