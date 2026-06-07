import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

/* ── Pure-CSS decorative panel — zero JS, zero WebGL ──────────── */
const HeroVisual = () => (
  <div className="hidden lg:flex lg:w-[46%] shrink-0 h-[580px] relative items-center justify-center">

    {/* Outer ring */}
    <div style={{ animationDuration: '18s' }}
      className="absolute w-[420px] h-[420px] rounded-full border border-white/8 animate-spin" />

    {/* Mid ring — counter-rotate */}
    <div style={{ animationDuration: '12s', animationDirection: 'reverse' }}
      className="absolute w-[300px] h-[300px] rounded-full border border-white/10 animate-spin" />

    {/* Inner ring */}
    <div style={{ animationDuration: '8s' }}
      className="absolute w-[180px] h-[180px] rounded-full border border-white/15 animate-spin" />

    {/* Orbit dots on outer ring */}
    {[0, 72, 144, 216, 288].map((deg, i) => (
      <div
        key={i}
        className="absolute w-[420px] h-[420px]"
        style={{ transform: `rotate(${deg}deg)`, animationDuration: '18s' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-2 h-2 rounded-full bg-white/30" />
      </div>
    ))}

    {/* Orbit dots on mid ring */}
    {[0, 120, 240].map((deg, i) => (
      <div
        key={i}
        className="absolute w-[300px] h-[300px]"
        style={{ transform: `rotate(${deg}deg)` }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-1.5 h-1.5 rounded-full bg-white/20" />
      </div>
    ))}

    {/* Centre hex / logo mark */}
    <div className="relative z-10 flex flex-col items-center gap-3">
      <div className="w-20 h-20 rounded-2xl border border-white/20 bg-white/5
                      flex items-center justify-center backdrop-blur-sm">
        <span className="text-2xl font-black tracking-tighter text-white/80 select-none">M</span>
      </div>
      <div className="flex gap-1.5">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/25"
            style={{ animationDelay: `${i * 0.3}s`, animation: 'heroPulse 2s ease-in-out infinite' }} />
        ))}
      </div>
    </div>

    {/* Floating stat cards */}
    <div className="absolute top-10 right-8 px-4 py-3 rounded-2xl border border-white/10
                    bg-black/60 backdrop-blur-sm"
      style={{ animation: 'heroFloat 4s ease-in-out infinite' }}>
      <p className="text-xs text-white/35 uppercase tracking-widest">Dự án</p>
      <p className="text-2xl font-black text-white/80">50+</p>
    </div>

    <div className="absolute bottom-16 left-6 px-4 py-3 rounded-2xl border border-white/10
                    bg-black/60 backdrop-blur-sm"
      style={{ animation: 'heroFloat 4s ease-in-out infinite', animationDelay: '1s' }}>
      <p className="text-xs text-white/35 uppercase tracking-widest">SLA phản hồi</p>
      <p className="text-2xl font-black text-white/80">2 giờ</p>
    </div>

    <div className="absolute top-1/2 -translate-y-1/2 right-4 px-4 py-3 rounded-2xl
                    border border-white/10 bg-black/60 backdrop-blur-sm"
      style={{ animation: 'heroFloat 4s ease-in-out infinite', animationDelay: '2s' }}>
      <p className="text-xs text-white/35 uppercase tracking-widest">Hài lòng</p>
      <p className="text-2xl font-black text-white/80">98%</p>
    </div>

    {/* Ambient glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.04)_0%,_transparent_65%)] pointer-events-none" />

    {/* Keyframes */}
    <style>{`
      @keyframes heroPulse {
        0%, 100% { opacity: 0.25; transform: scale(1); }
        50%       { opacity: 0.7;  transform: scale(1.3); }
      }
      @keyframes heroFloat {
        0%, 100% { transform: translateY(0px); }
        50%       { transform: translateY(-8px); }
      }
    `}</style>
  </div>
);

/* ── Hero ──────────────────────────────────────────────────────── */
const Hero = () => (
  <header className="relative min-h-screen bg-black flex items-center overflow-hidden">
    {/* Background gradients */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.05)_0%,_transparent_55%)] pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.03)_0%,_transparent_50%)] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="max-w-7xl mx-auto px-6 py-24 w-full">
      <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-8">

        {/* ── LEFT: text ── */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-white/30" />
            <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">
              Marketing Agency — Hệ Thống — Đồng Bộ — Thực Chiến
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] mb-8 tracking-tight">
            Thiết Lập Hệ Thống Marketing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
              {' '}Đồng Bộ –{' '}
            </span>
            Giải Pháp Tăng Trưởng Thực Chiến Cho Doanh Nghiệp SME.
          </h1>

          <p className="text-base text-white/60 mb-6 max-w-xl leading-relaxed font-light">
            Monri Agency xóa bỏ mô hình tiếp thị manh mún, chắp vá gây lãng phí ngân sách. Chúng tôi đồng hành cùng doanh nghiệp xây dựng nền móng truyền thông vững chắc: từ nghiên cứu thị trường, thiết kế nhận diện, bao bì sản phẩm, lập trình website tốc độ cao cho đến vận hành đa kênh và tối ưu hóa quảng cáo dựa trên dữ liệu KPI minh bạch.
          </p>

          <p className="text-sm text-white/40 italic mb-10 max-w-xl leading-relaxed border-l-2 border-white/20 pl-4">
            Chiến lược xây dựng từ nghiên cứu, hình ảnh định hình bởi Mỹ thuật Công nghiệp, vận hành tối ưu bằng con số thực tế.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white/90 transition-all">
              Đăng Ký Khảo Sát & Nhận Tư Vấn Miễn Phí
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#packages"
              className="inline-flex items-center justify-center px-8 py-5 border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-all">
              Khám Phá 3 Gói Combo
            </a>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-xs text-white/30 uppercase tracking-widest mb-5 font-semibold">Cam kết vận hành</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Nghiên cứu & chiến lược dựa trên Dữ liệu thực',
                'Thiết kế độc bản bởi chuyên gia Mỹ thuật Công nghiệp',
                'Dashboard KPI thời gian thực minh bạch',
                'SLA phản hồi trong 2 giờ làm việc',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-1.5 shrink-0" />
                  <span className="text-sm text-white/55 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: pure CSS visual ── */}
        <HeroVisual />

      </div>
    </div>

    <a href="#pain-points"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-white/50 transition-colors animate-bounce">
      <ChevronDown className="w-5 h-5" />
    </a>
  </header>
);

export default Hero;
