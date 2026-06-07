import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 ${isScrolled ? 'bg-opacity-95' : 'bg-opacity-70'} backdrop-blur-md`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 md:h-20 items-center justify-between'>
          <div className='flex items-center justify-start'>
            <span className='nav-logo'>AJ</span>
          </div>

          <div className='hidden sm:flex items-center space-x-8 nav-links'>
            {navigation.map(item => (
              <a key={item.name} href={item.href} className='px-3 py-2 rounded text-sm'>
                {item.name}
              </a>
            ))}
          </div>

          <div className='sm:hidden'>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label='Toggle menu' className='p-2'>
              ☰
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className='sm:hidden px-2 py-3 bg-opacity-95'>
            {navigation.map(item => (
              <a key={item.name} href={item.href} className='block py-2 px-3'>
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
