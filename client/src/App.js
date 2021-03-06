import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Footer from './components/Core/Footer/footer';
import Header from './components/Core/Header/header';
import NotFound from './pages/NotFound/notFound';
import Register from './pages/Register/register';
import Login from './pages/Login/login';
import Books from './pages/Books/Books';
import BookView from './components/Shared/bookView/bookView';
import BookShelf from './components/Shared/bookShelf/bookShelf';
import CreateAnOffer from './pages/CreateAnOffer/createAnOffer';
import UserProfile from './pages/UserProfile/profile';
import CheckOut from './pages/CheckOut/checkOut';
import getNewToken from './axios/auth/getToken';

import './App.css';

function App() {
    setTimeout(getNewToken, 1799990);
    return (
        <div className='App' role='img' aria-label='blue background whit snowflakes'>
            <Header />
            <main className='site-content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='register' element={<Register />} />
                    <Route path='login' element={<Login />} />
                    <Route path='books' element={<Books />}>
                        <Route path='/books' element={<BookShelf />} />
                        <Route path=':id' element={<BookView />} />
                    </Route>
                    <Route path='new/book' element={<CreateAnOffer />} />
                    <Route path='user/profile' element={<UserProfile />} />
                    <Route path='checkout' element={<CheckOut />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
