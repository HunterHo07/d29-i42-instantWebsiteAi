'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Section, { SectionTitle } from '@/components/Section';
import Button from '@/components/Button';

const ShowcasePage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Business', 'Portfolio', 'E-commerce', 'Blog', 'Landing Page'];
  
  const showcaseItems = [
    {
      id: 1,
      title: "Modern Business",
      category: "Business",
      image: "/images/templates/template1.jpg",
      url: "/demo?template=1",
    },
    {
      id: 2,
      title: "Creative Portfolio",
      category: "Portfolio",
      image: "/images/templates/template2.jpg",
      url: "/demo?template=2",
    },
    {
      id: 3,
      title: "Startup Landing",
      category: "Landing Page",
      image: "/images/templates/template3.jpg",
      url: "/demo?template=3",
    },
    {
      id: 4,
      title: "E-commerce Store",
      category: "E-commerce",
      image: "/images/templates/template1.jpg",
      url: "/demo?template=1",
    },
    {
      id: 5,
      title: "Personal Blog",
      category: "Blog",
      image: "/images/templates/template2.jpg",
      url: "/demo?template=2",
    },
    {
      id: 6,
      title: "Agency Website",
      category: "Business",
      image: "/images/templates/template3.jpg",
      url: "/demo?template=3",
    },
    {
      id: 7,
      title: "Photographer Portfolio",
      category: "Portfolio",
      image: "/images/templates/template1.jpg",
      url: "/demo?template=1",
    },
    {
      id: 8,
      title: "Product Launch",
      category: "Landing Page",
      image: "/images/templates/template2.jpg",
      url: "/demo?template=2",
    },
    {
      id: 9,
      title: "Restaurant Website",
      category: "Business",
      image: "/images/templates/template3.jpg",
      url: "/demo?template=3",
    },
  ];
  
  const filteredItems = activeCategory === 'All' 
    ? showcaseItems 
    : showcaseItems.filter(item => item.category === activeCategory);
  
  return (
    <div className="pt-20">
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Showcase
          </motion.h1>
          
          <motion.p 
            className="text-xl text-indigo-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our collection of beautiful, ready-to-use website templates
          </motion.p>
        </div>
      </Section>
      
      <Section background="white" padding="lg">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded">
                  {item.category}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                
                <div className="flex space-x-3">
                  <Button
                    variant="primary"
                    href={item.url}
                    className="flex-1"
                  >
                    Preview
                  </Button>
                  <Button
                    variant="outline"
                    href={`${item.url}&customize=true`}
                    className="flex-1"
                  >
                    Customize
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Don't see what you're looking for? We can create a custom template for your specific needs.
          </p>
          <Button href="/demo" size="lg">
            Try Our Demo
          </Button>
        </div>
      </Section>
      
      <Section background="light" padding="lg">
        <SectionTitle 
          title="How It Works" 
          subtitle="Get your website up and running in three simple steps" 
          centered
        />
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose a Template</h3>
              <p className="text-gray-600">
                Browse our collection of professionally designed templates and choose the one that best fits your needs.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Customize It</h3>
              <p className="text-gray-600">
                Add your business name, logo, and customize the content to match your brand.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Launch It</h3>
              <p className="text-gray-600">
                With one click, your website is live on our servers with a professional subdomain.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ShowcasePage;
