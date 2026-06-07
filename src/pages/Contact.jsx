import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send, Mail, Phone, MapPin,
  Clock, Shield, FileCheck,
  CheckCircle, AlertCircle, Loader,
  ArrowRight, Gift,
} from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';
import { db } from '../firebase';
import SEO from '../components/SEO';

/* ─── EmailJS config (reuse from Contact component) ───────────── */
const EMAILJS_SERVICE_ID  = 'service_x2clqsf';
const EMAILJS_TEMPLATE_ID = 'template_07eu2tc';
const EMAILJS_PUBLIC_KEY  = 'L_qFiGZe6Pm9kjjGE';

/* ─── helpers ──────────────────────────────────────────────────── */
const FadeUp = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
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

const inputCls =
  'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30 transition-all text-white placeholder:text-white/30 text-sm';
const labelCls = 'block text-xs text-white/50 uppercase tracking-wider mb-2 font-semibold';

/* ══════════════════════════════════════════════════════════════════
   INITIAL FORM STATE
══════════════════════════════════════════════════════════════════ */
const INIT = {
  name: '',
  position: '',
  phone: '',
  email: '',
  company: '',
  industry: '',
  channels: '',
  combos: [],          // multi-check
  alacarte: '',
  budget: '',
  message: '',
};

const COMBO_OPTIONS = [
  {
    id: 'combo1',
    label: 'Gói Combo 1: MONRI START-UP ENGINE',
    sub: 'Thiết lập hệ thống Marketing đồng bộ từ con số 0 (Dành cho doanh nghiệp/sản phẩm mới).',
  },
  {
    id: 'combo2',
    label: 'Gói Combo 2: MONRI RE-BRANDING SHIFT',
    sub: 'Đánh giá hiện trạng, tái thiết kế nhận diện, bao bì và định vị lại vị thế thương hiệu.',
  },
  {
    id: 'combo3',
    label: 'Gói Combo 3: MONRI CONVERSION FUNNEL',
    sub: 'Xây dựng hệ thống phễu đa kênh, tối ưu Landing Page, chạy quảng cáo Ads bứt phá doanh số.',
  },
  {
    id: 'alacarte',
    label: 'Dịch vụ lẻ theo nhu cầu (À La Carte)',
    sub: '',
  },
];

const BUDGET_OPTIONS = [
  'Dưới 15.000.000đ / tháng',
  'Từ 15.000.000đ đến 50.000.000đ / tháng',
  'Từ 50.000.000đ đến 100.000.000đ / tháng',
  'Trên 100.000.000đ / tháng',
];

/* ══════════════════════════════════════════════════════════════════
   SECTION 1 – HERO
══════════════════════════════════════════════════════════════════ */
const HeroContact = () => (
  <header className="relative min-h-[60vh] bg-black flex items-end overflow-hidden pt-28 pb-16">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.04)_0%,_transparent_60%)] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="max-w-7xl mx-auto px-6 w-full">
      <FadeUp>
        <Label text="Liên hệ — Khởi động dự án hợp tác" />
      </FadeUp>

      <FadeUp delay={0.08}>
        <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-black leading-[1.06] tracking-tight mb-8 max-w-4xl">
          Khởi Động Hệ Thống Tiếp Thị<br className="hidden md:block" />
          Của Doanh Nghiệp{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
            Ngay Hôm Nay.
          </span>
        </h1>
      </FadeUp>

      <FadeUp delay={0.14}>
        <p className="text-base md:text-lg text-white/60 mb-6 max-w-3xl leading-relaxed font-light">
          Đội ngũ chuyên gia của Monri luôn sẵn sàng lắng nghe bài toán kinh doanh, khảo sát hiện trạng thương hiệu và đề xuất giải pháp tiếp thị đồng bộ phù hợp nhất với quy mô vận hành của doanh nghiệp.
        </p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/15 bg-white/5">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-white/70">
            Tiếp nhận bảo mật · Phân tích dữ liệu thực tế ·{' '}
            <span className="text-white font-semibold">Phản hồi trong 2 giờ làm việc</span>
          </span>
        </div>
      </FadeUp>
    </div>
  </header>
);

