import Button from '../../components/Shared/button/button';
import ErrorNotification from '../../components/Shared/errorNotification/error';
import { ReactComponent as Logo } from '../../logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import useForm from '../../hooks/useRegister';
import customAxios from '../../axios';
import { useNavigate } from 'react-router';
import { RESPONSE_SUCCESS, RESPONSE_FAIL, USER_STATUS } from '../../types';
import { useEffect } from 'react';

import './login.css';

const initialValue = {
    email: '',
    password: '',
};

const Login = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const [formState, handleChange] = useForm(initialValue);
    const { email, password } = formState;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await customAxios.post('auth/login', formState);
            dispatch({ type: USER_STATUS, payload: false });
            dispatch({ type: RESPONSE_SUCCESS, payload: { ...response.data } });
            navigate('/books');
        } catch (err) {
            dispatch({ type: RESPONSE_FAIL, payload: err.response.data });
        }
    };

    useEffect(() => {
        return () => dispatch({ type: RESPONSE_FAIL, payload: '' });
    }, [dispatch]);

    return (
        <article className='site-forms login main-margin'>
            <div className='form-header'>
                <div className='logo-container'>
                    <Logo />
                </div>
                <h2>Sign In</h2>
                <ErrorNotification />
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-container'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' autoComplete='off' value={email} onChange={handleChange} />
                </div>
                <div className='form-container'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        autoComplete='off'
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <Button action='Login' />
            </form>
        </article>
    );
};

export default Login;
