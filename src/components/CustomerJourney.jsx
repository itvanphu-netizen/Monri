import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Compass, Maximize } from 'lucide-react';

const Stage = ({ stage, title, description, icon: Icon, combo, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay }}
    className="relative pl-12 border-l border-white/5 pb-24 last:pb-0"
  >
    {/* Stage Indicator */}
    <div className="absolute top-0 left-[-20px] w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center text-white/50 group hover:border-white transition-colors duration-500">
       <Icon className="w-5 h-5 group-hover:text-white" />
    </div>
    
    <div className="max-w-4xl">
       <p className="text-sm font-mono tracking-[0.4em] text-white/20 mb-4 uppercase">{stage}</p>
       <h3 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 uppercase leading-none">{title}</h3>
       <p className="text-lg md:text-xl text-white/40 leading-relaxed mb-10 max-w-2xl font-light">
         "{description}"
       </p>
       
       <div className="flex flex-wrap gap-4 items-center">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/10 mr-2">Suggested:</span>
          {combo.map((item, idx) => (
            <div key={idx} className="px-5 py-2 border border-white/5 rounded-full bg-white/[0.01] text-[10px] font-bold text-white/40 uppercase tracking-widest hover:border-white/20 hover:text-white transition-all">
               {item}
            </div>
          ))}
       </div>
    </div>
  </motion.div>
);

const CustomerJourney = () => {
  const stages = [
    {
      stage: "PHASE 01",
      title: "Startup",
      description: "Xây dựng nền móng, tối ưu hóa điểm chạm đầu tiên và định hình bản sắc thương hiệu.",
      icon: Layers,
      combo: ["Landing Page", "Identity Design", "Digital Asset Setup"],
      delay: 0
    },
    {
      stage: "PHASE 02",
      title: "Growth",
      description: "Quy chuẩn hệ quy trình Platform thô sơ lên chuyên nghiệp. Tối ưu trải nghiệm chuyển đổi B2B quy mô lớn.",
      icon: Compass,
      combo: ["Web Platform", "SEO B2B", "Scale-up System"],
      delay: 0.2
    },
    {
      stage: "PHASE 03",
      title: "Scale",
      description: "Bành trướng hệ sinh thái thương hiệu. Tự động hóa chiến lược tiếp cận và thống trị thị trường ngách.",
      icon: Maximize,
      combo: ["Ecosystem Strategy", "Premium Media", "Enterprise Expansion"],
      delay: 0.4
    }
  ];

  return (
    <section id="journey" className="section-padding bg-black relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 relative">
        
        <div className="md:sticky md:top-32 h-fit max-w-sm">
           <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">B2B CUSTOMER JOURNEY</h2>
           <p className="text-white/40 text-lg leading-relaxed mb-12">
             Lộ trình 3 giai đoạn được nghiên cứu sâu để đồng hành cùng sự đột phá của doanh nghiệp.
           </p>
           <div className="w-1/2 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        <div className="flex-1 relative flex flex-col pt-12">
           {stages.map((stage, idx) => (
             <Stage key={idx} {...stage} />
           ))}
           
           {/* Connecting Line Glow */}
           <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default CustomerJourney;
