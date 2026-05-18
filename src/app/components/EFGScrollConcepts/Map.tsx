import { useState, useEffect, useRef } from 'react';
import { useScrollProgress, range, clamp, lerp } from './hooks';
import { COVERED, slugifyCountryName } from './countryData';
import { useNavigate } from 'react-router';

function slugifyCompanyName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const COUNTRY_LABELS: Record<number, string> = {
  792: 'TURKEY',
  760: 'SYRIA',
  368: 'IRAQ',
  364: 'IRAN',
  400: 'JORDAN',
  887: 'YEMEN',
  729: 'SUDAN',
  434: 'LIBYA',
  376: '',
  422: '',
  48: '',
};

const MAP_BBOX = { west: -5, east: 70, north: 45, south: 5 };

function project(
  [lon, lat]: [number, number],
  W = 920,
  H = 620,
): [number, number] {
  const { west, east, north, south } = MAP_BBOX;
  const x = ((lon - west) / (east - west)) * W;
  const y = ((north - lat) / (north - south)) * H;
  return [x, y];
}

function polygonToPath(rings: number[][][]) {
  return rings
    .map((ring) => {
      return (
        ring
          .map((pt, i) => {
            const [x, y] = project(pt as [number, number]);
            return (i === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1);
          })
          .join('') + 'Z'
      );
    })
    .join('');
}

function geometryToPath(geom: any) {
  if (!geom) return '';
  if (geom.type === 'Polygon') return polygonToPath(geom.coordinates);
  if (geom.type === 'MultiPolygon') {
    return geom.coordinates
      .map((rings: number[][][]) => polygonToPath(rings))
      .join('');
  }
  return '';
}

function decodeTopology(topology: any, objectName: string) {
  const o = topology.objects[objectName];
  const arcs = topology.arcs;
  const { scale = [1, 1], translate = [0, 0] } = topology.transform || {};

  function decodeArc(i: number) {
    const reverse = i < 0;
    if (reverse) i = ~i;
    const arc = arcs[i];
    const out: [number, number][] = [];
    let x = 0,
      y = 0;
    for (const [dx, dy] of arc) {
      x += dx;
      y += dy;
      out.push([x * scale[0] + translate[0], y * scale[1] + translate[1]]);
    }
    return reverse ? out.reverse() : out;
  }

  function assembleRing(arcIndices: number[]) {
    const ring: [number, number][] = [];
    for (let k = 0; k < arcIndices.length; k++) {
      const seg = decodeArc(arcIndices[k]);
      if (k > 0) seg.shift();
      ring.push(...seg);
    }
    return ring;
  }

  function assemblePolygon(rings: number[][]) {
    return rings.map(assembleRing);
  }

  return o.geometries.map((g: any) => {
    let coords = null;
    if (g.type === 'Polygon') coords = assemblePolygon(g.arcs);
    else if (g.type === 'MultiPolygon')
      coords = g.arcs.map((p: number[][]) => assemblePolygon(p));
    return {
      id: g.id,
      properties: g.properties || {},
      type: g.type,
      coordinates: coords,
    };
  });
}

let _topoPromise: Promise<any> | null = null;

function loadCountries() {
  if (_topoPromise) return _topoPromise;
  _topoPromise = fetch(
    'https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json',
  )
    .then((r) => r.json())
    .then((topo) => decodeTopology(topo, 'countries'));
  return _topoPromise;
}

function useCountries() {
  const [features, setFeatures] = useState<any[] | null>(null);
  useEffect(() => {
    loadCountries().then(setFeatures);
  }, []);
  return features;
}

const LABEL_COORDS: Record<number, [number, number]> = {
  818: [29.5, 27.5],
  682: [45, 24],
  414: [47.7, 29.5],
  634: [51.2, 25.3],
  784: [54.5, 24],
  512: [56, 21],
  792: [35, 39],
  760: [38, 35],
  368: [44, 33],
  364: [53, 32],
  400: [36.5, 31.2],
  887: [47, 15.5],
  729: [30, 15],
  434: [18, 27],
  376: [35, 31.5],
  422: [35.8, 34],
  48: [50.5, 26],
};

