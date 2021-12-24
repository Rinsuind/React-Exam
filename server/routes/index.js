const { Router } = require('express');
const { removeExtension } = require('../utils');
const fs = require('fs');
const path = require('path');

const router = (app) => {
    fs.readdirSync(__dirname).forEach((file) => {
        if (file === 'index.js') {
            return;
        }
        const router = Router();
        const routerModule = require(path.join(__dirname, file));
        const routePath = routerModule.path
            ? routerModule.path
            : file !== 'home.js'
            ? `/${removeExtension(file)}`
            : '/';
        const route = routerModule.config ? routerModule.config(router) : routerModule(router);

        app.use(routePath, route);
    });
};

module.exports = router;
