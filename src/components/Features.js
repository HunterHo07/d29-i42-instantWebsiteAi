'use client';

import { useEffect, useState } from 'react';
import Section, { SectionTitle } from './Section';
import FeatureCard from './FeatureCard';
import featuresData from '@/data/features.json';

const Features = () => {
  const [features, setFeatures] = useState([]);
  
  useEffect(() => {
    setFeatures(featuresData);
  }, []);
  
  return (
    <Section background="white" padding="lg">
      <SectionTitle 
        title="Powerful Features" 
        subtitle="Everything you need to launch your website quickly and professionally" 
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Features;
