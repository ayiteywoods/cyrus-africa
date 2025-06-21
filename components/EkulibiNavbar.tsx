'use client'

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin  } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const EkulibiNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to check if a link is active
  const isActive = (href: string) => {
    return pathname === href || 
           (href !== '/' && pathname.startsWith(href));
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      <nav className="bg-white shadow-md w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="#">
                <Image 
                  src="/project1.png" 
                  alt="Ekulibi Project Logo" 
                  width={70} 
                  height={48} 
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
            <Link 
                href="/" 
                className={`${isActive('/') ? 'text-[#4db848] font-semibold' : 'text-gray-700'} hover:text-[#4db848] transition-colors`}
              >
                CAF
              </Link>
              <Link 
                href="/about" 
                className={`${isActive('/about') ? 'text-[#4db848] font-semibold' : 'text-gray-700'} hover:text-[#4db848] transition-colors`}
              >
                About Us
              </Link>
              
              <Link 
                href="/our-approach" 
                className={`${isActive('/our-approach') ? 'text-[#4db848] font-semibold' : 'text-gray-700'} hover:text-[#4db848] transition-colors`}
              >
                Our Approach
              </Link>
              <Link 
                href="/impact" 
                className={`${isActive('/impact') ? 'text-[#4db848] font-semibold' : 'text-gray-700'} hover:text-[#4db848] transition-colors`}
              >
                Impact
              </Link>
              <Link 
                href="/get-involved" 
                className={`${isActive('/get-involved') ? 'text-[#4db848] font-semibold' : 'text-gray-700'} hover:text-[#4db848] transition-colors`}
              >
                Get Involved
              </Link>
              <Link 
                href="/blog" 
                className={`${isActive('/blog') ? 'text-[#4db848] font-semibold' : 'text-gray-700'} hover:text-[#4db848] transition-colors`}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className={`${isActive('/contact') ? 'text-[#4db848] font-semibold' : 'text-gray-700'} hover:text-[#4db848] transition-colors`}
              >
                Contact
              </Link>
              <Link 
                href="/give" 
                className={`${isActive('/give') ? 'bg-[#3a9b3a]' : 'bg-[#4db848]'} text-white px-6 py-2 rounded-md hover:bg-[#d0952c] transition-colors`}
              >
                Give
              </Link>
            </div>

            {/* Desktop Social Media Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://www.instagram.com/cyrusafricafoundation" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#4db848]">
                <FaInstagram size={20} />
              </a>
              <a href="https://facebook.com/61577333454908/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#4db848]">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.linkedin.com/in/cyrus-africa-foundation-b6555b369/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#4db848]">
                <FaLinkedin size={20} />
              </a>
              
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#4db848] focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 bg-white">
              <div className="flex flex-col space-y-0 px-2 pt-2">
              <Link 
                  href="/" 
                  className={`${isActive('/') ? 'bg-[#4db848]/10 text-[#4db848]' : 'text-gray-700'} hover:bg-gray-100 px-3 py-3 rounded-md transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  CAF
                </Link>
                <hr className="border-gray-200 mx-2" />
                <Link 
                  href="/about" 
                  className={`${isActive('/about') ? 'bg-[#4db848]/10 text-[#4db848]' : 'text-gray-700'} hover:bg-gray-100 px-3 py-3 rounded-md transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <hr className="border-gray-200 mx-2" />
                
                <Link 
                  href="/our-approach" 
                  className={`${isActive('/our-approach') ? 'bg-[#4db848]/10 text-[#4db848]' : 'text-gray-700'} hover:bg-gray-100 px-3 py-3 rounded-md transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Approach
                </Link>
                <hr className="border-gray-200 mx-2" />
                
                <Link 
                  href="/impact" 
                  className={`${isActive('/impact') ? 'bg-[#4db848]/10 text-[#4db848]' : 'text-gray-700'} hover:bg-gray-100 px-3 py-3 rounded-md transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Impact
                </Link>
                <hr className="border-gray-200 mx-2" />
                
                <Link 
                  href="/blog" 
                  className={`${isActive('/blog') ? 'bg-[#4db848]/10 text-[#4db848]' : 'text-gray-700'} hover:bg-gray-100 px-3 py-3 rounded-md transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <hr className="border-gray-200 mx-2" />
                
                <Link 
                  href="/get-involved" 
                  className={`${isActive('/get-involved') ? 'bg-[#4db848]/10 text-[#4db848]' : 'text-gray-700'} hover:bg-gray-100 px-3 py-3 rounded-md transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Involved
                </Link>
                <hr className="border-gray-200 mx-2" />
                
                <Link 
                  href="/contact" 
                  className={`${isActive('/contact') ? 'bg-[#4db848]/10 text-[#4db848]' : 'text-gray-700'} hover:bg-gray-100 px-3 py-3 rounded-md transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <hr className="border-gray-200 mx-2" />
                
                <div className="px-3 py-3">
                  <Link 
                    href="/give" 
                    className={`${isActive('/give') ? 'bg-[#3a9b3a]' : 'bg-[#4db848]'} text-white px-6 py-2 rounded-md hover:bg-[#d0952c] transition-colors inline-block w-full text-center`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Give
                  </Link>
                </div>
              </div>
              
              <hr className="border-gray-200 my-3 mx-2" />
              
              <div className="flex justify-center space-x-4 px-2 pt-2 pb-2">
                <a href="https://www.instagram.com/cyrusafricafoundation" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#4db848] p-2">
                  <FaInstagram size={20} />
                </a>
                <a href="https://facebook.com/61577333454908/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#4db848] p-2">
                  <FaFacebook size={20} />
                </a>
                <a href="https://www.linkedin.com/in/cyrus-africa-foundation-b6555b369/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#4db848] p-2">
                  <FaLinkedin size={20} />
                </a>
               {/* <a href="https://www.youtube.com/@CyrusMicrocreditServices" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#4db848] p-2">
                  <FaYoutube size={20} />
                </a> */}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default EkulibiNavbar;