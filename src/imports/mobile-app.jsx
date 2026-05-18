/* Mobile app — animated reveals + micro-motion. No scroll-jacking. */

const { useState: mUseState, useEffect: mUseEffect, useRef: mUseRef } = React;

/* ========= REVEAL WRAPPER — fade up on scroll into view ========= */
function Reveal({ children, delay = 0, y = 24, ...rest }) {
  const ref = mUseRef(null);
  const [on, setOn] = mUseState(false);
  mUseEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); io.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: on ? 1 : 0,
      transform: on ? 'translateY(0)' : `translateY(${y}px)`,
      transition: `opacity .7s cubic-bezier(.2,.7,.2,1) ${delay}s, transform .8s cubic-bezier(.2,.7,.2,1) ${delay}s`,
      ...rest.style,
    }} {...rest}>
      {children}
    </div>
  );
}

/* Stagger — wraps children in Reveal with incrementing delay */
function Stagger({ children, base = 0, step = 0.08, y = 20 }) {
  return React.Children.map(children, (c, i) => (
    <Reveal delay={base + i * step} y={y}>{c}</Reveal>
  ));
}

/* ========= ANIMATED COUNTER ========= */
function Counter({ to, suffix = '', duration = 1400, format }) {
  const ref = mUseRef(null);
  const [val, setVal] = mUseState(0);
  mUseEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{format ? format(val) : val.toLocaleString()}{suffix}</span>;
}

/* ========= MOBILE NAV ========= */
function MobileNav() {
  const [scrolled, setScrolled] = mUseState(false);
  mUseEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className="nav" style={{
      padding: '14px 20px', position:'sticky', top: 0,
      background: scrolled
        ? 'color-mix(in srgb, var(--bg) 92%, transparent)'
        : 'linear-gradient(180deg, color-mix(in srgb, var(--bg) 88%, transparent), transparent)',
      borderBottom: scrolled ? '1px solid var(--rule)' : '1px solid transparent',
      transition: 'all .3s',
    }}>
      <div className="nav-logo">
        <div className="mark"/>
        <span style={{fontSize: 13}}>EFG Research</span>
      </div>
      <a href="#" className="nav-cta" style={{padding:'6px 10px', fontSize: 11}}>Access</a>
    </nav>
  );
}

/* ========= HERO — typographic + live mini-dash ========= */
function MHero() {
  // Live-pulse clock in telemetry
  const [tick, setTick] = mUseState(0);
  mUseEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{
      padding: '60px 22px 40px', position: 'relative', background: 'var(--bg)',
      overflow: 'hidden',
    }}>
      {/* Ambient gradient glow */}
      <div style={{
        position: 'absolute', top: -100, right: -80, width: 360, height: 360,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,130,0,0.18), transparent 70%)',
        pointerEvents: 'none',
      }}/>
      {/* Dot grid */}
      <div className="dots" style={{ position:'absolute', inset: 0, opacity: 0.5 }}/>

      <div style={{ position: 'relative' }}>
        <Reveal delay={0.05}>
          <div className="section-label" style={{marginBottom: 16}}>
            <span>EFG · MENA Research · 2026</span>
          </div>
        </Reveal>

        {/* Word-by-word headline */}
        <h1 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 46, lineHeight: 1.04, letterSpacing: '-0.03em',
          margin: 0, marginBottom: 20,
        }}>
          {['Conviction', 'in', 'numbers,'].map((w, i) => (
            <Reveal key={i} delay={0.15 + i * 0.08} y={18}>
              <span style={{ display: 'inline-block', marginRight: 10,
                ...(w === 'in' || w === 'numbers,' ? {fontStyle:'italic', color: w === 'in' || w === 'numbers,' ? 'var(--accent)' : undefined} : {})}}>
                {w}
              </span>
            </Reveal>
          ))}
          <br/>
          <Reveal delay={0.45} y={18}>
            <span>built on decades.</span>
          </Reveal>
        </h1>

        <Reveal delay={0.6}>
          <p className="lede" style={{marginBottom: 24, fontSize: 15}}>
            Institutional research across MENA &amp; frontier markets — used by 420+ buy-side desks.
          </p>
        </Reveal>

        <Reveal delay={0.72}>
          <div style={{display:'flex', flexDirection:'column', gap: 10}}>
            <a className="btn btn-primary" href="#" style={{justifyContent:'center'}}>Request access</a>
            <a className="btn btn-ghost" href="#" style={{justifyContent:'center'}}>Latest research →</a>
          </div>
        </Reveal>

        {/* Animated counters */}
        <div style={{
          marginTop: 32, paddingTop: 22, borderTop: '1px solid var(--rule)',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12,
        }}>
          <Stagger base={0.85} step={0.1}>
            <div>
              <div style={{fontFamily:'var(--serif)', fontSize: 30, lineHeight: 1, marginBottom: 6}}>
                <Counter to={420}/>
              </div>
              <div className="caps" style={{fontSize: 10, color:'var(--ink-dim)'}}>Issuers</div>
            </div>
            <div>
              <div style={{fontFamily:'var(--serif)', fontSize: 30, lineHeight: 1, marginBottom: 6}}>
                <Counter to={56}/>
              </div>
              <div className="caps" style={{fontSize: 10, color:'var(--ink-dim)'}}>Analysts</div>
            </div>
            <div>
              <div style={{fontFamily:'var(--serif)', fontSize: 30, lineHeight: 1, marginBottom: 6}}>
                <Counter to={30} suffix="y"/>
              </div>
              <div className="caps" style={{fontSize: 10, color:'var(--ink-dim)'}}>Coverage</div>
            </div>
          </Stagger>
        </div>

        {/* Telemetry stripe */}
        <div style={{
          marginTop: 24, display: 'flex', gap: 10, alignItems: 'center',
          fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-faint)',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)',
            boxShadow: `0 0 0 ${3 + Math.sin(tick) * 2}px rgba(255,130,0,0.24)`,
            transition: 'box-shadow .6s',
          }}/>
          <span>LIVE · SESSION {String(tick % 60).padStart(2,'0')}:{String((tick*17) % 60).padStart(2,'0')} GST</span>
        </div>
      </div>
    </section>
  );
}

