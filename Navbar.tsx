import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-6">
       
        <div className="flex h-20 items-center">

         
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 font-bold text-black text-base">
              CB
            </div>
            <span className="text-xl font-semibold text-gray-900">
              Codebee lab
            </span>
          </div>

         
          <div className="ml-auto flex items-center gap-12">

           
            <nav className="hidden md:flex items-center gap-10 text-base font-medium text-gray-800">
              <Link href="#" className="hover:text-black transition">
                Services
              </Link>
               <Link href="#" className="hover:text-black transition">
                About
              </Link>
              <Link href="#" className="hover:text-black transition">
                Reviews
              </Link>
              <Link href="#" className="hover:text-black transition">
                Contact
              </Link>
            </nav>

            
            <Link
              href="#"
              className="rounded-full bg-yellow-400 px-7 py-3 text-base font-semibold text-black hover:bg-yellow-500 transition"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
