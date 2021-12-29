import './search.css';

const SearchForm = ({ handler }) => {
    return (
        <div className='search-form'>
            <input type='search' placeholder='Search' onChange={handler} name='search' autoComplete='off' />
        </div>
    );
};

export default SearchForm;
