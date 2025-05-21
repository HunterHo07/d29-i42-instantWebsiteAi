'use client';

import { motion } from 'framer-motion';
import Section, { SectionTitle } from '@/components/Section';
import Button from '@/components/Button';

const PitchDeckPage = () => {
  return (
    <div className="pt-20">
      <Section background="white" padding="lg">
        <SectionTitle 
          title="Pitch Deck" 
          subtitle="Learn more about our vision and business model" 
          centered
        />
        
        <div className="max-w-4xl mx-auto mt-12">
          {/* Slide 1: Problem */}
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-indigo-600 text-white p-4">
              <h3 className="text-xl font-semibold">The Problem</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                AI website builders (v0.dev, Framer AI, Lovable, GPT, Builder.ai, etc.) are still too "builder-focused":
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Users must select layouts, tweak copy, understand components, and review design logic.</li>
                <li>Most generate only static prototypes or require follow-up dev work for real deployment.</li>
                <li>Results are often generic and not immediately usable or live online.</li>
              </ul>
              
              <p className="text-gray-700 mt-4 mb-4">
                Even developers and tech-savvy users feel the friction:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>They still need to deploy, configure domains, deal with hosting, and tweak code.</li>
                <li>AI outputs still require manual QA, layout fixing, or integration with other tools.</li>
              </ul>
              
              <p className="text-gray-700 mt-4 mb-4">
                Non-technical users are totally left behind:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Don't understand hosting, DNS, design rules, or even how to edit basic elements.</li>
                <li>End up stuck between costly agencies and confusing DIY tools.</li>
              </ul>
            </div>
          </motion.div>
          
          {/* Slide 2: Solution */}
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-indigo-600 text-white p-4">
              <h3 className="text-xl font-semibold">Our Solution</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                instantWebsiteAi empowers anyone to launch a polished, functional website in seconds—no learning curve, no building, no drag-and-drop.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Instant Website Generator</h4>
                  <p className="text-gray-600">Upload icon + name → get a full website preview on our subdomain instantly.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Template Library</h4>
                  <p className="text-gray-600">Dozens of beautiful, mobile-friendly templates created by pros and AI—free to explore.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Admin Panel</h4>
                  <p className="text-gray-600">Edit text/images/colors via a basic dashboard—no coding or site builders.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">One-Click Hosting</h4>
                  <p className="text-gray-600">Host under yourname.instantweb.ai with zero setup.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Slide 3: Market */}
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-indigo-600 text-white p-4">
              <h3 className="text-xl font-semibold">Target Market</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl mb-2">👨‍💼</div>
                  <h4 className="font-semibold mb-1">Solo Founders</h4>
                  <p className="text-gray-600 text-sm">Need quick, professional web presence without the learning curve.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl mb-2">🏪</div>
                  <h4 className="font-semibold mb-1">Small Business Owners</h4>
                  <p className="text-gray-600 text-sm">Want a professional website without the technical complexity.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl mb-2">👩‍💻</div>
                  <h4 className="font-semibold mb-1">Freelancers</h4>
                  <p className="text-gray-600 text-sm">Need to showcase their services quickly and professionally.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl mb-2">🏢</div>
                  <h4 className="font-semibold mb-1">Agencies</h4>
                  <p className="text-gray-600 text-sm">Want to quickly validate MVPs for clients.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl mb-2">👨‍💻</div>
                  <h4 className="font-semibold mb-1">Developers</h4>
                  <p className="text-gray-600 text-sm">Need instant staging sites for projects.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="font-semibold mb-1">Startups</h4>
                  <p className="text-gray-600 text-sm">Need a professional web presence on a tight budget.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Slide 4: Business Model */}
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-indigo-600 text-white p-4">
              <h3 className="text-xl font-semibold">Business Model</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4">Revenue Streams</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>One-time setup fees ($14)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Annual hosting renewals ($9/year)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Custom domain management ($19/year)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Pro design add-ons ($89)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Custom projects (starting at $149)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4">Growth Strategy</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">→</span>
                      <span>Focus on simplicity and instant results</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">→</span>
                      <span>Low entry price point with high retention</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">→</span>
                      <span>Upsell premium features and services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">→</span>
                      <span>Partner with freelancers and agencies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">→</span>
                      <span>Build template marketplace ecosystem</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Ready to join us on this journey?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We're revolutionizing how people get online with a solution that truly puts users first.
            </p>
            <Button href="/demo" size="lg">Try instantWebsiteAi Now</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PitchDeckPage;
