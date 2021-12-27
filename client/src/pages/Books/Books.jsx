import { Outlet } from 'react-router';
import requireAuth from '../../components/Hoc/authHoc';

import './Books.css';

const Books = () => {
    return (
        <article className='books main-margin'>
            <Outlet />
        </article>
    );
};

export default requireAuth(Books);
