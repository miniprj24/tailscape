import { useState, useEffect } from 'react';
import { FaDog, FaUserShield, FaFish } from 'react-icons/fa';

const AuthPage = () => {
    const [mode, setMode] = useState('login');
    const [slideDirection, setSlideDirection] = useState('right');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideDirection('none');
        }, 500);
        return () => clearTimeout(timer);
    }, [mode]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `${mode.charAt(0).toUpperCase() + mode.slice(1)}: ${JSON.stringify(formData)}`
        );
        setFormData({ name: '', email: '', password: '' });
    };

    const switchMode = (newMode) => {
        if (newMode === 'admin') {
            setSlideDirection('bottom');
        } else if (mode === 'admin') {
            setSlideDirection('top');
        } else if (newMode === 'signup') {
            setSlideDirection('right');
        } else {
            setSlideDirection('left');
        }
        setMode(newMode);
    };

    const getSlideClass = () => {
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
        <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4 overflow-hidden">
            <div className="relative w-full max-w-4xl">
                <div className={`dog-face-ball -top-9 -left-9 absolute w-24 h-24 z-0 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-110 ${mode === 'admin' ? 'bg-red-200' : 'bg-blue-200'
                        }`}>
                    {/* Change this for dog face */}
                    <FaFish
                        className={`text-4xl transform rotate-45 transition-colors duration-500 ${mode === 'admin' ? 'text-red-600' : 'text-blue-600'
                            }`}
                    />
                </div>

                <div
                    className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-110 ${mode === 'admin' ? 'bg-red-200' : 'bg-blue-200'
                        }`}
                >
                    <FaFish
                        className={`text-4xl transform rotate-45 transition-colors duration-500 ${mode === 'admin' ? 'text-red-600' : 'text-blue-600'
                            }`}
                    />
                </div>

                <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                    <div className="md:flex">
                        <div className={`md:w-1/2 p-8 z-10 relative ${getSlideClass()}`}>
                            <h2
                                className={`text-3xl font-bold mb-6 text-center transition-colors duration-300 ${mode === 'admin' ? 'text-red-600' : 'text-blue-600'}`}
                            >
                                {mode === 'admin'
                                    ? 'Admin Access'
                                    : mode === 'signup'
                                        ? 'Join Our Pet Community'
                                        : 'Welcome Back'}
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {mode === 'signup' && (
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 rounded-md border-2 transition-colors duration-300 ${mode === 'admin'
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
                                    className={`w-full px-4 py-2 rounded-md border-2 transition-colors duration-300 ${mode === 'admin'
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
                                    className={`w-full px-4 py-2 rounded-md border-2 transition-colors duration-300 ${mode === 'admin'
                                            ? 'border-red-300 focus:border-red-500'
                                            : 'border-blue-300 focus:border-blue-500'
                                        } focus:outline-none`}
                                    required
                                />
                                <button
                                    type="submit"
                                    className={`w-full py-2 rounded-md transition-all duration-300 ${mode === 'admin'
                                            ? 'bg-red-500 text-white hover:bg-red-600'
                                            : 'bg-blue-500 text-white hover:bg-blue-600'
                                        }`}
                                >
                                    {mode === 'admin'
                                        ? 'Admin Login'
                                        : mode === 'signup'
                                            ? 'Create Account'
                                            : 'Sign In'}
                                </button>
                            </form>
                            {mode !== 'admin' && (
                                <div className="mt-6 text-center">
                                    <button
                                        onClick={() =>
                                            switchMode(mode === 'login' ? 'signup' : 'login')
                                        }
                                        className="text-blue-600 hover:underline transition-colors duration-300"
                                    >
                                        {mode === 'signup'
                                            ? 'Already have an account? Sign in'
                                            : 'New user? Create an account'}
                                    </button>
                                </div>
                            )}
                            <div className="mt-4 text-center">
                                <button
                                    onClick={() =>
                                        switchMode(mode === 'admin' ? 'login' : 'admin')
                                    }
                                    className={`${mode === 'admin' ? 'text-red-600' : 'text-gray-600'} hover:underline transition-colors duration-300`}
                                >
                                    {mode === 'admin' ? 'Back to User Login' : 'Admin Login'}
                                </button>
                            </div>
                        </div>
                        <div
                            className={`md:w-1/2 text-white p-8 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${mode === 'admin' ? 'bg-red-600' : 'bg-blue-600'
                                }`}
                        >
                            <h3 className="text-2xl font-bold mb-4">
                                {mode === 'admin' ? 'Admin Portal' : 'Pet Community Benefits'}
                            </h3>
                            <ul className="space-y-2">
                                {mode === 'admin' ? (
                                    <>
                                        <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                                            <FaUserShield className="mr-2" /> Manage user accounts
                                        </li>
                                        <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                                            <FaUserShield className="mr-2" /> Access analytics
                                        </li>
                                        <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                                            <FaUserShield className="mr-2" /> Control site settings
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                                            <FaDog className="mr-2" /> Exclusive pet care tips
                                        </li>
                                        <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                                            <FaFish className="mr-2" /> Special member discounts
                                        </li>
                                        <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                                            <FaDog className="mr-2" /> Community forums
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
