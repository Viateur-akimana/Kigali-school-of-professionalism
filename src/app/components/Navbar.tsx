import React from 'react';
import Link from 'next/link';
import image3 from '../../../public/image 3.png'
import Image from 'next/image';

const Navbar: React.FC = () => {
    return (
        <nav className=" bg-blue shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-gray-900 text-xl font-bold">
                            <Image
                            src={ image3 }
                            alt='Logo'
                            width={160}
                            height={76}
                            />
                        </Link>
                    </div>
                    <div className="flex">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </Link>
                            <Link href="/jobs" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" >
                                Jobs
                            </Link>
                            <Link href="/programs" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                Programs
                            </Link>
                            <Link href="/industries" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                Industries
                            </Link>
                            <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                About
                            </Link>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;