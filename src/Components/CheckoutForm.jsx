import React, { useState } from 'react';

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setShowAlert(true);
  };

  

  return (
    <div>
        <video className="background-video" autoPlay loop muted>
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
      </video>

      {/* Show alert message if form is submitted */}
      {showAlert && (
        <div className="alert">
          <p>
            Thank you, {formData.name}! We will be in contact with you soon. You will receive your order and pay upon delivery.
          </p>
        </div>
      )}

      
    <form onSubmit={handleSubmit} className="checkout-form">
      <div>
        <input
          type="text"
          name="name"
          placeholder='Your Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder='Your Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="phone"
          placeholder='Your Phone Number'
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <textarea
          name="address"
          placeholder='Your Address'
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <center>
      <button type="submit">Submit Order</button></center>
    </form></div>
  );
};

export default CheckoutForm;
