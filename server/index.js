const express = require('express');
const { connect } = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {
    server: { PORT },
    database: { connectionString, databaseName },
    cors: { exposedHeaders, methods, credentials, allowedHeaders, urls },
} = require('./config');
const { databaseConnection, tabLog, startServer } = require('./utils');
const router = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(
    cors({
        origin: urls,
        credentials: credentials,
        allowedHeaders: allowedHeaders,
        exposedHeaders: exposedHeaders,
        methods: methods,
    })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
router(app);
app.use(errorHandler);

databaseConnection(connect, connectionString, databaseName)
    .catch(tabLog('Server is not connected to database'))
    .then(tabLog('Connected to database'))
    .then(startServer(app, PORT))
    .then(tabLog(`Server is listening on PORT ${PORT}`))
    .catch(({ message }) => console.log(message));
