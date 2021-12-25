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
        body('price').custom((price) => (price <= 0 ? Promise.reject('Price can not be a negative number') : true)),
        body('description').custom((x) =>
            x.length < 20 ? Promise.reject('Description must be at least 20 characters') : true
        ),
    ];
};

module.exports = bookForm;
