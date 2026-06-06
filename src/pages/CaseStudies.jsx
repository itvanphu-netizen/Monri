import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ChevronDown,
  TrendingUp, Package, Globe, BarChart2,
  Quote, CheckCircle,
} from 'lucide-react';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

/* ─── helpers ──────────────────────────────────────────────────── */
const FadeUp = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.55, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const Label = ({ text }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="h-px w-12 bg-white/30" />
    <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">{text}</span>
  </div>
);

/* ══════════════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════════════ */
const FILTERS = [
  { id: 'all',    label: 'Tất cả dự án' },
  { id: 'combo1', label: 'Combo 1: Xây dựng thương hiệu từ đầu' },
  { id: 'combo2', label: 'Combo 2: Tái định vị thương hiệu' },
  { id: 'combo3', label: 'Combo 3: Tạo phễu chuyển đổi đa kênh' },
];

const CASES = [
  {
    id: 'the-coi',
    filter: 'combo1',
    index: '01',
    brand: 'The Cội',
    category: 'Trà mộc – Nông sản hữu cơ cao cấp',
    combo: 'Combo Start-up Engine',
    comboColor: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-300/80',
    tagColor: 'bg-emerald-500/10 text-emerald-300/70 border-emerald-500/20',
    context:
      '"The Cội" sở hữu nguồn nguyên liệu trà cổ thụ chất lượng cao tại vùng cao phía Bắc, tuy nhiên thương hiệu hoàn toàn chưa có danh tiếng, chưa có hệ thống nhận diện chuyên nghiệp và chưa tiếp cận được tệp khách hàng trung lưu tại đô thị.',
    challenge:
      'Xây dựng lòng tin với khách hàng phân khúc cao cấp đối với một thương hiệu hoàn toàn mới trên nền tảng số trong vòng 45 ngày.',
    solutions: [
      {
        icon: BarChart2,
        step: 'Nghiên cứu thị trường',
        desc: 'Xác định tệp khách hàng mục tiêu là nhóm người dùng hiện đại, quan tâm sâu sắc đến sức khỏe tự nhiên và tính bền vững của môi trường.',
      },
      {
        icon: Package,
        step: 'Định vị & Thiết kế cốt lõi',
        desc: 'Viết câu chuyện thương hiệu xoay quanh giá trị bản địa nguyên bản. Thiết kế Logo và bao bì hộp gỗ mộc mạc nhưng tinh tế, phong cách mỹ thuật ứng dụng tối giản.',
      },
      {
        icon: Globe,
        step: 'Hạ tầng số',
        desc: 'Website tốc độ tải < 0.8 giây, tích hợp đặt hàng nhanh. Đồng bộ hóa giao diện Fanpage, TikTok.',
      },
    ],
    metrics: [
      { value: '45', unit: 'ngày', label: 'Hoàn thiện toàn bộ hệ thống' },
      { value: '120K', unit: '', label: 'Lượt tiếp cận tự nhiên tháng 1' },
      { value: '1.500', unit: '+', label: 'Đơn hàng đầu tiên' },
    ],
  },
  {
    id: 'ecoshield',
    filter: 'combo2',
    index: '02',
    brand: 'EcoShield',
    category: 'Sơn gỗ công nghiệp cao cấp',
    combo: 'Combo Re-branding Shift',
    comboColor: 'border-blue-500/30 bg-blue-500/5 text-blue-300/80',
    tagColor: 'bg-blue-500/10 text-blue-300/70 border-blue-500/20',
    context:
      'EcoShield là thương hiệu sơn phủ công nghiệp có chất lượng vượt trội tại Việt Nam, tuy nhiên hệ thống bao bì vỏ lon đã lỗi thời (mẫu 2015), website bị lỗi hiển thị di động và khó cạnh tranh hình ảnh với thương hiệu ngoại nhập trên kệ hàng.',
    challenge:
      'Thay đổi toàn diện diện mạo thương hiệu để thâm nhập phân khúc nhà thầu xây dựng cao cấp và xuất khẩu Đông Nam Á mà không làm mất nhóm đại lý truyền thống.',
    solutions: [
      {
        icon: BarChart2,
        step: 'Brand Audit (Đánh giá hiện trạng)',
        desc: 'Khảo sát 200 đại lý phân phối để đo lường mức độ hài lòng. Xác định điểm yếu cốt lõi nằm ở sự mờ nhạt của thiết kế vỏ lon trên kệ.',
      },
      {
        icon: Package,
        step: 'Tái thiết kế hệ thống Visual',
        desc: 'Thiết kế lại Logo theo hướng hiện đại, dứt khoát. Đồng bộ bao bì vỏ lon kim loại tông màu tối giản, sang trọng, nổi bật đặc tính "Bảo vệ xanh".',
      },
      {
        icon: Globe,
        step: 'Tái cấu trúc Website',
        desc: 'Lập trình lại toàn bộ chuẩn SEO, tích hợp tính năng tra cứu bảng màu trực tuyến mượt mà cho kiến trúc sư và nhà thầu.',
      },
    ],
    metrics: [
      { value: '+35%', unit: '', label: 'Lượt yêu cầu báo giá qua Website' },
      { value: '2', unit: ' chuỗi', label: 'Dự án nghỉ dưỡng cao cấp ký kết' },
      { value: '100%', unit: '', label: 'Đại lý phản hồi tích cực bao bì mới' },
    ],
  },
  {
    id: 'nature-skin',
    filter: 'combo3',
    index: '03',
    brand: 'Naturé Skin',
    category: 'Dược mỹ phẩm thiên nhiên',
    combo: 'Combo Conversion Funnel',
    comboColor: 'border-purple-500/30 bg-purple-500/5 text-purple-300/80',
    tagColor: 'bg-purple-500/10 text-purple-300/70 border-purple-500/20',
    context:
      'Naturé Skin sở hữu dải sản phẩm chăm sóc da hữu cơ chất lượng cao, tuy nhiên chi phí quảng cáo Facebook Ads tăng quá cao, tỷ lệ chốt đơn thấp, video TikTok không có lượt xem và không đo lường được hiệu quả ngân sách tiếp thị.',
    challenge:
      'Giảm chi phí trên mỗi đơn hàng thành công và thiết lập hệ thống kiểm soát KPI minh bạch cho doanh nghiệp trong vòng 60 ngày.',
    solutions: [
      {
        icon: Globe,
        step: 'Landing Page chuyên biệt',
        desc: 'Thiết kế lại 3 Landing Page cho 3 dòng sản phẩm chủ lực, tối ưu trải nghiệm, bố cục nỗi đau – giải pháp khoa học, tích hợp form mua nhanh.',
      },
      {
        icon: TrendingUp,
        step: 'Vận hành TikTok & Fanpage',
        desc: 'Biên soạn kịch bản video ngắn TikTok, trực tiếp chỉ đạo sản xuất và hậu kỳ chuẩn xu hướng. Thiết kế lại layout nhận diện ảnh bài đăng Facebook.',
      },
      {
        icon: BarChart2,
        step: 'Setup hệ thống đo lường KPI',
        desc: 'Tích hợp GA4, Facebook Pixel, TikTok Pixel lên Landing Page. Toàn bộ dữ liệu chuyển đổi về Dashboard thời gian thực để chủ doanh nghiệp theo dõi.',
      },
    ],
    metrics: [
      { value: '0.8%→2.6%', unit: '', label: 'Tỷ lệ chuyển đổi Landing Page (CRO)' },
      { value: '−42%', unit: '', label: 'Chi phí mỗi Lead (CPL)' },
      { value: '×2.1', unit: '', label: 'Doanh thu trực tuyến sau 2 tháng' },
    ],
  },
];

