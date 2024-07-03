import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { testimonials } from '../utils/data';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentSlide, isHovered]);

  const { name, role, testimonial, avatar } = testimonials[currentSlide];

  return (
    <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-4xl font-bold mb-6 text-blue-600 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Our Client Testimonials
      </motion.h2>
      <div className="max-w-2xl mx-auto relative">
        <div className="relative flex items-center justify-center">
          <button
            className="absolute left-0 p-2 bg-blue-200 rounded-full shadow-md focus:outline-none transform -translate-x-24"
            onClick={prevSlide}
          >
            <svg
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="relative w-full">
            <AnimatePresence mode='wait'>
              <Testimonial
                key={currentSlide}
                name={name}
                role={role}
                testimonial={testimonial}
                avatar={avatar}
                setIsHovered={setIsHovered}
              />
            </AnimatePresence>
          </div>
          <button
            className="absolute right-0 p-2 bg-blue-200 rounded-full shadow-md focus:outline-none transform translate-x-24"
            onClick={nextSlide}
          >
            <svg
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full bg-blue-400 mx-1 focus:outline-none ${index === currentSlide ? 'bg-blue-600 w-4 h-4' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface TestimonialProps {
  name: string;
  role: string;
  testimonial: string;
  avatar: string;
  setIsHovered: (isHovered: boolean) => void;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, testimonial, avatar, setIsHovered }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ boxShadow: '0 4px 16px rgba(0, 123, 255, 0.3)' }}
    >
      <motion.div
        className="flex items-center mb-4"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div
          className="relative w-12 h-12 rounded-full overflow-hidden"
          whileHover={{ scale: 1.2 }}
        >
          <Image src={avatar} alt={name} layout="intrinsic" width={48} height={48} style={{ width: 'auto', height: 'auto' }} />
        </motion.div>
        <motion.div className="ml-4 flex-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
          <h4 className="text-lg font-bold">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </motion.div>
      </motion.div>
      <motion.div
        className="text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {testimonial}
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
