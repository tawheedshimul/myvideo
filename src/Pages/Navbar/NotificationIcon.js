import React from 'react';
import { motion } from 'framer-motion';

const NotificationIcon = () => {
  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.3, delay: 0.2 },
    },
  };

  return (
    <motion.div
      className="relative text-white cursor-pointer"
      initial="hidden"
      animate="visible"
      variants={iconVariants}
    >
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22a2 2 0 01-2-2h4a2 2 0 01-2 2zm7-6V11a7 7 0 00-14 0v5"></path>
      </svg>
      <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
    </motion.div>
  );
};

export default NotificationIcon;
