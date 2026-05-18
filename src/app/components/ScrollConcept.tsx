import { useState, useEffect, useRef } from "react";
import "./ScrollConcept.css";

// Utility functions
const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (t: number) => t * t * (3 - 2 * t);
const range = (p: number, a: number, b: number) => clamp((p - a) / (b - a));

// Scroll progress hook
function useScrollProgress(ref: React.RefObject<HTMLElement>) {
  const [p, setP] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    let raf = 0;
    const tick = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      const scrolled = -rect.top;
      const prog = clamp(scrolled / Math.max(1, total));
      setP(prog);
      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    tick();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);

  return p;
}

// Assembling Dashboard Component
function AssemblingDashboard({ progress }: { progress: number }) {
  const parts = [
    range(progress, 0, 0.25),      // frame + header
    range(progress, 0.15, 0.4),    // left nav
    range(progress, 0.25, 0.5),    // main chart
    range(progress, 0.4, 0.65),    // stat tiles
    range(progress, 0.55, 0.8),    // right rail
    range(progress, 0.7, 1)        // bottom reports
  ];

  return (
    <div style={{
      background: 'var(--bg-2)',
      borderRadius: 14,
      border: '1px solid var(--rule-strong)',
      opacity: parts[0],
      transform: `translateY(${lerp(40, 0, parts[0])}px)`,
      boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '14px 20px',
        borderBottom: '1px solid var(--rule)',
        fontSize: 12,
        fontFamily: 'var(--mono)'
      }}>
        <div style={{ display: 'flex', gap: 16, color: 'var(--ink-dim)' }}>
          <span>EFG · Research Terminal</span>
          <span>·</span>
          <span>MENA / Equities</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <span className="caps" style={{ color: 'var(--accent)' }}>Live</span>
          <span style={{ color: 'var(--ink-dim)' }}>15:24 GST</span>
        </div>
      </div>

      {/* Main grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 260px', minHeight: 460 }}>
        {/* Left nav */}
        <div style={{
          borderRight: '1px solid var(--rule)',
          padding: 18,
          opacity: parts[1],
          transform: `translateX(${lerp(-20, 0, parts[1])}px)`
        }}>
          {['Markets', 'Coverage', 'Reports', 'Analysts', 'Screener', 'Macro'].map((x, i) => (
            <div key={x} style={{
              padding: '10px 0',
              fontSize: 13,
              color: i === 2 ? 'var(--ink)' : 'var(--ink-dim)',
              borderLeft: i === 2 ? '2px solid var(--accent)' : '2px solid transparent',
              paddingLeft: 10,
              marginLeft: -10
            }}>
              {x}
            </div>
          ))}
        </div>

        {/* Main chart area */}
        <div style={{ padding: 20 }}>
          <div style={{
            opacity: parts[2],
            transform: `translateY(${lerp(20, 0, parts[2])}px)`
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
              <div>
                <div style={{ fontSize: 11, color: 'var(--ink-dim)', fontFamily: 'var(--mono)' }}>
                  EGX 30 · INDEX
                </div>
                <div style={{ fontSize: 28, fontFamily: 'var(--serif)' }}>
                  28,412.60 <span style={{ fontSize: 14, color: 'var(--green)' }}>+1.24%</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, alignSelf: 'flex-start' }}>
                {['1D', '1W', '1M', '1Y', '5Y'].map((t, i) => (
                  <span key={t} style={{
                    padding: '4px 10px',
                    fontSize: 11,
                    fontFamily: 'var(--mono)',
                    border: '1px solid var(--rule)',
                    borderRadius: 4,
                    color: i === 3 ? 'var(--ink)' : 'var(--ink-dim)',
                    background: i === 3 ? 'var(--bg-3)' : 'transparent'
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Chart SVG */}
            <svg viewBox="0 0 560 200" style={{ width: '100%', height: 200 }}>
              {[0, 1, 2, 3].map(i => (
                <line key={i} x1="0" x2="560" y1={50 * i + 10} y2={50 * i + 10} stroke="rgba(227,227,226,0.06)" />
              ))}
              <path
                d="M 0 140 Q 70 120, 140 130 T 280 110 T 420 95 T 560 80"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                style={{ opacity: parts[2] }}
              />
            </svg>

            {/* Stats row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 12,
              marginTop: 20,
              opacity: parts[3],
              transform: `translateY(${lerp(20, 0, parts[3])}px)`
            }}>
              {[
                { label: 'Issuers', value: '420' },
                { label: 'Analysts', value: '56' },
                { label: 'Reports', value: '1,284' }
              ].map(stat => (
                <div key={stat.label} style={{
                  padding: '12px 14px',
                  border: '1px solid var(--rule)',
                  borderRadius: 8
                }}>
                  <div style={{ fontSize: 10, color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: 26, fontFamily: 'var(--serif)', marginTop: 6 }}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right rail */}
        <div style={{
          borderLeft: '1px solid var(--rule)',
          padding: 18,
          opacity: parts[4],
          transform: `translateX(${lerp(20, 0, parts[4])}px)`
        }}>
          <div style={{ fontSize: 10, color: 'var(--ink-dim)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>
            Top Picks
          </div>
          {['COMI', 'ETEL', 'EMOB'].map((sym, i) => (
            <div key={sym} style={{
              padding: '10px 0',
              borderBottom: '1px solid var(--rule)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: 11, color: 'var(--accent)', fontFamily: 'var(--mono)' }}>
                  {sym}
                </div>
                <div style={{ fontSize: 9, color: 'var(--ink-faint)' }}>
                  {['Commercial Intl', 'Egyp Telecom', 'E-Mobility'][i]}
                </div>
              </div>
              <div style={{ fontSize: 12, color: 'var(--green)', fontFamily: 'var(--mono)' }}>
                +{[2.14, 1.87, 3.42][i]}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Hero Safe Component
function HeroSafe() {
  const pinRef = useRef<HTMLElement>(null);
  const p = useScrollProgress(pinRef);

  const tHeadline = range(p, 0, 0.25);
  const tSplit = range(p, 0.25, 0.45);
  const tUI = range(p, 0.4, 0.75);

  const dashScale = lerp(0.82, 1, smooth(tUI));
  const dashOp = smooth(tUI);

  return (
    <section ref={pinRef} className="pinned" style={{ height: '380vh' }}>
      <div className="sticky dots">
        {/* Headline phase */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 1 - tSplit,
          pointerEvents: 'none'
        }}>
          <div style={{ textAlign: 'center', maxWidth: 1200, padding: '0 40px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>
              <span style={{ opacity: smooth(tHeadline) }}>EFG Hermes Research · 2026</span>
            </div>
            <h1 className="hero-title" style={{
              transform: `scale(${lerp(1.08, 1, smooth(tHeadline))})`,
              letterSpacing: `${lerp(-0.02, -0.035, smooth(tHeadline))}em`
            }}>
              <span style={{
                display: 'inline-block',
                transform: `translateY(${lerp(-40, 0, smooth(tHeadline))}px) translateX(${lerp(0, -260, smooth(tSplit))}px)`,
                opacity: lerp(1, 0.15, smooth(tSplit))
              }}>
                Conviction
              </span>{' '}
              <span className="serif" style={{
                fontStyle: 'italic',
                color: 'var(--accent)',
                transform: `translateY(${lerp(40, 0, smooth(tHeadline))}px)`,
                display: 'inline-block',
                opacity: lerp(1, 0.25, smooth(tSplit))
              }}>
                in numbers
              </span>
              <br />
              <span style={{
                display: 'inline-block',
                transform: `translateX(${lerp(0, 260, smooth(tSplit))}px)`,
                opacity: lerp(1, 0.15, smooth(tSplit))
              }}>
                built on decades.
              </span>
            </h1>
            <p className="lede" style={{
              margin: '28px auto 0',
              textAlign: 'center',
              opacity: smooth(tHeadline) * (1 - tSplit)
            }}>
              Institutional research across MENA & frontier markets — equity, macro, and thematic coverage used by <em>420+</em> buy-side desks.
            </p>
          </div>
        </div>

        {/* Dashboard phase */}
        <div className="hero-dashboard" style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: dashOp
        }}>
          <div style={{
            transform: `scale(${dashScale})`,
            width: 'min(1180px, 92vw)',
            transformOrigin: 'center'
          }}>
            <AssemblingDashboard progress={tUI} />
          </div>
        </div>

        {/* Progress indicator */}
        <div style={{
          position: 'absolute',
          left: 56,
          right: 56,
          bottom: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          fontFamily: 'var(--mono)',
          fontSize: 11,
          color: 'var(--ink-faint)'
        }}>
          <span className="caps" style={{ color: 'var(--ink-dim)' }}>Scroll</span>
          <div style={{ flex: 1, height: 1, background: 'var(--rule)', position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: `${p * 100}%`,
              background: 'var(--accent)'
            }} />
          </div>
          <span>{String(Math.round(p * 100)).padStart(3, '0')}%</span>
        </div>
      </div>
    </section>
  );
}

// Main ScrollConcept Component
export default function ScrollConcept() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="scroll-concept-root">
      {/* Top nav */}
      <nav className="nav">
        <div className="nav-logo">
          <div className="mark"></div>
          <span>EFG Hermes Research</span>
        </div>
        <div className="nav-links">
          <a href="#coverage">Coverage</a>
          <a href="#analysts">Analysts</a>
          <a href="#insights">Insights</a>
        </div>
        <a href="#" className="nav-cta">Request Access</a>
      </nav>

      {/* Hero scroll section */}
      <HeroSafe />

      {/* Tweaks panel */}
      <div className="tweaks-panel">
        <h3>Prototype Tweaks</h3>
        <div className="tweak-row">
          <label>Theme</label>
          <div className="tweak-toggle">
            <button
              className={theme === 'dark' ? 'on' : ''}
              onClick={() => setTheme('dark')}
            >
              Dark
            </button>
            <button
              className={theme === 'light' ? 'on' : ''}
              onClick={() => setTheme('light')}
            >
              Light
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
