import React from 'react';
import { MessageSquare, Pencil, Rocket } from 'lucide-react';

const Step = ({ number, icon: Icon, title, description }) => (
  <div className="relative">
    <div className="flex items-start gap-6">
      <div className="shrink-0">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-white/70" />
        </div>
        <div className="text-6xl font-black text-white/5 absolute top-0 -left-4 -z-10">
          {number}
        </div>
      </div>
      <div className="pt-2">
        <h3 className="text-2xl font-black mb-3 uppercase">{title}</h3>
        <p className="text-white/60 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Tư vấn & Báo giá',
      description: 'Gọi điện hoặc điền form. Chúng tôi phân tích nhu cầu và gửi báo giá chi tiết trong 24h. Không ép buộc, không phí ẩn.'
    },
    {
      number: '02',
      icon: Pencil,
      title: 'Thiết kế & Phê duyệt',
      description: 'Đội ngũ thiết kế làm việc trực tiếp với bạn. Sửa không giới hạn cho đến khi bạn hài lòng 100%.'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Triển khai & Hỗ trợ',
      description: 'Ra mắt sản phẩm và theo dõi hiệu suất. Hỗ trợ kỹ thuật trọn đời, cập nhật liên tục theo yêu cầu.'
    }
  ];

  return (
    <section className="py-24 bg-neutral-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            Quy trình làm việc
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Đơn giản, minh bạch, không rườm rà. Từ ý tưởng đến sản phẩm hoàn thiện chỉ trong 3 bước.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {steps.map((step, i) => (
            <Step key={i} {...step} />
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-white/5 border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-black mb-2 uppercase">Vẫn chưa chắc chắn?</h3>
              <p className="text-white/60">
                Đặt lịch gọi 15 phút để trao đổi trực tiếp. Hoàn toàn miễn phí, không ràng buộc.
              </p>
            </div>
            <a 
              href="#contact" 
              className="shrink-0 px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white/90 transition-all"
            >
              Đặt lịch ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
