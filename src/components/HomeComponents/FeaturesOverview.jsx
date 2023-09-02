import React from 'react';
import '../../style/Features.css';

const FeaturesOverview = () => {
  const features = [
    {
      icon: 'sales-icon', // Replace with the appropriate icon component or image source
      title: 'Sales Analytics',
      description: 'Analyze your sales data to gain valuable insights.',
    },
    {
      icon: 'inventory-icon', // Replace with the appropriate icon component or image source
      title: 'Inventory Management',
      description: 'Efficiently manage and track your inventory.',
    },
    {
      icon: 'customer-icon', // Replace with the appropriate icon component or image source
      title: 'Customer Insights',
      description: 'Gain insights into your customers to improve engagement.',
    },
    {
      icon: 'financial-icon', // Replace with the appropriate icon component or image source
      title: 'Financial Tracking',
      description: 'Track and manage your financial data with ease.',
    },
  ];

  return (
    <div className="features-overview">
      <h2 className="section-title">Highlight Key Features</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <div className="feature-icon">{/* Render the feature icon here */}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesOverview;
