'use client';

import { motion } from 'framer-motion';

const Section = ({
  children,
  className = '',
  id,
  background = 'white',
  padding = 'lg',
  ...props
}) => {
  const baseClasses = 'w-full relative';

  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    primary: 'bg-indigo-800 text-white', // Darker for better contrast
    gradient: 'bg-gradient-to-br from-indigo-800 to-purple-900 text-white', // Darker for better contrast
  };

  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
  };

  const sectionClasses = `${baseClasses} ${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`;

  return (
    <section id={id} className={sectionClasses} {...props}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {children}
      </div>
    </section>
  );
};

export const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  className = '',
  ...props
}) => {
  const alignment = centered ? 'text-center mx-auto' : '';
  const maxWidth = centered ? 'max-w-3xl' : '';

  return (
    <div className={`mb-12 ${alignment} ${maxWidth} ${className}`} {...props}>
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="text-xl text-gray-700 dark:text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default Section;
