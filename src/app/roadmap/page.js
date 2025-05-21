'use client';

import { motion } from 'framer-motion';
import Section, { SectionTitle } from '@/components/Section';
import Button from '@/components/Button';

const RoadmapPage = () => {
  const phases = [
    {
      title: "Phase 1 (Current)",
      description: "MVP Launch",
      features: [
        "Template preview",
        "Hosting with subdomain",
        "Admin panel for editing",
        "Template library on GitHub",
        "7-day request system",
      ],
      status: "active",
    },
    {
      title: "Phase 2",
      description: "Enhanced User Experience",
      features: [
        "Multi-site user dashboard",
        "Basic analytics (visits, edits)",
        "Access control (public/private)",
        "Improved template customization",
        "User feedback system",
      ],
      status: "upcoming",
    },
    {
      title: "Phase 3",
      description: "Advanced Editing",
      features: [
        "Drag-and-drop editor (optional, for advanced users)",
        "Team collaboration support",
        "Version history and rollbacks",
        "Advanced SEO tools",
        "Performance optimization",
      ],
      status: "planned",
    },
    {
      title: "Phase 4",
      description: "Content Management",
      features: [
        "Full CMS integration",
        "Marketplace of premium templates",
        "Blog and content publishing tools",
        "Media library management",
        "Scheduled content publishing",
      ],
      status: "planned",
    },
    {
      title: "Phase 5",
      description: "Ecosystem Expansion",
      features: [
        "Plugin ecosystem (forms, chat, analytics)",
        "AI-powered content population",
        "White-label plans for resellers & agencies",
        "API for third-party integrations",
        "Advanced e-commerce capabilities",
      ],
      status: "planned",
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
            Product Roadmap
          </motion.h1>
          
          <motion.p 
            className="text-xl text-indigo-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our vision for the future of instantWebsiteAi
          </motion.p>
        </div>
      </Section>
      
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-indigo-100"></div>
            
            {phases.map((phase, index) => (
              <div key={index} className="relative mb-16">
                <motion.div
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-md z-10 mt-6 md:mt-0 md:top-1/2 md:-translate-y-1/2" style={{ 
                    backgroundColor: phase.status === 'active' ? '#4F46E5' : phase.status === 'upcoming' ? '#6366F1' : '#A5B4FC' 
                  }}></div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 pl-10 md:pl-0 md:pr-12 md:text-right">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                      phase.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : phase.status === 'upcoming'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                    }`}>
                      {phase.status === 'active' 
                        ? 'Current' 
                        : phase.status === 'upcoming'
                          ? 'Coming Soon'
                          : 'Planned'}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{phase.title}</h3>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                  </div>
                  
                  <div className="md:w-1/2 pl-10 md:pl-12 mt-4 md:mt-0">
                    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {phase.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      <Section background="light" padding="lg">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title="Help Shape Our Future" 
            subtitle="We value your input in determining our product roadmap" 
            centered
          />
          
          <div className="mt-12 bg-white rounded-lg p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Feature Requests</h3>
                <p className="text-gray-600 mb-6">
                  Have an idea for a feature that would make instantWebsiteAi even better? We'd love to hear it! Submit your feature requests and help shape the future of our product.
                </p>
                <Button href="#" variant="primary">
                  Submit Feature Request
                </Button>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Beta Testing</h3>
                <p className="text-gray-600 mb-6">
                  Want early access to new features? Join our beta testing program and be the first to try out new capabilities before they're released to the public.
                </p>
                <Button href="#" variant="outline">
                  Join Beta Program
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Try instantWebsiteAi today and see how easy it is to get your website up and running in seconds.
            </p>
            <Button href="/demo" size="lg">Try It Now — It's Free</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default RoadmapPage;
