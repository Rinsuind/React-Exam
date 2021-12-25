import './home.css';
import mainImg from '../../assets/main-img.jpg';

const Home = () => {
    return (
        <article className='home'>
            <div className='site-header'>
                <h1>Some Random text</h1>
            </div>
            <div className='media'>
                <img src={mainImg} alt='map' />
            </div>
        </article>
    );
};

export default Home;
