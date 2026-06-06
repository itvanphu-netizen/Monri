import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ChevronDown,
  BarChart2, Palette, Globe, TrendingUp,
  Package, Video, Megaphone, Search,
  CheckCircle, Phone,
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
const COMBOS = [
  {
    id: 'combo1',
    index: '01',
    name: 'MONRI START-UP ENGINE',
    subtitle: 'Xây Dựng Hệ Thống Từ Đầu',
    fit: 'Doanh nghiệp mới thành lập, thương hiệu mới ra mắt hoặc bắt đầu số hóa mô hình kinh doanh.',
    goal: 'Thiết lập sự hiện diện chuyên nghiệp, đồng bộ trên mọi điểm chạm của khách hàng, tạo bệ phóng truyền thông vững chắc ngay từ giai đoạn khởi đầu.',
    accent: 'border-emerald-500/25 bg-emerald-500/5',
    tagColor: 'bg-emerald-500/10 text-emerald-300/70 border-emerald-500/20',
    groups: [
      {
        icon: BarChart2,
        name: 'Nghiên cứu & Chiến lược',
        items: [
          'Khảo sát đối thủ cạnh tranh trực tiếp',
          'Phân tích tệp khách hàng mục tiêu',
          'Lập Kế hoạch Marketing ra mắt sản phẩm trong 30 ngày đầu tiên',
        ],
      },
      {
        icon: Palette,
        name: 'Thương hiệu & Thiết kế',
        items: [
          'Thiết kế Logo, Slogan và Brand Guideline',
          'Xây dựng Câu chuyện thương hiệu truyền cảm hứng',
        ],
      },
      {
        icon: Globe,
        name: 'Digital Foundation',
        items: [
          'Thiết lập và tối ưu SEO Profile các kênh Social cốt lõi (Facebook, TikTok, YouTube)',
          'Website giới thiệu độc bản, tải trang < 1s, chuẩn mobile',
        ],
      },
      {
        icon: Megaphone,
        name: 'Kích hoạt truyền thông',
        items: [
          'Biên soạn và đăng tải 12 bài viết nền tảng đầu tiên trên Fanpage',
          'Thiết lập chiến dịch quảng cáo ra mắt cơ bản trên Facebook/TikTok',
        ],
      },
    ],
  },
  {
    id: 'combo2',
    index: '02',
    name: 'MONRI RE-BRANDING SHIFT',
    subtitle: 'Đánh Giá & Tái Định Vị Thương Hiệu',
    fit: 'Doanh nghiệp lâu năm cần làm mới hình ảnh lỗi thời, chuyển dịch sang phân khúc cao cấp hơn hoặc tái định vị vị thế cạnh tranh.',
    goal: 'Khảo sát toàn diện lỗ hổng tiếp thị cũ, nâng tầm giá trị thẩm mỹ nhận diện thương hiệu để tiếp cận tệp khách hàng mục tiêu hiệu quả hơn.',
    accent: 'border-blue-500/25 bg-blue-500/5',
    tagColor: 'bg-blue-500/10 text-blue-300/70 border-blue-500/20',
    groups: [
      {
        icon: Search,
        name: 'Brand Audit (Đánh giá hiện trạng)',
        items: [
          'Đo lường hiệu quả các kênh truyền thông cũ',
          'Khảo sát mức độ nhận diện thương hiệu trong mắt khách hàng',
        ],
      },
      {
        icon: BarChart2,
        name: 'Định vị & Tái cấu trúc',
        items: [
          'Xây dựng lại định vị thương hiệu mới',
          'Biên soạn Câu chuyện thương hiệu phù hợp tầm nhìn mới',
        ],
      },
      {
        icon: Palette,
        name: 'Tái thiết kế hệ thống Visual',
        items: [
          'Thiết kế Logo mới, đồng bộ hệ thống nhận diện văn phòng',
          'Bộ ấn phẩm Marketing thực chiến: Sales kit, Banner, Poster',
        ],
      },
      {
        icon: Package,
        name: 'Thiết kế Bao bì chuyên sâu + Đồng bộ nền tảng',
        items: [
          'Bao bì, nhãn mác sản phẩm theo ngôn ngữ mỹ thuật thương mại hiện đại',
          'Website tối giản siêu nhẹ; đồng bộ Cover/Avatar trên mọi kênh Social',
        ],
      },
    ],
  },
  {
    id: 'combo3',
    index: '03',
    name: 'MONRI CONVERSION FUNNEL',
    subtitle: 'Tạo Phễu Chuyển Đổi Thực Chiến',
    fit: 'Doanh nghiệp đã có sản phẩm tốt, website và fanpage nhưng tỷ lệ chuyển đổi thấp, quảng cáo không hiệu quả, phễu bán hàng bị tắc nghẽn.',
    goal: 'Tối ưu hóa tỷ lệ chuyển đổi (CRO), thiết lập hệ thống phễu đa kênh bền vững, vận hành nội dung thu hút đơn hàng thực tế.',
    accent: 'border-purple-500/25 bg-purple-500/5',
    tagColor: 'bg-purple-500/10 text-purple-300/70 border-purple-500/20',
    groups: [
      {
        icon: BarChart2,
        name: 'Hệ thống quản lý KPI',
        items: [
          'Dashboard theo dõi KPI Marketing thời gian thực (Real-time)',
          'Kiểm soát ngân sách Ads và chi phí Lead (CPL)',
        ],
      },
      {
        icon: Globe,
        name: 'Tối ưu hóa Landing Page (CRO)',
        items: [
          'Landing Page chuyên sâu tối ưu điểm chạm tâm lý hành vi',
          'Tích hợp form đăng ký tự động đổ dữ liệu về CRM/Google Sheets',
        ],
      },
      {
        icon: Video,
        name: 'Content Social & TikTok',
        items: [
          '15 bài viết chuyển đổi/tháng trên Fanpage (bán hàng, nỗi đau, feedback)',
          '8 kịch bản + hậu kỳ video ngắn TikTok/tháng chuẩn xu hướng',
        ],
      },
      {
        icon: TrendingUp,
        name: 'Chiến dịch Ads đa kênh',
        items: [
          'Thiết lập & tối ưu Facebook Ads, Google Ads, TikTok Ads',
          'Cài đặt hệ thống Retargeting bám đuổi khách hàng',
        ],
      },
    ],
  },
];

