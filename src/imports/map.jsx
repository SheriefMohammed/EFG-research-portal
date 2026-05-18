/* Map section — MENA coverage with REAL geography
   Loads world-atlas TopoJSON + d3-geo, projects to our viewBox, renders country paths.
   Filters to MENA/adjacent region. Covered countries styled differently. */

const COVERED = {
  // ISO numeric codes (TopoJSON `id` field)
  818: { code:'EGY', name:'Egypt',        companies: 18, mcap:'$42B',
         sectors:[
           { name:'Commercial International Ba…', sector:'Financial Services'},
           { name:'Eastern Company', sector:'Consumer Staples'},
           { name:'Telecom Egypt', sector:'Telecommunications'},
           { name:'Fawry for Banking', sector:'Fintech'},
         ]},
  682: { code:'KSA', name:'Saudi Arabia', companies: 42, mcap:'$680B',
         sectors:[
           { name:'Saudi Aramco', sector:'Energy'},
           { name:'Al Rajhi Bank', sector:'Financial Services'},
           { name:'SABIC', sector:'Materials'},
           { name:'STC', sector:'Telecommunications'},
         ]},
  414: { code:'KWT', name:'Kuwait',       companies: 14, mcap:'$118B',
         sectors:[
           { name:'Kuwait Finance House', sector:'Financial Services'},
           { name:'National Bank of Kuwait', sector:'Financial Services'},
         ]},
  634: { code:'QAT', name:'Qatar',        companies: 12, mcap:'$165B',
         sectors:[
           { name:'Qatar National Bank', sector:'Financial Services'},
           { name:'Industries Qatar', sector:'Industrials'},
         ]},
  784: { code:'UAE', name:'UAE',          companies: 24, mcap:'$340B',
         sectors:[
           { name:'Emirates NBD', sector:'Financial Services'},
           { name:'Emaar Properties', sector:'Real Estate'},
           { name:'DP World', sector:'Industrials'},
         ]},
  512: { code:'OMN', name:'Oman',         companies: 9,  mcap:'$28B',
         sectors:[
           { name:'Bank Muscat', sector:'Financial Services'},
           { name:'Oman Telecom', sector:'Telecommunications'},
         ]},
};

const COUNTRY_LABELS = {
  // Shown as gray labels
  792: 'TURKEY', 760: 'SYRIA', 368: 'IRAQ', 364: 'IRAN',
  400: 'JORDAN', 887: 'YEMEN', 729: 'SUDAN', 434: 'LIBYA',
  376: 'ISRAEL', 422: 'LEBANON', 48: 'BAHRAIN',
};

// Bounding box for our viewport in lon/lat — covers MENA
const MAP_BBOX = { west: -5, east: 70, north: 45, south: 5 };

/* Build a simple equirectangular projection manually so we don't need d3-geo. */
function project([lon, lat], W = 920, H = 620) {
  const { west, east, north, south } = MAP_BBOX;
  const x = ((lon - west) / (east - west)) * W;
  const y = ((north - lat) / (north - south)) * H;
  return [x, y];
}

function polygonToPath(rings) {
  return rings.map(ring => {
    return ring.map((pt, i) => {
      const [x, y] = project(pt);
      return (i === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1);
    }).join('') + 'Z';
  }).join('');
}

function geometryToPath(geom) {
  if (!geom) return '';
  if (geom.type === 'Polygon') return polygonToPath(geom.coordinates);
  if (geom.type === 'MultiPolygon') {
    return geom.coordinates.map(rings => polygonToPath(rings)).join('');
  }
  return '';
}

/* Use TopoJSON — fetch and decode.
   We'll load from cdn.jsdelivr.net world-atlas@2/countries-50m.json
   and decode inline (mini decoder below). */

