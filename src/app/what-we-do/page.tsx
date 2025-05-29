const WhatWeDoPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">What We Do</h1>
      <div className="prose lg:prose-xl">
        <p className="text-gray-700 mb-6">
          Cyrus Africa Foundation works with education entrepreneurs who operate Christ-centered schools in Africa.
        </p>
        <p className="text-gray-700 mb-6">
          Alongside local partners, we offer them access to the tools they need the most: training, loan capital, and education technology. This helps improve the quality of education, expand their schools, and increase sustainability.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Sustainable Transformation</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Training</li>
          <li>Loan Capital</li>
          <li>Ed Tech</li>
        </ul>
      </div>
    </div>
  );
};

export default WhatWeDoPage; 