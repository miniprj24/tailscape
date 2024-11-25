import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import { motion } from 'framer-motion';
import axios from 'axios'

const Spinner = () => (
  <div className="flex justify-center items-center h-64">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
)

const ProductCard = ({ product, onAddToCart }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative w-full h-48">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg"></div>
        )}
        <img
          src={product.images[0] || '/placeholder.svg'}
          alt={product.name}
          className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">
          {product.currency} {product.price}
        </p>
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  )
}

const Products = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState(['All'])
  const [sortBy, setSortBy] = useState('name')
  const [filterCategory, setFilterCategory] = useState('All')
  const [loading, setLoading] = useState(true) // Added loading state
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true) // Show spinner
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/products`) // Replace with your API endpoint
        const fetchedProducts = response.data.products

        const uniqueCategories = [
          'All',
          ...new Set(fetchedProducts.map((product) => product.pet_type))
        ]

        setProducts(fetchedProducts)
        setCategories(uniqueCategories)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false) // Hide spinner
      }
    }

    fetchProducts()
  }, [])

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  const sortedAndFilteredProducts = products
    .filter(
      (product) =>
        filterCategory === 'All' || product.pet_type === filterCategory
    )
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price
      return a.name.localeCompare(b.name)
    })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="flex justify-between mb-6">
        <div className="space-x-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`px-4 py-2 rounded ${
                filterCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded p-2"
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>
      {loading ? (
        <Spinner /> // Show spinner while loading
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedAndFilteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Products
