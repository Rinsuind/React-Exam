const errorHandler = (err, req, res, next) => {
    const { message, status } = err;
    if (!status || !message) {
        return res.status(400).send('Bad Request');
    }
    console.log(message);
    res.status(status).send(message);
};

module.exports = errorHandler;
