import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-4">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
      <div className="flex">
          
          <a href="https://www.facebook.com/rawgtheworld/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 px-3">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com/rawgtheworld?lang=en" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 px-3">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 px-3">
            <FaInstagram size={24} />
          </a>
        </div>

       
        <div className="mt-2">
          &copy; 2023 GameVerse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
