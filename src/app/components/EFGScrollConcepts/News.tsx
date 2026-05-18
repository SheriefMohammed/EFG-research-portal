import { useState, useRef } from 'react';
import { useScrollProgress, clamp, range, lerp, smooth, useInView } from './hooks';

const NEWS = [
  {
    id: 1,
    tag: 'Egypt',
    date: 'Apr 17',
    read: '4 min',
    title: 'FX normalization: what sticks after the float',
    dek: 'Eighteen months in, the real economy is only now metabolizing the new exchange regime. Banks first, consumer staples next.',
    author: 'Mohamed Abu Basha',
    role: 'Head of Macro',
    kind: 'Macro',
  },
  {
    id: 2,
    tag: 'Saudi Arabia',
    date: 'Apr 17',
    read: '6 min',
    title: 'Giga-projects and the private sector multiplier',
    dek: 'PIF capex is the headline; the second-order effects on building materials, logistics, and mid-cap industrials are the trade.',
    author: 'Rawan Oueidat',
    role: 'Lead · KSA Equities',
    kind: 'Equity',
  },
  {
    id: 3,
    tag: 'UAE',
    date: 'Apr 16',
    read: '3 min',
    title: 'Real estate: late cycle, but not the cycle you think',
    dek: 'Supply is back, prices are cooling, and yet velocity is holding up. The mix is rotating from speculative to income.',
    author: 'Ali Khalpey',
    role: 'Financials · GCC',
    kind: 'Equity',
  },
  {
    id: 4,
    tag: 'Pakistan',
    date: 'Apr 16',
    read: '5 min',
    title: 'Frontier re-rating: banks, cement, fertilizer',
    dek: 'IMF discipline plus political durability is a rare combination. We take the over on KSE100 earnings for 2026.',
    author: 'Ayub Ansari',
    role: 'Lead · Frontier',
    kind: 'Strategy',
  },
  {
    id: 5,
    tag: 'Morocco',
    date: 'Apr 15',
    read: '4 min',
    title: 'Phosphates, renewables, and the Africa bridge',
    dek: "OCP's capex cycle is the headline; the untold story is the renewable corridor to Europe and its multiplier on utilities.",
    author: 'Jihane Benmansour',
    role: 'MENA Macro',
    kind: 'Macro',
  },
  {
    id: 6,
    tag: 'GCC',
    date: 'Apr 15',
    read: '7 min',
    title: 'Banks: deposit beta and the end of easy NIMs',
    dek: 'Repricing is done on the asset side; the fight from here is funding. We prefer names with sticky corporate deposit franchises.',
    author: 'Elena Sanchez-Cabezudo',
    role: 'Head of Banks Research',
    kind: 'Equity',
  },
];

const FILTERS = ['All', 'Macro', 'Equity', 'Strategy'];

