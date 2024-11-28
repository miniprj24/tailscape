import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaDog, FaShoppingCart, FaUser } from 'react-icons/fa';

export default function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const auth = useSelector((state) => state.auth);

  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold tracking-wide hover:text-gray-300 transition duration-200"
        >
          <FaDog className="text-3xl" />
          <span>TailScape</span>
        </NavLink>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <NavLink
                to="/products"
                className="hover:text-gray-300 transition duration-200"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pets"
                className="hover:text-gray-300 transition duration-200"
              >
                Pets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="hover:text-gray-300 transition duration-200"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-gray-300 transition duration-200"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-gray-300 transition duration-200"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Cart and User Links */}
        <div className="flex items-center space-x-6">
          {/* Shopping Cart Link */}
          <NavLink
            to="/cart"
            className="group relative flex items-center p-2 hover:bg-gray-800 rounded-md transition duration-200"
          >
            <FaShoppingCart className="text-2xl group-hover:text-gray-300 transition duration-200" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </NavLink>

          {/* User Authentication/Navigation */}
          {auth.isAuthenticated ? (
            <NavLink
              to={auth.user?.role === 'admin' ? '/admin' : '/dashboard'}
              className="flex items-center p-2 hover:bg-gray-800 rounded-md transition duration-200"
            >
              <FaUser className="text-xl mr-2 group-hover:text-gray-300 transition duration-200" />
              <span className="text-lg font-medium">{auth.user?.name}</span>
            </NavLink>
          ) : (
            <NavLink
              to="/auth"
              className="flex items-center p-2 hover:bg-gray-800 rounded-md transition duration-200"
            >
              <FaUser className="text-xl mr-2 group-hover:text-gray-300 transition duration-200" />
              <span className="text-lg font-medium group-hover:text-gray-300">
                Login
              </span>
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}
