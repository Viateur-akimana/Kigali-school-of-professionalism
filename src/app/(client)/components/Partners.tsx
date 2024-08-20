import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {logoData} from "../../utils//data"


interface CompanyLogosProps {}

const Partners: React.FC<CompanyLogosProps> = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

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
      className="border-t-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 className="text-2xl font-bold mb-2 text-blue-600 text-center m-4 p-4" variants={itemVariants}>
        Trusted by
      </motion.h2>
      <motion.p className="text-gray-600 mb-6 text-center" variants={itemVariants}>
        Trusted by hundreds of companies
      </motion.p>
      <div className="md:hidden">
        <Slider {...settings}>
          {logoData.map((logo, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white rounded-lg shadow-md p-6 flex items-center mx-auto">
                <Image src={logo.src} alt={logo.alt} width={100} height={100} />
                <span className={`ml-6 text-xl ${logo.color} px-8 font-bold`}>{logo.alt}</span>
              </div>
            </motion.div>
          ))}
        </Slider>
        
      </div>
      <motion.div className="hidden md:flex mx-auto justify-center my-4 space-x-4" variants={containerVariants}>
        {logoData.map((logo, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex items-center"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 }
            }}
          >
            <Image src={logo.src} alt={logo.alt} width={100} height={100} />
            <motion.span 
              className={`ml-4 text-lg ${logo.color} px-7 font-bold`}
              whileHover={{ scale: 1.1 }}
            >
              {logo.alt}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Partners;
