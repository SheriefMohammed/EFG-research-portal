/* Hero section — 2 variants:
   SAFE: Typography-led. Headline fills viewport, breaks apart, portal dashboard assembles on scroll.
   BOLD: Dashboard UI materializes piece-by-piece over a MENA coverage map, with a research report "flipping" through. */

function HeroSafe() {
  const pinRef = React.useRef(null);
  const p = useScrollProgress(pinRef);

  // Choreography timeline
  const tHeadline = range(p, 0.0, 0.25);    // headline zoom/settle
  const tSplit    = range(p, 0.25, 0.45);   // words spread + fade
  const tUI       = range(p, 0.40, 0.75);   // dashboard assembles
  const tHand     = range(p, 0.75, 1.0);    // hand-off

  const dashScale = lerp(0.82, 1.0, smooth(tUI));
  const dashOp = smooth(tUI);

  return (
    <section ref={pinRef} className="pinned" style={{ height: '380vh' }}>
      <div className="sticky dots">
        {/* Editorial headline */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          opacity: 1 - tSplit,
          pointerEvents: 'none',
        }}>
          <div style={{ textAlign: 'center', maxWidth: 1200, padding: '0 40px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>
              <span style={{opacity: smooth(tHeadline)}}>EFG Hermes Research · 2026</span>
            </div>
            <h1 className="hero-title" style={{
              transform: `scale(${lerp(1.08, 1, smooth(tHeadline))})`,
              letterSpacing: `${lerp(-0.02, -0.035, smooth(tHeadline))}em`,
            }}>
              <span style={{ display: 'inline-block',
                transform: `translateY(${lerp(-40, 0, smooth(tHeadline))}px) translateX(${lerp(0, -260, smooth(tSplit))}px)`,
                opacity: lerp(1, 0.15, smooth(tSplit)),
              }}>Conviction</span>{' '}
              <span className="serif" style={{
                fontStyle: 'italic', color: 'var(--accent)',
                transform: `translateY(${lerp(40, 0, smooth(tHeadline))}px)`,
                display: 'inline-block',
                opacity: lerp(1, 0.25, smooth(tSplit)),
              }}>in numbers</span><br/>
              <span style={{ display: 'inline-block',
                transform: `translateX(${lerp(0, 260, smooth(tSplit))}px)`,
                opacity: lerp(1, 0.15, smooth(tSplit)),
              }}>built on decades.</span>
            </h1>
            <p className="lede" style={{
              margin: '28px auto 0', textAlign: 'center',
              opacity: smooth(tHeadline) * (1 - tSplit),
            }}>
              Institutional research across MENA &amp; frontier markets — equity, macro, and thematic coverage used by <em>420+</em> buy-side desks.
            </p>
          </div>
        </div>

        {/* Dashboard assembles */}
        <div className="hero-dashboard" style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          opacity: dashOp,
        }}>
          <div style={{
            transform: `scale(${dashScale})`,
            width: 'min(1180px, 92vw)',
            transformOrigin: 'center',
          }}>
            <AssemblingDashboard progress={tUI} />
          </div>
        </div>

        {/* Bottom progress bar */}
        <div style={{
          position: 'absolute', left: 56, right: 56, bottom: 32,
          display: 'flex', alignItems: 'center', gap: 16,
          fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-faint)',
        }}>
          <span className="caps" style={{ color: 'var(--ink-dim)' }}>Scroll</span>
          <div style={{ flex: 1, height: 1, background: 'var(--rule)', position: 'relative' }}>
            <div style={{
              position: 'absolute', left: 0, top: 0, bottom: 0,
              width: `${p * 100}%`, background: 'var(--accent)',
            }} />
          </div>
          <span>{String(Math.round(p * 100)).padStart(3, '0')}%</span>
        </div>
      </div>
    </section>
  );
}

