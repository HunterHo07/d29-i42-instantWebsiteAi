'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Button from './Button';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' },
      '-=0.8'
    );

    // Create floating animation for the image
    gsap.to(imageRef.current, {
      y: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Create particles in the background
    const particles = [];
    const particleCount = 20;
    const colors = ['#6366F1', '#8B5CF6', '#EC4899', '#3B82F6'];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full';

      const size = Math.random() * 10 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.opacity = (Math.random() * 0.5 + 0.1).toString();

      const x = Math.random() * 100;
      const y = Math.random() * 100;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;

      heroRef.current.appendChild(particle);
      particles.push(particle);

      gsap.to(particle, {
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    return () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white"
    >
      {/* Background glow effect - reduced opacity for better text readability */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-indigo-500 rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-purple-500 rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-pink-500 rounded-full filter blur-[100px] opacity-10"></div>
      </div>

      {/* Dark overlay to improve text contrast */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
            >
              Launch Your Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-300">in Seconds</span>, Not Weeks
            </h1>

            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl text-white mb-8"
            >
              No learning curve. No building. Just enter your business name and logo, and instantly see your site on a free subdomain.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                href="/demo"
                size="lg"
                className="bg-gradient-to-r from-indigo-700 to-purple-800 hover:from-indigo-800 hover:to-purple-900 border-0"
              >
                Try It Now
              </Button>

              <Button
                href="#how-it-works"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20"
              >
                How It Works
              </Button>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="relative mx-auto max-w-md">
              {/* Browser mockup */}
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                {/* Browser header */}
                <div className="bg-gray-100 px-4 py-2 border-b flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="mx-auto bg-white rounded-full flex items-center px-3 py-1 text-xs text-gray-500">
                    yourname.instantweb.ai
                  </div>
                </div>

                {/* Browser content */}
                <div className="relative">
                  <div className="aspect-[16/9] bg-gradient-to-b from-indigo-50 to-white"></div>

                  {/* Website content mockup */}
                  <div className="absolute inset-0 p-4 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-indigo-600 rounded-md"></div>
                        <div className="font-bold text-gray-800">YourBusiness</div>
                      </div>
                      <div className="flex space-x-4">
                        <div className="w-12 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-12 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-12 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col">
                      <div className="h-1/2 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-32 h-2 bg-gray-800 rounded-full mx-auto mb-2"></div>
                          <div className="w-48 h-2 bg-gray-800 rounded-full mx-auto mb-4"></div>
                          <div className="w-24 h-8 bg-indigo-600 rounded-md mx-auto"></div>
                        </div>
                      </div>

                      <div className="h-1/2 grid grid-cols-3 gap-2">
                        <div className="bg-gray-100 rounded-md"></div>
                        <div className="bg-gray-100 rounded-md"></div>
                        <div className="bg-gray-100 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white p-3 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <div className="w-16 h-2 bg-gray-300 rounded-full mb-2"></div>
                <div className="w-12 h-2 bg-gray-300 rounded-full"></div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              >
                <div className="w-12 h-2 bg-gray-300 rounded-full mb-2"></div>
                <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
