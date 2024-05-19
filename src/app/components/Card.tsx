import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number; // Add imageWidth and imageHeight to CardProps
  imageHeight: number;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, imageAlt, imageWidth, imageHeight }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-2 border flex flex-col items-center justify-center`}>
      <h3 className="text-lg font-semibold mb-2 text-blue-600 text-center">{title}</h3>
      <p className="text-gray-800 text-center mb-4">{description}</p>
      <div className="flex justify-center mb-4">
        <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} className="rounded-lg" />
      </div>
      <div className="text-center">
        <Link href="#" className="text-blue-500 hover:text-blue-700">
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Card;