const ALACARTE_TECHNICAL = [
  { stt: '01', name: 'Thiết kế hình ảnh bài đăng Social', desc: 'Thiết kế layout đồ họa độc quyền cho bài viết (Facebook, Instagram) bởi designer mỹ thuật ứng dụng bài bản.', price: '300.000đ / ảnh' },
  { stt: '02', name: 'Viết bài viết Content Social', desc: 'Lên ý tưởng nội dung, viết bài bán hàng/chia sẻ giá trị chuẩn tệp khách hàng mục tiêu.', price: '250.000đ / bài' },
  { stt: '03', name: 'Thiết kế Banner / Cover hệ thống', desc: 'Thiết kế trọn bộ ảnh đại diện, ảnh bìa đồng bộ nhận diện cho Fanpage Facebook, TikTok, YouTube.', price: '800.000đ / bộ' },
  { stt: '04', name: 'Khởi tạo & Chuẩn hóa kênh Social', desc: 'Tạo kênh, tối ưu SEO Profile mô tả, cấu hình danh mục sản phẩm, cài đặt tin nhắn tự động ban đầu.', price: '2.500.000đ / hệ thống' },
  { stt: '05', name: 'Xây dựng Website chuyên nghiệp', desc: 'Thiết kế Web độc bản trên nền tảng HTML5/Wordpress siêu nhẹ, tối ưu bảo mật, tốc độ load < 1 giây.', price: 'Từ 10.000.000đ / web' },
  { stt: '06', name: 'Tối ưu tốc độ Web & Lỗi Responsive', desc: 'Sửa lỗi vỡ khung trên di động, tối ưu điểm xanh Google PageSpeed, tối ưu Core Web Vitals.', price: '2.500.000đ / lần' },
  { stt: '07', name: 'Thiết kế Bao bì / Nhãn mác sản phẩm', desc: 'Thiết kế bao bì hộp, chai lọ, túi đựng sản phẩm chuẩn in ấn và đạt hiệu ứng thị giác thu hút.', price: 'Từ 3.500.000đ / mẫu' },
  { stt: '08', name: 'Viết bài chuẩn SEO chuyên sâu', desc: 'Biên soạn bài viết SEO 1.000–2.000 từ, tối ưu Search Intent khách hàng trên Google.', price: '350.000đ – 600.000đ / bài' },
  { stt: '09', name: 'Quản trị chiến dịch Quảng cáo Ads', desc: 'Lên chiến dịch, phân nhóm đối tượng, viết mẫu quảng cáo, tối ưu chi phí quảng cáo hàng tuần.', price: 'Từ 5.000.000đ / tháng' },
];

