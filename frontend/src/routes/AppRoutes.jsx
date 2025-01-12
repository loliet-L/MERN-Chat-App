import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Login from '../screens/Login';
import Register from '../screens/register';
import Home from '../screens/Home';
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes