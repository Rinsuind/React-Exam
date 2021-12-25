import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { RESPONSE_SUCCESS, RESPONSE_FAIL, USER_STATUS } from '../../../types';
import customAxios from '../../../axios';
import { AuthContext } from '../../../context/auth';
import './logout.css';

const LogOut = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const clickHandler = (e) => {
        customAxios
            .post('auth/logout')
            .then((_) => {
                dispatch({ type: USER_STATUS, payload: true });
                dispatch({ type: RESPONSE_SUCCESS, payload: null });
                navigate('/');
            })
            .catch((err) => {
                dispatch({ type: RESPONSE_FAIL, payload: err.response.data });
            });
    };
    return (
        <li className='logout'>
            <button onClick={clickHandler}>LOGOUT</button>
        </li>
    );
};

export default LogOut;
