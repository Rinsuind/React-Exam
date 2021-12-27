const { UserModel } = require('../models');
const userModel = require('../models/user');

const userProfile = (req, res, next) => {
    const { id } = req.user;

    return UserModel.findById({ _id: id })
        .populate('checkOutBooks')
        .then((user) => {
            const { _id, email, username, boughtBooks, checkOutBooks } = user;
            res.status(200).json({ id: _id, email, username, boughtBooks, checkOutBooks });
        })
        .catch((err) => next({ status: 400, message: err.message }));
};

const checkBook = (req, res, next) => {
    const bookId = req.body._id;
    const userId = req.user._id;

    return UserModel.findOneAndUpdate({ _id: userId }, { $push: { checkOutBooks: bookId } }, { new: true })
        .populate('checkOutBooks')
        .then((user) => {
            const { _id, email, username, boughtBooks, checkOutBooks } = user;
            const updateArr = checkOutBooks.sort((a, b) => JSON.stringify(a._id).localeCompare(JSON.stringify(b._id)));
            return res.status(200).json({ id: _id, email, username, boughtBooks, checkOutBooks: updateArr });
        })
        .catch((err) => next({ status: 400, message: err.message }));
};

const removeOneBook = (req, res, next) => {
    const bookId = req.body._id;
    const userId = req.user._id;
    return UserModel.findById({ _id: userId })
        .then((user) => {
            const index = user.checkOutBooks.indexOf(bookId);
            user.checkOutBooks.splice(index, 1);
            const sortedArr = user.checkOutBooks.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
            return UserModel.findOneAndUpdate({ _id: userId }, { $set: { checkOutBooks: sortedArr } }, { new: true })
                .populate('checkOutBooks')
                .then((updatedUser) => {
                    const { _id, email, username, boughtBooks, checkOutBooks } = updatedUser;

                    return res.status(200).json({ id: _id, email, username, boughtBooks, checkOutBooks });
                })
                .catch((err) => next({ status: 400, message: err.message }));
        })
        .catch((err) => next({ status: 400, message: err.message }));
};

const removeAllBooks = (req, res, next) => {
    const bookId = req.body._id;
    const userId = req.user._id;

    return UserModel.findOneAndUpdate({ _id: userId }, { $pull: { checkOutBooks: bookId } }, { new: true })
        .populate('checkOutBooks')
        .then((user) => {
            const { _id, email, username, boughtBooks, checkOutBooks } = user;
            return res.status(200).json({ id: _id, email, username, boughtBooks, checkOutBooks });
        })
        .catch((err) => next({ status: 400, message: err.message }));
};

const buyBooks = (req, res, next) => {
    const userId = req.user._id;
    return UserModel.findOne({ _id: userId })
        .then((user) => {
            const boughtBooks = user.checkOutBooks.length + user.boughtBooks;
            return UserModel.findOneAndUpdate(
                { _id: user._id },
                { $set: { checkOutBooks: [] }, boughtBooks },
                { new: true }
            )
                .then((updatedUser) => {
                    const { _id, email, username, boughtBooks, checkOutBooks } = updatedUser;
                    return res.status(200).json({ id: _id, email, username, boughtBooks, checkOutBooks });
                })
                .catch((err) => next({ status: 400, message: err.message }));
        })
        .catch((err) => next({ status: 400, message: err.message }));
};

module.exports = {
    userProfile,
    checkBook,
    removeOneBook,
    removeAllBooks,
    buyBooks,
};
