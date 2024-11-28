import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { CardContent } from '../../components/ui/CardContent';
import { CardTitle } from '../../components/ui/CardTitle';
import { CardHeader } from '../../components/ui/CardHeader';
import { CardFooter } from '../../components/ui/CartFooter';

const Spinner = () => (
  <div className="flex justify-center items-center h-64">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function PetsPage() {
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        setLoading(true); // Show loading spinner
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/pets`
        ); // Replace with your API endpoint
        const data = await response.json();

        if (Array.isArray(data.pet)) {
          setPets(data.pet); // Set the fetched pets data
        } else {
          console.error('Invalid data format: expected an array of pets');
        }
      } catch (error) {
        console.error('Error fetching pets:', error);
      } finally {
        setLoading(false); // Hide loading spinner after fetching is complete
      }
    };

    fetchPets();
  }, []);

  // Ensure pets is always an array before calling .filter()
  const filteredAndSortedPets = (Array.isArray(pets) ? pets : [])
    .filter(
      (pet) =>
        pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.breed.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'age') return a.age - b.age;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="min-h-screen bg-blue-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Available Pets</h1>
        <div className="flex justify-between mb-6">
          <Input
            type="text"
            width="75%"
            placeholder="Search pets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-xs"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded p-2"
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
            <option value="age">Sort by Age</option>
          </select>
        </div>
        {loading ? (
          <Spinner /> // Show spinner while loading
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedPets.map((pet) => (
              <Card key={pet._id}>
                <CardHeader>
                  <img
                    src={pet.images[0] || '/placeholder.svg'}
                    alt={pet.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{pet.name}</CardTitle>
                  <p>
                    {pet.species} - {pet.breed}
                  </p>
                  <p>Age: {pet.age} years</p>
                  <p className="font-bold mt-2">
                    {pet.currency} {pet.price}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: pet.id,
                          name: pet.name,
                          price: pet.price,
                          quantity: 1,
                          image: pet.images[0],
                        })
                      )
                    }
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
