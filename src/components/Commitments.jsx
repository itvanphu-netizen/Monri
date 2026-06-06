import React from 'react';
import { Clock, Shield, FileCheck } from 'lucide-react';

const commitments = [
  {
    icon: Clock,
    title: 'Cam kết SLA phản hồi trong 2 giờ',
    body: 'Mọi yêu cầu chỉnh sửa, cập nhật kỹ thuật hoặc thiết kế phát sinh đều được tiếp nhận và xử lý nhanh chóng thông qua hệ thống Ticket nội bộ.',
  },
  {
    icon: Shield,
    title: 'Cam kết Bảo mật thông tin (NDA)',
    body: 'Ký kết thỏa thuận bảo mật pháp lý nghiêm ngặt cho toàn bộ dữ liệu kinh doanh, báo cáo tài chính và ý tưởng sản phẩm mới của doanh nghiệp trước khi bắt đầu dự án.',
  },
  {
    icon: FileCheck,
    title: 'Bàn giao 100% tài sản',
    body: 'Monri chuyển giao toàn quyền sở hữu pháp lý, bàn giao mã nguồn website và file thiết kế gốc thuộc về doanh nghiệp khi kết thúc hợp đồng mà không thu thêm bất kỳ chi phí phát sinh nào.',
  },
];

const Commitments = () => (
  <section id="commitments" className="py-24 bg-black">
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-white/30" />
          <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">Cam kết vận hành & nguyên tắc hợp tác</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
          Đảm Bảo An Tâm<br />
          <span className="text-white/50">Tuyệt Đối Cho Đối Tác</span>
        </h2>
        <p className="text-white/60 text-lg">
          Monri Agency vận hành dựa trên các quy chuẩn khắt khe để bảo vệ quyền lợi doanh nghiệp.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {commitments.map(({ icon: Icon, title, body }, i) => (
          <div key={i} className="p-8 rounded-3xl border border-white/10 bg-neutral-950 hover:border-white/20 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <Icon className="w-6 h-6 text-white/70" />
            </div>
            <h3 className="text-lg font-black uppercase mb-4 leading-tight">{title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Commitments;