/* ========= TICKER — already animated via CSS keyframe ========= */
function MTicker() {
  const items = [
    ['EGX30','28,412.60','+1.24%','up'],
    ['TASI','12,104.82','+0.68%','up'],
    ['DFM','4,870.15','-0.12%','dn'],
    ['ADX','9,622.04','+0.42%','up'],
    ['BRENT','$84.22','+0.51%','up'],
    ['QE','10,688.33','+0.28%','up'],
    ['KSE','7,245.90','-0.33%','dn'],
  ];
  const doubled = [...items, ...items];
  return (
    <div className="ticker" style={{padding: '10px 0', fontSize: 11, gap: 18, background: 'var(--bg-2)'}}>
      <div className="ticker-track" style={{gap: 18}}>
        {doubled.map((x, i) => (
          <span key={i} className="ticker-item">
            <span className="sym">{x[0]}</span>
            <span className="val">{x[1]}</span>
            <span className={x[3]}>{x[2]}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ========= COVERAGE — staggered cards, animated accent bar on scroll ========= */
function MCoverage() {
  const pillars = [
    { k: 'Equity',   d: 'Fundamental coverage on 420 issuers across MENA and frontier.', n: '420' },
    { k: 'Macro',    d: 'Deep country notes — FX, inflation, rates, politics.', n: '18' },
    { k: 'Strategy', d: 'Top-down positioning, factor views, thematic baskets.', n: '24' },
    { k: 'Thematic', d: 'Deep-dives: fintech, IPOs, energy transition, digital infra.', n: '36' },
  ];
  return (
    <section style={{padding: '72px 22px', background: 'var(--bg)'}}>
      <Reveal><div className="section-label">Coverage</div></Reveal>
      <Reveal delay={0.1}>
        <h2 style={{fontFamily:'var(--serif)', fontSize: 34, lineHeight: 1.05, letterSpacing:'-0.02em', margin:'12px 0 28px'}}>
          Every <span style={{fontStyle:'italic', color:'var(--accent)'}}>angle</span> on the region.
        </h2>
      </Reveal>
      <div style={{display:'flex', flexDirection:'column', gap: 12}}>
        {pillars.map((p, i) => (
          <Reveal key={p.k} delay={0.1 + i * 0.1} y={16}>
            <CoverageCard pillar={p}/>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CoverageCard({ pillar }) {
  const [hovered, setHovered] = mUseState(false);
  return (
    <div
      onPointerDown={() => setHovered(true)}
      onPointerUp={() => setHovered(false)}
      onPointerLeave={() => setHovered(false)}
      style={{
        padding: '18px 16px',
        border: '1px solid var(--rule)', borderRadius: 8,
        background: 'var(--bg-2)',
        display:'grid', gridTemplateColumns:'1fr auto', gap: 14,
        alignItems: 'center',
        transform: hovered ? 'scale(0.98)' : 'scale(1)',
        borderColor: hovered ? 'var(--accent)' : 'var(--rule)',
        transition: 'all .25s cubic-bezier(.2,.7,.2,1)',
      }}>
      <div>
        <div style={{fontFamily:'var(--serif)', fontSize: 22, marginBottom: 6}}>{pillar.k}</div>
        <div style={{color:'var(--ink-dim)', fontSize: 13, lineHeight: 1.45}}>{pillar.d}</div>
      </div>
      <div style={{textAlign:'right'}}>
        <div style={{
          fontFamily:'var(--mono)', fontSize: 11, color: 'var(--accent)',
          letterSpacing:'0.1em',
        }}>{pillar.n}</div>
        <div style={{fontSize: 9, color:'var(--ink-faint)', marginTop: 2, letterSpacing:'0.1em', textTransform:'uppercase'}}>reports</div>
      </div>
    </div>
  );
}

/* ========= MAP — pulsing dots, sequential light-up on entry ========= */
function MMap() {
  const ref = mUseRef(null);
  const [visible, setVisible] = mUseState(false);
  mUseEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const markets = [
    ['Egypt','EGX 30','156 issuers'],
    ['Saudi Arabia','TASI','142 issuers'],
    ['UAE','DFM · ADX','72 issuers'],
    ['Qatar','QE','24 issuers'],
    ['Kuwait','KSE','38 issuers'],
    ['Morocco','MASI','18 issuers'],
    ['Pakistan','KSE-100','22 issuers'],
    ['Kenya','NSE','14 issuers'],
  ];
  const cityDots = [[130,100,'CAI'],[175,120,'RUH'],[210,118,'DXB'],[195,116,'DOH'],[185,105,'KWI'],[70,90,'CMN'],[240,130,'KHI']];

  return (
    <section ref={ref} style={{padding: '72px 22px', background: 'var(--bg-2)'}}>
      <Reveal><div className="section-label">Coverage map</div></Reveal>
      <Reveal delay={0.1}>
        <h2 style={{fontFamily:'var(--serif)', fontSize: 34, lineHeight: 1.05, letterSpacing:'-0.02em', margin:'12px 0 24px'}}>
          MENA &amp; <span style={{fontStyle:'italic', color:'var(--accent)'}}>frontier</span>.
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <div style={{
          height: 220, borderRadius: 10,
          background: 'radial-gradient(circle at 55% 45%, rgba(255,130,0,0.16), transparent 60%), var(--bg)',
          border: '1px solid var(--rule)', position:'relative', overflow:'hidden',
          marginBottom: 20,
        }}>
          <svg viewBox="0 0 350 220" style={{width:'100%', height:'100%'}}>
            <path d="M40,80 Q120,55 200,70 T320,95 L310,145 Q240,165 170,155 Q100,150 60,130 Z"
              fill="rgba(227,227,226,0.12)" stroke="var(--rule-strong)" strokeWidth="0.5"
              style={{
                strokeDasharray: 1400,
                strokeDashoffset: visible ? 0 : 1400,
                transition: 'stroke-dashoffset 2s ease-out',
              }}/>
            {/* Connection lines */}
            {cityDots.slice(1).map((c, i) => {
              const from = cityDots[0];
              return (
                <line key={i} x1={from[0]} y1={from[1]} x2={c[0]} y2={c[1]}
                  stroke="var(--accent)" strokeWidth="0.5" opacity={visible ? 0.3 : 0}
                  style={{transition: `opacity .8s ease ${0.4 + i * 0.1}s`}}/>
              );
            })}
            {/* Dots with staggered light-up + continuous pulse */}
            {cityDots.map(([x,y,l], i) => (
              <g key={i} style={{
                opacity: visible ? 1 : 0,
                transition: `opacity .5s ease ${0.3 + i * 0.12}s, transform .5s ease ${0.3 + i * 0.12}s`,
              }}>
                <circle cx={x} cy={y} r="8" fill="var(--accent)" opacity="0.18">
                  <animate attributeName="r" values="8;14;8" dur={`${2.2 + i * 0.2}s`} repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.18;0.05;0.18" dur={`${2.2 + i * 0.2}s`} repeatCount="indefinite"/>
                </circle>
                <circle cx={x} cy={y} r="3" fill="var(--accent)"/>
                <text x={x+8} y={y+3} fontSize="8" fontFamily="var(--mono)" fill="var(--ink-dim)">{l}</text>
              </g>
            ))}
          </svg>
        </div>
      </Reveal>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 10}}>
        {markets.map(([c,i,n], idx) => (
          <Reveal key={c} delay={0.3 + idx * 0.05} y={14}>
            <div style={{padding: '12px 12px', border: '1px solid var(--rule)', borderRadius: 6}}>
              <div style={{fontSize: 13, fontWeight: 500}}>{c}</div>
              <div style={{fontSize: 10, color:'var(--ink-faint)', fontFamily:'var(--mono)', marginTop: 2}}>{i}</div>
              <div style={{fontSize: 11, color:'var(--ink-dim)', marginTop: 4}}>{n}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ========= NEWS — staggered reveal, animated categories ========= */
function MNews() {
  const stories = [
    ['Macro','Egypt FX normalization: what sticks after the float','Mohamed Abu Basha · 4 min'],
    ['Equity','Saudi banks Q1: net interest margin resilience','Waleed Ramadan · 6 min'],
    ['Thematic','UAE real estate: cycle maturity call','Ahmed Hazem · 8 min'],
    ['Frontier','Pakistan IMF program — flows outlook','Raza Jafri · 5 min'],
    ['Strategy','MENA Q2 positioning: overweight KSA banks','Simon Kitchen · 7 min'],
  ];
  const [filter, setFilter] = mUseState('All');
  const filters = ['All','Macro','Equity','Thematic','Frontier','Strategy'];
  const filtered = filter === 'All' ? stories : stories.filter(s => s[0] === filter);

  return (
    <section style={{padding: '72px 22px', background: 'var(--bg)'}}>
      <Reveal><div className="section-label">Latest research</div></Reveal>
      <Reveal delay={0.1}>
        <h2 style={{fontFamily:'var(--serif)', fontSize: 34, lineHeight: 1.05, letterSpacing:'-0.02em', margin:'12px 0 20px'}}>
          Published <span style={{fontStyle:'italic', color:'var(--accent)'}}>this week</span>.
        </h2>
      </Reveal>

      {/* Filter chips — horizontal scroll */}
      <Reveal delay={0.2}>
        <div style={{
          display:'flex', gap: 8, overflowX: 'auto', marginBottom: 20,
          paddingBottom: 4, scrollbarWidth: 'none',
        }} className="no-scrollbar">
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '6px 12px', fontSize: 11, fontFamily: 'var(--mono)',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              border: '1px solid', borderColor: filter === f ? 'var(--accent)' : 'var(--rule)',
              background: filter === f ? 'var(--accent)' : 'transparent',
              color: filter === f ? '#1D1D1B' : 'var(--ink-dim)',
              borderRadius: 20, whiteSpace: 'nowrap',
              cursor: 'pointer', transition: 'all .2s',
            }}>{f}</button>
          ))}
        </div>
      </Reveal>

      <div style={{display:'flex', flexDirection:'column'}}>
        {filtered.map((s, i) => (
          <Reveal key={s[1]} delay={0.1 + i * 0.08} y={14}>
            <a href="#" style={{
              padding: '20px 0', borderBottom: '1px solid var(--rule)',
              display:'block',
            }}>
              <div style={{display:'flex', justifyContent:'space-between', marginBottom: 8, fontSize: 10}}>
                <span className="caps" style={{color:'var(--accent)'}}>{s[0]}</span>
                <span style={{color:'var(--ink-faint)', fontFamily:'var(--mono)'}}>
                  {new Date(Date.now()-i*86400000).toLocaleDateString('en-GB',{day:'2-digit',month:'short'})}
                </span>
              </div>
              <div style={{fontFamily:'var(--serif)', fontSize: 20, lineHeight: 1.2, marginBottom: 8}}>{s[1]}</div>
              <div style={{color:'var(--ink-dim)', fontSize: 12}}>{s[2]}</div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ========= STATS — animated big counters ========= */
function MStats() {
  const stats = [
    { num: 420, suffix: '', label: 'Issuers under coverage', sub: 'Across MENA + frontier' },
    { num: 56, suffix: '', label: 'Senior analysts', sub: 'Embedded on 9 desks' },
    { num: 30, suffix: '+', label: 'Years of research', sub: 'Every regional cycle' },
    { num: 1284, suffix: '', label: 'Reports YTD', sub: '+18% vs \u201925' },
  ];
  return (
    <section style={{padding: '72px 22px', background: 'var(--bg-2)'}}>
      <Reveal><div className="section-label">By the numbers</div></Reveal>
      <Reveal delay={0.1}>
        <h2 style={{fontFamily:'var(--serif)', fontSize: 34, lineHeight: 1.05, letterSpacing:'-0.02em', margin:'12px 0 28px'}}>
          Three decades, <span style={{fontStyle:'italic', color:'var(--accent)'}}>compounded</span>.
        </h2>
      </Reveal>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 1, background: 'var(--rule)'}}>
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={0.15 + i * 0.1} y={16}>
            <div style={{background: 'var(--bg-2)', padding: '24px 18px', height: '100%'}}>
              <div style={{fontFamily:'var(--serif)', fontSize: 44, lineHeight: 1, letterSpacing:'-0.03em'}}>
                <Counter to={s.num} suffix={s.suffix} duration={1800}/>
              </div>
              <div style={{fontSize: 13, marginTop: 10}}>{s.label}</div>
              <div style={{fontSize: 11, color:'var(--ink-faint)', marginTop: 4}}>{s.sub}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ========= TERMINAL — live-updating mini chart + ticker row ========= */
function MTerminal() {
  const [tickIdx, setTickIdx] = mUseState(0);
  const ref = mUseRef(null);
  const [inView, setInView] = mUseState(false);

  mUseEffect(() => {
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  mUseEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setTickIdx(i => i + 1), 900);
    return () => clearInterval(id);
  }, [inView]);

  // Chart that morphs over time
  const basePath = [78, 72, 66, 58, 52, 50, 46, 42, 38, 34, 30, 24, 20, 18, 16];
  const offset = tickIdx % 30;
  const pts = basePath.map((y, i) => {
    const phase = Math.sin((i + offset) * 0.5 + tickIdx * 0.2) * 3;
    return [i * (320 / (basePath.length - 1)), y + phase];
  });
  const pathD = pts.map(([x, y], i) => (i ? 'L' : 'M') + x.toFixed(1) + ',' + y.toFixed(1)).join(' ');
  const closedD = pathD + ` L 320,100 L 0,100 Z`;

  // Live price flicker
  const basePrice = 28412.60;
  const price = (basePrice + Math.sin(tickIdx * 0.3) * 18).toFixed(2);
  const delta = (1.24 + Math.sin(tickIdx * 0.3) * 0.05).toFixed(2);

  return (
    <section ref={ref} style={{padding: '72px 22px', background: 'var(--bg)'}}>
      <Reveal><div className="section-label">The terminal</div></Reveal>
      <Reveal delay={0.1}>
        <h2 style={{fontFamily:'var(--serif)', fontSize: 34, lineHeight: 1.05, letterSpacing:'-0.02em', margin:'12px 0 20px'}}>
          A workbench <span style={{fontStyle:'italic', color:'var(--accent)'}}>built</span> for the desk.
        </h2>
      </Reveal>

      <Reveal delay={0.2} y={24}>
        <div style={{
          borderRadius: 10, overflow:'hidden', border:'1px solid var(--rule)',
          background:'var(--bg-2)', marginBottom: 24,
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
        }}>
          <div style={{
            padding: '10px 14px', borderBottom:'1px solid var(--rule)',
            display:'flex', justifyContent:'space-between',
            fontSize:10, fontFamily:'var(--mono)', color:'var(--ink-dim)',
          }}>
            <span>EFG · Research</span>
            <span style={{color:'var(--accent)', display:'flex', alignItems:'center', gap: 6}}>
              <span style={{
                width: 5, height: 5, borderRadius:'50%', background:'var(--accent)',
                animation: 'livepulse 1.4s infinite',
              }}/>
              LIVE
            </span>
          </div>
          <div style={{padding: 14}}>
            <div style={{fontSize:10, color:'var(--ink-dim)', fontFamily:'var(--mono)', marginBottom: 4}}>EGX 30 · INDEX</div>
            <div style={{fontFamily:'var(--serif)', fontSize: 24, display: 'flex', alignItems: 'baseline', gap: 8}}>
              <span style={{fontVariantNumeric: 'tabular-nums'}}>{price}</span>
              <span style={{fontSize:12, color:'var(--green)', fontFamily:'var(--mono)'}}>+{delta}%</span>
            </div>
            <svg viewBox="0 0 320 100" style={{width:'100%', height: 90, marginTop: 10}}>
              <defs>
                <linearGradient id="mg" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35"/>
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d={closedD} fill="url(#mg)" style={{transition: 'd .9s ease'}}/>
              <path d={pathD} fill="none" stroke="var(--accent)" strokeWidth="1.5" style={{transition: 'd .9s ease'}}/>
              {/* end dot */}
              <circle
                cx={pts[pts.length-1][0]}
                cy={pts[pts.length-1][1]}
                r="3" fill="var(--accent)"
              >
                <animate attributeName="r" values="3;5;3" dur="1.4s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
          <div style={{borderTop:'1px solid var(--rule)'}}>
            {[['COMI','+2.14%','BUY'],['EMAAR','+0.87%','BUY'],['STC','-0.42%','HOLD']].map((r, i) => {
              const flashing = (tickIdx % 3) === i;
              return (
                <div key={r[0]} style={{
                  display:'flex', justifyContent:'space-between', padding: '10px 14px',
                  borderBottom: '1px solid var(--rule)', fontSize: 12,
                  background: flashing ? 'rgba(255,130,0,0.06)' : 'transparent',
                  transition: 'background .4s',
                }}>
                  <span>{r[0]}</span>
                  <span style={{fontFamily:'var(--mono)', color: r[1].startsWith('+') ? 'var(--green)' : 'var(--red)'}}>{r[1]}</span>
                  <span style={{fontSize:10, color:'var(--accent)', fontFamily:'var(--mono)'}}>{r[2]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>

      {[['Unified search','One prompt across reports, filings, earnings transcripts.'],
        ['Live conviction deltas','Watch analyst stances shift the moment they update.'],
        ['Report workbench','Mark up any PDF, sync with your OMS.']].map(([t,d], i) => (
        <Reveal key={t} delay={0.15 + i * 0.12} y={14}>
          <div style={{padding: '18px 0', borderTop: '1px solid var(--rule)'}}>
            <div style={{fontFamily:'var(--serif)', fontSize: 22, marginBottom: 6}}>{t}</div>
            <div style={{color:'var(--ink-dim)', fontSize: 14, lineHeight: 1.45}}>{d}</div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}

/* ========= CTA ========= */
function MCTA() {
  return (
    <section style={{padding: '60px 22px'}}>
      <Reveal y={30}>
        <div style={{
          padding: '40px 24px', borderRadius: 14,
          background: 'linear-gradient(150deg, var(--bg-2), #0B2218)',
          border: '1px solid var(--rule-strong)',
          position:'relative', overflow:'hidden',
        }}>
          <div style={{
            position: 'absolute', right: -120, top: -80, width: 320, height: 320,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,130,0,0.24), transparent 70%)',
            pointerEvents: 'none',
          }}/>
          <div style={{position: 'relative'}}>
            <div className="section-label">Institutional access</div>
            <h2 style={{fontFamily:'var(--serif)', fontSize: 30, lineHeight: 1.05, margin:'10px 0 16px'}}>
              See what the <span style={{fontStyle:'italic', color:'var(--accent)'}}>desks</span> see.
            </h2>
            <p className="lede" style={{fontSize: 14, marginBottom: 24}}>
              Access to the terminal is by request. We onboard new buy-side firms on a rolling basis.
            </p>
            <div style={{display:'flex', flexDirection:'column', gap: 10}}>
              <button className="btn btn-primary" style={{justifyContent:'center'}}>Request access →</button>
              <button className="btn btn-ghost" style={{justifyContent:'center'}}>Download sample report</button>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <div style={{
          marginTop: 40, padding: '24px 0', borderTop: '1px solid var(--rule)',
          color:'var(--ink-faint)', fontSize: 12, textAlign:'center',
        }}>
          EFG Hermes Research · Prototype by IKEN Technology · © 2026
        </div>
      </Reveal>
    </section>
  );
}

function MobileApp() {
  return (
    <>
      <style>{`
        @keyframes livepulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,130,0,0.4); }
          50% { box-shadow: 0 0 0 6px rgba(255,130,0,0); }
        }
      `}</style>
      <MobileNav/>
      <MHero/>
      <MTicker/>
      <MCoverage/>
      <MMap/>
      <MNews/>
      <MStats/>
      <MTerminal/>
      <MCTA/>
    </>
  );
}

Object.assign(window, { MobileApp });
