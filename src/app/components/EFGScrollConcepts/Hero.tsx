import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useScrollProgress, range, lerp, smooth, clamp } from './hooks';
import { SearchDropdown } from './SearchDropdown';

export function HeroSafe() {
  const pinRef = useRef<HTMLElement>(null);
  const p = useScrollProgress(pinRef);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const tHeadline = range(p, 0.0, 0.25);
  const tSplit = range(p, 0.25, 0.45);
  const tUI = range(p, 0.4, 0.75);

  const dashScale = lerp(0.82, 1.0, smooth(tUI));
  const dashOp = smooth(tUI);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.search-container')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <section ref={pinRef} className="pinned" style={{ height: '380vh' }}>
      <div className="sticky dots">
        {/* Editorial headline */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 1 - tSplit,
            pointerEvents: 'none',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: 1200, padding: '0 40px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>
              <span style={{ opacity: smooth(tHeadline) }}>
                EFG Hermes Research · 2026
              </span>
            </div>
            <h1
              className="hero-title"
              style={{
                transform: `scale(${lerp(1.08, 1, smooth(tHeadline))})`,
                letterSpacing: `${lerp(-0.02, -0.035, smooth(tHeadline))}em`,
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  transform: `translateY(${lerp(-40, 0, smooth(tHeadline))}px) translateX(${lerp(0, -260, smooth(tSplit))}px)`,
                  opacity: lerp(1, 0.15, smooth(tSplit)),
                }}
              >
                Conviction
              </span>{' '}
              <span
                className="serif"
                style={{
                  fontStyle: 'italic',
                  color: 'var(--accent)',
                  transform: `translateY(${lerp(40, 0, smooth(tHeadline))}px)`,
                  display: 'inline-block',
                  opacity: lerp(1, 0.25, smooth(tSplit)),
                }}
              >
                in numbers
              </span>
              <br />
              <span
                style={{
                  display: 'inline-block',
                  transform: `translateX(${lerp(0, 260, smooth(tSplit))}px)`,
                  opacity: lerp(1, 0.15, smooth(tSplit)),
                }}
              >
                built on decades.
              </span>
            </h1>
            <p
              className="lede"
              style={{
                margin: '28px auto 0',
                textAlign: 'center',
                opacity: smooth(tHeadline) * (1 - tSplit),
              }}
            >
              Institutional research across MENA & frontier markets — equity, macro, and
              thematic coverage used by <em>420+</em> buy-side desks.
            </p>
            <div
              className="search-container"
              style={{
                marginTop: 32,
                maxWidth: 560,
                margin: '32px auto 0',
                opacity: smooth(tHeadline) * (1 - tSplit),
                position: 'relative',
                pointerEvents: 'auto',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.95)',
                  borderRadius: 4,
                  padding: '4px 4px 4px 20px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                }}
              >
                <input
                  type="text"
                  placeholder="Search research, transcripts, filings..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowDropdown(true)}
                  style={{
                    flex: 1,
                    border: 'none',
                    background: 'transparent',
                    fontSize: 14,
                    color: '#1D1D1B',
                    outline: 'none',
                    padding: '10px 0',
                  }}
                />
                <button
                  onClick={() => {
                    if (searchQuery.trim()) {
                      handleNavigate(`/search?q=${encodeURIComponent(searchQuery)}`);
                    }
                  }}
                  style={{
                    background: 'var(--accent)',
                    border: 'none',
                    borderRadius: 2,
                    padding: '10px 20px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M16 16L12.65 12.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              {showDropdown && searchQuery.trim() && (
                <SearchDropdown
                  query={searchQuery}
                  onClose={() => setShowDropdown(false)}
                  onNavigate={handleNavigate}
                />
              )}
            </div>
          </div>
        </div>

        {/* Dashboard assembles */}
        <div
          className="hero-dashboard"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: dashOp,
            pointerEvents: dashOp > 0.5 ? 'auto' : 'none',
          }}
        >
          <div
            style={{
              transform: `scale(${dashScale})`,
              width: 'min(1180px, 92vw)',
              transformOrigin: 'center',
            }}
          >
            <AssemblingDashboard progress={tUI} />
          </div>
        </div>

        {/* Bottom progress bar */}
        <div
          style={{
            position: 'absolute',
            left: 56,
            right: 56,
            bottom: 32,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontFamily: 'var(--mono)',
            fontSize: 11,
            color: 'var(--ink-faint)',
          }}
        >
          <span className="caps" style={{ color: 'var(--ink-dim)' }}>
            Scroll
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--rule)', position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: `${p * 100}%`,
                background: 'var(--accent)',
              }}
            />
          </div>
          <span>{String(Math.round(p * 100)).padStart(3, '0')}%</span>
        </div>
      </div>
    </section>
  );
}

