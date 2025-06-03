'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBullseye, FaLightbulb, FaUsers, FaHandshake, FaChartLine, FaGlobeAfrica } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div>
      {/* Page Header with Full-width Image */}
      <div className="relative w-full h-[60vh] overflow-hidden">
         <Image 
          src="/use4.jpg"
          alt="About Us Header Background" 
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
             About
           </motion.p>
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-4xl md:text-5xl font-bold"
           >
             About Us
           </motion.h1>
         </div>
      </div>

      {/* Our Story Section with Two Columns */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                At Cyrus Africa, we&apos;re dedicated to unlocking the economic potential of rural 
                communities across Africa. Our innovative approach combines affordable financing 
                with cutting-edge digital technologies to strengthen supply chains and empower 
                low-income individuals.
                </p>
              </div>
            </motion.div>

            {/* Story Image */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image 
                src="/about.jpg"
                alt="Our Story"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#4db848] rounded-full flex items-center justify-center mb-6">
                <FaBullseye size={24} className="text-white"/>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission Statement</h3>
              <p className="text-gray-700">
              To empower underprivileged African farmers by providing accessible, affordable, and technology-driven 
              credit solutions that enhance agricultural productivity, improve livelihoods, and promote sustainable 
              rural development.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#d0952c] rounded-full flex items-center justify-center mb-6">
                <FaLightbulb size={24} className="text-white"/>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision Statement</h3>
              <p className="text-gray-700">
              To become Africa’s leading catalyst for agricultural transformation by enabling every farmer, 
              regardless of background or location, to access the financial tools needed to sustain livelioods 
              and feed the future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Theory of Change Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-2"
          >
            Theory of Change
          </motion.h2>
          <div className='text-center py-2 mb-12'>
            <p>Our theory of change is rooted in the belief that by providing affordable financing and digital technologies, 
              we can increase the economic resilience of rural communities, ultimately reducing poverty and improving livelihoods.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#4db848] rounded-full flex items-center justify-center mb-4">
                <FaUsers size={20} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Short-term Outcomes</h3>
              <p className="text-gray-600">
              Increased access to finance, improved digital literacy, and enhanced supply chain efficiency.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#d0952c] rounded-full flex items-center justify-center mb-4">
                <FaChartLine size={20} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Mid-term Outcomes</h3>
              <p className="text-gray-600">
              Improved economic resilience, increased income, and reduced poverty.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#4db848] rounded-full flex items-center justify-center mb-4">
                <FaGlobeAfrica size={20} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Long-term Outcomes</h3>
              <p className="text-gray-600">
              Sustainable livelihoods, economic growth, and reduced inequality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-[#4db848]">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Our Values and Beliefs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#4db848] rounded-full flex items-center justify-center mb-4">
                <FaHandshake size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Partnership</h3>
              <p className="text-gray-600">
              Collaborate with local farmers, communities, researchers, and industry experts to co-create solutions and drive progress in the agriculture value chain 
              for positive social and economic impact.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#4db848] rounded-full flex items-center justify-center mb-4">
                <FaUsers size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Truth and Transparency</h3>
              <p className="text-gray-600">
              We build lasting relationships through honest communication, fair lending practices, and reliable service.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#4db848] rounded-full flex items-center justify-center mb-4">
                <FaLightbulb size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
              We are committed to promoting sustainable best practice within the agriculture value chain.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#4db848] rounded-full flex items-center justify-center mb-4">
                <FaChartLine size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation for impact</h3>
              <p className="text-gray-600">
              We harness technology to create practical, user-friendly financial solutions tailored to the realities of rural Africa.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-5">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#4db848] rounded-full flex items-center justify-center mb-4">
                <FaHandshake size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inclusion</h3>
              <p className="text-gray-600">
              We ensure our solutions are accessible and relevant to both men and women in the diverse communities we serve.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#4db848] rounded-full flex items-center justify-center mb-4">
                <FaUsers size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Driven</h3>
              <p className="text-gray-600">
              Leverage data and analytics to inform decision-making, drive efficiency, and optimize outcomes within the value chain
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#4db848] rounded-full flex items-center justify-center mb-4">
                <FaLightbulb size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer-Centricity</h3>
              <p className="text-gray-600">
              Put the needs of farmers at the forefront, providing tailored solutions and exceptional support              </p>
            </motion.div>

            
          </div>
        </div>
      </section>
    </div>
  );
} 