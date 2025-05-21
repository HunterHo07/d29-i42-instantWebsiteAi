'use client';

import { useEffect, useState } from 'react';
import Section, { SectionTitle } from './Section';
import PricingCard from './PricingCard';
import pricingData from '@/data/pricing.json';

const Pricing = () => {
  const [pricing, setPricing] = useState([]);
  
  useEffect(() => {
    setPricing(pricingData);
  }, []);
  
  return (
    <Section id="pricing" background="white" padding="lg">
      <SectionTitle 
        title="Simple, Transparent Pricing" 
        subtitle="Choose the plan that works best for you" 
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {pricing.map((plan, index) => (
          <PricingCard
            key={plan.id}
            name={plan.name}
            description={plan.description}
            price={plan.price}
            renewal={plan.renewal}
            features={plan.features}
            cta={plan.cta}
            popular={plan.popular}
            index={index}
          />
        ))}
      </div>
      
      <div className="mt-16 bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-xl font-semibold mb-4">Need something custom?</h3>
        <p className="text-gray-600 mb-4">
          We offer custom projects starting at $149. Contact us to discuss your specific requirements.
        </p>
        <div className="flex items-center space-x-2 text-indigo-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <a href="mailto:contact@instantwebsiteai.com" className="font-medium hover:underline">
            contact@instantwebsiteai.com
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
