'use client';

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Send } from 'lucide-react';

const StartProjectSection = () => {
  return (
    <section className="w-full bg-black py-16 lg:py-24 font-sans text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Ready to Start Your <span className="text-yellow-400">Next Project?</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 max-w-lg">
              Let's transform your ideas into powerful digital solutions that drive real business growth.
            </p>

            <div className="space-y-8">
             
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email us</p>
                  <a href="mailto:hello@codebeelab.com" className="text-lg font-semibold hover:text-yellow-400 transition-colors">
                    hello@codebeelab.com
                  </a>
                </div>
              </div>

              
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Call us</p>
                  <a href="tel:+15551234567" className="text-lg font-semibold hover:text-yellow-400 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Visit us</p>
                  <p className="text-lg font-semibold">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>

           
            <div className="mt-12">
              <p className="text-gray-400 mb-4">Follow us on social media</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

         
          <div className="bg-[#111625] border border-gray-800 rounded-2xl p-6 md:p-10 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Get Your Free Quote</h3>
            
            <form className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full bg-[#1b2236] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                />
              </div>

             
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#1b2236] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                />
              </div>

             
              <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="details"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#1b2236] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

             
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StartProjectSection;