// Minimal topojson decoder (feature extraction)
function decodeTopology(topology, objectName) {
  const o = topology.objects[objectName];
  const arcs = topology.arcs;
  const { scale = [1,1], translate = [0,0] } = topology.transform || {};
  function decodeArc(i) {
    const reverse = i < 0;
    if (reverse) i = ~i;
    const arc = arcs[i];
    const out = [];
    let x = 0, y = 0;
    for (const [dx, dy] of arc) {
      x += dx; y += dy;
      out.push([x * scale[0] + translate[0], y * scale[1] + translate[1]]);
    }
    return reverse ? out.reverse() : out;
  }
  function assembleRing(arcIndices) {
    const ring = [];
    for (let k = 0; k < arcIndices.length; k++) {
      const seg = decodeArc(arcIndices[k]);
      if (k > 0) seg.shift(); // avoid duplicate join point
      ring.push(...seg);
    }
    return ring;
  }
  function assemblePolygon(rings) {
    return rings.map(assembleRing);
  }
  return o.geometries.map(g => {
    let coords = null;
    if (g.type === 'Polygon') coords = assemblePolygon(g.arcs);
    else if (g.type === 'MultiPolygon') coords = g.arcs.map(p => assemblePolygon(p));
    return { id: g.id, properties: g.properties || {}, type: g.type, coordinates: coords };
  });
}

// Cache topology in window
let _topoPromise = null;
function loadCountries() {
  if (_topoPromise) return _topoPromise;
  _topoPromise = fetch('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json')
    .then(r => r.json())
    .then(topo => decodeTopology(topo, 'countries'));
  return _topoPromise;
}

function useCountries() {
  const [features, setFeatures] = React.useState(null);
  React.useEffect(() => { loadCountries().then(setFeatures); }, []);
  return features;
}

/* Label centroids in lon/lat — so they follow the projection. */
const LABEL_COORDS = {
  818: [29.5, 27.5],   // Egypt (interior)
  682: [45, 24],       // Saudi
  414: [47.7, 29.5],   // Kuwait
  634: [51.2, 25.3],   // Qatar
  784: [54.5, 24],     // UAE
  512: [56, 21],       // Oman
  792: [35, 39],       // Turkey
  760: [38, 35],       // Syria
  368: [44, 33],       // Iraq
  364: [53, 32],       // Iran
  400: [36.5, 31.2],   // Jordan
  887: [47, 15.5],     // Yemen
  729: [30, 15],       // Sudan
  434: [18, 27],       // Libya
  376: [35, 31.5],     // Israel
  422: [35.8, 34],     // Lebanon
  48:  [50.5, 26],     // Bahrain
};

function labelPos(id) {
  const c = LABEL_COORDS[id];
  if (!c) return [0, 0];
  return project(c);
}

