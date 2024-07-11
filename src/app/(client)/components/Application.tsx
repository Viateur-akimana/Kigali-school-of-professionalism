import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Application: React.FC = () => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center" 
      id='jobs'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="p-6 bg-white rounded-lg mx-auto justify-center border-t-2 shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.h1 
          className="text-2xl flex mx-auto justify-center text-blue-600 font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Ready for an internship?
        </motion.h1>
        <motion.p 
          className="mb-4 text-gray-600 mx-6 my-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Join our internship program and unlock the potential to become a professional in TECH. Designed specifically for Rwandan graduates and final-year students, this program offers you the opportunity to gain valuable experience and skills to thrive in the industry. Do not miss out on this chance to take your career to the next level. Apply now!
        </motion.p>
        <motion.button 
          className="bg-blue-600 flex mx-auto justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 m-6 rounded"
          whileHover={{ scale: 1.1, backgroundColor: "#2563EB" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href='https://forms.office.com/pages/responsepage.aspx?id=SkBXWhK0KUKNZzA_2mwSSwskkQHjChNOrnrVmzogwhRUMEhFQjE4RkFaRVJRNUdIN0VLMVIxWThGQS4u' target="_blank">
            Apply now
          </Link>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Application;