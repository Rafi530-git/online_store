import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
// inside the component
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Alert,
  Badge,
} from "react-bootstrap";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCart = async () => {
      const user = auth.currentUser;
      if (!user) {
        alert("Please log in to view your cart.");
        return;
      }

      const userCartRef = doc(db, "member", user.uid);
      const userDoc = await getDoc(userCartRef);

      if (userDoc.exists()) {
        setCartItems(userDoc.data().cart || []);
      }
    };

    fetchCart();
  }, []);

  const updateCart = async (updatedCart) => {
    const user = auth.currentUser;
    if (!user) return;

    const userCartRef = doc(db, "member", user.uid);
    await setDoc(userCartRef, { cart: updatedCart }, { merge: true });
    setCartItems(updatedCart);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );
    updateCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <Alert variant="info">Your cart is empty.</Alert>
      ) : (
        <>
          <Row xs={1} md={2} lg={3} className="g-4">
            {cartItems.map((item) => (
              <Col key={item.id}>
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.bookName}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.bookName}</Card.Title>
                    <Card.Text>
                      <strong>Price:</strong> ${item.price}
                      <br />
                      <strong>Quantity:</strong>{" "}
                      <Badge bg="secondary">{item.quantity}</Badge>
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <Button
                          size="sm"
                          variant="outline-primary"
                          onClick={() => increaseQuantity(item.id)}
                          className="me-2"
                        >
                          +
                        </Button>
                        <Button
                          size="sm"
                          variant="outline-primary"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </Button>
                      </div>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="mt-4 text-end">
            <h4>
              Total:{" "}
              <span className="text-success">
                ${calculateTotal().toFixed(2)}
              </span>
            </h4>
            <Button
              variant="success"
              size="lg"
              className="mt-2"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
