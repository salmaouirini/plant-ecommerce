import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../Style.css'; // Ensure you have your CSS file imported

const ProductCard = ({ product }) => {
  const { cart, addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
  };

  return (
    <div className="card-container">
      <Link to={`/product/${product.id}`}>
        <h3>{product.name}</h3>
        <img src={product.image} alt={product.name} className="product-image" />
        <p>{product.price} $</p>
      </Link>
      <button className="add-button" onClick={handleAddToCart}>
        {isAdded ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
