import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <footer className="bg-black py-8">
      <hr className="border-t border-red-600 my-4" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-gray-300 text-center">
            <h4 className="text-lg text-red-600 font-semibold mb-4">About Me</h4>
            <p className="text-sm">
              Hi, My name is Tawheed. I am the creator of this web site. Do you want to know more about me? Please follow this link: <a
                href="www.tawheedshimul.vercel.app."
                className="text-red-500 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                tawheedshimul.vercel.app
                {/* <AiFillProfile size={24}>tawheedshimul</AiFillProfile> */}
              </a>
            </p>
          </div>
          <div className="text-center text-gray-300">
            <h4 className="text-lg text-red-600 font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center text-gray-300">
            <h4 className="text-lg text-red-600 font-semibold mb-4">Social Media</h4>
            <ul className="flex justify-center items-center space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/tawheedshimul"
                  className="text-gray-300 hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center rounded-full h-10 w-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/tawheedshimul"
                  className="text-gray-300 hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center rounded-full h-10 w-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tawheedshimul"
                  className="text-gray-300 hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center rounded-full h-10 w-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-red-700 py-4 mt-8">
        <div className="container text-black font-bold mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-100 text-sm">
          &copy; 2022 - {new Date().getFullYear()} MyVideos. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
