import React, { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { useAppContext } from '../context/AppContext';

function EcommercePage() {
  // استخدام السياق بدلاً من الاعتماد على props
  const { language, darkMode, toggleLanguage, setDarkMode } = useAppContext();

  // بيانات الخدمة بالعربية والإنجليزية
  const serviceData = {
    ar: {
      id: 2,
      title: "متجر إلكتروني",
      description: "نقدم خدمة إنشاء متاجر إلكترونية متكاملة وسهلة الاستخدام مع أنظمة دفع آمنة ولوحة تحكم متطورة تساعدك على عرض منتجاتك وتحقيق مبيعات أكثر",
      icon: "🛒",
      features: [
        {
          title: "تصميم احترافي",
          description: "واجهة جذابة ومتجاوبة مع جميع الأجهزة تعرض منتجاتك بطريقة احترافية",
          icon: "responsive"
        },
        {
          title: "بوابات دفع متعددة",
          description: "دمج مع بوابات الدفع المحلية والعالمية لتسهيل عملية الشراء على عملائك",
          icon: "ecommerce"
        },
        {
          title: "إدارة المخزون",
          description: "نظام متكامل لإدارة المخزون والمنتجات والطلبات بطريقة سهلة",
          icon: "customizable"
        },
        {
          title: "تتبع الطلبات",
          description: "نظام تتبع متطور للطلبات يُمكن العملاء من معرفة حالة طلباتهم بشكل مباشر",
          icon: "analytics"
        },
        {
          title: "سلة تسوق سهلة",
          description: "تجربة تسوق سلسة مع سلة تسوق سهلة الاستخدام لزيادة معدلات إتمام الشراء",
          icon: "fast"
        },
        {
          title: "تقارير وإحصائيات",
          description: "تقارير مفصلة عن المبيعات والمنتجات الأكثر طلباً لاتخاذ قرارات تجارية أفضل",
          icon: "analytics"
        }
      ],
      steps: [
        {
          title: "تحليل متطلبات المتجر",
          description: "نتعرف على طبيعة منتجاتك واحتياجاتك التسويقية وأهدافك من المتجر الإلكتروني"
        },
        {
          title: "تصميم واجهات المتجر",
          description: "تصميم الواجهات الرئيسية للمتجر وصفحات المنتجات والسلة وإتمام الطلب"
        },
        {
          title: "تطوير المتجر",
          description: "برمجة جميع وظائف المتجر ودمج بوابات الدفع وأنظمة إدارة المخزون والطلبات"
        },
        {
          title: "اختبار وتسليم",
          description: "اختبار شامل لتجربة التسوق وإتمام الطلبات، وتدريبك على إدارة المتجر وتسليمه"
        }
      ],
      faqs: [
        {
          question: "هل يمكنني إضافة منتجات جديدة وتعديل المنتجات الموجودة بنفسي؟",
          answer: "نعم، نوفر لوحة تحكم سهلة الاستخدام تمكنك من إضافة وتعديل وحذف المنتجات، وإدارة الطلبات والمخزون بكل سهولة."
        },
        {
          question: "ما هي بوابات الدفع المتاحة في المتجر الإلكتروني؟",
          answer: "نقوم بدمج مختلف بوابات الدفع المحلية والعالمية مثل مدى، وفيزا/ماستركارد، وأبل باي، وسداد، وبنك التنمية، وباي بال، وغيرها حسب احتياجك."
        },
        {
          question: "هل يمكن ربط المتجر مع أنظمة الشحن؟",
          answer: "بالتأكيد، يمكن ربط المتجر مع مختلف شركات الشحن المحلية والعالمية لحساب تكاليف الشحن تلقائياً وتتبع الشحنات."
        },
        {
          question: "كم من الوقت يستغرق إنشاء متجر إلكتروني؟",
          answer: "المدة تختلف حسب حجم المتجر وتعقيده، لكن عادة تتراوح من 3-6 أسابيع للمتاجر المتوسطة، و6-10 أسابيع للمتاجر الكبيرة مع ميزات متقدمة."
        },
        {
          question: "هل يمكن ربط المتجر مع برامج المحاسبة ونقاط البيع؟",
          answer: "نعم، نوفر خدمات تكامل المتجر الإلكتروني مع أنظمة المحاسبة ونقاط البيع الأكثر شيوعاً لتسهيل إدارة أعمالك."
        }
      ],
      portfolio: [
        {
          title: "متجر ملابس",
          subtitle: "متجر إلكتروني متكامل مع ميزات متقدمة"
        },
        {
          title: "متجر إلكترونيات",
          subtitle: "واجهة عصرية مع نظام مقارنة المنتجات"
        },
        {
          title: "متجر مستحضرات تجميل",
          subtitle: "تجربة تسوق سلسة مع ميزات بحث متقدمة"
        }
      ]
    },
    en: {
      id: 2,
      title: "E-commerce Store",
      description: "We provide integrated and user-friendly e-commerce store development services with secure payment systems and an advanced control panel to help you showcase your products and achieve more sales",
      icon: "🛒",
      features: [
        {
          title: "Professional Design",
          description: "Attractive and responsive interface for all devices that showcases your products professionally",
          icon: "responsive"
        },
        {
          title: "Multiple Payment Gateways",
          description: "Integration with local and global payment gateways to facilitate the purchasing process for your customers",
          icon: "ecommerce"
        },
        {
          title: "Inventory Management",
          description: "Integrated system for managing inventory, products, and orders easily",
          icon: "customizable"
        },
        {
          title: "Order Tracking",
          description: "Advanced order tracking system that allows customers to track their orders directly",
          icon: "analytics"
        },
        {
          title: "Easy Shopping Cart",
          description: "Smooth shopping experience with easy-to-use shopping cart to increase checkout rates",
          icon: "fast"
        },
        {
          title: "Reports and Statistics",
          description: "Detailed reports on sales and most requested products to make better business decisions",
          icon: "analytics"
        }
      ],
      steps: [
        {
          title: "Store Requirements Analysis",
          description: "We learn about the nature of your products, marketing needs, and goals for the e-commerce store"
        },
        {
          title: "Store Interface Design",
          description: "Designing the main store interfaces, product pages, cart, and checkout process"
        },
        {
          title: "Store Development",
          description: "Programming all store functions and integrating payment gateways, inventory and order management systems"
        },
        {
          title: "Testing and Delivery",
          description: "Comprehensive testing of the shopping experience and order completion, training you on store management and delivery"
        }
      ],
      faqs: [
        {
          question: "Can I add new products and modify existing ones myself?",
          answer: "Yes, we provide an easy-to-use control panel that allows you to add, edit, and delete products, and manage orders and inventory with ease."
        },
        {
          question: "What payment gateways are available in the e-commerce store?",
          answer: "We integrate various local and global payment gateways such as Mada, Visa/MasterCard, Apple Pay, SADAD, STC Pay, PayPal, and others according to your needs."
        },
        {
          question: "Can the store be linked with shipping systems?",
          answer: "Certainly, the store can be linked with various local and global shipping companies to automatically calculate shipping costs and track shipments."
        },
        {
          question: "How long does it take to create an e-commerce store?",
          answer: "The duration varies depending on the size and complexity of the store, but typically ranges from 3-6 weeks for medium-sized stores, and 6-10 weeks for large stores with advanced features."
        },
        {
          question: "Can the store be linked with accounting software and POS systems?",
          answer: "Yes, we provide services for integrating the e-commerce store with the most common accounting systems and point-of-sale systems to facilitate your business management."
        }
      ],
      portfolio: [
        {
          title: "Clothing Store",
          subtitle: "Integrated e-commerce store with advanced features"
        },
        {
          title: "Electronics Store",
          subtitle: "Modern interface with product comparison system"
        },
        {
          title: "Cosmetics Store",
          subtitle: "Smooth shopping experience with advanced search features"
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
      ctaTitle: "جاهز لإنشاء متجرك الإلكتروني؟",
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
      ctaTitle: "Ready to Create Your Online Store?",
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
    document.title = language === 'ar' ? 'ماكس ديزاينر | متجر إلكتروني' : 'Max Designer | E-commerce Store';
    
    // التمرير لأعلى الصفحة عند تحميلها
    window.scrollTo(0, 0);
  }, [language]);

  return (
    <ServicePage
      serviceId={2}
      language={language}
      darkMode={darkMode}
      toggleLanguage={toggleLanguage}
      setDarkMode={setDarkMode}
      serviceData={serviceData[language]}
      translations={translations[language]}
    />
  );
}

export default EcommercePage;