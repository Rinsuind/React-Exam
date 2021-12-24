const { getAllBooks, createABook, updateABook, deleteBook, getABook } = require('../controllers/books');
const isAuth = require('../middleware/isAuth');
const { bookValidator } = require('../validators');
module.exports = {
    path: '/books',
    config: (router) => {
        router.route('').get(isAuth(), getAllBooks).post(isAuth(), bookValidator, createABook);
        router
            .route('/:id')
            .patch(isAuth(), bookValidator, updateABook)
            .delete(isAuth(), deleteBook)
            .get(isAuth(), getABook);
        return router;
    },
};
