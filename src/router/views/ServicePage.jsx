import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6">Our Services</h1>
        <p className="text-lg text-blue-700 mb-12 max-w-3xl mx-auto">
          Everything your pet needs, all in one place! From finding the perfect furry companion to shopping for high-quality pet products,
          we’ve got you covered. Whether it’s expert veterinary care or personalized in-store guidance, our services are designed to ensure the health, happiness, and comfort of your beloved pets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1: Buying Animals */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img
              src="/images/animals.jpg"
              alt="Buying Animals"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-800">Buying Animals</h2>
              <p className="text-blue-600 mt-2 mb-4">
                Explore and purchase a delightful variety of small pets, including adorable kittens, playful puppies, vibrant birds, and unique creatures like insects and small exotic animals.
                Our selection focuses on pets that are perfect for households and can be conveniently delivered to your doorstep, ensuring a seamless and caring experience as you welcome your new companion.
              </p>
              <Link
                to="/pets"
                className="inline-block bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Explore Pets
              </Link>
            </div>
          </div>

          {/* Service 2: Animal-Related Products */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img
              src="/images/products.jpg"
              alt="Animal Products"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-800">Animal-Related Products</h2>
              <p className="text-blue-600 mt-2 mb-4">
                Shop a curated selection of essential pet food to keep your furry, feathery, or scaly friends happy and healthy! From nutrient-rich meals for puppies and kittens to specialized diets for birds and small animals,
                we ensure that every bite supports their well-being and vitality. Explore our premium range of pet food tailored to meet the unique dietary needs of your beloved companions.
              </p>
              <Link
                to="/products"
                className="inline-block bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Shop Products
              </Link>
            </div>
          </div>

          {/* Service 3: Book Store Appointment */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img
              src="/images/store-appointment.jpg"
              alt="Store Appointment"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-800">Book Store Appointment</h2>
              <p className="text-blue-600 mt-2 mb-4">
                Want to personally explore our pets and products? Book a visit to our store and get a chance to meet our adorable animals, check out pet accessories, and make your purchases directly.
                Whether you're looking to adopt a new furry friend or pick up essential supplies, our friendly staff will assist you in making the best choices. Reserve your spot today and enjoy a personalized shopping experience!
              </p>
              <Link
                to="/StoreAppointment"
                className="inline-block bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Service 4: Book Veterinary Appointment */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img
              src="/images/vet-appointment.jpg"
              alt="Veterinary Appointment"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-800">Veterinary Appointment</h2>
              <p className="text-blue-600 mt-2 mb-4">
                Ensure your pet’s health with a consultation from our experienced veterinarians. If your pet shows signs of illness or needs a routine check-up, you can easily book an appointment online.
                Our skilled vets are ready to diagnose, treat, and offer advice, making sure your pet receives the best care. Schedule a visit today and give your pet the attention they deserve!
              </p>
              <Link
                to="/vet-appointment"
                className="inline-block bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;