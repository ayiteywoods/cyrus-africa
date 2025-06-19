import Image from 'next/image';


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
            <div className="text-left">
              <h2 className="text-4xl lg:text-5xl font-light tracking-[0.1em] text-gray-900 mb-8">Overview of Agriculture in Ghana</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
            Agriculture in Ghana is largely characterized by smallholder farming, with approximately
             90% of farmers cultivating less than 2 hectares of land. Despite the vast agricultural potential, 
             only 0.4% of the 7.85 million hectares of cultivated land is under irrigation. This highlights a significant 
             underutilization of irrigation technology in the country.
            </p>
            <ul className='text-justify'>
            •	Employment Contribution: Agriculture employs about 52% of the workforce.</ul>
            <ul className='text-justify'>•	GDP Contribution: In 2016, agriculture contributed 19.5% to Ghana’s GDP (ISSER, 2016).</ul>
            <ul className='text-justify'>•	Land Use: 56% of Ghana’s land area is used for cultivation.</ul>  
            
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
            <div className="text-left">
              <h2 className="text-4xl lg:text-5xl font-light tracking-[0.1em] text-gray-900 mb-8">Key Challenges in the Agricultural Sector</h2>
            </div>
            <p className='text-justify'>Despite its growing global demand, Ghana’s shea butter sector faces several structural and operational 
              challenges that hinder its full economic potential:
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
            1. Low Productivity of Shea Trees
            </p>
            <p className='text-justify'>Most shea trees in Ghana grow wild, with no deliberate cultivation. This results in inconsistent supply, long gestation periods, and minimal yield improvements.</p>
            <hr/>
            <p className="text-gray-700 leading-relaxed text-justify">2. Low Adoption of Improved Technology</p> 
            <p className='text-justify'>Many women producers use traditional methods with limited access to modern equipment. This reduces efficiency, compromises quality, and limits competitiveness in international markets. Without improved technology, it’s difficult to meet export standards or scale operations. Boosting adoption is key to unlocking the sector’s full potential.
            </p>
            <hr />
            <p className="text-gray-700 leading-relaxed text-justify">3. Limited Access to Finance</p>
            <p className='text-justify'>Many women producers use traditional methods with limited access to modern equipment. This reduces efficiency, compromises quality, and limits competitiveness in international markets. Without improved technology, it’s difficult to meet export standards or scale operations. Boosting adoption is key to unlocking the sector’s full potential.
            </p>
            <hr />
            <p className="text-gray-700 leading-relaxed text-justify">4. Market Access and Price Fluctuations
            </p> 
            <p className='text-justify'>Producers are often at the mercy of middlemen and seasonal price swings. They have limited bargaining power and little access to export markets or fair trade opportunities.
            </p>
            <hr />
            <p className="text-gray-700 leading-relaxed text-justify">5. Quality Control Issues
            </p>
            <p className='text-justify'>Lack of standardized production methods and poor post-harvest handling can lead to contamination or inconsistent product quality, affecting export potential.</p>

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