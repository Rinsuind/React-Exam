import { Link } from 'react-router-dom';
import './book.css';

const Book = ({ book }) => {
    const { _id, imageUrl } = book;
    return (
        <div className='book'>
            <div className='book-media'>
                <div className='inner'>
                    <img src={imageUrl} />
                </div>
            </div>
            <div className='book-content'>
                <Link to={`/books/${_id}`} className='book-btn'>
                    View
                </Link>
            </div>
        </div>
    );
};

export default Book;
