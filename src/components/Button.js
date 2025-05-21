'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Button = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-indigo-700 hover:bg-indigo-800 text-white focus:ring-indigo-500',
    secondary: 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 focus:ring-indigo-500',
    outline: 'bg-transparent hover:bg-indigo-50 text-indigo-700 border border-indigo-700 focus:ring-indigo-500',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-800 focus:ring-gray-500',
    danger: 'bg-red-700 hover:bg-red-800 text-white focus:ring-red-500',
  };

  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const buttonMotion = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <Link href={href} passHref>
        <motion.a
          className={buttonClasses}
          {...buttonMotion}
          {...props}
        >
          {children}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      {...buttonMotion}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
