import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-24 relative z-10">
        
         <div className="flex flex-col gap-6 max-w-sm">
          <img src="/images/logo.png" alt="Monri" className="h-5 object-contain opacity-80 hover:opacity-100 transition-opacity" />
          <p className="text-sm font-light text-white/50 leading-relaxed tracking-wider">
            Công ty Thiết kế Đồ họa Monri – Đơn vị chuyên thiết kế sáng tạo, nhận diện thương hiệu và truyền thông quảng cáo.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
          <div className="flex flex-col gap-10">
            <h2 className="text-[11px] uppercase font-black tracking-[0.4em] text-white/50">Explore</h2>
            <div className="flex flex-col gap-5 text-xs font-bold text-white/70 tracking-[0.2em] uppercase">
              <a href="#strategy" className="hover:text-white transition-all duration-300 focus-visible:outline-white">Strategy</a>
              <a href="#services" className="hover:text-white transition-all duration-300 focus-visible:outline-white">Services</a>
              <a href="/demo" className="hover:text-white transition-all duration-300 focus-visible:outline-white">Demo</a>
            </div>
          </div>
          
          <div className="flex flex-col gap-10 text-right md:text-left">
            <h2 className="text-[11px] uppercase font-black tracking-[0.4em] text-white/50">Socials</h2>
            <div className="flex flex-col gap-5 text-xs font-bold text-white/70 tracking-[0.2em] uppercase">
              <a href="#" className="hover:text-white transition-all duration-300 focus-visible:outline-white">LinkedIn</a>
              <a href="#" className="hover:text-white transition-all duration-300 focus-visible:outline-white">Instagram</a>
              <a href="#" className="hover:text-white transition-all duration-300 focus-visible:outline-white">Behance</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-t border-white/5 mt-24 pt-12 text-[10px] font-black tracking-[0.3em] text-white/20 uppercase">
        <span className="text-center md:text-left">© {currentYear} CÔNG TY TNHH TRUYỀN THÔNG QUẢNG CÁO MONRI. ALL RIGHTS RESERVED.</span>
        
        <div className="flex items-center gap-12 mt-12 md:mt-0">
          <div className="hidden md:flex gap-12">
            <a href="#" className="hover:text-white transition-colors cursor-pointer focus-visible:outline-white">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors cursor-pointer focus-visible:outline-white">Terms of Service</a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-700 group focus-visible:outline-white"
            aria-label="Cuộn lên đầu trang"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
