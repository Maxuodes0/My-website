import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import FeatureCard from '../components/FeatureCard';
import CallToAction from '../components/CallToAction';
import { services, features } from '../data/services';
import translations from '../translations';

// مكون الصفحة الرئيسية
function HomePage() {
  const [activeTab, setActiveTab] = useState('services'); // 'services', 'portfolio', 'process'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  // استخدام هوك السياق
  const { language, darkMode } = useAppContext();
  
  // اختصار للترجمات
  const t = translations[language];
  
  // التعامل مع النقر على بطاقة الخدمة
  const handleServiceClick = (service) => {
    navigate(service.path);
  };
  
  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'} ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header />

      <main className="main-content">
        <section className="hero-section">
          <h2>{t.heroTitle}</h2>
          <p className="subtitle">{t.heroSubtitle}</p>
          
          <div className="hero-buttons">
            <button className="primary-button">{t.orderNow}</button>
            <button className="secondary-button">{t.viewPortfolio}</button>
          </div>
        </section>

        <section className="services-container">
          <div className="tabs-container">
            <div className="tabs-header">
              <button 
                className={`tab-button ${activeTab === 'services' ? 'active' : ''}`}
                onClick={() => setActiveTab('services')}
              >
                {t.tabServices}
              </button>
              <button 
                className={`tab-button ${activeTab === 'portfolio' ? 'active' : ''}`}
                onClick={() => setActiveTab('portfolio')}
              >
                {t.tabPortfolio}
              </button>
              <button 
                className={`tab-button ${activeTab === 'process' ? 'active' : ''}`}
                onClick={() => setActiveTab('process')}
              >
                {t.tabProcess}
              </button>
            </div>
            
            <div className="tabs-content">
              {/* محتوى قسم الخدمات */}
              <div className={`tab-content ${activeTab === 'services' ? 'active' : ''}`}>
                <div className="services-grid">
                  {services[language].map(service => (
                    <ServiceCard 
                      key={service.id} 
                      service={service}
                      onClick={handleServiceClick}
                    />
                  ))}
                </div>
              </div>
              
              {/* محتوى قسم الأعمال السابقة */}
              <div className={`tab-content ${activeTab === 'portfolio' ? 'active' : ''}`}>
                <div className="portfolio-grid">
                  <div className="portfolio-item">
                    <div className="portfolio-image"></div>
                    <h4>{language === 'ar' ? 'تصميم موقع شركة عقارية' : 'Real Estate Company Website'}</h4>
                    <p>{language === 'ar' ? 'تصميم موقع إلكتروني' : 'Website Design'}</p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-image"></div>
                    <h4>{language === 'ar' ? 'هوية بصرية لمطعم' : 'Restaurant Visual Identity'}</h4>
                    <p>{language === 'ar' ? 'هوية بصرية' : 'Visual Identity'}</p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-image"></div>
                    <h4>{language === 'ar' ? 'تطبيق توصيل طلبات' : 'Delivery Application'}</h4>
                    <p>{language === 'ar' ? 'تطبيق موبايل' : 'Mobile App'}</p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-image"></div>
                    <h4>{language === 'ar' ? 'متجر إلكتروني للملابس' : 'Clothing E-commerce Store'}</h4>
                    <p>{language === 'ar' ? 'متجر إلكتروني' : 'E-commerce'}</p>
                  </div>
                </div>
                <button className="view-more-button">{t.viewMore}</button>
              </div>
              
              {/* محتوى قسم مراحل العمل */}
              <div className={`tab-content ${activeTab === 'process' ? 'active' : ''}`}>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <h4>{t.processStep1}</h4>
                    <p>{t.processStep1Text}</p>
                  </div>
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <h4>{t.processStep2}</h4>
                    <p>{t.processStep2Text}</p>
                  </div>
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <h4>{t.processStep3}</h4>
                    <p>{t.processStep3Text}</p>
                  </div>
                  <div className="process-step">
                    <div className="step-number">4</div>
                    <h4>{t.processStep4}</h4>
                    <p>{t.processStep4Text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          {features[language].map(feature => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </section>

        <section className="portfolio-section">
          <h3 className="section-title">{t.portfolioTitle}</h3>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image"></div>
              <h4>{language === 'ar' ? 'مشروع 1' : 'Project 1'}</h4>
              <p>{language === 'ar' ? 'تصميم موقع إلكتروني' : 'Website Design'}</p>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image"></div>
              <h4>{language === 'ar' ? 'مشروع 2' : 'Project 2'}</h4>
              <p>{language === 'ar' ? 'هوية بصرية' : 'Visual Identity'}</p>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image"></div>
              <h4>{language === 'ar' ? 'مشروع 3' : 'Project 3'}</h4>
              <p>{language === 'ar' ? 'تطبيق موبايل' : 'Mobile App'}</p>
            </div>
          </div>
          <button className="view-more-button">{t.viewMore}</button>
        </section>

        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;