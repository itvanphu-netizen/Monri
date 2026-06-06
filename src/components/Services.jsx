import React from 'react';
import { Check, Monitor, Image as ImageIcon, Briefcase, Megaphone, Smartphone, Globe, PenTool, Video } from 'lucide-react';

const PackageCard = ({ name, price, duration, features, popular }) => (
  <div className={`relative p-8 rounded-3xl border ${popular ? 'border-white/30 bg-white/5' : 'border-white/10 bg-black'}`}>
    {popular && (
      <div className="absolute -top-3 left-8 px-4 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full">
        Phổ biến nhất
      </div>
    )}
    <div className="mb-6">
      <h3 className="text-2xl font-black uppercase mb-2">{name}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-black">{price}</span>
        <span className="text-white/40 text-sm">/ {duration}</span>
      </div>
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-white/70">
          <Check className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <a 
      href="#contact" 
      className={`block w-full py-4 text-center font-bold text-sm uppercase tracking-wider rounded-full transition-all ${
        popular 
          ? 'bg-white text-black hover:bg-white/90' 
          : 'border border-white/20 text-white hover:bg-white hover:text-black'
      }`}
    >
      Chọn gói này
    </a>
  </div>
);

const ServiceIcon = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all group">
    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
      <Icon className="w-5 h-5" />
    </div>
    <span className="text-sm font-semibold">{label}</span>
  </div>
);

const Services = () => {
  const packages = [
    {
      name: 'Landing Page',
      price: 'Từ 15tr',
      duration: '1 tháng',
      features: [
        '1 trang landing chuyển đổi cao',
        'Responsive mọi thiết bị',
        'Tối ưu tốc độ & SEO cơ bản',
        'Tích hợp form liên hệ',
        'Hỗ trợ 30 ngày'
      ]
    },
    {
      name: 'Website Chuẩn',
      price: 'Từ 40tr',
      duration: '3-6 tháng',
      features: [
        'Website đa trang đầy đủ',
        'Quản trị nội dung (CMS)',
        'Tối ưu SEO toàn diện',
        'Analytics & tracking',
        'Bảo trì & cập nhật liên tục',
        'Hỗ trợ trọn đời'
      ],
      popular: true
    },
    {
      name: 'Website + Marketing',
      price: 'Từ 80tr',
      duration: '12 tháng',
      features: [
        'Tất cả tính năng Website Chuẩn',
        'Chiến lược content SEO',
        'Quảng cáo Google/Facebook',
        'Email marketing automation',
        'Báo cáo hiệu suất hàng tháng',
        'Tư vấn chiến lược 1-1'
      ]
    }
  ];

  const adHocServices = [
    { icon: Monitor, label: 'Thiết kế Web' },
    { icon: ImageIcon, label: 'Thiết kế Banner' },
    { icon: Briefcase, label: 'Ấn phẩm văn phòng' },
    { icon: Megaphone, label: 'Ấn phẩm quảng cáo' },
    { icon: Smartphone, label: 'Quảng cáo MXH' },
    { icon: Globe, label: 'Booking báo/Media' },
    { icon: PenTool, label: 'Viết Content' },
    { icon: Video, label: 'Quay dựng Video' }
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Packages */}
        <div className="mb-32">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">
              Chúng Tôi Làm Gì Cho Bạn?
            </h2>
            <p className="text-white/50 text-lg">
              Không úp mở, đây là các gói dịch vụ giúp bạn tăng tốc kinh doanh ngay lập tức.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <PackageCard key={i} {...pkg} />
            ))}
          </div>
        </div>

        {/* Ad-hoc */}
        <div>
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">
              Cần Giải Quyết Vấn Đề Nhỏ?
            </h2>
            <p className="text-white/50 text-lg">
              Nếu bạn chưa sẵn sàng cho gói lớn, chúng tôi có các dịch vụ lẻ để giải quyết ngay lập tức.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {adHocServices.map((service, i) => (
              <ServiceIcon key={i} {...service} />
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-sm text-white/60">
              <span className="font-bold text-white">Báo giá linh hoạt:</span> Mỗi dự án có quy mô khác nhau. 
              Liên hệ để nhận báo giá chi tiết trong 24h.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
