// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr1W8U7nSvHKLPGawYvtI-EmTZy5wC5Ek",
  authDomain: "kk-shop-37811.firebaseapp.com",
  projectId: "kk-shop-37811",
  storageBucket: "kk-shop-37811.appspot.com",
  messagingSenderId: "918353014197",
  appId: "1:918353014197:web:fcbc88f60e9e5ce1977dfc",
  measurementId: "G-KCYRDW1WPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getStorage } from "firebase/storage";

const storage = getStorage(app);

export { storage }