import { NavLink } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About TailScape</h3>
            <p>Your trusted partner in pet care and products.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><NavLink to="/products">Products</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <NavLink to="#" className="text-2xl"><FaFacebook /></NavLink>
              <NavLink to="#" className="text-2xl"><FaTwitter /></NavLink>
              <NavLink to="#" className="text-2xl"><FaInstagram /></NavLink>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 TailScape. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

