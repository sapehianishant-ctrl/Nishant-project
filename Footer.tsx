import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 md:gap-0">
          
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-yellow-400 rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-sm">CB</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Codebee lab</span>
          </div>

          
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Schedule a Call
            </Link>
          </nav>
        </div>

        
        <div className="border-t border-gray-800 w-full mb-8"></div>

       
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2024 Codebee lab. All rights reserved. Built with passion for digital excellence.
          </p>

         
          <div className="flex items-center">
            <a 
              href="https://bolt.new" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black text-xs font-bold px-3 py-1.5 rounded hover:bg-gray-200 transition-colors flex items-center gap-1"
            >
              
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-3 h-3"
              >
                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l2.992-8.25H4.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.145z" clipRule="evenodd" />
              </svg>
              Made in Bolt
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;