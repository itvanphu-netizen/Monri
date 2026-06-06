import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const CoreValue = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-2deg", "2deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="section-padding bg-black overflow-hidden relative">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative w-full aspect-[2/1] md:aspect-[3/1] rounded-[2rem] md:rounded-[4rem] group"
        >
          {/* Main Card Content */}
          <div className="absolute inset-0 bg-neutral-900 border border-white/5 rounded-[inherit] flex flex-col items-center justify-center overflow-hidden z-10 shadow-2xl">
            <motion.h2 
              className="text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-4 z-20"
            >
              CHỈNH SỬA GIAO DIỆN
            </motion.h2>
            <p className="text-xl md:text-3xl font-light text-white/50 tracking-wide z-20">
              THEO YÊU CẦU <span className="text-white font-medium">XUYÊN SUỐT THỜI HẠN</span>
            </p>
            
            {/* Spotlighting / Glow */}
            <motion.div 
              style={{
                background: useTransform(
                  [mouseXSpring, mouseYSpring],
                  ([x, y]) => `radial-gradient(1000px circle at ${50 + x * 100}% ${50 + y * 100}%, rgba(255,255,255,0.08), transparent)`
                )
              }}
              className="absolute inset-0 z-10 pointer-events-none"
            />
          </div>
          
          {/* Outer Ring Glow */}
          <div className="absolute inset-[-20px] bg-white/[0.03] blur-3xl rounded-[inherit] -z-10 group-hover:bg-white/[0.05] transition-colors" />
        </motion.div>
        
        <p className="mt-12 text-white/20 text-sm tracking-widest uppercase italic">
          Cam kết dịch vụ trọn đời — Đảm bảo UI/UX tinh gọn & chất lượng nhất.
        </p>
      </div>
    </section>
  );
};

export default CoreValue;
