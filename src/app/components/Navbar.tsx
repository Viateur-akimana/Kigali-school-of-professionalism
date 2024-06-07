'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import image3 from '../../../public/here.png';
import ProgramsDropdown from './ProgramsDropDown';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleButtonClick = () => {
        const footerSection = document.getElementById('footer');
        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
      const handleService = () => {
        const serviceSection = document.getElementById('service');
        if (serviceSection) {
            serviceSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const handleJobs = () => {
        const jobSection = document.getElementById('jobs');
        if (jobSection) {
            jobSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <nav className={`shadow-md ${isScrolled ? 'fixed top-0 w-full bg-white z-10' : ''}`}>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <div className="flex mx-auto justify-center">
                        <Link href="/" className="text-gray-900 font-bold">
                            <Image
                                src={image3}
                                alt='Logo'
                                width={120}
                                height={60}
                            />
                        </Link>
                    </div>
                    <div className="flex mx-auto justify-center ">
                        <div className="mx-10 flex items-baseline space-x-12">
                            <Link href="/" className="text-black  hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium">
                                Home
                            </Link> 
                            <Link href="/jobs" className="text-black hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium" onClick={handleJobs}>
                                Jobs
                            </Link>
                            {/* <Link href="/programs" className="text-black hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium">
                                Programs
                            </Link> */}
                            <ProgramsDropdown />

                            <Link href="#" className="text-black hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium" onClick={handleService}>
                                Industries
                            </Link>
                            <Link href="#" className="text-black hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium">
                                About
                            </Link>
                        </div>
                    </div>
                    <div className="flex mx-auto justify-center">
                        <button className="bg-gradient-to-r from-[#0064E1] to-[#3C3B6E] hover:bg-gradient-to-br text-white font-bold py-2 px-4 rounded "  onClick={handleButtonClick}>
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;



