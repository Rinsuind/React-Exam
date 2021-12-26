import Button from '../button/button';
import ErrorNotification from '../errorNotification/error';
import { useContext } from 'react';
import { BookContext } from '../../../context/books';
import useForm from '../../../hooks/useRegister';
import customAxios from '../../../axios';
import { UPDATE_BOOK, RESPONSE_FAIL } from '../../../types';

import './editForm.css';

const EditForm = ({ editBook }) => {
    const { shelf, dispatch } = useContext(BookContext);
    const [formState, handleChange] = useForm(shelf.book);
    const { title, author, imageUrl, price, description } = formState;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await customAxios.patch(`books/${shelf.book._id}`, {
                title,
                author,
                imageUrl,
                price,
                description,
            });
            dispatch({ type: UPDATE_BOOK, payload: response.data });

            editBook();
        } catch (err) {
            dispatch({ type: RESPONSE_FAIL, payload: err.response.data });
        }
    };

    return (
        <article className='edit-form'>
            <ErrorNotification />
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-container'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' autoComplete='off' required value={title} onChange={handleChange} />
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
                    />
                </div>
                <div className='form-container'>
                    <label htmlFor='description'>Description</label>
                    <textarea onChange={handleChange} value={description} name='description' />
                </div>
                <div className='edit-btn'>
                    <Button action='Save' handler={handleSubmit} />
                    <Button action='Cancel' handler={editBook} />
                </div>
            </form>
        </article>
    );
};

export default EditForm;
