import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // ✅ import getStorage

const firebaseConfig = {
  apiKey: "AIzaSyAqRsV7Onn2e7Tqoam7Xb_tiJ8ofhFnXRY",
  authDomain: "petrdex-3655d.firebaseapp.com",
  projectId: "petrdex-3655d",
  storageBucket: "petrdex-3655d.appspot.com", // ✅ correct format
  messagingSenderId: "23867398981",
  appId: "1:23867398981:web:19d9c1a4904a2421a2bc2c",
  measurementId: "G-4TQ09QJ3S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // ✅ now defined

// Export them
export { app, auth, db, storage };