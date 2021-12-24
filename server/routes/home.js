module.exports = {
    path: '/',
    config: (router) => {
        router.route('').get(function (req, res, next) {
            res.send('Hello');
        });
        return router;
    },
};
