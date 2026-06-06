# Design Review Results: All Pages (Home, About, Services, Projects)

**Review Date**: 2026-04-01
**Route**: `/`, `/about`, `/services`, `/projects`
**Focus Areas**: Visual Design, UX/Usability, Responsive/Mobile, Accessibility, Micro-interactions, Consistency, Performance

## Summary
Website có phong cách hiện đại, cao cấp với tông màu tối và typography mạnh mẽ, rất phù hợp với định vị của một creative agency. Tuy nhiên, hiện tại đang gặp các vấn đề nghiêm trọng về **khả năng truy cập (Accessibility)** do độ tương phản màu sắc quá thấp, và một số lỗi về **trải nghiệm người dùng (UX)** trên thiết bị di động. Các hiệu ứng chuyển trang và animation mượt mà nhưng cần tối ưu hóa để không làm chậm trải nghiệm.

## Issues

| # | Issue | Criticality | Category | Location |
|---|-------|-------------|----------|----------|
| 1 | **Độ tương phản quá thấp**: Văn bản màu `white/20` (gray 333) trên nền đen chỉ đạt tỷ lệ 1.66:1 (yêu cầu tối thiểu 4.5:1). | 🔴 Critical | Accessibility | `src/index.css`, `src/components/Hero.jsx`, `src/components/Footer.jsx` |
| 2 | **Thiếu nhãn cho Button**: Các nút (menu di động, nút tròn) không có `aria-label` hoặc text ẩn cho screen reader. | 🔴 Critical | Accessibility | `src/components/Navbar.jsx`, `src/components/Footer.jsx` |
| 3 | **Lỗi load tài nguyên**: File `noise.svg` từ `grainy-gradients.vercel.app` bị lỗi 403, làm mất hiệu ứng hạt (noise) mong muốn. | 🟠 High | Visual Design | `src/pages/About.jsx` |
| 4 | **Heading Order không hợp lệ**: Sử dụng `h4` trước `h1` hoặc bỏ qua các cấp độ heading. | 🟡 Medium | SEO / Semantics | `src/components/Footer.jsx`, `src/components/Hero.jsx` |
| 5 | **Contrast của text bóng (Outlined text)**: Text nền "SẢN PHẨM B2B" có contrast cực thấp (1.08:1), gần như không thể nhìn thấy trên một số màn hình. | 🟠 High | Visual Design | `src/components/Hero.jsx` |
| 6 | **Responsive Header**: Trên mobile (375px), logo và menu icon có thể quá sát mép hoặc khó tương tác nếu không được căn chỉnh kỹ. | 🟡 Medium | Responsive | `src/components/Navbar.jsx` |
| 7 | **Thiếu focus state**: Các liên kết và nút không có chỉ báo focus rõ ràng khi điều hướng bằng bàn phím. | 🟠 High | Accessibility | `src/index.css` |
| 8 | **Performance (LCP)**: Các animation của Framer Motion có thể gây "layout shift" nhẹ nếu không được cấu hình `layoutId` hoặc `initial` đúng cách. | ⚪ Low | Performance | `src/components/PageTransition.jsx` |

## Criticality Legend
- 🔴 **Critical**: Vi phạm nghiêm trọng tiêu chuẩn truy cập hoặc làm hỏng chức năng.
- 🟠 **High**: Ảnh hưởng lớn đến trải nghiệm người dùng hoặc chất lượng thiết kế.
- 🟡 **Medium**: Vấn đề dễ nhận thấy, cần được khắc phục để hoàn thiện.
- ⚪ **Low**: Gợi ý cải thiện để tối ưu hơn.

## Next Steps
1. **Ưu tiên 1**: Điều chỉnh màu sắc text `white/20` lên ít nhất `white/50` hoặc `white/60` để đảm bảo khả năng đọc.
2. **Ưu tiên 2**: Thêm `aria-label` cho tất cả các nút icon.
3. **Ưu tiên 3**: Fix lỗi load asset noise để đảm bảo visual đúng như thiết kế.
4. **Ưu tiên 4**: Cải thiện cấu trúc Heading (H1 -> H2 -> H3) để tối ưu SEO.