function RealMap({ hoveredId, selectedId, onHover, onSelect, revealIds, renderScale = 1 }) {
  const features = useCountries();
  if (!features) {
    return (
      <div style={{
        width:'100%', aspectRatio:'920/620', background:'#E6EEEA',
        display:'flex', alignItems:'center', justifyContent:'center',
        color:'#A7A6A6', fontFamily:'var(--mono)', fontSize: 12,
      }}>LOADING MAP…</div>
    );
  }

  const W = 920, H = 620;
  // Viewbox is slightly cropped to show MENA tightly
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width:'100%', height:'auto', display:'block', background:'#E6EEEA', borderRadius: 8 }}>
      {/* Sea pattern — subtle horizontal lines */}
      <defs>
        <pattern id="sea" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill="#E6EEEA"/>
        </pattern>
      </defs>

      {/* All countries — only render if intersecting our region */}
      {features.map((f, idx) => {
        const id = f.id;
        const covered = COVERED[id];
        const isHover = hoveredId === id;
        const isSelected = selectedId === id;
        const d = geometryToPath(f);
        if (!d) return null;
        // Cull features clearly outside MENA by checking label or first point
        // Quick cull using first coordinate
        const firstPt = f.type === 'Polygon' ? f.coordinates[0][0] : f.coordinates[0][0][0];
        if (firstPt) {
          const [lon, lat] = firstPt;
          if (lon < MAP_BBOX.west - 20 || lon > MAP_BBOX.east + 20 ||
              lat < MAP_BBOX.south - 20 || lat > MAP_BBOX.north + 20) return null;
        }

        let fill, opacity = 1;
        if (covered) {
          if (isSelected || isHover) fill = '#2E7D5A';
          else fill = '#D7D9B6';
          if (revealIds && !revealIds.has(id)) { fill = '#ECECEC'; opacity = 0.6; }
        } else {
          fill = '#ECECEC';
        }

        return (
          <path key={id || 'f'+idx} d={d}
            fill={fill} opacity={opacity}
            stroke="#FFFFFF" strokeWidth="0.8"
            vectorEffect="non-scaling-stroke"
            style={{ cursor: covered ? 'pointer' : 'default', transition:'fill 220ms ease, opacity 220ms ease' }}
            onMouseEnter={() => covered && onHover && onHover(id)}
            onMouseLeave={() => covered && onHover && onHover(null)}
            onClick={() => covered && onSelect && onSelect(id)}
          />
        );
      })}

      {/* Labels */}
      {Object.keys(COUNTRY_LABELS).map(idStr => {
        const id = +idStr;
        const [x, y] = labelPos(id);
        if (!x) return null;
        return (
          <text key={'l'+id} x={x} y={y} textAnchor="middle"
            fontFamily="var(--mono)" fontSize="11" fontWeight="500"
            fill="#B8B8B8" style={{letterSpacing:'0.12em', pointerEvents:'none'}}>
            {COUNTRY_LABELS[id]}
          </text>
        );
      })}
      {Object.entries(COVERED).map(([idStr, c]) => {
        const id = +idStr;
        const [x, y] = labelPos(id);
        if (!x) return null;
        const isHover = hoveredId === id;
        const isSelected = selectedId === id;
        const isSmall = ['KWT','QAT','UAE','BHR'].includes(c.code);
        const label = c.name.toUpperCase();
        let color;
        if (isSelected || isHover) color = '#FFFFFF';
        else color = '#6B7340';

        if (isSmall && !(isSelected || isHover)) {
          const w = c.code === 'KWT' ? 42 : c.code === 'UAE' ? 32 : c.code === 'QAT' ? 38 : 38;
          return (
            <g key={'l'+id} style={{pointerEvents:'none'}}>
              <rect x={x - w/2} y={y - 7} width={w} height={12} fill="#D7D9B6" stroke="#FFFFFF" strokeWidth="0.8"/>
              <text x={x} y={y + 2} textAnchor="middle"
                fontFamily="var(--mono)" fontSize="7.5" fontWeight="700"
                fill="#6B7340" style={{letterSpacing:'0.1em'}}>{label}</text>
            </g>
          );
        }
        return (
          <text key={'l'+id} x={x} y={y} textAnchor="middle"
            fontFamily="var(--mono)" fontSize="12" fontWeight="700"
            fill={color} style={{letterSpacing:'0.14em', pointerEvents:'none', transition:'fill 180ms ease'}}>
            {label}
          </text>
        );
      })}
    </svg>
  );
}

function HoverTooltip({ id }) {
  const c = COVERED[id];
  if (!c) return null;
  const [lx, ly] = labelPos(id);
  const xPct = (lx / 920) * 100;
  const yPct = (ly / 620) * 100;
  return (
    <div style={{
      position: 'absolute', left: `${xPct}%`, top: `${yPct + 4}%`,
      transform: 'translate(-10%, 0)',
      background: '#FFFFFF', padding: '14px 18px',
      border: '1px solid rgba(0,0,0,0.06)',
      boxShadow: '0 10px 24px rgba(0,0,0,0.12)',
      borderRadius: 4, pointerEvents: 'none',
      minWidth: 180, zIndex: 5,
    }}>
      <div style={{fontFamily:'var(--serif)', fontSize: 18, color:'#1D1D1B', marginBottom: 6}}>
        {c.name}
      </div>
      <div style={{fontSize: 13, color:'#555', display:'flex', gap: 12}}>
        <span><b style={{color:'#1D1D1B'}}>{c.companies}</b> Companies</span>
        <span style={{color:'#1D1D1B', fontWeight: 600}}>{c.mcap}</span>
      </div>
    </div>
  );
}

