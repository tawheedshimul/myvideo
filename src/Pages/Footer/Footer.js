import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.footer
      className="bg-black py-8"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} MyVideos. All rights reserved.
          </div>
          <div className="flex flex-col sm:flex-row text-center sm:space-x-4 sm:mt-0 mt-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white rounded-full py-2 px-4 text-black font-bold flex items-center"
            onClick={scrollToTop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0L5 10m7-7v18"
              />
            </svg>
            Back to Top
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
