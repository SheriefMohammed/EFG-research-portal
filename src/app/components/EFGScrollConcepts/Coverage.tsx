import { useRef } from 'react';
import { useScrollProgress, clamp, range, lerp, smooth } from './hooks';

interface StatProps {
  big: string;
  label: string;
}

function Stat({ big, label }: StatProps) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 44, lineHeight: 1 }}>{big}</div>
      <div className="caps" style={{ color: 'var(--ink-dim)', marginTop: 6 }}>{label}</div>
    </div>
  );
}

export function CoverageSafe() {
  const ref = useRef<HTMLElement>(null);
  const p = useScrollProgress(ref);
  const sectors = [
    {
      name: 'Banks & Financials',
      code: 'BNK',
      issuers: 68,
      change: '+1.2%',
      up: true,
      note: 'Margin expansion theme — Saudi / UAE leading.',
    },
    {
      name: 'Real Estate',
      code: 'RE',
      issuers: 41,
      change: '+0.6%',
      up: true,
      note: 'UAE cycle maturity, Egypt reform optionality.',
    },
    {
      name: 'Energy & Petrochem',
      code: 'NRG',
      issuers: 52,
      change: '-0.3%',
      up: false,
      note: 'Crack spreads normalizing; selective entry.',
    },
    {
      name: 'Consumer & Retail',
      code: 'CON',
      issuers: 47,
      change: '+0.9%',
      up: true,
      note: 'F&B modernization, Gulf tourism tailwinds.',
    },
    {
      name: 'Telecom & Tech',
      code: 'TMT',
      issuers: 33,
      change: '+2.1%',
      up: true,
      note: 'AI capex, data-center land rush.',
    },
    {
      name: 'Healthcare',
      code: 'HLT',
      issuers: 28,
      change: '+0.4%',
      up: true,
      note: 'Insurance reform, pharma localization.',
    },
    {
      name: 'Industrials',
      code: 'IND',
      issuers: 51,
      change: '-0.1%',
      up: false,
      note: 'Giga-project suppliers; lumpy earnings.',
    },
    {
      name: 'Materials & Mining',
      code: 'MTR',
      issuers: 22,
      change: '+1.6%',
      up: true,
      note: 'Copper + lithium theme; Morocco phosphates.',
    },
  ];

  return (
    <section ref={ref} style={{ padding: '140px 0 160px', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        bottom: '-200px',
        left: 0,
        right: 0,
        height: '600px',
        background: 'linear-gradient(to bottom, rgba(247,247,245,0) 0%, rgba(247,247,245,0) 30%, rgba(247,247,245,0.015) 45%, rgba(247,247,245,0.04) 60%, rgba(247,247,245,0.08) 72%, rgba(247,247,245,0.12) 82%, rgba(247,247,245,0.10) 90%, rgba(247,247,245,0.05) 96%, rgba(247,247,245,0) 100%)',
        pointerEvents: 'none',
        zIndex: 10,
      }} />
      <div className="shell" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 120 }}>
            <div className="section-label">Coverage · 8 desks</div>
            <h2 className="section-title">
              Every sector that <br />
              <span className="serif" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>matters</span> in MENA.
            </h2>
            <p className="lede" style={{ marginTop: 24 }}>
              420 issuers under active coverage, updated by analysts embedded in Cairo, Riyadh, Dubai and Nairobi.
            </p>
            <div style={{ display: 'flex', gap: 32, marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--rule)' }}>
              <Stat big="420" label="Issuers" />
              <Stat big="56" label="Analysts" />
              <Stat big="9" label="Sectors" />
            </div>
          </div>

          <div>
            {sectors.map((s, i) => {
              const t = range(p, i * 0.08, i * 0.08 + 0.25);
              return (
                <div key={s.code} style={{
                  padding: '26px 0',
                  borderBottom: '1px solid var(--rule)',
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr auto 100px',
                  gap: 20,
                  alignItems: 'baseline',
                  opacity: clamp(0.15 + t * 0.85),
                  transform: `translateX(${lerp(-20, 0, t)}px)`,
                  transition: 'transform .3s ease-out',
                }}>
                  <span className="mono" style={{ color: 'var(--accent)' }}>{s.code}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 26, marginBottom: 6 }}>{s.name}</div>
                    <div style={{ color: 'var(--ink-dim)', fontSize: 14 }}>{s.note}</div>
                  </div>
                  <span className="mono" style={{ color: 'var(--ink-dim)' }}>{s.issuers} issuers</span>
                  <span className="mono" style={{ color: s.up ? 'var(--green)' : 'var(--red)', textAlign: 'right' }}>{s.change}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

interface CoveragePanelProps {
  data: {
    code: string;
    name: string;
    hero: string;
    metric: string;
    tag: string;
    description: string;
    highlights: string[];
  };
  focus: number;
  idx: number;
}

function CoveragePanel({ data, focus, idx }: CoveragePanelProps) {
  return (
    <div style={{
      height: '72vh',
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 40,
      padding: 48,
      background: 'linear-gradient(150deg, var(--bg-2), var(--bg-3))',
      border: '1px solid var(--rule-strong)',
      borderRadius: 20,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        right: -80,
        bottom: -180,
        fontFamily: 'var(--serif)',
        fontSize: 680,
        lineHeight: 1,
        color: 'var(--accent)',
        opacity: 0.06,
        letterSpacing: '-0.08em',
        pointerEvents: 'none',
      }}>
        {String(idx + 1).padStart(2, '0')}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div className="mono" style={{ color: 'var(--accent)', fontSize: 13, marginBottom: 20 }}>
            [ {data.code} · DESK {String(idx + 1).padStart(2, '0')} ]
          </div>
          <h3 style={{
            fontFamily: 'var(--serif)',
            fontWeight: 400,
            fontSize: 'clamp(44px, 5vw, 72px)',
            lineHeight: 1,
            letterSpacing: '-0.025em',
            marginBottom: 28,
          }}>
            {data.name}
          </h3>
          <p style={{ color: 'var(--ink-dim)', fontSize: 17, lineHeight: 1.5, maxWidth: 540 }}>
            {data.description}
          </p>
        </div>

        <div style={{ display: 'flex', gap: 40, alignItems: 'baseline' }}>
          <div>
            <div className="mono caps" style={{ color: 'var(--ink-faint)' }}>Issuers</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 56 }}>{data.hero}</div>
          </div>
          <div>
            <div className="mono caps" style={{ color: 'var(--ink-faint)' }}>30-day</div>
            <div style={{
              fontFamily: 'var(--mono)',
              fontSize: 24,
              color: data.metric.startsWith('+') ? 'var(--green)' : 'var(--red)',
            }}>
              {data.metric}
            </div>
          </div>
          <div>
            <div className="mono caps" style={{ color: 'var(--ink-faint)' }}>Stance</div>
            <div className="mono" style={{
              color: 'var(--accent)',
              fontSize: 14,
              marginTop: 8,
              padding: '4px 10px',
              border: '1px solid var(--accent)',
              borderRadius: 4,
              display: 'inline-block',
            }}>
              {data.tag}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div className="mono caps" style={{ color: 'var(--ink-faint)', marginBottom: 12 }}>Sector index · 1Y</div>
          <svg viewBox="0 0 400 140" style={{ width: '100%' }}>
            {[0, 1, 2].map((i) => (
              <line key={i} x1="0" x2="400" y1={40 * i + 20} y2={40 * i + 20} stroke="var(--rule)" />
            ))}
            <path
              d={`M0,${100 - idx * 6} C40,${90 - idx * 8} 80,${80 - idx * 4} 120,${75 + idx * 3} S200,${55} 240,${50 - idx * 2} S320,${40 - idx * 3} 400,${30 - idx * 5}`}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div>
          <div className="mono caps" style={{ color: 'var(--ink-faint)', marginBottom: 12 }}>Live theses</div>
          {data.highlights.map((h, i) => (
            <div key={h} style={{
              padding: '12px 0',
              borderTop: '1px solid var(--rule)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transform: `translateX(${lerp(10, 0, focus)}px)`,
              opacity: focus,
              transition: 'all .4s',
              transitionDelay: `${i * 60}ms`,
            }}>
              <span style={{ fontSize: 15 }}>{h}</span>
              <span className="mono" style={{ color: 'var(--accent)', fontSize: 11 }}>→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CoverageBold() {
  const ref = useRef<HTMLElement>(null);
  const p = useScrollProgress(ref);
  const panels = [
    {
      code: 'BNK',
      name: 'Banks & Financials',
      hero: '68',
      metric: '+1.2%',
      tag: 'OVERWEIGHT',
      description: 'MENA banks entering structural ROE regime. Saudi and UAE leading, Egypt catching up as FX clears.',
      highlights: ['Net interest margin resilience', 'Corporate loan book expansion', 'Cost-of-risk normalization'],
    },
    {
      code: 'RE',
      name: 'Real Estate',
      hero: '41',
      metric: '+0.6%',
      tag: 'OVERWEIGHT',
      description: 'UAE late cycle, Saudi giga-project ecosystem, Egypt offering asymmetric reform beta.',
      highlights: ['Off-plan launch pace', 'Rental yield vs. bond spreads', 'Mortgage penetration'],
    },
    {
      code: 'NRG',
      name: 'Energy & Petrochem',
      hero: '52',
      metric: '-0.3%',
      tag: 'NEUTRAL',
      description: 'Petrochem trough approaching; integrated refiners best positioned. Selective entry required.',
      highlights: ['Crack spread mean reversion', 'Capex discipline returning', 'ME-to-Asia trade flows'],
    },
    {
      code: 'TMT',
      name: 'Telecom, Media & Tech',
      hero: '33',
      metric: '+2.1%',
      tag: 'OVERWEIGHT',
      description: 'Data-center build-out, AI enablement spend, and regional cloud sovereignty creating a new TMT cycle.',
      highlights: ['Saudi data-center land rush', 'Fiber monetization', 'AI-enablement capex'],
    },
    {
      code: 'CON',
      name: 'Consumer & Retail',
      hero: '47',
      metric: '+0.9%',
      tag: 'SELECTIVE',
      description: 'Modern-format F&B, Gulf tourism spillover, and Egyptian disinflation are the three live theses.',
      highlights: ['QSR unit economics', 'Tourism value capture', 'Egypt disinflation trade'],
    },
  ];

  const panelWidthPct = 78;
  const translate = p * (panels.length - 1) * panelWidthPct;

  return (
    <section ref={ref} className="pinned" style={{ height: `${panels.length * 110}vh` }}>
      <div className="sticky" style={{ background: 'var(--bg)' }}>
        <div style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          zIndex: 3,
          padding: '80px 56px 30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          background: 'linear-gradient(180deg, var(--bg), transparent)',
        }}>
          <div>
            <div className="section-label">Coverage · horizontal</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(32px, 4vw, 54px)' }}>
              Nine desks. <span className="serif" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>One shelf.</span>
            </h2>
          </div>
          <div style={{ textAlign: 'right', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-dim)' }}>
            <div className="caps">Scroll to pan</div>
            <div style={{ marginTop: 4, color: 'var(--accent)' }}>
              {String(Math.min(panels.length, Math.floor(p * panels.length) + 1)).padStart(2, '0')} / {String(panels.length).padStart(2, '0')}
            </div>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          gap: 40,
          padding: '0 11vw',
          transform: `translateX(-${translate}vw)`,
          willChange: 'transform',
        }}>
          {panels.map((pa, i) => {
            const center = i / (panels.length - 1);
            const dist = Math.abs(p - center);
            const focus = clamp(1 - dist * 2.5);
            return (
              <div key={pa.code} style={{
                width: `${panelWidthPct - 4}vw`,
                flexShrink: 0,
                transform: `scale(${lerp(0.88, 1, focus)})`,
                opacity: lerp(0.25, 1, focus),
                transition: 'opacity .3s ease',
              }}>
                <CoveragePanel data={pa} focus={focus} idx={i} />
              </div>
            );
          })}
        </div>

        <div style={{
          position: 'absolute',
          left: 56,
          right: 56,
          bottom: 40,
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          fontFamily: 'var(--mono)',
          fontSize: 11,
          color: 'var(--ink-faint)',
        }}>
          {panels.map((pa, i) => {
            const center = i / (panels.length - 1);
            const dist = Math.abs(p - center);
            const focus = clamp(1 - dist * 2.5);
            return (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: focus > 0.5 ? 'var(--accent)' : 'var(--ink-faint)',
              }}>
                <div style={{
                  width: focus > 0.5 ? 28 : 14,
                  height: 2,
                  background: 'currentColor',
                  transition: 'width .4s',
                }} />
                <span>{pa.code}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
