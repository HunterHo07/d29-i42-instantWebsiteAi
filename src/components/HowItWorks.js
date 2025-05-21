'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section, { SectionTitle } from './Section';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: '01',
    title: 'Enter Your Business Info',
    description: 'Simply enter your business name and upload your logo. That\'s all we need to get started.',
    icon: '📝',
  },
  {
    number: '02',
    title: 'Preview Your Website',
    description: 'Instantly see your website with your branding applied to our professional templates.',
    icon: '👁️',
  },
  {
    number: '03',
    title: 'Launch & Customize',
    description: 'Choose to host on our subdomain instantly or make customizations through our simple admin panel.',
    icon: '🚀',
  },
];

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    });
    
    stepsRef.current.forEach((step, index) => {
      timeline.fromTo(
        step,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: 'power3.out',
        },
        index * 0.2
      );
    });
    
    return () => {
      if (timeline.scrollTrigger) {
        timeline.scrollTrigger.kill();
      }
    };
  }, []);
  
  return (
    <Section id="how-it-works" background="light" padding="lg" ref={sectionRef}>
      <SectionTitle 
        title="How It Works" 
        subtitle="Get your website up and running in three simple steps" 
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            ref={el => stepsRef.current[index] = el}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Step number */}
            <div className="text-7xl font-bold text-indigo-100 absolute -top-6 -left-4 z-0">
              {step.number}
            </div>
            
            {/* Step content */}
            <div className="bg-white rounded-lg p-6 shadow-md relative z-10">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
            
            {/* Connector line (only for first two steps) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-indigo-200 z-0">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full"></div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default HowItWorks;