function labelPos(id: number): [number, number] {
  const c = LABEL_COORDS[id];
  if (!c) return [0, 0];
  return project(c);
}

interface RealMapProps {
  hoveredId?: number | null;
  selectedId?: number | null;
  onHover?: (id: number | null) => void;
  onSelect?: (id: number) => void;
  revealIds?: Set<number> | null;
}

function RealMap({
  hoveredId,
  selectedId,
  onHover,
  onSelect,
  revealIds,
}: RealMapProps) {
  const features = useCountries();
  if (!features) {
    return (
      <div
        style={{
          width: '100%',
          aspectRatio: '920/620',
          background: '#DFE9E6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#A7A6A6',
          fontFamily: 'var(--mono)',
          fontSize: 12,
        }}
      >
        LOADING MAP…
      </div>
    );
  }

  const W = 920,
    H = 620;

  return (
    <svg className='coverage-map-svg' viewBox={`0 0 ${W} ${H}`}>
      {features.map((f, idx) => {
        const id = f.id;
        const covered = COVERED[id];
        const isHover = hoveredId === id;
        const isSelected = selectedId === id;
        const d = geometryToPath(f);
        if (!d) return null;

        const firstPt =
          f.type === 'Polygon' ? f.coordinates[0][0] : f.coordinates[0][0][0];
        if (firstPt) {
          const [lon, lat] = firstPt;
          if (
            lon < MAP_BBOX.west - 20 ||
            lon > MAP_BBOX.east + 20 ||
            lat < MAP_BBOX.south - 20 ||
            lat > MAP_BBOX.north + 20
          )
            return null;
        }

        let fill,
          opacity = 1;
        if (covered) {
          if (isSelected || isHover) fill = '#38A679';
          else fill = '#DFE0BF';
          if (revealIds && !revealIds.has(id)) {
            fill = '#F1F0EE';
            opacity = 0.6;
          }
        } else {
          fill = '#F1F0EE';
        }

        return (
          <path
            key={id || 'f' + idx}
            d={d}
            fill={fill}
            opacity={opacity}
            stroke='#FFFFFF'
            strokeWidth='1.25'
            vectorEffect='non-scaling-stroke'
            style={{
              cursor: covered ? 'pointer' : 'default',
              transition:
                'fill 220ms ease, opacity 220ms ease, filter 220ms ease',
              filter:
                isSelected || isHover
                  ? 'drop-shadow(0 4px 8px rgba(18,71,52,0.12))'
                  : 'none',
            }}
            onMouseEnter={() => covered && onHover && onHover(id)}
            onMouseLeave={() => covered && onHover && onHover(null)}
            onClick={() => covered && onSelect && onSelect(id)}
          />
        );
      })}

      {Object.keys(COUNTRY_LABELS).map((idStr) => {
        const id = +idStr;
        const [x, y] = labelPos(id);
        if (!x) return null;
        return (
          <text
            key={'l' + id}
            x={x}
            y={y}
            textAnchor='middle'
            fontFamily='var(--mono)'
            fontSize='11'
            fontWeight='500'
            fill='#B5B6B5'
            style={{ letterSpacing: '0.12em', pointerEvents: 'none' }}
          >
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
        const isSmall = ['KWT', 'QAT', 'UAE', 'BHR'].includes(c.code);
        const label = c.name.toUpperCase();
        let color = 'white';
        let textShadow = 'none';
        let letterSpacing = '0.14em';
        let fontWeight = '700';

        if (isSelected || isHover) {
          color = 'white';
          textShadow = '0 1px 2px rgba(0,0,0,0.25)';
          letterSpacing = '0.12em';
          fontWeight = '600';
        } else {
          color = '#7C842A';
        }
        if (isSmall && !(isSelected || isHover)) {
          const w =
            c.code === 'KWT'
              ? 42
              : c.code === 'UAE'
                ? 32
                : c.code === 'QAT'
                  ? 38
                  : 38;
          return (
            <g key={'l' + id} style={{ pointerEvents: 'none' }}>
              <rect
                x={x - w / 2}
                y={y - 7}
                width={w}
                height={12}
                fill='#DFE0BF'
                stroke='#FFFFFF'
                strokeWidth='1'
              />
              <text
                x={x}
                y={y + 2}
                textAnchor='middle'
                fontFamily='var(--mono)'
                fontSize='7.5'
                fontWeight='700'
                fill='#7C842A'
                style={{ letterSpacing: '0.1em' }}
              >
                {label}
              </text>
            </g>
          );
        }
        return (
          <text
            key={'l' + id}
            x={x}
            y={y}
            textAnchor='middle'
            fontFamily='var(--mono)'
            fontSize='12'
            fontWeight={fontWeight}
            fill={color}
            style={{
              letterSpacing,
              pointerEvents: 'none',
              transition: 'fill 180ms ease',
              filter:
                textShadow !== 'none' ? `drop-shadow(${textShadow})` : 'none',
            }}
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}

function HoverTooltip({ id }: { id: number }) {
  const c = COVERED[id];
  if (!c) return null;
  const [lx, ly] = labelPos(id);
  const xPct = (lx / 920) * 100;
  const yPct = (ly / 620) * 100;
  return (
    <div
      style={{
        position: 'absolute',
        left: `${xPct}%`,
        top: `${yPct - 18}%`,
        transform: 'translate(-50%, -100%)',
        background: '#FFFFFF',
        padding: '18px 22px',
        border: '1px solid rgba(18,71,52,0.06)',
        boxShadow: '0 14px 30px rgba(18,71,52,0.12)',
        borderRadius: 8,
        pointerEvents: 'none',
        minWidth: 184,
        zIndex: 20,
        animation: 'mapTooltipIn 180ms ease-out both',
      }}
    >
      <div
        style={{
          fontSize: 18,
          color: '#1D1D1B',
          marginBottom: 8,
          fontWeight: 700,
        }}
      >
        {c.name}
      </div>
      <div
        style={{
          fontSize: 15,
          color: '#1D1D1B',
          display: 'flex',
          gap: 18,
          whiteSpace: 'nowrap',
        }}
      >
        <span>
          <b style={{ color: '#1D1D1B', fontWeight: 700 }}>{c.companies}</b>{' '}
          Companies
        </span>
        <span style={{ color: '#1D1D1B', fontWeight: 600 }}>{c.mcap}</span>
      </div>
    </div>
  );
}

function DetailPanel({
  id,
  onClose,
  onCompanyClick,
  onCountryPageClick,
}: {
  id: number;
  onClose: () => void;
  onCompanyClick: (companyName: string) => void;
  onCountryPageClick: (countryName: string) => void;
}) {
  const c = COVERED[id];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  if (!c) return null;

  return (
    <div
      style={{
        position: 'absolute',
        right: 24,
        top: '50%',
        width: 440,
        height: 'auto',
        maxHeight: '80vh',
        background:
          'linear-gradient(to left, rgba(255,255,255,0.55) 60%, rgba(255,255,255,0.35) 100%)',
        backdropFilter: 'blur(30px) saturate(140%)',
        WebkitBackdropFilter: 'blur(30px) saturate(140%)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
        border: '1px solid rgba(255,255,255,0.35)',
        borderRadius: 28,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 10,
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translateY(-50%) translateX(0) scale(1)'
          : 'translateY(-50%) translateX(20px) scale(0.98)',
        transition:
          'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1), transform 400ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Green Header */}
      <div
        style={{
          background:
            'linear-gradient(135deg, #0f3d2e 0%, #174f3c 60%, rgba(23,79,60,0.85) 100%)',
          padding: '26px 28px',
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
          position: 'relative',
        }}
      >
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            background: 'rgba(255, 255, 255, 0.15)',
            border: 'none',
            color: '#FFFFFF',
            width: 32,
            height: 32,
            borderRadius: '50%',
            fontSize: 16,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 200ms ease',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')
          }
        >
          ✕
        </button>
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 32,
            lineHeight: 1.1,
            color: '#FFFFFF',
            fontWeight: 600,
            marginBottom: 8,
          }}
        >
          {c.name}
        </div>
        <div
          style={{
            fontSize: 14,
            color: 'rgba(255, 255, 255, 0.75)',
            fontWeight: 400,
            letterSpacing: '0.01em',
          }}
        >
          {c.companies} Companies
        </div>
      </div>

      {/* Search Field */}
      <div style={{ padding: '24px 28px 20px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: 'rgba(240, 242, 240, 0.7)',
            borderRadius: 999,
            padding: '14px 20px',
            fontSize: 14,
            color: '#7A8A7C',
            height: 48,
            border: '1px solid rgba(0, 0, 0, 0.04)',
            boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.04)',
          }}
        >
          <span style={{ fontSize: 18, opacity: 0.6 }}>🔍</span>
          <span style={{ fontWeight: 400 }}>
            Search by company name or ticker
          </span>
        </div>
      </div>

      {/* Company List */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '0 28px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(18, 71, 52, 0.2) transparent',
        }}
      >
        {c.sectors.slice(0, 4).map((s, i) => (
          <div
            key={i}
            onClick={() => onCompanyClick(s.name)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '18px 20px',
              background: 'rgba(255, 255, 255, 0.85)',
              borderRadius: 20,
              cursor: 'pointer',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
              transition: 'all 240ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
              const arrow = e.currentTarget.querySelector(
                '.arrow',
              ) as HTMLElement;
              if (arrow) arrow.style.transform = 'translateX(4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.04)';
              const arrow = e.currentTarget.querySelector(
                '.arrow',
              ) as HTMLElement;
              if (arrow) arrow.style.transform = 'translateX(0)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: 20, opacity: 0.8 }}>🏢</span>
              <div>
                <div
                  style={{
                    fontSize: 15,
                    color: '#1A3A28',
                    fontWeight: 600,
                    marginBottom: 8,
                    lineHeight: 1.2,
                  }}
                >
                  {s.name}
                </div>
                <span
                  style={{
                    fontSize: 11,
                    background: 'rgba(18, 71, 52, 0.1)',
                    padding: '5px 11px',
                    borderRadius: 999,
                    color: '#2E5F45',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    display: 'inline-block',
                  }}
                >
                  {s.sector}
                </span>
              </div>
            </div>
            <span
              className='arrow'
              style={{
                color: '#A7C4AA',
                fontSize: 20,
                transition: 'transform 240ms cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              →
            </span>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{ padding: '0 28px 28px' }}>
        <button
          onClick={() => onCountryPageClick(c.name)}
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #124734 0%, #0D3323 100%)',
            color: '#FFFFFF',
            border: 'none',
            padding: '0',
            borderRadius: 999,
            fontSize: 15,
            fontWeight: 600,
            cursor: 'pointer',
            height: 56,
            transition: 'all 240ms cubic-bezier(0.22, 1, 0.36, 1)',
            letterSpacing: '0.01em',
            boxShadow: '0 4px 12px rgba(18, 71, 52, 0.25)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow =
              '0 8px 20px rgba(18, 71, 52, 0.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow =
              '0 4px 12px rgba(18, 71, 52, 0.25)';
          }}
        >
          View Full Country Page
        </button>
      </div>
    </div>
  );
}

export function MapSafe() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleCompanyClick = (companyName: string) => {
    navigate(`/company/${slugifyCompanyName(companyName)}`);
  };

  const handleCountryPageClick = (countryName: string) => {
    navigate(`/country/${slugifyCountryName(countryName)}`);
  };

  return (
    <section className='coverage-map-section'>
      <div className='coverage-map-shell'>
        <div className='coverage-map-stage'>
          <RealMap
            hoveredId={hovered}
            selectedId={selected}
            onHover={setHovered}
            onSelect={setSelected}
          />
          {hovered && hovered !== selected && <HoverTooltip id={hovered} />}
          {selected && (
            <DetailPanel
              id={selected}
              onClose={() => setSelected(null)}
              onCompanyClick={handleCompanyClick}
              onCountryPageClick={handleCountryPageClick}
            />
          )}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100px',
            background:
              'linear-gradient(to bottom, rgba(247,247,245,0) 0%, rgba(247,247,245,0.03) 50%, rgba(247,247,245,0.06) 80%, rgba(247,247,245,0.08) 100%)',
            pointerEvents: 'none',
            zIndex: 5,
          }}
        />
      </div>
    </section>
  );
}
