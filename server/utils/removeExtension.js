const removeExtension = (str) => {
    return str.toLowerCase().replace('.js', '');
};

module.exports = removeExtension;
