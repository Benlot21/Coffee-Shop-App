// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDryUU1-1TYARz1_4qLYnvkn57uV8vOf34",
  authDomain: "coffee-shop-37f9b.firebaseapp.com",
  projectId: "coffee-shop-37f9b",
  storageBucket: "coffee-shop-37f9b.appspot.com",
  messagingSenderId: "798083748336",
  appId: "1:798083748336:web:5d385a44cb77d6bd8b4d35",
  measurementId: "G-DNW10R4M3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Use `getAuth` without `initializeAuth`
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Export Firebase instances
export { auth, db, doc, getDoc, setDoc };
export default app;