export function NewsSafe() {
  const [filter, setFilter] = useState('All');
  const list = filter === 'All' ? NEWS : NEWS.filter((n) => n.kind === filter);
  const featured = list[0] || NEWS[0];
  const rest = list.slice(1);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, '0px 0px -15% 0px');

  return (
    <section ref={ref} style={{ padding: '0 0 160px', background: '#F7F7F5' }}>
      <div className="shell">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, gap: 40, flexWrap: 'wrap', marginTop: 100 }}>
          <div style={{ maxWidth: 720 }}>
            <div className="section-label" style={{ color: '#A7A6A6' }}>Latest</div>
            <h2 className="section-title" style={{ color: '#1D1D1B' }}>
              Research <span className="serif" style={{ fontStyle: 'italic', color: '#124734' }}>in print.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="mono"
                style={{
                  padding: '8px 16px',
                  fontSize: 11,
                  fontFamily: 'var(--mono)',
                  background: filter === f ? '#124734' : 'transparent',
                  color: filter === f ? '#FFF' : '#555',
                  border: '1px solid ' + (filter === f ? '#124734' : '#DDD'),
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'start' }}>
          <article style={{
            cursor: 'pointer',
            opacity: inView ? 1 : 0,
            transform: `translateY(${inView ? 0 : 50}px) scale(${inView ? 1 : 0.96})`,
            transition: 'opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1), filter 300ms ease',
            filter: 'brightness(1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-6px) scale(1)';
            e.currentTarget.style.filter = 'brightness(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0px) scale(1)';
            e.currentTarget.style.filter = 'brightness(1)';
          }}
          >
            <div style={{
              width: '100%',
              aspectRatio: '16/10',
              background: 'linear-gradient(140deg, #124734, #0B2218)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: 32,
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 4,
            }}>
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.22 }} viewBox="0 0 600 400">
                <g stroke="#A2AD01" strokeWidth="1.5" fill="none">
                  <path d="M0,280 L80,260 L160,240 L240,190 L320,210 L400,140 L480,160 L560,100 L600,120" />
                  <path d="M0,320 L80,310 L160,300 L240,260 L320,280 L400,220 L480,240 L560,180 L600,200" opacity="0.5" />
                </g>
                {[80, 160, 240, 320, 400, 480, 560].map((x, i) => (
                  <circle key={i} cx={x} cy={[260, 240, 190, 210, 140, 160, 100][i]} r="3" fill="#A2AD01" />
                ))}
              </svg>
              <div className="mono" style={{
                position: 'absolute',
                top: 24,
                left: 32,
                fontSize: 10,
                color: '#A2AD01',
                letterSpacing: '0.12em',
              }}>
                {featured.kind.toUpperCase()} · {featured.tag.toUpperCase()}
              </div>
            </div>
            <div style={{ padding: '28px 0' }}>
              <div className="mono" style={{ fontSize: 11, color: '#A7A6A6', letterSpacing: '0.1em', marginBottom: 14 }}>
                {featured.date.toUpperCase()} · {featured.read.toUpperCase()}
              </div>
              <h3 style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(28px, 3vw, 42px)',
                lineHeight: 1.1,
                color: '#1D1D1B',
                marginBottom: 16,
                letterSpacing: '-0.015em',
              }}>
                {featured.title}
              </h3>
              <p style={{ fontSize: 17, color: '#555', lineHeight: 1.55, marginBottom: 20, maxWidth: 620 }}>
                {featured.dek}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#1D1D1B' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#D7D9B6' }} />
                <div>
                  <div style={{ fontWeight: 500 }}>{featured.author}</div>
                  <div style={{ fontSize: 11, color: '#A7A6A6' }}>{featured.role}</div>
                </div>
              </div>
            </div>
          </article>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {rest.map((n, i) => (
              <article key={n.id} style={{
                paddingBottom: 28,
                borderBottom: '1px solid #E8E8E4',
                cursor: 'pointer',
                opacity: inView ? 1 : 0,
                transform: `translateY(${inView ? 0 : 50}px) scale(${inView ? 1 : 0.96})`,
                transition: `opacity 800ms cubic-bezier(0.22, 1, 0.36, 1) ${120 + i * 140}ms, transform 800ms cubic-bezier(0.22, 1, 0.36, 1) ${120 + i * 140}ms, filter 300ms ease`,
                filter: 'brightness(1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1)';
                e.currentTarget.style.filter = 'brightness(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px) scale(1)';
                e.currentTarget.style.filter = 'brightness(1)';
              }}
              >
                <div className="mono" style={{ fontSize: 10, color: '#A2AD01', letterSpacing: '0.12em', marginBottom: 8 }}>
                  {n.kind.toUpperCase()} · {n.tag.toUpperCase()}
                </div>
                <h4 style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 22,
                  lineHeight: 1.2,
                  color: '#1D1D1B',
                  marginBottom: 8,
                  letterSpacing: '-0.01em',
                }}>
                  {n.title}
                </h4>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.5, marginBottom: 10 }}>
                  {n.dek}
                </p>
                <div className="mono" style={{ fontSize: 11, color: '#A7A6A6', letterSpacing: '0.08em' }}>
                  {n.date.toUpperCase()} · {n.read.toUpperCase()} · {n.author.toUpperCase()}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 80 }}>
          <a href="#" style={{
            display: 'inline-block',
            padding: '16px 32px',
            background: '#124734',
            color: '#fff',
            fontFamily: 'var(--mono)',
            fontSize: 12,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}>
            Browse all reports →
          </a>
        </div>
      </div>
    </section>
  );
}

