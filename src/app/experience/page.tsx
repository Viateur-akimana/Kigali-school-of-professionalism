import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import experienceImage from '../../../public/experience.jpg';

const Experience: React.FC = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100 
      }
    }
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="text-4xl font-bold mb-6 text-center"
        variants={itemVariants}
      >
        Gain Experience
      </motion.h1>

      <motion.p 
        className="text-lg mb-8 text-center"
        variants={itemVariants}
      >
        Our experience program is designed to provide hands-on learning opportunities for individuals looking to enhance their skills and knowledge. Whether you are a recent graduate or a seasoned professional, our program offers a range of experiences to help you grow and succeed in your career.
      </motion.p>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        variants={itemVariants}
      >
        <div>
          <h2 className="text-2xl font-semibold mb-4">Benefits of Our Experience Program</h2>
          <ul className="list-disc list-inside">
            {['Hands-on learning opportunities', 'Access to cutting-edge technology and tools', 'Networking with industry professionals', 'Mentorship and guidance from experienced mentors'].map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ scale: 1.05, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Image 
            src={experienceImage} 
            alt="Experience Image" 
            layout="responsive" 
            width={500} 
            height={500} 
            className="rounded-lg" 
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="text-center"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-semibold mb-4">Ready to gain experience?</h2>
        <p className="mb-6">
          Join our experience program and take your skills to the next level. Whether you are interested in technology, business, or creative fields, we have opportunities for you to learn, grow, and succeed. Apply now and start your journey!
        </p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="https://forms.office.com/pages/responsepage.aspx?id=SkBXWhK0KUKNZzA_2mwSSwskkQHjChNOrnrVmzogwhRUMEhFQjE4RkFaRVJRNUdIN0VLMVIxWThGQS4u" 
            passHref 
            target="_blank"
          >
            <motion.a 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center inline-block"
              whileHover={{ 
                backgroundColor: '#2563EB',
                boxShadow: '0px 0px 8px rgb(59, 130, 246)'
              }}
            >
              Register for an Experience
            </motion.a>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;