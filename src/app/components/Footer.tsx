import React from 'react';
// import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

interface FooterProps {
  email: string;
  phone: string;
  address: string;
}

// const prisma = new PrismaClient();

// export async function getStaticProps() {
//   const contact = await prisma.contact.findUnique({
//     where: {
//       id: 1, // Assuming you have a single contact record in the database
//     },
//   });

//   if (!contact) {
//     throw new Error('Contact information not found');
//   }

//   return {
//     props: {
//       email: contact.email,
//       phone: contact.phone,
//       address: contact.address,
//     },
//   };
// }

const Footer: React.FC<FooterProps> = ({ email, phone, address }) => {
  return (
    <footer className="bg-blue-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p>Tel: {phone}</p>
            <p>Email: {email}</p>
            <p>Address: {address}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p>&copy; 2024 by ISG Powered and secured by Rwandasolutions</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-linkedin"></i>
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;