const WhereWeWorkPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Where We Work</h1>
      <div className="prose lg:prose-xl">
        <p className="text-gray-700 mb-6">
          Cyrus Africa Foundation is currently focused on empowering education entrepreneurs in Africa.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Africa</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Burkina Faso</li>
          <li>Ethiopia</li>
          <li>Ghana</li>
          <li>Kenya</li>
          <li>Liberia</li>
          <li>Rwanda</li>
          <li>Sierra Leone</li>
          <li>Uganda</li>
        </ul>
        {/* Add Latin America section if needed in the future */}
        {/*
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Latin America</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Bolivia</li>
          <li>Dominican Republic</li>
          <li>Ecuador</li>
          <li>El Salvador</li>
          <li>Guatemala</li>
          <li>Panama</li>
          <li>Peru</li>
        </ul>
        */}
         <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Country Highlight</h2>
         <p className="text-gray-700 mb-6">
         In Guatemala, 90% of kids living in poverty never graduate from high school.
         </p>
         <p className="text-gray-700 mb-6">
          Explore Keller School, Guatemala
         </p>
      </div>
    </div>
  );
};

export default WhereWeWorkPage; 