import React from 'react';
import { motion } from 'framer-motion';
import { Aperture, Globe, Play, Scale } from 'lucide-react';

const Card = ({ title, icon: Icon, features }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group relative h-96 p-8 bg-neutral-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-neutral-900 transition-all hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
    >
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.08] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative h-full flex flex-col items-start">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:bg-white group-hover:text-black transition-all duration-500">
           <Icon className="w-8 h-8" />
        </div>
        
        <h3 className="text-2xl font-black tracking-tight mb-6 uppercase group-hover:text-white transition-colors">
          {title}
        </h3>
        
        <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-white/50 text-sm tracking-wide group-hover:text-white/80 transition-all duration-300">
                 <span className="w-1.5 h-1.5 rounded-full bg-white opacity-40 mr-3 shrink-0 group-hover:opacity-100 shadow-[0_0_8px_white] transition-opacity" />
                 {feature}
              </li>
            ))}
         </ul>

        <div className="mt-auto flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-white/20 group-hover:text-white/60 transition-all duration-700">
           Chi tiết dịch vụ
           <div className="w-4 h-[1px] bg-white/40 ml-2 group-hover:w-16 transition-all duration-700" />
        </div>
      </div>
    </motion.div>
  );
};

const Ecosystem = () => {
  const pillars = [
    {
      title: "Design & Branding",
      icon: Aperture,
      features: ["Brand Identity System", "Thiết kế In ấn Bao bì", "UI/UX High-end Platform", "Visual Brand Strategy"]
    },
    {
      title: "Web & Platform",
      icon: Globe,
      features: ["Enterprise Web solution", "Custom Platform Dev", "Performance Optimization", "E-commerce System"]
    },
    {
      title: "Content & Media",
      icon: Play,
      features: ["Premium Content Writing", "Quay dựng Video chuyên nghiệp", "Social Media Management", "Quảng cáo mạng xã hội"]
    },
    {
      title: "Marketing & Strategy",
      icon: Scale,
      features: ["Tư vấn Lập kế hoạch Marketing", "Thực thi Marketing theo giai đoạn", "Booking Báo chí & Media", "B2B Growth Roadmap"]
    }
  ];

  return (
    <section className="section-padding bg-black relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/5 pb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter mb-8 leading-none">ECOSYSTEM</h2>
            <p className="text-white/60 text-lg uppercase tracking-widest font-medium">Hệ sinh thái dịch vụ 4 trụ cột - vận hành đồng bộ.</p>
          </div>
          <div className="hidden lg:block text-8xl font-black text-white/[0.1] select-none tracking-tight">PILLARS</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {pillars.map((pillar, idx) => (
             <Card key={idx} {...pillar} />
           ))}
        </div>

      </div>
    </section>
  );
};

export default Ecosystem;
