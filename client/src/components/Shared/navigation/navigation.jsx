import CustomLink from '../customLink/customLink';
import './navigation.css';
import { useContext } from 'react';
import { AuthContext } from '../../../context/auth';
import LogOut from '../logout/logout';

const Navigation = () => {
    const {
        auth: { user },
    } = useContext(AuthContext);

    const arr = [
        { name: 'create offer', path: 'books/new', status: true },
        { name: 'books', path: 'books', status: true },
        { name: 'log in', path: 'login', status: false },
        { name: 'register', path: 'register', status: false },
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
            </ul>
        </nav>
    );
};

export default Navigation;
