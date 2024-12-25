import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      console.log("Fetching product details...");
      try {
        const response = await axios.get(`/api/products/${id}`);
        console.log("Product fetched:", response.data);
        setProduct(response.data); // Set the fetched product data
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Error fetching product details."); // Set error message
        setLoading(false); // Stop loading on error
      }
    };
    
    fetchProductDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!product) return <p>No product details available.</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>{product.name || "Product Name Unavailable"}</h1>
      <img
        src={product.image || "/default-image.png"} // Use a default image if not available
        alt={product.name || "Product Image"}
        style={{
          width: "300px",
          height: "300px",
          objectFit: "cover",
          marginBottom: "20px",
        }}
      />
      <p>{product.description || "No description available."}</p>
      <p style={{ fontWeight: "bold" }}>Price: ₹{product.price || "N/A"}</p>
      <div>
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="number"
          id="quantity"
          defaultValue={1}
          style={{ width: "50px", marginRight: "10px" }}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          Buy Now
        </button>
        <button
          style={{
            padding: "10px 15px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>
      </div>
      <div style={{ marginTop: "30px" }}>
        <h3>Reviews</h3>
        {product.reviews && product.reviews.length > 0 ? (
          <ul>
            {product.reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
