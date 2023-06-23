import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div
      className="banner-container bg-cover bg-center h-96 flex justify-center items-center"
      style={{ backgroundImage: "url('https://img.freepik.com/free-vector/organic-flat-gamer-room-illustrated_23-2148933090.jpg?w=740&t=st=1687502743~exp=1687503343~hmac=228e9523ca2f9fca6856215cebcdbbdea048abfc0b159e62c82922b7dc2d9753')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="banner-content text-center"
      >
        <h1 className="banner-title text-4xl lg:text-6xl font-bold text-white mb-6">
          Discover a World of Videos
        </h1>
        <p className="banner-description text-lg lg:text-xl text-gray-300 mb-8">
          Explore a vast collection of videos, from music and movies to tutorials and documentaries.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="banner-button bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Banner;
