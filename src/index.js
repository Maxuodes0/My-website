import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// استيراد ملفات CSS هنا
import './css/ServicePage.css';
import './css/AboutPage.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);