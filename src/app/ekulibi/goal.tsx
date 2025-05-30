import Image from 'next/image';
import { motion } from 'framer-motion';


export function ImageSection() {
  return (
    <section className="bg-gray-200">
  {/* First Section */}
  <section className="py-16"> {/* Increased padding */}
    <div className='container mx-auto px-4 lg:px-8 text-center'>
      <h1 className='text-4xl md:text-5xl  text-gray-700 pb-8'>Our Ekulibi Project</h1>
      <p className='mb-20 md:px-40'>Understanding Poverty: A Multi-dimensional Perspective. This project focuses on leveraging 
        digital tools to provide fair financing options for shea nut farmers, breaking 
        traditional barriers to capital access.</p>

      <div className="grid lg:grid-cols-2 min-h-[80vh] -mt-12"> {/* Added gap */}
        {/* Left side - Image with fixed dimensions */}
        <div className="relative h-[400px] lg:h-auto">
          <Image 
            src="/butter.png" 
            alt="Soap making process" 
            fill 
            className="object-cover" 
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right side - Content */}
        <div className="bg-gray-50 flex items-center justify-center p-8 lg:p-16 -mb-12 mt-12">
          <div className="max-w-md space-y-8">
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-light tracking-[0.1em] text-gray-900 mb-8">Empowering Shea Nuts Farmers</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
            Technology empowers Africa's shea farmers by enabling financial access. AI analyzes harvest data for collateral-free loans, 
            while mobile money provides instant financing. Blockchain ensures fair pricing through transparent supply chains. These 
            innovations help women farmers invest in equipment and sustainable growth, transforming subsistence farming into viable 
            businesses while preserving traditional practices and connecting them to global markets.
            </p>
            <div className="pt-4">
              <button className="bg-[#4db848] rounded-lg text-white px-8 py-3 text-sm tracking-wider hover:bg-[#d0952c] transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Increased spacing between sections */}
  <div className="py-8"></div>

  {/* Second Section */}
  <section className='py-16 bg-gray-200'> {/* Matching padding */}
    <div className='container mx-auto px-4 lg:px-8 text-center'>

      <div className="grid lg:grid-cols-2 min-h-[80vh] -mt-12 "> {/* Added gap */}
        {/* Left side - Content */}
        <div className="bg-gray-50 flex items-center justify-center p-8 lg:p-16 order-2 lg:order-1 ">
          <div className="max-w-md space-y-8">
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-light tracking-[0.1em] text-gray-900 mb-8">Decoding Credit Risk</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
            AI now assesses credit risk for shea farmers using alternative data - mobile transactions, harvest records, and 
            market trends. Machine learning models bypass traditional collateral requirements, enabling fair loan approvals. 
            This tech-driven approach empowers smallholder farmers, mostly women, to access capital, grow their businesses, 
            and sustainably participate in global supply chains.
            </p>
            <div className="pt-4">
              <button className="bg-[#4db848] rounded-lg text-white px-8 py-3 text-sm tracking-wider hover:bg-[#d0952c] transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>
        
        {/* Right side - Image with fixed dimensions */}
        <div className="relative h-[400px] lg:h-auto order-1 lg:order-2 md:-mb-12 md:mt-12">
          <Image 
            src="/use2.jpg" 
            alt="Soap making process" 
            fill 
            className="object-cover" 
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  </section>
</section>
  );
}