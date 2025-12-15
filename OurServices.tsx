import { FC } from "react";

const services = [
  {
    title: "Mobile App Development",
    description:
      "Custom iOS & Android apps built for performance & scalability.",
    icon: "📱",
  },
  {
    title: "Web Development",
    description:
      "Modern, responsive websites using latest tech for optimal speed & SEO.",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive interfaces designed to deliver a seamless user experience.",
    icon: "🎨",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven strategies for SEO, PPC, social media & growth hacking.",
    icon: "📈",
  },
  {
    title: "Apps & Cloud Integration",
    description:
      "Reliable backend integrations, APIs, and cloud solutions.",
    icon: "☁️",
  },
  {
    title: "Quality Analysis & Testing",
    description:
      "Thorough testing to ensure top-notch product stability & performance.",
    icon: "✅",
  },
];

const OurServices: FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-black">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            We offer comprehensive digital solutions to transform your business
            and accelerate growth
          </p>
        </div>

       
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl bg-slate-50 p-8 transition hover:shadow-lg"
            >
             
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400 text-2xl">
                {service.icon}
              </div>

              
              <h3 className="mb-3 text-lg font-semibold text-black">
                {service.title}
              </h3>

              
              <p className="text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        
        <div className="mt-14 text-center">
          <button className="rounded-lg bg-black px-8 py-3 text-base font-semibold text-white transition hover:bg-gray-900">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
