import React from 'react';
import CheckoutForm from '../Components/CheckoutForm';

const Checkout = () => {
  const handleSubmit = (formData) => {
    console.log('Order Data:', formData);
  };

  return (
    <div>
      <CheckoutForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Checkout;
