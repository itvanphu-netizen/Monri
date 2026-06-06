import { useEffect } from 'react';

const SEO = ({ 
  title = "Monri Agency - Thiết kế Website & Marketing cho Doanh nghiệp",
  description = "Agency thiết kế website chuyên nghiệp, quảng cáo, content marketing cho doanh nghiệp. Gói trọn gói từ 15 triệu. Hỗ trợ trọn đời, phản hồi 24h.",
  canonical = "https://monri.vn/"
}) => {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical);
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonical);
  }, [title, description, canonical]);
  
  return null;
};

export default SEO;
