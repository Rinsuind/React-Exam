import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Footer from './components/Core/Footer/footer';
import Header from './components/Core/Header/header';
import NotFound from './pages/NotFound/notFound';
import Register from './pages/Register/register';
import Login from './pages/Login/login';

import './App.css';

function App() {
    return (
        <div className='App' role='img' aria-label='blue background whit snowflakes'>
            <Header />
            <main className='site-content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='register' element={<Register />} />
                    <Route path='login' element={<Login />} />
                    <Route path='*' element={<NotFound />} />
                    <Route path='books' element={<Books />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
