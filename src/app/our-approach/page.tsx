'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OurApproachPage() {
  return (
    <div>
      {/* Page Header with Full-width Image */}
      <div className="relative w-full h-[60vh] overflow-hidden">
      <Image 
          src="/blog2.jpg"
          alt="Our Approach Header Background" 
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
             Our Approach
           </motion.p>
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-4xl md:text-5xl font-bold"
           >
             Our Approach
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
            At Cyrus Africa, we utilize a multi-faceted approach to transform rural livelihoods.
          </motion.p>
          
          {/* Approach Points in Grid/Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Digital Supply Chain Mapping */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#4db848] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-2m3 2v-2M9 9h.01M12 9h.01M15 9h.01M9 6h.01M12 6h.01M15 6h.01M16 20h-4a2 2 0 01-2-2V6a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Digital Supply Chain Mapping</h3>
              <p>
                We utilize digital tools to map and analyze supply chains, identifying bottlenecks and opportunities for improvement.
              </p>
            </motion.div>

            {/* Value Chain Financing */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#d0952c] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Value Chain Financing</h3>
              <p>
                Our innovative financing approach addresses the specific needs of rural supply chains, providing affordable and flexible financing options.
              </p>
            </motion.div>

            {/* Digital Literacy Training */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#4db848] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Digital Literacy Training</h3>
              <p>
                We empower rural communities with digital literacy training, ensuring they can effectively leverage digital technologies to improve their livelihoods.
              </p>
            </motion.div>

            {/* Partnerships and Collaborations */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#d0952c] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Partnerships and Collaborations</h3>
              <p>
                We foster strategic partnerships with local organizations, governments, and private sector entities to amplify our impact.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 