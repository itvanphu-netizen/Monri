import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layout, Smartphone, PieChart } from 'lucide-react';

const DemoCard = ({ title, type, icon: Icon, image, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="group relative flex flex-col bg-neutral-900/50 border border-white/5 rounded-[3rem] overflow-hidden hover:border-white/20 transition-all duration-500"
  >
    {/* Preview Image Placeholder */}
    <div className="h-64 bg-neutral-800 relative overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
          <Icon className="w-16 h-16 text-white/5" />
       </div>
       {/* Hover Overlay */}
       <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-difference flex items-center justify-center">
          <div className="flex items-center gap-2 text-black font-black uppercase text-xs tracking-widest">
             Live Preview <ExternalLink className="w-4 h-4" />
          </div>
       </div>
    </div>
    
    <div className="p-10">
       <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/20 mb-3">{type}</div>
       <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{title}</h3>
       <p className="text-white/40 text-sm font-light leading-relaxed mb-8">
          Giải pháp giao diện tối ưu cho hệ thống quản trị dữ liệu quy mô lớn.
       </p>
       <div className="flex gap-3">
          {['React', 'UI/UX', 'Figma'].map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-[9px] uppercase font-bold text-white/30 tracking-widest">
               {tag}
            </span>
          ))}
       </div>
    </div>
  </motion.div>
);

const ClientShowcase = () => {
  const demos = [
    { title: "Dashboard B2B", type: "Web App", icon: PieChart },
    { title: "Corporate Portal", type: "Enterprise", icon: Layout },
    { title: "Mobile Ecosystem", type: "Mobile UI", icon: Smartphone },
  ];

  return (
    <section className="section-padding bg-black relative">
       <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 border-b border-white/5 pb-16">
             <div className="max-w-2xl">
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
                   PROTOTYPE <br /> <span className="text-white/20">& SHOWCASE</span>
                </h2>
                <p className="text-white/50 text-lg md:text-xl font-light uppercase tracking-widest">
                   Những ý tưởng thiết kế độc bản đang được chúng tôi nghiên cứu và phát triển.
                </p>
             </div>
             <a href="/demo" className="px-8 py-3 border border-white/10 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Xem tất cả
             </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {demos.map((demo, idx) => (
                <DemoCard key={idx} {...demo} delay={idx * 0.2} />
             ))}
          </div>
       </div>
    </section>
  );
};

export default ClientShowcase;
