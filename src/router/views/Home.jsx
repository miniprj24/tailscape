import React, { useEffect, useState } from 'react';
import { FaDog, FaCat, FaFish, FaFeather } from 'react-icons/fa';
import ProductCard from '../../components/ProductCard';
import CategoryCard from '../../components/CategoryCard';

export default function Home() {
  const [products, setProducts] = useState([]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();

        // Shuffle and get 4 random products
        const shuffled = data.products.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 4);

        setProducts(selected);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50">
      <main>
        {/* Hero Section */}
        <section className="relative h-96">
          <img
            src="/placeholder.svg?height=400&width=1200"
            alt="Happy pets and owners"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Welcome to TailScape</h1>
              <p className="text-xl">Your one-stop shop for all pet needs</p>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12 px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                name={product.name}
                price={product.price}
                image={product.image || '/placeholder.svg?height=200&width=200'}
              />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 px-4 bg-blue-100">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CategoryCard name="Dogs" icon={<FaDog className="text-4xl" />} />
            <CategoryCard name="Cats" icon={<FaCat className="text-4xl" />} />
            <CategoryCard name="Fish" icon={<FaFish className="text-4xl" />} />
            <CategoryCard
              name="Birds"
              icon={<FaFeather className="text-4xl" />}
            />
          </div>
        </section>

        {/* Special Offers */}
        <section className="py-12 px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Special Offers
          </h2>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            <div className="flex-none w-64 h-40 bg-blue-200 rounded-lg flex items-center justify-center">
              <p className="text-xl font-semibold">20% Off Dog Toys</p>
            </div>
            <div className="flex-none w-64 h-40 bg-blue-200 rounded-lg flex items-center justify-center">
              <p className="text-xl font-semibold">Free Cat Food Sample</p>
            </div>
            <div className="flex-none w-64 h-40 bg-blue-200 rounded-lg flex items-center justify-center">
              <p className="text-xl font-semibold">
                Buy 2 Get 1 Free on Fish Food
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
