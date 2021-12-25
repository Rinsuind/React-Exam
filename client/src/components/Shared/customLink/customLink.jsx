import { NavLink } from 'react-router-dom';
import './customLink.css';

const CustomLink = ({ name, path }) => {
    return (
        <li className='custom-link'>
            <NavLink activeclassname='active' to={path}>
                {name}
            </NavLink>
        </li>
    );
};

export default CustomLink;
