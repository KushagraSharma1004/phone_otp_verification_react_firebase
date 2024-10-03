// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRK2izk5LvUkWh5aq-m-300AtEZZpElEI",
  authDomain: "eekhgames.firebaseapp.com",
  projectId: "eekhgames",
  storageBucket: "eekhgames.appspot.com",
  messagingSenderId: "1046928875257",
  appId: "1:1046928875257:web:0a1f2a00f09541bb514c28",
  measurementId: "G-YK4V9GVGTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
