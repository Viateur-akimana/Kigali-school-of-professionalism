// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { TextGenerateEffect } from '../ui/TextGenerateEffect';

// interface TestimonialProps {
//   name: string;
//   role: string;
//   testimonial: string;
//   avatar: string;
// }

// const Testimonial: React.FC<TestimonialProps> = ({ name, role, testimonial, avatar }) => {
//   return (
//     <motion.div 
//       className="bg-white rounded-lg shadow-md p-6"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//       whileHover={{ scale: 1.05 }}
//     >
//       <motion.div 
//         className="flex items-center mb-4"
//         initial={{ x: -20, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//       >
//         <motion.div 
//           className="relative w-12 h-12 rounded-full overflow-hidden"
//           whileHover={{ scale: 1.1 }}
//         >
//           <Image src={avatar} alt={name} layout="intrinsic" width={48} height={48} style={{ width: 'auto', height: 'auto' }} />
//         </motion.div>
//         <motion.div className="ml-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
//           <h4 className="text-lg font-bold">{name}</h4>
//           <p className="text-gray-600">{role}</p>
//         </motion.div>
//       </motion.div>
//       <motion.div 
//         className="text-gray-700"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6, duration: 0.5 }}
//       >
//         <TextGenerateEffect words={testimonial} />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Testimonial;