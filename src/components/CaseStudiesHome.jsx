import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    index: '01',
    brand: 'The Cội',
    category: 'Trà mộc',
    combo: 'Combo Start-up Engine',
    results: [
      'Thiết lập trọn bộ nhận diện, câu chuyện thương hiệu và bao bì mộc mạc trong 45 ngày',
      'Thu hút hơn 120.000 lượt tiếp cận tự nhiên trong tháng đầu tiên ra mắt',
    ],
    metric: '120K',
    metricLabel: 'Lượt tiếp cận tự nhiên tháng 1',
  },
  {
    index: '02',
    brand: 'EcoShield',
    category: 'Sơn gỗ công nghiệp',
    combo: 'Combo Re-branding Shift',
    results: [
      'Đánh giá và tái thiết kế lại toàn bộ hệ thống vỏ lon sơn cao cấp nổi bật trên kệ hàng',
      'Tăng 35% lượt yêu cầu báo giá dự án trực tiếp qua Website mới',
    ],
    metric: '+35%',
    metricLabel: 'Lượt yêu cầu báo giá qua Website',
  },
  {
    index: '03',
    brand: 'Naturé Skin',
    category: 'Dược mỹ phẩm thiên nhiên',
    combo: 'Combo Conversion Funnel',
    results: [
      'Thiết kế Landing Page tối ưu CRO; Vận hành kịch bản video TikTok ngắn lên xu hướng',
      'Giảm 42% chi phí trên mỗi Lead khách hàng, tăng gấp đôi doanh thu trực tuyến',
    ],
    metric: '−42%',
    metricLabel: 'Chi phí mỗi Lead (CPL)',
  },
];

const CaseStudiesHome = () => (
  <section id="case-studies" className="py-24 bg-black">
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-white/30" />
          <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">Dự án tiêu biểu</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
          Hệ Thống Tiếp Thị<br />
          <span className="text-white/50">Đã Được Kích Hoạt</span>
        </h2>
        <p className="text-white/60 text-lg">
          Những hệ thống tiếp thị thực tế đã được kích hoạt thành công bởi Monri Agency.
        </p>
      </div>

      {/* Case cards */}
      <div className="space-y-6">
        {cases.map(({ index, brand, category, combo, results, metric, metricLabel }) => (
          <div key={index} className="group p-8 rounded-3xl border border-white/10 bg-neutral-950 hover:border-white/20 transition-all">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
              {/* Left */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-black text-white/5">{index}</span>
                  <div>
                    <h3 className="text-2xl font-black uppercase">{brand}</h3>
                    <p className="text-sm text-white/40">{category} — <span className="text-white/50">{combo}</span></p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {results.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/65">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: metric + CTA */}
              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-4 md:min-w-[200px]">
                <div className="text-right">
                  <div className="text-4xl font-black text-white/90">{metric}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wide mt-1">{metricLabel}</div>
                </div>
                <a
                  href="#contact"
                  className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/20 text-sm font-bold text-white/70 hover:bg-white hover:text-black transition-all group-hover:border-white/30"
                >
                  Xem chi tiết
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesHome;
