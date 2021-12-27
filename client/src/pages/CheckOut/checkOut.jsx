import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/auth';
import requireAuth from '../../components/Hoc/authHoc';
import Button from '../../components/Shared/button/button';
import CheckOutBooks from '../../components/Shared/checkOutBooks/checkoutBooks';
import customAxios from '../../axios';
import { RESPONSE_FAIL, RESPONSE_SUCCESS } from '../../types';

import './checkOut.css';

const CheckOut = () => {
    let totalPrice = 0;
    let arr = [];
    const navigate = useNavigate();
    const {
        auth: { user },
        dispatch,
    } = useContext(AuthContext);
    const buyBooks = async (e) => {
        try {
            const response = await customAxios.patch('user/buy');
            dispatch({ type: RESPONSE_SUCCESS, payload: { ...response.data } });
            navigate('/books');
        } catch (err) {
            dispatch({ type: RESPONSE_FAIL, payload: err.response.data });
        }
    };
    if (user) {
        totalPrice = user.checkOutBooks.reduce((a, b) => a + b.price, 0);
        arr = user.checkOutBooks
            .reduce((acc, { _id, title, imageUrl, price }) => {
                const target = acc.find((x) => x.id === _id);
                if (target) {
                    target.quantity += 1;
                } else {
                    acc.push({ id: _id, title, imageUrl, price, quantity: 1 });
                }
                return acc;
            }, [])
            .map((book, i) => <CheckOutBooks key={i} book={book} />);
    }

    return (
        <article className='checkout'>
            {user ? arr : <p>Loading...</p>}
            {arr.length ? (
                <div className='checkout-actions'>
                    <p className='checkout-total-price'>
                        <span>Total:</span> <span className='mark'>$</span>
                        {totalPrice}
                    </p>
                    <Button action='Buy' handler={buyBooks}></Button>
                </div>
            ) : (
                <p className='empty'>Empty!</p>
            )}
        </article>
    );
};

export default requireAuth(CheckOut);
