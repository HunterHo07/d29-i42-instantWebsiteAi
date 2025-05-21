'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section, { SectionTitle } from '@/components/Section';
import Button from '@/components/Button';

const WhyUsPage = () => {
  const reasons = [
    {
      title: "We give users a working site, not just a design",
      description: "Other AI tools generate designs or code snippets that still need to be deployed. We give you a fully functional website that's immediately live on the web.",
      icon: "🌐",
    },
    {
      title: "No learning curve. No building. Just launch.",
      description: "Traditional website builders require you to learn their interface and build your site piece by piece. With instantWebsiteAi, you simply enter your business name and logo, and you're done.",
      icon: "🚀",
    },
    {
      title: "Instant preview—just upload logo + name, done",
      description: "See your professional website instantly, with your branding applied to our templates. No waiting, no complex design decisions.",
      icon: "👁️",
    },
    {
      title: "Professional templates, editable admin panel included",
      description: "Our templates are designed by professionals and optimized for conversions. Plus, you can easily edit your content through our simple admin panel.",
      icon: "🎨",
    },
    {
      title: "No time wasted choosing colors, grids, layout logic",
      description: "We've already made the design decisions for you, based on best practices and what works. Focus on your business, not on design details.",
      icon: "⏱️",
    },
    {
      title: "One-click hosting. Real subdomain. Real website.",
      description: "Your website is instantly hosted on our servers with a professional subdomain. No need to figure out hosting or DNS configuration.",
      icon: "☁️",
    },
    {
      title: "We serve people, not just prompts",
      description: "Our focus is on solving real problems for real users, not just generating code or designs. We're here to make web presence effortless for everyone.",
      icon: "🤝",
    },
  ];

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
            Why Choose instantWebsiteAi?
          </motion.h1>
          
          <motion.p 
            className="text-xl text-indigo-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We're revolutionizing how people get online with a solution that truly puts users first.
          </motion.p>
        </div>
      </Section>
      
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                className="flex flex-col md:flex-row gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center text-4xl flex-shrink-0">
                  {reason.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 bg-gray-50 rounded-lg p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Commitment to You</h3>
                <p className="text-gray-600 mb-6">
                  We believe that everyone deserves a professional web presence, regardless of technical skill or budget. That's why we've created a solution that makes getting online truly effortless.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>7-day happiness guarantee with unlimited design requests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Transparent, affordable pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Continuous improvements and new templates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Dedicated support to help you succeed online</span>
                  </li>
                </ul>
                <Button href="/demo" size="lg">Try It Now — It's Free</Button>
              </div>
              
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-center">
                    <div className="text-5xl mb-4">💯</div>
                    <h4 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h4>
                    <p className="text-gray-600 text-sm">
                      If you're not happy with your website, we'll work with you until you are.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section background="light" padding="lg">
        <SectionTitle 
          title="Hear From Our Customers" 
          subtitle="Join thousands of satisfied users who have simplified their web presence" 
          centered
        />
        
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <Image 
                  src={`/images/testimonials/person${i}.jpg`} 
                  alt="Customer" 
                  width={48} 
                  height={48} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Happy Customer</h4>
                  <p className="text-gray-500 text-sm">Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "instantWebsiteAi saved me so much time and frustration. I had my business website up and running in minutes, not weeks. Highly recommended!"
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default WhyUsPage;