const PORTFOLIO_GROUPS = [
  {
    label: 'Thiết kế Bao bì & Nhãn mác sản phẩm',
    note: 'F&B · Mỹ phẩm · Dược phẩm',
    cols: 3,
    placeholders: ['Trà mộc The Cội – Hộp gỗ tối giản', 'Naturé Skin – Skincare hữu cơ', 'EcoShield – Vỏ lon sơn cao cấp'],
  },
  {
    label: 'Thiết kế Logo & Nhận diện thương hiệu',
    note: 'Brand Identity · Brand Guideline',
    cols: 3,
    placeholders: ['Logo The Cội – Mỹ thuật bản địa', 'Logo EcoShield – Lá chắn bền vững', 'Brand Guideline Naturé Skin'],
  },
  {
    label: 'Thiết kế Giao diện Website & Landing Page',
    note: 'UI/UX · Tối ưu CRO',
    cols: 3,
    placeholders: ['Website The Cội – < 0.8s load', 'Website EcoShield – Tra bảng màu', 'Landing Page Naturé Skin × 3'],
  },
];

const TESTIMONIALS = [
  {
    quote:
      'Điều tôi đánh giá cao nhất ở Monri không chỉ là tính thẩm mỹ vượt trội trong từng thiết kế bao bì, mà là sự đồng bộ tuyệt đối từ bao bì sản phẩm cho đến nội dung Fanpage và Website. Mọi thứ vận hành khớp nhau như một cỗ máy, giúp chúng tôi tiết kiệm rất nhiều thời gian quản lý.',
    name: 'Ông Trần Nam Sơn',
    role: 'CEO – Thương hiệu Trà mộc The Cội',
    brand: 'The Cội',
  },
  {
    quote:
      'Khi bàn giao dự án, Monri cung cấp đầy đủ 100% mã nguồn website, toàn bộ file thiết kế gốc cùng các kịch bản nội dung đúng cam kết. Tính minh bạch trong chi phí quảng cáo và hệ thống Dashboard đo lường của họ giúp tôi yên tâm tuyệt đối khi đầu tư ngân sách Marketing.',
    name: 'Bà Nguyễn Minh Châu',
    role: 'Đồng sáng lập – Dược mỹ phẩm Naturé Skin',
    brand: 'Naturé Skin',
  },
];

