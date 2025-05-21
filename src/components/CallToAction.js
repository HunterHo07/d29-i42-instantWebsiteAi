'use client';

import { motion } from 'framer-motion';
import Button from './Button';

const CallToAction = () => {
  return (
    <div className="bg-indigo-900 py-16 relative">
      {/* Dark overlay to improve text contrast */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to launch your website in seconds?
          </motion.h2>

          <motion.p
            className="text-xl text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join thousands of businesses who have simplified their web presence with instantWebsiteAi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              href="/demo"
              size="lg"
              className="bg-white text-indigo-800 hover:bg-gray-100 font-bold"
            >
              Try It Now — It's Free
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
