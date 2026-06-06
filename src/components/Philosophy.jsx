import React from 'react';
import { Palette, Link2, Users } from 'lucide-react';

const values = [
  {
    icon: Palette,
    title: 'Mỹ thuật ứng dụng thực chiến',
    body: 'Đội ngũ sáng tạo của Monri được dẫn dắt chuyên môn trực tiếp bởi bà Vũ Thị Ngọc Hương (tốt nghiệp Khoa Đồ họa Đại học Mỹ thuật Công nghiệp Hà Nội). Tại Monri, hình ảnh thương hiệu, bao bì sản phẩm hay giao diện website không chỉ dừng lại ở tính thẩm mỹ, mà phải đóng vai trò như một ngôn ngữ thị giác kích thích quyết định mua hàng của người tiêu dùng.',
  },
  {
    icon: Link2,
    title: 'Vận hành hệ thống nhất quán',
    body: 'Chúng tôi bảo vệ dòng chảy trải nghiệm của khách hàng luôn mượt mà. Mọi thông điệp từ bao bì thực tế đến trang đích website, kênh mạng xã hội đều truyền tải chung một bản sắc duy nhất.',
  },
  {
    icon: Users,
    title: 'Mô hình Managed Service (DIFM)',
    body: 'Monri hoạt động như một phòng Marketing thuê ngoài chuyên nghiệp. Chúng tôi trực tiếp nghiên cứu, lập kế hoạch, sản xuất nội dung, thiết kế visual, lập trình kỹ thuật và chạy ads quảng cáo. Doanh nghiệp chỉ cần duyệt kế hoạch và kiểm soát hiệu quả đầu ra.',
  },
];

const Philosophy = () => (
  <section id="philosophy" className="py-24 bg-neutral-950 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-white/30" />
          <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">Triết lý phát triển độc bản</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
          The Monri Way
        </h2>
        <p className="text-white/60 text-lg leading-relaxed">
          Sự khác biệt của Monri Agency trên thị trường tiếp thị được khẳng định qua 3 giá trị cốt lõi.
        </p>
      </div>

      {/* Values */}
      <div className="grid md:grid-cols-3 gap-8">
        {values.map(({ icon: Icon, title, body }, i) => (
          <div key={i} className="group p-8 rounded-3xl border border-white/10 bg-black hover:border-white/20 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black uppercase mb-4 leading-tight">{title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Philosophy;
