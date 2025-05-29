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
                  At Cyrus Africa, we&apos;re dedicated to unlocking the economic potential of rural communities across Africa. 
                  Our innovative approach combines affordable financing with cutting-edge digital technologies to strengthen 
                  supply chains and empower low-income individuals.
                </p>
                <p>
                  Founded with a vision to create sustainable change, we&apos;ve been at the forefront of digital transformation 
                  in rural communities, helping to bridge the digital divide and create opportunities for growth and development.
                </p>
                <p>
                  Our commitment to innovation and community empowerment has made us a trusted partner in rural development, 
                  working closely with local communities to create lasting impact.
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
                src="/impact.jpg"
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
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                Provide affordable and innovative value chain financing approaches for low-income people to reduce poverty, 
                by deploying pioneering digital technologies to empower supply chains in last mile rural communities.
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
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To create a future where every rural community has access to the digital tools and financial resources 
                they need to thrive and prosper.
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
            className="text-3xl font-bold text-center mb-12"
          >
            Theory of Change
          </motion.h2>
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
              <h3 className="text-xl font-semibold mb-3">Community Engagement</h3>
              <p className="text-gray-600">
                Building strong relationships with rural communities to understand their needs and challenges.
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
              <h3 className="text-xl font-semibold mb-3">Value Chain Development</h3>
              <p className="text-gray-600">
                Strengthening supply chains through digital technologies and innovative financing solutions.
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
              <h3 className="text-xl font-semibold mb-3">Sustainable Impact</h3>
              <p className="text-gray-600">
                Creating lasting change through sustainable development practices and community empowerment.
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
            Our Values
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
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct our operations with the highest standards of integrity, transparency, and accountability.
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
              <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
              <p className="text-gray-600">
                We prioritize the needs and aspirations of the communities we serve, ensuring sustainable impact.
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
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovative solutions to address complex challenges in rural development.
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
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, continuously improving our services and impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 