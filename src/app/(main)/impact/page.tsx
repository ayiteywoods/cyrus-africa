'use client';

import Image from 'next/image';
//import Link from 'next/link';
import { FaChartLine, FaUsers, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function ImpactPage() {
  return (
    <div>
      {/* Page Header with Full-width Image */}
      <div className="relative w-full h-[60vh] overflow-hidden">
         <Image 
          src="/use2.jpg"
          alt="Impact Header Background" 
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
             Impact
           </motion.p>
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-4xl md:text-5xl font-bold"
           >
             Our Impact
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
            Through our innovative approach to value chain financing, we&apos;ve made significant strides in transforming rural livelihoods across Africa.
          </motion.p>

          {/* Impact Areas in Grid/Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Economic Impact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#4db848] rounded-full flex items-center justify-center mb-4">
                <FaChartLine size={24} className="text-white"/>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Poverty Reduction</h3>
              <p>
              Our pioneering value chain financing approach has helped reduce poverty among rural communities, improving livelihoods and economic stability.
              </p>
            </motion.div>

            {/* Social Impact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#d0952c] rounded-full flex items-center justify-center mb-4">
                <FaUsers size={24} className="text-white"/>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Increased Access to Finance</h3>
              <p>
              We've expanded financial inclusion, providing affordable financing options to underserved populations.
              </p>
            </motion.div>

            {/* Environmental Impact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#4db848] rounded-full flex items-center justify-center mb-4">
                <FaHandshake size={24} className="text-white"/>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Digital Transformation</h3>
              <p>
              Our deployment of digital technologies has enhanced supply chain efficiency, reduced costs, and improved the overall quality of life for rural communities.
              </p>
            </motion.div>
          </div>

          {/* Key Metrics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Key Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Add your key metrics here */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-4xl font-bold text-[#4db848] mb-2">
                  <CountUp end={10000} duration={2.5} separator="," />+
                </h3>
                <p className="text-gray-600">Farmers Empowered</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-4xl font-bold text-[#4db848] mb-2">$5M+</h3>
                <p className="text-gray-600">Loans Disbursed</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-4xl font-bold text-[#4db848] mb-2">
                  <CountUp end={50} duration={2.5} />+
                </h3>
                <p className="text-gray-600">Communities Served</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-4xl font-bold text-[#4db848] mb-2">95%</h3>
                <p className="text-gray-600">Repayment Rate</p>
              </div>
            </div>
          </motion.div>

          {/* Stories of Change */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Stories of Change</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Add your success stories here */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/blog1.jpg"
                    alt="Success Story 1"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Empowering Rural Farmers</h3>
                  <p className="text-gray-600">
                    How our value chain financing helped a community of farmers increase their yields and income.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/blog2.jpg"
                    alt="Success Story 2"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Transformation</h3>
                  <p className="text-gray-600">
                    The impact of digital literacy training on rural communities&apos; access to markets.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}