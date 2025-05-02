// src/utils/addBooks.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import theWorldImage from "../assets/images/the_world.jpg";
import suitcaseImage from "../assets/images/suitcase.jpg";
import book3Image from "../assets/images/book3.jpg";
import nightImage from "../assets/images/night.jpg";
const booksData = [
  {
    title: "The World of Abstract Art",
    price: 50,
    category: "Art",
    image: theWorldImage,
  },
  {
    title: "A Woman on a Suitcase",
    price: 30,
    category: "Religion",
    image:suitcaseImage,
  },
  {
    title: "Rich Dad",
    price: 80,
    category: "Finance",
    image: book3Image,
  },
  {
    title: "Nightshade",
    price: 90,
    category: "Fiction",
    image: nightImage,
  },
];

export const addBooksToFirestore = async () => {
  try {
    const booksCollection = collection(db, "books");
    for (const book of booksData) {
      await addDoc(booksCollection, book);
    }
    console.log("Books added successfully!");
  } catch (error) {
    console.error("Error adding books: ", error);
  }
};
