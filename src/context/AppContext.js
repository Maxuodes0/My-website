import React, { createContext, useState, useContext, useEffect } from 'react';

// إنشاء سياق التطبيق
const AppContext = createContext();

// مزود السياق للتطبيق
export function AppContextProvider({ children }) {
  // حالة اللغة: 'ar' للعربية، 'en' للإنجليزية
  const [language, setLanguage] = useState('ar');
  
  // حالة الوضع المظلم
  const [darkMode, setDarkMode] = useState(false);
  
  // تبديل اللغة
  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };
  
  // تحديث الاتجاه وفئات CSS عند تغيير اللغة أو الوضع المظلم
  useEffect(() => {
    // تعيين اتجاه الصفحة حسب اللغة
    if (language === 'ar') {
      document.body.setAttribute('dir', 'rtl');
      document.body.classList.add('arabic');
      document.body.classList.remove('english');
    } else {
      document.body.setAttribute('dir', 'ltr');
      document.body.classList.add('english');
      document.body.classList.remove('arabic');
    }
    
    // تعيين فئات الوضع المظلم/الفاتح
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [language, darkMode]);
  
  // القيمة التي سيتم توفيرها للمكونات الأبناء
  const contextValue = {
    language,
    darkMode,
    toggleLanguage,
    setLanguage,
    setDarkMode
  };
  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

// هوك مخصص لاستخدام سياق التطبيق
export function useAppContext() {
  return useContext(AppContext);
}

// تصدير المكون AppContextProvider أيضًا باسم AppProvider للتوافق
export const AppProvider = AppContextProvider;

export default AppContext;