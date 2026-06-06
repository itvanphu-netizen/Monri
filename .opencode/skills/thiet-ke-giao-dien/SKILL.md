---
name: thiet-ke-giao-dien
description: Hướng dẫn thiết kế giao diện web chuyên nghiệp cho dự án Monri - sử dụng React, Tailwind CSS, Framer Motion. Tạo UI tối giản, đen-trắng, sang trọng.
---

## Nguyên tắc thiết kế

- **Phong cách**: Tối giản (minimalist), đen-trắng, chữ to khỏe, khoảng trống rộng
- **Typography**: Font sans-serif geometric, tracking-tight, uppercase cho heading
- **Màu sắc**: Black bg, white text, opacity variants (white/5, white/10, white/50, white/80)
- **Components**: Border nhẹ (white/5, white/10), rounded-3xl, border-t border-white/5 để phân cách
- **Animation**: Framer Motion, whileInView, stagger children, spring physics
- **Buttons**: BG xám hover, rounded-full, uppercase tracking-wider, text-xs/sm

## Khi tạo section mới

1. Dùng `section-padding` class, `max-w-7xl mx-auto px-6`
2. Heading font-black, uppercase, tracking-tighter, text-4xl/md:text-6xl
3. Mô tả text-white/50 hoặc white/60, font-light, text-lg
4. Grid ưu tiên: `grid grid-cols-1 md:grid-cols-2/3 gap-6/8`
5. Card: `p-8 rounded-3xl border border-white/10 bg-black hover:border-white/20 transition-all`
6. Hiệu ứng xuất hiện: `initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}`

## Khi cần sửa giao diện

- Dùng edit tool, không viết lại cả file
- Giữ đúng phong cách đen-trắng, opacity, tracking
- Animation dùng framer-motion, ưu tiên CSS transition trước
- Responsive mobile trước, desktop sau
