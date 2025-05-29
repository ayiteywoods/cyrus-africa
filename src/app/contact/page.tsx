'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const formValues = Object.fromEntries(formData.entries());

    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Your message has been sent successfully!');
      } else {
        setErrorMessage(data.message || 'An error occurred while sending your message.');
      }
    } catch {
      setErrorMessage('An error occurred while sending your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Page Header with Full-width Image */}
      <div className="relative w-full h-[60vh] overflow-hidden">
         <Image 
          src="/hero2.jpg"
          alt="Contact Us Header Background" 
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
             Contact
           </motion.p>
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-4xl md:text-5xl font-bold"
           >
             Contact Us
           </motion.h1>
         </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-xl prose lg:prose-xl"
          >
            We'd love to hear from you. Please reach out to us through the following channels:
          </motion.p>
          
          {/* Two Column Layout with Form Column Wider */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            
            {/* Contact Information - Takes 2 columns */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#4db848] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope size={20} className="text-white"/>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h3>
                    <a href="mailto:partnerships@cyrusafrica.org" className="text-[#4db848] hover:text-[#3a9b3a] transition-colors">
                      partnerships@cyrusafrica.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#d0952c] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone size={20} className="text-white"/>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h3>
                    <a href="tel:+2330209334842" className="text-[#4db848] hover:text-[#3a9b3a] transition-colors">
                      +233 020 9334842
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#4db848] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt size={20} className="text-white"/>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Visit Us</h3>
                    <p className="text-gray-700">
                      P. O. Box TVT 636 Tema Newtown
                    </p>
                  </div>
                  
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#d0952c] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaClock size={20} className="text-white"/>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
                <Image src='/blog1.jpg' alt='get in touch' width={400} height={300}/>

              </div>
            </motion.div>

            {/* Contact Form - Takes 3 columns */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-3 bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#4db848] focus:border-[#4db848] transition-colors" 
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#4db848] focus:border-[#4db848] transition-colors" 
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#4db848] focus:border-[#4db848] transition-colors" 
                    placeholder="What is this regarding?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6} 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#4db848] focus:border-[#4db848] transition-colors"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full bg-[#4db848] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#3a9b3a] transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  Send Message
                </motion.button>
              </form>
              {successMessage && (
                <div className="mt-4 text-green-500">
                  <p>{successMessage}</p>
                </div>
              )}
              {errorMessage && (
                <div className="mt-4 text-red-500">
                  <p>{errorMessage}</p>
                </div>
              )}
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-xl prose lg:prose-xl"
          >
            Let's partner to empower rural communities and create a brighter future for all.
          </motion.p>
        </div>
      </div>
    </div>
  );
} 