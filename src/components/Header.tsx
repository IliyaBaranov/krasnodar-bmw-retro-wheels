
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaVk, FaTelegramPlane, FaYoutube } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-primary shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-secondary">
          BMW Краснодар
        </Link>
        
        <div className="flex gap-8">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'font-bold' : ''}`}
          >
            Главная
          </Link>
          <Link 
            to="/inventory" 
            className={`nav-link ${location.pathname === '/inventory' ? 'font-bold' : ''}`}
          >
            Наличие авто
          </Link>
        </div>
        <div className="flex gap-4">
          <a
            href="https://vk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-950 transition-colors text-2xl"
          >
            <FaVk />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-950 transition-colors text-2xl"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-950 transition-colors text-2xl"
          >
            <FaYoutube />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
