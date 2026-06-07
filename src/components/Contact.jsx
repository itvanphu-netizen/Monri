import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';
import { db } from '../firebase';

// ─── CẤU HÌNH EMAILJS ────────────────────────────────────────────────────────
// Đăng ký tại https://www.emailjs.com/ (miễn phí 200 email/tháng)
// Sau đó điền các giá trị bên dưới:
const EMAILJS_SERVICE_ID  = 'service_x2clqsf';
const EMAILJS_TEMPLATE_ID = 'template_07eu2tc';
const EMAILJS_PUBLIC_KEY  = 'L_qFiGZe6Pm9kjjGE';   // ← Vào Account → General → Public Key
// ─────────────────────────────────────────────────────────────────────────────

const initialForm = { name: '', email: '', phone: '', link: '', message: '' };

const Contact = () => {
  const [form, setForm]     = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      // 1. Lưu vào Firestore
      await addDoc(collection(db, 'contacts'), {
        ...form,
        createdAt: serverTimestamp(),
      });

      // 2. Gửi email thông báo qua EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          phone:        form.phone,
          product_link: form.link || '—',
          message:      form.message,
          reply_to:     form.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setErrorMsg('Có lỗi xảy ra, vui lòng thử lại hoặc liên hệ trực tiếp qua email.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            Bắt đầu dự án
          </h2>
          <p className="text-white/60 text-lg mb-12 leading-relaxed">
            Điền form bên cạnh hoặc liên hệ trực tiếp. Chúng tôi phản hồi trong vòng 24 giờ.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white/60" />
               </div>
               <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:Vungochuong@monri.vn" className="text-white/90 hover:text-white transition-colors">
                    Vungochuong@monri.vn
                  </a>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white/60" />
               </div>
               <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Hotline</p>
                  <a href="tel:+84968651433" className="text-white/90 hover:text-white transition-colors">
                    +84 968 651 433
                  </a>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white/60" />
               </div>
               <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Văn phòng</p>
                   <p className="text-white/90">Số 1 Bùi Tá Hán, Phường Bình Trưng, TP. Hồ Chí Minh</p>
               </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="p-8 rounded-3xl border border-white/10 bg-black">
          {/* Success State */}
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <CheckCircle className="w-16 h-16 text-white mb-6" />
              <h3 className="text-2xl font-black uppercase mb-3">Đã nhận được!</h3>
              <p className="text-white/60 mb-8 max-w-sm">
                Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 24 giờ.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="px-6 py-3 border border-white/20 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all"
              >
                Gửi thêm
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                  Họ & Tên *
                </label>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange}
                  placeholder="Nguyễn Văn A" required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30 transition-all text-white placeholder:text-white/30"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="email@company.com" required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30 transition-all text-white placeholder:text-white/30"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                    Số điện thoại
                  </label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="09xx xxx xxx"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30 transition-all text-white placeholder:text-white/30"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                  Loại dịch vụ quan tâm
                </label>
                <select
                  name="link" value={form.link} onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30 transition-all text-white appearance-none cursor-pointer"
                  style={{ colorScheme: 'dark' }}
                >
                  <option value="" disabled className="bg-neutral-900">-- Chọn dịch vụ --</option>
                  <option value="Thiết kế Web" className="bg-neutral-900">Thiết kế Web</option>
                  <option value="Thiết kế Banner" className="bg-neutral-900">Thiết kế Banner</option>
                  <option value="Ấn phẩm văn phòng" className="bg-neutral-900">Ấn phẩm văn phòng</option>
                  <option value="Ấn phẩm quảng cáo" className="bg-neutral-900">Ấn phẩm quảng cáo</option>
                  <option value="Quảng cáo mạng xã hội" className="bg-neutral-900">Quảng cáo mạng xã hội</option>
                  <option value="Booking báo / Media" className="bg-neutral-900">Booking báo / Media</option>
                  <option value="Viết Content" className="bg-neutral-900">Viết Content</option>
                  <option value="Quay dựng Video" className="bg-neutral-900">Quay dựng Video</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                  Lời nhắn
                </label>
                <textarea
                  rows="4" name="message" value={form.message} onChange={handleChange}
                  placeholder="Mô tả ngắn gọn về dự án của bạn..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30 transition-all text-white placeholder:text-white/30 resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-3 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-white text-black font-bold uppercase text-sm tracking-wider rounded-full hover:bg-white/90 transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <><Loader className="w-4 h-4 animate-spin" /> Đang gửi...</>
                ) : (
                  <>Gửi yêu cầu <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          )}
        </div>
        
        </div>
      </div>
    </section>
  );
};

export default Contact;