/* ══════════════════════════════════════════════════════════════════
   SECTION 1 – HERO
══════════════════════════════════════════════════════════════════ */
const HeroCaseStudies = ({ active, setActive }) => (
  <header className="relative min-h-[72vh] bg-black flex items-end overflow-hidden pt-28 pb-16">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.04)_0%,_transparent_60%)] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="max-w-7xl mx-auto px-6 w-full">
      <FadeUp>
        <Label text="Dự án đã triển khai — Case Studies" />
      </FadeUp>

      <FadeUp delay={0.08}>
        <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tight mb-8 max-w-5xl">
          Minh Chứng Hiệu Quả<br className="hidden md:block" />
          Bằng{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
            Dữ Liệu Thực Tế
          </span>{' '}
          Và Ấn Phẩm<br className="hidden md:block" />
          Mỹ Thuật Độc Bản.
        </h1>
      </FadeUp>

      <FadeUp delay={0.14}>
        <p className="text-base md:text-lg text-white/60 mb-4 max-w-3xl leading-relaxed font-light">
          Chúng tôi tin rằng giải pháp Marketing tốt nhất phải được định lượng bằng các chỉ số tăng trưởng và mức độ nhất quán của thương hiệu trên thị trường. Khám phá các dự án thực tế do Monri Agency thiết lập, vận hành hệ thống từ gốc rễ.
        </p>
      </FadeUp>

      <FadeUp delay={0.19}>
        <p className="text-sm text-white/35 italic mb-12 border-l-2 border-white/20 pl-4 max-w-xl">
          Ý tưởng sáng tạo bắt đầu từ nghiên cứu, kết quả đo lường bằng con số.
        </p>
      </FadeUp>

      {/* Filter bar */}
      <FadeUp delay={0.24}>
        <div className="flex flex-wrap gap-3">
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                active === id
                  ? 'bg-white text-black border-white'
                  : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white/80'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </FadeUp>
    </div>
  </header>
);

