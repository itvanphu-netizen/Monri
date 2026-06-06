import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Dịch vụ', href: '/services' },
    { name: 'Sản phẩm Demo', href: '/demo' },
    { name: 'Về chúng tôi', href: '/about' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 lg:px-24 backdrop-blur-md bg-black/40 border-b border-white/5"
      >
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Monri" className="h-6 md:h-10 object-contain opacity-100" />
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 text-xs md:text-sm font-bold tracking-[0.2em] text-white/70 uppercase">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="hover:text-white transition-colors focus-visible:outline-white">{link.name}</Link>
          ))}
          <a href="/#contact" className="px-8 py-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-all duration-300 font-black tracking-widest focus-visible:outline-white">
            KẾT NỐI
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white/70 hover:text-white p-2 focus-visible:outline-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Đóng menu" : "Mở menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-32 px-6 flex flex-col items-center gap-12 md:hidden overflow-hidden"
          >
             {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/[0.05] blur-3xl rounded-full pointer-events-none" />
            
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="text-3xl font-black tracking-tighter uppercase text-white/40 hover:text-white transition-colors"
            >
              Trang chủ
            </Link>

            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-3xl font-black tracking-tighter uppercase text-white/40 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="/#contact" 
              onClick={() => setIsOpen(false)}
              className="mt-8 px-12 py-5 bg-white text-black font-black uppercase text-sm tracking-widest rounded-full"
            >
              Kết nối ngay
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
