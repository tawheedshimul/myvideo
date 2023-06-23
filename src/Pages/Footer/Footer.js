import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-gray-300">
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="text-gray-300">
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-gray-300">
            <h4 className="text-lg font-semibold mb-4">Social Media</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MyVideos. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
