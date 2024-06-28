import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, imageAlt, imageWidth, imageHeight }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 flex flex-col items-center justify-center overflow-hidden"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.h3 
        className="text-2xl font-bold mb-3 text-blue-400 text-center"
        whileHover={{ scale: 1.1 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-gray-300 text-center mb-6"
        initial={{ opacity: 0.6 }}
        whileHover={{ opacity: 1 }}
      >
        {description}
      </motion.p>
      <motion.div 
        className="flex justify-center mb-6 overflow-hidden rounded-lg"
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="rounded-lg"
          style={{ width: "auto", height: "auto" }}
        />
      </motion.div>
      <motion.div 
        className="text-center"
        whileHover={{ scale: 1.1 }}
      >
        <Link href="#" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full 
        hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-blue-500/50">
          Learn more
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Card;