'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaArrowLeft, FaTag } from 'react-icons/fa';
import { use } from 'react';

// Blog post data - In a real application, this would come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "Digital Transformation in Rural Communities",
    excerpt: "How we're leveraging technology to empower rural communities and create sustainable change.",
    content: `In today's rapidly evolving digital landscape, rural communities often find themselves left behind. At Cyrus Africa, we're working to bridge this digital divide through innovative solutions and strategic partnerships.

Our digital transformation initiatives focus on three key areas:

1. Infrastructure Development
We're establishing digital infrastructure in rural areas, including internet connectivity and digital centers. These centers serve as hubs for community members to access digital services and training.

2. Digital Skills Training
We provide comprehensive digital literacy programs that equip community members with essential digital skills. From basic computer operations to advanced digital tools, our training programs are designed to be accessible and practical.

3. Digital Service Integration
We're integrating digital services into traditional value chains, making them more efficient and accessible. This includes mobile payment solutions, digital marketplaces, and supply chain management tools.

The impact of these initiatives has been significant. Communities that have participated in our digital transformation programs have seen:
- 40% increase in market access
- 35% reduction in transaction costs
- 50% improvement in supply chain efficiency

Looking ahead, we're expanding our digital transformation efforts to reach more communities and develop more innovative solutions. Our goal is to ensure that no community is left behind in the digital age.`,
    image: "/market.jpg",
    date: "March 15, 2024",
    author: "John Doe",
    category: "Technology"
  },
  {
    id: 2,
    title: "Success Stories: Impact of Value Chain Financing",
    excerpt: "Real stories from communities that have benefited from our innovative financing approach.",
    content: `Value chain financing has been a game-changer for rural communities across Africa. Through our innovative approach, we've helped numerous farmers and small businesses access the financial resources they need to grow and thrive.

Here are some of our most inspiring success stories:

1. The Maize Farmers of Eastern Uganda
A group of 50 maize farmers in Eastern Uganda received financing to improve their farming practices and access better markets. Within one year, their average income increased by 60%, and they were able to expand their operations significantly.

2. The Coffee Cooperative in Rwanda
Our partnership with a coffee cooperative in Rwanda helped them secure financing for new processing equipment. This led to:
- Improved coffee quality
- Higher market prices
- Increased export opportunities

3. The Women's Agricultural Group in Kenya
A women's group in Kenya received financing to start a collective farming initiative. The results were remarkable:
- 80% increase in crop yields
- Creation of 20 new jobs
- Establishment of a successful local market

These success stories demonstrate the transformative power of value chain financing. By providing access to capital and technical support, we're helping rural communities build sustainable businesses and improve their livelihoods.`,
    image: "/blog2.jpg",
    date: "March 10, 2024",
    author: "Jane Smith",
    category: "Impact"
  },
  {
    id: 3,
    title: "Building Sustainable Partnerships",
    excerpt: "The importance of strategic partnerships in achieving our mission of rural development.",
    content: `At Cyrus Africa, we believe that sustainable development requires strong partnerships. Our approach to partnership building focuses on creating long-term, mutually beneficial relationships that drive meaningful change.

Our Partnership Strategy:

1. Local Community Partnerships
We work closely with local communities to understand their needs and develop tailored solutions. These partnerships ensure that our initiatives are relevant and sustainable.

2. Private Sector Collaboration
We partner with businesses to:
- Develop innovative financing solutions
- Create market access opportunities
- Share technical expertise
- Build sustainable supply chains

3. Government and NGO Partnerships
Our partnerships with government agencies and NGOs help us:
- Scale our impact
- Access additional resources
- Influence policy
- Share best practices

The results of our partnership approach have been impressive:
- 200+ active partnerships
- 50% increase in program reach
- 75% improvement in resource efficiency

Looking forward, we're expanding our partnership network to include more technology providers, financial institutions, and development organizations. Our goal is to create a robust ecosystem of partners working together to transform rural livelihoods.`,
    image: "/use3.jpg",
    date: "March 5, 2024",
    author: "Mike Johnson",
    category: "Partnerships"
  },
  {
    id: 4,
    title: "Financial Inclusion: Breaking Barriers",
    excerpt: "How we're making financial services accessible to underserved communities.",
    content: `Financial inclusion is a cornerstone of our mission at Cyrus Africa. We're working to break down the barriers that prevent rural communities from accessing essential financial services.

Our Approach to Financial Inclusion:

1. Mobile Banking Solutions
We've partnered with mobile banking providers to bring financial services directly to rural communities. This includes:
- Mobile money accounts
- Digital payments
- Savings products
- Insurance services

2. Financial Education
We provide comprehensive financial education programs that help community members:
- Understand financial products
- Make informed decisions
- Plan for the future
- Build financial resilience

3. Innovative Financing Models
Our value chain financing approach has helped:
- 10,000+ farmers access credit
- 5,000+ small businesses grow
- 20,000+ individuals save money

The impact of our financial inclusion initiatives has been significant:
- 60% increase in financial service usage
- 45% reduction in transaction costs
- 30% improvement in savings rates

We're committed to expanding our financial inclusion efforts to reach more communities and develop more innovative solutions.`,
    image: "/hero1.jpg",
    date: "February 28, 2024",
    author: "Sarah Williams",
    category: "Finance"
  },
  {
    id: 5,
    title: "Digital Literacy: Empowering Communities",
    excerpt: "Our approach to digital literacy training and its impact on rural development.",
    content: `Digital literacy is essential in today's connected world. At Cyrus Africa, we're empowering rural communities with the digital skills they need to thrive in the digital economy.

Our Digital Literacy Program:

1. Basic Digital Skills
We teach essential digital skills including:
- Computer basics
- Internet usage
- Email communication
- Social media
- Online safety

2. Advanced Digital Tools
For those ready to take the next step, we offer training in:
- Digital marketing
- E-commerce
- Data analysis
- Mobile applications
- Cloud computing

3. Practical Applications
Our training focuses on practical applications that help community members:
- Access online markets
- Manage their businesses
- Connect with customers
- Access financial services
- Learn new skills

The results of our digital literacy program have been impressive:
- 5,000+ individuals trained
- 70% increase in digital tool usage
- 40% improvement in business efficiency

We're expanding our digital literacy programs to reach more communities and develop more advanced training modules.`,
    image: "/hero2.jpg",
    date: "February 20, 2024",
    author: "David Brown",
    category: "Education"
  },
  {
    id: 6,
    title: "Innovation in Rural Supply Chains",
    excerpt: "How digital mapping is revolutionizing supply chain management in rural areas.",
    content: `Digital mapping is transforming how rural supply chains operate. At Cyrus Africa, we're leveraging this technology to create more efficient and transparent supply chains.

Our Digital Mapping Initiative:

1. Supply Chain Mapping
We use digital tools to map:
- Production locations
- Transportation routes
- Storage facilities
- Market centers
- Service providers

2. Data Analysis
Our mapping data helps us:
- Identify bottlenecks
- Optimize routes
- Reduce costs
- Improve efficiency
- Track performance

3. Impact
The results of our digital mapping initiative include:
- 30% reduction in transportation costs
- 25% improvement in delivery times
- 40% increase in market access
- 50% reduction in post-harvest losses

We're continuing to innovate and expand our digital mapping capabilities to create more efficient and sustainable supply chains.`,
    image: "/use4.jpg",
    date: "February 15, 2024",
    author: "Lisa Chen",
    category: "Innovation"
  }
];

export default function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const post = blogPosts.find(post => post.id === parseInt(resolvedParams.id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-[#4db848] hover:text-[#3d9c3a] transition-colors"
          >
            <FaArrowLeft size={14} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header Image */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <Image 
          src={post.image}
          alt={post.title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-end justify-end p-8 md:p-12">
          <div className="bg-black/40 p-6 rounded-lg backdrop-blur-sm max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              {post.title}
            </motion.h1>
            <div className="flex items-center gap-4 text-sm text-white/90">
              <span className="flex items-center gap-1">
                <FaCalendarAlt />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <FaUser />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <FaTag />
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Back to Blog Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
        >
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-[#4db848] hover:text-[#3d9c3a] transition-colors"
          >
            <FaArrowLeft size={14} />
            Back to Blog
          </Link>
        </motion.div>
      </article>
    </div>
  );
} 