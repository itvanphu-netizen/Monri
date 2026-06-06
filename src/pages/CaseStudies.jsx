import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Card = ({ title, category, year, bgClass }) => (
  <motion.div 
    whileHover={{ y: -20 }}
    className="group relative h-[600px] rounded-[4rem] overflow-hidden border border-white/5 bg-neutral-900 flex flex-col justify-end p-12 transition-all cursor-pointer"
  >
    {/* Minimal Image Placeholder */}
    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-100 transition-opacity`} />
    
    <div className="relative z-20 flex flex-col gap-6">
       <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/40">{category}</span>
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/20">{year}</span>
       </div>
       <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85] group-hover:text-white transition-colors">
          {title}
       </h3>
       
       <button className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black self-end">
          <ArrowUpRight className="w-6 h-6" />
       </button>
    </div>
    
    {/* Decorative noise - Using reliable data URI */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==')] bg-repeat" />
  </motion.div>
);

const CaseStudies = () => {
  const projects = [
     { title: "Lumina Dashboard", category: "Fintech Demo", year: "Live Preview" },
     { title: "Vertex eCommerce", category: "Retail Solution", year: "Live Preview" },
     { title: "Nebula Branding", category: "Visual Identity", year: "Case Study" },
     { title: "Horizon CRM", category: "B2B Platform", year: "Live Preview" }
  ];

  return (
    <div className="pt-32 bg-black min-h-screen">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between border-b border-white/5 pb-24 mb-24">
           <div className="max-w-3xl">
               <motion.h1 
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter uppercase leading-[0.75] mb-12"
               >
                  SẢN PHẨM <br /> <span className="text-white/50">DEMO CENTER</span>
               </motion.h1>
               <p className="text-xl md:text-3xl font-light text-white/70 leading-relaxed uppercase tracking-wider">
                  Trải nghiệm trực tiếp khả năng thực thi. <br />
                  Các sản phẩm mẫu được tối ưu cho từng lĩnh vực B2B.
               </p>
           </div>
           <div className="hidden lg:block text-right pb-12">
              <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-white/10">Prototype & Showcase</span>
           </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-32">
           {projects.map((project, idx) => (
             <Card key={idx} {...project} />
           ))}
        </div>
      </section>
      
      {/* Client List */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12 opacity-20 grayscale">
              {['TECHCORE', 'LUMINA', 'VERTEX', 'OMNI-X', 'SYNERGY'].map((client, idx) => (
                <div key={idx} className="text-4xl font-black uppercase tracking-tighter">{client}</div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA at end */}
      <section className="py-32 bg-white text-black text-center">
         <h2 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-none mb-16">READY TO <br />START?</h2>
         <a href="/#contact" className="px-16 py-8 bg-black text-white text-sm font-black uppercase tracking-[0.3em] rounded-full hover:scale-105 transition-transform inline-block">
            Kết nối ngay
         </a>
      </section>
    </div>
  );
};

export default CaseStudies;
