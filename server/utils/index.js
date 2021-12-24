const { validationResult } = require('express-validator');
module.exports = {
    startServer: require('./startServer'),
    tabLog: require('./tabLog'),
    databaseConnection: require('./dataBaseConnection'),
    removeExtension: require('./removeExtension'),
    formsValidator: require('./formsValidator')(validationResult),
};