const ALACARTE_STRATEGIC = [
  { name: 'Nghiên cứu thị trường sâu rộng (Market Research)', desc: 'Khảo sát hành vi người tiêu dùng, giải mã phân khúc thị trường và lập biểu đồ SWOT đối thủ cạnh tranh trực tiếp.' },
  { name: 'Lập Kế hoạch Marketing tổng thể & trung hạn', desc: 'Thiết lập ngân sách tiếp thị tối ưu, phân bổ kênh truyền thông theo từng tháng kèm bảng dự phóng chỉ số chuyển đổi.' },
  { name: 'Xây dựng Câu chuyện thương hiệu cốt lõi (Brand Story)', desc: 'Đào sâu giá trị cốt lõi, sứ mệnh nhà sáng lập để biên soạn câu chuyện chạm cảm xúc, định hình cá tính thương hiệu độc bản.' },
  { name: 'Xây dựng Hệ thống quản trị KPI Marketing', desc: 'Thiết lập mô hình đo lường tự động hóa, liên kết Ads / Analytics / CRM lên Dashboard trực quan thời gian thực.' },
];

const PROCESS_STEPS = [
  {
    icon: '📊',
    phase: 'Giai đoạn 1',
    title: 'Nghiên cứu & Định vị mục tiêu',
    items: ['Khảo sát đối thủ & thị trường', 'Thống nhất mục tiêu KPI', 'Đánh giá hiện trạng thương hiệu'],
  },
  {
    icon: '🛠️',
    phase: 'Giai đoạn 2',
    title: 'Thiết lập hạ tầng truyền thông',
    items: ['Thiết kế Logo, Nhận diện, Bao bì', 'Xây dựng Website & chuẩn hóa Social', 'Hoàn thiện lập trình kỹ thuật số'],
  },
  {
    icon: '📈',
    phase: 'Giai đoạn 3',
    title: 'Vận hành & Tối ưu',
    items: ['Biên soạn content, video ngắn', 'Chạy quảng cáo đa kênh', 'Đo lường & Tối ưu hóa liên tục'],
  },
];

