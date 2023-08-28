// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGyCCmU4Yd4QgsXC0S_Cn8fQA5u5u9U0Y",
  authDomain: "eric-545c3.firebaseapp.com",
  projectId: "eric-545c3",
  storageBucket: "eric-545c3.appspot.com",
  messagingSenderId: "248766983505",
  appId: "1:248766983505:web:cae7adf881eb4e75163770",
  measurementId: "G-VVVEXF5XK5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
