import React from 'react';
import { useAppContext } from '../context/AppContext';
import translations from '../translations';

function CallToAction({ type = 'default' }) {
  const { language } = useAppContext();
  const t = translations[language];
  
  // تحديد عنوان القسم بناءً على النوع
  let title = t.ctaTitle;
  if (type === 'web-design') {
    title = t.ctaTitleWebDesign;
  } else if (type === 'ecommerce') {
    title = t.ctaTitleEcommerce;
  } else if (type === 'mobile-app') {
    title = t.ctaTitleMobileApp;
  } else if (type === 'identity') {
    title = t.ctaTitleIdentity;
  }
  
  return (
    <section className="cta-section">
      <h3>{title}</h3>
      <p>{t.ctaText}</p>
      <button className="cta-button">{t.getQuote}</button>
    </section>
  );
}

export default CallToAction;