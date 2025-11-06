import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqRsV7Onn2e7Tqoam7Xb_tiJ8ofhFnXRY",
  authDomain: "petrdex-3655d.firebaseapp.com",
  projectId: "petrdex-3655d",
  storageBucket: "petrdex-3655d.firebasestorage.app",
  messagingSenderId: "23867398981",
  appId: "1:23867398981:web:19d9c1a4904a2421a2bc2c",
  measurementId: "G-4TQ09QJ3S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);