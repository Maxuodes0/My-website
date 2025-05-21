import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/ServicePage.css';

function ServicePage({ 
  serviceId, 
  language, 
  darkMode, 
  toggleLanguage, 
  setDarkMode, 
  serviceData,
  translations 
}) {
  // إضافة حالة للتحكم في سلوك المكونات المتفاعلة
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSections, setVisibleSections] = useState({
    features: false,
    steps: false,
    faqs: false,
    portfolio: false
  });

  // تأثير التمرير للكشف عن الأقسام عند الوصول إليها
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['features', 'steps', 'faqs', 'portfolio'];
      const newVisibleSections = { ...visibleSections };
      
      sections.forEach(section => {
        const element = document.querySelector(`.service-${section}-section`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.75;
          newVisibleSections[section] = isVisible;
        }
      });
      
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // تشغيل الفحص عند التحميل

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // إضافة اتجاه الصفحة حسب اللغة
    if (language === 'ar') {
      document.body.setAttribute('dir', 'rtl');
      document.body.classList.add('arabic');
      document.body.classList.remove('english');
    } else {
      document.body.setAttribute('dir', 'ltr');
      document.body.classList.add('english');
      document.body.classList.remove('arabic');
    }

    // تطبيق وضع الألوان
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }

    // عند تغيير الصفحة، نقوم بالانتقال إلى أعلى الصفحة
    window.scrollTo(0, 0);
  }, [language, darkMode]);

  // التحقق من وجود البيانات قبل استخدامها
  if (!serviceData || !translations) {
    return (
      <div className={`loading-screen ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="loading-spinner"></div>
        <p>{language === 'ar' ? 'جاري التحميل...' : 'Loading...'}</p>
      </div>
    );
  }

  // تبديل حالة سؤال في الأسئلة الشائعة
  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className={`service-page ${darkMode ? 'dark-mode' : 'light-mode'} ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <header className="app-header">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <div className="logo"></div>
            <h1>{language === 'ar' ? 'ماكس ديزاينر' : 'Max Designer'}</h1>
          </Link>
        </div>
        
        <div className="header-actions">
          <a href={`mailto:${translations.email}`} className="contact-email">{translations.email}</a>
          <a href="https://maxdesigner.co" className="website-link" target="_blank" rel="noopener noreferrer">{translations.website}</a>
          <button className="language-toggle" onClick={toggleLanguage}>
            <span role="img" aria-label="Language icon">{language === 'ar' ? '🇬🇧' : '🇸🇦'}</span> {translations.switchToEnglish}
          </button>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            <span role="img" aria-label="Theme icon">{darkMode ? '☀️' : '🌙'}</span> {darkMode ? translations.lightMode : translations.darkMode}
          </button>
          <Link to="/about" className="about-button">
            {translations.aboutUs}
          </Link>
          <button className="contact-button">{translations.contactUs}</button>
        </div>
      </header>

      <main className="service-page-content">
        {/* قسم الهيرو للخدمة */}
        <section className="service-hero-section">
          <div className="service-icon-large">{serviceData.icon}</div>
          <h1 className="service-title">{serviceData.title}</h1>
          <p className="service-description">{serviceData.description}</p>
          <button className="primary-button service-cta">{translations.orderService}</button>
          <Link to="/" className="back-home-link">
            {language === 'ar' ? 'العودة للصفحة الرئيسية' : 'Back to Home'}
          </Link>
        </section>

        {/* قسم مميزات الخدمة */}
        <section className={`service-features-section ${visibleSections.features ? 'animate-reveal' : ''}`}>
          <h2 className="section-title">
            {translations.featuresTitle || (language === 'ar' ? 'مميزات الخدمة' : 'Service Features')}
          </h2>
          <div className="service-features-grid">
            {serviceData.features && serviceData.features.map((feature, index) => (
              <div 
                className={`service-feature-card animate-item delay-${index % 6}`} 
                key={index}
                style={{
                  backgroundColor: feature.bgColor ? `var(--${feature.bgColor.replace('bg-', '')})` : '',
                  color: feature.iconColor ? `var(--${feature.iconColor.replace('text-', '')})` : ''
                }}
              >
                <div className={`feature-icon ${feature.icon}`}>
                  {getFeatureEmoji(feature.icon)}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* قسم خطوات العمل */}
        <section className={`service-process-section ${visibleSections.steps ? 'animate-reveal' : ''}`}>
          <h2 className="section-title">
            {translations.stepsTitle || (language === 'ar' ? 'خطوات العمل' : 'Work Process')}
          </h2>
          <div className="process-steps">
            {serviceData.steps && serviceData.steps.map((step, index) => (
              <div 
                className={`process-step animate-item delay-${index % 4}`} 
                key={index}
                style={{
                  color: step.color ? `var(--${step.color.replace('text-', '')})` : ''
                }}
              >
                <div className="step-number">
                  {step.icon || (index + 1)}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* قسم الأسئلة الشائعة */}
        <section className={`service-faq-section ${visibleSections.faqs ? 'animate-reveal' : ''}`}>
          <h2 className="section-title">
            {translations.faqsTitle || (language === 'ar' ? 'أسئلة شائعة' : 'FAQs')}
          </h2>
          <div className="faq-container">
            {serviceData.faqs && serviceData.faqs.map((faq, index) => (
              <div 
                className={`faq-item animate-item delay-${index % 6} ${activeIndex === index ? 'active' : ''}`} 
                key={index}
                onClick={() => toggleFaq(index)}
              >
                <h3 className="faq-question">
                  {faq.question}
                  <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
                </h3>
                <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* نماذج من أعمالنا */}
        {serviceData.portfolio && serviceData.portfolio.length > 0 && (
          <section className={`service-portfolio-section ${visibleSections.portfolio ? 'animate-reveal' : ''}`}>
            <h2 className="section-title">
              {translations.portfolioTitle || (language === 'ar' ? 'نماذج من أعمالنا' : 'Our Portfolio')}
            </h2>
            <div className="portfolio-grid">
              {serviceData.portfolio.map((item, index) => (
                <div className={`portfolio-item animate-item delay-${index % 6}`} key={index}>
                  <div 
                    className="portfolio-image" 
                    style={{
                      backgroundImage: item.image ? `url(${item.image})` : 'none'
                    }}
                  ></div>
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                  {item.tags && (
                    <div className="portfolio-tags">
                      {item.tags.map((tag, tagIndex) => (
                        <span className="portfolio-tag" key={tagIndex}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* قسم دعوة للتواصل */}
        {translations && translations.ctaTitle && (
          <section className="cta-section">
            <h3>{translations.ctaTitle}</h3>
            <p>{translations.ctaText}</p>
            <button className="cta-button">{translations.getQuote}</button>
          </section>
        )}
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">
              <div className="logo"></div>
              <h3>{language === 'ar' ? 'ماكس ديزاينر' : 'Max Designer'}</h3>
            </div>
            <p>{translations.footerText}</p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fa fa-facebook"></i> {language === 'ar' ? 'فيسبوك' : 'Facebook'}
              </a>
              <a href="#" className="social-link">
                <i className="fa fa-twitter"></i> {language === 'ar' ? 'تويتر' : 'Twitter'}
              </a>
              <a href="#" className="social-link">
                <i className="fa fa-instagram"></i> {language === 'ar' ? 'انستغرام' : 'Instagram'}
              </a>
              <a href="#" className="social-link">
                <i className="fa fa-linkedin"></i> {language === 'ar' ? 'لينكد إن' : 'LinkedIn'}
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>{translations.contactInfo}</h4>
              <ul>
                <li>{translations.address}</li>
                <li>{translations.email}</li>
                <li>{language === 'ar' ? '+966 55 123 4567' : '+966 55 123 4567'}</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>{translations.quickLinks}</h4>
              <ul>
                <li><Link to="/">{translations.servicesLink}</Link></li>
                <li><Link to="/">{translations.portfolioLink}</Link></li>
                <li><Link to="/about">{translations.aboutLink}</Link></li>
                <li><Link to="/contact">{translations.contactLink}</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="copyright">
          <p>© {new Date().getFullYear()} {language === 'ar' ? 'ماكس ديزاينر' : 'Max Designer'}. {translations.allRights}</p>
        </div>
      </footer>
    </div>
  );
}

// دالة مساعدة للحصول على أيقونة الميزات كرموز تعبيرية
function getFeatureEmoji(iconName) {
  switch(iconName) {
    case 'responsive': return '📱';
    case 'performance': return '⚡';
    case 'seo': return '🔍';
    case 'customizable': return '🎨';
    case 'fast': return '🚀';
    default: return '✨';
  }
}

export default ServicePage;