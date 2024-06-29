"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import image1 from "../../../public/hero-image.png";

const Introduction: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.8
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
    },
    tap: { scale: 0.95 }
  };

  return (
     <DirectionAwareHover imageUrl={image1.src} imageClassName='object-cover object-top'>
          <motion.div className="text-center text-white">
            <motion.h1
              className="text-2xl md:text-7xl font-bold mb-6"
              variants={itemVariants}
            >
              IT Solution Group Limited
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8"
              variants={itemVariants}
            >
              The IT Solutions Group is leading the charge towards Rwanda&apos;s tech-driven future. With a steadfast commitment to the transformative power of technology, we are driving change in alignment with Vision 2050. Join us in shaping Rwanda&apos;s bright and prosperous future!
            </motion.p>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <input
                className="bg-white bg-opacity-20 px-10 py-3 rounded-full text-white placeholder-gray-300 border-2 border-white border-opacity-50 focus:outline-none focus:border-opacity-100 transition duration-300"
                placeholder="Search..."
              />
            </motion.div>
          </motion.div>
        </DirectionAwareHover>
    
  );
};

export default Introduction;
