'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Section, { SectionTitle } from './Section';
import TestimonialCard from './TestimonialCard';
import testimonialsData from '@/data/testimonials.json';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    setTestimonials(testimonialsData);

    // Create a floating animation for the testimonial cards
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.testimonial-card');

      cards.forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? 10 : -10,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.3,
        });
      });
    }
  }, []);

  return (
    <Section background="gradient" padding="lg">
      {/* Dark overlay to improve text contrast */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      <div className="mb-12 text-center mx-auto max-w-3xl relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What Our Users Say
        </motion.h2>

        <motion.p
          className="text-xl text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Join thousands of satisfied customers who have launched their websites with instantWebsiteAi
        </motion.p>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative z-10"
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            quote={testimonial.quote}
            name={testimonial.name}
            title={testimonial.title}
            image={testimonial.image}
            index={index}
            className="testimonial-card"
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="relative mt-16 z-10">
        <div className="absolute top-0 left-1/4 w-24 h-24 bg-white rounded-full opacity-10 z-0"></div>
        <div className="absolute bottom-0 right-1/4 w-16 h-16 bg-white rounded-full opacity-10 z-0"></div>

        <div className="text-center relative z-10">
          <motion.div
            className="inline-block bg-white text-indigo-700 font-bold px-6 py-3 rounded-full shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            Join 5,000+ happy customers today!
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
