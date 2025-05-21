'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from './Button';

const TemplateCard = ({
  name,
  description,
  image,
  category,
  features,
  demoUrl,
  index = 0,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      {...props}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded">
          {category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-700 mb-4 line-clamp-2">{description}</p>

        <div className="mb-5">
          <h4 className="text-sm font-medium text-gray-800 mb-2">Features:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            {features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
            {features.length > 3 && (
              <li className="text-indigo-700 font-medium">+{features.length - 3} more</li>
            )}
          </ul>
        </div>

        <div className="flex space-x-3">
          <Button
            variant="primary"
            href={demoUrl}
            className="flex-1"
          >
            Preview
          </Button>
          <Button
            variant="outline"
            href={`${demoUrl}&customize=true`}
            className="flex-1"
          >
            Customize
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default TemplateCard;
