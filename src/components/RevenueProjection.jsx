import React from 'react';
import { motion } from 'framer-motion';

const RevenueProjection = () => {
  const points = [40, 45, 55, 60, 65, 80, 85, 95, 110, 115, 125, 140];
  const labels = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'];
  
  // Calculate relative coordinates
  const width = 1200;
  const height = 400;
  const padding = 60;
  const maxY = Math.max(...points) * 1.2;
  
  const getX = (i) => padding + (i * (width - 2 * padding)) / (points.length - 1);
  const getY = (val) => height - padding - (val * (height - 2 * padding)) / maxY;
  
  const pathData = points.reduce((acc, val, i) => 
    acc + `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(val)} `, 
  '');

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 relative z-10">
        
        <div className="w-full md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight uppercase">REVENUE <br />PROJECTION</h2>
          <p className="text-white/40 text-lg leading-relaxed mb-6">
            Lợi nhuận gộp ước tính đạt mức tăng trưởng vượt bậc sau 12 tháng vận hành theo mô hình Monri.
          </p>
          <div className="flex items-baseline gap-4 mb-12">
             <span className="text-5xl font-bold text-white tracking-widest">+250%</span>
             <span className="text-white/30 text-xs uppercase tracking-widest">Growth rate / 1yr</span>
          </div>
        </div>

        <div className="flex-1 w-full bg-neutral-900/50 border border-white/5 rounded-[3rem] p-8 md:p-12 relative group">
           {/* Grid lines */}
           <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between pointer-events-none opacity-10">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-full h-[1px] bg-white" />
              ))}
           </div>
           
           <div className="relative w-full aspect-[2/1]">
              <svg 
                viewBox={`0 0 ${width} ${height}`} 
                className="w-full h-full overflow-visible"
              >
                {/* Area under curve */}
                <motion.path 
                  d={pathData + `L ${getX(points.length - 1)} ${height - padding} L ${padding} ${height - padding} Z`}
                  fill="url(#gradient-area)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
                
                {/* Line path */}
                <motion.path 
                  d={pathData} 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
                
                {/* Points */}
                {points.map((val, i) => (
                  <motion.circle 
                    key={i}
                    cx={getX(i)} 
                    cy={getY(val)} 
                    r="6" 
                    fill="white" 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="cursor-pointer hover:r-10 transition-all shadow-[0_0_10px_white]"
                  />
                ))}
                
                {/* Labels */}
                {labels.map((label, i) => (
                  <text 
                    key={i}
                    x={getX(i)} 
                    y={height - 10} 
                    textAnchor="middle" 
                    fill="rgba(255,255,255,0.2)" 
                    fontSize="14"
                    className="font-mono tracking-widest"
                  >
                    {label}
                  </text>
                ))}

                <defs>
                   <linearGradient id="gradient-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="white" stopOpacity="0.05" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                   </linearGradient>
                </defs>
              </svg>
           </div>
        </div>

      </div>
    </section>
  );
};

export default RevenueProjection;
