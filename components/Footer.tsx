import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and What we do & Impact */}
          <div>
             <Link href="/">
              {/* Assuming white logo is named white-logo.png in public directory */}
              <Image 
                src="/logo2.png" 
                alt="Cyrus Africa Foundation Logo" 
                width={200} 
                height={48} 
                objectFit="contain"
                className="mb-1"
              />
          

            </Link>

            <div className="flex space-x-4 lg:pl-9 pl-9">
              <a href="https://www.instagram.com/cyrusafricafoundation/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#4db848]">
                <FaInstagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#4db848]">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.linkedin.com/in/cyrus-africa-foundation-b6555b369/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#4db848]">
                <FaLinkedin size={24} />
              </a>
              
            </div>
          </div>

          {/* Where we work */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Our Approach</h3>
            <ul className="space-y-2">
              <li><Link href="/our-approach" className="text-gray-600 hover:text-[#4db848]">Digital Supply Chain Mapping</Link></li>
              <li><Link href="/our-approach" className="text-gray-600 hover:text-[#4db848]">Value Chain Financing</Link></li>
              <li><Link href="/our-approach" className="text-gray-600 hover:text-[#4db848]">Digital Literacy Training</Link></li>
              <li><Link href="/our-approach" className="text-gray-600 hover:text-[#4db848]">Partnerships and Collaborations</Link></li>
            
            </ul>
          </div>

          {/* Get Involved */}
          <div>
             <h3 className="text-lg font-semibold text-gray-700 mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link href="/get-involved" className="text-gray-600 hover:text-[#4db848]">Careers, Jobs, and Internships</Link></li>
              <li><Link href="/get-involved" className="text-gray-600 hover:text-[#4db848]">Why Partner with Us?</Link></li>
              <li><Link href="/get-involved" className="text-gray-600 hover:text-[#4db848]">Funding Opportunities</Link></li>
              <li><Link href="/get-involved" className="text-gray-600 hover:text-[#4db848]">Join Us</Link></li>
              <li><Link href="/ekulibi" className="text-gray-600 hover:text-[#4db848]">The Ekulibi Project</Link></li>
            </ul>
          </div>

          {/* About, Give & Socials */}
          <div>
             <h3 className="text-lg font-semibold text-gray-700 mb-4">About Us</h3>
            <ul className="space-y-2 mb-6">
              <li><Link href="/about" className="text-gray-600 hover:text-[#4db848]">Mission & Vision</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-[#4db848]">Our Values</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-[#4db848]">Theory of Change</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-[#4db848]">Contact</Link></li>
            </ul>


            
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-300 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Cyrus Africa Foundation. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            {/* Language Selector Placeholder */}
            {/* <div className="flex items-center">
              <select className="bg-transparent text-gray-600">
                <option>English</option>
                <option>Español</option>
                <option>Français</option>
              </select>
            </div> */}
            <Link href="/privacy" className="hover:text-[#4db848]">Privacy</Link>
            <Link href="/terms" className="hover:text-[#4db848]">Terms of Use</Link>
            <Link href="/disclosures" className="hover:text-[#4db848]">State Disclosures</Link>
            {/* Cookie Consent Placeholder */}
            {/* <button className="hover:text-[#4db848]">Manage Consent</button> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 