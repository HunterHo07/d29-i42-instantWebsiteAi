'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const TestimonialCard = ({
  quote,
  name,
  title,
  image,
  index = 0,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      className={`bg-white rounded-lg p-6 shadow-md ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      {...props}
    >
      <div className="mb-4">
        <svg className="h-8 w-8 text-indigo-500 mb-2" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-gray-700 italic">{quote}</p>
      </div>

      <div className="flex items-center">
        <div className="flex-shrink-0 mr-3">
          <Image
            src={image}
            alt={name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-700 text-sm">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
