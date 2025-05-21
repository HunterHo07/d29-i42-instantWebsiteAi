'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Section, { SectionTitle } from './Section';
import TemplateCard from './TemplateCard';
import Button from './Button';
import templatesData from '@/data/templates.json';

const Templates = () => {
  const [templates, setTemplates] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredTemplates, setFilteredTemplates] = useState([]);
  
  useEffect(() => {
    setTemplates(templatesData);
    setFilteredTemplates(templatesData);
  }, []);
  
  const categories = ['All', ...new Set(templatesData.map(template => template.category))];
  
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    
    if (category === 'All') {
      setFilteredTemplates(templates);
    } else {
      setFilteredTemplates(templates.filter(template => template.category === category));
    }
  };
  
  return (
    <Section background="light" padding="lg">
      <SectionTitle 
        title="Beautiful Templates" 
        subtitle="Choose from our collection of professionally designed templates" 
        centered
      />
      
      <div className="flex flex-wrap justify-center gap-2 mb-8 mt-8">
        {categories.map((category, index) => (
          <motion.button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => handleCategoryChange(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredTemplates.map((template, index) => (
          <TemplateCard
            key={template.id}
            name={template.name}
            description={template.description}
            image={template.image}
            category={template.category}
            features={template.features}
            demoUrl={template.demoUrl}
            index={index}
          />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button href="/demo" size="lg">
          View All Templates
        </Button>
      </div>
    </Section>
  );
};

export default Templates;
