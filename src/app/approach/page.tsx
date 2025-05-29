'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaUsers, FaHandshake, FaChartLine, FaGlobeAfrica } from 'react-icons/fa';

export default function ApproachPage() {
  return (
    <div>
      {/* Page Header with Full-width Image */}
      <div className="relative w-full h-[60vh] overflow-hidden">
         <Image 
          src="/blog2.jpg"
          alt="Approach Header Background" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
         <div className="absolute inset-0 bg-black/60 flex flex-col items-end justify-end p-8 md:p-12">
           <div className="bg-black/40 p-6 rounded-lg backdrop-blur-sm">
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="text-sm font-semibold uppercase mb-1 text-white"
             >
               Approach
             </motion.p>
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="text-4xl md:text-5xl font-bold text-white"
             >
               Our Approach
             </motion.h1>
           </div>
         </div>
      </div>

      {/* Rest of the content */}
      <div className="container mx-auto px-4 py-12">
        {/* Your existing content */}
      </div>
    </div>
  );
} 