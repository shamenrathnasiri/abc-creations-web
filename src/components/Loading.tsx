import { useEffect, useRef, useState } from 'react'
import logoSrc from '../assets/logo/logo.png'

/* ─────────────────────────────────────────────────────────────
   LoadingScreen
   • Full-screen logo-gradient loading overlay
   • Fades out smoothly once assets are ready (or after minDelay)
   ───────────────────────────────────────────────────────────── */
interface Props {
  /** Minimum time (ms) to show the loader even if page is ready */
  minDelay?: number
  onDone?: () => void
}

export default function LoadingScreen({ minDelay = 2200, onDone }: Props) {
  const [phase, setPhase] = useState<'loading' | 'exit'>('loading')
  const [progress, setProgress] = useState(0)
  const rafRef = useRef<number>(0)
  const startRef = useRef<number>(0)

  /* ── Animate a fake progress bar up to 100% over minDelay ── */
  useEffect(() => {
    const start = performance.now()
    startRef.current = start

    function tick(now: number) {
      const elapsed = now - start
      // Ease-out curve: fast at first, slows near 100
      const raw = elapsed / minDelay
      const eased = 1 - Math.pow(1 - Math.min(raw, 1), 3)
      setProgress(Math.min(Math.round(eased * 100), 100))

      if (elapsed < minDelay) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        // Trigger exit animation
        setPhase('exit')
        setTimeout(() => onDone?.(), 700)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [minDelay, onDone])

  return (
    <div
      aria-label="Loading ABC Creations"
      role="status"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#020202',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
        opacity: phase === 'exit' ? 0 : 1,
        transform: phase === 'exit' ? 'scale(1.03)' : 'scale(1)',
        pointerEvents: phase === 'exit' ? 'none' : 'all',
      }}
    >
      {/* ── Background radial glows ── */}
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
      }}>
        {/* Centre glow */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          width: 600, height: 600,
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(247,147,26,0.13) 0%, rgba(255,215,0,0.08) 40%, transparent 70%)',
          animation: 'lcOrbPulse 4s ease-in-out infinite',
        }} />
        {/* Top-left accent */}
        <div style={{
          position: 'absolute', top: '-80px', left: '-80px',
          width: 320, height: 320, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(247,147,26,0.09), transparent 70%)',
          animation: 'lcOrbPulse 5s ease-in-out infinite reverse',
        }} />
        {/* Bottom-right accent */}
        <div style={{
          position: 'absolute', bottom: '-80px', right: '-80px',
          width: 280, height: 280, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,215,0,0.08), transparent 70%)',
          animation: 'lcOrbPulse 6s ease-in-out infinite 1s',
        }} />
        {/* Subtle dot grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,215,0,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* ── Logo stack ── */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        {/* Outer spinning dashed ring */}
        <div style={{
          position: 'absolute',
          width: 220, height: 220,
          borderRadius: '50%',
          border: '1.5px dashed rgba(255,215,0,0.22)',
          animation: 'lcSpin 12s linear infinite',
        }} />

        {/* Middle conic-gradient ring (logo gradient colours) */}
        <div style={{
          position: 'absolute',
          width: 180, height: 180,
          borderRadius: '50%',
          background: 'conic-gradient(from 0deg, #f7931a, #ffd700, #ffe87a, transparent 60%, transparent 80%, #f7931a)',
          animation: 'lcSpin 2.4s linear infinite',
          WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 2px))',
          mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 2px))',
        }} />

        {/* Inner pulse ring */}
        <div style={{
          position: 'absolute',
          width: 144, height: 144,
          borderRadius: '50%',
          border: '1px solid rgba(255,215,0,0.12)',
          animation: 'lcPulseRing 2s ease-in-out infinite',
        }} />

        {/* Glow backdrop */}
        <div style={{
          position: 'absolute',
          width: 120, height: 120,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(247,147,26,0.22) 0%, transparent 70%)',
          filter: 'blur(12px)',
          animation: 'lcOrbPulse 3s ease-in-out infinite',
        }} />

        {/* Logo image */}
        <img
          src={logoSrc}
          alt="ABC Creations"
          width={88}
          height={88}
          style={{
            position: 'relative',
            zIndex: 2,
            width: 88, height: 88,
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 28px rgba(247,147,26,0.55))',
            animation: 'lcLogoFloat 3s ease-in-out infinite',
          }}
        />

        {/* Orbiting dot 1 */}
        <div style={{
          position: 'absolute',
          width: 220, height: 220,
          borderRadius: '50%',
          animation: 'lcSpin 3.5s linear infinite',
        }}>
          <div style={{
            position: 'absolute',
            top: -5, left: '50%',
            width: 10, height: 10,
            borderRadius: '50%',
            background: '#f7931a',
            transform: 'translateX(-50%)',
            boxShadow: '0 0 14px rgba(247,147,26,0.8)',
          }} />
        </div>

        {/* Orbiting dot 2 (counter-spin) */}
        <div style={{
          position: 'absolute',
          width: 160, height: 160,
          borderRadius: '50%',
          animation: 'lcSpin 5s linear infinite reverse',
        }}>
          <div style={{
            position: 'absolute',
            bottom: -4, left: '50%',
            width: 7, height: 7,
            borderRadius: '50%',
            background: '#ffe87a',
            transform: 'translateX(-50%)',
            boxShadow: '0 0 10px rgba(255,232,122,0.7)',
          }} />
        </div>
      </div>

      {/* ── Brand name ── */}
      <div style={{ marginTop: 48, textAlign: 'center', animation: 'lcFadeUp 0.9s ease-out 0.3s both' }}>
        <p style={{
          fontSize: 22,
          fontWeight: 900,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          background: 'linear-gradient(135deg, #f7931a, #ffd700, #ffe87a)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          margin: 0,
        }}>
          ABC Creations
        </p>
        <p style={{
          marginTop: 6,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.45em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.35)',
        }}>
          CREATIVE DIGITAL SOLUTIONS
        </p>
      </div>

      {/* ── Progress bar ── */}
      <div style={{
        marginTop: 40,
        width: 220,
        animation: 'lcFadeUp 0.9s ease-out 0.5s both',
      }}>
        {/* Track */}
        <div style={{
          width: '100%',
          height: 3,
          borderRadius: 999,
          background: 'rgba(255,255,255,0.06)',
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* Fill */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0,
            height: '100%',
            width: `${progress}%`,
            borderRadius: 999,
            background: 'linear-gradient(90deg, #f7931a, #ffd700, #ffe87a)',
            transition: 'width 0.05s linear',
            boxShadow: '0 0 10px rgba(255,215,0,0.5)',
          }} />
          {/* Shimmer overlay on the fill */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0,
            height: '100%',
            width: `${progress}%`,
            borderRadius: 999,
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
            animation: 'lcBarShimmer 1.2s ease-in-out infinite',
          }} />
        </div>

        {/* Percentage */}
        <p style={{
          marginTop: 10,
          textAlign: 'right',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.15em',
          background: 'linear-gradient(135deg, #f7931a, #ffd700)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
        }}>
          {progress}%
        </p>
      </div>

      {/* ── Keyframe styles injected inline ── */}
      <style>{`
        @keyframes lcSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes lcPulseRing {
          0%, 100% { transform: scale(1);    opacity: 0.5; }
          50%       { transform: scale(1.07); opacity: 1; }
        }
        @keyframes lcOrbPulse {
          0%, 100% { transform: scale(1);    opacity: 0.7; }
          50%       { transform: scale(1.15); opacity: 1; }
        }
        @keyframes lcLogoFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-7px) scale(1.04); }
        }
        @keyframes lcFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lcBarShimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  )
}
