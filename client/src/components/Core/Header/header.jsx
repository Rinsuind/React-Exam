import React from 'react';
import { ReactComponent as Logo } from '../../../logo.svg';
import { NavLink } from 'react-router-dom';
import Navigation from '../../Shared/navigation/navigation';

import './header.css';

const Header = (props) => {
    return (
        <header className='header'>
            <div className='wrapper'>
                <div className='nav-container'>
                    <div className='site-logo'>
                        <NavLink to='/'>
                            <Logo />
                        </NavLink>
                    </div>
                    <Navigation />
                </div>
            </div>
        </header>
    );
};

export default Header;
