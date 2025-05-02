// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGkMQXZSDJgULlsi-hYBgOnxXl5ZVZdbo",
  authDomain: "online-bookstore-react-master.firebaseapp.com",
  projectId: "online-bookstore-react-master",
  storageBucket: "online-bookstore-react-master.firebasestorage.app",
  messagingSenderId: "193707491383",
  appId: "1:193707491383:web:ccef3eadd9b88fe9ae7fb2",
  measurementId: "G-BR85SG8HD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);