/* ══════════════════════════════════════════════════════════════════
   CASE STUDY CARD
══════════════════════════════════════════════════════════════════ */
const CaseCard = ({ cs }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.45 }}
      className={`rounded-3xl border overflow-hidden ${cs.comboColor}`}
    >
      {/* Header row */}
      <div
        className="p-8 cursor-pointer select-none"
        onClick={() => setOpen(v => !v)}
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          {/* Left */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl font-black text-white/5 leading-none">{cs.index}</span>
              <div>
                <h2 className="text-2xl md:text-3xl font-black uppercase">{cs.brand}</h2>
                <p className="text-sm text-white/40 mt-0.5">{cs.category}</p>
              </div>
            </div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${cs.tagColor}`}>
              {cs.combo}
            </span>
          </div>

          {/* Metrics preview */}
          <div className="flex gap-6 md:gap-10 items-start flex-wrap">
            {cs.metrics.map(({ value, unit, label }, i) => (
              <div key={i} className="text-center md:text-right">
                <div className="text-2xl md:text-3xl font-black text-white/90 leading-none">
                  {value}<span className="text-lg">{unit}</span>
                </div>
                <div className="text-xs text-white/35 uppercase tracking-wide mt-1 max-w-[110px]">{label}</div>
              </div>
            ))}
          </div>

          {/* Toggle icon */}
          <ChevronDown
            className={`w-5 h-5 text-white/40 shrink-0 mt-1 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      {/* Expandable detail */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 border-t border-white/10 pt-8 space-y-8">
              {/* Context + Challenge */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-black/30 border border-white/10">
                  <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-3">Bối cảnh dự án</p>
                  <p className="text-sm text-white/65 leading-relaxed">{cs.context}</p>
                </div>
                <div className="p-6 rounded-2xl bg-black/30 border border-white/10">
                  <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-3">Thách thức</p>
                  <p className="text-sm text-white/65 leading-relaxed">{cs.challenge}</p>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-4">Giải pháp thực thi từ Monri</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {cs.solutions.map(({ icon: Icon, step, desc }, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-black/30 border border-white/10">
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-white/60" />
                      </div>
                      <div>
                        <p className="font-bold text-sm uppercase mb-1">{step}</p>
                        <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics detailed */}
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-4">Kết quả tăng trưởng</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {cs.metrics.map(({ value, unit, label }, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <CheckCircle className="w-4 h-4 text-green-400/70" />
                      </div>
                      <div className="text-3xl font-black text-white/90">{value}<span className="text-lg">{unit}</span></div>
                      <div className="text-xs text-white/40 uppercase tracking-wide mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex justify-end">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-sm font-bold text-white/70 hover:bg-white hover:text-black transition-all"
                >
                  Thảo luận dự án tương tự
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ══════════════════════════════════════════════════════════════════
   SECTION 2 – CASE STUDIES LIST
══════════════════════════════════════════════════════════════════ */
const CaseList = ({ activeFilter }) => {
  const visible = CASES.filter(c => activeFilter === 'all' || c.filter === activeFilter);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatePresence mode="popLayout">
          <motion.div layout className="space-y-6">
            {visible.map(cs => (
              <CaseCard key={cs.id} cs={cs} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════
   SECTION 3 – VISUAL PORTFOLIO
══════════════════════════════════════════════════════════════════ */
const Portfolio = () => (
  <section className="py-24 bg-neutral-950 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <FadeUp>
        <Label text="Kho thư viện ấn phẩm mỹ thuật thương mại" />
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
          Visual Portfolio
        </h2>
        <p className="text-white/50 text-lg mb-16 max-w-2xl">
          Sản phẩm thiết kế đồ họa, bao bì và giao diện website nổi bật được phát triển bởi đội ngũ chuyên môn tốt nghiệp Đại học Mỹ thuật Công nghiệp.
        </p>
      </FadeUp>

      <div className="space-y-16">
        {PORTFOLIO_GROUPS.map(({ label, note, cols, placeholders }, gi) => (
          <FadeUp key={gi} delay={gi * 0.1}>
            <div className="mb-6">
              <h3 className="text-lg font-black uppercase mb-1">{label}</h3>
              <p className="text-xs text-white/35 uppercase tracking-widest">{note}</p>
            </div>
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols} gap-4`}>
              {placeholders.map((ph, i) => (
                <div
                  key={i}
                  className="group relative h-52 rounded-2xl border border-white/10 bg-neutral-900 overflow-hidden flex items-end p-5 hover:border-white/25 transition-all"
                >
                  {/* Subtle gradient placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-black text-white/5 uppercase tracking-tighter text-center px-4">{ph.split('–')[0]}</span>
                  </div>
                  <p className="relative text-xs text-white/40 font-semibold uppercase tracking-wider z-10">{ph}</p>
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowRight className="w-3 h-3 text-white/50" />
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════
   SECTION 4 – TESTIMONIALS
══════════════════════════════════════════════════════════════════ */
const Testimonials = () => (
  <section className="py-24 bg-black">
    <div className="max-w-7xl mx-auto px-6">
      <FadeUp>
        <Label text="Phản hồi thực tế từ đối tác doanh nghiệp" />
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
          Khách Hàng Nói Gì
        </h2>
        <p className="text-white/50 text-lg mb-16 max-w-2xl">
          Chúng tôi coi sự phát triển bền vững của khách hàng là thước đo giá trị dịch vụ.
        </p>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-8">
        {TESTIMONIALS.map(({ quote, name, role, brand }, i) => (
          <FadeUp key={i} delay={i * 0.12}>
            <div className="h-full p-8 rounded-3xl border border-white/10 bg-neutral-950 hover:border-white/20 transition-all flex flex-col">
              <Quote className="w-8 h-8 text-white/10 mb-6" />
              <p className="text-white/70 text-sm leading-relaxed italic flex-1 mb-8">
                "{quote}"
              </p>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="font-black text-sm uppercase">{name}</p>
                  <p className="text-xs text-white/40 mt-0.5">{role}</p>
                </div>
                <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/40 font-semibold">
                  {brand}
                </span>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════
   SECTION 5 – BOTTOM CTA
══════════════════════════════════════════════════════════════════ */
const CaseStudiesCTA = () => (
  <section className="py-24 bg-neutral-950 border-t border-white/5">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <FadeUp>
        <blockquote className="text-xl md:text-2xl text-white/70 italic leading-relaxed mb-10 relative">
          <span className="absolute -top-4 -left-2 text-6xl text-white/5 font-serif leading-none select-none">"</span>
          Mỗi thương hiệu đều có một câu chuyện và giá trị cốt lõi riêng biệt. Hãy để Monri Agency giúp bạn chuyển hóa những giá trị đó thành ngôn ngữ mỹ thuật thương mại đẳng cấp và một hệ thống tiếp thị số đồng bộ nhất quán.
          <span className="absolute -bottom-6 -right-2 text-6xl text-white/5 font-serif leading-none select-none">"</span>
        </blockquote>
      </FadeUp>

      <FadeUp delay={0.1}>
        <p className="text-white/50 mb-10 text-lg">
          Doanh nghiệp đã sẵn sàng trở thành{' '}
          <span className="text-white font-semibold">Case Study thành công tiếp theo</span>?
        </p>
      </FadeUp>

      <FadeUp delay={0.18}>
        <div className="flex justify-center mb-6">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black text-sm uppercase tracking-wider rounded-full hover:bg-white/90 transition-all"
          >
            Liên Hệ Để Thảo Luận Dự Án Với Chuyên Gia Monri
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </FadeUp>

      <FadeUp delay={0.24}>
        <p className="text-sm text-white/30 leading-relaxed max-w-xl mx-auto">
          Monri cam kết mang lại các giải pháp thiết kế độc bản, tối ưu hóa theo đặc thù ngành hàng của doanh nghiệp.
        </p>
      </FadeUp>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════
   PAGE ASSEMBLY
══════════════════════════════════════════════════════════════════ */
const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="bg-black">
      <SEO
        title="Dự án đã triển khai | Monri Agency – Case Studies thực chiến"
        description="Khám phá các dự án thực tế Monri Agency đã thiết lập và vận hành: The Cội, EcoShield, Naturé Skin – minh chứng hiệu quả bằng dữ liệu thực tế."
      />
      <HeroCaseStudies active={activeFilter} setActive={setActiveFilter} />
      <CaseList activeFilter={activeFilter} />
      <Portfolio />
      <Testimonials />
      <CaseStudiesCTA />
      <Contact />
    </div>
  );
};

export default CaseStudies;
