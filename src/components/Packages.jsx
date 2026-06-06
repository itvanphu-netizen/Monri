import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const packages = [
  {
    tag: '01',
    name: 'MONRI START-UP ENGINE',
    subtitle: 'Xây dựng hệ thống từ đầu',
    description: 'Giải pháp cho doanh nghiệp mới thành lập hoặc thương hiệu mới ra mắt thị trường.',
    goal: 'Tạo dựng nền tảng chuyên nghiệp và đồng bộ trên mọi điểm chạm ngay từ vạch xuất phát.',
    items: [
      'Nghiên cứu đối thủ và lập kế hoạch ra mắt',
      'Thiết kế Logo & Brand Guideline',
      'Viết câu chuyện thương hiệu',
      'Xây dựng Website doanh nghiệp độc bản',
      'Tạo dựng và chuẩn hóa hệ thống kênh Social',
    ],
    cta: 'Khám phá chi tiết gói Start-up Engine',
    popular: false,
  },
  {
    tag: '02',
    name: 'MONRI RE-BRANDING SHIFT',
    subtitle: 'Đánh giá & Tái định vị thương hiệu',
    description: 'Giải pháp cho doanh nghiệp lâu năm cần cải tiến hình ảnh lỗi thời hoặc chuyển dịch sang phân khúc cao cấp.',
    goal: 'Khảo sát lỗ hổng tiếp thị cũ, nâng tầm giá trị thẩm mỹ của nhận diện và bao bì để gia tăng năng lực cạnh tranh.',
    items: [
      'Đánh giá sức khỏe thương hiệu cũ',
      'Định vị phân khúc mới',
      'Thiết kế lại Logo và hệ thống ấn phẩm Marketing',
      'Thiết kế bao bì nhãn mác sản phẩm chuyên sâu',
      'Cấu trúc lại Website chuẩn công nghệ siêu nhẹ',
    ],
    cta: 'Khám phá chi tiết gói Re-branding Shift',
    popular: true,
  },
  {
    tag: '03',
    name: 'MONRI CONVERSION FUNNEL',
    subtitle: 'Thiết lập phễu chuyển đổi thực chiến',
    description: 'Giải pháp cho doanh nghiệp chạy quảng cáo không hiệu quả, phễu bán hàng đa kênh bị tắc nghẽn.',
    goal: 'Tập trung tối đa vào tối ưu hóa tỷ lệ chuyển đổi (CRO), vận hành nội dung thu hút đơn hàng thực tế.',
    items: [
      'Cấu hình Dashboard quản lý KPI thời gian thực',
      'Thiết kế Landing Page bán hàng tối ưu',
      'Sản xuất Content Social & Video ngắn TikTok lên xu hướng',
      'Set up và bám đuổi quảng cáo đa kênh (Facebook, Google, TikTok Ads)',
    ],
    cta: 'Khám phá chi tiết gói Conversion Funnel',
    popular: false,
  },
];

const PackageCard = ({ tag, name, subtitle, description, goal, items, cta, popular }) => (
  <div className={`relative flex flex-col p-8 rounded-3xl border transition-all ${popular ? 'border-white/30 bg-white/5' : 'border-white/10 bg-black hover:border-white/20'}`}>
    {popular && (
      <div className="absolute -top-3 left-8 px-4 py-1 bg-white text-black text-xs font-black uppercase tracking-wider rounded-full">
        Được chọn nhiều nhất
      </div>
    )}

    {/* Tag + name */}
    <div className="mb-6">
      <span className="text-5xl font-black text-white/5 leading-none block mb-2">{tag}</span>
      <h3 className="text-xl font-black uppercase tracking-tight mb-1">{name}</h3>
      <p className="text-sm text-white/50 font-medium">{subtitle}</p>
    </div>

    {/* Description */}
    <p className="text-sm text-white/60 leading-relaxed mb-4">{description}</p>

    {/* Goal */}
    <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
      <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-1">Mục tiêu</p>
      <p className="text-sm text-white/70 leading-relaxed">{goal}</p>
    </div>

    {/* Items */}
    <ul className="space-y-3 mb-8 flex-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-white/65">
          <Check className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>

    {/* CTA */}
    <a
      href="#contact"
      className={`group flex items-center justify-between w-full py-4 px-6 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all ${
        popular
          ? 'bg-white text-black hover:bg-white/90'
          : 'border border-white/20 text-white hover:bg-white hover:text-black'
      }`}
    >
      <span>{cta}</span>
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </a>
  </div>
);

const Packages = () => (
  <section id="packages" className="py-24 bg-black">
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-white/30" />
          <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">3 Gói Combo Marketing Chiến Lược</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
          Giải Pháp Tích Hợp<br />
          <span className="text-white/50">Đưa Vào Vận Hành Ngay</span>
        </h2>
        <p className="text-white/60 text-lg leading-relaxed">
          Tùy thuộc vào giai đoạn phát triển và nhu cầu thực tế của doanh nghiệp, Monri Agency thiết lập 3 gói giải pháp tích hợp toàn diện.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((pkg, i) => (
          <PackageCard key={i} {...pkg} />
        ))}
      </div>
    </div>
  </section>
);

export default Packages;
