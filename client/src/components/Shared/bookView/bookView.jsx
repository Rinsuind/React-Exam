import { useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { BookContext } from '../../../context/books';
import customAxios from '../../../axios';
import { RESPONSE_FAIL, GET_SINGLE_BOOK } from '../../../types';
import BookDetails from '../bookDetails/bookDetails';

import './bookView.css';

const BookView = () => {
    const { id } = useParams();
    const { shelf, dispatch } = useContext(BookContext);
    const { book } = shelf;

    useEffect(() => {
        customAxios
            .get(`books/${id}`)
            .then((response) => dispatch({ type: GET_SINGLE_BOOK, payload: response.data }))
            .catch((err) => dispatch({ type: RESPONSE_FAIL, payload: err.response.data }));
    }, []);

    return !book ? <p>Loading</p> : <BookDetails book={book} />;
};

export default BookView;
