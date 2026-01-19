
import React, { useState, useEffect } from 'react';
import { NavLink } from '../types';

interface NavbarProps {
  onCartClick: () => void;
  cartCount: number;
}

const LINKS: NavLink[] = [
  { label: 'Boutique', href: '#' },
  { label: 'L\'Héritage', href: '#' },
  { label: 'Rituels', href: '#' },
];

const Navbar: React.FC<NavbarProps> = ({ onCartClick, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 py-8 px-8 md:px-16 flex items-center justify-between ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm py-5' : 'bg-transparent'}`}>
      <div className="hidden md:flex gap-12">
        {LINKS.slice(0, 2).map((link) => (
          <a key={link.label} href={link.href} className={`text-[9px] uppercase tracking-[0.4em] font-bold transition-all duration-300 ${isScrolled ? 'text-anthracite hover:text-oasis' : 'text-white hover:text-cream'}`}>
            {link.label}
          </a>
        ))}
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className={`font-serif text-2xl md:text-4xl tracking-[0.3em] font-light cursor-pointer transition-all duration-500 ${isScrolled ? 'text-anthracite' : 'text-white'}`}>
          MAISON NB
        </h1>
      </div>

      <div className="flex gap-12 items-center">
        <a href={LINKS[2].href} className={`hidden md:block text-[9px] uppercase tracking-[0.4em] font-bold transition-all duration-300 ${isScrolled ? 'text-anthracite hover:text-oasis' : 'text-white hover:text-cream'}`}>
          {LINKS[2].label}
        </a>
        <div className={`flex gap-6 items-center ${isScrolled ? 'text-anthracite' : 'text-white'}`}>
          <button className="p-1 hover:opacity-50 transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </button>
          <div className={`w-[1px] h-5 opacity-20 ${isScrolled ? 'bg-anthracite' : 'bg-white'}`}></div>
          <button 
            onClick={onCartClick}
            className="p-1 hover:opacity-50 transition-all relative group"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 text-[7px] bg-oasis text-white w-4 h-4 rounded-full flex items-center justify-center font-black animate-pulse group-hover:scale-110 transition-transform">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
