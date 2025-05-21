import React, { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { useAppContext } from '../context/AppContext';

function MobileAppPage() {
  // استخدام السياق بدلاً من الاعتماد على props
  const { language, darkMode, toggleLanguage, setDarkMode } = useAppContext();
  const serviceData = {
    ar: {
      id: 3,
      title: "تطبيق موبايل",
      description: "نقدم خدمة تطوير تطبيقات الهواتف الذكية عالية الجودة لنظامي Android و iOS بتصميم عصري وميزات متقدمة تناسب احتياجات عملك وتعزز تواصلك مع عملائك",
      icon: "📱",
      features: [
        {
          title: "تصميم متميز",
          description: "واجهات مستخدم جذابة وسهلة الاستخدام تتوافق مع معايير التصميم الحديثة",
          icon: "customizable"
        },
        {
          title: "تطبيقات متعددة المنصات",
          description: "تطوير تطبيقات متوافقة مع نظامي Android و iOS لتغطية أكبر شريحة من المستخدمين",
          icon: "responsive"
        },
        {
          title: "ميزات متقدمة",
          description: "إضافة ميزات متقدمة مثل الإشعارات، والدفع الإلكتروني، وتحديد المواقع",
          icon: "social"
        },
        {
          title: "سرعة وأداء عالي",
          description: "تطبيقات سريعة وخفيفة مع تحسين الأداء لتجربة مستخدم مميزة",
          icon: "performance"
        },
        {
          title: "تكامل مع الأنظمة",
          description: "ربط التطبيق مع أنظمتك الحالية مثل المتجر الإلكتروني أو نظام إدارة المحتوى",
          icon: "ecommerce"
        },
        {
          title: "لوحة تحكم متكاملة",
          description: "لوحة تحكم مرنة لإدارة محتوى التطبيق وتحليل بيانات المستخدمين",
          icon: "analytics"
        }
      ],
      steps: [
        {
          title: "تحليل متطلبات التطبيق",
          description: "نتعرف على أهداف التطبيق والميزات المطلوبة والجمهور المستهدف لوضع خطة واضحة"
        },
        {
          title: "تصميم واجهات المستخدم",
          description: "تصميم واجهات التطبيق بشكل يضمن سهولة الاستخدام وتجربة مستخدم مميزة"
        },
        {
          title: "تطوير وبرمجة التطبيق",
          description: "برمجة التطبيق وتنفيذ جميع الوظائف والخصائص المطلوبة بأعلى معايير الجودة"
        },
        {
          title: "اختبار ونشر التطبيق",
          description: "اختبار شامل للتطبيق على مختلف الأجهزة ونشره على متاجر التطبيقات"
        }
      ],
      faqs: [
        {
          question: "كم من الوقت يستغرق تطوير تطبيق موبايل؟",
          answer: "المدة تختلف حسب تعقيد التطبيق وعدد الميزات، ولكن عادة ما تتراوح من 2-4 أشهر للتطبيقات المتوسطة، و4-8 أشهر للتطبيقات المعقدة."
        },
        {
          question: "هل سيعمل التطبيق على أنظمة Android و iOS معاً؟",
          answer: "نعم، نقوم بتطوير تطبيقات متعددة المنصات تعمل على كلا النظامين بنفس الكفاءة، أو يمكننا تطوير تطبيقات أصلية مخصصة لكل نظام حسب احتياجاتك."
        },
        {
          question: "هل يمكن ربط التطبيق بموقعي الإلكتروني أو أنظمتي الحالية؟",
          answer: "بالتأكيد، نقوم بتطوير واجهات برمجية (APIs) تسمح بالتكامل السلس بين تطبيق الموبايل وأنظمتك الحالية مثل المواقع الإلكترونية وأنظمة إدارة المحتوى."
        },
        {
          question: "هل تقدمون خدمات صيانة وتحديث التطبيق بعد إطلاقه؟",
          answer: "نعم، نقدم خدمات صيانة وتحديث مستمرة للتطبيق، تشمل إصلاح الأخطاء وتحسين الأداء وإضافة ميزات جديدة، مع خطط خدمة مرنة تناسب احتياجاتك."
        },
        {
          question: "هل تساعدون في نشر التطبيق على متاجر التطبيقات؟",
          answer: "نعم، نقدم خدمة كاملة تشمل إعداد حسابات المطور ونشر التطبيق على App Store و Google Play، وضمان توافقه مع سياسات المتاجر."
        }
      ],
      portfolio: [
        {
          title: "تطبيق توصيل طلبات",
          subtitle: "تطبيق مع نظام تتبع وإشعارات فورية"
        },
        {
          title: "تطبيق حجز مواعيد",
          subtitle: "واجهة سهلة مع نظام تقويم متقدم"
        },
        {
          title: "تطبيق متجر إلكتروني",
          subtitle: "تطبيق متكامل مع نظام دفع وسلة تسوق"
        }
      ]
    },
    en: {
      id: 3,
      title: "Mobile Application",
      description: "We provide high-quality smartphone application development services for Android and iOS with modern design and advanced features that meet your business needs and enhance your communication with customers",
      icon: "📱",
      features: [
        {
          title: "Distinctive Design",
          description: "Attractive and user-friendly interfaces that comply with modern design standards",
          icon: "customizable"
        },
        {
          title: "Cross-Platform Applications",
          description: "Developing applications compatible with both Android and iOS to cover the largest segment of users",
          icon: "responsive"
        },
        {
          title: "Advanced Features",
          description: "Adding advanced features such as notifications, electronic payment, and location services",
          icon: "social"
        },
        {
          title: "Speed and High Performance",
          description: "Fast and lightweight applications with performance optimization for an exceptional user experience",
          icon: "performance"
        },
        {
          title: "Systems Integration",
          description: "Connecting the application with your existing systems such as e-commerce or content management systems",
          icon: "ecommerce"
        },
        {
          title: "Integrated Control Panel",
          description: "Flexible control panel for managing application content and analyzing user data",
          icon: "analytics"
        }
      ],
      steps: [
        {
          title: "Application Requirements Analysis",
          description: "Identifying the application goals, required features, and target audience to establish a clear plan"
        },
        {
          title: "User Interface Design",
          description: "Designing application interfaces in a way that ensures ease of use and a distinctive user experience"
        },
        {
          title: "Application Development",
          description: "Programming the application and implementing all required functions and features with the highest quality standards"
        },
        {
          title: "Testing and Publishing",
          description: "Comprehensive testing of the application on various devices and publishing it on app stores"
        }
      ],
      faqs: [
        {
          question: "How long does it take to develop a mobile application?",
          answer: "The duration varies depending on the complexity of the application and the number of features, but typically ranges from 2-4 months for medium-sized applications, and 4-8 months for complex applications."
        },
        {
          question: "Will the application work on both Android and iOS?",
          answer: "Yes, we develop cross-platform applications that work on both systems with the same efficiency, or we can develop native applications specifically for each system according to your needs."
        },
        {
          question: "Can the application be linked to my website or existing systems?",
          answer: "Absolutely, we develop APIs that allow seamless integration between the mobile application and your existing systems such as websites and content management systems."
        },
        {
          question: "Do you provide application maintenance and update services after launch?",
          answer: "Yes, we provide ongoing maintenance and update services for the application, including bug fixes, performance improvements, and adding new features, with flexible service plans to suit your needs."
        },
        {
          question: "Do you help publish the application on app stores?",
          answer: "Yes, we provide a complete service that includes setting up developer accounts and publishing the application on App Store and Google Play, ensuring it complies with store policies."
        }
      ],
      portfolio: [
        {
          title: "Delivery Application",
          subtitle: "Application with tracking system and instant notifications"
        },
        {
          title: "Appointment Booking App",
          subtitle: "Easy interface with advanced calendar system"
        },
        {
          title: "E-commerce Application",
          subtitle: "Integrated application with payment system and shopping cart"
        }
      ]
    }
  };

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
      orderService: "اطلب الخدمة",
      
      // الصفحة الرئيسية
      heroTitle: "نبتكر هويات بصرية تحكي قصة نجاحك",
      heroSubtitle: "نحول أفكارك إلى تصاميم رقمية مبهرة تساعد مشروعك على النمو والتميز",
      
      // نص دعوة للتواصل
      ctaTitle: "جاهز لتطوير تطبيقك الخاص؟",
      ctaText: "تواصل معنا الآن واحصل على استشارة مجانية لمشروعك",
      getQuote: "احصل على عرض سعر",
      
      // الفوتر
      footerText: "نقدم خدمات التصميم والتطوير الرقمي بأعلى معايير الجودة",
      contactInfo: "تواصل معنا",
      address: "الرياض، المملكة العربية السعودية",
      quickLinks: "روابط سريعة",
      servicesLink: "خدماتنا",
      portfolioLink: "أعمالنا",
      aboutLink: "من نحن",
      contactLink: "اتصل بنا",
      allRights: "جميع الحقوق محفوظة"
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
      orderService: "Order Service",
      
      // Hero section
      heroTitle: "Creating Visual Identities That Tell Your Success Story",
      heroSubtitle: "We transform your ideas into stunning digital designs that help your business grow and excel",
      
      // CTA
      ctaTitle: "Ready to Develop Your Own Application?",
      ctaText: "Contact us now and get a free consultation for your project",
      getQuote: "Get a Quote",
      
      // Footer
      footerText: "We provide digital design and development services with the highest quality standards",
      contactInfo: "Contact Info",
      address: "Riyadh, Saudi Arabia",
      quickLinks: "Quick Links",
      servicesLink: "Services",
      portfolioLink: "Portfolio",
      aboutLink: "About Us",
      contactLink: "Contact Us",
      allRights: "All Rights Reserved"
    }
  };

  useEffect(() => {
    // إضافة عنوان الصفحة
    document.title = language === 'ar' ? 'ماكس ديزاينر | تطبيقات الموبايل' : 'Max Designer | Mobile Applications';
    
    // التمرير لأعلى الصفحة عند تحميلها
    window.scrollTo(0, 0);
  }, [language]);

  return (
    <ServicePage
      serviceId={3}
      language={language}
      darkMode={darkMode}
      toggleLanguage={toggleLanguage}
      setDarkMode={setDarkMode}
      serviceData={serviceData[language]}
      translations={translations[language]}
    />
  );
}

export default MobileAppPage;