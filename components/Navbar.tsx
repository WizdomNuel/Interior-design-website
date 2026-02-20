import React, { useState, useEffect } from 'react';
import { Sun, Moon, Home, User, Layers, Briefcase, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/FDD logo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('theme');
      return saved === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile bottom nav is persistent; no scroll-hide behavior.

  useEffect(() => {
    try {
      if (theme === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`md:fixed md:top-0 md:left-0 md:right-0 z-50 transition-all duration-500 ease-out md:backdrop-blur-md ${
        isScrolled 
          ? 'md:py-4 md:border-b md:border-opacity-20' 
          : 'md:py-8 md:border-b md:border-opacity-10'
      }`}
      style={{
        backgroundColor: isScrolled ? 'var(--bg-primary)' : 'transparent',
        borderColor: 'var(--accent-primary)',
      }}
    >
      <div className="hidden md:flex container mx-auto px-6 flex justify-between items-center">
        <NavLink to="/" className="transition-colors duration-300" end>
          <img src={logoImg} alt="FDD Logo" className="h-10 w-auto" style={{ filter: 'brightness(0) saturate(100%)' }} />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              className={({ isActive }) => `text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:opacity-100 opacity-80 relative group ${isActive ? 'opacity-100' : ''}`}
              style={({ isActive }) => ({
                color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
              })}
            >
              {link.name}
              <span 
                className={`absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full`}
                style={{ backgroundColor: 'var(--accent-primary)' }}
              ></span>
            </NavLink>
          ))}
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 border ${isActive ? '' : ''}`}
            style={({ isActive }) => ({
              borderColor: 'var(--accent-primary)',
              color: 'var(--accent-primary)',
              backgroundColor: isActive ? 'var(--accent-primary)' : 'transparent',
            })}
          >
            Inquire
          </NavLink>

          {/* Theme Toggle */}
          <motion.button
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
            className={`ml-2 p-2 rounded transition-colors`}
            style={{ color: 'var(--accent-primary)' }}
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>

        {/* Mobile: bottom nav handled separately for app-like feel */}
      </div>

      {/* Mobile top header with logo and toggle */}
      <div className="md:hidden flex items-center justify-between px-6 py-4" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <NavLink to="/" className="transition-colors duration-300" end>
          <img src={logoImg} alt="FDD Logo" className="h-8 w-auto" style={{ filter: 'brightness(0) saturate(100%)' }} />
        </NavLink>
        <motion.button
          onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle theme"
          className={`p-2 rounded transition-colors`}
          style={{ color: 'var(--accent-primary)' }}
          title="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button>
      </div>

      {/* Mobile: bottom nav handled separately for app-like feel */}
      <div className="md:hidden fixed left-0 right-0 bottom-0 z-50" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0)' }}>
        <div 
          className="backdrop-blur w-full flex justify-around items-center px-4 py-3 border-t border-opacity-20"
          style={{
            backgroundColor: 'var(--bg-primary)',
            borderColor: 'var(--accent-primary)',
          }}
        >
          {navLinks.map((link) => {
            const Icon = (
              link.name === 'Home' ? Home : link.name === 'About' ? User : link.name === 'Services' ? Layers : link.name === 'Portfolio' ? Briefcase : Mail
            );
            return (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) => `flex-1 flex flex-col items-center justify-center text-xs py-1 transition-colors`}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                })}
                aria-label={link.name}
              >
                <Icon size={20} />
                <span className="mt-1 text-[11px] uppercase tracking-widest">{link.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;