import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 bg-black text-neutral-200">
      <div className="container px-6 mx-auto md:px-12 lg:px-16">
        {/* Grid Layout - Stacked on Small Screens, Two Columns on Larger Screens */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Section - University Info */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-semibold text-gray-400">
              SURESH GYAN VIHAR UNIVERSITY
            </h3>
            <p>SGVU, Mahal, Jagatpura</p>
            <p>Jaipur, Rajasthan - 302017</p>
            <p className="mt-2">
              <a href="mailto:info@gyanvihar.org" className="hover:text-white">
                info@gyanvihar.org
              </a>
            </p>
          </div>

          {/* Right Section - Socials (Text Centered Above Icons) */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="mb-2 text-lg font-semibold text-gray-400">
              SOCIALS
            </h3>
            <div className="flex space-x-6 text-2xl">
              <a
                href="https://www.facebook.com/sureshgyanviharuniversityjaipur/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:text-white"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
              <a
                href="https://x.com/SureshGyanVihar"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:text-white"
              >
                <i className="fab fa-twitter-square"></i>
              </a>
              <a
                href="https://www.instagram.com/sureshgyanvihar.university/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:text-white"
              >
                <i className="fab fa-instagram-square"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-sm text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Suresh Gyan Vihar University. All
            Rights Reserved.
          </p>
          <p className="mt-2">
            <a href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>{" "}
            *{" "}
            <a href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
