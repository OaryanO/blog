// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "myblog-99509.firebaseapp.com",
  projectId: "myblog-99509",
  storageBucket: "myblog-99509.appspot.com",
  messagingSenderId: "128027595810",
  appId: "1:128027595810:web:04afac43532adefe0da67b",
  measurementId: "G-7NN5V4QK20",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