export function AssemblingDashboard({ progress }: { progress: number }) {
  const parts = [
    range(progress, 0.0, 0.25),
    range(progress, 0.15, 0.4),
    range(progress, 0.25, 0.5),
    range(progress, 0.4, 0.65),
    range(progress, 0.55, 0.8),
    range(progress, 0.7, 1.0),
  ];

  return (
    <div
      style={{
        background: 'var(--bg-2)',
        borderRadius: 14,
        border: '1px solid var(--rule-strong)',
        opacity: parts[0],
        transform: `translateY(${lerp(40, 0, parts[0])}px)`,
        boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '14px 20px',
          borderBottom: '1px solid var(--rule)',
          fontSize: 12,
          fontFamily: 'var(--mono)',
        }}
      >
        <div style={{ display: 'flex', gap: 16, color: 'var(--ink-dim)' }}>
          <span>EFG · Research Terminal</span>
          <span>·</span>
          <span>MENA / Equities</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <span className="caps" style={{ color: 'var(--accent)' }}>
            Live
          </span>
          <span style={{ color: 'var(--ink-dim)' }}>15:24 GST</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 260px', minHeight: 460 }}>
        {/* Left nav */}
        <div
          style={{
            borderRight: '1px solid var(--rule)',
            padding: 18,
            opacity: parts[1],
            transform: `translateX(${lerp(-20, 0, parts[1])}px)`,
          }}
        >
          {['Markets', 'Coverage', 'Reports', 'Analysts', 'Screener', 'Macro'].map((x, i) => (
            <div
              key={x}
              style={{
                padding: '10px 0',
                fontSize: 13,
                color: i === 2 ? 'var(--ink)' : 'var(--ink-dim)',
                borderLeft: i === 2 ? '2px solid var(--accent)' : '2px solid transparent',
                paddingLeft: 10,
                marginLeft: -10,
              }}
            >
              {x}
            </div>
          ))}
        </div>

        {/* Center */}
        <div style={{ padding: 20 }}>
          <div
            style={{
              opacity: parts[2],
              transform: `translateY(${lerp(20, 0, parts[2])}px)`,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, alignItems: 'flex-end' }}>
              <div>
                <div style={{ fontSize: 11, color: 'var(--ink-dim)', fontFamily: 'var(--mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Research Highlights
                </div>
                <div style={{ fontSize: 20, fontFamily: 'var(--serif)', marginTop: 4 }}>
                  Latest from the desk
                </div>
              </div>
              <div style={{ fontSize: 11, color: 'var(--accent)', fontFamily: 'var(--mono)' }}>
                6 new reports
              </div>
            </div>

            {/* Featured Research Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
              {[
                {
                  tag: 'MACRO',
                  title: 'Egypt FX normalization deepens',
                  author: 'M. Abu Basha',
                  date: 'Apr 17',
                  type: 'Thematic',
                },
                {
                  tag: 'EQUITY',
                  title: 'GCC Banks: NIM resilience theme',
                  author: 'E. Sanchez',
                  date: 'Apr 16',
                  type: 'Sector',
                },
                {
                  tag: 'STRATEGY',
                  title: 'KSE100 earnings take the over',
                  author: 'A. Ansari',
                  date: 'Apr 15',
                  type: 'Frontier',
                },
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    padding: '12px 14px',
                    border: '1px solid var(--rule)',
                    borderRadius: 6,
                    background: i === 0 ? 'var(--bg-3)' : 'transparent',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                      <span
                        style={{
                          fontSize: 9,
                          fontFamily: 'var(--mono)',
                          color: 'var(--accent)',
                          letterSpacing: '0.1em',
                        }}
                      >
                        {r.tag}
                      </span>
                      <span style={{ fontSize: 9, color: 'var(--ink-faint)' }}>·</span>
                      <span style={{ fontSize: 9, color: 'var(--ink-faint)' }}>{r.type}</span>
                    </div>
                    <div style={{ fontSize: 13, fontFamily: 'var(--serif)', marginBottom: 3 }}>
                      {r.title}
                    </div>
                    <div style={{ fontSize: 10, color: 'var(--ink-dim)' }}>
                      {r.author} · {r.date}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      color: 'var(--ink-faint)',
                      marginLeft: 12,
                    }}
                  >
                    →
                  </div>
                </div>
              ))}
            </div>

            {/* Coverage Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 10,
                marginTop: 16,
                opacity: parts[3],
                transform: `translateY(${lerp(20, 0, parts[3])}px)`,
              }}
            >
              {[
                ['Coverage', '420', 'issuers'],
                ['Analysts', '56', 'across 9 desks'],
                ['Reports YTD', '1,284', "+18% vs '25"],
              ].map(([k, v, s]) => (
                <div key={k} style={{ padding: 14, border: '1px solid var(--rule)', borderRadius: 8 }}>
                  <div style={{ fontSize: 10, color: 'var(--ink-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {k}
                  </div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 26, marginTop: 6 }}>{v}</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-faint)' }}>{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right rail */}
        <div
          style={{
            borderLeft: '1px solid var(--rule)',
            padding: 18,
            opacity: parts[4],
            transform: `translateX(${lerp(20, 0, parts[4])}px)`,
            fontSize: 12,
          }}
        >
          <div className="caps" style={{ color: 'var(--ink-dim)', marginBottom: 10 }}>
            Top Picks
          </div>
          {[
            ['COMI', 'Commercial Intl', '+2.14%', 'BUY'],
            ['EMAAR', 'Emaar Properties', '+0.87%', 'BUY'],
            ['STC', 'Saudi Telecom', '-0.42%', 'HOLD'],
            ['QNBK', 'QNB Group', '+1.33%', 'BUY'],
          ].map(([s, n, c, r]) => (
            <div
              key={s}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '9px 0',
                borderBottom: '1px solid var(--rule)',
              }}
            >
              <div>
                <div>{s}</div>
                <div style={{ color: 'var(--ink-faint)', fontSize: 10 }}>{n}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    color: c.startsWith('+') ? 'var(--green)' : 'var(--red)',
                  }}
                >
                  {c}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: 'var(--accent)',
                    fontFamily: 'var(--mono)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {r}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroBold() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.search-container')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <section className="pinned" style={{ height: '300vh' }}>
      <div className="sticky" style={{ background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: 1100, padding: '0 40px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span>EFG Hermes Research · MENA & Frontier</span>
          </div>
          <h1 className="hero-title">
            The <span className="serif" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>signal</span> beneath
            <br />
            emerging market noise.
          </h1>
          <p className="lede" style={{ marginTop: 28, textAlign: 'center' }}>
            Thirty years of on-the-ground MENA research. Delivered in a portal built for desks that move before the news does.
          </p>
          <div className="search-container" style={{ marginTop: 32, maxWidth: 560, margin: '32px auto 0', position: 'relative', pointerEvents: 'auto' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.95)',
                borderRadius: 4,
                padding: '4px 4px 4px 20px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
              }}
            >
              <input
                type="text"
                placeholder="Search research, transcripts, filings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowDropdown(true)}
                style={{
                  flex: 1,
                  border: 'none',
                  background: 'transparent',
                  fontSize: 14,
                  color: '#1D1D1B',
                  outline: 'none',
                  padding: '10px 0',
                }}
              />
              <button
                onClick={() => {
                  if (searchQuery.trim()) {
                    handleNavigate(`/search?q=${encodeURIComponent(searchQuery)}`);
                  }
                }}
                style={{
                  background: 'var(--accent)',
                  border: 'none',
                  borderRadius: 2,
                  padding: '10px 20px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M16 16L12.65 12.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            {showDropdown && searchQuery.trim() && (
              <SearchDropdown
                query={searchQuery}
                onClose={() => setShowDropdown(false)}
                onNavigate={handleNavigate}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
