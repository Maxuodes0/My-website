import React, { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { useAppContext } from '../context/AppContext';

/**
 * WebDesignPage Component
 * صفحة خدمة تصميم المواقع الإلكترونية
 */
function WebDesignPage() {
  // استخدام السياق العام للتطبيق
  const { language, darkMode, toggleLanguage, setDarkMode } = useAppContext();

  // بيانات الخدمة بالعربية والإنجليزية مع تحسينات
  const serviceData = {
    ar: {
      id: 1,
      title: "تصميم موقع إلكتروني",
      description: "نقدم خدمة تصميم مواقع إلكترونية متجاوبة وعصرية تناسب مختلف الأجهزة بأعلى معايير الجودة والاحترافية، مع التركيز على تجربة المستخدم وسهولة الاستخدام",
      icon: "🖥️",
      features: [
        {
          title: "تصميم متجاوب",
          description: "تصميم متوافق مع جميع الأجهزة - الحاسوب، الجوال، والأجهزة اللوحية",
          icon: "responsive",
          bgColor: "bg-blue-50",
          iconColor: "text-blue-500"
        },
        {
          title: "سرعة تحميل عالية",
          description: "تحسين أداء الموقع وسرعة التحميل لتجربة مستخدم ممتازة",
          icon: "performance",
          bgColor: "bg-green-50",
          iconColor: "text-green-500"
        },
        {
          title: "تحسين محركات البحث",
          description: "تصميم موقعك بأفضل ممارسات تحسين محركات البحث (SEO) لزيادة الظهور",
          icon: "seo",
          bgColor: "bg-purple-50",
          iconColor: "text-purple-500"
        },
        {
          title: "تصميم مخصص",
          description: "تصميم فريد ومخصص يعكس هوية علامتك التجارية ويناسب نشاطك",
          icon: "customizable",
          bgColor: "bg-orange-50",
          iconColor: "text-orange-500"
        },
        {
          title: "سهولة الاستخدام",
          description: "واجهة مستخدم بديهية وسهلة الاستخدام تضمن تجربة مميزة للزوار",
          icon: "fast",
          bgColor: "bg-teal-50",
          iconColor: "text-teal-500"
        },
        {
          title: "لوحة تحكم سهلة",
          description: "لوحة تحكم سهلة تمكنك من إدارة محتوى موقعك دون الحاجة لمعرفة البرمجة",
          icon: "customizable",
          bgColor: "bg-indigo-50",
          iconColor: "text-indigo-500"
        }
      ],
      steps: [
        {
          title: "تحليل المتطلبات",
          description: "نتعرف على احتياجاتك وأهدافك من الموقع، والجمهور المستهدف، وميزات الموقع المطلوبة",
          icon: "🔍",
          color: "text-blue-600"
        },
        {
          title: "التصميم المبدئي",
          description: "تصميم الواجهة الرئيسية والصفحات الداخلية الأساسية لعرضها عليك واعتمادها",
          icon: "🎨",
          color: "text-purple-600"
        },
        {
          title: "البرمجة والتطوير",
          description: "تنفيذ التصميم وبرمجة جميع ميزات الموقع وصفحاته واختبارها بشكل كامل",
          icon: "💻",
          color: "text-green-600"
        },
        {
          title: "المراجعة والتسليم",
          description: "مراجعة شاملة للموقع، وتدريبك على استخدام لوحة التحكم، وتسليم الموقع جاهزاً",
          icon: "✅",
          color: "text-red-600"
        }
      ],
      faqs: [
        {
          question: "ما المدة التي يستغرقها تصميم الموقع؟",
          answer: "تختلف المدة حسب حجم الموقع وتعقيده، ولكن عادة ما تتراوح من 2-4 أسابيع للمواقع البسيطة والمتوسطة، و4-8 أسابيع للمواقع الكبيرة."
        },
        {
          question: "هل سيكون الموقع متوافقاً مع جميع الأجهزة والمتصفحات؟",
          answer: "نعم، نقوم بتصميم مواقع ويب متجاوبة تمامًا مع جميع أحجام الشاشات وتعمل بشكل مثالي على جميع المتصفحات الرئيسية."
        },
        {
          question: "هل يمكنني تحديث محتوى الموقع بنفسي؟",
          answer: "بالتأكيد، نوفر لوحة تحكم سهلة الاستخدام تمكنك من تحديث المحتوى والصور وإضافة صفحات جديدة دون الحاجة لمعرفة برمجية."
        },
        {
          question: "هل تقدمون خدمات استضافة الموقع؟",
          answer: "نعم، نوفر خدمات استضافة مواقع آمنة وسريعة بأسعار تنافسية، مع الدعم الفني على مدار الساعة."
        },
        {
          question: "هل خدمة تحسين محركات البحث (SEO) مشمولة في التصميم؟",
          answer: "نعم، جميع مواقعنا مصممة وفقًا لأفضل ممارسات تحسين محركات البحث الأساسية، ونقدم أيضاً خدمات إضافية متقدمة في تحسين محركات البحث."
        }
      ],
      portfolio: [
        {
          title: "موقع شركة عقارية",
          subtitle: "تصميم موقع تعريفي مع نظام بحث متقدم",
          image: "/images/portfolio/real-estate.jpg",
          tags: ["تصميم متجاوب", "نظام بحث", "SEO"]
        },
        {
          title: "موقع محامي",
          subtitle: "واجهة عصرية مع نظام حجز المواعيد",
          image: "/images/portfolio/lawyer.jpg",
          tags: ["حجز مواعيد", "تصميم عصري", "SEO"]
        },
        {
          title: "موقع مطعم",
          subtitle: "موقع متجاوب مع قائمة طعام تفاعلية",
          image: "/images/portfolio/restaurant.jpg",
          tags: ["قائمة تفاعلية", "طلب أونلاين", "جالري صور"]
        }
      ]
    },
    en: {
      id: 1,
      title: "Website Design",
      description: "We provide responsive and modern website design services that suit various devices with the highest standards of quality and professionalism, focusing on user experience and ease of use",
      icon: "🖥️",
      features: [
        {
          title: "Responsive Design",
          description: "Design compatible with all devices - desktop, mobile, and tablets",
          icon: "responsive",
          bgColor: "bg-blue-50",
          iconColor: "text-blue-500"
        },
        {
          title: "Fast Loading Speed",
          description: "Optimizing website performance and loading speed for excellent user experience",
          icon: "performance",
          bgColor: "bg-green-50",
          iconColor: "text-green-500"
        },
        {
          title: "Search Engine Optimization",
          description: "Designing your website with best SEO practices to increase visibility",
          icon: "seo",
          bgColor: "bg-purple-50",
          iconColor: "text-purple-500"
        },
        {
          title: "Custom Design",
          description: "Unique and custom design that reflects your brand identity and suits your business",
          icon: "customizable",
          bgColor: "bg-orange-50",
          iconColor: "text-orange-500"
        },
        {
          title: "User-Friendly",
          description: "Intuitive and easy-to-use interface ensuring a great experience for visitors",
          icon: "fast",
          bgColor: "bg-teal-50",
          iconColor: "text-teal-500"
        },
        {
          title: "Easy Control Panel",
          description: "Simple control panel that enables you to manage your website content without programming knowledge",
          icon: "customizable",
          bgColor: "bg-indigo-50",
          iconColor: "text-indigo-500"
        }
      ],
      steps: [
        {
          title: "Requirements Analysis",
          description: "We identify your needs and goals for the website, target audience, and required features",
          icon: "🔍",
          color: "text-blue-600"
        },
        {
          title: "Initial Design",
          description: "Designing the main interface and basic internal pages for your review and approval",
          icon: "🎨",
          color: "text-purple-600"
        },
        {
          title: "Development",
          description: "Implementing the design and programming all website features and pages with comprehensive testing",
          icon: "💻",
          color: "text-green-600"
        },
        {
          title: "Review and Delivery",
          description: "Comprehensive website review, training on control panel use, and delivering the finished site",
          icon: "✅",
          color: "text-red-600"
        }
      ],
      faqs: [
        {
          question: "How long does it take to design a website?",
          answer: "The duration varies depending on the size and complexity of the website, but typically ranges from 2-4 weeks for simple and medium-sized websites, and 4-8 weeks for large websites."
        },
        {
          question: "Will the website be compatible with all devices and browsers?",
          answer: "Yes, we design fully responsive websites that adapt to all screen sizes and work perfectly on all major browsers."
        },
        {
          question: "Can I update the website content myself?",
          answer: "Absolutely, we provide an easy-to-use control panel that allows you to update content and images and add new pages without requiring programming knowledge."
        },
        {
          question: "Do you provide website hosting services?",
          answer: "Yes, we offer secure and fast website hosting services at competitive prices, with 24/7 technical support."
        },
        {
          question: "Is search engine optimization (SEO) included in the design?",
          answer: "Yes, all our websites are designed according to basic search engine optimization best practices, and we also offer additional advanced SEO services."
        }
      ],
      portfolio: [
        {
          title: "Real Estate Company",
          subtitle: "Informational website with advanced search system",
          image: "/images/portfolio/real-estate.jpg",
          tags: ["Responsive", "Search System", "SEO"]
        },
        {
          title: "Lawyer Website",
          subtitle: "Modern interface with appointment booking system",
          image: "/images/portfolio/lawyer.jpg",
          tags: ["Booking", "Modern Design", "SEO"]
        },
        {
          title: "Restaurant Website",
          subtitle: "Responsive website with interactive menu",
          image: "/images/portfolio/restaurant.jpg",
          tags: ["Interactive Menu", "Online Orders", "Gallery"]
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
      ctaTitle: "جاهز لإنشاء موقعك الإلكتروني؟",
      ctaText: "تواصل معنا الآن واحصل على استشارة مجانية لمشروعك",
      getQuote: "احصل على عرض سعر",
      
      // عناوين الأقسام
      featuresTitle: "مميزات خدماتنا",
      stepsTitle: "مراحل تنفيذ المشروع",
      faqsTitle: "الأسئلة الشائعة",
      portfolioTitle: "أحدث أعمالنا",
      
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
      ctaTitle: "Ready to Create Your Website?",
      ctaText: "Contact us now and get a free consultation for your project",
      getQuote: "Get a Quote",
      
      // Section titles
      featuresTitle: "Our Service Features",
      stepsTitle: "Project Execution Stages",
      faqsTitle: "Frequently Asked Questions",
      portfolioTitle: "Our Latest Work",
      
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
    document.title = language === 'ar' ? 'ماكس ديزاينر | تصميم مواقع إلكترونية' : 'Max Designer | Website Design';
    
    // التمرير لأعلى الصفحة عند تحميلها
    window.scrollTo(0, 0);
  }, [language]);

  // إرجاع مكون ServicePage مع كافة البيانات اللازمة
  return (
    <ServicePage
      serviceId={1}
      language={language}
      darkMode={darkMode}
      toggleLanguage={toggleLanguage}
      setDarkMode={setDarkMode}
      serviceData={serviceData[language]}
      translations={translations[language]}
      enhancedUI={true}
    />
  );
}

export default WebDesignPage;