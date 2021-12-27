import { useContext } from 'react';
import { AuthContext } from '../../../context/auth';
import customAxios from '../../../axios';
import { RESPONSE_FAIL, RESPONSE_SUCCESS } from '../../../types';

import './checkOutBooks.css';

const CheckOutBooks = ({ book }) => {
    const { id, title, price, imageUrl, quantity } = book;
    const { dispatch } = useContext(AuthContext);

    const increment = async (e) => {
        try {
            const response = await customAxios.patch('user/profile', { _id: id });
            dispatch({ type: RESPONSE_SUCCESS, payload: { ...response.data } });
        } catch (err) {
            dispatch({ type: RESPONSE_FAIL, payload: err.response.data });
        }
    };
    const decrement = async (e) => {
        try {
            const response = await customAxios.patch('user/decrement', { _id: id });
            dispatch({ type: RESPONSE_SUCCESS, payload: { ...response.data } });
        } catch (err) {
            dispatch({ type: RESPONSE_FAIL, payload: err.response.data });
        }
    };
    const removeBook = async (e) => {
        try {
            const response = await customAxios.patch('user/removeAll', { _id: id });
            dispatch({ type: RESPONSE_SUCCESS, payload: { ...response.data } });
        } catch (err) {
            dispatch({ type: RESPONSE_FAIL, payload: err.response.data });
        }
    };

    return (
        <div className='checkOutBooks'>
            <div className='img-container'>
                <img src={imageUrl} alt='book Cover' />
            </div>
            <p>{title}</p>
            <div className='actions'>
                <i onClick={increment} className='far fa-arrow-alt-circle-up'></i>
                <span>{quantity}</span>
                <i onClick={decrement} className='far fa-arrow-alt-circle-down'></i>
            </div>
            <p>
                Price: <span>$</span>
                {price * quantity}
            </p>
            <div className='remove-item'>
                <i onClick={removeBook} className='fas fa-times'></i>
            </div>
        </div>
    );
};

export default CheckOutBooks;
