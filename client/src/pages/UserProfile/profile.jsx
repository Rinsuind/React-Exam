import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/auth';
import customAxios from '../../axios';
import { RESPONSE_FAIL, RESPONSE_SUCCESS } from '../../types';
import requireAuth from '../../components/Hoc/authHoc';
import Button from '../../components/Shared/button/button';

import './profile.css';

const UserProfile = (props) => {
    const {
        auth: {
            user: { email, username, boughtBooks },
        },
    } = useContext(AuthContext);

    return (
        <article className='profile main-margin'>
            <div className='avatar'>
                <i className='far fa-user-circle'></i>
            </div>
            <p>Email: {email}</p>
            <p>User: {username}</p>
            <p>Products Bought: {boughtBooks} Books</p>
            <div className='action-container'>
                <Button action='Reset Password' />
            </div>
        </article>
    );
};

export default requireAuth(UserProfile);
