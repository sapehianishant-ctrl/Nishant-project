"use client";
import React from "react";

const stats = [
  { value: "1+", label: "Years of Industry Experience" },
  { value: "41+", label: "Projects Delivered" },
  { value: "10+", label: "Happy Clients" },
  { value: "3+", label: "Industry Awards" },
];

export default function Records() {
  return (
    <section className="w-half bg-gradient-to-b from-yellow-300 to-yellow-400 py-30 px-5 flex justify-center">
      <div className="max-w-5xl w-full text-center">
        
        <h2 className="text-4xl font-bold text-black">
          Our Track Record Speaks
        </h2>

        <p className="text-lg mt-3 text-black/80">
          Numbers that showcase our commitment to delivering exceptional results
        </p>

       
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-yellow-200/60 backdrop-blur-sm p-10 rounded-2xl shadow-md border border-yellow-300"
            >
              <h3 className="text-4xl font-bold text-black">{item.value}</h3>
              <p className="text-black mt-2 text-lg">{item.label}</p>
            </div>
          ))}
        </div>

       
        <button className="mt-12 bg-black text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-gray-900 transition">
          Start Your Project Today
        </button>
      </div>
    </section>
  );
}