/* ══════════════════════════════════════════════════════════════════
   SECTION 2 – FORM
══════════════════════════════════════════════════════════════════ */
const ContactForm = () => {
  const [form, setForm]       = useState(INIT);
  const [status, setStatus]   = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set = (field, val) => setForm(prev => ({ ...prev, [field]: val }));

  const toggleCombo = (id) =>
    setForm(prev => ({
      ...prev,
      combos: prev.combos.includes(id)
        ? prev.combos.filter(c => c !== id)
        : [...prev.combos, id],
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    setStatus('loading');
    setErrorMsg('');

    const payload = {
      ...form,
      combos: form.combos.join(', '),
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, 'contact_page'), payload);

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          phone:        form.phone,
          product_link: `${form.company} | ${form.industry} | ${form.combos.join(', ')} | Budget: ${form.budget}`,
          message:      form.message || '(không có)',
          reply_to:     form.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setForm(INIT);
    } catch (err) {
      console.error(err);
      setErrorMsg('Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp qua email.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <CheckCircle className="w-16 h-16 text-white mb-6" />
        <h3 className="text-2xl font-black uppercase mb-3">Đã tiếp nhận yêu cầu!</h3>
        <p className="text-white/60 mb-8 max-w-sm leading-relaxed">
          Chuyên viên Monri sẽ liên hệ xác nhận trong vòng <strong className="text-white">2 giờ làm việc</strong>. Cảm ơn doanh nghiệp đã tin tưởng!
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="px-6 py-3 border border-white/20 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all"
        >
          Gửi thêm yêu cầu
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">

      {/* ── 1. Thông tin liên hệ ── */}
      <div>
        <p className="text-xs text-white/40 uppercase tracking-widest font-black mb-6 pb-3 border-b border-white/10">
          1. Thông tin liên hệ cơ bản
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls}>Họ và tên người đại diện *</label>
            <input type="text" value={form.name} onChange={e => set('name', e.target.value)}
              placeholder="Nguyễn Văn A" required className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Chức vụ tại doanh nghiệp</label>
            <input type="text" value={form.position} onChange={e => set('position', e.target.value)}
              placeholder="Giám đốc / Marketing Manager..." className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Số điện thoại liên hệ (Zalo) *</label>
            <input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)}
              placeholder="09xx xxx xxx" required className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Email doanh nghiệp *</label>
            <input type="email" value={form.email} onChange={e => set('email', e.target.value)}
              placeholder="email@company.com" required className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Tên doanh nghiệp / Thương hiệu</label>
            <input type="text" value={form.company} onChange={e => set('company', e.target.value)}
              placeholder="Công ty / Thương hiệu của bạn" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Lĩnh vực / Ngành hàng kinh doanh</label>
            <input type="text" value={form.industry} onChange={e => set('industry', e.target.value)}
              placeholder="F&B · Mỹ phẩm · Bất động sản..." className={inputCls} />
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls}>Website hoặc các kênh Social hiện tại (nếu có)</label>
            <input type="text" value={form.channels} onChange={e => set('channels', e.target.value)}
              placeholder="https://website.com · facebook.com/page · @tiktok..." className={inputCls} />
          </div>
        </div>
      </div>

      {/* ── 2. Khảo sát nhu cầu ── */}
      <div>
        <p className="text-xs text-white/40 uppercase tracking-widest font-black mb-6 pb-3 border-b border-white/10">
          2. Khảo sát nhu cầu thực tế của doanh nghiệp
        </p>
        <p className="text-sm text-white/50 mb-5">Doanh nghiệp đang tìm kiếm giải pháp nào dưới đây? <span className="text-white/30">(Có thể chọn nhiều)</span></p>
        <div className="space-y-3">
          {COMBO_OPTIONS.map(({ id, label, sub }) => {
            const checked = form.combos.includes(id);
            return (
              <label
                key={id}
                className={`flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition-all ${
                  checked ? 'border-white/30 bg-white/8' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className={`w-5 h-5 rounded border shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                  checked ? 'bg-white border-white' : 'border-white/30'
                }`}>
                  {checked && (
                    <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <div onClick={() => toggleCombo(id)} className="flex-1 select-none">
                  <p className="text-sm font-bold text-white/85">{label}</p>
                  {sub && <p className="text-xs text-white/45 mt-0.5 leading-relaxed">{sub}</p>}
                </div>
              </label>
            );
          })}
        </div>

        {/* À la carte detail */}
        {form.combos.includes('alacarte') && (
          <div className="mt-4">
            <label className={labelCls}>Mô tả cụ thể dịch vụ lẻ cần thiết</label>
            <input type="text" value={form.alacarte} onChange={e => set('alacarte', e.target.value)}
              placeholder="Thiết kế bao bì · Viết content · Xây dựng website · SEO..."
              className={inputCls} />
          </div>
        )}
      </div>

      {/* ── 3. Ngân sách ── */}
      <div>
        <p className="text-xs text-white/40 uppercase tracking-widest font-black mb-6 pb-3 border-b border-white/10">
          3. Ngân sách đầu tư dự kiến cho hoạt động Marketing
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {BUDGET_OPTIONS.map(opt => {
            const selected = form.budget === opt;
            return (
              <label
                key={opt}
                className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                  selected ? 'border-white/30 bg-white/8' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className={`w-4 h-4 rounded-full border shrink-0 flex items-center justify-center transition-all ${
                  selected ? 'border-white' : 'border-white/30'
                }`}>
                  {selected && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
                <span
                  onClick={() => set('budget', opt)}
                  className="text-sm text-white/75 select-none"
                >
                  {opt}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* ── 4. Thông điệp ── */}
      <div>
        <p className="text-xs text-white/40 uppercase tracking-widest font-black mb-6 pb-3 border-b border-white/10">
          4. Thông điệp hoặc bài toán cụ thể cần giải quyết
        </p>
        <textarea
          rows={5}
          value={form.message}
          onChange={e => set('message', e.target.value)}
          placeholder="Mô tả chi tiết tình trạng hiện tại của thương hiệu, mục tiêu kinh doanh, và những thách thức bạn đang đối mặt..."
          className={`${inputCls} resize-none`}
        />
      </div>

      {/* Error */}
      {status === 'error' && (
        <div className="flex items-center gap-3 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-5 bg-white text-black font-black uppercase text-sm tracking-wider rounded-full hover:bg-white/90 transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <><Loader className="w-4 h-4 animate-spin" /> Đang gửi yêu cầu...</>
        ) : (
          <>Gửi Yêu Cầu & Khởi Động Dự Án <Send className="w-4 h-4" /></>
        )}
      </button>
    </form>
  );
};

/* ══════════════════════════════════════════════════════════════════
   SECTION 3 – CONTACT INFO
══════════════════════════════════════════════════════════════════ */
const ContactInfo = () => (
  <div className="space-y-10">
    {/* Office */}
    <div>
      <p className="text-xs text-white/40 uppercase tracking-widest font-black mb-5">Văn phòng làm việc</p>
      <div className="space-y-4">
        {[
          { label: 'Văn phòng (TP. Hồ Chí Minh)', value: 'Số 1 Bùi Tá Hán, Phường Bình Trưng, TP. Hồ Chí Minh' },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-white/50" />
            </div>
            <div>
              <p className="text-xs text-white/35 uppercase tracking-wider mb-0.5">{label}</p>
              <p className="text-sm text-white/80">{value}</p>
            </div>
          </div>
        ))}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4 text-white/50" />
          </div>
          <div>
            <p className="text-xs text-white/35 uppercase tracking-wider mb-0.5">Thời gian làm việc</p>
            <p className="text-sm text-white/80">08:00 – 17:30 (Thứ Hai đến Thứ Sáu)</p>
          </div>
        </div>
      </div>
    </div>

    {/* Fast channels */}
    <div>
      <p className="text-xs text-white/40 uppercase tracking-widest font-black mb-5">Kênh tương tác nhanh</p>
      <div className="space-y-4">
        {[
          { icon: Phone, label: 'Hotline tư vấn dịch vụ', value: '+84 968 651 433', href: 'tel:+84968651433' },
          { icon: Mail,  label: 'Email tiếp nhận hồ sơ dự án', value: 'Vungochuong@monri.vn', href: 'mailto:Vungochuong@monri.vn' },
        ].map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-white/50" />
            </div>
            <div>
              <p className="text-xs text-white/35 uppercase tracking-wider mb-0.5">{label}</p>
              <a href={href} className="text-sm text-white/80 hover:text-white transition-colors">{value}</a>
            </div>
          </div>
        ))}
      </div>

      {/* Social */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <p className="text-xs text-white/30 uppercase tracking-widest mb-3 font-semibold">Kênh thông tin số</p>
        <div className="flex flex-wrap gap-2">
          {['Facebook Fanpage', 'LinkedIn', 'TikTok @MonriAgency', 'Zalo OA'].map(ch => (
            <span key={ch} className="px-3 py-1.5 rounded-full border border-white/10 text-xs text-white/45 font-medium">
              {ch}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* NDA badge */}
    <div className="p-5 rounded-2xl border border-white/15 bg-white/5 flex items-start gap-4">
      <Shield className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-bold uppercase mb-1">Cam kết bảo mật NDA</p>
        <p className="text-xs text-white/50 leading-relaxed">
          Sẵn sàng ký kết thỏa thuận bảo mật pháp lý ngay trước buổi làm việc chuyên sâu đầu tiên.
        </p>
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════════════
   SECTION 4 – PROCESS & NDA
══════════════════════════════════════════════════════════════════ */
const ProcessNDA = () => {
  const steps = [
    {
      time: 'Trong vòng 2 giờ',
      title: 'Xác nhận thông tin',
      desc: 'Chuyên viên tư vấn Monri liên hệ xác nhận thông tin doanh nghiệp, làm rõ các dữ liệu đầu vào.',
    },
    {
      time: 'Trong vòng 24–48 giờ',
      title: 'Phân tích & Đề xuất',
      desc: 'Bộ phận Nghiên cứu và Sáng tạo phân tích sơ bộ hiện trạng, đối thủ trực tiếp và chuẩn bị Bản đề xuất giải pháp ban đầu (Brief Proposal).',
    },
    {
      time: 'Bước tiếp theo',
      title: 'Họp thảo luận chuyên sâu',
      desc: 'Tổ chức buổi họp trực tiếp hoặc online (Zoom/Google Meet) để thống nhất định hướng triển khai và cam kết chỉ số KPI.',
    },
  ];

  const ndaPoints = [
    'Không tiết lộ bất kỳ thông tin nào do doanh nghiệp cung cấp cho bên thứ ba khi chưa có sự đồng ý bằng văn bản.',
    'Sẵn sàng ký kết thỏa thuận NDA pháp lý ngay trước khi tiến hành buổi làm việc chuyên sâu đầu tiên.',
  ];

  return (
    <section className="py-24 bg-neutral-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Process */}
          <FadeUp>
            <Label text="Quy trình xử lý yêu cầu chuẩn SLA" />
            <h2 className="text-3xl font-black uppercase tracking-tight mb-10">
              3 Bước<br /><span className="text-white/50">Từ Yêu Cầu Đến Giải Pháp</span>
            </h2>
            <div className="space-y-0">
              {steps.map(({ time, title, desc }, i) => (
                <div key={i} className="flex gap-6">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0 text-xs font-black text-white/60">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    {i < steps.length - 1 && <div className="w-px flex-1 bg-white/10 my-2" />}
                  </div>
                  {/* Content */}
                  <div className="pb-10">
                    <p className="text-xs text-white/35 uppercase tracking-widest font-semibold mb-1">{time}</p>
                    <h3 className="font-black uppercase text-base mb-2">{title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* NDA */}
          <FadeUp delay={0.1}>
            <Label text="Cam kết bảo mật thông tin" />
            <h2 className="text-3xl font-black uppercase tracking-tight mb-10">
              NDA —<br /><span className="text-white/50">An Tâm Tuyệt Đối</span>
            </h2>

            <div className="p-8 rounded-3xl border border-white/15 bg-black mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-7 h-7 text-white/60" />
                <p className="font-black uppercase text-sm">Non-Disclosure Agreement</p>
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Monri hiểu rõ tầm quan trọng của các thông tin nội bộ doanh nghiệp, ý tưởng sản phẩm mới và chiến lược kinh doanh. Chúng tôi cam kết:
              </p>
              <ul className="space-y-3">
                {ndaPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/65">
                    <FileCheck className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* SLA badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Clock, label: 'SLA 2 giờ' },
                { icon: Shield, label: 'Bảo mật NDA' },
                { icon: FileCheck, label: 'Bàn giao 100%' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-white/10 bg-neutral-950 text-center">
                  <Icon className="w-5 h-5 text-white/40" />
                  <span className="text-xs text-white/50 font-semibold uppercase tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════
   SECTION 5 – BOTTOM CTA
══════════════════════════════════════════════════════════════════ */
const ContactBottomCTA = () => (
  <section className="py-24 bg-black">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <FadeUp>
        <blockquote className="text-xl md:text-2xl text-white/70 italic leading-relaxed mb-10 relative">
          <span className="absolute -top-4 -left-2 text-6xl text-white/5 font-serif leading-none select-none">"</span>
          Sự chậm trễ trong việc thiết lập một hệ thống Marketing bài bản chính là cơ hội để đối thủ vượt lên chiếm lĩnh thị trường. Hãy cùng Monri Agency đặt những viên gạch nền móng vững chắc đầu tiên cho sự tăng trưởng vượt trội của doanh nghiệp.
          <span className="absolute -bottom-6 -right-2 text-6xl text-white/5 font-serif leading-none select-none">"</span>
        </blockquote>
      </FadeUp>

      <FadeUp delay={0.1}>
        <p className="text-white/50 mb-10 text-lg">
          Đăng ký ngay hôm nay để nhận{' '}
          <span className="text-white font-semibold">Bản phân tích đối thủ cạnh tranh miễn phí</span>{' '}
          từ chuyên gia Monri.
        </p>
      </FadeUp>

      <FadeUp delay={0.18}>
        <div className="flex justify-center mb-8">
          <a
            href="#contact-form"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black text-sm uppercase tracking-wider rounded-full hover:bg-white/90 transition-all"
          >
            Đăng Ký Khảo Sát & Tư Vấn Miễn Phí
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </FadeUp>

      <FadeUp delay={0.24}>
        <div className="inline-flex items-start gap-4 px-7 py-4 rounded-2xl border border-white/15 bg-white/5 text-left max-w-lg">
          <Gift className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
          <p className="text-sm text-white/55 leading-relaxed">
            Gói <span className="text-white font-semibold">"Đánh giá sức khỏe SEO Website"</span> trị giá{' '}
            <span className="text-white font-semibold">3.000.000đ</span> — dành cho{' '}
            <span className="text-white font-semibold">15 doanh nghiệp</span> đăng ký sớm nhất trong tuần.
          </p>
        </div>
      </FadeUp>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════
   MAP SECTION
══════════════════════════════════════════════════════════════════ */
const MapSection = () => (
  <section className="py-0 bg-black">
    <div className="max-w-7xl mx-auto px-6 pb-0">
      <FadeUp>
        <div className="flex items-center gap-3 mb-6 pt-0">
          <div className="h-px w-12 bg-white/30" />
          <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">Tìm chúng tôi</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Văn Phòng Monri Agency</h2>
            <p className="text-white/45 text-sm mt-1">Số 1 Bùi Tá Hán, Phường Bình Trưng, TP. Hồ Chí Minh, Việt Nam</p>
          </div>
          <a
            href="https://maps.google.com/?q=Số+1+Bùi+Tá+Hán,+Phường+Bình+Trưng+Tây,+TP.+Hồ+Chí+Minh"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-sm font-bold text-white/60 hover:bg-white hover:text-black transition-all"
          >
            <MapPin className="w-4 h-4" />
            Mở Google Maps
          </a>
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="w-full h-[400px] md:h-[480px] rounded-3xl overflow-hidden border border-white/10">
          <iframe
            title="Monri Agency – Bản đồ văn phòng"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1!2d106.7647!3d10.7986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527b7e3d7a1c9%3A0x0!2zU-G7kSAxIELDuWkgVMOhIEjDoW4sIFBow7fhu51uZyBCw6xuaCBUcsawbmcsIFRQLiBIw7MgQ2jDrSBNaW5o!5e0!3m2!1svi!2svn!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </FadeUp>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════
   PAGE ASSEMBLY
══════════════════════════════════════════════════════════════════ */
const ContactPage = () => (
  <div className="bg-black">
    <SEO
      title="Liên hệ | Monri Agency – Khởi động hệ thống Marketing"
      description="Đăng ký khảo sát hiện trạng thương hiệu và nhận tư vấn giải pháp Marketing đồng bộ miễn phí từ chuyên gia Monri Agency."
    />
    <HeroContact />

    {/* Section 2: Form + Info */}
    <section id="contact-form" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <Label text="Biểu mẫu đăng ký tư vấn & khảo sát chuyên sâu" />
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
            Cung Cấp Thông Tin<br />
            <span className="text-white/50">Để Nhận Giải Pháp Sát Nhất</span>
          </h2>
          <p className="text-white/50 text-base mb-12 max-w-2xl">
            Để Monri Agency có thể chuẩn bị số liệu nghiên cứu thị trường và đưa ra giải pháp đề xuất sát nhất với thực tế, doanh nghiệp vui lòng cung cấp các thông tin cơ bản dưới đây.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
          {/* Form */}
          <FadeUp delay={0.08}>
            <div className="p-8 md:p-10 rounded-3xl border border-white/10 bg-neutral-950">
              <ContactForm />
            </div>
          </FadeUp>

          {/* Info sidebar */}
          <FadeUp delay={0.16}>
            <div className="lg:sticky lg:top-28">
              <ContactInfo />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>

    <ProcessNDA />
    <MapSection />
    <ContactBottomCTA />
  </div>
);

export default ContactPage;
