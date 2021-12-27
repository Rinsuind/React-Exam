import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound = () => {
    return (
        <article className='not-found'>
            <div>
                <span>
                    if (<span className='point'>!</span>
                    <span className='found'>found</span>) <span className='curly'>&#123;</span>
                    <p>
                        return <span className='err'>&quot;404&quot;</span>
                    </p>
                    <span className='curly'>&#125;</span>
                </span>
            </div>
            <Link className='take-me-home' to='/'>
                takeMeHome <span className='brackets'>()</span>
            </Link>
        </article>
    );
};

export default NotFound;
