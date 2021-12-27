import CustomLink from '../customLink/customLink';
import './navigation.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/auth';
import LogOut from '../logout/logout';

const Navigation = () => {
    const {
        auth: { user },
    } = useContext(AuthContext);

    const arr = [
        { name: 'create offer', path: 'new/book', status: true },
        { name: 'books', path: 'books', status: true },
        { name: 'log in', path: 'login', status: false },
        { name: 'register', path: 'register', status: false },
        { name: 'profile', path: 'user/profile', status: true },
    ];
    return (
        <nav className='navigation'>
            <ul>
                {arr
                    .filter((link) => link.status === !!user)
                    .map(({ name, path }, i) => (
                        <CustomLink key={i} name={name} path={path} />
                    ))}
                {user && <LogOut />}
                {user && (
                    <li className='icon'>
                        <p>{user.checkOutBooks.length}</p>
                        <Link to='checkout'>
                            <i className='fas fa-shopping-cart'></i>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
