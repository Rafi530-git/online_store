import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    navigate("/thankyou");
  };

  return (
    <div className="checkout-container" style={{ padding: "20px" }}>
      <h1>Checkout</h1>
      <form onSubmit={handlePlaceOrder} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <input type="text" placeholder="Full Name" required style={{ marginBottom: "10px", padding: "8px" }} />
        <input type="email" placeholder="Email" required style={{ marginBottom: "10px", padding: "8px" }} />
        <input type="text" placeholder="Address" required style={{ marginBottom: "10px", padding: "8px" }} />
        <input type="text" placeholder="City" required style={{ marginBottom: "10px", padding: "8px" }} />
        <input type="text" placeholder="Zip Code" required style={{ marginBottom: "10px", padding: "8px" }} />
        <button type="submit" style={{ padding: "10px", backgroundColor: "black", color: "white", cursor: "pointer" }}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
