import './button.css';

const Button = ({ action, handler }) => {
    return (
        <button onClick={handler} className='button'>
            {action}
        </button>
    );
};

export default Button;
