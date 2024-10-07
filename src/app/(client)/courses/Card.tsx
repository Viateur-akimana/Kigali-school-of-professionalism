
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation'

interface CardProps {
  title: string;
  duration: string;
  price: string;
  createdOn: string;
  imageUrl: string | StaticImageData;
}

const Card: React.FC<CardProps> = ({
  title,
  duration,
  price,
  createdOn,
  imageUrl,
}) => {

  const router = useRouter();

  const handleJoin = () => {
    router.push("/courses/join")
  }

  return (
    <div
      data-aos="fade-up"
      className="max-w-sm w-full rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl m-4 bg-white dark:bg-gray-800"
    >
      <div className="relative h-48">
        <Image
          className="m-auto rounded"
          src={imageUrl}
          alt={title}
          layout="fill"
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-200 line-clamp-2">
          {title}
        </h2>
        <p className="text-sm text-gray-800 dark:text-gray-400 mb-2">
          {duration}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{createdOn}</p>
      </div>
      <div className="px-6 pt-4 pb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-800 dark:text-gray-200 text-lg font-semibold">
            {price}
          </span>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          onClick={handleJoin}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default Card;
