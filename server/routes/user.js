const { userProfile } = require('../controllers/user');
const isAuth = require('../middleware/isAuth');

module.exports = {
    path: '/user',

    config: (router) => {
        router.get('/profile', isAuth(), userProfile);
        return router;
    },
};
