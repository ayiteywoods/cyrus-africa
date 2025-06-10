'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

// Import the blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Digital Transformation in Rural Communities",
    excerpt: "How we're leveraging technology to empower rural communities and create sustainable change.",
    image: "/market.jpg",
    date: "March 15, 2024",
    author: "Nana Kwadjo",
    category: "Technology"
  },
  {
    id: 2,
    title: "Success Stories: Impact of Value Chain Financing",
    excerpt: "Real stories from communities that have benefited from our innovative financing approach.",
    image: "/blog2.jpg",
    date: "March 10, 2024",
    author: "Maame Yaa",
    category: "Impact"
  },
  {
    id: 3,
    title: "Building Sustainable Partnerships",
    excerpt: "The importance of strategic partnerships in achieving our mission of rural development.",
    image: "/use3.jpg",
    date: "March 5, 2024",
    author: "Maame Yaa",
    category: "Partnerships"
  },
  {
    id: 4,
    title: "Financial Inclusion: Breaking Barriers",
    excerpt: "How we're making financial services accessible to underserved communities.",
    image: "/hero1.jpg",
    date: "February 28, 2024",
    author: "Nana Kwadjo",
    category: "Finance"
  },
  {
    id: 5,
    title: "Digital Literacy: Empowering Communities",
    excerpt: "Our approach to digital literacy training and its impact on rural development.",
    image: "/hero2.jpg",
    date: "February 20, 2024",
    author: "David Brown",
    category: "Education"
  },
  {
    id: 6,
    title: "Innovation in Rural Supply Chains",
    excerpt: "How digital mapping is revolutionizing supply chain management in rural areas.",
    image: "/use4.jpg",
    date: "February 15, 2024",
    author: "Nana Kwadjo",
    category: "Innovation"
  }
];

export default function BlogPage() {
  return (
    <div>
      {/* Page Header with Full-width Image */}
      <div className="relative w-full h-[60vh] overflow-hidden">
         <Image 
          src="/kids.jpeg"
          alt="Blog Header Background" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
         <div className="absolute inset-0 bg-black/40 flex flex-col items-end justify-end p-8 md:p-12">
           <div className="bg-black/40 p-6 rounded-lg backdrop-blur-sm">
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="text-sm font-semibold uppercase mb-1 text-white"
             >
               Blog
             </motion.p>
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="text-4xl md:text-5xl font-bold text-white"
             >
               Latest Updates
             </motion.h1>
           </div>
         </div>
      </div>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUser />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.id}`}
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
    </div>
  );
} 