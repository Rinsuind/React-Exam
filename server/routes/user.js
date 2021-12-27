const { userProfile, checkBook, removeOneBook, removeAllBooks, buyBooks } = require('../controllers/user');
const isAuth = require('../middleware/isAuth');

module.exports = {
    path: '/user',

    config: (router) => {
        router.route('/profile').get(isAuth(), userProfile).patch(isAuth(), checkBook);
        router.route('/decrement').patch(isAuth(), removeOneBook);
        router.route('/removeAll').patch(isAuth(), removeAllBooks);
        router.route('/buy').patch(isAuth(), buyBooks);

        return router;
    },
};
