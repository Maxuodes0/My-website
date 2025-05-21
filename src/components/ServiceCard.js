import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import translations from '../translations';

function ServiceCard({ service, onClick }) {
  const { language } = useAppContext();
  const t = translations[language];
  
  return (
    <div className="service-card" onClick={() => onClick && onClick(service)}>
      <div className="service-icon">{service.icon}</div>
      <h4>{service.title}</h4>
      <p>{service.description}</p>
      <Link to={service.path} className="service-price">
        {t.orderService}
      </Link>
    </div>
  );
}

export default ServiceCard;