"use client";

import React from "react";
import Image from "next/image"; 
import { Star, ChevronLeft, ChevronRight, Play } from "lucide-react";


interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

interface VideoTestimonial {
  id: number;
  thumbnail: string; 
  videoUrl: string;
  duration: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}

const mainTestimonial: Testimonial = {
  quote: "Professional, responsive, and experts in tech solutions. They transformed our digital presence completely.",
  author: "Kristen Moore",
  role: "Marketing Director",
  initials: "KM",
};

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    thumbnail: "/webimage1.jpg", 
    videoUrl: "https://www.youtube.com/watch?v=F4fbwKV9dBU&t=1s", 
    duration: "2:15",
    quote: "Codebee lab transformed our vision into a world-class fintech app that our users absolutely love.",
    author: "Sarah Johnson",
    role: "CEO, FinTech Solutions",
    company: "PayFlow",
    initials: "SJ",
  },
  {
    id: 2,
    thumbnail: "/image2.jpg", 
    videoUrl: "https://www.youtube.com/watch?v=r0vrPSZjWMQ", 
    duration: "1:45",
    quote: "The team delivered beyond expectations. Our e-commerce platform saw 400% growth in the first quarter.",
    author: "Michael Chen",
    role: "Founder, EcoTech",
    company: "GreenSolutions",
    initials: "MC",
  },
  {
    id: 3,
    thumbnail: "/webdesigning.jpg", 
    videoUrl: "https://www.youtube.com/watch?v=yye7rSsiV6k", 
    duration: "2:30",
    quote: "Professional, innovative, and results-driven. They helped us reach 1M+ users in just 6 months.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
    company: "HealthPlus",
    initials: "ER",
  },
];

const OurClients = () => {
  return (
    <section className="font-sans">
      
     
      <div className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          
          
          <h2 className="text-4xl font-extrabold text-black mb-4">
            What Our <span className="text-yellow-500">Clients</span> Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16">
            Don't just take our word for it - hear from satisfied clients who've grown their businesses with us
          </p>

         
          <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-4xl mx-auto relative mb-12">
           
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            
            <p className="text-xl md:text-2xl text-gray-800 italic font-medium mb-8 leading-relaxed">
              "{mainTestimonial.quote}"
            </p>

            
            <div className="flex flex-col items-center justify-center">
              <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl mb-3">
                {mainTestimonial.initials}
              </div>
              <h4 className="font-bold text-lg text-black">{mainTestimonial.author}</h4>
              <p className="text-gray-500 text-sm">{mainTestimonial.role}</p>
            </div>

            
            <div className="flex items-center justify-center gap-4 mt-8">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
              </div>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

         
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-md font-bold hover:bg-yellow-500 transition shadow-md">
            Join Our Happy Clients
          </button>
        </div>
      </div>

      
      <div className="bg-[#1225660] py-20 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">
              Hear From Our <span className="text-yellow-500">Happy Clients</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real stories from real clients who've transformed their businesses with our solutions
            </p>
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="bg-[#111827] rounded-xl overflow-hidden shadow-lg border border-gray-800">
                
               
                <a 
                  href={video.videoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative h-48 bg-gray-700 w-full group cursor-pointer"
                >
                  
                  <Image 
                    src={video.thumbnail} 
                    alt={video.author} 
                    fill 
                    className="object-cover opacity-80 group-hover:opacity-60 transition duration-300" 
                  />
                  
                
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>

                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-400/20 z-10">
                      <Play className="w-5 h-5 text-black fill-black ml-1" />
                    </div>
                  </div>

                 
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                    {video.duration}
                  </div>
                </a>

                
                <div className="p-6">
                  <p className="text-gray-300 italic text-sm mb-6 leading-relaxed min-h-[80px]">
                    "{video.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm shrink-0">
                      {video.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{video.author}</h4>
                      <p className="text-gray-500 text-xs">
                        {video.role}
                        <br />
                        <span className="text-yellow-500 font-medium">{video.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className="text-center">
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-md font-bold hover:bg-yellow-500 transition shadow-md">
              Share Your Success Story
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default OurClients;