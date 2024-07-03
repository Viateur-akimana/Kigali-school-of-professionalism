import React from 'react';
import { InfiniteMovingCards } from "../ui/infinite-moving-card";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: 'Mariya Knowless',
    role: 'Project Manager',
    testimonial: 'Working with this AI Software Development and Tech Blogging firm has been an excellent experience. Their team is knowledgeable, professional, and always willing to go the extra mile to meet our project requirements.',
    avatar: '/avatar.png',
  },
  {
    name: 'John Doe',
    role: 'Marketing Manager',
    testimonial: 'The UI/UX design work and web development services provided by this company were top-notch. They truly understand the importance of user experience and delivered exceptional results.',
    avatar: '/avatar.png',
  },
  {
    name: 'Jane Smith',
    role: 'Product Designer',
    testimonial: 'The collaboration with this team was seamless. They listened to our needs and provided innovative solutions that exceeded our expectations.',
    avatar: '/avatar.png',
  },
];

const MovingCards: React.FC = () => {
  return (
    <InfiniteMovingCards items={testimonials} direction="left" speed="normal" pauseOnHover={true} className="my-8">
      {(item, idx) => (
        <motion.div 
          key={idx}
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              className="relative w-12 h-12 rounded-full overflow-hidden"
              whileHover={{ scale: 1.1 }}
            >
              <Image src={item.avatar} alt={item.name} layout="intrinsic" width={48} height={48} style={{ width: 'auto', height: 'auto' }} />
            </motion.div>
            <motion.div className="ml-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
              <h4 className="text-lg font-bold">{item.name}</h4>
              <p className="text-gray-600">{item.role}</p>
            </motion.div>
          </motion.div>
          <motion.div 
            className="text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {item.testimonial}
          </motion.div>
        </motion.div>
      )}
    </InfiniteMovingCards>
  );
};

export default MovingCards;
