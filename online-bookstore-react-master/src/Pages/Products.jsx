import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Optional for better navigation
import theWorldImage from "../assets/images/the_world.jpg";
import suitcaseImage from "../assets/images/suitcase.jpg";
import book3Image from "../assets/images/book3.jpg";
import nightImage from "../assets/images/night.jpg";

const productsData = [
  {
    id: 1,
    title: "The World of abstract art",
    price: 50,
    category: "Art",
    image: theWorldImage,
  },
  {
    id: 2,
    title: "A woman on a suitcase",
    price: 30,
    category: "Religion",
    image: suitcaseImage,
  },
  {
    id: 3,
    title: "Rich Dad",
    price: 80,
    category: "Finance",
    image: book3Image,
  },
  {
    id: 4,
    title: "Nightshade",
    price: 90,
    category: "Fiction",
    image: nightImage,
  },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...new Set(productsData.map((item) => item.category))];

  return (
    <div>
      <h1>Products</h1>

      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "8px", width: "200px" }}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: "8px", width: "200px" }}
        >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "250px",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h2>{product.title}</h2>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>

            <button
              onClick={() => addToCart(product)}
              style={{
                backgroundColor: "#5cb85c",
                color: "white",
                border: "none",
                padding: "10px 15px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>

            <button
              onClick={() => navigate("/cart")} // Change to window.location.href = "/cart" if not using router
              style={{
                backgroundColor: "#0275d8",
                color: "white",
                border: "none",
                padding: "10px 15px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              View My Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
