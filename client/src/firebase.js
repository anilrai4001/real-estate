// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-dc9ab.firebaseapp.com",
  projectId: "real-estate-dc9ab",
  storageBucket: "real-estate-dc9ab.appspot.com",
  messagingSenderId: "401929339984",
  appId: "1:401929339984:web:39f783f60eb7fd95ccfd55"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);