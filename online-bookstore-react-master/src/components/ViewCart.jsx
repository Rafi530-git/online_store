import React, { useEffect, useState } from 'react';

const ViewCart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    }, []);

    return (
        <div className="container mt-5">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <div className="row">
                    {cartItems.map((item, index) => (
                        <div className="col-md-3" key={index}>
                            <div className="card">
                                <img src={item.image} alt={item.name} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">Rs {item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ViewCart;
