import './register.css';
import { ReactComponent as Logo } from '../../logo.svg';
import Button from '../../components/Shared/button/button';
import useForm from '../../hooks/useRegister';
import { validator } from '../../validators';
import customAxios from '../../axios';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { RESPONSE_FAIL } from '../../types';
import { useEffect } from 'react';
import ErrorNotification from '../../components/Shared/errorNotification/error';
import publicPages from '../../components/Hoc/publicHoc';

const defaultState = {
    email: '',
    username: '',
    password: '',
    repeatPassword: '',
};

const Register = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formState, handleChange] = useForm(defaultState);
    const { email, username, password, repeatPassword } = formState;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await customAxios.post('auth/register', formState);
            navigate('/login');
        } catch (err) {
            dispatch({ type: RESPONSE_FAIL, payload: err.response.data });
        }
    };
    const handleOutOfFocus = (e) => (e.target.className = validator(e, password));

    useEffect(() => {
        return () => dispatch({ type: RESPONSE_FAIL, payload: '' });
    }, [dispatch]);

    return (
        <article className='site-forms main-margin'>
            <div className='form-header'>
                <div className='logo-container'>
                    <Logo />
                </div>
                <h2>Sign up</h2>
                <ErrorNotification />
            </div>

            <form className='form' autoComplete='off' onSubmit={handleSubmit}>
                <div className='form-container'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        required
                        value={email}
                        onChange={handleChange}
                        onBlur={handleOutOfFocus}
                    />
                </div>
                <div className='form-container'>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        name='username'
                        required
                        value={username}
                        onChange={handleChange}
                        onBlur={handleOutOfFocus}
                    />
                </div>
                <div className='form-container'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        required
                        value={password}
                        onChange={handleChange}
                        onBlur={handleOutOfFocus}
                        autoComplete='true'
                    />
                </div>
                <div className='form-container'>
                    <label htmlFor='repeatPassword'>Repeat Password</label>
                    <input
                        type='password'
                        name='repeatPassword'
                        required
                        value={repeatPassword}
                        onChange={handleChange}
                        onBlur={handleOutOfFocus}
                        autoComplete='true'
                    />
                </div>
                <Button action='Register' />
            </form>
        </article>
    );
};

export default publicPages(Register);
