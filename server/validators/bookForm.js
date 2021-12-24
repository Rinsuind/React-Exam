const bookForm = (body) => {
    return [
        body('title').custom((title) =>
            title.length < 2 ? Promise.reject('Title must be at least three charters') : true
        ),
        body('author').custom((author) => (author.length < 2 ? Promise.reject('Invalid author format') : true)),
        body('imageUrl').custom((imageUrl) =>
            /^http:\/\/|https:\/\/.+$/gm.test(imageUrl)
                ? true
                : Promise.reject('ImageUrl must start with http:// or https://')
        ),
        body('price').custom((price) => (price < 0 ? Promise.reject('Price can not be a negative number') : true)),
    ];
};

module.exports = bookForm;
