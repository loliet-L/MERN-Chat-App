import { useState , useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import { UserContext } from '../contex/user.contex.jsx';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const { setUser } = useContext(UserContext);
  const navuigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    axios.post('/users/login', {
      email,
      password
    }).then((res) => {
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      navuigate('/');
    }).catch((err) => {
      console.log(err.response.data);
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
        <form onSubmit={submitHandler} >
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
            <input
              onChange={(email) => setemail(email.target.value)}
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
            Login
          </button>
        </form>
        <p className="text-gray-400 mt-4 text-center">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
