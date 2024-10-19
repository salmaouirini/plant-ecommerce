import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Navbar from '../Components/Navbar';
import '../Style.css'; // Make sure your CSS is imported

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
       <Navbar />
    <div className="cart-container">
      
      <video className="background-video" autoPlay loop muted>
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
      </video>

      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div className="cart-item" key={item.id}>
            <div className="cart-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className='cart-item-details'>
              <strong>{item.name}</strong> - ${item.price.toFixed(2)}
            </div>
            <div className="cart-item-actions">
              <input
                type="number"
                className="quantity-input"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              />
              <button onClick={() => removeFromCart(item.id)}><i className="fas fa-trash"></i></button>
            </div>
          </div>
        ))
      )}
      <h2 className="total-price">Total: ${calculateTotal()}</h2>
    </div>
    <Link to="/checkout">
      <center>
      <button className="checkout-btn">Proceed to Checkout</button></center>
    </Link>
    </div>
  );
};

export default Cart;
