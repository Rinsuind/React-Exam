import './footer.css';
const Footer = () => {
    return (
        <footer className='site-footer'>
            <div className='footer-wrapper footer-grid'>
                <div className='contacts'>
                    <h4>Contact Us</h4>
                    <address class='contacts'>
                        <p>623 Harrison St., 2nd Floor, San Francisco CA 94107</p>
                        <p>
                            <a href='tel:415-201-6370'>415-201-6370</a> <br />
                            <a href='mailto:bookstore@gmail.com'>bookstore@gmail.com</a>
                        </p>
                    </address>
                </div>
                <div className='account'>
                    <h4>Account</h4>
                    <ul className='footer-flex'>
                        <li>
                            <a href='#'>Create Account</a>
                        </li>
                        <li>
                            <a href='#'>Sing In</a>
                        </li>
                        <li>
                            <a href='#'>Android App</a>
                        </li>
                    </ul>
                </div>
                <div className='company'>
                    <h4>Company</h4>
                    <ul className='footer-flex'>
                        <li>
                            <a href='#'>About Bookstore</a>
                        </li>
                        <li>
                            <a href='#'>For Business</a>
                        </li>
                        <li>
                            <a href='#'>Partners</a>
                        </li>
                        <li>
                            <a href='#'>Careers</a>
                        </li>
                    </ul>
                </div>
                <div className='resources'>
                    <h4>Resources</h4>
                    <ul className='footer-flex'>
                        <li>
                            <a href='#'>Books directory</a>
                        </li>
                        <li>
                            <a href='#'>Help center</a>
                        </li>
                        <li>
                            <a href='#'>Privacy & terms</a>
                        </li>
                    </ul>
                </div>

                <div className='footer-icons'>
                    <div className='icon-container'>
                        <a href='#'>
                            <i className='fab fa-facebook'></i>
                        </a>
                        <a href='#'>
                            <i class='fab fa-twitter'></i>
                        </a>
                        <a href='#'>
                            <i class='fab fa-instagram'></i>
                        </a>
                    </div>

                    <p class='copyright'>
                        Copyright &copy; <span class='year'></span> by Bookstore Inc. All rights reserved &reg;
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
