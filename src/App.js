import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// استيراد الصفحات
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WebDesignPage from './pages/WebDesignPage';
import EcommercePage from './pages/EcommercePage';
import MobileAppPage from './pages/MobileAppPage';
import IdentityPage from './pages/IdentityPage';

// استيراد ملف CSS الرئيسي
import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/web-design" element={<WebDesignPage />} />
          <Route path="/ecommerce" element={<EcommercePage />} />
          <Route path="/mobile-app" element={<MobileAppPage />} />
          <Route path="/identity" element={<IdentityPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;