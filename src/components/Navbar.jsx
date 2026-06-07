import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Wrench, FolderOpen, Users, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TubelightNavBar } from './ui/tubelight-navbar';

/* ─── nav items shared between desktop tubelight + mobile menu ── */
const NAV_ITEMS = [
  { name: 'Trang chủ', url: '/',         icon: Home },
  { name: 'Dịch vụ',   url: '/services', icon: Wrench },
  { name: 'Dự án',     url: '/demo',     icon: FolderOpen },
  { name: 'Về Monri',  url: '/about',    icon: Users },
  { name: 'Liên hệ',   url: '/contact',  icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-10 backdrop-blur-md bg-black/40 border-b border-white/5"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/images/logo.png"
            alt="Monri"
            className="h-7 md:h-9 object-contain"
          />
        </Link>

        {/* ── Desktop: Tubelight pill nav ── */}
        <TubelightNavBar
          items={NAV_ITEMS}
          className="hidden md:flex"
        />

        {/* ── Desktop: CTA button ── */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center px-6 py-2.5 bg-white text-black rounded-full text-xs font-black uppercase tracking-widest hover:bg-white/90 transition-all shrink-0 focus-visible:outline-white"
        >
          Tư vấn miễn phí
        </Link>

        {/* ── Mobile: Hamburger ── */}
        <button
          className="md:hidden text-white/70 hover:text-white p-2 focus-visible:outline-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* ── Mobile fullscreen menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-28 px-8 flex flex-col items-center gap-8 md:hidden overflow-hidden"
          >
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/[0.04] blur-3xl rounded-full pointer-events-none" />

            {NAV_ITEMS.map(({ name, url, icon: Icon }) => (
              <Link
                key={name}
                to={url}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-2xl font-black tracking-tight uppercase text-white/40 hover:text-white transition-colors"
              >
                <Icon className="w-5 h-5 opacity-50" />
                {name}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 px-10 py-4 bg-white text-black font-black uppercase text-sm tracking-widest rounded-full hover:bg-white/90 transition-all"
            >
              Tư vấn miễn phí
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
