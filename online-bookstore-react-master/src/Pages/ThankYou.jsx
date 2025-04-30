import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="thankyou-container" style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Thank You for Your Order!</h1>
      <p>Your order has been placed successfully.</p>
      <Link to="/">
        <button style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "black", color: "white", cursor: "pointer" }}>
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ThankYou;
