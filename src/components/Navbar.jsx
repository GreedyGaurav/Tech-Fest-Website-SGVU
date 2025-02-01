import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Set active section based on scroll position
      const sections = ["home", "about", "team", "events", "location"];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Team", "Events", "Location"];

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-opacity-90 backdrop-blur-md bg-space-900"
          : "bg-transparent"
      } relative`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center justify-between w-full">
            <a href="#" className="mr-4">
              <img
                className={`w-48 px-5 h-auto max-h-16 md:w-56 md:max-h-20 object-contain transition-all duration-300 ${
                  isScrolled
                    ? "opacity-90 shadow-lg border-2 border-gray-600"
                    : "opacity-100"
                }`}
                src="/assets/images/logo.png"
                alt="Logo"
              />
            </a>
            <div className="hidden space-x-8 md:flex">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                    activeSection === item.toLowerCase()
                      ? "text-white bg-space-700"
                      : "text-gray-300 hover:bg-space-700 hover:text-white hover:underline"
                  }`}
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
                  whileHover={{ scale: 1.1, y: -3 }} // Bouncy hover effect
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="absolute transform -translate-y-1/2 md:hidden right-4 top-1/2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-space-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: "-100%" },
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-space-800">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`block px-4 py-2 text-base font-medium rounded-md ${
                activeSection === item.toLowerCase()
                  ? "bg-space-700 text-white"
                  : "text-gray-300 hover:bg-space-700 hover:text-white hover:underline"
              }`}
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              whileHover={{ scale: 1.1, y: -3 }} // Bouncy hover effect
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
