import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import translations from '../translations';

function Footer() {
  const { language } = useAppContext();
  const t = translations[language];
  
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-info">
          <div className="footer-logo">
            <div className="logo"></div>
            <h3>{language === 'ar' ? 'ماكس ديزاينر' : 'Max Designer'}</h3>
          </div>
          <p>{t.footerText}</p>
          <div className="social-links">
            <a href="#" className="social-link">
              {language === 'ar' ? 'فيسبوك' : 'Facebook'}
            </a>
            <a href="#" className="social-link">
              {language === 'ar' ? 'تويتر' : 'Twitter'}
            </a>
            <a href="#" className="social-link">
              {language === 'ar' ? 'انستغرام' : 'Instagram'}
            </a>
            <a href="#" className="social-link">
              {language === 'ar' ? 'لينكد إن' : 'LinkedIn'}
            </a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h4>{t.contactInfo}</h4>
            <ul>
              <li>{t.address}</li>
              <li>{t.email}</li>
              <li>{language === 'ar' ? '+966 55 123 4567' : '+966 55 123 4567'}</li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>{t.quickLinks}</h4>
            <ul>
              <li><Link to="/">{t.servicesLink}</Link></li>
              <li><Link to="/">{t.portfolioLink}</Link></li>
              <li><Link to="/about">{t.aboutLink}</Link></li>
              <li><Link to="#">{t.contactLink}</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <p>© {new Date().getFullYear()} {language === 'ar' ? 'ماكس ديزاينر' : 'Max Designer'}. {t.allRights}</p>
      </div>
    </footer>
  );
}

export default Footer;