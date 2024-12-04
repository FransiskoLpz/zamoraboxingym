import React from 'react';
import { Link } from 'react-scroll';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
      className="fixed inset-0 bg-black z-50 md:hidden"
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-white">
          <X size={24} />
        </button>
      </div>
      <div className="flex flex-col items-center gap-8 p-8">
        {['home', 'about', 'schedule', 'coaches', 'services', 'gallery', 'comments', 'contact'].map((item) => (
          <Link
            key={item}
            to={item}
            smooth={true}
            duration={500}
            className="text-white text-xl hover:text-red-600 transition-colors capitalize"
            onClick={onClose}
          >
            {item}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileMenu;