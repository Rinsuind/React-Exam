import requireAuth from '../../components/Hoc/authHoc';

import './Books.css';

const Books = () => {
    return <article className='books'>works</article>;
};

export default requireAuth(Books);
