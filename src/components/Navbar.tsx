import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Dumbbell, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';
import UserAvatar from './UserAvatar';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full bg-black/90 text-white z-50 py-4 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Dumbbell className="text-red-600" size={32} />
            <span className="text-xl font-bold">Zamora's Heavy Hitters</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {['home', 'about', 'schedule', 'coaches', 'services', 'gallery', 'comments', 'contact'].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-red-600 transition-colors capitalize"
              >
                {item}
              </Link>
            ))}
            <UserAvatar />
          </div>
          <div className="md:hidden flex items-center gap-4">
            <UserAvatar />
            <button 
              className="text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu 
            isOpen={isMobileMenuOpen} 
            onClose={() => setIsMobileMenuOpen(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;