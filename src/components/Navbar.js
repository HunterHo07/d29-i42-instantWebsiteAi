'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-black/50 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.svg"
              alt="instantWebsiteAi Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className={`font-bold text-xl ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              instantWebsiteAi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/demo"
              className={`font-medium hover:text-indigo-500 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Demo
            </Link>
            <Link
              href="/pitch-deck"
              className={`font-medium hover:text-indigo-500 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Pitch Deck
            </Link>
            <Link
              href="/why-us"
              className={`font-medium hover:text-indigo-500 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Why Us
            </Link>
            <Link
              href="/showcase"
              className={`font-medium hover:text-indigo-500 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Showcase
            </Link>
            <Link
              href="/roadmap"
              className={`font-medium hover:text-indigo-500 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Roadmap
            </Link>
            <Link
              href="/demo"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Try Now
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke={scrolled ? 'currentColor' : 'white'}
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white shadow-lg rounded-b-lg mx-4 mt-2"
        >
          <div className="flex flex-col py-4 px-4 space-y-4">
            <Link
              href="/demo"
              className="font-medium text-gray-700 hover:text-indigo-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Demo
            </Link>
            <Link
              href="/pitch-deck"
              className="font-medium text-gray-700 hover:text-indigo-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pitch Deck
            </Link>
            <Link
              href="/why-us"
              className="font-medium text-gray-700 hover:text-indigo-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Why Us
            </Link>
            <Link
              href="/showcase"
              className="font-medium text-gray-700 hover:text-indigo-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Showcase
            </Link>
            <Link
              href="/roadmap"
              className="font-medium text-gray-700 hover:text-indigo-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Roadmap
            </Link>
            <Link
              href="/demo"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Try Now
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
