import React from 'react';

function FeatureCard({ feature }) {
  return (
    <div className="feature">
      <div className="feature-icon"><span>{feature.icon}</span></div>
      <h4>{feature.title}</h4>
      <p>{feature.description}</p>
    </div>
  );
}

export default FeatureCard;