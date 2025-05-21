'use client';

import { motion } from 'framer-motion';
import Section, { SectionTitle } from './Section';

// Simple check and x icons
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500 mx-auto">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const XMarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500 mx-auto">
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
  </svg>
);

const comparisonData = [
  {
    feature: 'Instant website generation',
    instantWebsiteAi: true,
    aiBuilders: false,
    traditional: false,
  },
  {
    feature: 'No learning curve',
    instantWebsiteAi: true,
    aiBuilders: false,
    traditional: false,
  },
  {
    feature: 'Immediate hosting with subdomain',
    instantWebsiteAi: true,
    aiBuilders: false,
    traditional: false,
  },
  {
    feature: 'Professional templates',
    instantWebsiteAi: true,
    aiBuilders: true,
    traditional: true,
  },
  {
    feature: 'Editable admin panel',
    instantWebsiteAi: true,
    aiBuilders: true,
    traditional: true,
  },
  {
    feature: 'No technical setup required',
    instantWebsiteAi: true,
    aiBuilders: false,
    traditional: false,
  },
  {
    feature: 'Free to try',
    instantWebsiteAi: true,
    aiBuilders: true,
    traditional: false,
  },
  {
    feature: '7-day design request system',
    instantWebsiteAi: true,
    aiBuilders: false,
    traditional: false,
  },
];

const ComparisonTable = () => {
  return (
    <Section background="light" padding="lg">
      <SectionTitle
        title="Why Choose Us"
        subtitle="See how instantWebsiteAi compares to other website solutions"
        centered
      />

      <div className="mt-12 overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-gray-50 text-gray-700">
              <th className="py-4 px-6 text-left font-semibold">Feature</th>
              <th className="py-4 px-6 text-center font-semibold">
                <div className="flex flex-col items-center">
                  <span className="text-indigo-600">instantWebsiteAi</span>
                  <span className="text-xs text-gray-500 mt-1">Our Solution</span>
                </div>
              </th>
              <th className="py-4 px-6 text-center font-semibold">
                <div className="flex flex-col items-center">
                  <span>AI Website Builders</span>
                  <span className="text-xs text-gray-500 mt-1">(v0.dev, Framer AI, etc.)</span>
                </div>
              </th>
              <th className="py-4 px-6 text-center font-semibold">
                <div className="flex flex-col items-center">
                  <span>Traditional Builders</span>
                  <span className="text-xs text-gray-500 mt-1">(Wix, Squarespace, etc.)</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <motion.tr
                key={index}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <td className="py-4 px-6 border-t">{row.feature}</td>
                <td className="py-4 px-6 border-t text-center">
                  {row.instantWebsiteAi ? (
                    <CheckIcon />
                  ) : (
                    <XMarkIcon />
                  )}
                </td>
                <td className="py-4 px-6 border-t text-center">
                  {row.aiBuilders ? (
                    <CheckIcon />
                  ) : (
                    <XMarkIcon />
                  )}
                </td>
                <td className="py-4 px-6 border-t text-center">
                  {row.traditional ? (
                    <CheckIcon />
                  ) : (
                    <XMarkIcon />
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default ComparisonTable;
