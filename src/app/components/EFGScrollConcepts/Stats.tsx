import { useRef } from 'react';
import { useScrollProgress, clamp, range, smooth, lerp } from './hooks';

export function StatsSafe() {
  const ref = useRef<HTMLElement>(null);
  const p = useScrollProgress(ref);
  const stats = [
    { value: 420, suffix: '', label: 'Issuers under coverage', note: 'MENA + frontier markets' },
    { value: 56, suffix: '', label: 'Senior analysts', note: 'Embedded across 9 desks' },
    { value: 30, suffix: '+', label: 'Years of research', note: 'Through every regional cycle' },
    { value: 1284, suffix: '', label: 'Reports published YTD', note: '+18% vs. 2025' },
  ];

  return (
    <section ref={ref} style={{ padding: '160px 0', background: 'var(--bg-2)' }}>
      <div className="shell">
        <div className="section-label">By the numbers</div>
        <h2 className="section-title" style={{ maxWidth: 900, marginBottom: 80 }}>
          Three decades of <span className="serif" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>conviction</span>, compounded.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--rule)' }}>
          {stats.map((s, i) => {
            const t = range(p, i * 0.1, i * 0.1 + 0.4);
            const shown = Math.round(s.value * smooth(t));
            return (
              <div key={s.label} style={{
                background: 'var(--bg-2)',
                padding: '40px 32px',
              }}>
                <div style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 88,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                }}>
                  {shown.toLocaleString()}{s.suffix}
                </div>
                <div style={{ color: 'var(--ink)', marginTop: 12, fontSize: 15 }}>{s.label}</div>
                <div style={{ color: 'var(--ink-faint)', marginTop: 4, fontSize: 13 }}>{s.note}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function StatsBold() {
  const ref = useRef<HTMLElement>(null);
  const p = useScrollProgress(ref);
  const steps = [
    { num: 420, label: 'issuers under active coverage', sub: 'Every name that matters in MENA + frontier.' },
    { num: 56, label: 'senior analysts on the ground', sub: 'Cairo · Riyadh · Dubai · Nairobi · Karachi.' },
    { num: 30, label: 'years through every cycle', sub: 'Since 1994. Founded with the region.' },
    { num: 1284, label: 'reports published this year', sub: 'One every 3 hours, on average.' },
  ];
  const idx = clamp(Math.floor(p * steps.length * 0.999), 0, steps.length - 1);
  const localP = (p * steps.length) - idx;
  const step = steps[idx];
  const counted = Math.round(step.num * smooth(clamp(localP * 1.4)));

  return (
    <section ref={ref} className="pinned" style={{ height: '340vh', background: 'var(--bg-2)' }}>
      <div className="sticky" style={{ display: 'flex' }}>
        <div style={{
          flexBasis: '38%',
          padding: '0 56px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 24,
          borderRight: '1px solid var(--rule)',
        }}>
          <div className="section-label">By the numbers</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(34px, 3.6vw, 56px)' }}>
            The research floor,
            <br />
            <span className="serif" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>in four numbers.</span>
          </h2>

          <div style={{ marginTop: 40 }}>
            {steps.map((s, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                padding: '14px 0',
                borderTop: '1px solid var(--rule)',
                opacity: i === idx ? 1 : 0.4,
                transition: 'opacity .4s',
              }}>
                <span className="mono" style={{
                  color: i === idx ? 'var(--accent)' : 'var(--ink-faint)',
                  fontSize: 11,
                }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: 14, color: i === idx ? 'var(--ink)' : 'var(--ink-dim)' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '0 80px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: 60,
            transform: `translateY(-50%) translateX(${-localP * 80}px)`,
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(240px, 40vw, 520px)',
            lineHeight: 0.85,
            letterSpacing: '-0.05em',
            color: 'var(--accent)',
            whiteSpace: 'nowrap',
            opacity: 0.96,
          }}>
            {counted.toLocaleString()}
          </div>
          <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto', marginBottom: 80 }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 40, maxWidth: 620, lineHeight: 1.1 }}>
              {step.label}
            </div>
            <div style={{ marginTop: 16, color: 'var(--ink-dim)', fontSize: 17, maxWidth: 560 }}>
              {step.sub}
            </div>
          </div>

          <div style={{
            position: 'absolute',
            left: 80,
            right: 80,
            bottom: 40,
            display: 'flex',
            gap: 6,
          }}>
            {steps.map((_, i) => (
              <div key={i} style={{ flex: 1, height: 2, background: 'var(--rule)', overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: `${clamp((p * steps.length) - i) * 100}%`,
                  background: 'var(--accent)',
                }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
