'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GivePage() {
  return (
    <div>
      {/* Page Header with Full-width Image */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <Image 
          src="/donate.jpg"
          alt="Give Header Background" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-end justify-end p-8 md:p-12 text-white">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase mb-1"
          >
            Give
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Support Our Mission
          </motion.h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto text-gray-700">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-xl prose lg:prose-xl"
          >
            Your contribution helps transform rural livelihoods through innovative value chain financing. 
            Choose the most convenient way to give below.
          </motion.p>

          {/* Two Column Layout for Donation Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Bank Transfer - Left Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all border border-gray-100 h-full"
            >
              <div className="flex items-start mb-6">
                <div className="bg-[#4db848]/10 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4db848]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Bank Transfer</h2>
                  <p className="text-gray-600">
                    Send your donation directly to our bank account
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Account Name</p>
                    <p className="font-mono">Cyrus Africa Foundation</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Bank Name</p>
                    <p className="font-mono">[Prudential Bank Ghana limited]</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Account Number</p>
                    <p className="font-mono">[0352000060017]</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Branch</p>
                    <p className="font-mono">[Nungua Branch]</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Money - Right Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all border border-gray-100 h-full"
            >
              <div className="flex items-start mb-6">
                <div className="bg-[#4db848]/10 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4db848]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mobile Money</h2>
                  <p className="text-gray-600">
                    Quick and easy donation via mobile money
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Mobile Number</p>
                    <p className="font-mono">[Your Mobile Money Number]</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Network</p>
                    <p className="font-mono">[MTN/Airtel/etc.]</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Recipient Name</p>
                    <p className="font-mono">Cyrus Africa Foundation</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Reference Code</p>
                    <p className="font-mono">DONATION</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Impact and Other Options - Full Width Below */}
          <div className="space-y-8">
            {/* Impact Statement */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#4db848]/10 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Donation Makes a Difference</h3>
              <p className="text-gray-700 mb-4">
                Every contribution helps us empower rural communities:
              </p>
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-[#4db848] font-bold text-xl mb-2">$50</p>
                  <p>Provides [specific impact] to a family</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-[#4db848] font-bold text-xl mb-2">$100</p>
                  <p>Helps [another specific impact]</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-[#4db848] font-bold text-xl mb-2">$500</p>
                  <p>Enables [significant transformation]</p>
                </div>
              </div>
            </motion.div>

            {/* Custom Donations */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/3">
                  <div className="bg-[#4db848]/10 p-3 rounded-lg inline-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4db848]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Other Giving Options</h2>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 mb-4">
                    We welcome corporate partnerships, major gifts, and in-kind donations. 
                    Contact us to discuss how we can work together to create maximum impact.
                  </p>
                  <motion.div 
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex" // This ensures proper flex behavior
>
  <Link
    href="/contact"
    className="inline-flex justify-center py-3 px-6 border border-transparent text-base font-medium rounded-lg text-white bg-[#4db848] hover:bg-[#3a9b3a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4db848] transition-colors w-full" // Added w-full to ensure full width
  >
    Contact Our Team
  </Link>
</motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}