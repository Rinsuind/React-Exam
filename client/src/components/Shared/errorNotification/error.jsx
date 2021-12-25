import { useContext } from 'react';
import { AuthContext } from '../../../context/auth';

import './error.css';

const ErrorNotification = () => {
    const { auth } = useContext(AuthContext);
    return <p className='error-notification'>{auth.err}</p>;
};

export default ErrorNotification;
