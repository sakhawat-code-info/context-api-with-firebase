// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvOYIATf4Xk-M-8ZI2pwxpSJjgF6upbqY",
    authDomain: "context-api-with-firebas-29f3e.firebaseapp.com",
    projectId: "context-api-with-firebas-29f3e",
    storageBucket: "context-api-with-firebas-29f3e.appspot.com",
    messagingSenderId: "954248876849",
    appId: "1:954248876849:web:d8f772cd7e5c59b7fb1610"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;