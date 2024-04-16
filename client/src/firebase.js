// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-f2bbe.firebaseapp.com",
  projectId: "blog-app-f2bbe",
  storageBucket: "blog-app-f2bbe.appspot.com",
  messagingSenderId: "111060229667",
  appId: "1:111060229667:web:0946dcdd35a60713ecdb96",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
