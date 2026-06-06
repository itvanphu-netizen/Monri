// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKuEIUqP9BLi2F_J7NNuK3giQhMLJ1M90",
  authDomain: "dev-mori.firebaseapp.com",
  projectId: "dev-mori",
  storageBucket: "dev-mori.firebasestorage.app",
  messagingSenderId: "357557807508",
  appId: "1:357557807508:web:984e6e5e39a81557d04781",
  measurementId: "G-6KF30CVF8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);

export { app, analytics, db };
