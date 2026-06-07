import { useEffect, useRef, useState } from 'react';

/**
 * SplineScene — optimised Spline loader using @splinetool/runtime directly.
 *
 * Why not @splinetool/react-spline?
 *   The react wrapper bundles extra overhead. Using the runtime directly:
 *   - Skips the React component layer
 *   - Only initialises the WebGL canvas after the element enters the viewport
 *     (IntersectionObserver), so it never blocks the initial page paint
 *   - Cleans up the application on unmount to free GPU memory
 *
 * Props:
 *   scene     — Spline scene URL (required)
 *   className — extra Tailwind classes for the canvas wrapper
 */
export function SplineScene({ scene, className }) {
  const containerRef = useRef(null);
  const appRef       = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let cancelled = false;

    const init = async () => {
      // Dynamically import the runtime — Vite code-splits this automatically
      const { Application } = await import('@splinetool/runtime');
      if (cancelled) return;

      // Create a <canvas> and mount it inside our container
      const canvas = document.createElement('canvas');
      canvas.style.width  = '100%';
      canvas.style.height = '100%';
      el.appendChild(canvas);

      const app = new Application(canvas);
      await app.load(scene);
      if (cancelled) {
        app.dispose?.();
        return;
      }

      appRef.current = app;
      setLoaded(true);
    };

    // Only start loading once the container enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          init();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      cancelled = true;
      observer.disconnect();
      // Release GPU resources
      appRef.current?.dispose?.();
      // Remove canvas if it was added
      const canvas = el.querySelector('canvas');
      if (canvas) el.removeChild(canvas);
    };
  }, [scene]);

  return (
    <div ref={containerRef} className={className} style={{ position: 'relative' }}>
      {/* Skeleton shown until WebGL is ready */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border-2 border-white/15 border-t-white/60 animate-spin" />
        </div>
      )}
    </div>
  );
}