function AssemblingDashboard({ progress }) {
  // progress 0..1 — reveal parts in sequence
  const parts = [
    range(progress, 0.00, 0.25),  // frame + header
    range(progress, 0.15, 0.40),  // left nav
    range(progress, 0.25, 0.50),  // main chart
    range(progress, 0.40, 0.65),  // stat tiles
    range(progress, 0.55, 0.80),  // right rail
    range(progress, 0.70, 1.00),  // bottom reports
  ];
  return (
    <div style={{
      background: 'var(--bg-2)', borderRadius: 14,
      border: '1px solid var(--rule-strong)',
      opacity: parts[0], transform: `translateY(${lerp(40, 0, parts[0])}px)`,
      boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '14px 20px', borderBottom: '1px solid var(--rule)',
        fontSize: 12, fontFamily: 'var(--mono)',
      }}>
        <div style={{ display: 'flex', gap: 16, color: 'var(--ink-dim)' }}>
          <span>EFG · Research Terminal</span>
          <span>·</span>
          <span>MENA / Equities</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <span className="caps" style={{color:'var(--accent)'}}>Live</span>
          <span style={{color:'var(--ink-dim)'}}>15:24 GST</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 260px', minHeight: 460 }}>
        {/* Left nav */}
        <div style={{
          borderRight: '1px solid var(--rule)', padding: 18,
          opacity: parts[1], transform: `translateX(${lerp(-20, 0, parts[1])}px)`,
        }}>
          {['Markets', 'Coverage', 'Reports', 'Analysts', 'Screener', 'Macro'].map((x, i) => (
            <div key={x} style={{
              padding: '10px 0', fontSize: 13,
              color: i === 2 ? 'var(--ink)' : 'var(--ink-dim)',
              borderLeft: i === 2 ? '2px solid var(--accent)' : '2px solid transparent',
              paddingLeft: 10, marginLeft: -10,
            }}>{x}</div>
          ))}
        </div>

        {/* Center chart */}
        <div style={{ padding: 20 }}>
          <div style={{
            opacity: parts[2],
            transform: `translateY(${lerp(20, 0, parts[2])}px)`,
          }}>
            <div style={{display:'flex', justifyContent:'space-between', marginBottom:14}}>
              <div>
                <div style={{fontSize: 11, color: 'var(--ink-dim)', fontFamily: 'var(--mono)'}}>EGX 30 · INDEX</div>
                <div style={{fontSize: 28, fontFamily: 'var(--serif)'}}>28,412.60 <span style={{fontSize:14, color:'var(--green)'}}>+1.24%</span></div>
              </div>
              <div style={{display:'flex', gap:6, alignSelf:'flex-start'}}>
                {['1D','1W','1M','1Y','5Y'].map((t, i) => (
                  <span key={t} style={{
                    padding:'4px 10px', fontSize:11, fontFamily:'var(--mono)',
                    border: '1px solid var(--rule)', borderRadius: 4,
                    color: i===3 ? 'var(--ink)' : 'var(--ink-dim)',
                    background: i===3 ? 'var(--bg-3)' : 'transparent',
                  }}>{t}</span>
                ))}
              </div>
            </div>
            <svg viewBox="0 0 560 200" style={{width:'100%', height: 200}}>
              {/* grid */}
              {[0,1,2,3].map(i => (
                <line key={i} x1="0" x2="560" y1={50*i + 10} y2={50*i + 10} stroke="rgba(244,239,230,0.06)"/>
              ))}
              <path
                d="M0,150 C60,140 80,120 130,110 C180,100 200,130 240,120 C290,108 320,70 380,75 C420,78 460,55 500,40 L560,30"
                fill="none" stroke="var(--accent)" strokeWidth="2"
                style={{ strokeDasharray: 1400, strokeDashoffset: lerp(1400, 0, parts[2]) }}
              />
              <path
                d="M0,150 C60,140 80,120 130,110 C180,100 200,130 240,120 C290,108 320,70 380,75 C420,78 460,55 500,40 L560,30 L560,200 L0,200 Z"
                fill="url(#g)" opacity={parts[2] * 0.3}
              />
              <defs>
                <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent)"/>
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Stat tiles */}
          <div style={{
            display:'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10,
            marginTop: 18,
            opacity: parts[3], transform: `translateY(${lerp(20, 0, parts[3])}px)`,
          }}>
            {[
              ['Coverage', '420', 'issuers'],
              ['Analysts', '56', 'across 9 desks'],
              ['Reports YTD', '1,284', '+18% vs ’25'],
            ].map(([k,v,s]) => (
              <div key={k} style={{padding:14, border:'1px solid var(--rule)', borderRadius:8}}>
                <div style={{fontSize:10, color:'var(--ink-dim)', textTransform:'uppercase', letterSpacing:'0.1em'}}>{k}</div>
                <div style={{fontFamily:'var(--serif)', fontSize:26, marginTop:6}}>{v}</div>
                <div style={{fontSize:11, color:'var(--ink-faint)'}}>{s}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right rail */}
        <div style={{
          borderLeft: '1px solid var(--rule)', padding: 18,
          opacity: parts[4], transform: `translateX(${lerp(20, 0, parts[4])}px)`,
          fontSize: 12,
        }}>
          <div className="caps" style={{color:'var(--ink-dim)', marginBottom:10}}>Top Picks</div>
          {[
            ['COMI','Commercial Intl', '+2.14%', 'BUY'],
            ['EMAAR','Emaar Properties', '+0.87%', 'BUY'],
            ['STC','Saudi Telecom', '-0.42%', 'HOLD'],
            ['QNBK','QNB Group', '+1.33%', 'BUY'],
          ].map(([s,n,c,r]) => (
            <div key={s} style={{
              display:'flex', justifyContent:'space-between',
              padding:'9px 0', borderBottom:'1px solid var(--rule)',
            }}>
              <div>
                <div>{s}</div>
                <div style={{color:'var(--ink-faint)', fontSize:10}}>{n}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontFamily:'var(--mono)', color: c.startsWith('+') ? 'var(--green)' : 'var(--red)'}}>{c}</div>
                <div style={{
                  fontSize: 9, color: 'var(--accent)',
                  fontFamily: 'var(--mono)', letterSpacing: '0.1em',
                }}>{r}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom reports strip */}
      <div style={{
        borderTop: '1px solid var(--rule)',
        padding: '12px 20px', display: 'flex', gap: 14,
        fontSize: 11, fontFamily: 'var(--mono)',
        opacity: parts[5], transform: `translateY(${lerp(20, 0, parts[5])}px)`,
      }}>
        <span className="caps" style={{color:'var(--accent)'}}>Published today</span>
        <span style={{color:'var(--ink-dim)'}}>Saudi Banks: Q1 preview — net interest margin resilience</span>
        <span style={{color:'var(--ink-faint)'}}>·</span>
        <span style={{color:'var(--ink-dim)'}}>Egypt macro: IMF review implications</span>
      </div>
    </div>
  );
}

