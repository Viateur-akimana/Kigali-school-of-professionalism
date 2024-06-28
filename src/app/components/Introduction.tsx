import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import image1 from "../../../public/hero-image.png";

const Introduction = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
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
    <motion.div 
      className="flex flex-col md:flex-row items-center mb-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="md:w-1/2 m-10 p-10 md:mb-0 space-y-7" variants={containerVariants}>
        <motion.h1 
          className="text-4xl text-blue-600 font-bold mb-4"
          variants={itemVariants}
        >
          IT Solution Group Limited
        </motion.h1>
        <motion.p 
          className="text-lg opacity-4"
          variants={itemVariants}
        >
          The IT Solutions Group is leading the charge towards Rwandas tech-driven future. With a steadfast commitment to the transformative power of technology, we are driving change in alignment with Vision 2050. Join us in shaping Rwanda s bright and prosperous future!
        </motion.p>
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <input
            className="bg-gray-100 px-10 py-2 rounded-md md:w-auto border-2 border-blue-700"
            placeholder="Search..."
          />
        </motion.div>
      </motion.div>
      <motion.div 
        className="relative"
        variants={imageVariants}
      >
        <div className="right-20 top-0">
          <Image src={image1} alt="Image 1" width={500} height={500} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Introduction;