'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaBriefcase, FaHandshake, FaDonate, FaUsers } from 'react-icons/fa'; // Example icons
import { motion } from 'framer-motion';

export default function GetInvolvedPage() {
  return (
    <div>
      {/* Page Header with Full-width Image */}
      <div className="relative w-full h-[60vh] overflow-hidden">
         <Image 
          src="/market.jpg"
          alt="Get Involved Header Background" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
         <div className="absolute inset-0 bg-black/60 flex flex-col items-end justify-end p-8 md:p-12 text-white">
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="text-sm font-semibold uppercase mb-1"
           >
             Get Involved
           </motion.p>
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-4xl md:text-5xl font-bold"
           >
             Join Our Mission
           </motion.h1>
         </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto text-gray-700">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-xl prose lg:prose-xl"
          >
            You can be part of the story. Join us in our mission to transform rural livelihoods through innovative value chain financing.
          </motion.p>

          {/* Get Involved Options in Grid/Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Careers, Jobs, and Internships Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#4db848] rounded-full flex items-center justify-center flex-shrink-0">
                <FaBriefcase size={24} className="text-white"/>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Careers, Jobs, and Internships</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Job Openings</li>
                  <li>Internships</li>
                  <li>Volunteer Opportunities</li>
                </ul>
              </div>
            </motion.div>

            {/* Why Partner with Us Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#d0952c] rounded-full flex items-center justify-center flex-shrink-0">
                <FaHandshake size={24} className="text-white"/>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Why Partner with Us?</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Proven Track Record</li>
                  <li>Scalability</li>
                  <li>Expertise</li>
                </ul>
              </div>
            </motion.div>

            {/* Funding Opportunities Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#4db848] rounded-full flex items-center justify-center flex-shrink-0">
                <FaDonate size={24} className="text-white"/>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Funding Opportunities</h3>
                <p>
                  We&apos;re seeking funding partners to support our mission and expand our impact.
                </p>
              </div>
            </motion.div>

            {/* General Get Involved */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#d0952c] rounded-full flex items-center justify-center flex-shrink-0">
                <FaUsers size={24} className="text-white"/>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Join Us</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Volunteer with Us</li>
                  <li>Fundraise for Us</li>
                  <li>Donate</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Us in Transforming Rural Livelihoods</h2>
            <p className="text-xl text-gray-700 mb-8">
              Together, we can create a more inclusive and prosperous society. Contact us to explore funding opportunities and partnership possibilities.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-[#4db848] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#d0952c] transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 