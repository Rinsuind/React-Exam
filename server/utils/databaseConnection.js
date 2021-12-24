const databaseConnection = (connect, connectionString, databaseName) => {
    return connect(`${connectionString}${databaseName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = databaseConnection;
