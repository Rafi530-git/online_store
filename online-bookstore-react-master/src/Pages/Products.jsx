import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc } from "firebase/firestore";
import { setDoc } from "firebase/firestore";
const Products = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksCollection = collection(db, "books");
        const bookSnapshot = await getDocs(booksCollection);
        const bookList = bookSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBooks(bookList);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      }
    });

    fetchBooks();
    return () => unsubscribe();
  }, []);


const addToCart = async (book) => {
  const user = auth.currentUser;
  if (!user) {
    alert("Please log in to add items to your cart.");
    return;
  }

  const userCartRef = doc(db, "member", user.uid);
  const userDoc = await getDoc(userCartRef);

  let cart = [];
  if (userDoc.exists()) {
    cart = userDoc.data().cart || [];
  }

  const existingItemIndex = cart.findIndex((item) => item.id === book.id);
  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({ ...book, quantity: 1 });
  }

  await setDoc(userCartRef, { cart }, { merge: true });
  alert("Book added to cart!");
};


  const categories = ["All", ...new Set(books.map((book) => book.category))];

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.bookName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontFamily: "Oregano", fontSize: "36px", marginBottom: "20px" }}>
        📚 Book Store
      </h1>

      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: "10px",
            width: "200px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              padding: "15px",
              width: "260px",
              transition: "transform 0.3s",
              backgroundColor: "#fff",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {book.image && (
              <img
                src={book.image}
                alt={book.bookName}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            )}
            <h2 style={{ fontSize: "18px", margin: "10px 0" }}>{book.bookName}</h2>
            <p style={{ margin: "5px 0", fontWeight: "500" }}>🧠 {book.category}</p>
            <p style={{ margin: "5px 0", fontStyle: "italic" }}>✍️ {book.writer}</p>
            <p style={{ margin: "5px 0", fontWeight: "bold" }}>${book.price}</p>

            <button
              onClick={() => addToCart(book)}
              style={{
                backgroundColor: "#5cb85c",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              ➕ Add to Cart
            </button>

            <button
              onClick={() => navigate("/cart")}
              style={{
                backgroundColor: "#0275d8",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
                width: "100%",
              }}
            >
              📖 View My Books
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
