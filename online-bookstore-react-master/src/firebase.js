// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

//  Yeh galat line : import { db } from "/src/firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbV4aNGa-5WsmLDBDbWXYuELlVsEm7Mac",
  authDomain: "onlinebookstore-c18fa.firebaseapp.com",
  projectId: "onlinebookstore-c18fa",
  storageBucket: "onlinebookstore-c18fa.firebasestorage.app",
  messagingSenderId: "296574686122",
  appId: "1:296574686122:web:162bdc4ac605b0b83cd1d3",
  measurementId: "G-7QTLH53K2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and export it
const db = getFirestore(app);

// Export the db object to use it in other files
export { db };
export const test = "Test";  
