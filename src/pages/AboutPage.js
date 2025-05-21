import React, { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import '../css/AboutPage.css';

function AboutPage() {
  // استخدام السياق بدلاً من نقل الخصائص (props)
  const { language, darkMode, toggleLanguage, setDarkMode } = useAppContext();
  
  // ترجمات النصوص
  const translations = {
    ar: {
      // الهيدر
      email: "info@maxdesigner.com",
      website: "maxdesigner.co",
      darkMode: "وضع داكن",
      lightMode: "وضع فاتح",
      contactUs: "تواصل معنا",
      aboutUs: "من نحن",
      switchToEnglish: "English",
      
      // عنوان الصفحة
      pageTitle: "من نحن",
      aboutSubtitle: "قصة تميز بدأت منذ عام 2015",
      aboutDescription: "ماكس ديزاينر هي شركة رائدة في مجال التصميم الرقمي والهويات البصرية، تأسست في مدينة الرياض بالمملكة العربية السعودية عام 2015. نمتلك خبرة واسعة في تقديم حلول رقمية مبتكرة تساعد العملاء على تعزيز حضورهم في العالم الرقمي. نؤمن بأن التصميم المبتكر والحلول الرقمية المتطورة هي مفتاح النجاح في عصر التكنولوجيا الحديثة.",
      
      // رؤيتنا وقيمنا
      ourVision: "رؤيتنا",
      visionText: "أن نكون الخيار الأول للشركات والأفراد في المملكة العربية السعودية والشرق الأوسط في مجال التصميم الرقمي والهويات البصرية.",
      ourMission: "مهمتنا",
      missionText: "تقديم حلول تصميم مبتكرة وعالية الجودة تساعد عملائنا على النمو والتميز في السوق الرقمي وتحقيق أهدافهم التجارية.",
      ourValues: "قيمنا",
      valuesList: ["الإبداع والابتكار", "الاحترافية والجودة", "الشفافية والمصداقية", "التطوير المستمر", "التعاون والعمل الجماعي"],
      
      // فريقنا
      ourTeam: "فريقنا المتميز",
      teamDescription: "نمتلك فريقًا احترافيًا من المصممين والمطورين والخبراء في تجربة المستخدم، يجمعهم شغف الإبداع والتميز في تقديم أفضل الحلول الرقمية لعملائنا.",
      
      // إنجازاتنا
      ourAchievements: "إنجازاتنا",
      achievementsList: [
        {
          number: "500+",
          text: "مشروع تم إنجازه"
        },
        {
          number: "300+",
          text: "عميل راضٍ"
        },
        {
          number: "15+",
          text: "جائزة تصميم"
        },
        {
          number: "10+",
          text: "سنوات خبرة"
        }
      ],
      
      // شركاؤنا
      ourPartners: "شركاؤنا",
      partnersDescription: "نفتخر بالتعاون مع نخبة من أفضل الشركات والمؤسسات في المملكة العربية السعودية والخليج العربي.",
      
      // الفوتر
      footerText: "نقدم خدمات التصميم والتطوير الرقمي بأعلى معايير الجودة",
      contactInfo: "تواصل معنا",
      address: "الرياض، المملكة العربية السعودية",
      quickLinks: "روابط سريعة",
      servicesLink: "خدماتنا",
      portfolioLink: "أعمالنا",
      aboutLink: "من نحن",
      contactLink: "اتصل بنا",
      allRights: "جميع الحقوق محفوظة",
      
      // نص دعوة للتواصل
      ctaTitle: "جاهز لبدء مشروعك الرقمي؟",
      ctaText: "تواصل معنا الآن واحصل على استشارة مجانية لمشروعك",
      getQuote: "احصل على عرض سعر",
      backToHome: "العودة للرئيسية"
    },
    en: {
      // Header
      email: "info@maxdesigner.com",
      website: "maxdesigner.co",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
      contactUs: "Contact Us",
      aboutUs: "About Us",
      switchToEnglish: "العربية",
      
      // Page Title
      pageTitle: "About Us",
      aboutSubtitle: "A Success Story Since 2015",
      aboutDescription: "Max Designer is a leading company in digital design and visual identities, founded in Riyadh, Saudi Arabia in 2015. We have extensive experience in providing innovative digital solutions that help clients enhance their presence in the digital world. We believe that innovative design and advanced digital solutions are the key to success in the modern technology era.",
      
      // Vision and Values
      ourVision: "Our Vision",
      visionText: "To be the first choice for companies and individuals in Saudi Arabia and the Middle East in the field of digital design and visual identities.",
      ourMission: "Our Mission",
      missionText: "To provide innovative and high-quality design solutions that help our clients grow and excel in the digital market and achieve their business goals.",
      ourValues: "Our Values",
      valuesList: ["Creativity & Innovation", "Professionalism & Quality", "Transparency & Credibility", "Continuous Development", "Collaboration & Teamwork"],
      
      // Our Team
      ourTeam: "Our Distinguished Team",
      teamDescription: "We have a professional team of designers, developers, and UX experts, united by a passion for creativity and excellence in providing the best digital solutions for our clients.",
      
      // Achievements
      ourAchievements: "Our Achievements",
      achievementsList: [
        {
          number: "500+",
          text: "Completed Projects"
        },
        {
          number: "300+",
          text: "Satisfied Clients"
        },
        {
          number: "15+",
          text: "Design Awards"
        },
        {
          number: "10+",
          text: "Years of Experience"
        }
      ],
      
      // Partners
      ourPartners: "Our Partners",
      partnersDescription: "We are proud to collaborate with some of the best companies and institutions in Saudi Arabia and the Gulf.",
      
      // Footer
      footerText: "We provide digital design and development services with the highest quality standards",
      contactInfo: "Contact Info",
      address: "Riyadh, Saudi Arabia",
      quickLinks: "Quick Links",
      servicesLink: "Services",
      portfolioLink: "Portfolio",
      aboutLink: "About Us",
      contactLink: "Contact Us",
      allRights: "All Rights Reserved",
      
      // CTA
      ctaTitle: "Ready to Start Your Digital Project?",
      ctaText: "Contact us now and get a free consultation for your project",
      getQuote: "Get a Quote",
      backToHome: "Back to Home"
    }
  };

  // اختيار النص المناسب حسب اللغة
  const t = translations[language];

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

    // إضافة عنوان الصفحة
    document.title = language === 'ar' ? 'ماكس ديزاينر | من نحن' : 'Max Designer | About Us';
  }, [language, darkMode]);

  return (
    <div className={`about-page ${darkMode ? 'dark-mode' : 'light-mode'} ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <header className="app-header">
        <div className="logo-container">
          <Link to="/">
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

      <main className="about-page-content">
        {/* قسم الهيرو للصفحة */}
        <section className="about-hero-section">
          <h1 className="page-title">{t.pageTitle}</h1>
          <p className="about-subtitle">{t.aboutSubtitle}</p>
          <Link to="/" className="back-home-link">{t.backToHome}</Link>
        </section>

        {/* باقي المحتوى كما هو... */}
        <section className="about-section">
          <div className="about-container">
            <div className="about-header">
              <p className="about-description">{t.aboutDescription}</p>
            </div>
            
            {/* قسم الرؤية والمهمة */}
            <div className="about-vision-mission">
              <div className="vision-mission-card">
                <div className="vision-mission-icon">🔭</div>
                <h4>{t.ourVision}</h4>
                <p>{t.visionText}</p>
              </div>
              <div className="vision-mission-card">
                <div className="vision-mission-icon">🚀</div>
                <h4>{t.ourMission}</h4>
                <p>{t.missionText}</p>
              </div>
            </div>
            
            {/* قسم القيم */}
            <div className="about-values">
              <h4>{t.ourValues}</h4>
              <div className="values-grid">
                {t.valuesList.map((value, index) => (
                  <div key={index} className="value-item">
                    <div className="value-icon">✨</div>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* قسم الفريق */}
            <div className="about-team">
              <h4>{t.ourTeam}</h4>
              <p className="team-description">{t.teamDescription}</p>
              <div className="team-members">
                <div className="team-member">
                  <div className="member-image"></div>
                  <h5>{language === 'ar' ? 'أحمد ابوشايقه' : 'Ahmed Alfahad'}</h5>
                  <p>{language === 'ar' ? 'المؤسس والرئيس التنفيذي' : 'Founder & CEO'}</p>
                </div>
                <div className="team-member">
                  <div className="member-image"></div>
                  <h5>{language === 'ar' ? 'محمد ابوشايقه' : 'Sara Alotaibi'}</h5>
                  <p>{language === 'ar' ? 'مدير التصميم' : 'Design Director'}</p>
                </div>
                <div className="team-member">
                  <div className="member-image"></div>
                  <h5>{language === 'ar' ? 'محمد ابوشايقه' : 'Mohammed Alqahtani'}</h5>
                  <p>{language === 'ar' ? 'رئيس المطورين' : 'Lead Developer'}</p>
                </div>
                <div className="team-member">
                  <div className="member-image"></div>
                  <h5>{language === 'ar' ? 'احمد ابوشايقه' : 'Nora Alsaadi'}</h5>
                  <p>{language === 'ar' ? 'مدير تجربة المستخدم' : 'UX Manager'}</p>
                </div>
              </div>
            </div>
            
            {/* قسم الإنجازات */}
            <div className="about-achievements">
              <h4>{t.ourAchievements}</h4>
              <div className="achievements-grid">
                {t.achievementsList.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-number">{achievement.number}</div>
                    <p>{achievement.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* قسم الشركاء */}
            <div className="about-partners">
              <h4>{t.ourPartners}</h4>
              <p className="partners-description">{t.partnersDescription}</p>
              <div className="partners-logos">
                <div className="partner-logo"></div>
                <div className="partner-logo"></div>
                <div className="partner-logo"></div>
                <div className="partner-logo"></div>
                <div className="partner-logo"></div>
              </div>
            </div>
          </div>
        </section>

        {/* قسم دعوة للتواصل */}
        <section className="cta-section">
          <h3>{t.ctaTitle}</h3>
          <p>{t.ctaText}</p>
          <button className="cta-button">{t.getQuote}</button>
        </section>
      </main>

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
                <li><Link to="/contact">{t.contactLink}</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="copyright">
          <p>© {new Date().getFullYear()} {language === 'ar' ? 'ماكس ديزاينر' : 'Max Designer'}. {t.allRights}</p>
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;