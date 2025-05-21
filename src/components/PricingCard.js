'use client';

import { motion } from 'framer-motion';
import Button from './Button';

// Simple check icon
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const PricingCard = ({
  name,
  description,
  price,
  renewal,
  features,
  cta,
  popular = false,
  index = 0,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      className={`rounded-lg overflow-hidden ${
        popular ? 'border-2 border-indigo-500 shadow-xl' : 'border border-gray-200 shadow-md'
      } ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      {...props}
    >
      {popular && (
        <div className="bg-indigo-500 text-white text-center py-1 text-sm font-medium">
          Most Popular
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-gray-500 mb-4">{description}</p>

        <div className="mb-6">
          <div className="text-3xl font-bold">{price}</div>
          {renewal && <div className="text-gray-500 text-sm mt-1">then {renewal}</div>}
        </div>

        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          variant={popular ? 'primary' : 'outline'}
          size="lg"
          className="w-full"
          href="/demo"
        >
          {cta}
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingCard;
