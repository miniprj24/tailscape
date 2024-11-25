import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaDog, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Button } from '../components/ui/Button';

export default function Header() {
  const cartItems = useSelector((state) => state.cart.items)
  const auth = useSelector((state) => state.auth)

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <FaDog className="text-2xl" />
          <span className="text-xl font-bold">TailScape</span>
        </NavLink>
        <nav>
          <ul className="flex space-x-4">
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/pets">Pets</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-2xl" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </NavLink>
          {auth.isAuthenticated ? (
            <NavLink to={auth.user?.role === 'admin' ? '/admin' : '/dashboard'}>
              <Button variant="ghost" size="sm">
                <FaUser className="mr-2" />
                {auth.user?.name}
              </Button>
            </NavLink>
          ) : (
            <NavLink to="/auth">
              <Button variant="ghost" size="sm">
                <FaUser className="mr-2" />
                Login
              </Button>
            </NavLink>
          )}
        </div>
      </div>
    </header>
  )
}

