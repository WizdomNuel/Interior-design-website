import React, { useState, useEffect } from 'react';
import { Sun, Moon, Home, User, Layers, Briefcase, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

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
      className={`md:fixed md:top-0 md:left-0 md:right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'md:bg-white/80 md:backdrop-blur-md md:border-b md:border-stone-100 md:py-4' 
          : 'md:bg-transparent md:py-8 md:border-b md:border-white/10'
      }`}
    >
      <div className="hidden md:flex container mx-auto px-6 flex justify-between items-center">
        <NavLink to="/" className={({isActive}) => `font-serif text-2xl tracking-[0.15em] font-bold transition-colors duration-300 ${isScrolled ? 'text-stone-900' : 'text-white'} ${isActive ? 'opacity-90' : ''}`} end>
          LUXE
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              className={({ isActive }) => `text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:opacity-100 opacity-80 relative group ${isScrolled ? 'text-stone-900' : 'text-white'} ${isActive ? 'underline decoration-2 underline-offset-4' : ''}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-stone-900' : 'bg-white'
              }`}></span>
            </NavLink>
          ))}
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 border ${isScrolled ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white' : 'border-white text-white hover:bg-white hover:text-stone-900'} ${isActive ? 'bg-stone-900 text-white' : ''}`}
          >
            Inquire
          </NavLink>

          {/* Theme Toggle */}
          <motion.button
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
            className={`ml-2 p-2 rounded transition-colors ${isScrolled ? 'text-stone-900' : 'text-white'}`}
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>

        {/* Mobile: bottom nav handled separately for app-like feel */}
      </div>

      {/* Mobile bottom nav */}
      <div className="md:hidden fixed left-0 right-0 bottom-0 z-50" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0)' }}>
        <div className="bg-stone-900/95 backdrop-blur w-full flex justify-around items-center px-4 py-3">
          {navLinks.map((link) => {
            const Icon = (
              link.name === 'Home' ? Home : link.name === 'About' ? User : link.name === 'Services' ? Layers : link.name === 'Portfolio' ? Briefcase : Mail
            );
            return (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) => `flex-1 flex flex-col items-center justify-center text-xs text-stone-200/90 py-1 transition-colors ${isActive ? 'text-white' : 'text-stone-300'}`}
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