import { useContext, useEffect } from 'react';
import { BookContext } from '../../context/books';
import { AuthContext } from '../../context/auth';
import customAxios from '../../axios';
import { RESPONSE_FAIL, RESPONSE_SUCCESS } from '../../types';

import requireAuth from '../../components/Hoc/authHoc';

import './profile.css';

const UserProfile = (props) => {
    const { shelf, dispatch } = useContext(BookContext);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        customAxios
            .get('/books')
            .then((response) => dispatch({ type: RESPONSE_SUCCESS, payload: response.data }))
            .catch((err) => dispatch({ type: RESPONSE_FAIL, payload: err.response.data }));
    }, []);

    return <article className='profile'>{!shelf.books ? <p>Loading...</p> : <p></p>}</article>;
};

export default requireAuth(UserProfile);
