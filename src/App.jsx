import { Routes, Route, Link as RouterLink } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Button } from "@heroui/button";
import { useState , useEffect} from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {Navbar} from "@heroui/react";
import Error from "./Pages/Error";


const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/About" },
  { name: "Contact", to: "/Contact" },
  { name: "Team", to: "#" },
  { name: "Affiliates", to: "#" },
];


export default function App() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 3);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  return (
    <div>
      <nav
        className={`sticky top-0 z-50 px-5 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur bg-black/70 dark:bg-purple-900/70 shadow"
            : "bg-black dark:bg-purple-900"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-0">
          <div className="flex items-center justify-between w-full sm:w-auto gap-20">
          {/* Left: Logo */}
  
     
            <p className="font-bold text-primary-50 text-2xl">ACME</p>
       
          {/* Center: Nav Links (hidden on mobile) */}
          <div className="hidden sm:flex gap-10">
            {navLinks.map((link) => (
              <RouterLink
                key={link.name}
                to={link.to}
                className="text-gray-100 hover:text-purple-600 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </RouterLink>
            ))}
          </div>

          </div>
       
          {/* Right: Auth Buttons */}
          <div className=" hidden sm:flex  items-center gap-10">
            <Button to="#" className=" bg-black lg:block text-gray-100 px-4 py-2 btn-lg rounded-4xl hover:text-purple-600 font-medium transition">
              Log In
           </Button>
           {<Button
              to="#"
              className="  bg-purple-600 text-white px-4 py-2 btn-lg rounded-4xl hover:bg-purple-700 font-medium transition"
            >
              Get Started
            </Button>}
          </div>
          {/* Hamburger (mobile only) */}
          <button
            className="sm:hidden text-gray-100 hover:text-purple-600 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open main menu"
          >
            <Bars3Icon className="h-7 w-7" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="sm:hidden bg-black dark:bg-purple-900 px-4 pb-4">
            <div className="flex justify-between items-center mb-2">

              <button
                className="text-gray-100 hover:text-purple-600 p-2"
                onClick={() => setMobileOpen(false)}
                aria-label="Close main menu"
              >
                <XMarkIcon className="h-7 w-7" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <RouterLink
                  key={link.name}
                  to={link.to}
                  className="text-gray-100 hover:text-purple-600 font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </RouterLink>
              ))}
              <RouterLink
                to="#"
                className="text-gray-100 hover:text-purple-600 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Log In
              </RouterLink>
              <Button
                to="#"
                className="bg-purple-600 text-white px-4 py-2 btn-lg rounded-2xl hover:bg-purple-700 font-medium transition"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}

      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}