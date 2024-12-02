import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cartSlice'; // Import removeFromCart action
import { motion } from 'framer-motion';
import axios from 'axios';
import { Button } from '../../components/ui/Button';
import Spinner from '../../components/ui/Spinner';
import FadeInOnScroll from '../../utilities/FadeInOnScroll';
import AddPetProduct from './AddPetProduct'; // Import AddPetProduct form

const ProductCard = ({ product, onAddToCart, onRemoveFromCart, isAdmin }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
    >
      <div className="relative w-full h-48">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg"></div>
        )}
        <img
          src={product.images[0] || '/placeholder.svg'}
          alt={product.name}
          className={`w-full h-full object-contain rounded-lg transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">
          {product.currency} {product.price}
        </p>
        <Button
          clickEvent={isAdmin ? () => onRemoveFromCart(product) : () => onAddToCart(product)}
          classes={`w-full ${isAdmin ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white py-2 rounded transition-colors duration-300`}
        >
          {isAdmin ? 'Remove' : 'Add to Cart'}
        </Button>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [sortBy, setSortBy] = useState('name');
  const [filterCategory, setFilterCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/products`);
      const fetchedProducts = response.data.products;

      const uniqueCategories = [
        'All',
        ...new Set(fetchedProducts.map((product) => product.pet_type)),
      ];

      setProducts(fetchedProducts);
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const sortedAndFilteredProducts = products
    .filter((product) => filterCategory === 'All' || product.pet_type === filterCategory)
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      return a.name.localeCompare(b.name);
    });

  return (
    <FadeInOnScroll>
      <div
        className={`container mx-auto px-4 py-8 ${auth?.user?.role === 'Admin' ? 'bg-gradient-to-b from-red-50 to-red-200' : 'bg-gradient-to-b from-blue-50 to-blue-200'}`}
      >
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

        {/* Conditionally render AddPetProduct form for admin */}
        {auth?.user?.role === 'Admin' && (
          <div className="mb-8">
            <AddPetProduct />
          </div>
        )}

        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                buttonKey={category}
                clickEvent={() => setFilterCategory(category)}
                classes={`px-4 py-2 rounded-md transition-all duration-200 shadow-sm ${
                  filterCategory === category
                    ? auth?.user?.role === 'Admin'
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                    : auth?.user?.role === 'Admin'
                      ? 'bg-red-200 text-red-800 hover:bg-red-300'
                      : 'bg-blue-200 text-blue-800 hover:bg-blue-300'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>

          <div className="flex items-center">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-gray-400 transition duration-200"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
            </select>
          </div>
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedAndFilteredProducts.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
                isAdmin={auth?.user?.role === 'Admin'}
              />
            ))}
          </div>
        )}
      </div>
    </FadeInOnScroll>
  );
};

export default Products;
