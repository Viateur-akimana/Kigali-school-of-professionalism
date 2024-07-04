'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import image3 from '../../../public/here.png';
import ProgramsDropdown from './ProgramsDropDown';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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

    const navbarVariants: Variants = {
        hidden: { opacity: 0, y: -50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 15 
            }
        }
    };
    const linkVariants = {
        hover: { 
            scale: 1.1, 
            transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
            } 
        }
    };

    const menuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { 
            opacity: 1, 
            height: "auto",
            transition: { 
                duration: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const menuItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
            }
        }
    };

    return (
        <motion.nav 
            className={`shadow-md fixed top-0 left-0 right-0 z-50 ${
                isScrolled ? 'bg-white bg-opacity-100' : 'bg-white bg-opacity-0'
            }`}
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <div className="flex justify-center">
                        <Link href="/" className="text-gray-900 font-bold">
                            <Image src={image3} alt='Logo' width={120} height={60} />
                        </Link>
                    </div>
                    <div className="hidden md:flex mx-auto justify-center">
                        <div className="mx-10 flex items-baseline space-x-12">
                            {['Home', 'Jobs', 'Industries', 'About'].map((item, index) => (
                                <motion.div key={index} variants={linkVariants} whileHover="hover">
                                    <Link 
                                        href={item === 'Home' ? '/' : item === 'About' ? '/about' : item === 'Jobs' ? '/jobs' : item === 'Industries' ? '/industries' : '#'} 
                                        className="text-black hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium"
                                        onClick={() => item === 'Jobs' ? handleScroll('jobs') : item === 'Industries' ? handleScroll('service') : null}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div variants={linkVariants} whileHover="hover">
                                <ProgramsDropdown />
                            </motion.div>
                        </div>
                    </div>
                    <div className="hidden md:flex mx-auto justify-center">
                        <motion.button 
                            className="bg-gradient-to-r from-[#0064E1] to-[#3C3B6E] hover:bg-gradient-to-br text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleScroll('footer')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact
                        </motion.button>
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
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        className="md:hidden"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {['Home', 'Jobs', 'Industries', 'About'].map((item, index) => (
                                <motion.div key={index} variants={menuItemVariants}>
                                    <Link 
                                        href={item === 'Home' ? '/' : item === 'About' ? '/about' : '#'} 
                                        className="text-black hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                                        onClick={() => item === 'Jobs' ? handleScroll('jobs') : item === 'Industries' ? handleScroll('service') : null}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.button 
                                className="bg-gradient-to-r from-[#0064E1] to-[#3C3B6E] hover:bg-gradient-to-br text-white font-bold py-2 px-4 rounded w-full"
                                onClick={() => handleScroll('footer')}
                                variants={menuItemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;