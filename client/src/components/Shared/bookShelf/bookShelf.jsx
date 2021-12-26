import { useContext, useEffect } from 'react';
import { BookContext } from '../../../context/books';
import customAxios from '../../../axios';
import { RESPONSE_FAIL, RESPONSE_SUCCESS } from '../../../types';
import Book from '../book/book';

import './bookShelf.css';

const BookShelf = () => {
    const { shelf, dispatch } = useContext(BookContext);
    const { books } = shelf;
    useEffect(() => {
        customAxios
            .get('/books')
            .then((response) => dispatch({ type: RESPONSE_SUCCESS, payload: response.data }))
            .catch((err) => dispatch({ type: RESPONSE_FAIL, payload: err.response.data }));
    }, []);

    return (
        <div className='book-shelf'>
            {!books ? <p>Loading</p> : books.map((book) => <Book key={book._id} book={book} />)}
        </div>
    );
};

export default BookShelf;
