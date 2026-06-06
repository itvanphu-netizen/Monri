import React from 'react';
import { ArrowRight, Tag, Briefcase } from 'lucide-react';

const technical = [
  'Thiết kế hình ảnh bài đăng Social',
  'Viết bài Content Social',
  'Thiết kế Banner / Cover',
  'Xây dựng Website độc bản',
  'Thiết kế bao bì nhãn mác',
  'Viết bài viết chuẩn SEO',
  'Quản trị chiến dịch quảng cáo lẻ',
];

const strategic = [
  'Nghiên cứu thị trường sâu rộng (Market Research)',
  'Lập kế hoạch Marketing tổng thể',
  'Biên soạn Câu chuyện thương hiệu cốt lõi',
  'Thiết lập Dashboard quản trị KPI Marketing tự động',
];

const AlaCarte = () => (
  <section id="services" className="py-24 bg-neutral-950 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-white/30" />
          <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">Danh mục dịch vụ lẻ (À la carte)</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
          Giải Quyết Nhanh<br />
          <span className="text-white/50">Các Nút Thắt Ngắn Hạn</span>
        </h2>
        <p className="text-white/60 text-lg leading-relaxed">
          Doanh nghiệp có nhu cầu giải quyết nhanh các nút thắt ngắn hạn trước khi chuyển dịch sang vận hành hệ thống dài hạn có thể tham khảo danh mục dịch vụ đơn lẻ của chúng tôi.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Technical services */}
        <div className="p-8 rounded-3xl border border-white/10 bg-black">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Tag className="w-5 h-5 text-white/60" />
            </div>
            <div>
              <h3 className="font-black uppercase text-sm">Dịch vụ thực thi kỹ thuật & nội dung</h3>
              <p className="text-xs text-white/40">Báo giá công khai</p>
            </div>
          </div>
          <ul className="space-y-3">
            {technical.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-white/65 py-2 border-b border-white/5 last:border-0">
                <div className="w-1.5 h-1.5 rounded-full bg-white/25 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Strategic services */}
        <div className="p-8 rounded-3xl border border-white/10 bg-black">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white/60" />
            </div>
            <div>
              <h3 className="font-black uppercase text-sm">Dịch vụ chiến lược chuyên sâu</h3>
              <p className="text-xs text-white/40">Báo giá theo nhu cầu thực tế</p>
            </div>
          </div>
          <ul className="space-y-3">
            {strategic.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-white/65 py-2 border-b border-white/5 last:border-0">
                <div className="w-1.5 h-1.5 rounded-full bg-white/25 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <a
          href="#contact"
          className="group inline-flex items-center gap-3 px-8 py-5 border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-all"
        >
          Xem toàn bộ Bảng giá dịch vụ phân tầng
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

export default AlaCarte;
