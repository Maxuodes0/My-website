import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import translations from '../translations';

function Header() {
  const { darkMode, setDarkMode, language, toggleLanguage } = useAppContext();
  const t = translations[language];

  return (
    <header className="app-header">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <div className="logo"></div>
          <h1>{language === 'ar' ? 'ماكس ديزاينر' : 'Max Designer'}</h1>
        </Link>
      </div>
      
      <div className="header-actions">
        <a href={`mailto:${t.email}`} className="contact-email">{t.email}</a>
        <a href="#" className="website-link">{t.website}</a>
        <button className="language-toggle" onClick={toggleLanguage}>
          {language === 'ar' ? '🇬🇧' : '🇸🇦'} {t.switchToEnglish}
        </button>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <><span>☀️</span> {t.lightMode}</> : <><span>🌙</span> {t.darkMode}</>}
        </button>
        <Link to="/about" className="contact-button">
          {t.aboutUs}
        </Link>
        <button className="contact-button">{t.contactUs}</button>
      </div>
    </header>
  );
}

export default Header;