import { useContext, useEffect } from 'react';
import { BookContext } from '../../../context/books';
import customAxios from '../../../axios';
import { RESPONSE_FAIL, RESPONSE_SUCCESS } from '../../../types';
import Book from '../book/book';
import SearchForm from '../search/search';
import useForm from '../../../hooks/useRegister';

import './bookShelf.css';

const BookShelf = () => {
    const [formState, handleChange] = useForm({ search: '' });
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
            <SearchForm handler={handleChange} />
            {!books ? (
                <p>Loading...</p>
            ) : (
                <div className='book-shelf-grid'>
                    {books
                        .filter((book) => book.title.toLowerCase().includes(formState.search.toLowerCase()))
                        .map((book) => (
                            <Book key={book._id} book={book} />
                        ))}
                </div>
            )}
        </div>
    );
};

export default BookShelf;
