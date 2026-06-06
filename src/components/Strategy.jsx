import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Strategy = () => {
  return (
    <section id="strategy" className="section-padding bg-black relative overflow-hidden">
      {/* Background Decorative Line */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <div className="text-center mb-20">
           <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tighter">ĐỊNH HƯỚNG CHIẾN LƯỢC</h2>
           <p className="text-white/60 uppercase tracking-[0.3em] font-light">Lựa chọn mô hình vận hành tối ưu</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch">
          {/* DIY Strategy */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 bg-neutral-900 border border-white/5 rounded-[3rem] flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full border border-red-500/30 flex items-center justify-center text-red-500">
                <X className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-white/60">Mô hình DIY</h3>
                <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/20 mt-1">Platform Tự Phục Vụ</p>
              </div>
            </div>
            <ul className="space-y-6 flex-1">
              {[
                "Cấu trúc thiết kế rời rạc",
                "Phụ thuộc tính năng sẵn có",
                "Không có tư vấn chiến lược",
                "Rủi ro trải nghiệm người dùng"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-white/20 text-sm font-light tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/30 mr-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Monri Strategy */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 bg-white text-black rounded-[3rem] shadow-2xl relative flex flex-col"
          >
             <div className="absolute top-8 right-8 px-4 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                Khuyên dùng
             </div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter">Monri Service</h3>
                <p className="text-[10px] uppercase font-black tracking-[0.3em] text-black/40 mt-1">Done-For-You Agency</p>
              </div>
            </div>
            <ul className="space-y-6 flex-1 text-black/80">
              {[
                "Thực thi chiến lược 1:1",
                "UI/UX độc bản theo nhãn hàng",
                "Tối ưu tỉ lệ chuyển đổi thực tế",
                "Hỗ trợ trọn đời hạ tầng kỹ thuật"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-sm font-bold tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-black mr-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
