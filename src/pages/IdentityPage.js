import React, { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { useAppContext } from '../context/AppContext';

function IdentityPage() {
  // استخدام السياق بدلاً من الاعتماد على props
  const { language, darkMode, toggleLanguage, setDarkMode } = useAppContext();

  // بيانات الخدمة بالعربية والإنجليزية
  const serviceData = {
    ar: {
      id: 4,
      title: "هوية بصرية",
      description: "نقدم خدمة تصميم هوية بصرية متكاملة لمشروعك تعكس شخصية علامتك التجارية وتميزها عن المنافسين، وتشمل الشعار والألوان والخطوط وتطبيقات الهوية المختلفة",
      icon: "🎨",
      features: [
        {
          title: "تصميم شعار مميز",
          description: "تصميم شعار فريد وعصري يعكس هوية علامتك التجارية ويسهل تذكره",
          icon: "branding"
        },
        {
          title: "نظام ألوان متكامل",
          description: "اختيار مجموعة ألوان متناسقة تعبر عن قيم العلامة التجارية وتترك انطباعاً قوياً",
          icon: "customizable"
        },
        {
          title: "اختيار خطوط مناسبة",
          description: "تحديد الخطوط المناسبة لهوية العلامة التجارية بما يضمن قراءة سهلة وتناسق بصري",
          icon: "fast"
        },
        {
          title: "تطبيقات الهوية",
          description: "تصميم تطبيقات الهوية مثل بطاقات العمل، الأوراق الرسمية، المغلفات، والتوقيع الإلكتروني",
          icon: "marketing"
        },
        {
          title: "دليل استخدام الهوية",
          description: "إنشاء دليل شامل لاستخدام الهوية البصرية يوضح كيفية تطبيقها في مختلف الوسائط",
          icon: "branding"
        },
        {
          title: "ملفات بجودة عالية",
          description: "تسليم جميع الملفات بصيغ متنوعة وجودة عالية للاستخدام في الطباعة ووسائل التواصل الاجتماعي",
          icon: "social"
        }
      ],
      steps: [
        {
          title: "جمع المعلومات",
          description: "نجمع المعلومات عن نشاطك التجاري وقيم علامتك التجارية والجمهور المستهدف والمنافسين"
        },
        {
          title: "البحث والاستكشاف",
          description: "نقوم بدراسة وتحليل الأفكار والاتجاهات المختلفة للوصول إلى مفهوم الهوية المناسب"
        },
        {
          title: "تصميم وتطوير",
          description: "نصمم الشعار والعناصر الأساسية للهوية البصرية مع تقديم خيارات متعددة للاختيار بينها"
        },
        {
          title: "تطبيق وتسليم",
          description: "نطبق الهوية البصرية على مختلف الوسائط ونسلم الملفات النهائية بجميع الصيغ اللازمة"
        }
      ],
      faqs: [
        {
          question: "ما الذي يميز الهوية البصرية المتكاملة؟",
          answer: "الهوية البصرية المتكاملة هي نظام تصميم شامل يضم الشعار والألوان والخطوط وأسلوب التصميم الذي يطبق بشكل متسق في جميع نقاط التواصل مع الجمهور، مما يساعد في بناء صورة احترافية وتعزيز التعرف على العلامة التجارية."
        },
        {
          question: "كم من الوقت يستغرق تصميم هوية بصرية متكاملة؟",
          answer: "المدة تختلف حسب حجم المشروع والمتطلبات، ولكن عادة ما تتراوح من 2-3 أسابيع للشعار والهويات البسيطة، و3-6 أسابيع للهويات المتكاملة الشاملة."
        },
        {
          question: "ما هي الملفات التي سأحصل عليها بعد الانتهاء من تصميم الهوية البصرية؟",
          answer: "ستحصل على ملفات الشعار بصيغ متعددة (AI, EPS, PDF, PNG, JPG) مناسبة للطباعة والاستخدام الرقمي، بالإضافة إلى ملفات تطبيقات الهوية مثل بطاقات العمل والأوراق الرسمية، ودليل استخدام العلامة التجارية الذي يوضح قواعد استخدام الهوية."
        },
        {
          question: "هل يمكنني طلب تعديلات على التصميم بعد تسليم الهوية؟",
          answer: "نعم، نقدم عدداً من التعديلات المجانية خلال فترة المشروع، وبعد التسليم النهائي نقدم تعديلات بسيطة مجاناً، أما التعديلات الكبيرة فقد تتطلب رسوماً إضافية."
        },
        {
          question: "هل خدمة تصميم الهوية تشمل تصميم وسائل التواصل الاجتماعي؟",
          answer: "نوفر حزم مختلفة من الخدمات، الحزمة الأساسية تشمل الشعار وعناصر الهوية الأساسية، والحزم المتقدمة تشمل تصميم قوالب وسائل التواصل الاجتماعي والمواد التسويقية الإضافية."
        }
      ],
      portfolio: [
        {
          title: "هوية مطعم",
          subtitle: "هوية بصرية متكاملة مع تطبيقات الهوية"
        },
        {
          title: "هوية شركة عقارية",
          subtitle: "شعار عصري وهوية مميزة للقطاع العقاري"
        },
        {
          title: "هوية متجر ملابس",
          subtitle: "هوية بصرية عصرية وأنيقة"
        }
      ]
    },
    en: {
      id: 4,
      title: "Visual Identity",
      description: "We provide a comprehensive visual identity design service for your project that reflects the personality of your brand and distinguishes it from competitors, including logo, colors, fonts, and various identity applications",
      icon: "🎨",
      features: [
        {
          title: "Distinctive Logo Design",
          description: "Designing a unique and modern logo that reflects your brand identity and is easy to remember",
          icon: "branding"
        },
        {
          title: "Integrated Color System",
          description: "Selecting a harmonious color palette that expresses brand values and leaves a strong impression",
          icon: "customizable"
        },
        {
          title: "Suitable Font Selection",
          description: "Identifying appropriate fonts for the brand identity ensuring easy readability and visual consistency",
          icon: "fast"
        },
        {
          title: "Identity Applications",
          description: "Designing identity applications such as business cards, letterheads, envelopes, and email signatures",
          icon: "marketing"
        },
        {
          title: "Brand Guidelines",
          description: "Creating a comprehensive guide for using the visual identity that explains how to apply it in various media",
          icon: "branding"
        },
        {
          title: "High-Quality Files",
          description: "Delivering all files in various formats and high quality for use in printing and social media",
          icon: "social"
        }
      ],
      steps: [
        {
          title: "Information Gathering",
          description: "We collect information about your business, brand values, target audience, and competitors"
        },
        {
          title: "Research and Exploration",
          description: "We study and analyze different ideas and trends to reach the appropriate identity concept"
        },
        {
          title: "Design and Development",
          description: "We design the logo and basic elements of the visual identity with multiple options to choose from"
        },
        {
          title: "Application and Delivery",
          description: "We apply the visual identity to various media and deliver the final files in all necessary formats"
        }
      ],
      faqs: [
        {
          question: "What distinguishes an integrated visual identity?",
          answer: "An integrated visual identity is a comprehensive design system that includes the logo, colors, fonts, and design style applied consistently across all points of contact with the audience, helping to build a professional image and enhance brand recognition."
        },
        {
          question: "How long does it take to design a comprehensive visual identity?",
          answer: "The duration varies depending on the project size and requirements, but typically ranges from 2-3 weeks for logos and simple identities, and 3-6 weeks for comprehensive integrated identities."
        },
        {
          question: "What files will I receive after completing the visual identity design?",
          answer: "You will receive logo files in multiple formats (AI, EPS, PDF, PNG, JPG) suitable for printing and digital use, in addition to identity application files such as business cards and letterheads, and a brand usage guide that explains the rules for using the identity."
        },
        {
          question: "Can I request modifications to the design after identity delivery?",
          answer: "Yes, we provide a number of free modifications during the project period, and after final delivery we provide minor modifications for free, while major modifications may require additional fees."
        },
        {
          question: "Does the identity design service include social media design?",
          answer: "We offer different service packages, the basic package includes the logo and basic identity elements, and advanced packages include social media templates and additional marketing materials."
        }
      ],
      portfolio: [
        {
          title: "Restaurant Identity",
          subtitle: "Comprehensive visual identity with brand applications"
        },
        {
          title: "Real Estate Company Identity",
          subtitle: "Modern logo and distinctive identity for the real estate sector"
        },
        {
          title: "Clothing Store Identity",
          subtitle: "Modern and elegant visual identity"
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
      ctaTitle: "جاهز لتصميم هويتك البصرية؟",
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
      ctaTitle: "Ready to Design Your Visual Identity?",
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
    document.title = language === 'ar' ? 'ماكس ديزاينر | الهوية البصرية' : 'Max Designer | Visual Identity';
    
    // التمرير لأعلى الصفحة عند تحميلها
    window.scrollTo(0, 0);
  }, [language]);

  return (
    <ServicePage
      serviceId={4}
      language={language}
      darkMode={darkMode}
      toggleLanguage={toggleLanguage}
      setDarkMode={setDarkMode}
      serviceData={serviceData[language]}
      translations={translations[language]}
    />
  );
}

export default IdentityPage;