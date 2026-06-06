import React from 'react';
import { motion } from 'framer-motion';
import Ecosystem from '../components/Ecosystem';
import CoreValue from '../components/CoreValue';
import ServicePackages from '../components/ServicePackages';
import AdHocServices from '../components/AdHocServices';
import Contact from '../components/Contact';

const PageServices = () => {
  return (
    <div className="pt-32 bg-black min-h-screen">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-end justify-between border-b border-white/5 pb-24">
          <div className="max-w-4xl">
             <motion.h1 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="text-6xl md:text-[12rem] font-black tracking-tighter uppercase leading-[0.75] mb-12"
             >
                CHIẾN LƯỢC <br /> <span className="text-white/50">DỊCH VỤ</span>
             </motion.h1>
             <p className="text-xl md:text-3xl font-light text-white/70 tracking-wide leading-relaxed uppercase">
                 Giải pháp B2B toàn trình. <br className="hidden md:block" />
                 Từ Branding cho đến nền tảng hạ tầng kỹ thuật.
             </p>
          </div>
          <div className="hidden lg:block pb-12">
             <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center animate-bounce">
                <span className="text-xl">↓</span>
             </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Ecosystem */}
      <Ecosystem />
      
      {/* Work Process Section */}
      <section className="py-32 bg-neutral-900/50 border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 text-center">QUY TRÌNH THỰC THI</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
               {[
                { step: "01", title: "KHÁM PHÁ", text: "Nghiên cứu thị trường và brief cụ thể từ khách hàng." },
                  { step: "02", title: "CHIẾN LƯỢC", text: "Hoạch định roadmap kỹ thuật và thiết kế UI/UX." },
                  { step: "03", title: "THỰC THI", text: "Production với tiêu chuẩn thiết kế cao cấp nhất." },
                  { step: "04", title: "TỐI ƯU", text: "Chỉnh sửa liên tục xuyên suốt thời gian hợp tác." }
               ].map((item, idx) => (
                  <div key={idx} className="relative group">
                     {idx < 3 && <div className="hidden md:block absolute top-[25%] left-full w-full h-[1px] bg-white/10 z-0" />}
                     <div className="relative z-10 p-10 bg-black border border-white/10 rounded-[2.5rem] group-hover:border-white/30 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] transition-all duration-500 hover:-translate-y-2">
                        <div className="text-6xl font-black text-white/20 mb-8 uppercase tracking-tighter group-hover:text-white/40 transition-colors">{item.step}</div>
                        <h3 className="text-xl font-bold mb-4 uppercase group-hover:text-white transition-colors">{item.title}</h3>
                        <p className="text-white/60 text-sm font-light leading-relaxed group-hover:text-white/80 transition-colors">{item.text}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <CoreValue />
      <AdHocServices />
      <ServicePackages />
      <Contact />
    </div>
  );
};

export default PageServices;
