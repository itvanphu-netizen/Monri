import { useEffect, useRef, useState } from 'react';

/**
 * IntroOverlay — full-screen animated intro shown once per session.
 *
 * Animation sequence:
 *  0.1s  — red accent line slides in from left (top edge)
 *  0.3s  — subtle grid fades in
 *  0.5s  — "MONRI" wordmark reveals right
 *  1.2s  — separator line grows
 *  1.4s  — rotating words cycle (Creative → Digital → Experience)
 *  ~3.2s — white curtain wipes up, page revealed underneath, curtain wipes out
 *
 * Once complete, calls onDone() so the parent can unmount this overlay.
 */

const WORDS = ['Creative.', 'Digital.', 'Experience.'];

/* Timing (ms) — mirrors original HTML/JS */
const WORD_DELAY  = 1400;
const WORD_HOLD   = 700;
const WORD_SWITCH = 350;
const EXIT_START  = WORD_DELAY + WORDS.length * (WORD_HOLD + WORD_SWITCH) + 200;

export default function IntroOverlay({ onDone }) {
  const barRef     = useRef(null);
  const curtainRef = useRef(null);
  const [wordIndex, setWordIndex]   = useState(-1);   // which word is "active"
  const [exitWord,  setExitWord]    = useState(-1);   // which word is "exit"
  const [curtainUp, setCurtainUp]   = useState(false);
  const [curtainOut, setCurtainOut] = useState(false);

  /* ── progress bar ── */
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    // trigger reflow then animate
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.transition = `width ${EXIT_START}ms linear`;
        bar.style.width = '100%';
      });
    });
  }, []);

  /* ── word rotation ── */
  useEffect(() => {
    let idx = 0;
    let t;

    const show = () => {
      setExitWord(idx - 1);
      setWordIndex(idx);
      idx++;
      if (idx < WORDS.length) {
        t = setTimeout(show, WORD_HOLD + WORD_SWITCH);
      }
    };

    const start = setTimeout(show, WORD_DELAY);
    return () => { clearTimeout(start); clearTimeout(t); };
  }, []);

  /* ── exit sequence ── */
  useEffect(() => {
    const t1 = setTimeout(() => {
      setCurtainUp(true);           // white wipe up from bottom

      const t2 = setTimeout(() => {
        setCurtainOut(true);        // wipe out upward → reveals page
        const t3 = setTimeout(() => {
          onDone();                 // unmount overlay
        }, 800);
        return () => clearTimeout(t3);
      }, 750);
      return () => clearTimeout(t2);
    }, EXIT_START);

    return () => clearTimeout(t1);
  }, [onDone]);

  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        background: '#080808',
        zIndex: 9999,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: "'Syne', sans-serif",
      }}
    >
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),' +
          'linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        animation: 'introGridFade 0.8s ease 0.3s forwards',
        opacity: 0,
      }} />

      {/* Red accent line — top */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        height: 2, background: '#c8392b',
        animation: 'introAccentIn 1.2s cubic-bezier(0.76,0,0.24,1) 0.1s forwards',
        width: 0,
      }} />

      {/* Corner labels */}
      {[
        { id: 'tl', style: { top: 32, left: 40 },              text: 'MONRI Agency' },
        { id: 'tr', style: { top: 32, right: 40 },             text: 'Est. 2018' },
        { id: 'bl', style: { bottom: 32, left: 40 },           text: 'Ho Chi Minh City' },
        { id: 'br', style: { bottom: 32, right: 40 },          text: 'Creative & Digital' },
      ].map(({ id, style, text }) => (
        <span key={id} style={{
          position: 'absolute', ...style,
          fontFamily: "'Syne', sans-serif",
          fontSize: 9, fontWeight: 400,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: '#3a3a3a',
          opacity: 0,
          animation: 'introFadeUp 0.6s ease 1.6s forwards',
        }}>
          {text}
        </span>
      ))}

      {/* Centre content */}
      <div style={{ position: 'relative', textAlign: 'center', zIndex: 2 }}>

        {/* MONRI wordmark */}
        <div style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(52px, 12vw, 120px)',
          letterSpacing: '-0.02em',
          color: '#f5f2ed',
          lineHeight: 1,
          overflow: 'hidden',
          clipPath: 'inset(0 100% 0 0)',
          animation: 'introRevealRight 1s cubic-bezier(0.76,0,0.24,1) 0.5s forwards',
        }}>
          MONRI
        </div>

        {/* Separator */}
        <div style={{
          width: 0, height: 1,
          background: '#3a3a3a',
          margin: '20px auto',
          animation: 'introLineGrow 0.8s ease 1.2s forwards',
        }} />

        {/* Rotating words */}
        <div style={{ height: 36, overflow: 'hidden', position: 'relative' }}>
          {WORDS.map((word, i) => (
            <div key={word} style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(18px, 3vw, 26px)',
              letterSpacing: '0.12em',
              color: 'rgba(245,242,237,0.55)',
              position: 'absolute', width: '100%', textAlign: 'center',
              transform: wordIndex === i
                ? 'translateY(0)'
                : exitWord === i
                  ? 'translateY(-40px)'
                  : 'translateY(40px)',
              opacity: wordIndex === i ? 1 : 0,
              transition: 'transform 0.6s cubic-bezier(0.76,0,0.24,1), opacity 0.6s ease',
            }}>
              {word}
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar — bottom */}
      <div
        ref={barRef}
        style={{
          position: 'absolute', bottom: 0, left: 0,
          height: 1, background: '#f5f2ed',
          width: 0,
        }}
      />

      {/* Exit curtain */}
      <div
        ref={curtainRef}
        style={{
          position: 'absolute', inset: 0,
          background: '#f5f2ed',
          transformOrigin: curtainOut ? 'top' : 'bottom',
          transform: curtainUp
            ? curtainOut ? 'scaleY(0)' : 'scaleY(1)'
            : 'scaleY(0)',
          transition: curtainUp ? 'transform 0.75s cubic-bezier(0.76,0,0.24,1)' : 'none',
          zIndex: 9,
        }}
      />

      {/* Keyframes injected once */}
      <style>{`
        @keyframes introGridFade   { to { opacity: 1; } }
        @keyframes introAccentIn   { to { width: 100%; } }
        @keyframes introRevealRight{ to { clip-path: inset(0 0% 0 0); } }
        @keyframes introLineGrow   { to { width: 180px; } }
        @keyframes introFadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