/* ══════════════════════════════════════════════════════════════════
   SECTION 1 – HERO
══════════════════════════════════════════════════════════════════ */
const HeroServices = () => (
  <header className="relative min-h-[70vh] bg-black flex items-end overflow-hidden pt-28 pb-16">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.04)_0%,_transparent_60%)] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="max-w-7xl mx-auto px-6 w-full">
      <FadeUp><Label text="Sản phẩm & Dịch vụ — Our Services" /></FadeUp>

      <FadeUp delay={0.08}>
        <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tight mb-8 max-w-5xl">
          Định Hình Thương Hiệu –{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
            Vận Hành Đa Kênh
          </span>{' '}
          –<br className="hidden md:block" /> Bứt Phá Doanh Số.
        </h1>
      </FadeUp>

      <FadeUp delay={0.14}>
        <p className="text-base md:text-lg text-white/60 mb-12 max-w-3xl leading-relaxed font-light">
          Hệ thống giải pháp Marketing đồng bộ được thiết lập dựa trên nghiên cứu thị trường thực tế và ngôn ngữ mỹ thuật ứng dụng. Chúng tôi cung cấp các gói giải pháp toàn diện từ nền móng thương hiệu đến thực thi số giúp doanh nghiệp SME tối ưu hóa chi phí và kiểm soát hiệu quả bằng chỉ số KPI thực tế.
        </p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white/90 transition-all"
          >
            Nhận Bản Đánh Giá Hiện Trạng Thương Hiệu Sơ Bộ
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-5 border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-all"
          >
            <Phone className="w-4 h-4" />
            Liên hệ Chuyên viên Tư vấn
          </a>
        </div>
      </FadeUp>
    </div>
  </header>
);

