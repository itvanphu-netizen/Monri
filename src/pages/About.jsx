import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Palette,
  Link2,
  Users,
  Search,
  BarChart2,
  Clock,
  Handshake,
  PenTool,
  Code2,
} from 'lucide-react';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

/* ─── fade-up helper ───────────────────────────────────────────── */
const FadeUp = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Section label ────────────────────────────────────────────── */
const Label = ({ text }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="h-px w-12 bg-white/30" />
    <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">{text}</span>
  </div>
);

/* ══════════════════════════════════════════════════════════════════
   SECTION 1 – HERO
══════════════════════════════════════════════════════════════════ */
const HeroAbout = () => (
  <header className="relative min-h-screen bg-black flex items-center overflow-hidden pt-24">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.04)_0%,_transparent_60%)] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="max-w-7xl mx-auto px-6 py-20 w-full">
      <div className="max-w-5xl">
        <FadeUp>
          <Label text="Giới thiệu — Monri Agency" />
        </FadeUp>

        <FadeUp delay={0.08}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight mb-8">
            Kiến Tạo Hệ Thống Marketing<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
              {' '}Đồng Bộ –{' '}
            </span>
            Tăng Trưởng Bền Vững<br className="hidden md:block" />
            Cho Doanh Nghiệp.
          </h1>
        </FadeUp>

        <FadeUp delay={0.16}>
          <p className="text-base md:text-lg text-white/60 mb-6 max-w-3xl leading-relaxed font-light">
            Monri Agency tái định nghĩa phương thức tiếp thị dành cho doanh nghiệp SME thông qua sự giao thoa giữa Mỹ thuật ứng dụng đẳng cấp và Khoa học quản trị dữ liệu. Chúng tôi đồng hành cùng doanh nghiệp xây dựng, tối ưu hóa và vận hành giải pháp tiếp thị đồng bộ từ gốc rễ.
          </p>
        </FadeUp>

        <FadeUp delay={0.22}>
          <p className="text-sm text-white/40 italic mb-12 border-l-2 border-white/20 pl-4">
            Đưa mỹ thuật vào kinh doanh, minh chứng hiệu quả bằng con số thực tế.
          </p>
        </FadeUp>

        <FadeUp delay={0.28}>
          <a
            href="#monri-way"
            className="group inline-flex items-center gap-3 px-8 py-5 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white/90 transition-all"
          >
            Khám Phá Triết Lý Vận Hành Của Monri
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeUp>

        {/* Info bar */}
        <FadeUp delay={0.35}>
          <div className="mt-16 pt-8 border-t border-white/10 grid sm:grid-cols-3 gap-6 text-sm">
            {[
              { label: 'Thành lập', value: '09 / 11 / 2018' },
              { label: 'Trụ sở', value: 'Phường An Phú, TP. Thủ Đức, TP.HCM' },
              { label: 'Người đại diện', value: 'Vũ Thị Ngọc Hương' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs text-white/30 uppercase tracking-widest mb-1 font-semibold">{label}</p>
                <p className="text-white/80 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </div>
  </header>
);

/* ══════════════════════════════════════════════════════════════════
   SECTION 2 – SỨ MỆNH
══════════════════════════════════════════════════════════════════ */
const Mission = () => (
  <section className="py-24 bg-neutral-950 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <FadeUp>
        <Label text="Sứ mệnh" />
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-16 max-w-3xl">
          Khắc Phục Sự Rời Rạc<br />
          <span className="text-white/50">Trong Tiếp Thị</span>
        </h2>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Thực trạng */}
        <FadeUp delay={0.1}>
          <div className="h-full p-8 rounded-3xl border border-red-500/20 bg-red-500/5">
            <p className="text-xs text-red-300/60 uppercase tracking-widest font-semibold mb-4">Thực trạng đứt gãy</p>
            <p className="text-white/70 leading-relaxed mb-6 text-sm">
              Qua quá trình đồng hành cùng nhiều thương hiệu, đội ngũ sáng lập Monri nhận thấy một rào cản lớn đối với sự tăng trưởng của doanh nghiệp SME:
            </p>
            <ul className="space-y-4">
              {[
                'Nhiều đơn vị sở hữu sản phẩm vượt trội song thiếu giải pháp hiệu quả để truyền tải trọn vẹn giá trị đó đến thị trường.',
                'Việc chia nhỏ các hạng mục tiếp thị cho nhiều nhà thầu độc lập vô tình tạo ra sự bất nhất trong hình ảnh và thông điệp truyền thông.',
                'Điều này khiến trải nghiệm khách hàng bị đứt gãy, đồng thời làm lãng phí nghiêm trọng nguồn lực đầu tư của doanh nghiệp.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>

        {/* Sự ra đời */}
        <FadeUp delay={0.2}>
          <div className="h-full p-8 rounded-3xl border border-white/20 bg-white/5">
            <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-4">Sự ra đời của Monri Agency</p>
            <p className="text-white/70 leading-relaxed mb-6 text-sm">
              Monri Agency được thành lập nhằm tái cấu trúc hoạt động Marketing theo hướng tích hợp toàn diện. Chúng tôi vận hành dựa trên tư duy:
            </p>
            <blockquote className="border-l-2 border-white/30 pl-4 italic text-white/80 mb-6 text-sm leading-relaxed">
              "Tiếp thị hiệu quả phải là một hệ thống nhất quán."
            </blockquote>
            <p className="text-white/60 text-sm leading-relaxed">
              Mọi điểm chạm thương hiệu – nghiên cứu thị trường, phát triển câu chuyện thương hiệu, thiết kế bộ nhận diện, bao bì sản phẩm, vận hành website và phân phối quảng cáo đa kênh – đều được quản trị tập trung, phối hợp nhịp nhàng dưới một quy chuẩn thống nhất.
            </p>
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════
   SECTION 3 – THE MONRI WAY
══════════════════════════════════════════════════════════════════ */
const pillars = [
  {
    emoji: '🎨',
    en: 'Aesthetics that Sell',
    title: 'Mỹ thuật ứng dụng thực chiến',
    body: 'Tại Monri, mỹ thuật thương mại là công cụ định hình hành vi khách hàng và gia tăng giá trị thương hiệu. Mỗi đường nét, màu sắc của Logo, bao bì sản phẩm hay giao diện website đều được nghiên cứu kỹ lưỡng nhằm tối ưu hóa quyết định mua sắm của người tiêu dùng, đồng thời củng cố định vị cao cấp cho thương hiệu trên thị trường.',
    tag: 'Thiết kế tạo chuyển đổi',
    icon: Palette,
  },
  {
    emoji: '⚙️',
    en: 'Omni-Consistency',
    title: 'Tính hệ thống nhất quán',
    body: 'Hiệu quả tiếp thị bền vững đòi hỏi sự nhất quán trên mọi phương diện truyền thông. Từ bao bì sản phẩm trưng bày trên kệ hàng, giao diện website tốc độ cao cho đến các tuyến nội dung tương tác trên Facebook, TikTok đều phải truyền tải chung một thông điệp cốt lõi và hệ thống nhận diện.',
    tag: 'Nhất quán mọi điểm chạm',
    icon: Link2,
  },
  {
    emoji: '📊',
    en: 'Managed Service — DIFM',
    title: 'Dịch vụ quản trị trọn gói',
    body: 'Thấu hiểu những thách thức về mặt nhân sự và năng lực chuyên môn của doanh nghiệp SME, đội ngũ chuyên gia của Monri trực tiếp chịu trách nhiệm thực thi toàn diện các hạng mục. Chúng tôi cam kết hiệu suất bằng các chỉ số đo lường cụ thể (KPI), giúp doanh nghiệp giải phóng nguồn lực vận hành.',
    tag: 'Quản trị bằng KPI',
    icon: BarChart2,
  },
];

const MonriWay = () => (
  <section id="monri-way" className="py-24 bg-black">
    <div className="max-w-7xl mx-auto px-6">
      <FadeUp>
        <Label text="Trụ cột chiến lược" />
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
          The Monri Way
        </h2>
        <p className="text-white/50 text-lg mb-16 max-w-2xl">
          Mô hình hoạt động của Monri được định hình bởi ba trụ cột cốt lõi.
        </p>
      </FadeUp>

      {/* Visual pillar diagram */}
      <FadeUp delay={0.1}>
        <div className="mb-12 p-6 md:p-8 rounded-3xl border border-white/10 bg-neutral-950 overflow-x-auto">
          <div className="flex flex-col md:flex-row items-stretch gap-0 min-w-[560px]">
            {/* Root */}
            <div className="flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-black font-black text-sm uppercase tracking-wider shrink-0">
              THE MONRI WAY
            </div>
            {/* Connector */}
            <div className="hidden md:flex items-center">
              <div className="w-8 h-px bg-white/30" />
            </div>
            <div className="flex md:flex-row flex-col flex-1 gap-3">
              {pillars.map(({ emoji, tag, icon: Icon }, i) => (
                <div key={i} className="flex-1 flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-black">
                  <span className="text-xl">{emoji}</span>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest">{tag}</p>
                    <Icon className="w-4 h-4 text-white/50 mt-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Pillar cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map(({ icon: Icon, en, title, body, tag }, i) => (
          <FadeUp key={i} delay={i * 0.12}>
            <div className="group h-full p-8 rounded-3xl border border-white/10 bg-neutral-950 hover:border-white/25 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all">
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-xs text-white/30 uppercase tracking-widest mb-2 font-semibold">{en}</p>
              <h3 className="text-xl font-black uppercase mb-4 leading-tight">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════
   SECTION 4 – ĐỘI NGŨ
══════════════════════════════════════════════════════════════════ */
const Team = () => (
  <section className="py-24 bg-neutral-950 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <FadeUp>
        <Label text="Đội ngũ thực thi chuyên chế" />
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-16">
          Con Người Đứng Sau<br />
          <span className="text-white/50">Hệ Thống</span>
        </h2>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* CD profile */}
        <FadeUp delay={0.1}>
          <div className="p-8 rounded-3xl border border-white/20 bg-white/5">
            <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-4">Giám đốc Sáng tạo</p>
            <h3 className="text-2xl font-black uppercase mb-1">Vũ Thị Ngọc Hương</h3>
            <p className="text-sm text-white/40 mb-6">
              Tốt nghiệp Khoa Đồ họa – Đại học Mỹ thuật Công nghiệp Hà Nội
              <span className="block text-white/25 text-xs mt-1">(cái nôi đào tạo nhân sự thiết kế mỹ thuật ứng dụng uy tín hàng đầu Việt Nam)</span>
            </p>
            <blockquote className="border-l-2 border-white/30 pl-4 italic text-white/70 text-sm leading-relaxed">
              "Mỹ thuật thương mại vượt ra ngoài khái niệm thẩm mỹ đơn thuần; đây là ngôn ngữ thị giác thiết lập mối liên kết sâu sắc với tiềm thức của khách hàng. Một thiết kế chuẩn xác phải là thiết kế kiến tạo nên giá trị thặng dư thực tế cho sản phẩm."
            </blockquote>
          </div>
        </FadeUp>

        {/* Two departments */}
        <FadeUp delay={0.2}>
          <div className="h-full flex flex-col gap-4">
            <p className="text-sm text-white/50 leading-relaxed px-1">
              Monri quy tụ đội ngũ nhân sự bổ khuyết toàn diện cho nhau ở cả hai khía cạnh: sáng tạo nghệ thuật và khoa học dữ liệu.
            </p>
            {[
              {
                icon: PenTool,
                dept: 'Bộ phận Sáng tạo & Nghệ thuật',
                desc: 'Nhà thiết kế đồ họa chuyên nghiệp và chuyên viên biên soạn nội dung, chịu trách nhiệm thổi hồn vào câu chuyện thương hiệu và định hình visual nhất quán.',
              },
              {
                icon: Code2,
                dept: 'Bộ phận Kỹ thuật & Tối ưu số',
                desc: 'Kỹ sư tối ưu website, chuyên gia SEO và chuyên viên kỹ thuật quảng cáo, bám sát các chỉ số dữ liệu để đảm bảo hệ thống vận hành với hiệu suất cao nhất.',
              },
            ].map(({ icon: Icon, dept, desc }, i) => (
              <div key={i} className="flex-1 flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-black">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-white/60" />
                </div>
                <div>
                  <p className="font-bold text-sm uppercase tracking-wide mb-1">{dept}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════
   SECTION 5 – GIÁ TRỊ CỐT LÕI
══════════════════════════════════════════════════════════════════ */
const coreValues = [
  {
    icon: Search,
    title: 'Sáng tạo dựa trên nghiên cứu',
    body: 'Mọi giải pháp thiết kế và nội dung của Monri đều bắt đầu từ dữ liệu thị trường và hành vi khách hàng, loại bỏ hoàn toàn yếu tố cảm tính.',
  },
  {
    icon: BarChart2,
    title: 'Minh bạch số liệu',
    body: 'Chúng tôi cung cấp hệ thống báo cáo KPI thời gian thực (Real-time Dashboard), giúp doanh nghiệp nắm rõ hiệu suất và tính kinh tế của từng đồng ngân sách đầu tư.',
  },
  {
    icon: Clock,
    title: 'Kỷ luật SLA phản hồi 2 giờ',
    body: 'Cam kết phản hồi và xử lý nhanh chóng mọi yêu cầu kỹ thuật cũng như thiết kế theo đúng quy trình nghiệp vụ chuyên nghiệp.',
  },
  {
    icon: Handshake,
    title: 'Đồng hành chiến lược',
    body: 'Đóng vai trò như một phòng Marketing thuê ngoài hoạt động bền bỉ, gắn liền sự tăng trưởng của thương hiệu khách hàng với sự phát triển của Monri.',
  },
];

const CoreValues = () => (
  <section className="py-24 bg-black">
    <div className="max-w-7xl mx-auto px-6">
      <FadeUp>
        <Label text="Giá trị cốt lõi – Cam kết vững chắc" />
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-16">
          Nền Tảng Chúng Tôi<br />
          <span className="text-white/50">Xây Dựng Trên Đó</span>
        </h2>
      </FadeUp>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {coreValues.map(({ icon: Icon, title, body }, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div className="group h-full p-7 rounded-3xl border border-white/10 bg-neutral-950 hover:border-white/25 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-white group-hover:text-black transition-all">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-black uppercase text-sm mb-3 leading-tight">{title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════
   SECTION 6 – BOTTOM CTA
══════════════════════════════════════════════════════════════════ */
const AboutCTA = () => (
  <section className="py-24 bg-neutral-950 border-t border-white/5">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <FadeUp>
        <blockquote className="text-xl md:text-2xl text-white/70 italic leading-relaxed mb-10 relative">
          <span className="absolute -top-4 -left-2 text-6xl text-white/5 font-serif leading-none select-none">"</span>
          Chúng tôi tập trung vào việc thiết lập một nền tảng tiếp thị bền vững và hệ thống vận hành chuẩn chỉnh, tạo đà cho sự phát triển lâu dài của doanh nghiệp.
          <span className="absolute -bottom-6 -right-2 text-6xl text-white/5 font-serif leading-none select-none">"</span>
        </blockquote>
      </FadeUp>

      <FadeUp delay={0.1}>
        <p className="text-white/50 mb-10 text-lg">
          Doanh nghiệp đã sẵn sàng dịch chuyển sang mô hình{' '}
          <span className="text-white font-semibold">Marketing Hệ thống</span> chuyên nghiệp?
        </p>
      </FadeUp>

      <FadeUp delay={0.18}>
        <div className="flex justify-center mb-8">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black text-sm uppercase tracking-wider rounded-full hover:bg-white/90 transition-all"
          >
            Đăng Ký Tư Vấn Sâu & Định Hình Giải Pháp Tiếp Thị Toàn Diện
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </FadeUp>

      <FadeUp delay={0.24}>
        <p className="text-sm text-white/35 leading-relaxed max-w-xl mx-auto">
          Monri sẽ liên hệ thực hiện khảo sát hiện trạng thương hiệu và đề xuất giải pháp phù hợp với quy mô doanh nghiệp.
        </p>
      </FadeUp>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════
   PAGE ASSEMBLY
══════════════════════════════════════════════════════════════════ */
const About = () => (
  <div className="bg-black">
    <SEO
      title="Giới thiệu | Monri Agency – Marketing Hệ thống cho SME"
      description="Monri Agency tái định nghĩa phương thức tiếp thị SME qua sự giao thoa giữa Mỹ thuật ứng dụng và Khoa học dữ liệu."
    />
    <HeroAbout />
    <Mission />
    <MonriWay />
    <Team />
    <CoreValues />
    <AboutCTA />
    <Contact />
  </div>
);

export default About;
