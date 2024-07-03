// import React from 'react';
// import { motion } from 'framer-motion';

// const Testimonials: React.FC = () => {
//   return (
//     <motion.div 
//       className="mx-4 my-12"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//     >
//       <motion.h2 
//         className="text-2xl font-bold mb-6 text-blue-600 text-center"
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//       >
//         Testimonials
//       </motion.h2>
//       <motion.div 
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//         variants={{
//           hidden: { opacity: 0 },
//           show: {
//             opacity: 1,
//             transition: {
//               staggerChildren: 0.2,
//             },
//           },
//         }}
//         initial="hidden"
//         animate="show"
//       >
//         {testimonials.map((testimonial, index) => (
//           <motion.div
//             key={index}
//             variants={{
//               hidden: { opacity: 0, y: 50 },
//               show: { opacity: 1, y: 0 },
//             }}
//           >
//             <Testimonial
//               name={testimonial.name}
//               role={testimonial.role}
//               testimonial={testimonial.testimonial}
//               avatar={testimonial.avatar}
//             />
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Testimonials;