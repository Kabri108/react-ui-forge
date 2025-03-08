import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import { FaReact, FaRocket } from "react-icons/fa";
import TemplateCard from "../Component/TemplateCard";
import CodeModal from "../Component/CodeModal"; // Import modal component
import Footer from "../Component/Footer";
import templates from "../data/TemplateData";
function TemplatesScreen() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

 

  return (
    <>
      <Navbar />
      <div className="min-h-screen dark:bg-dark-gradient flex flex-col items-center py-16 px-4">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-2xl pt-4">
          <h1 className="text-4xl font-bold flex items-center justify-center gap-2 text-rose-500">
            <FaReact className="animate-spin-slow" />
            Discover Stunning React Templates
            
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
          Browse a collection of beautifully designed React + Tailwind templates, perfect for startups and modern web projects.
          </p>
        </div>

        {/* Grid Layout for Templates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {templates.map((template, index) => (
            <TemplateCard key={index} template={template} onViewCode={setSelectedTemplate} />
          ))}
        </div>
        <h2 className="my-20 text-3xl text-rose-500 font-semibold">
        🎉 Stay Tuned! More Templates on the Way! ⏳
</h2>
      </div>

      {/* Code Modal */}
      <CodeModal template={selectedTemplate} onClose={() => setSelectedTemplate(null)} />

      <Footer />
    </>
  );
}

export default TemplatesScreen;
