import React from 'react';
import { ArrowRight, Gift } from 'lucide-react';

const BottomCTA = () => (
  <section id="contact-cta" className="py-24 bg-neutral-950 border-t border-white/5">
    <div className="max-w-4xl mx-auto px-6 text-center">
      {/* Quote */}
      <blockquote className="text-xl md:text-2xl text-white/70 italic leading-relaxed mb-12 relative">
        <span className="absolute -top-4 -left-2 text-6xl text-white/5 font-serif leading-none select-none">"</span>
        Sự thành bại của hoạt động tiếp thị không nằm ở những ý tưởng bay bổng nhất thời. Nó nằm ở tính đồng bộ và kỷ luật vận hành của cả một hệ thống. Hãy để Monri Agency thiết lập nền móng vững chắc đó cho thương hiệu của bạn.
        <span className="absolute -bottom-6 -right-2 text-6xl text-white/5 font-serif leading-none select-none">"</span>
      </blockquote>

      {/* Sub-line */}
      <p className="text-white/50 mb-10 text-lg">
        Đăng ký ngay hôm nay để nhận <span className="text-white font-semibold">Bản phân tích đối thủ cạnh tranh miễn phí</span> từ chuyên gia Monri.
      </p>

      {/* Primary CTA */}
      <div className="flex justify-center mb-10">
        <a
          href="#contact"
          className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black text-sm uppercase tracking-wider rounded-full hover:bg-white/90 transition-all"
        >
          Đăng Ký Khảo Sát Hiện Trạng & Tư Vấn Hệ Thống Marketing
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Gift box */}
      <div className="inline-flex items-start gap-4 px-8 py-5 rounded-2xl border border-white/20 bg-white/5 text-left max-w-xl">
        <Gift className="w-6 h-6 text-white/60 shrink-0 mt-0.5" />
        <div>
          <p className="font-black text-white text-sm uppercase tracking-wide mb-1">Quà tặng đặc biệt</p>
          <p className="text-sm text-white/60 leading-relaxed">
            Gói <span className="text-white font-semibold">"Đánh giá sức khỏe SEO Website hiện tại"</span> trị giá{' '}
            <span className="text-white font-semibold">3.000.000đ</span> — dành riêng cho{' '}
            <span className="text-white font-semibold">15 doanh nghiệp</span> đăng ký sớm nhất trong tuần.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default BottomCTA;
