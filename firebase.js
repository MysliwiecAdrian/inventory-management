// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD30A1jgC7KMxZH9kVYXulFGTnIYf-fnQ4",
  authDomain: "inventory-management-7b72b.firebaseapp.com",
  projectId: "inventory-management-7b72b",
  storageBucket: "inventory-management-7b72b.appspot.com",
  messagingSenderId: "350840086622",
  appId: "1:350840086622:web:8886ee529581d79d2654cf",
  measurementId: "G-TC6WWDREJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};