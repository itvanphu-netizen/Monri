import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.04)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-28 w-full">
        <div className="max-w-5xl">
          {/* Kicker */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-white/30" />
            <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">
              Marketing Agency — Hệ Thống — Đồng Bộ — Thực Chiến
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.08] mb-8 tracking-tight">
            Thiết Lập Hệ Thống Marketing<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
              {' '}Đồng Bộ –{' '}
            </span>
            Giải Pháp Tăng Trưởng<br className="hidden md:block" />
            Thực Chiến Cho Doanh Nghiệp SME.
          </h1>

          {/* Sub-headline */}
          <p className="text-base md:text-lg text-white/60 mb-6 max-w-3xl leading-relaxed font-light">
            Monri Agency xóa bỏ mô hình tiếp thị manh mún, chắp vá gây lãng phí ngân sách. Chúng tôi đồng hành cùng doanh nghiệp xây dựng nền móng truyền thông vững chắc: từ nghiên cứu thị trường, thiết kế nhận diện, bao bì sản phẩm, lập trình website tốc độ cao cho đến vận hành đa kênh và tối ưu hóa quảng cáo dựa trên dữ liệu KPI minh bạch.
          </p>

          {/* Core message */}
          <p className="text-sm md:text-base text-white/40 italic mb-12 max-w-2xl leading-relaxed border-l-2 border-white/20 pl-4">
            Chiến lược xây dựng từ nghiên cứu, hình ảnh định hình bởi Mỹ thuật Công nghiệp, vận hành tối ưu bằng con số thực tế.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white/90 transition-all"
            >
              Đăng Ký Khảo Sát & Nhận Tư Vấn Miễn Phí
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center px-8 py-5 border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-all"
            >
              Khám Phá 3 Gói Combo Chiến Lược
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-xs text-white/30 uppercase tracking-widest mb-6 font-semibold">Cam kết vận hành</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Nghiên cứu thị trường và chiến lược dựa trên Dữ liệu thực',
                'Ấn phẩm thiết kế độc bản bởi chuyên gia Mỹ thuật Công nghiệp',
                'Báo cáo chỉ số chuyển đổi qua Hệ thống Dashboard real-time',
                'Cam kết vận hành chuyên nghiệp với SLA phản hồi trong 2 giờ',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-1.5 shrink-0" />
                  <span className="text-sm text-white/55 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#pain-points"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-white/50 transition-colors animate-bounce"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </header>
  );
};

export default Hero;
