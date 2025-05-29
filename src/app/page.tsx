'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHandshake, FaUsers, FaChartLine, FaHandHoldingHeart, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import Hero from '../../components/Hero';
import { useState } from 'react';

export default function HomePage() {
  
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image 
                src="/impact.jpg"
                alt="Our Mission"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Text Column */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Welcome to Cyrus Africa 
                Foundation Stablished Since 2014</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
              At CYRUS, we understand poverty as a complex, multi-dimensional issue, ensnaring individuals in a relentless 
              cycle of material scarcity, physical frailty, vulnerability, powerlessness, and isolation. To combat this 
              pervasive challenge, CYRUS Ghana has meticulously crafted a multi-dimensional strategy aimed at breaking the 
              vicious cycle of poverty within our target communities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Join us in our journey to create lasting impact and build a more prosperous future for 
                rural communities.
              </p>
              <Link 
                href="/about" 
                className="inline-block bg-[#4db848] text-white px-8 py-3 rounded-lg hover:bg-[#3d9c3a] transition-colors"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Cards Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#4db848] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image 
                  src="/blog2.jpg"
                  alt="Poverty Reduction"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-3">Poverty Reduction</h3>
                <p className="text-white/90">
                  Our pioneering value chain financing approach has helped reduce poverty among rural communities, 
                  improving livelihoods and economic stability.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#4db848] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image 
                  src="/market.jpg"
                  alt="Financial Inclusion"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-3">Financial Inclusion</h3>
                <p className="text-white/90">
                  We&apos;ve expanded financial inclusion, providing affordable financing options to underserved populations.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#4db848] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image 
                  src="/blog3.jpg"
                  alt="Digital Transformation"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
                <p className="text-white/90">
                  Our deployment of digital technologies has enhanced supply chain efficiency, reduced costs, 
                  and improved the overall quality of life for rural communities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-[40vh] overflow-hidden mb-12">
            <Image 
              src="/blog2.jpg"
              alt="Our Approach Background"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-end justify-end p-8 md:p-12">
              <div className="bg-black/40 p-6 rounded-lg backdrop-blur-sm">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-white"
                >
                  Our Approach
                </motion.h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#4db848] rounded-full flex items-center justify-center mb-4">
                <FaChartLine size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Supply Chain Mapping</h3>
              <p className="text-gray-600">
                We utilize digital tools to map and analyze supply chains, identifying bottlenecks and opportunities.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#d0952c] rounded-full flex items-center justify-center mb-4">
                <FaHandshake size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Value Chain Financing</h3>
              <p className="text-gray-600">
                Our innovative financing approach addresses the specific needs of rural supply chains.
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
                <FaUsers size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Literacy Training</h3>
              <p className="text-gray-600">
                We empower rural communities with digital literacy training to leverage technologies effectively.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#d0952c] rounded-full flex items-center justify-center mb-4">
                <FaHandHoldingHeart size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Partnerships</h3>
              <p className="text-gray-600">
                We foster strategic partnerships to amplify our impact in rural communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
        
        {/* Partners Column */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {[1, 2, 4, 7, 5, 6].map((partner) => (
              <div key={partner} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-32">
                <Image
                  src={`/part${partner}.png`} // Update with your actual partner images
                  alt={`Partner ${partner}`}
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Projects Column */}
        
      
         {/* <div className="grid md:grid-cols-2 gap-8 my-16">
        
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((partner) => (
              <div key={partner} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-32">
                <Image
                  src={`/partner-${partner}.png`} // Update with your actual partner images
                  alt={`Partner ${partner}`}
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

       
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Projects</h2>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer border border-[#4db848]"
            onClick={() => setIsModalOpen(true)}
          >
            <div className='flex'>
            <div className="relative h-72 w-full">
              <Image
                src="/project1.png" // Update with your project image
                alt="The Ekulibi Project"
                fill
                className="object-center p-2"
              />
            </div>
            <div className="p-6 pt-10 content-center mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">The Ekulibi Project</h3>
              <p className="text-gray-600 mb-4 ">Understanding Poverty: A Multi-dimensional Perspective</p>
              <button className='rounded-lg bg-[#4db848] px-6 py-3 text-white w-full'>Read More</button>
            </div>
            </div>
            
          </motion.div>
        </div>
      </div> */} 

      {/* Modal 
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-800">The Ekulibi Project</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Empowering Shea Nuts Farmers</h4>
                  <p className="text-gray-700">
                    The Role of Technology and Algorithms in Access to Capital. This initiative focuses on leveraging 
                    digital tools to provide fair financing options for shea nut farmers, breaking traditional barriers 
                    to capital access.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Decoding Credit Risk</h4>
                  <p className="text-gray-700">
                    How Algorithms are Revolutionizing Lending to Shea Nuts Farmers. Our innovative credit scoring 
                    models use alternative data to assess farmer creditworthiness, enabling more inclusive financial 
                    services.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 bg-[#4db848] text-white rounded-lg hover:bg-[#3a9b3a] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )} */}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold"
            >
              Latest from Our Blog
            </motion.h2>
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-[#4db848] hover:text-[#3d9c3a] transition-colors"
            >
              View All Posts
              <FaArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <motion.article 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image 
                    src={`/blog${index}.jpg`}
                    alt={`Blog Post ${index}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt />
                      March {15 - (index * 5)}, 2024
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {index === 1 && "Digital Transformation in Rural Communities"}
                    {index === 2 && "Success Stories: Impact of Value Chain Financing"}
                    {index === 3 && "Building Sustainable Partnerships"}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {index === 1 && "How we're leveraging technology to empower rural communities and create sustainable change."}
                    {index === 2 && "Real stories from communities that have benefited from our innovative financing approach."}
                    {index === 3 && "The importance of strategic partnerships in achieving our mission of rural development."}
                  </p>
                  <Link 
                    href={`/blog/${index}`}
                    className="inline-flex items-center gap-2 text-[#4db848] hover:text-[#3d9c3a] transition-colors"
                  >
                    Read More
                    <FaArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image 
            src="/market.jpg"
            alt="Call to Action Background"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Join Us in Transforming Rural Livelihoods</h2>
            <p className="text-xl mb-8">
              Together, we can create a more inclusive and prosperous society. 
              Contact us to explore funding opportunities and partnership possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-[#4db848] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#3a9b3a] transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/get-involved" 
                className="bg-white text-[#4db848] px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