function DetailPanel({ id, onClose }) {
  const c = COVERED[id];
  if (!c) return null;
  return (
    <div style={{
      position: 'absolute', right: 20, top: 20, bottom: 20,
      width: 360, background: '#FFFFFF',
      boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
      borderRadius: 8, overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      zIndex: 10,
    }}>
      <div style={{ background: '#124734', padding: '22px 24px', color:'#fff', display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
        <div>
          <div style={{fontFamily:'var(--serif)', fontSize: 26, lineHeight: 1}}>
            {c.name}
          </div>
          <div style={{fontSize: 13, marginTop: 6, opacity: 0.9}}>
            {c.companies} Companies
          </div>
        </div>
        <button onClick={onClose} style={{
          background:'transparent', border:'none', color:'#fff', fontSize: 18,
          cursor:'pointer', padding: 4,
        }}>✕</button>
      </div>
      <div style={{padding:'16px 20px', borderBottom:'1px solid #EEE'}}>
        <div style={{
          display:'flex', alignItems:'center', gap: 8,
          background:'#F7F7F5', border:'1px solid #E8E8E4', borderRadius: 999,
          padding: '8px 14px', fontSize: 13, color:'#888',
        }}>
          <span>🔍</span>
          <span>Search by company name or ticker</span>
        </div>
      </div>
      <div style={{flex: 1, overflowY:'auto', padding: '8px 0'}}>
        {c.sectors.map((s, i) => (
          <div key={i} style={{
            display:'flex', alignItems:'center', justifyContent:'space-between',
            padding:'14px 20px', borderBottom:'1px solid #F2F2F0', cursor:'pointer',
          }}>
            <div style={{display:'flex', alignItems:'center', gap: 12}}>
              <span style={{color:'#888'}}>🏢</span>
              <div>
                <div style={{fontSize: 14, color:'#1D1D1B', fontWeight: 500, marginBottom: 4}}>
                  {s.name}
                </div>
                <span style={{
                  fontSize: 11, background:'#F0F0EC', padding:'3px 8px', borderRadius: 4,
                  color:'#666',
                }}>{s.sector}</span>
              </div>
            </div>
            <span style={{color:'#BBB'}}>→</span>
          </div>
        ))}
      </div>
      <div style={{padding: 16}}>
        <button style={{
          width:'100%', background:'#124734', color:'#fff', border:'none',
          padding:'14px 20px', borderRadius: 6, fontSize: 14, fontWeight: 500,
          cursor:'pointer',
        }}>View Full Country Page</button>
      </div>
    </div>
  );
}

/* ========= SAFE ========= */
function MapSafe() {
  const [hovered, setHovered] = React.useState(null);
  const [selected, setSelected] = React.useState(null);
  return (
    <section style={{ padding: '140px 0 160px', background: '#F7F7F5' }}>
      <div className="shell">
        <div style={{ marginBottom: 60, maxWidth: 900 }}>
          <div className="section-label" style={{color:'#A7A6A6'}}>Geographic coverage</div>
          <h2 className="section-title" style={{color:'#1D1D1B'}}>
            Seven markets. <span className="serif" style={{fontStyle:'italic', color:'#124734'}}>One desk.</span>
          </h2>
          <p className="lede" style={{marginTop: 20, color:'#555'}}>
            Hover a market to preview. Click to drill into coverage.
          </p>
        </div>
        <div style={{ position: 'relative', background:'#FFFFFF', borderRadius: 12, padding: 0, boxShadow:'0 2px 16px rgba(0,0,0,0.04)', overflow: 'hidden' }}>
          <div style={{ position:'relative' }}>
            <RealMap
              hoveredId={hovered}
              selectedId={selected}
              onHover={setHovered}
              onSelect={setSelected}/>
            {hovered && hovered !== selected && <HoverTooltip id={hovered}/>}
            {selected && <DetailPanel id={selected} onClose={() => setSelected(null)}/>}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========= BOLD ========= */
function MapBold() {
  const ref = React.useRef(null);
  const p = useScrollProgress(ref);
  const coveredIds = [818, 682, 414, 634, 784, 512]; // EGY, KSA, KWT, QAT, UAE, OMN
  const tReveal = range(p, 0.1, 0.4);
  const tCycle  = range(p, 0.42, 1.0);
  const cycleIdx = Math.min(Math.floor(tCycle * coveredIds.length), coveredIds.length - 1);
  const activeId = p > 0.42 ? coveredIds[cycleIdx] : null;
  const [userHover, setUserHover] = React.useState(null);
  const hovered = userHover || activeId;

  // Reveal set based on progress
  const revealIds = new Set();
  const revealCount = Math.floor(tReveal * (coveredIds.length + 0.5));
  for (let i = 0; i < revealCount; i++) revealIds.add(coveredIds[i]);
  // After reveal phase, all are in
  if (p > 0.4) coveredIds.forEach(id => revealIds.add(id));

  return (
    <section ref={ref} className="pinned" style={{ height: '380vh' }}>
      <div className="sticky" style={{ background: '#F7F7F5', display:'flex', flexDirection:'column', padding: '56px' }}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 28}}>
          <div>
            <div className="section-label" style={{color:'#A7A6A6'}}>Geographic coverage</div>
            <h2 className="section-title" style={{color:'#1D1D1B', fontSize:'clamp(32px, 4vw, 56px)', maxWidth: 820}}>
              Seven markets. <span className="serif" style={{fontStyle:'italic', color:'#124734'}}>One desk.</span>
            </h2>
          </div>
          <div style={{textAlign:'right', fontFamily:'var(--mono)', fontSize: 11, color:'#A7A6A6', lineHeight: 1.6}}>
            <div>{p < 0.42 ? 'MARKETS · LIGHTING UP' : 'AUTO CYCLE · ' + (COVERED[hovered]?.code || '—')}</div>
            <div style={{color:'#FF8200'}}>{String(Math.round(p * 100)).padStart(3,'0')}% · SCROLL</div>
          </div>
        </div>
        <div style={{ flex: 1, position:'relative', background:'#FFFFFF', borderRadius: 12, boxShadow:'0 2px 20px rgba(0,0,0,0.06)', overflow:'hidden' }}>
          <div style={{position:'absolute', inset: 0, display:'flex', alignItems:'center', justifyContent:'center', padding: 20}}>
            <div style={{width:'100%', maxHeight:'100%'}}>
              <RealMap
                hoveredId={hovered}
                onHover={setUserHover}
                revealIds={p < 0.42 ? revealIds : null}/>
            </div>
          </div>
          {hovered && <HoverTooltip id={hovered}/>}
        </div>
        <div style={{
          display:'flex', gap: 4, marginTop: 20, justifyContent:'center',
        }}>
          {coveredIds.map(id => {
            const c = COVERED[id];
            return (
              <div key={id} style={{
                padding:'6px 14px', fontFamily:'var(--mono)', fontSize: 11,
                background: hovered === id ? '#124734' : 'transparent',
                color: hovered === id ? '#FFF' : '#666',
                border: '1px solid ' + (hovered === id ? '#124734' : '#DDD'),
                letterSpacing: '0.08em',
              }}>{c.code}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { MapSafe, MapBold });
