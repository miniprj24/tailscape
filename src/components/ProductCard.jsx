import { Button } from '../components/ui/Button';

export default function ProductCard({ name, price, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} width={200} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-blue-600 font-bold">${price.toFixed(2)}</p>
        <Button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
