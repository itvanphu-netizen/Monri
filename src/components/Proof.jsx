import React from 'react';
import { Quote, ArrowUpRight } from 'lucide-react';

const CaseCard = ({ company, industry, result, quote, metric }) => (
  <div className="p-8 rounded-3xl border border-white/10 bg-black hover:border-white/20 transition-all group">
    <div className="flex items-start justify-between mb-6">
      <div>
        <h3 className="text-xl font-black uppercase mb-1">{company}</h3>
        <p className="text-sm text-white/40 uppercase tracking-wider">{industry}</p>
      </div>
      <Quote className="w-8 h-8 text-white/10" />
    </div>
    
    <p className="text-white/70 leading-relaxed mb-6 italic">
      "{quote}"
    </p>

    <div className="pt-6 border-t border-white/10">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-3xl font-black text-white/90 mb-1">{metric}</div>
          <div className="text-xs text-white/40 uppercase tracking-wider">{result}</div>
        </div>
        <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </div>
    </div>
  </div>
);

const StatCard = ({ number, label }) => (
  <div className="text-center">
    <div className="text-5xl md:text-6xl font-black mb-2">{number}</div>
    <div className="text-sm text-white/50 uppercase tracking-wider">{label}</div>
  </div>
);

const Proof = () => {
  const cases = [
    {
      company: 'Tech Startup',
      industry: 'SaaS B2B',
      quote: 'Landing page mới giúp chúng tôi tăng conversion gấp 3 lần. ROI vượt kỳ vọng.',
      metric: '+240%',
      result: 'Tăng conversion'
    },
    {
      company: 'Retail Brand',
      industry: 'E-commerce',
      quote: 'Website load nhanh hơn, UX mượt mà. Khách hàng phản hồi rất tích cực.',
      metric: '2.8s',
      result: 'Tốc độ tải trang'
    },
    {
      company: 'Consulting Firm',
      industry: 'Dịch vụ B2B',
      quote: 'Đội ngũ chuyên nghiệp, responsive cực nhanh. Đúng deadline, đúng ngân sách.',
      metric: '100%',
      result: 'Hài lòng'
    }
  ];

  const stats = [
    { number: '50+', label: 'Dự án hoàn thành' },
    { number: '98%', label: 'Khách hàng hài lòng' },
    { number: '24h', label: 'Thời gian phản hồi' },
    { number: '3 năm', label: 'Kinh nghiệm' }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Stats */}
        <div className="mb-24 p-12 rounded-3xl bg-white/5 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>
        </div>

        {/* Cases */}
        <div>
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">
              Khách hàng nói gì
            </h2>
            <p className="text-white/50 text-lg">
              Kết quả thực tế từ các doanh nghiệp đã làm việc với chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((caseStudy, i) => (
              <CaseCard key={i} {...caseStudy} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-white/40">
              * Tên công ty đã được thay đổi để bảo mật. Số liệu dựa trên dự án thực tế.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Proof;
