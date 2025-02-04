/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 text-neutral-200">
      <div className="container px-6 mx-auto md:px-12 lg:px-16">
        {/* Grid Layout - Three Columns on Larger Screens */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-24">
          {/* Left Section - University Info */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-semibold text-gray-400">
              ORGANIZING SECRETARY
            </h3>
            <p>Prof.(Dr.) Manish Sharma</p>
            <p>Principal GVSET</p>
            <p className="mt-2"></p>

            {/* Organizing Secretary */}
            <div className="mt-6">
              <h3 className="mb-4 text-lg font-semibold text-gray-400">
                ORGANIZING COMMITTEE
              </h3>
              <p>Prof.(Dr.) Neeraj Kumar - +91 941 427 9664</p>
              <p>Prof.(Dr.) Sandhya Sharma - +91 988 791 1666</p>
              <p>Prof.(Dr.) Ravindra Budania - +91 701 432 6092</p>
            </div>
          </div>

          {/* Center Section - Organizing Committee */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-semibold text-gray-400">
              TECHNICAL ADVISOR
            </h3>
            <p>Prof.(Dr.) Sohit Agarwal</p>
            <p>HOD-CSE</p>
          </div>

          {/* Right Section - Contact Us */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-semibold text-gray-400">
              CONTACT US
            </h3>
            <p>Mr. Zaid Khan - +91 787 004 8760</p>
            <p>Ketan Bhaskar - +91 620 151 9951</p>
            <p>Raj Gaurav - +91 934 154 7640</p>

            {/* Technical Advisor */}
            <div className="mt-6">
              <h3 className="mb-4 text-lg font-semibold text-gray-400">
                SURESH GYAN VIHAR UNIVERSITY
              </h3>
              <p>SGVU, Mahal, Jagatpura</p>
              <p>Jaipur, Rajasthan - 302017</p>
              <a href="mailto:info@gyanvihar.org" className="hover:text-white">
                gvset@mygyanvihar.com
              </a>
            </div>
          </div>
        </div>

        {/* Socials Section */}
        <div className="mt-8 text-center">
          <h3 className="mb-2 text-lg font-semibold text-gray-400">SOCIALS</h3>
          <div className="flex justify-center space-x-6 text-2xl">
            <a
              target="_blank"
              href="https://www.facebook.com/sureshgyanviharuniversityjaipur/"
              className="hover:text-white"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              target="_blank"
              href="https://x.com/SureshGyanVihar"
              className="hover:text-white"
            >
              <i className="fab fa-twitter-square"></i>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/sureshgyanvihar.university/"
              className="hover:text-white"
            >
              <i className="fab fa-instagram-square"></i>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-gray-500">
          <p>© 2025 Suresh Gyan Vihar University. All Rights Reserved.</p>
          <p className="mt-1">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>{" "}
            •
            <a href="#" className="hover:text-white">
              {" "}
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
