import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layers, LineChart, Monitor } from 'lucide-react';

const Card = ({ title, duration, features, popular, icon: Icon }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`relative min-w-[320px] md:min-w-[400px] flex flex-col p-10 rounded-3xl border ${popular ? 'border-white/20 bg-white/[0.04]' : 'border-white/5 bg-neutral-900/40'} pointer-events-auto snap-center`}
  >
    {popular && (
      <div className="absolute top-6 right-6 px-4 py-1 bg-white text-black text-[10px] font-bold uppercase rounded-full tracking-widest shadow-lg">
        Phổ Biến
      </div>
    )}
    
    <div className="mb-12">
      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
        <Icon className="w-8 h-8 text-white/80" />
      </div>
      <h3 className="text-3xl font-black text-white mb-2 uppercase">{title}</h3>
      <p className="text-white/70 text-sm tracking-widest uppercase">Thời hạn: {duration}</p>
    </div>
    
    <ul className="flex-1 space-y-4 mb-12">
      {features.map((feature, idx) => (
        <li key={idx} className="flex text-sm text-white/90 font-light leading-relaxed">
          <span className="mr-3 opacity-50">•</span>
          {feature}
        </li>
      ))}
    </ul>

    <a href="#contact" className={`w-full py-4 rounded-xl text-sm font-semibold tracking-widest uppercase transition-all duration-500 border text-center flex items-center justify-center ${popular ? 'bg-white text-black border-white' : 'bg-transparent text-white/90 border-white/20 hover:bg-white hover:text-black hover:border-white'}`}>
      Lựa chọn
    </a>
  </motion.div>
);

const ServicePackages = () => {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  
  const services = [
    {
      title: "Landing Page",
      duration: "1 tháng",
      features: [
        "Thiết kế 1 Landing Page cao cấp",
        "Tối ưu chuyển đổi & UX/UI",
        "Responsive trên mọi thiết bị",
        "Tích hợp CRM cơ bản",
        "Hỗ trợ 24/7"
      ],
      icon: Layers
    },
    {
      title: "Web Basic",
      duration: "3-6 tháng",
      features: [
        "Hệ thống website đa tầng",
        "Quản trị nội dung CMS",
        "Tư vấn cấu trúc sản phẩm",
        "Tối ưu tốc độ tải trang",
        "Security & Analytics Setup",
        "Chỉnh sửa liên tục theo yêu cầu"
      ],
      popular: true,
      icon: Monitor
    },
    {
      title: "Web + SEO",
      duration: "12 tháng",
      features: [
        "Toàn bộ tính năng Web Basic",
        "Chiến lược SEO tổng thể",
        "Nội dung chuẩn SEO cao cấp",
        "Scale-up Roadmap",
        "Hỗ trợ kỹ thuật trọn vẹn"
      ],
      icon: LineChart
    }
  ];

  return (
    <section id="services" className="py-32 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-24 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-tight">
          SERVICES <br className="md:hidden" /> PACKAGES
        </h2>
        <div className="w-24 h-[1px] bg-white/20 mb-8" />
        <p className="text-white/60 max-w-xl text-lg uppercase tracking-[0.3em] font-light">
          Gói dịch vụ chiến lược phù hợp với quy mô doanh nghiệp.
        </p>
      </div>

      {/* Horizontal Slider */}
      <div 
        ref={containerRef}
        className="flex lg:justify-center gap-6 md:gap-8 overflow-x-auto px-6 md:px-24 snap-x snap-mandatory scrollbar-hide pb-16 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {services.map((service, idx) => (
          <Card key={idx} {...service} />
        ))}
        {/* Padding for end of scroll - Only show if not justified */}
        <div className="min-w-[40px] lg:hidden" />
      </div>
      
      {/* Progress Bar & Swipe Hint */}
      <div className="max-w-7xl mx-auto px-6 mt-4 md:mt-0">
        <div className="flex justify-between items-center mb-6 md:hidden">
           <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/50">Swipe to explore</span>
           <div className="flex gap-2">
              {[0, 1, 2].map(i => (
                <div key={i} className="w-1 h-1 rounded-full bg-white/10" />
              ))}
           </div>
        </div>
        <div className="h-[4px] md:h-[2px] w-full bg-white/5 rounded-full relative overflow-hidden">
          <motion.div 
            style={{ scaleX: scrollXProgress }}
            className="absolute inset-0 bg-white/40 origin-left shadow-[0_0_10px_white]"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;
