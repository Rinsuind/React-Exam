import { Outlet } from 'react-router';
import requireAuth from '../../components/Hoc/authHoc';

import './Books.css';

const Books = () => {
    return (
        <article className='books'>
            <Outlet />
        </article>
    );
};

export default requireAuth(Books);
