import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC83Wh7aESIxrWVyZn_D0p2YEOrzcgLTB0",
  authDomain: "search-flights-project.firebaseapp.com",
  projectId: "search-flights-project",
  storageBucket: "search-flights-project.appspot.com",
  messagingSenderId: "997492807166",
  appId: "1:997492807166:web:ec83e862127e9ad5891caf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