export function NewsBold() {
  const ref = useRef<HTMLElement>(null);
  const p = useScrollProgress(ref);
  const cards = NEWS;

  // Horizontal track positioning - smooth panning across scroll
  const trackT = range(p, 0.1, 0.9);
  const offset = -trackT * (cards.length - 1) * 520;

  // Focus state - immediate response with tighter range for faster transitions
  const focusT = range(p, 0, 0.85);

  return (
    <section ref={ref} className="pinned" style={{ height: '380vh' }}>
      <div className="sticky" style={{
        background: '#0B2218',
        color: '#E3E3E2',
        padding: '0 56px 56px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, marginTop: 56 }}>
          <div>
            <div className="section-label" style={{ color: '#A2AD01' }}>Latest</div>
            <h2 className="section-title" style={{ color: '#FFF', fontSize: 'clamp(32px, 4vw, 72px)', maxWidth: 820, lineHeight: 0.95 }}>
              The desk,<br /><span className="serif" style={{ fontStyle: 'italic', color: '#A2AD01' }}>this week.</span>
            </h2>
          </div>
          <div style={{ textAlign: 'right', fontFamily: 'var(--mono)', fontSize: 11, color: '#A7A6A6', lineHeight: 1.6 }}>
            <div>{String(Math.min(Math.floor(focusT * cards.length) + 1, cards.length)).padStart(2, '0')} / {String(cards.length).padStart(2, '0')}</div>
            <div style={{ color: '#A2AD01' }}>{String(Math.round(p * 100)).padStart(3, '0')}% · SCROLL</div>
          </div>
        </div>

        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <div style={{
            display: 'flex',
            gap: 32,
            position: 'absolute',
            transform: `translateX(${offset}px)`,
            willChange: 'transform',
            height: '100%',
          }}>
            {cards.map((n, i) => {
              const focusProgress = clamp(focusT * cards.length);
              const focusIndex = Math.floor(focusProgress);
              const isFocused = i === focusIndex;
              const focusTransition = clamp(focusProgress - i);

              return (
                <article key={n.id} style={{
                  width: 488,
                  flexShrink: 0,
                  background: '#124734',
                  padding: 36,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transform: `translateY(${isFocused ? lerp(8, -8, focusTransition) : 0}px) scale(${isFocused ? 1 : 0.96})`,
                  opacity: isFocused ? lerp(0.45, 1, focusTransition) : 0.45,
                  filter: `brightness(${isFocused ? 100 : 75}%)`,
                  zIndex: isFocused ? 3 : 1,
                  transition: 'all 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (isFocused) {
                    e.currentTarget.style.transform = 'translateY(-14px) scale(1.01)';
                    e.currentTarget.style.filter = 'brightness(105%)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (isFocused) {
                    e.currentTarget.style.transform = `translateY(${lerp(8, -8, focusTransition)}px) scale(1)`;
                    e.currentTarget.style.filter = 'brightness(100%)';
                  }
                }}
                >
                  <div>
                    <div className="mono" style={{ fontSize: 10, color: '#A2AD01', letterSpacing: '0.14em', marginBottom: 24 }}>
                      {String(i + 1).padStart(2, '0')} · {n.kind.toUpperCase()} · {n.tag.toUpperCase()}
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 34,
                      lineHeight: 1.1,
                      color: '#FFF',
                      marginBottom: 20,
                      letterSpacing: '-0.015em',
                    }}>
                      {n.title}
                    </h3>
                    <p style={{ fontSize: 16, color: '#C9CDBE', lineHeight: 1.55 }}>
                      {n.dek}
                    </p>
                  </div>
                  <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: 14, color: '#FFF' }}>{n.author}</div>
                      <div className="mono" style={{ fontSize: 10, color: '#A7A6A6', letterSpacing: '0.08em', marginTop: 4 }}>{n.role.toUpperCase()}</div>
                    </div>
                    <div className="mono" style={{ fontSize: 10, color: '#A2AD01', letterSpacing: '0.1em' }}>
                      {n.date.toUpperCase()} · {n.read.toUpperCase()}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 6, marginTop: 28, justifyContent: 'center' }}>
          {cards.map((_, i) => {
            const idx = Math.floor(focusT * cards.length);
            return (
              <div key={i} style={{
                width: i === idx ? 32 : 8,
                height: 2,
                background: i === idx ? '#A2AD01' : 'rgba(255,255,255,0.2)',
                transition: 'width 300ms ease, background 300ms ease',
              }} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
