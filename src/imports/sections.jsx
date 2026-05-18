/* Stats, Terminal showcase, Reports, CTA */

/* ========= STATS ========= */
function StatsSafe() {
  const ref = React.useRef(null);
  const p = useScrollProgress(ref);
  const stats = [
    { value: 420, suffix: '', label: 'Issuers under coverage', note: 'MENA + frontier markets' },
    { value: 56,  suffix: '',  label: 'Senior analysts',        note: 'Embedded across 9 desks' },
    { value: 30,  suffix: '+', label: 'Years of research',      note: 'Through every regional cycle' },
    { value: 1284, suffix: '', label: 'Reports published YTD',  note: '+18% vs. 2025' },
  ];
  return (
    <section ref={ref} style={{padding: '160px 0', background: 'var(--bg-2)'}}>
      <div className="shell">
        <div className="section-label">By the numbers</div>
        <h2 className="section-title" style={{maxWidth: 900, marginBottom: 80}}>
          Three decades of <span className="serif" style={{fontStyle:'italic', color:'var(--accent)'}}>conviction</span>, compounded.
        </h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 1, background:'var(--rule)'}}>
          {stats.map((s, i) => {
            const t = range(p, i * 0.1, i * 0.1 + 0.4);
            const shown = Math.round(s.value * smooth(t));
            return (
              <div key={s.label} style={{
                background:'var(--bg-2)', padding: '40px 32px',
              }}>
                <div style={{
                  fontFamily:'var(--serif)', fontSize: 88, lineHeight: 1,
                  letterSpacing:'-0.03em',
                }}>
                  {shown.toLocaleString()}{s.suffix}
                </div>
                <div style={{color:'var(--ink)', marginTop: 12, fontSize: 15}}>{s.label}</div>
                <div style={{color:'var(--ink-faint)', marginTop: 4, fontSize: 13}}>{s.note}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* BOLD: pinned counter with giant numbers that morph in place */
function StatsBold() {
  const ref = React.useRef(null);
  const p = useScrollProgress(ref);
  const steps = [
    { num: 420,  label: 'issuers under active coverage',   sub: 'Every name that matters in MENA + frontier.' },
    { num: 56,   label: 'senior analysts on the ground',   sub: 'Cairo · Riyadh · Dubai · Nairobi · Karachi.' },
    { num: 30,   label: 'years through every cycle',       sub: 'Since 1994. Founded with the region.' },
    { num: 1284, label: 'reports published this year',     sub: 'One every 3 hours, on average.' },
  ];
  const idx = clamp(Math.floor(p * steps.length * 0.999), 0, steps.length - 1);
  const localP = (p * steps.length) - idx;
  const step = steps[idx];

  // Animated count for current step
  const counted = Math.round(step.num * smooth(clamp(localP * 1.4)));

  return (
    <section ref={ref} className="pinned" style={{height: '340vh', background: 'var(--bg-2)'}}>
      <div className="sticky" style={{display:'flex'}}>
        {/* Left — fixed label column */}
        <div style={{
          flexBasis: '38%', padding: '0 56px', display:'flex',
          flexDirection:'column', justifyContent:'center', gap: 24,
          borderRight: '1px solid var(--rule)',
        }}>
          <div className="section-label">By the numbers</div>
          <h2 className="section-title" style={{fontSize:'clamp(34px, 3.6vw, 56px)'}}>
            The research floor,
            <br/>
            <span className="serif" style={{fontStyle:'italic', color:'var(--accent)'}}>in four numbers.</span>
          </h2>

          {/* Step indicator */}
          <div style={{marginTop: 40}}>
            {steps.map((s, i) => (
              <div key={i} style={{
                display:'flex', alignItems:'center', gap: 14,
                padding: '14px 0', borderTop: '1px solid var(--rule)',
                opacity: i === idx ? 1 : 0.4, transition: 'opacity .4s',
              }}>
                <span className="mono" style={{
                  color: i === idx ? 'var(--accent)' : 'var(--ink-faint)',
                  fontSize: 11,
                }}>{String(i+1).padStart(2,'0')}</span>
                <span style={{fontSize: 14, color: i === idx ? 'var(--ink)' : 'var(--ink-dim)'}}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — giant number */}
        <div style={{
          flex: 1, display:'flex', flexDirection:'column',
          alignItems:'flex-start', justifyContent:'center',
          padding: '0 80px', position:'relative', overflow:'hidden',
        }}>
          {/* decorative repeating number */}
          <div style={{
            position:'absolute', top:'50%', left: 60,
            transform:`translateY(-50%) translateX(${-localP * 80}px)`,
            fontFamily:'var(--serif)', fontSize: 'clamp(240px, 40vw, 520px)',
            lineHeight: 0.85, letterSpacing:'-0.05em',
            color: 'var(--accent)', whiteSpace:'nowrap',
            opacity: 0.96,
          }}>
            {counted.toLocaleString()}
          </div>
          <div style={{position:'relative', zIndex: 2, marginTop: 'auto', marginBottom: 80}}>
            <div style={{fontFamily:'var(--serif)', fontSize: 40, maxWidth: 620, lineHeight: 1.1}}>
              {step.label}
            </div>
            <div style={{marginTop: 16, color:'var(--ink-dim)', fontSize: 17, maxWidth: 560}}>
              {step.sub}
            </div>
          </div>

          {/* Progress bar */}
          <div style={{
            position:'absolute', left: 80, right: 80, bottom: 40,
            display:'flex', gap: 6,
          }}>
            {steps.map((_, i) => (
              <div key={i} style={{flex:1, height: 2, background:'var(--rule)', overflow:'hidden'}}>
                <div style={{
                  height:'100%',
                  width: `${clamp((p * steps.length) - i) * 100}%`,
                  background:'var(--accent)',
                }}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========= TERMINAL / PRODUCT SHOWCASE ========= */
function TerminalSafe() {
  const ref = React.useRef(null);
  const p = useScrollProgress(ref);
  const features = [
    { title: 'Unified search', desc: 'One prompt across reports, filings, earnings transcripts, and analyst models.' },
    { title: 'Live sector flows', desc: 'Real-time order flow and analyst conviction deltas, streamed to the desktop.' },
    { title: 'Report workbench', desc: 'Mark up any PDF, attach comments, and sync with your OMS in a single pane.' },
  ];
  return (
    <section ref={ref} style={{padding: '160px 0'}}>
      <div className="shell">
        <div style={{textAlign:'center', marginBottom: 60, opacity: clamp(p * 3)}}>
          <div className="section-label" style={{justifyContent:'center'}}>The terminal</div>
          <h2 className="section-title" style={{maxWidth:900, margin:'0 auto'}}>
            A workbench <span className="serif" style={{fontStyle:'italic', color:'var(--accent)'}}>built</span> for the buy-side.
          </h2>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center'}}>
          <div>
            {features.map((f, i) => {
              const t = range(p, i * 0.15, i * 0.15 + 0.3);
              return (
                <div key={f.title} style={{
                  padding:'28px 0', borderTop: '1px solid var(--rule)',
                  opacity: clamp(0.2 + t * 0.8),
                  transform: `translateY(${lerp(12, 0, t)}px)`,
                }}>
                  <div style={{fontFamily:'var(--serif)', fontSize: 30, marginBottom: 10}}>{f.title}</div>
                  <div style={{color:'var(--ink-dim)', fontSize: 16, lineHeight: 1.5}}>{f.desc}</div>
                </div>
              );
            })}
          </div>
          <div style={{
            transform: `translateY(${lerp(30, -30, p)}px)`,
          }}>
            <AssemblingDashboard progress={1}/>
          </div>
        </div>
      </div>
    </section>
  );
}

/* BOLD: Pinned terminal that moves between feature callouts */
function TerminalBold() {
  const ref = React.useRef(null);
  const p = useScrollProgress(ref);
  const highlights = [
    { title: 'Unified search',
      sub: 'One prompt across reports, filings, earnings calls, analyst models.',
      x: 62, y: 22, anchor: [78, 16] },
    { title: 'Live conviction deltas',
      sub: 'Watch analyst stances shift the moment they update.',
      x: 20, y: 48, anchor: [38, 54] },
    { title: 'Report workbench',
      sub: 'Mark up any PDF, sync annotations with your OMS.',
      x: 70, y: 72, anchor: [58, 80] },
  ];
  const activeIdx = clamp(Math.floor(p * highlights.length * 0.99), 0, highlights.length - 1);

  return (
    <section ref={ref} className="pinned" style={{height: '320vh'}}>
      <div className="sticky" style={{
        background: 'radial-gradient(ellipse at 50% 0%, var(--bg-3), var(--bg))',
        padding: '100px 56px 40px',
      }}>
        <div style={{textAlign:'center', marginBottom: 30}}>
          <div className="section-label" style={{justifyContent:'center'}}>The terminal</div>
          <h2 className="section-title">
            A workbench <span className="serif" style={{fontStyle:'italic', color:'var(--accent)'}}>built</span> for the desk.
          </h2>
        </div>

        <div style={{
          position:'relative', margin: '40px auto 0',
          width: 'min(1240px, 92vw)',
          transform: `scale(${lerp(1.04, 1, clamp(p * 4))})`,
          transformOrigin: 'top center',
        }}>
          <AssemblingDashboard progress={1}/>

          {/* Floating callouts */}
          {highlights.map((h, i) => {
            const on = i === activeIdx ? 1 : 0;
            return (
              <div key={i} style={{
                position:'absolute',
                left: `${h.x}%`, top: `${h.y}%`,
                opacity: lerp(0.15, 1, on),
                transform: `translate(-50%, -50%) scale(${lerp(0.92, 1, on)})`,
                transition: 'all .5s cubic-bezier(.2,.7,.2,1)',
                pointerEvents: 'none',
                zIndex: on ? 5 : 2,
              }}>
                <div style={{
                  background: 'var(--bg)', border: '1px solid var(--accent)',
                  borderRadius: 10, padding: '14px 18px', maxWidth: 280,
                  boxShadow: on ? '0 12px 40px rgba(0,0,0,0.6)' : 'none',
                }}>
                  <div className="mono caps" style={{color:'var(--accent)', fontSize:10}}>
                    {String(i+1).padStart(2,'0')} / {String(highlights.length).padStart(2,'0')}
                  </div>
                  <div style={{fontFamily:'var(--serif)', fontSize: 22, marginTop: 6, lineHeight: 1.1}}>{h.title}</div>
                  <div style={{fontSize:13, color:'var(--ink-dim)', marginTop: 6, lineHeight: 1.4}}>{h.sub}</div>
                </div>
                {/* pulse dot */}
                <div style={{
                  position:'absolute', left: '50%', top:'100%', marginTop: 14,
                  width: 10, height: 10, borderRadius:'50%', background:'var(--accent)',
                  transform:'translateX(-50%)',
                  boxShadow: `0 0 0 ${6 + Math.sin(Date.now()/400)*2}px rgba(255,130,0,0.18)`,
                }}/>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div style={{
          position:'absolute', left: 56, right: 56, bottom: 40,
          display:'flex', gap: 20, justifyContent:'center',
          fontFamily:'var(--mono)', fontSize: 11,
        }}>
          {highlights.map((h, i) => (
            <div key={i} style={{
              display:'flex', alignItems:'center', gap: 8,
              color: i === activeIdx ? 'var(--accent)' : 'var(--ink-faint)',
            }}>
              <div style={{
                width: i === activeIdx ? 28 : 14, height: 2,
                background: 'currentColor', transition: 'width .4s',
              }}/>
              <span>{h.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========= CTA ========= */
function CTASection() {
  const ref = React.useRef(null);
  const inView = useInView(ref);
  return (
    <section ref={ref} style={{padding:'180px 56px 120px'}}>
      <div style={{
        maxWidth: 1360, margin: '0 auto',
        padding: '100px 80px', borderRadius: 24,
        background: 'linear-gradient(150deg, var(--bg-2), #0B2218)',
        border: '1px solid var(--rule-strong)',
        position:'relative', overflow:'hidden',
      }}>
        <div style={{
          position:'absolute', right: -150, top: -100,
          width: 500, height: 500, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(255,130,0,0.22), transparent 70%)',
        }}/>
        <div className={`fadein ${inView ? 'in' : ''}`} style={{maxWidth: 780, position:'relative'}}>
          <div className="section-label">Institutional access</div>
          <h2 className="section-title">
            See what the <span className="serif" style={{fontStyle:'italic', color:'var(--accent)'}}>desks</span> see.
          </h2>
          <p className="lede" style={{marginTop: 24}}>
            Access to the terminal is by request. We onboard new buy-side firms on a rolling basis.
          </p>
          <div style={{display:'flex', gap: 14, marginTop: 40}}>
            <button className="btn btn-primary">Request access →</button>
            <button className="btn btn-ghost">Download sample report</button>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: 1360, margin: '80px auto 0',
        display:'flex', justifyContent:'space-between',
        padding: '40px 0', borderTop:'1px solid var(--rule)',
        color:'var(--ink-faint)', fontSize: 13,
      }}>
        <div style={{display:'flex', gap:10, alignItems:'center'}}>
          <div className="nav-logo"><div className="mark"/></div>
          <span>EFG Hermes Research · Prototype by IKEN Technology</span>
        </div>
        <div style={{display:'flex', gap:24}} className="mono">
          <span>© 2026</span>
          <span>Licensed by FRA / CMA</span>
          <span style={{color:'var(--accent)'}}>Data delayed 15m</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { StatsSafe, StatsBold, TerminalSafe, TerminalBold, CTASection });
