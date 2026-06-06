import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Target, Eye, Heart } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

const About = () => {
  const coreValues = [
    {
      icon: Heart,
      title: 'SÁNG TẠO BÀI BẢN',
      sub: 'Creative & Methodical',
      text: 'Sáng tạo tại Monri là sự kết hợp giữa gu thẩm mỹ nghệ thuật tinh tế và quy trình nghiên cứu bài bản. Mỗi đường nét, màu sắc, bố cục được tạo ra đều có lý do, có câu chuyện và tuân thủ nghiêm ngặt các nguyên lý thiết kế đồ họa chuyên nghiệp.'
    },
    {
      icon: Target,
      title: 'TÍNH ỨNG DỤNG CAO',
      sub: 'Pragmatism',
      text: 'Một thiết kế đẹp chỉ thực sự có giá trị khi nó phục vụ hiệu quả cho mục tiêu kinh doanh. Chúng tôi tạo ra những sản phẩm thực tế, dễ nhớ, dễ nhận diện và có khả năng ứng dụng linh hoạt trên mọi chất liệu, nền tảng.'
    },
    {
      icon: Award,
      title: 'ĐỒNG HÀNH & THẤU HIỂU',
      sub: 'Empathy & Partnership',
      text: 'Monri không coi khách hàng là người mua dịch vụ, mà là đối tác chiến lược. Chúng tôi lắng nghe, thấu hiểu những trăn trở, văn hóa và nỗi đau của doanh nghiệp để đưa ra giải pháp thiết kế "may đo" riêng biệt.'
    },
    {
      icon: Eye,
      title: 'TẬN TÂM & CHẤT LƯỢNG',
      sub: 'Commitment to Excellence',
      text: 'Sự chỉn chu, kỹ lưỡng trong từng chi tiết nhỏ là phong cách làm việc của Monri. Từ khâu tiếp nhận yêu cầu đến bàn giao sản phẩm, chúng tôi cam kết đặt chất lượng lên hàng đầu, đảm bảo tính độc bản và bảo hộ thương hiệu.'
    },
    {
      icon: Heart,
      title: 'THÍCH ỨNG & ĐỔI MỚI',
      sub: 'Adaptability',
      text: 'Monri không ngừng cập nhật các xu hướng thiết kế thời thượng, công nghệ đồ họa mới và sự chuyển dịch của hành vi người tiêu dùng để giúp thương hiệu của khách hàng luôn giữ được sự tươi mới, hiện đại.'
    }
  ];

  const milestones = [
    { year: '2018', event: 'Thành lập ngày 09/11/2018 tại TP. Hồ Chí Minh' },
    { year: '2019', event: 'Mở rộng dịch vụ Brand Identity & ấn phẩm truyền thông' },
    { year: '2020', event: 'Tham gia cộng đồng BNI – đối tác thiết kế chiến lược' },
    { year: '2024', event: 'Agency chuyên nghiệp trong mảng Branding & Truyền thông' }
  ];

  return (
    <div className="pt-32 bg-black">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] mb-8"
          >
            VỀ CHÚNG TÔI
          </motion.h1>
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-4xl mb-16">
            Công ty Thiết kế Đồ họa Monri (Công ty TNHH Truyền thông Quảng cáo Monri) – 
            đơn vị chuyên về thiết kế sáng tạo và nhận diện thương hiệu, 
            được thành lập bởi cử nhân Khoa Đồ họa trường Đại học Mỹ thuật Công nghiệp Hà Nội.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { icon: Calendar, label: 'Thành lập', value: '09/11/2018' },
              { icon: MapPin, label: 'Trụ sở', value: 'Phường An Phú, TP. Thủ Đức, TP.HCM' },
              { icon: Award, label: 'Người đại diện', value: 'Vũ Thị Ngọc Hương' }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <item.icon className="w-8 h-8 text-white/40 mb-4" />
                <p className="text-xs uppercase tracking-widest text-white/40 mb-2">{item.label}</p>
                <p className="text-xl font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-neutral-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tighter">HÀNH TRÌNH</h2>
              <div className="space-y-12 relative">
                <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
                {milestones.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: idx * 0.25 }}
                    className="flex gap-6 items-start group"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.25 }}
                      className="text-3xl font-black text-white/20 shrink-0 w-24 relative"
                    >
                      {m.year}
                      <div className="absolute -right-[1.35rem] top-2 w-3 h-3 rounded-full bg-white/30 border-2 border-neutral-900 group-hover:bg-white group-hover:scale-150 transition-all duration-500" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.25 + 0.2 }}
                      className="pt-2 border-t border-white/10 flex-1"
                    >
                      <p className="text-white/80">{m.event}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-bold mb-6 uppercase tracking-wider">Nền móng từ Đại học Mỹ thuật Công nghiệp</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  Chủ doanh nghiệp và người đại diện pháp luật của Monri là bà Vũ Thị Ngọc Hương. 
                  Tốt nghiệp Khoa Đồ họa trường Đại học Mỹ thuật Công nghiệp Hà Nội – cái nôi đào tạo 
                  ngành Thiết kế Đồ họa lớn nhất cả nước, người đứng đầu Monri được thừa hưởng tư duy 
                  thẩm mỹ hệ thống, kết hợp nhuần nhuyễn giữa tính nghệ thuật hàn lâm và tính ứng dụng thực tế.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 uppercase tracking-wider">Cột mốc thành lập</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  Monri chính thức được thành lập vào ngày 09 tháng 11 năm 2018. 
                  Người sáng lập đã lựa chọn Thành phố Hồ Chí Minh – thị trường năng động, 
                  cạnh tranh và có nhu cầu lớn về truyền thông quảng cáo – làm nơi đặt trụ sở chính.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10">
              <Target className="w-12 h-12 text-white mb-8" />
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Sứ mệnh</p>
              <h3 className="text-3xl font-black mb-8 leading-tight">
                "Thổi hồn nghệ thuật vào bài toán kinh doanh – Biến bản sắc thương hiệu thành lợi thế cạnh tranh cốt lõi cho doanh nghiệp."
              </h3>
              <ul className="space-y-4">
                {[
                  'Chuẩn hóa hình ảnh cho SMEs',
                  'Tôn vinh giá trị bản sắc doanh nghiệp',
                  'Đồng hành tăng trưởng cùng đối tác'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-12 rounded-[3rem] bg-neutral-900 border border-white/5">
              <Eye className="w-12 h-12 text-white mb-8" />
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Tầm nhìn</p>
              <h3 className="text-3xl font-black mb-8 leading-tight">
                "Trở thành một Agency thiết kế và định vị thương hiệu uy tín hàng đầu tại Việt Nam, là điểm tựa sáng tạo tin cậy cho cộng đồng doanh nghiệp Việt vươn tầm quốc tế."
              </h3>
              <ul className="space-y-4">
                {[
                  'Chất lượng: Kết hợp hoàn hảo giữa chất mỹ thuật chuẩn mực miền Bắc và tính năng động miền Nam',
                  'Quy mô: Cập nhật công nghệ, xu hướng thiết kế và truyền thông mới',
                  'Vị thế: Lựa chọn ưu tiên của các nhà quản lý khi nghĩ đến giải pháp thiết kế có chiều sâu'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-neutral-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tighter">GIÁ TRỊ CỐT LÕI</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Được đúc kết từ cái nôi nghệ thuật bài bản và tư duy kinh doanh hiện đại
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-black border border-white/10 hover:border-white/20 transition-all group"
              >
                <v.icon className="w-8 h-8 text-white/30 mb-6 group-hover:text-white transition-colors" />
                <h3 className="text-lg font-black mb-2 uppercase">{v.title}</h3>
                <p className="text-xs uppercase tracking-widest text-white/30 mb-4">{v.sub}</p>
                <p className="text-white/50 text-sm font-light leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 tracking-tighter">DỊCH VỤ LÕI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Logo & Hệ thống nhận diện', desc: 'Thiết kế Logo và Corporate Identity – thế mạnh cốt lõi từ nền tảng Khoa Đồ họa, chuẩn hóa hình ảnh đồng bộ từ danh thiếp, phong bì, tài liệu văn phòng đến đồng phục.' },
              { title: 'Ấn phẩm truyền thông & Profile', desc: 'Sáng tạo các ấn phẩm Marketing như Brochure, Catalogue, Bao bì nhãn mác sản phẩm và giao diện hình ảnh số.' },
              { title: 'Truyền thông & Xúc tiến thương mại', desc: 'Tổ chức sự kiện và các chiến dịch quảng cáo sáng tạo bổ trợ cho việc thực thi thương hiệu.' }
            ].map((s, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-white/20 transition-all">
                <div className="text-4xl font-mono text-white/10 mb-6">0{idx + 1}</div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default About;
