import React from 'react';
import { motion } from 'framer-motion';

const Spinner = () => (
  <div className="flex justify-center items-center h-64" role="status" aria-label="Loading">
    <div className="relative w-12 h-12">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
          initial={{ scale: 0, opacity: 0.7 }}
          animate={{
            scale: [0, 1, 1],
            opacity: [0.7, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.6,
            ease: 'easeInOut',
          }}
        />
      ))}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 opacity-30" />
    </div>
  </div>
);

export default Spinner;
