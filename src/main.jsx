import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOPs7_QtrjAmL0fVTOkDGmNOCrajvb9WY",
  authDomain: "mrsabueso-app.firebaseapp.com",
  projectId: "mrsabueso-app",
  storageBucket: "mrsabueso-app.appspot.com",
  messagingSenderId: "848591917143",
  appId: "1:848591917143:web:b37efde8b9361aa718d312",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
