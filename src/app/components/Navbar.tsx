'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import image3 from '../../../public/here.png';
import ProgramsDropdown from './ProgramsDropDown';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`shadow-md ${isScrolled ? 'fixed top-0 left-0 right-0 bg-white z-10' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <div className="flex justify-center">
                        <Link href="/" className="text-gray-900 font-bold">
                            <Image src={image3} alt='Logo' width={120} height={60} />
                        </Link>
                    </div>
                    <div className="hidden md:flex mx-auto justify-center">
                        <div className="mx-10 flex items-baseline space-x-12">
                            <Link href="/" className="text-black hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium">
                                Home
                            </Link>
                            <Link href="/jobs" className="text-black hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium" onClick={() => handleScroll('jobs')}>
                                Jobs
                            </Link>
                            <ProgramsDropdown />
                            <Link href="#" className="text-black hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium" onClick={() => handleScroll('service')}>
                                Industries
                            </Link>
                            <Link href="/about" className="text-black hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium">
                                About
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex mx-auto justify-center">
                        <button className="bg-gradient-to-r from-[#0064E1] to-[#3C3B6E] hover:bg-gradient-to-br text-white font-bold py-2 px-4 rounded" onClick={() => handleScroll('footer')}>
                            Contact
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-black focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="text-black hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </Link>
                        <Link href="/jobs" className="text-black hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium" onClick={() => handleScroll('jobs')}>
                            Jobs
                        </Link>
                        <Link href="#" className="text-black hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium" onClick={() => handleScroll('service')}>
                            Industries
                        </Link>
                        <Link href="/about" className="text-black hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                            About
                        </Link>
                        <button className="bg-gradient-to-r from-[#0064E1] to-[#3C3B6E] hover:bg-gradient-to-br text-white font-bold py-2 px-4 rounded w-full" onClick={() => handleScroll('footer')}>
                            Contact
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
