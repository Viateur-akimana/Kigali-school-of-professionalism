import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import heroImage from '../../../../public/who.jpg';
import educationIcon from '../../../../public/Vectors.png';
import certificationIcon from '../../../../public/Vector.png';
import experienceIcon from '../../../../public/Vector.png';

const Choose = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  return (
    <motion.div 
      className="mb-10 border-t-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 
        className="text-3xl text-blue-600 mx-auto m-6 text-center font-bold"
        variants={itemVariants}
      >
        IT Solution Group Limited
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <motion.div 
          className="m-10 md:mb-0"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image src={heroImage} alt="IT Solution Group" width={500} height={500} />
        </motion.div>
        <motion.div className="m-4" variants={containerVariants}>
          <motion.h2 
            className="text-4xl font-bold mb-4 text-blue-600"
            variants={itemVariants}
          >
            Why Choose IT Solution Group?
          </motion.h2>
          {[
            { icon: certificationIcon, title: "Certification", description: "Our team is certified and trained to deliver high-quality solutions." },
            { icon: educationIcon, title: "Education", description: "We provide educational resources to help you stay up-to-date." },
            { icon: experienceIcon, title: "Experience", description: "With years of experience, we deliver proven solutions." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="p-4 rounded-md"
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "#f0f9ff" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold flex items-center mb-2">
                <Image src={item.icon} alt={item.title} width={24} height={24} className="mr-2" />
                {item.title}
              </h3>
              <p className="ml-8">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Choose;