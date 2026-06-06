import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';

const PainPoints = () => {
  const problems = [
    'Thuê một đơn vị thiết kế Logo lẻ, rồi giao cho nhân sự nội bộ tự thiết kế hình ảnh bài đăng Social.',
    'Thuê một freelancer lập trình website giá rẻ, nhưng không có nhân sự viết bài chuẩn SEO và tối ưu hóa giao diện di động.',
    'Thuê một cá nhân chạy quảng cáo tự do bên ngoài, tự đốt ngân sách nhưng không thiết lập hệ thống đo lường chuyển đổi.',
  ];

  return (
    <section id="pain-points" className="py-24 bg-neutral-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-white/30" />
            <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">Thực trạng doanh nghiệp</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            Sự Đứt Gãy Trong<br />
            <span className="text-white/50">Các Mắt Xích Tiếp Thị</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Hầu hết doanh nghiệp SME hiện nay đang tự vận hành hoạt động Marketing theo phương thức chắp vá:
          </p>
        </div>

        {/* Problems list */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, i) => (
            <div key={i} className="p-6 rounded-2xl border border-red-500/20 bg-red-500/5 flex items-start gap-4">
              <AlertTriangle className="w-5 h-5 text-red-400/70 shrink-0 mt-0.5" />
              <p className="text-sm text-white/70 leading-relaxed">{problem}</p>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div className="mb-16 p-8 rounded-3xl bg-black border border-white/10 overflow-x-auto">
          <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-8 text-center">Vòng lặp thất bại</p>
          <div className="flex flex-col items-center gap-2 min-w-[480px]">
            {/* Row 1 */}
            <div className="flex items-center gap-2">
              <div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-white/60 whitespace-nowrap">Nội dung tẻ nhạt</div>
              <ArrowRight className="w-4 h-4 text-white/20" />
              <div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-white/60 whitespace-nowrap">Thiết kế xộc xệch</div>
              <ArrowRight className="w-4 h-4 text-white/20" />
              <div className="px-4 py-2 rounded-lg border border-red-500/30 bg-red-500/10 text-sm text-red-300/80 whitespace-nowrap">Website lỗi tải trang</div>
            </div>
            {/* Connector */}
            <div className="flex items-center justify-end w-full pr-8">
              <div className="w-px h-6 bg-white/10" />
            </div>
            {/* Row 2 */}
            <div className="flex items-center gap-2 flex-row-reverse">
              <div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-white/60 whitespace-nowrap">Thiếu mã tracking</div>
              <ArrowRight className="w-4 h-4 text-white/20 rotate-180" />
              <div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-white/60 whitespace-nowrap">Đốt tiền Quảng cáo</div>
              <ArrowRight className="w-4 h-4 text-white/20 rotate-180" />
              <div className="px-4 py-2 rounded-lg border border-red-500/30 bg-red-500/10 text-sm text-red-300/80 whitespace-nowrap">Không ra đơn hàng</div>
            </div>
          </div>
        </div>

        {/* Consequence + Solution */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl border border-red-500/20 bg-red-500/5">
            <h3 className="text-lg font-black uppercase mb-4 text-red-300/80">Hậu quả trực tiếp</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              Hình ảnh thương hiệu thiếu đồng bộ trên các kênh truyền thông, thông điệp tiếp thị bị lệch pha, trải nghiệm mua sắm của khách hàng bị đứt gãy. Doanh nghiệp mất chi phí đầu tư lớn nhưng hoàn toàn mù mờ về hiệu quả chuyển đổi thực tế.
            </p>
          </div>
          <div className="p-8 rounded-3xl border border-white/20 bg-white/5">
            <h3 className="text-lg font-black uppercase mb-4 text-white/90">Giải pháp từ Monri</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              Chúng tôi không bán dịch vụ đơn lẻ. Chúng tôi thiết lập và vận hành một <span className="text-white font-semibold">Hệ thống Marketing Đồng bộ</span>, kết nối chặt chẽ tất cả các mắt xích từ gốc rễ chiến lược đến thực thi đa kênh.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PainPoints;