/* ========= BOLD HERO ========= */
function HeroBold() {
  const pinRef = React.useRef(null);
  const p = useScrollProgress(pinRef);

  const tIntro  = range(p, 0.0, 0.2);
  const tMap    = range(p, 0.15, 0.50);
  const tCards  = range(p, 0.40, 0.75);
  const tFinal  = range(p, 0.70, 1.0);

  return (
    <section ref={pinRef} className="pinned" style={{ height: '420vh' }}>
      <div className="sticky" style={{
        background: `radial-gradient(circle at 50% ${lerp(120,40,tMap)}%, rgba(255,130,0,${0.16 * smooth(tMap)}) 0%, transparent 60%), var(--bg)`,
      }}>
        {/* Gridlines backdrop that parallaxes */}
        <div className="gridlines" style={{
          position: 'absolute', inset: -100,
          opacity: 0.35,
          transform: `translate3d(${p * -80}px, ${p * -60}px, 0) rotate(-2deg) scale(1.2)`,
        }}/>

        {/* Orbiting ticker rings */}
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: `translate(-50%, -50%) rotate(${p * 120}deg) scale(${lerp(0.5, 1.8, smooth(tMap))})`,
          opacity: smooth(tMap) * 0.6,
          pointerEvents: 'none',
        }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              position: 'absolute', left: '50%', top: '50%',
              width: 600 + i * 200, height: 600 + i * 200,
              transform: `translate(-50%,-50%) rotate(${i * 40}deg)`,
              border: '1px dashed var(--rule-strong)',
              borderRadius: '50%',
            }}/>
          ))}
        </div>

        {/* MENA coverage map */}
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: `translate(-50%, -50%) scale(${lerp(0.7, 1.1, smooth(tMap))})`,
          opacity: smooth(tMap) * (1 - tFinal * 0.6),
          pointerEvents: 'none',
        }}>
          <MenaMap pulse={tMap} />
        </div>

        {/* Headline (stays center, text morphs) */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: '0 40px', textAlign: 'center',
        }}>
          <div className="section-label" style={{
            justifyContent: 'center',
            opacity: 1 - tFinal,
            transform: `translateY(${lerp(0, -20, tFinal)}px)`,
          }}>
            <span>EFG Hermes Research · MENA &amp; Frontier</span>
          </div>
          <h1 className="hero-title" style={{
            maxWidth: 1100,
            transform: `translateY(${lerp(0, -40, tCards)}px)`,
            opacity: 1 - tCards * 0.4,
          }}>
            The{' '}
            <span className="serif" style={{fontStyle:'italic', color:'var(--accent)'}}>
              signal
            </span>
            {' '}beneath<br/>
            <span style={{
              display: 'inline-block',
              background: `linear-gradient(90deg, var(--ink) ${lerp(0, 100, tMap)}%, var(--ink-faint) ${lerp(0, 100, tMap)}%)`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>emerging market noise.</span>
          </h1>
          <p className="lede" style={{
            marginTop: 28,
            opacity: (1 - tCards) * smooth(tIntro),
          }}>
            Thirty years of on-the-ground MENA research. Delivered in a portal built for desks that move before the news does.
          </p>
        </div>

        {/* Floating research cards flying in */}
        <FloatingCards progress={tCards} />

        {/* Final CTA state */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          opacity: smooth(tFinal), pointerEvents: tFinal > 0.5 ? 'auto' : 'none',
        }}>
          <div style={{textAlign:'center'}}>
            <div className="caps" style={{color:'var(--accent)', marginBottom:16}}>Institutional access</div>
            <h2 className="section-title" style={{fontSize: 'clamp(40px, 5.5vw, 80px)'}}>
              See what the desks see.
            </h2>
            <div style={{display:'flex', gap:12, justifyContent:'center', marginTop:28}}>
              <button className="btn btn-primary">Request access →</button>
              <button className="btn btn-ghost">View sample report</button>
            </div>
          </div>
        </div>

        {/* Corner telemetry */}
        <div style={{
          position: 'absolute', left: 56, bottom: 32,
          fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-faint)',
          lineHeight: 1.6,
        }}>
          <div>LAT 24.4539° N</div>
          <div>LON 54.3773° E</div>
          <div style={{color:'var(--accent)'}}>CONVICTION.IDX {(0.74 + p * 0.21).toFixed(3)}</div>
        </div>
        <div style={{
          position: 'absolute', right: 56, bottom: 32,
          fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-faint)',
          textAlign: 'right', lineHeight: 1.6,
        }}>
          <div>SESSION · OPEN</div>
          <div>LAST TICK · 00:00:04 AGO</div>
          <div style={{color:'var(--accent)'}}>{String(Math.round(p * 100)).padStart(3,'0')} · SCROLL</div>
        </div>
      </div>
    </section>
  );
}

