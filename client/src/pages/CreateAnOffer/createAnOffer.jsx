import Button from '../../components/Shared/button/button';
import ErrorNotification from '../../components/Shared/errorNotification/error';
import useForm from '../../hooks/useRegister';
import { validator } from '../../validators';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { BookContext } from '../../context/books';
import customAxios from '../../axios';
import { RESPONSE_FAIL } from '../../types';
import requireAuth from '../../components/Hoc/authHoc';

import './createAnOffer.css';

const initialValue = {
    title: '',
    author: '',
    imageUrl: '',
    price: '',
    description: '',
};

const CreateAnOffer = (props) => {
    const navigate = useNavigate();
    const { dispatch } = useContext(BookContext);
    const [formState, handleChange] = useForm(initialValue);
    const { title, author, imageUrl, price, description } = formState;
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            customAxios.post('books', formState);
            navigate('/books');
        } catch (err) {
            dispatch({ type: RESPONSE_FAIL, payload: err.response.data });
        }
    };
    useEffect(() => {
        return () => dispatch({ type: RESPONSE_FAIL, payload: '' });
    }, []);

    const handleOutOfFocus = (e) => (e.target.className = validator(e, ''));
    return (
        <article className='site-forms create'>
            <div className='form-header'>
                <h2>Create An Offer</h2>
                <ErrorNotification />
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-container'>
                    <label htmlFor='title'>Title</label>
                    <input
                        type='text'
                        name='title'
                        autoComplete='off'
                        required
                        value={title}
                        onChange={handleChange}
                        onBlur={handleOutOfFocus}
                    />
                </div>
                <div className='form-container'>
                    <label htmlFor='author'>Author</label>
                    <input
                        type='text'
                        name='author'
                        autoComplete='off'
                        required
                        value={author}
                        onChange={handleChange}
                        onBlur={handleOutOfFocus}
                    />
                </div>
                <div className='form-container'>
                    <label htmlFor='imageUrl'>ImageUrl</label>
                    <input
                        type='text'
                        name='imageUrl'
                        autoComplete='off'
                        required
                        value={imageUrl}
                        onChange={handleChange}
                        onBlur={handleOutOfFocus}
                    />
                </div>
                <div className='form-container'>
                    <label htmlFor='price'>Price</label>
                    <input
                        type='number'
                        name='price'
                        autoComplete='off'
                        required
                        value={price}
                        onChange={handleChange}
                        onBlur={handleOutOfFocus}
                    />
                </div>
                <div className='form-container'>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        onChange={handleChange}
                        onBlur={handleOutOfFocus}
                        value={description}
                        name='description'
                    />
                </div>
                <Button action='Create' />
            </form>
        </article>
    );
};

export default requireAuth(CreateAnOffer);
