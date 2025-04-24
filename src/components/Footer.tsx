
import React from 'react';

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
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                VK
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                TG
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                YT
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
