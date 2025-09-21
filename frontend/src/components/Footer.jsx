import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Column 1: Project Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">AYUCHAIN</h3>
            <p className="text-gray-400 max-w-xs">
              A modern web application built with a powerful and elegant tech stack.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2">Connect with Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} AYUCHAIN. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;