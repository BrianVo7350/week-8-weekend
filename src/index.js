import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB06RQ9AX3G3dwmqK0Zr55pe2e5W_ZQp50",
  authDomain: "checkout-9615f.firebaseapp.com",
  projectId: "checkout-9615f",
  storageBucket: "checkout-9615f.appspot.com",
  messagingSenderId: "96531622426",
  appId: "1:96531622426:web:628c0a162182a1563d3fa3"
};


initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
