import React from 'react';
import '../../style/PricingInformation.css';
const PricingInformation = () => {
  const pricingTiers = [
    {
      tier: 'Basic',
      price: '$19/month',
      features: ['Sales Analytics', 'Inventory Management', 'Customer Insights'],
    },
    {
      tier: 'Pro',
      price: '$39/month',
      features: ['All Basic features', 'Financial Tracking', 'Custom Reports'],
    },
    {
      tier: 'Enterprise',
      price: 'Contact Us',
      features: ['All Pro features', 'Dedicated Support', 'Advanced Customization'],
    },
  ];

  return (
    <div className="pricing-information">
      <h2>Pricing Tiers</h2>
      <div className="pricing-cards">
        {pricingTiers.map((tier, index) => (
          <div className="pricing-card" key={index}>
            <h3 className="tier-name">{tier.tier}</h3>
            <p className="price">{tier.price}</p>
            <ul className="features-list">
              {tier.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="cta-button">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingInformation;
