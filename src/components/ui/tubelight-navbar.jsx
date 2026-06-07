import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';

/**
 * TubelightNavBar — animated pill navbar with a glowing "tube light" indicator.
 *
 * Props:
 *   items     — array of { name, url, icon }  (icon = lucide-react component)
 *   className — extra classes for the outer wrapper
 *
 * Differences from the original Next.js version:
 *   - Uses react-router-dom <Link> + useLocation instead of next/link
 *   - Active tab is derived from the current URL path (no manual state needed)
 *   - CSS variables replaced with Tailwind white/dark theme tokens
 */
export function TubelightNavBar({ items, className }) {
  const location  = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  // Derive active tab from current pathname
  const activeTab =
    items.find((item) =>
      item.url === '/'
        ? location.pathname === '/'
        : location.pathname.startsWith(item.url)
    )?.name ?? items[0].name;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={cn('flex items-center', className)}>
      <div className="flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon     = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              to={item.url}
              className={cn(
                'relative cursor-pointer text-xs font-bold px-5 py-2.5 rounded-full transition-colors uppercase tracking-wider',
                'text-white/60 hover:text-white',
                isActive && 'text-white'
              )}
            >
              {/* Label (desktop) / Icon (mobile) */}
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={16} strokeWidth={2.5} />
              </span>

              {/* Animated pill + tube glow */}
              {isActive && (
                <motion.div
                  layoutId="tubelight-lamp"
                  className="absolute inset-0 w-full rounded-full -z-10 bg-white/10"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                >
                  {/* Tube light bar at the top */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full">
                    {/* Glow layers */}
                    <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-white/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
