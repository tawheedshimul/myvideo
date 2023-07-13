import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-black to-red-500"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="text-5xl text-white font-bold mb-4 inline-block">
            <span
              className="inline-block animate-bounce"
              style={{ animationDelay: '0.2s' }}
            >
              W
            </span>
            <span
              className="inline-block animate-bounce"
              style={{ animationDelay: '0.4s' }}
            >
              e
            </span>
            <span
              className="inline-block animate-bounce"
              style={{ animationDelay: '0.6s' }}
            >
              l
            </span>
            <span
              className="inline-block animate-bounce"
              style={{ animationDelay: '0.8s' }}
            >
              c
            </span>
            <span
              className="inline-block animate-bounce"
              style={{ animationDelay: '1s' }}
            >
              o
            </span>
            <span
              className="inline-block animate-bounce"
              style={{ animationDelay: '1.2s' }}
            >
              m
            </span>
            <span
              className="inline-block animate-bounce"
              style={{ animationDelay: '1.4s' }}
            >
              e
            </span>
           
            <span
              className="inline-block animate-bounce"
              style={{ animationDelay: '1.6s' }}
            >
              !
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white mt-4">
            Explore a world of entertainment at your fingertips
          </p>
          <motion.div
            className="mt-10"
            whileHover="hover"
            variants={buttonVariants}
          >
            <Link
              to="/movies"
              className="inline-block bg-black text-red-500 hover:text-red-500 py-3 px-6 rounded-lg font-semibold uppercase text-lg transition-colors duration-300"
            >
              Browse Movies
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
