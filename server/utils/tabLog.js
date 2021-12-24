const tabLog = (message) => {
    return (data) => {
        console.log(message);
        return data instanceof Error ? Promise.reject(data) : Promise.resolve(data);
    };
};

module.exports = tabLog;