function MenaMap({ pulse }) {
  // Dots arranged to suggest MENA geography
  const cities = [
    { name: 'Cairo',    x: 440, y: 260, r: 10, tier: 1 },
    { name: 'Riyadh',   x: 620, y: 320, r: 12, tier: 1 },
    { name: 'Dubai',    x: 720, y: 340, r: 11, tier: 1 },
    { name: 'Doha',     x: 680, y: 330, r: 7, tier: 2 },
    { name: 'Kuwait',   x: 640, y: 290, r: 7, tier: 2 },
    { name: 'Amman',    x: 500, y: 250, r: 6, tier: 2 },
    { name: 'Beirut',   x: 495, y: 235, r: 6, tier: 2 },
    { name: 'Casa.',    x: 180, y: 270, r: 7, tier: 2 },
    { name: 'Lagos',    x: 300, y: 450, r: 8, tier: 3 },
    { name: 'Nairobi',  x: 540, y: 500, r: 7, tier: 3 },
    { name: 'Karachi',  x: 820, y: 350, r: 8, tier: 3 },
  ];
  return (
    <svg width="900" height="640" viewBox="0 0 900 640" style={{maxWidth: '90vw'}}>
      {/* Rough continental outline blobs */}
      <g opacity="0.18" fill="var(--ink)">
        <path d="M120,180 Q260,140 400,180 T680,200 Q780,220 820,270 L800,330 Q780,370 720,390 Q620,400 540,380 Q420,360 320,380 Q220,390 160,340 Q110,290 120,180 Z"/>
        <path d="M260,400 Q360,380 440,420 T640,470 Q680,500 640,540 Q520,580 380,560 Q280,540 240,500 Q220,440 260,400 Z"/>
      </g>

      {/* Longitude arcs */}
      {[0,1,2].map(i => (
        <ellipse key={i} cx="450" cy="340" rx={260 + i * 60} ry={180 + i * 40}
          fill="none" stroke="var(--rule-strong)" strokeDasharray="3 6" />
      ))}

      {/* Connection lines between hubs */}
      {[[0,1],[1,2],[2,3],[1,4],[0,5],[5,6],[0,7],[0,8],[1,10],[2,10]].map(([a,b], i) => {
        const A = cities[a], B = cities[b];
        const show = clamp((pulse - 0.3) / 0.4);
        return (
          <line key={i} x1={A.x} y1={A.y} x2={B.x} y2={B.y}
            stroke="var(--accent)" strokeWidth="1" opacity={show * 0.4} />
        );
      })}

      {/* City dots */}
      {cities.map((c, i) => {
        const on = clamp((pulse - i * 0.04) * 3);
        return (
          <g key={c.name}>
            <circle cx={c.x} cy={c.y} r={c.r * (1 + on * 0.6)} fill="var(--accent)" opacity={on * 0.18}/>
            <circle cx={c.x} cy={c.y} r={c.r * 0.6} fill="var(--accent)" opacity={on}/>
            {c.tier === 1 && (
              <text x={c.x + c.r + 8} y={c.y + 4}
                fontFamily="var(--mono)" fontSize="11"
                fill="var(--ink)" opacity={on}>{c.name.toUpperCase()}</text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function FloatingCards({ progress }) {
  const cards = [
    { title: 'Saudi Banks', subtitle: 'Q1 net interest margin', tag: 'OVERWEIGHT',
      x: -40, y: -30, rot: -6, delay: 0 },
    { title: 'Egypt Macro', subtitle: 'FX liberalization watch', tag: 'NEUTRAL',
      x: 34, y: -18, rot: 4, delay: 0.1 },
    { title: 'UAE Real Estate', subtitle: 'Cycle maturity analysis', tag: 'OVERWEIGHT',
      x: -28, y: 22, rot: -3, delay: 0.2 },
    { title: 'Frontier Flows', subtitle: 'Pakistan / Kenya / Nigeria', tag: 'SELECTIVE',
      x: 30, y: 28, rot: 5, delay: 0.3 },
  ];
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
    }}>
      {cards.map((c, i) => {
        const t = clamp((progress - c.delay) * 2);
        return (
          <div key={i} style={{
            position: 'absolute',
            left: `calc(50% + ${c.x}vw)`,
            top: `calc(50% + ${c.y}vh)`,
            transform: `translate(-50%, -50%) rotate(${c.rot * smooth(t)}deg) scale(${lerp(0.6, 1, smooth(t))})`,
            opacity: smooth(t) * (1 - clamp((progress - 0.85) * 6)),
          }}>
            <ResearchCard {...c}/>
          </div>
        );
      })}
    </div>
  );
}

function ResearchCard({ title, subtitle, tag }) {
  return (
    <div style={{
      width: 280, padding: 18, borderRadius: 10,
      background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
      border: '1px solid var(--rule-strong)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
    }}>
      <div style={{display:'flex', justifyContent:'space-between', marginBottom:12}}>
        <span className="caps" style={{color:'var(--accent)'}}>Research note</span>
        <span className="caps" style={{color:'var(--ink-dim)'}}>{tag}</span>
      </div>
      <div style={{fontFamily:'var(--serif)', fontSize:22, lineHeight:1.1, marginBottom:6}}>{title}</div>
      <div style={{color:'var(--ink-dim)', fontSize:13, marginBottom:14}}>{subtitle}</div>
      <div style={{display:'flex', gap:4, alignItems:'flex-end', height:36}}>
        {[0.4,0.5,0.35,0.6,0.72,0.65,0.8,0.7,0.9,0.85].map((h, i) => (
          <div key={i} style={{
            flex: 1, height: `${h*100}%`,
            background: i > 6 ? 'var(--accent)' : 'var(--rule-strong)',
            borderRadius: 2,
          }}/>
        ))}
      </div>
    </div>
  );
}

/* ========= MOBILE ========= */
function HeroMobile() {
  return (
    <section style={{ padding: '80px 24px 60px', position: 'relative', background: 'var(--bg)' }}>
      <div className="section-label" style={{marginBottom: 20}}>
        <span style={{width:6, height:6, background:'var(--accent)', display:'inline-block'}}/>
        EFG · 2026
      </div>
      <h1 className="hero-title" style={{
        fontSize: 'clamp(40px, 10vw, 56px)',
        lineHeight: 1.02, letterSpacing: '-0.03em',
        marginBottom: 24,
      }}>
        Conviction{' '}
        <span className="serif" style={{fontStyle:'italic', color:'var(--accent)'}}>in numbers</span>,{' '}
        built on decades.
      </h1>
      <p className="lede" style={{marginBottom: 28}}>
        Institutional research across MENA & frontier markets — equity, macro, and thematic coverage used by <em>420+</em> buy-side desks.
      </p>
      <div style={{display:'flex', flexDirection:'column', gap: 10}}>
        <a className="btn btn-primary" href="#" style={{textAlign:'center'}}>Request access</a>
        <a className="btn" href="#" style={{textAlign:'center'}}>See latest research →</a>
      </div>

      {/* Compact stat strip */}
      <div style={{
        marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--rule)',
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16,
      }}>
        <HeroStat big="420" label="Issuers"/>
        <HeroStat big="56"  label="Analysts"/>
        <HeroStat big="30y" label="Coverage"/>
      </div>

      {/* Preview card */}
      <div style={{
        marginTop: 36, padding: 20, borderRadius: 10,
        background: 'var(--bg-2)', border: '1px solid var(--rule)',
      }}>
        <div style={{display:'flex', justifyContent:'space-between', marginBottom: 10}}>
          <span className="caps" style={{color:'var(--accent)', fontSize: 11}}>Today</span>
          <span className="caps" style={{color:'var(--ink-dim)', fontSize: 11}}>Macro · Egypt</span>
        </div>
        <div style={{fontFamily:'var(--serif)', fontSize: 22, lineHeight: 1.15, marginBottom: 8}}>
          FX normalization: what sticks after the float
        </div>
        <div style={{color:'var(--ink-dim)', fontSize: 13}}>
          Mohamed Abu Basha · Head of Macro · 4 min read
        </div>
      </div>
    </section>
  );
}

function HeroStat({ big, label }) {
  return (
    <div>
      <div style={{fontFamily:'var(--serif)', fontSize: 32, lineHeight: 1, marginBottom: 6}}>{big}</div>
      <div className="caps" style={{fontSize: 10, color:'var(--ink-dim)'}}>{label}</div>
    </div>
  );
}

Object.assign(window, { HeroSafe, HeroBold, HeroMobile });
