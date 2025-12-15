import Image from "next/image";
import { 
  Smartphone, 
  ShoppingCart, 
  Activity, 
  Monitor, 
  Utensils, 
  BarChart3, 
  TrendingUp 
} from "lucide-react";


const portfolioItems = [
  {
    category: "Mobile App",
    title: "FinTech Mobile App",
    description: "A comprehensive financial management app with real-time analytics, secure payments, and investment tracking.",
    tags: ["React Native", "Node.js", "MongoDB", "Stripe"],
    stat: "300% increase in user engagement",
    image: "/appdevelopment.jpg",
    icon: <Smartphone className="w-5 h-5 text-black" />
  },
  {
    category: "Web Development",
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with advanced inventory management, AI-powered recommendations, and seamless checkout.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    stat: "400% growth in sales",
    image: "/webdevelopment.jpg",
    icon: <ShoppingCart className="w-5 h-5 text-black" />
  },
  {
    category: "Web App",
    title: "Healthcare Dashboard",
    description: "Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine features.",
    tags: ["Vue.js", "Python", "Django", "PostgreSQL"],
    stat: "1M+ patients served",
    image: "/Webapp.jpg",
    icon: <Activity className="w-5 h-5 text-black" />
  },
  {
    category: "Web Development",
    title: "Corporate Website",
    description: "Professional corporate website with CMS, SEO optimization, and integrated marketing automation.",
    tags: ["WordPress", "PHP", "MySQL", "SEO"],
    stat: "250% increase in leads",
    image: "/webimage.jpg",
    icon: <Monitor className="w-5 h-5 text-black" />
  },
  {
    category: "Mobile App",
    title: "Food Delivery App",
    description: "Full-stack food delivery platform with real-time tracking, payment integration, and restaurant management.",
    tags: ["Flutter", "Firebase", "Google Maps", "Razorpay"],
    stat: "500K+ active users",
    image: "/mobileapp.jpg",
    icon: <Utensils className="w-5 h-5 text-black" />
  },
  {
    category: "Web App",
    title: "SaaS Analytics Platform",
    description: "Advanced analytics platform with real-time data visualization, custom dashboards, and AI-powered insights.",
    tags: ["React", "D3.js", "Python", "TensorFlow"],
    stat: "500+ enterprise clients",
    image: "/webappimage.jpg",
    icon: <BarChart3 className="w-5 h-5 text-black" />
  }
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4">
        
       
        <h2 className="text-center text-4xl font-extrabold mb-4">
          <span className="text-gray-900">Our </span>
          
          <span className="text-yellow-500">Portfolio</span>
        </h2>

        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10 text-base">
          Explore our successful projects that have transformed businesses across various industries.
        </p>

        
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <button className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-yellow-500 text-black shadow-sm transition hover:bg-yellow-400">
            All
          </button>
          <button className="px-6 py-2.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
            Mobile App
          </button>
          <button className="px-6 py-2.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
            Web Development
          </button>
          <button className="px-6 py-2.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
            Web App
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              
              <div className="relative h-56 w-full bg-gray-200">
               
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                
                <div className="absolute top-4 left-4">
                   <span className="text-xs bg-yellow-500 text-black px-3 py-1.5 rounded-full font-bold">
                    {item.category}
                  </span>
                </div>
              </div>

              
              <div className="p-6 flex flex-col flex-grow">
                
               
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-500 mt-1 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

               
                <div className="border-t border-gray-100 pt-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-yellow-600" />
                  <span className="text-xs text-yellow-600 font-bold">
                    {item.stat}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}