import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Image as ImageIcon, Briefcase, Megaphone, Smartphone, Globe, PenTool, Video } from 'lucide-react';

const ServiceItem = ({ title, icon: Icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group flex items-center gap-6 p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/20 hover:bg-neutral-900 transition-all duration-300 cursor-default"
  >
    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
       <Icon className="w-6 h-6 text-white/50 group-hover:text-black" />
    </div>
    <span className="text-sm font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">{title}</span>
  </motion.div>
);

const AdHocServices = () => {
  const adHocServices = [
    { title: "Thiết kế Web", icon: Monitor },
    { title: "Thiết kế Banner", icon: ImageIcon },
    { title: "Ấn phẩm văn phòng", icon: Briefcase },
    { title: "Ấn phẩm quảng cáo", icon: Megaphone },
    { title: "Quảng cáo mạng xã hội", icon: Smartphone },
    { title: "Booking báo/Media", icon: Globe },
    { title: "Viết Content", icon: PenTool },
    { title: "Quay dựng Video", icon: Video },
  ];

  return (
    <section className="py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tighter">DỊCH VỤ LẺ</h2>
           <p className="text-white/60 uppercase tracking-[0.3em] font-light">Giải pháp linh hoạt cho nhu cầu cụ thể</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {adHocServices.map((service, idx) => (
            <ServiceItem key={idx} {...service} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdHocServices;
