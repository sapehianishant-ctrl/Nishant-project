export default function HomePage() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">

        
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-black md:text-5xl lg:text-6xl">
              We Build Scalable{" "}
              <span className="text-yellow-500">Mobile Apps</span> &{" "}
              <span className="text-yellow-500">Websites</span>{" "}
              That Drive <br className="hidden sm:block" />
              Business Growth
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
              Transform your ideas into powerful digital solutions.
              Mobile Apps, Web Development, UI/UX Design & Digital
              Marketing under one roof.
            </p>

           
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button className="rounded-lg bg-yellow-400 px-7 py-3 text-base font-semibold text-black hover:bg-yellow-500 transition">
                Get a Free Quote →
              </button>

              <button className="flex items-center gap-2 rounded-lg border border-gray-900 px-7 py-3 text-base font-semibold text-gray-900 hover:bg-gray-100 transition">
                ▶ Schedule a Call
              </button>
            </div>

           
            <div className="mt-10 flex flex-wrap items-center gap-10 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <span className="h-6 w-6 rounded-full bg-yellow-400"></span>
                  <span className="h-6 w-6 rounded-full bg-gray-400"></span>
                  <span className="h-6 w-6 rounded-full bg-blue-400"></span>
                </div>
                <span>120+ Happy Clients</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-yellow-400">★★★★★</span>
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>

         
          <div className="relative">
            
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-xl">
             
              <div className="rounded-lg bg-white p-4">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                  <span className="h-3 w-3 rounded-full bg-green-400"></span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded bg-yellow-400 px-2 py-1 text-xs font-semibold">
                    CB
                  </span>
                  <span className="text-sm font-medium">
                    Codebee lab
                  </span>
                </div>

                <div className="mt-4 h-2 w-full rounded bg-gray-200"></div>
                <div className="mt-2 h-2 w-4/5 rounded bg-gray-200"></div>

                <div className="mt-4 flex gap-2">
                  <span className="rounded bg-yellow-400 px-3 py-1 text-xs font-semibold">
                    App
                  </span>
                  <span className="rounded bg-gray-300 px-3 py-1 text-xs">
                    Web
                  </span>
                </div>
              </div>

              
              <div className="mt-10 flex justify-center gap-4">
                <div className="h-40 w-24 rounded-xl bg-yellow-400"></div>
                <div className="h-44 w-24 rounded-xl bg-blue-400"></div>
                <div className="h-40 w-24 rounded-xl bg-green-400"></div>
              </div>
            </div>

           
            <div className="absolute -right-6 top-6 rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold shadow">
              500+ <br /> Projects
            </div>

            <div className="absolute right-0 top-1/2 rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow">
              Live <br /> 24/7
            </div>

            <div className="absolute -bottom-6 left-6 rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white shadow">
              12+ <br /> Years
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
