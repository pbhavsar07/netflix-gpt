// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDZ4y8buF5nCjiuDqpR3vANVLh_qZlx1o",
  authDomain: "netflix-gpt-85c5f.firebaseapp.com",
  projectId: "netflix-gpt-85c5f",
  storageBucket: "netflix-gpt-85c5f.firebasestorage.app",
  messagingSenderId: "1067113691795",
  appId: "1:1067113691795:web:799f01a7d091c57ddaeb66",
  measurementId: "G-3VHSFKZRGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
