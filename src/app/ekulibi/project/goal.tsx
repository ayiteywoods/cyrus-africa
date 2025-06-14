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
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-light tracking-[0.1em] text-gray-900 mb-8">Overview of Agriculture in Ghana</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
            Agriculture in Ghana is largely characterized by smallholder farming, with approximately
             90% of farmers cultivating less than 2 hectares of land. Despite the vast agricultural potential, 
             only 0.4% of the 7.85 million hectares of cultivated land is under irrigation. This highlights a significant 
             underutilization of irrigation technology in the country.
            </p>
            <ul>
            •	Employment Contribution: Agriculture employs about 52% of the workforce.</ul>
            <ul>•	GDP Contribution: In 2016, agriculture contributed 19.5% to Ghana’s GDP (ISSER, 2016).</ul>
            <ul>•	Land Use: 56% of Ghana’s land area is used for cultivation.</ul>  
            
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
              <h2 className="text-4xl lg:text-5xl font-light tracking-[0.1em] text-gray-900 mb-8">Key Challenges in the Agricultural Sector</h2>
            </div>
            <h3 className="text-gray-700 leading-relaxed text-justify font-bold">
            1. Blue Skies Ghana – Financing with Embedded Farmers
            </h3>
            <p/>
            <p>
            How: Blue Skies works with over 200 local farmers who supply fresh 
            fruits for export. Through value chain partnerships with banks and input providers, 
            farmers receive pre-financed inputs and training, which are deducted after harvest sales.
            </p>
            <p className='font-bold'>
            Impact: </p>
            <ul>Increased yields by 30–40%</ul>
           <ul>Farmers gained steady incomes and reduced loan default rates</ul> 
            <ul>Boosted export quality and volumes for Blue Skies</ul> 

            
            
            <hr/>
            <h3 className="text-gray-700 leading-relaxed text-justify font-bold">2. ⁠The Shea Nut Value Chain in Northern Ghana – Women 
              Empowerment through Finance </h3>
              <p>How:
              NGOs like SNV and partners like USAID helped organize women shea collectors and processors into cooperatives. 
              With access to group loans and business training, they scaled processing activities and negotiated better prices.</p>
              <p className='font-bold'>Impact:</p>
              <ul>Thousands of women received financing and business skills
              </ul>
              <ul>Shea butter exports rose, increasing incomes and household stability
              </ul>
              <ul>Empowered women’s voices in local economies</ul>

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