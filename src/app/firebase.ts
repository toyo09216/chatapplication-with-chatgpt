import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: "chatapplication-with-cha-bd5f4",
  storageBucket: "chatapplication-with-cha-bd5f4.firebasestorage.app",
  messagingSenderId: "528837105239",
  appId: "1:528837105239:web:bb1007d78b61bcc3b7b512"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
