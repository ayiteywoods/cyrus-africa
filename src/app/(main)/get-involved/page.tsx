'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaBriefcase, FaHandshake, FaDonate, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

type CardProps = {
  icon: React.ReactNode;
  title: string;
  listItems?: string[];
  paragraph?: string;
  onDetailsClick: () => void;
  bgColor: string;
};
// Reusable Card component
function Card({ icon, title, listItems = [], paragraph = '', onDetailsClick, bgColor }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md p-6 flex flex-col space-y-4 hover:shadow-lg transition-shadow"
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`} style={{ backgroundColor: bgColor }}>
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
        {paragraph ? <p>{paragraph}</p> : (
          <ul className="list-disc list-inside space-y-2">
            {listItems.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
        <button onClick={onDetailsClick} className="mt-4 text-[#4db848] hover:underline font-semibold">
          Details
        </button>
      </div>
    </motion.div>
  );
}


export default function GetInvolvedPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  const modalContent: { [key: string]: string } = {
    careers: `
- Job Openings: Explore our current job openings in fields like finance, digital technologies, and rural development.
- Internships: Apply for our internship programs, designed for students and young professionals seeking hands-on experience in our fields of expertise.
- Volunteer Opportunities: Contribute your skills and time as a volunteer, supporting our field operations, digital literacy training, and fundraising efforts.
    `,
    partner: `
- Proven Track Record: Our innovative approach has demonstrated significant impact in reducing poverty and improving livelihoods.
- Scalability: Our digital technologies and financing approaches are designed for scalability, enabling us to reach more communities and individuals.
- Expertise: Our team possesses extensive expertise in value chain financing, digital technologies, and rural development.
    `,
    funding: `
We're seeking funding partners to support our mission and expand our impact. Your investment will enable us to:

- Scale our Digital Platform: Enhance our digital supply chain mapping and financing tools to reach more rural communities.
- Expand our Geographic Reach: Enter new markets and expand our presence in existing ones.
- Develop New Products and Services: Innovate and launch new financing products and digital solutions tailored to the needs of rural communities.
    `,
    join: `
- Volunteer with Us: We welcome volunteers to support our field operations, digital literacy training, and fundraising efforts. Apply now to join our team!
- Fundraise for Us: Help us raise critical funds to support our programs by organizing a fundraising event or campaign. Contact us for more information.
- Donate: Make a donation to support our mission and help transform rural livelihoods.
    `,
  };

  return (
    <div>
      {/* Header */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <Image
          src="/use3.jpg"
          alt="Get Involved Header Background"
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
            Get Involved
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Careers, Jobs, and Internships
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
            Join our team of dedicated professionals passionate about transforming rural livelihoods. We offer various career opportunities, including:
          </motion.p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Careers Card */}
            <Card
              icon={<FaBriefcase size={24} className="text-white" />}
              title="Careers, Jobs, and Internships"
              listItems={["Job Openings", "Internships", "Volunteer Opportunities"]}
              onDetailsClick={() => setActiveModal("careers")}
              bgColor="#4db848"
            />
            {/* Partner Card */}
            <Card
              icon={<FaHandshake size={24} className="text-white" />}
              title="Why Partner with Us?"
              listItems={["Proven Track Record", "Scalability", "Expertise"]}
              onDetailsClick={() => setActiveModal("partner")}
              bgColor="#d0952c"
            />
            {/* Funding Card */}
            <Card
              icon={<FaDonate size={24} className="text-white" />}
              title="Funding Opportunities"
              paragraph="We're seeking funding partners to support our mission and expand our impact."
              onDetailsClick={() => setActiveModal("funding")}
              bgColor="#4db848"
            />
            {/* Join Us Card */}
            <Card
              icon={<FaUsers size={24} className="text-white" />}
              title="Join Us"
              listItems={["Volunteer with Us", "Fundraise for Us", "Donate"]}
              onDetailsClick={() => setActiveModal("join")}
              bgColor="#d0952c"
            />
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Us in Transforming Rural Livelihoods</h2>
            <p className="text-xl text-gray-700 mb-8">
              Together, we can create a more inclusive and prosperous society. Contact us to explore funding opportunities and partnership possibilities.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#4db848] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#d0952c] transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-lg max-w-xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <h3 className="text-2xl font-bold mb-4 capitalize">{activeModal.replace(/_/g, ' ')}</h3>
            <div className="prose whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: modalContent[activeModal].replace(/\n/g, '<br />') }} />
            <button onClick={closeModal} className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold">&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}


