import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, DollarSign } from 'lucide-react';

const BusinessModel = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12 lg:gap-24 relative z-10">
        
        <div className="w-full md:w-1/3 flex flex-col justify-center">
           <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">CÁCH CHÚNG TÔI LÀM VIỆC</h2>
           <p className="text-white/40 text-lg leading-relaxed mb-12">
             Tùy thuộc vào nhu cầu của bạn, chúng tôi cung cấp hai hình thức hợp tác cực kỳ rõ ràng, không chi phí ẩn.
           </p>
           
           <div className="hidden md:flex flex-col gap-6">
              {[
                { label: "Báo Giá Minh Bạch", icon: DollarSign },
                { label: "Tập Trung Ra Số", icon: TrendingUp }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white/60">
                   <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                     <item.icon className="w-4 h-4" />
                   </div>
                   <span className="text-sm uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
           </div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
          
          {/* Path 1: Subscription */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col p-10 bg-white/[0.04] border border-white/10 rounded-[3rem] group hover:border-white/20 transition-all hover:bg-white/[0.06]"
          >
            <div className="mb-12">
               <h3 className="text-3xl font-bold mb-4">Gói Đồng Hành</h3>
               <p className="text-white/40 text-sm tracking-widest uppercase">Thanh toán hàng tháng</p>
            </div>
            
            <div className="relative flex-1 mb-12 flex flex-col gap-4">
               {/* Simplified Timeline Visual */}
               {[1, 2, 3].map((month) => (
                 <div key={month} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl">
                    <div className="w-1.5 h-1.5 rounded-full bg-white opacity-40 shadow-[0_0_10px_white]" />
                    <span className="text-sm font-medium text-white/50">Tháng {month}</span>
                    <div className="ml-auto w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-white/30" style={{ width: `${month * 33}%` }} />
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="space-y-4">
               <h4 className="text-xl font-medium mb-2">Đội ngũ của riêng bạn</h4>
               <p className="text-white/30 text-sm leading-relaxed">
                 Thay vì thuê nhân sự tốn kém, chúng tôi lo toàn bộ từ thiết kế đến quảng cáo với một khoản phí cố định mỗi tháng.
               </p>
            </div>
          </motion.div>

          {/* Path 2: One-time */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col p-10 bg-neutral-900 border border-white/5 rounded-[3rem] group hover:border-white/10 transition-all"
          >
            <div className="mb-12">
               <h3 className="text-3xl font-bold mb-4">Gói Trọn Gói</h3>
               <p className="text-white/40 text-sm tracking-widest uppercase">Thanh toán một lần</p>
            </div>
            
            <div className="relative flex-1 mb-12 flex items-center justify-center grayscale opacity-60">
               {/* Symbol of completion */}
               <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/5 border border-white/5 flex items-center justify-center">
                     <ArrowRight className="w-8 h-8 text-white/30 rotate-[-45deg]" />
                  </div>
               </div>
            </div>
            
            <div className="space-y-4">
               <h4 className="text-xl font-medium mb-2">Làm xong, bàn giao ngay</h4>
               <p className="text-white/30 text-sm leading-relaxed">
                 Phù hợp khi bạn chỉ cần thiết kế website hoặc làm một chiến dịch cụ thể. Thanh toán một lần và sở hữu trọn đời.
               </p>
            </div>
          </motion.div>

        </div>

      </div>
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default BusinessModel;
