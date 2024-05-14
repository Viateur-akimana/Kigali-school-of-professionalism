// components/Card.tsx
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 border" >
      <h3 className="text-lg font-semibold mb-2 text-blue-600 text-center">{title}</h3>
        <p className="text-gray-800 text-center mb-4 ">{description}</p>
      <Image src={imageSrc} alt={imageAlt} width={350} height={300} className="mb-4 rounded-lg flex justify-center" />
      <Link href="#" className="text-blue-500 hover:text-blue-700 text-center">
        Learn more
      </Link>
    </div>
  );
};

export default Card;