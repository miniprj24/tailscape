import { useState } from 'react';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

export default function AddPetProduct() {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    price: '',
    quantity: '',
    currency: '',
    images: [],
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        images: [file],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'images' && formData.images[0]) {
        formDataToSend.append(key, formData.images[0]);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/pet-products`,
        {
          method: 'POST',
          body: formDataToSend,
        }
      );

      if (response.ok) {
        setSuccessMessage('Product added successfully!');
        setFormData({
          productName: '',
          description: '',
          price: '',
          quantity: '',
          currency: '',
          images: [],
        });
        setError('');
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to add product.');
        setSuccessMessage('');
      }
    } catch (error) {
      setError('Error submitting form. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white shadow-md rounded-lg space-y-4 border border-gray-200"
    >
      <h2 className="text-lg font-semibold text-gray-700 mb-2">
        Add New Pet Product
      </h2>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <Input
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Product Description"
          required
        />
        <Input
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          type="number"
          required
        />
        <Input
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          type="number"
          required
        />
        <Input
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          placeholder="Currency (e.g., USD)"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Upload Product Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-50 file:text-red-700 hover:file:bg-red-100"
        />
      </div>

      <Button
        type="submit"
        classes="w-full py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600"
      >
        Add Product
      </Button>
    </form>
  );
}
