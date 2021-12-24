const startServer = (app, PORT) => {
    return new Promise((res, rej) => app.listen(PORT, () => res()));
};

module.exports = startServer;
