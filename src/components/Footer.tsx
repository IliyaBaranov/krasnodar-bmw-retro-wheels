
import React from 'react';
import { FaVk, FaTelegramPlane, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">© 2025 BMW Краснодар. Все права защищены.</p>
          </div>
          <div>
              <p className="text-sm">Телефон: +7 (800) 555-35-35</p>
              <div className="flex gap-4 mt-2">
              <a
                  href="https://vk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors text-2xl"
                >
                  <FaVk />
              </a>
              <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors text-2xl"
                >
                  <FaTelegramPlane />
              </a>
              <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors text-2xl"
                >
                  <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
