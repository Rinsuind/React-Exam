import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../../context/auth';
import useToggle from '../../../hooks/useToggle';
import { RESPONSE_SUCCESS, RESPONSE_FAIL } from '../../../types';
import customAxios from '../../../axios';
import Button from '../button/button';
import EditForm from '../editForm/editForm';

import './bookDetails.css';

const BookDetails = ({ book }) => {
    const [toggle, setToggle] = useToggle(false);
    const navigate = useNavigate();
    const { auth, dispatch } = useContext(AuthContext);
    const { _id, title, imageUrl, author, price, description, creator } = book;

    const deleteBook = async (e) => {
        try {
            customAxios.delete(`books/${_id}`);
            navigate('/books');
        } catch (err) {}
    };
    const editBook = (e) => {
        setToggle(!toggle);
    };
    const addBook = async (e) => {
        try {
            const response = await customAxios.patch('user/profile', { _id });
            dispatch({ type: RESPONSE_SUCCESS, payload: { ...response.data } });
        } catch (err) {
            dispatch({ type: RESPONSE_FAIL, payload: err });
        }
    };

    return (
        <div className='book-details'>
            <div className='ar'>
                <img src={imageUrl} alt='book' />
            </div>
            {toggle ? (
                <EditForm editBook={editBook} />
            ) : (
                <div className='content'>
                    <p className='title'>{title} </p>
                    <p className='author'>by {author}</p>
                    <p className='description'>{description}</p>
                    <p className='price'>
                        <span>$</span>
                        <span className='big'>{price.toFixed(2)}</span>
                    </p>
                    {!auth.user ? (
                        <p>Loading</p>
                    ) : auth.user.id === creator ? (
                        <div className='book-details-btn'>
                            <Button handler={editBook} action='Edit' /> <Button handler={deleteBook} action='Delete' />
                        </div>
                    ) : (
                        <Button action='Quick Add' handler={addBook} />
                    )}
                </div>
            )}
        </div>
    );
};

export default BookDetails;
