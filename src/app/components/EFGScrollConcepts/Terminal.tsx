import { useRef } from 'react';
import { useScrollProgress, clamp, range, lerp } from './hooks';
import { AssemblingDashboard } from './Hero';

export function TerminalSafe() {
  const ref = useRef<HTMLElement>(null);
  const p = useScrollProgress(ref);
  const features = [
    { title: 'Unified search', desc: 'One prompt across reports, filings, earnings transcripts, and analyst models.' },
    { title: 'Live sector flows', desc: 'Real-time order flow and analyst conviction deltas, streamed to the desktop.' },
    { title: 'Report workbench', desc: 'Mark up any PDF, attach comments, and sync with your OMS in a single pane.' },
  ];

  return (
    <section ref={ref} style={{ padding: '160px 0' }}>
      <div className="shell">
        <div style={{ textAlign: 'center', marginBottom: 60, opacity: clamp(p * 3) }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>The terminal</div>
          <h2 className="section-title" style={{ maxWidth: 900, margin: '0 auto' }}>
            A workbench <span className="serif" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>built</span> for the buy-side.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            {features.map((f, i) => {
              const t = range(p, i * 0.15, i * 0.15 + 0.3);
              return (
                <div key={f.title} style={{
                  padding: '28px 0',
                  borderTop: '1px solid var(--rule)',
                  opacity: clamp(0.2 + t * 0.8),
                  transform: `translateY(${lerp(12, 0, t)}px)`,
                }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 30, marginBottom: 10 }}>{f.title}</div>
                  <div style={{ color: 'var(--ink-dim)', fontSize: 16, lineHeight: 1.5 }}>{f.desc}</div>
                </div>
              );
            })}
          </div>
          <div style={{
            transform: `translateY(${lerp(30, -30, p)}px)`,
          }}>
            <AssemblingDashboard progress={1} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function TerminalBold() {
  const ref = useRef<HTMLElement>(null);
  const p = useScrollProgress(ref);
  const highlights = [
    {
      title: 'Unified search',
      sub: 'One prompt across reports, filings, earnings calls, analyst models.',
      x: 62,
      y: 22,
    },
    {
      title: 'Live conviction deltas',
      sub: 'Watch analyst stances shift the moment they update.',
      x: 20,
      y: 48,
    },
    {
      title: 'Report workbench',
      sub: 'Mark up any PDF, sync annotations with your OMS.',
      x: 70,
      y: 72,
    },
  ];
  const activeIdx = clamp(Math.floor(p * highlights.length * 0.99), 0, highlights.length - 1);

  return (
    <section ref={ref} className="pinned" style={{ height: '320vh' }}>
      <div className="sticky" style={{
        background: 'radial-gradient(ellipse at 50% 0%, var(--bg-3), var(--bg))',
        padding: '100px 56px 40px',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>The terminal</div>
          <h2 className="section-title">
            A workbench <span className="serif" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>built</span> for the desk.
          </h2>
        </div>

        <div style={{
          position: 'relative',
          margin: '40px auto 0',
          width: 'min(1240px, 92vw)',
          transform: `scale(${lerp(1.04, 1, clamp(p * 4))})`,
          transformOrigin: 'top center',
        }}>
          <AssemblingDashboard progress={1} />

          {highlights.map((h, i) => {
            const on = i === activeIdx ? 1 : 0;
            return (
              <div key={i} style={{
                position: 'absolute',
                left: `${h.x}%`,
                top: `${h.y}%`,
                opacity: lerp(0.15, 1, on),
                transform: `translate(-50%, -50%) scale(${lerp(0.92, 1, on)})`,
                transition: 'all .5s cubic-bezier(.2,.7,.2,1)',
                pointerEvents: 'none',
                zIndex: on ? 5 : 2,
              }}>
                <div style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--accent)',
                  borderRadius: 10,
                  padding: '14px 18px',
                  maxWidth: 280,
                  boxShadow: on ? '0 12px 40px rgba(0,0,0,0.6)' : 'none',
                }}>
                  <div className="mono caps" style={{ color: 'var(--accent)', fontSize: 10 }}>
                    {String(i + 1).padStart(2, '0')} / {String(highlights.length).padStart(2, '0')}
                  </div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 22, marginTop: 6, lineHeight: 1.1 }}>{h.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-dim)', marginTop: 6, lineHeight: 1.4 }}>{h.sub}</div>
                </div>
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '100%',
                  marginTop: 14,
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  transform: 'translateX(-50%)',
                  boxShadow: `0 0 0 ${6 + Math.sin(Date.now() / 400) * 2}px rgba(162,173,1,0.18)`,
                }} />
              </div>
            );
          })}
        </div>

        <div style={{
          position: 'absolute',
          left: 56,
          right: 56,
          bottom: 40,
          display: 'flex',
          gap: 20,
          justifyContent: 'center',
          fontFamily: 'var(--mono)',
          fontSize: 11,
        }}>
          {highlights.map((h, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              color: i === activeIdx ? 'var(--accent)' : 'var(--ink-faint)',
            }}>
              <div style={{
                width: i === activeIdx ? 28 : 14,
                height: 2,
                background: 'currentColor',
                transition: 'width .4s',
              }} />
              <span>{h.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
