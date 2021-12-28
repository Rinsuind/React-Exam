import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';

import './home.css';
import mainImg from '../../assets/main-img.jpg';

const Home = () => {
    const { auth } = useContext(AuthContext);
    return (
        <article className='home main-margin'>
            <div className='site-header'>
                <h1>Say goodbye to the boring reality, discover whole new worlds</h1>
                <p>Join us in an amazing adventure of mysteries, fantasies, romances. Let your imagination run free.</p>
                <div className='cta-container'>
                    {!auth.user ? (
                        <Link className='cta' to='login'>
                            Become a member
                        </Link>
                    ) : (
                        <Link className='cta' to='books'>
                            Start Reading
                        </Link>
                    )}
                </div>
            </div>
            <div className='media'>
                <img src={mainImg} alt='map' />
            </div>
        </article>
    );
};

export default Home;
