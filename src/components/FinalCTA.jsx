import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-neutral-900/50 border border-white/5 rounded-[4rem] p-16 md:p-24 w-full group relative overflow-hidden"
        >
          {/* Subtle noise pattern - Using a data URI for reliability */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==')] bg-repeat" />

          <h2 className="text-4xl md:text-8xl font-black tracking-tighter mb-12 uppercase leading-none text-white drop-shadow-2xl">
            Monri – <br />Product Strategy Report
          </h2>
          
          <p className="text-xl md:text-2xl text-white/60 mb-16 italic font-light tracking-wide max-w-2xl mx-auto">
            Khám phá chiến lược tối ưu lợi nhuận cho sản phẩm B2B của bạn.
          </p>

          <a href="/#contact" className="relative group px-12 py-6 bg-white text-black font-bold text-lg tracking-widest uppercase rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl flex items-center justify-center">
            <span className="relative z-10 flex items-center gap-3 font-black">
               Bắt đầu ngay <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
