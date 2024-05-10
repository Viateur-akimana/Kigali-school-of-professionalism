import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-4 w-full">
          <div className="flex flex-col-reverse text-md ">
          <p>Address:KG3499st, Kigali</p>
          <p>Email:info@itsolution.com</p>
          <p>Tel:+250 794068800</p>
           
          </div>

          <div className='my-auto'>
            <h3 className="font-bold mb-4 justify-center text-2xl text-center">Contact us</h3>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="First name"
                className="py-2 px-3 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:ring-0 "
              />
              <input
                type="text"
                placeholder="Last name"
                className="py-2 px-3 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:ring-0 "
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-1/2 py-2 px-3 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:ring-0  mt-2"
            />
            <textarea
              placeholder="Message"
              className="w-full py-2 px-3 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:ring-0 text-white mt-2 resize-none"
            />
            <button className="bg-blue-500 text-white font-bold py-2 px-6  rounded-md mt-4 hover:bg-blue-300 transition-colors duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white py-4 px-4 border-t-2">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">© 2024 by ISG. Powered and secured by Rwandasolutions</p>
          <div className="flex space-x-6 text-xl">
            <Link href="#" aria-label="Facebook">
              <FaFacebook className="text-white hover:text-blue-300 transition-colors duration-300" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-white hover:text-blue-300 transition-colors duration-300" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <FaTwitter className="text-white hover:text-blue-300 transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;