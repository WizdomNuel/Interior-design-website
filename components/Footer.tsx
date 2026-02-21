import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import logoImg from '../assets/FDD logo.png';

const Footer: React.FC = () => {
  return (
    <footer 
      className="py-12 border-t border-opacity-20 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-secondary)',
        borderColor: 'var(--accent-primary)',
      }}
    >
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <img src={logoImg} alt="FDD Logo" className="h-12 w-auto" style={{ filter: 'brightness(0) saturate(100%)' }} />
              <h3 className="font-sohne font-bold text-xl tracking-widest font-bold" style={{ color: 'var(--text-primary)' }}>FDD</h3>
            </div>
            <p className="text-sm font-graphik font-light opacity-70">Luxury Interior Design</p>
          </div>
          
          <div className="flex space-x-6 text-sm font-medium tracking-wide mb-6 md:mb-0">
            <Link to="/about" className="transition-colors hover:opacity-100" style={{ color: 'var(--text-secondary)' }}>About</Link>
            <Link to="/services" className="transition-colors hover:opacity-100" style={{ color: 'var(--text-secondary)' }}>Services</Link>
            <Link to="/portfolio" className="transition-colors hover:opacity-100" style={{ color: 'var(--text-secondary)' }}>Portfolio</Link>
            <Link to="/contact" className="transition-colors hover:opacity-100" style={{ color: 'var(--text-secondary)' }}>Contact</Link>
          </div>
        </div>
        
        <div 
          className="border-t border-opacity-10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-50 transition-colors duration-300"
          style={{ borderColor: 'var(--accent-primary)' }}
        >
          <p>&copy; {new Date().getFullYear()} FDD. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:opacity-100" style={{ color: 'var(--text-secondary)' }}>
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:opacity-100" style={{ color: 'var(--text-secondary)' }}>
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition-colors hover:opacity-100" style={{ color: 'var(--text-secondary)' }}>
              <Twitter size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="transition-colors hover:opacity-100" style={{ color: 'var(--text-secondary)' }}>
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;