/* ══════════════════════════════════════════════════════════════════
   SECTION 2 – COMBO CARDS (accordion)
══════════════════════════════════════════════════════════════════ */
const ComboCard = ({ combo }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className={`rounded-3xl border overflow-hidden transition-colors ${combo.accent}`}
    >
      {/* Header */}
      <div
        className="p-8 cursor-pointer select-none"
        onClick={() => setOpen(v => !v)}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-5xl font-black text-white/5 leading-none">{combo.index}</span>
              <div>
                <h2 className="text-xl md:text-2xl font-black uppercase leading-tight">{combo.name}</h2>
                <p className="text-sm text-white/45 mt-0.5">{combo.subtitle}</p>
              </div>
            </div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${combo.tagColor}`}>
              Xem hạng mục thực thi
            </span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-white/40 shrink-0 mt-1 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      {/* Detail */}
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
            <div className="px-8 pb-8 pt-2 border-t border-white/10 space-y-8">
              {/* Fit + Goal */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-black/30 border border-white/10">
                  <p className="text-xs text-white/35 uppercase tracking-widest font-semibold mb-2">Phù hợp với</p>
                  <p className="text-sm text-white/65 leading-relaxed">{combo.fit}</p>
                </div>
                <div className="p-5 rounded-2xl bg-black/30 border border-white/10">
                  <p className="text-xs text-white/35 uppercase tracking-widest font-semibold mb-2">Mục tiêu</p>
                  <p className="text-sm text-white/65 leading-relaxed">{combo.goal}</p>
                </div>
              </div>

              {/* Groups */}
              <div className="grid sm:grid-cols-2 gap-4">
                {combo.groups.map(({ icon: Icon, name, items }, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-black/30 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-white/55" />
                      </div>
                      <p className="font-bold text-sm uppercase leading-tight">{name}</p>
                    </div>
                    <ul className="space-y-2">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-white/55 leading-relaxed">
                          <CheckCircle className="w-3.5 h-3.5 text-white/30 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex justify-end">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-sm font-bold text-white/70 hover:bg-white hover:text-black transition-all"
                >
                  Đăng ký tư vấn gói này
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

const CombosSection = () => (
  <section id="combos" className="py-24 bg-black">
    <div className="max-w-7xl mx-auto px-6">
      <FadeUp>
        <Label text="3 Gói Combo Marketing Chiến Lược" />
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
          Giải Pháp Tích Hợp<br />
          <span className="text-white/50">Theo Giai Đoạn Phát Triển</span>
        </h2>
        <p className="text-white/55 text-lg mb-12 max-w-3xl">
          Để giải quyết triệt để các nút thắt trong từng giai đoạn phát triển, Monri Agency thiết kế 3 gói giải pháp tích hợp toàn diện dưới đây.
        </p>
      </FadeUp>

      <div className="space-y-5">
        {COMBOS.map(combo => (
          <FadeUp key={combo.id} delay={0.05}>
            <ComboCard combo={combo} />
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════
   SECTION 3 – À LA CARTE
══════════════════════════════════════════════════════════════════ */
const AlaCarteSection = () => (
  <section id="alacarte" className="py-24 bg-neutral-950 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <FadeUp>
        <Label text="Danh mục dịch vụ lẻ — À La Carte" />
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
          Giải Quyết Từng Nút Thắt<br />
          <span className="text-white/50">Trước Khi Đầu Tư Hệ Thống</span>
        </h2>
        <p className="text-white/55 text-lg mb-16 max-w-3xl">
          Doanh nghiệp có nhu cầu giải quyết các nút thắt ngắn hạn hoặc muốn trải nghiệm kiểm chứng năng lực của Monri trước khi ký gói Combo dài hạn.
        </p>
      </FadeUp>

      {/* Technical table */}
      <FadeUp delay={0.08}>
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-lg font-black uppercase">Dịch vụ thực thi kỹ thuật & nội dung</h3>
            <span className="px-3 py-1 rounded-full border border-white/15 text-xs text-white/40 font-semibold">Công khai báo giá</span>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left px-5 py-4 text-xs text-white/40 uppercase tracking-widest font-bold w-12">STT</th>
                  <th className="text-left px-5 py-4 text-xs text-white/40 uppercase tracking-widest font-bold">Dịch vụ</th>
                  <th className="text-left px-5 py-4 text-xs text-white/40 uppercase tracking-widest font-bold">Mô tả</th>
                  <th className="text-right px-5 py-4 text-xs text-white/40 uppercase tracking-widest font-bold whitespace-nowrap">Chi phí</th>
                </tr>
              </thead>
              <tbody>
                {ALACARTE_TECHNICAL.map(({ stt, name, desc, price }, i) => (
                  <tr
                    key={stt}
                    className={`border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}
                  >
                    <td className="px-5 py-4 text-white/25 font-mono text-xs">{stt}</td>
                    <td className="px-5 py-4 font-bold text-white/85 whitespace-nowrap">{name}</td>
                    <td className="px-5 py-4 text-white/50 leading-relaxed max-w-xs">{desc}</td>
                    <td className="px-5 py-4 text-right font-black text-white/80 whitespace-nowrap">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {ALACARTE_TECHNICAL.map(({ stt, name, desc, price }) => (
              <div key={stt} className="p-5 rounded-2xl border border-white/10 bg-black">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="font-bold text-sm text-white/85">{name}</p>
                  <span className="text-xs text-white/30 font-mono shrink-0">{stt}</span>
                </div>
                <p className="text-xs text-white/50 leading-relaxed mb-3">{desc}</p>
                <p className="text-sm font-black text-white/75">{price}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* Strategic */}
      <FadeUp delay={0.12}>
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-lg font-black uppercase">Dịch vụ tư vấn chiến lược chuyên sâu</h3>
            <span className="px-3 py-1 rounded-full border border-white/15 text-xs text-white/40 font-semibold">Báo giá theo nhu cầu</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {ALACARTE_STRATEGIC.map(({ name, desc }, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/10 bg-black hover:border-white/20 transition-all">
                <h4 className="font-black text-sm uppercase mb-3 leading-tight">{name}</h4>
                <p className="text-sm text-white/55 leading-relaxed mb-4">{desc}</p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white/50 hover:text-white transition-colors uppercase tracking-wider"
                >
                  Liên hệ nhận tư vấn <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════
   SECTION 4 – PROCESS
══════════════════════════════════════════════════════════════════ */
const ProcessSection = () => (
  <section className="py-24 bg-black">
    <div className="max-w-7xl mx-auto px-6">
      <FadeUp>
        <Label text="Quy trình triển khai tiêu chuẩn" />
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
          3 Giai Đoạn<br />
          <span className="text-white/50">Từ Nghiên Cứu Đến Vận Hành</span>
        </h2>
        <p className="text-white/55 text-lg mb-16 max-w-2xl">
          Mọi dự án đồng hành cùng Monri Agency đều đi qua quy trình 3 giai đoạn nghiêm ngặt.
        </p>
      </FadeUp>

      {/* Flow diagram */}
      <FadeUp delay={0.06}>
        <div className="mb-12 flex flex-col md:flex-row items-stretch gap-0">
          {PROCESS_STEPS.map(({ icon, phase, title }, i) => (
            <React.Fragment key={i}>
              <div className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-neutral-950 text-center">
                <span className="text-2xl">{icon}</span>
                <div className="text-left">
                  <p className="text-xs text-white/30 uppercase tracking-widest font-semibold">{phase}</p>
                  <p className="text-sm font-black uppercase">{title}</p>
                </div>
              </div>
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:flex items-center px-2 text-white/20">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </FadeUp>

      {/* Detail cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {PROCESS_STEPS.map(({ icon, phase, title, items }, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div className="h-full p-7 rounded-3xl border border-white/10 bg-neutral-950 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">{icon}</div>
              <p className="text-xs text-white/35 uppercase tracking-widest font-semibold mb-1">{phase}</p>
              <h3 className="font-black uppercase text-base mb-5 leading-tight">{title}</h3>
              <ul className="space-y-3">
                {items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-white/55">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/25 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
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
const ServicesCTA = () => (
  <section className="py-24 bg-neutral-950 border-t border-white/5">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <FadeUp>
        <blockquote className="text-xl md:text-2xl text-white/70 italic leading-relaxed mb-10 relative">
          <span className="absolute -top-4 -left-2 text-6xl text-white/5 font-serif leading-none select-none">"</span>
          Sự thành bại của một chiến dịch tiếp thị nằm ở tính hệ thống và kỷ luật vận hành. Hãy để Monri Agency trở thành phòng Marketing thuê ngoài chuyên nghiệp của bạn, đưa hoạt động kinh doanh bứt phá một cách bền vững.
          <span className="absolute -bottom-6 -right-2 text-6xl text-white/5 font-serif leading-none select-none">"</span>
        </blockquote>
      </FadeUp>

      <FadeUp delay={0.1}>
        <p className="text-white/50 mb-10 text-lg">
          Doanh nghiệp đã sẵn sàng lựa chọn{' '}
          <span className="text-white font-semibold">giải pháp tiếp thị phù hợp</span>?
        </p>
      </FadeUp>

      <FadeUp delay={0.18}>
        <div className="flex justify-center mb-6">
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black text-sm uppercase tracking-wider rounded-full hover:bg-white/90 transition-all"
          >
            Đăng Ký Khảo Sát Hiện Trạng & Tư Vấn Gói Dịch Vụ Phù Hợp
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </FadeUp>

      <FadeUp delay={0.24}>
        <p className="text-sm text-white/30 leading-relaxed max-w-md mx-auto">
          Monri cam kết bảo mật 100% thông tin khảo sát hiện trạng của doanh nghiệp đối tác.
        </p>
      </FadeUp>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════
   PAGE ASSEMBLY
══════════════════════════════════════════════════════════════════ */
const PageServices = () => (
  <div className="bg-black">
    <SEO
      title="Dịch vụ | Monri Agency – Hệ thống Marketing đồng bộ cho SME"
      description="3 gói Combo Marketing chiến lược và danh mục dịch vụ lẻ À La Carte từ Monri Agency – thiết lập, vận hành và tối ưu hệ thống tiếp thị đồng bộ cho doanh nghiệp SME."
    />
    <HeroServices />
    <CombosSection />
    <AlaCarteSection />
    <ProcessSection />
    <ServicesCTA />
    <Contact />
  </div>
);

export default PageServices;
