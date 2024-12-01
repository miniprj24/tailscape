import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/authSlice';
import { FaDog, FaUserShield, FaFish } from 'react-icons/fa';

const AuthPage = () => {
  const [mode, setMode] = useState('login');
  const [slideLeftDirection, setSlideLeftDirection] = useState('right');
  const [slideRightDirection, setSlideRightDirection] = useState('left');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideLeftDirection('none');
      setSlideRightDirection('none');
    }, 500);
    return () => clearTimeout(timer);
  }, [mode]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Determine the API endpoint based on the mode
    const endpoint =
      mode === 'signup' || mode === 'adminSignup'
        ? `${import.meta.env.VITE_BASE_URL}/api/auth/signup`
        : `${import.meta.env.VITE_BASE_URL}/api/auth/login`;

    // Determine the UIOrigin based on the current mode
    const UIOrigin = mode === 'admin' || mode === 'adminSignup' ? 'admin' : 'user';

    // Prepare the payload
    const payload =
      mode === 'signup' || mode === 'adminSignup'
        ? { name: formData.name, email: formData.email, password: formData.password, UIOrigin }
        : { ...formData, UIOrigin };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      // Dispatch the login action with token and user data
      dispatch(
        login({
          token: data.token, // JWT from API response
          id: data.id,
          name: data.name,
          email: data.email,
          role: data.role,
        })
      );

      // Navigate based on user role
      if (data.role === 'Admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const switchMode = (newMode) => {
    if (newMode === 'admin') {
      setSlideLeftDirection('bottom');
      setSlideRightDirection('top');
    } else if (mode === 'admin' || mode === 'adminSignup') {
      setSlideLeftDirection('top');
      setSlideRightDirection('bottom');
    } else if (newMode === 'signup' || newMode === 'adminSignup') {
      setSlideLeftDirection('right');
      setSlideRightDirection('left');
    } else {
      setSlideLeftDirection('left');
      setSlideRightDirection('right');
    }
    setMode(newMode);
  };

  const getSlideClass = (slideDirection) => {
    switch (slideDirection) {
      case 'left':
        return 'animate-slide-left';
      case 'right':
        return 'animate-slide-right';
      case 'bottom':
        return 'animate-slide-up';
      case 'top':
        return 'animate-slide-down';
      default:
        return '';
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 overflow-hidden transition-colors duration-500 ${
        mode === 'admin' || mode === 'adminSignup' ? 'bg-red-100' : 'bg-blue-100'
      }`}
    >
      <div className="relative w-full max-w-4xl">
        <div
          className={`absolute -top-9 -left-9 w-24 h-24 z-0 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-110 ${
            mode === 'admin' || mode === 'adminSignup' ? 'bg-red-200' : 'bg-blue-200'
          }`}
        >
          <FaDog
            className={`text-4xl transform transition-colors duration-500 ${
              mode === 'admin' || mode === 'adminSignup' ? 'text-red-600' : 'text-blue-600'
            }`}
          />
        </div>
        <div
          className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-110 ${
            mode === 'admin' || mode === 'adminSignup' ? 'bg-red-200' : 'bg-blue-200'
          }`}
        >
          <FaFish
            className={`text-4xl transform rotate-45 transition-colors duration-500 ${
              mode === 'admin' || mode === 'adminSignup' ? 'text-red-600' : 'text-blue-600'
            }`}
          />
        </div>
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className={`md:w-1/2 p-8 z-10 relative ${getSlideClass(slideLeftDirection)}`}>
              <h2
                className={`text-3xl font-bold mb-6 text-center transition-colors duration-300 ${
                  mode === 'admin' || mode === 'adminSignup' ? 'text-red-600' : 'text-blue-600'
                }`}
              >
                {mode === 'admin'
                  ? 'Admin Access'
                  : mode === 'adminSignup'
                    ? 'Admin Signup'
                    : mode === 'signup'
                      ? 'Join Our Pet Community'
                      : 'Welcome Back!'}
              </h2>
              {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}
              <form onSubmit={handleSubmit} className="space-y-4">
                {(mode === 'signup' || mode === 'adminSignup') && (
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md border-2 transition-colors duration-300 ${
                      mode === 'adminSignup'
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-blue-300 focus:border-blue-500'
                    } focus:outline-none`}
                    required
                  />
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-md border-2 transition-colors duration-300 ${
                    mode === 'admin' || mode === 'adminSignup'
                      ? 'border-red-300 focus:border-red-500'
                      : 'border-blue-300 focus:border-blue-500'
                  } focus:outline-none`}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-md border-2 transition-colors duration-300 ${
                    mode === 'admin' || mode === 'adminSignup'
                      ? 'border-red-300 focus:border-red-500'
                      : 'border-blue-300 focus:border-blue-500'
                  } focus:outline-none`}
                  required
                />
                <button
                  type="submit"
                  className={`w-full py-2 rounded-md transition-all duration-300 ${
                    mode === 'admin' || mode === 'adminSignup'
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  {mode === 'adminSignup'
                    ? 'Sign Up as Admin'
                    : mode === 'signup'
                      ? 'Create Account'
                      : 'Sign In'}
                </button>
              </form>
              <div className="mt-6 text-center">
                {mode === 'adminSignup' ? (
                  <button
                    onClick={() => switchMode('admin')}
                    className="text-red-600 hover:underline transition-colors duration-300"
                  >
                    Already have an account? Sign in
                  </button>
                ) : mode === 'admin' ? (
                  <button
                    onClick={() => switchMode('adminSignup')}
                    className="text-red-600 hover:underline transition-colors duration-300"
                  >
                    New User? Create an account
                  </button>
                ) : (
                  <button
                    onClick={() => switchMode(mode === 'login' ? 'signup' : 'login')}
                    className="text-blue-600 hover:underline transition-colors duration-300"
                  >
                    {mode === 'signup'
                      ? 'Already have an account? Sign in'
                      : 'New User? Create an account'}
                  </button>
                )}
              </div>
              <div className="mt-4 text-center">
                {mode === 'adminSignup' || mode === 'admin' ? (
                  <button
                    onClick={() => switchMode(mode === 'admin' ? 'login' : 'admin')}
                    className="text-gray-600 hover:underline transition-colors duration-300"
                  >
                    {mode === 'admin' ? 'Back to User Login' : 'Admin Login'}
                  </button>
                ) : (
                  <button
                    onClick={() => switchMode('admin')}
                    className="text-gray-600 hover:underline transition-colors duration-300"
                  >
                    Admin Login
                  </button>
                )}
              </div>
            </div>
            <div
              className={`right-side md:w-1/2 text-white p-8 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${getSlideClass(
                slideRightDirection
              )} ${
                mode === 'admin' || mode === 'adminSignup'
                  ? 'bg-gradient-to-t from-red-700 to-red-500'
                  : 'bg-gradient-to-t from-blue-700 to-blue-500'
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">
                {mode === 'admin' || mode === 'adminSignup'
                  ? 'Admin Portal'
                  : 'Pet Community Benefits'}
              </h3>
              <ul className="space-y-2">
                {mode === 'admin' || mode === 'adminSignup' ? (
                  <>
                    <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                      <FaUserShield className="mr-2" /> Manage user accounts
                    </li>
                    <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                      <FaUserShield className="mr-2" /> Access analytics
                    </li>
                    <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                      <FaUserShield className="mr-2" /> Configure system settings
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                      <FaDog className="mr-2" /> Track your pet’s progress
                    </li>
                    <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                      <FaDog className="mr-2" /> Access resources
                    </li>
                    <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                      <FaDog className="mr-2" /> Connect with experts
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
