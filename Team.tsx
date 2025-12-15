"use client";

import React from "react";
import { Target, Users, Award, ArrowRight } from "lucide-react";


interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}


const features: FeatureItem[] = [
  {
    icon: <Target className="w-8 h-8 text-black" strokeWidth={1.5} />,
    title: "Tailored Solutions for Every Client",
    description:
      "We customize development to match your goals, ensuring your unique business needs are met with precision and care.",
  },
  {
    icon: <Users className="w-8 h-8 text-black" strokeWidth={1.5} />,
    title: "Experienced Expert Team",
    description:
      "12+ years in mobile, web, & digital marketing solutions. Our seasoned professionals bring industry expertise to every project.",
  },
  {
    icon: <Award className="w-8 h-8 text-black" strokeWidth={1.5} />,
    title: "Customer-Centric Approach",
    description:
      "We put your business success as our top priority, providing ongoing support and strategic guidance throughout our partnership.",
  },
];

const TeamsSection = () => {
  return (
    <section className="bg-white py-20 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        
       
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
            Why Choose <span className="text-yellow-500">Codebee lab</span>?
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            We're not just developers - we're your strategic partners in digital transformation
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              
             
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>

             
              <h3 className="text-xl font-bold text-black mb-4">
                {feature.title}
              </h3>

              
              <p className="text-gray-500 leading-relaxed text-sm md:text-[15px] max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        
        <div className="text-center">
          <button className="bg-yellow-400 text-black px-8 py-3.5 rounded-lg font-bold text-sm md:text-base hover:bg-yellow-500 transition-colors duration-200 shadow-md flex items-center gap-2 mx-auto">
            Let's Talk Strategy
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default TeamsSection;