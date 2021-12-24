const { UserModel, BookModel } = require('../models');
const { formsValidator } = require('../utils');

const getAllBooks = (req, res, next) => {
    return BookModel.find({})
        .then((books) => res.json(books))
        .catch((err) => next({ status: 400, message: err.message }));
};

const getABook = (req, res, next) => {
    const { id } = req.params;

    return BookModel.findById({ _id: id })
        .then((book) => res.status(200).json(book))
        .catch((err) => next({ status: 400, message: err.message }));
};

const createABook = (req, res, next) => {
    const err = formsValidator(req);
    if (err) {
        return res.status(400).json(err.message);
    }
    const { _id } = req.user;

    return BookModel.create({ ...req.body, creator: _id })
        .then((book) => res.status(201).json({ book }))
        .catch((err) => next({ status: 400, message: err.message }));
};

const updateABook = (req, res, next) => {
    const err = formsValidator(req);
    if (err) {
        return res.status(400).json(err.message);
    }
    const { id } = req.params;
    return BookModel.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
        .then((book) => res.status(200).json(book))
        .catch((err) => next({ status: 400, message: err.message }));
};

const deleteBook = (req, res, next) => {
    const { id } = req.params;

    return BookModel.deleteOne({ _id: id })
        .then((_) => res.status(202).json({ message: 'Delete' }))
        .catch((err) => next({ status: 400, message: err.message }));
};

module.exports = {
    getAllBooks,
    createABook,
    updateABook,
    deleteBook,
    getABook,
};
