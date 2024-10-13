import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import '../Style.css'; // Import your CSS file

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      console.log(`Fetching product with ID: ${id}`);
      try {
        const response = await axios.get(`/data/plants.json`); // Fetch all plants
        const productData = response.data.find((item) => item.id === parseInt(id)); // Find the specific product by ID

        if (productData) {
          console.log('Fetched product data:', productData);
          setProduct(productData);
        } else {
          console.error(`Product with ID ${id} not found`);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className="details-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
