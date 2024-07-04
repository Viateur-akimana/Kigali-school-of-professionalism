'use client';

import React from 'react';
import { industries, Industry } from '../utils/data';
import Image from "next/image";
import { motion } from 'framer-motion';

const IndustryCard: React.FC<Industry> = ({ icon, title, features }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
    >
      <Image src={icon} alt={title} width={64} height={64} className="mb-4 group-hover:rotate-12 transition-transform duration-300" />
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <ul className="list-disc list-inside space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{feature}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Industries: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Industries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <IndustryCard key={index} {...industry} />
        ))}
      </div>
    </div>
  );
};

export default Industries;