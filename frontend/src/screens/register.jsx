import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from '../config/axios';
const Register = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const navigator = useNavigate('');
    function submitHandler(e) {
        e.preventDefault();
        axios.post('/users/register',{
            email,
                password
        }).then((res) => {
            console.log(res.data);
            navigator('/');
        }).catch((err) => {
            console.log(err.response.data);
        });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Register</h2>
                <form onSubmit={submitHandler} >
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
                        <input
                            onChange={(Email) => setemail(Email.target.value)}
                            type="email"
                            id="email"
                            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-400 mb-2" htmlFor="password">Password</label>
                        <input
                            onChange={(password) => setpassword(password.target.value)}
                            type="password"
                            id="password"
                            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300"
                    >
                        Register
                    </button>
                </form>
                <p className="text-gray-400 mt-4 text-center">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;