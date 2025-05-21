'use client';

import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  padding = 'md',
  shadow = 'md',
  hover = true,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-lg overflow-hidden';
  
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };
  
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };
  
  const hoverClasses = hover ? 'transition-all duration-300 hover:shadow-lg' : '';
  
  const cardClasses = `${baseClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${hoverClasses} ${className}`;
  
  return (
    <motion.div
      className={cardClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
