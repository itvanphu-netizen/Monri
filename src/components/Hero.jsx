import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative min-h-screen bg-black flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-4xl">
          {/* Kicker */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-white/30" />
            <span className="text-xs font-bold tracking-wider text-white/50 uppercase">
              Web & Marketing Agency
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-8 tracking-tight">
            Làm Website &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">Chạy Marketing</span><br />
            Để Ra Đơn.
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl leading-relaxed font-light">
            Không dùng từ ngữ hoa mỹ. Chúng tôi thiết kế trang web chuyên nghiệp để khách hàng tin tưởng bạn, và chạy quảng cáo để họ mua hàng. Mọi thứ đều tập trung vào doanh thu thực tế.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white/90 transition-all"
            >
              Nhận Báo Giá Ngay
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-5 border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-all"
            >
              Xem Chúng Tôi Làm Gì
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-8 text-sm text-white/40 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Báo Cáo Minh Bạch</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Tập Trung Chuyển Đổi</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Hỗ Trợ Nhanh Chóng</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none" />
    </header>
  );
};

export default Hero;
