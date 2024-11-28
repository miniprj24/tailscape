import PropTypes from 'prop-types';
import { Button } from '../components/ui/Button';

export default function ProductCard({ name, price, image }) {
  // Safely format price
  const formattedPrice = typeof price === 'number' ? price.toFixed(2) : 'N/A';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={name || 'Unnamed Product'}
        width={200}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          {name || 'Unnamed Product'}
        </h3>
        <p className="text-blue-600 font-bold">${formattedPrice}</p>
        <Button classes="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

// Prop validation
ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string.isRequired,
};

// Default props
ProductCard.defaultProps = {
  name: 'Unnamed Product',
  price: null, // No price by default
};
