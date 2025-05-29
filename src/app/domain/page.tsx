'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGlobe, FaServer, FaShieldAlt, FaChartLine, FaHandshake, FaUsers } from 'react-icons/fa';

export default function DomainPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <Image 
          src="/domain-hero.jpg"
          alt="Domain Services Background" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Digital Infrastructure Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-center mb-8 max-w-3xl"
          >
            Empowering rural communities through robust digital infrastructure
          </motion.p>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Our Digital Services</h2>
            <p className="text-xl text-gray-700">
              We provide comprehensive digital infrastructure solutions to support rural development and economic growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#4db848] rounded-full flex items-center justify-center mb-6">
                <FaGlobe size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-4">Domain Management</h3>
              <p className="text-gray-600 mb-6">
                Professional domain registration and management services for organizations and businesses.
              </p>
              <Link 
                href="/contact?service=domain"
                className="inline-block bg-[#4db848] text-white px-6 py-2 rounded-md hover:bg-[#3a9b3a] transition-colors"
              >
                Learn More
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#d0952c] rounded-full flex items-center justify-center mb-6">
                <FaServer size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-4">Hosting Solutions</h3>
              <p className="text-gray-600 mb-6">
                Reliable and secure hosting services tailored for rural development projects.
              </p>
              <Link 
                href="/contact?service=hosting"
                className="inline-block bg-[#4db848] text-white px-6 py-2 rounded-md hover:bg-[#3a9b3a] transition-colors"
              >
                Learn More
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#4db848] rounded-full flex items-center justify-center mb-6">
                <FaShieldAlt size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-4">Security Services</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive digital security solutions to protect your online presence.
              </p>
              <Link 
                href="/contact?service=security"
                className="inline-block bg-[#4db848] text-white px-6 py-2 rounded-md hover:bg-[#3a9b3a] transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose Our Services?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#4db848] rounded-full flex items-center justify-center mb-4">
                <FaChartLine size={20} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance</h3>
              <p className="text-gray-600">
                High-performance infrastructure ensuring fast and reliable service delivery.
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
                <FaHandshake size={20} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Support</h3>
              <p className="text-gray-600">
                24/7 technical support and dedicated account management.
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
                <FaUsers size={20} className="text-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
              <p className="text-gray-600">
                Solutions designed specifically for rural community needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Service Packages
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4">Basic</h3>
              <p className="text-3xl font-bold mb-6">$49<span className="text-lg text-gray-600">/year</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-[#4db848] mr-2">✓</span>
                  Domain Registration
                </li>
                <li className="flex items-center">
                  <span className="text-[#4db848] mr-2">✓</span>
                  Basic Hosting
                </li>
                <li className="flex items-center">
                  <span className="text-[#4db848] mr-2">✓</span>
                  Email Support
                </li>
              </ul>
              <Link 
                href="/contact?package=basic"
                className="block w-full bg-[#4db848] text-white text-center px-6 py-3 rounded-md hover:bg-[#3a9b3a] transition-colors"
              >
                Get Started
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow border-2 border-[#4db848]"
            >
              <div className="absolute top-0 right-0 bg-[#4db848] text-white px-4 py-1 rounded-bl-lg">
                Popular
              </div>
              <h3 className="text-2xl font-semibold mb-4">Professional</h3>
              <p className="text-3xl font-bold mb-6">$99<span className="text-lg text-gray-600">/year</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-[#4db848] mr-2">✓</span>
                  Domain Registration
                </li>
                <li className="flex items-center">
                  <span className="text-[#4db848] mr-2">✓</span>
                  Premium Hosting
                </li>
                <li className="flex items-center">
                  <span className="text-[#4db848] mr-2">✓</span>
                  24/7 Support
                </li>
                <li className="flex items-center">
                  <span className="text-[#4db848] mr-2">✓</span>
                  SSL Certificate
                </li>
              </ul>
              <Link 
                href="/contact?package=professional"
                className="block w-full bg-[#4db848] text-white text-center px-6 py-3 rounded-md hover:bg-[#3a9b3a] transition-colors"
              >
                Get Started
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
              <p className="text-3xl font-bold mb-6">Custom</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-[#4db848] mr-2">✓</span>
                  Custom Solutions
                </li>
                <li className="flex items-center">
                  <span className="text-[#4db848] mr-2">✓</span>
                  Dedicated Support
                </li>
                <li className="flex items-center">
                  <span className="text-[#4db848] mr-2">✓</span>
                  Advanced Security
                </li>
                <li className="flex items-center">
                  <span className="text-[#4db848] mr-2">✓</span>
                  Custom Integration
                </li>
              </ul>
              <Link 
                href="/contact?package=enterprise"
                className="block w-full bg-[#4db848] text-white text-center px-6 py-3 rounded-md hover:bg-[#3a9b3a] transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image 
            src="/domain-cta-bg.jpg"
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
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Let&apos;s discuss how we can help you establish a strong digital presence for your organization.
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
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 