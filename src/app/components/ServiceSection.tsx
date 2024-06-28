import React from 'react';
import { motion } from 'framer-motion';

interface ServiceSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, description, icon }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 border-t-2" 
      id="service"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div 
        className="flex items-center mb-4"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div 
          className="bg-blue-500 text-white p-3 rounded-full mr-4"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <motion.h3 
          className="text-xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {title}
        </motion.h3>
      </motion.div>
      <motion.p 
        className="text-gray-600 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {description}
      </motion.p>
      <motion.button 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn more
      </motion.button>
    </motion.div>
  );
};

export default ServiceSection;