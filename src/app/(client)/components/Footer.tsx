'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import axios from 'axios';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/send-email', {
        from: 'akimanaviateur94@gmail.com',
        to: 'akimanaviateur94@gmail.com',
        subject: `New message from ${formData.first_name} ${formData.last_name}`,
        message: `${formData.message}\n\nFrom: ${formData.first_name} ${formData.last_name} (${formData.email})`,
      });
      console.log(response.data.message);
      setFormData({ first_name: '', last_name: '', email: '', message: '' });
      alert("Message sent successfully")
    } catch (error) {
      console.error('Error sending email: ', error);
    }
  };
  return (
    <footer className="bg-blue-600 text-white" id="footer">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-4 w-full">
          <div className="flex flex-col-reverse text-md ">
            <p>Address:KG3499st, Kigali</p>
            <p>Email:info@itsolution.com</p>
            <p>Tel:+250 794068800</p>

          </div>

          <form className='my-auto' onSubmit={handleSubmit}>
            <h3 className="font-bold mb-4 justify-center text-2xl text-center">Contact us</h3>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="First name"
                name='first_name'
                value={formData.first_name}
                onChange={handleChange}
                className="py-2 px-3 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:ring-0"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                name='last_name'
                value={formData.last_name}
                onChange={handleChange}
                className="py-2 px-3 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:ring-0 "
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              name='email'
              value={formData.email}
              onChange={handleChange}
              className="w-1/2 py-2 px-3 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:ring-0  mt-2"
              required
            />
            <textarea
              placeholder="Message"
              name='message'
              value={formData.message}
              onChange={handleChange}
              className="w-full py-2 px-3 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:ring-0 text-white mt-2 resize-none"
              required
            />
            <button className="bg-blue-500 text-white font-bold py-2 px-6  rounded-md mt-4 hover:bg-blue-300 transition-colors duration-300" type='submit'>
              Submit
            </button>
          </form>
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
            <Link href="https://twitter.com/Careerdeve10291" aria-label="Twitter">
              <FaTwitter className="text-white hover:text-blue-300 transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;