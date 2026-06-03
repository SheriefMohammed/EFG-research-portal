import { useMemo, useState, type CSSProperties } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { Link, useParams } from 'react-router';
import { getAnalystBySlug } from './analystData';

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function AnalystPage() {
  const { analystSlug = '' } = useParams();
  const analyst = getAnalystBySlug(analystSlug);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedDateRange, setSelectedDateRange] = useState('all');

  const countryOptions = useMemo(() => {
    const items = Array.from(new Set(analyst.reports.map((report) => report.country))).sort((a, b) =>
      a.localeCompare(b)
    );
    return ['all', ...items];
  }, [analyst.reports]);

  const sectorOptions = useMemo(() => {
    const items = Array.from(new Set(analyst.reports.map((report) => report.sector))).sort((a, b) =>
      a.localeCompare(b)
    );
    return ['all', ...items];
  }, [analyst.reports]);

  const filteredReports = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return analyst.reports.filter((report) => {
      const matchesQuery =
        !query ||
        report.title.toLowerCase().includes(query) ||
        report.summary.toLowerCase().includes(query) ||
        report.country.toLowerCase().includes(query) ||
        report.sector.toLowerCase().includes(query);

      const matchesCountry = selectedCountry === 'all' || report.country === selectedCountry;
      const matchesSector = selectedSector === 'all' || report.sector === selectedSector;
      const matchesDate = selectedDateRange === 'all' || report.date.includes(selectedDateRange);

      return matchesQuery && matchesCountry && matchesSector && matchesDate;
    });
  }, [analyst.reports, searchTerm, selectedCountry, selectedSector, selectedDateRange]);

  return (
    <main style={{ background: '#F7F7F5', minHeight: '100vh' }}>
      <section
        style={{
          background: 'linear-gradient(135deg, #0D3B2A 0%, #124734 100%)',
          padding: '0 56px',
        }}
      >
        <div style={{ maxWidth: 1360, margin: '0 auto' }}>
          <div
            style={{
              padding: '20px 0',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 24,
            }}
          >
            <nav style={{ display: 'flex', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.6)' }} aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span>&gt;</span>
              <Link to="/search?q=research%20library">Research Library</Link>
              <span>&gt;</span>
              <span style={{ color: 'rgba(255,255,255,0.92)' }}>{analyst.name}</span>
            </nav>

            <Link
              to="/search?q=analysts"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '8px 16px',
                borderRadius: 6,
                fontSize: 13,
                color: '#FFFFFF',
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}
            >
              View all analysts
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '150px minmax(0, 1fr) 220px',
              gap: 32,
              paddingTop: 34,
              paddingBottom: 34,
              alignItems: 'start',
            }}
          >
            <div style={portraitStyle}>
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.18), transparent 30%), linear-gradient(145deg, #D8E6D6 0%, #78A07D 28%, #124734 100%)',
                }}
              />
              <div style={portraitInitialsStyle}>{initials(analyst.name)}</div>
            </div>

            <div style={{ paddingTop: 2 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
                <span style={badgeStyle}>Top Rated Analyst 2024</span>
                <span style={badgeStyle}>{analyst.desk}</span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(38px, 4.8vw, 58px)',
                  color: '#FFFFFF',
                  margin: '0 0 10px',
                  lineHeight: 1.02,
                  fontWeight: 400,
                }}
              >
                {analyst.name}
              </h1>

              <div style={{ fontSize: 18, color: 'rgba(255,255,255,0.82)', marginBottom: 18 }}>
                {analyst.title}
              </div>

              <p style={{ maxWidth: 820, fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>
                {analyst.bio}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 22 }}>
                {analyst.focus.map((item) => (
                  <span key={item} style={focusChipStyle}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div style={contactPanelStyle}>
              <div style={panelLabelStyle}>Direct Contact</div>
              <div style={contactLineStyle}>{analyst.email}</div>
              <div style={contactLineStyle}>{analyst.phone}</div>
              <div style={panelLabelStyle}>Location</div>
              <div style={contactLineStyle}>{analyst.location}</div>
              <div style={panelLabelStyle}>Coverage</div>
              <div style={contactLineStyle}>{analyst.desk}</div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: 18,
              paddingBottom: 24,
            }}
          >
            {analyst.stats.map((stat) => (
              <div key={stat.label} style={{ borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: 18 }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>
                  {stat.label}
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 22, color: '#FFFFFF' }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 56px 100px' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', display: 'grid', gridTemplateColumns: '280px minmax(0, 1fr)', gap: 28, alignItems: 'start' }}>
          <aside style={{ display: 'grid', gap: 18 }}>
            <div style={whiteCardStyle}>
              <div style={asideHeaderStyle}>Direct Contact</div>
              <div style={asideLineStyle}>Email</div>
              <div style={asideValueStyle}>{analyst.email}</div>
              <div style={asideLineStyle}>Phone</div>
              <div style={asideValueStyle}>{analyst.phone}</div>
              <div style={asideLineStyle}>Desk</div>
              <div style={asideValueStyle}>{analyst.desk}</div>
            </div>

            <div style={whiteCardStyle}>
              <div style={asideHeaderStyle}>Coverage Focus</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {analyst.focus.map((item) => (
                  <div key={item} style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                    <span style={{ color: '#124734', fontFamily: 'var(--serif)', fontSize: 14 }}>{item}</span>
                    <span style={{ color: '#8D8D8D', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em' }}>LIVE</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 14,
                alignItems: 'center',
                marginBottom: 22,
              }}
            >
              <label style={searchFieldStyle}>
                <Search size={16} />
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search reports..."
                  style={searchInputStyle}
                />
              </label>

              <DropdownFilter
                label="Country"
                value={selectedCountry}
                onChange={setSelectedCountry}
                options={countryOptions}
              />

              <DropdownFilter
                label="Sector"
                value={selectedSector}
                onChange={setSelectedSector}
                options={sectorOptions}
              />

              <DropdownFilter
                label="Date Range"
                value={selectedDateRange}
                onChange={setSelectedDateRange}
                options={['all', '2026', '2025', '2024']}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 18, gap: 18, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 11, color: '#8F8F8F', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>
                  Latest Research
                </div>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 48px)', color: '#124734', margin: 0, lineHeight: 1 }}>
                  Reports from {analyst.name}
                </h2>
              </div>
              <Link to="/search?q=reports" style={{ color: '#96A300', fontFamily: 'var(--serif)', fontSize: 13 }}>
                View all reports -&gt;
              </Link>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: 12,
              }}
            >
              {filteredReports.map((report) => (
                <article
                  key={`${report.title}-${report.date}`}
                  className="country-report-card analyst-report-card"
                >
                  <div>
                    {report.country} <span>-</span> {report.date}
                  </div>
                  <h3>{report.title}</h3>
                  <p>{report.summary}</p>
                  <footer>
                    <span>
                      {analyst.name}
                      <small>{report.sector}</small>
                    </span>
                    <button type="button" onClick={(event) => event.stopPropagation()}>
                      Download PDF
                    </button>
                  </footer>
                </article>
              ))}
            </div>
            {filteredReports.length === 0 && (
              <div style={{ marginTop: 18, color: '#8A8A8A', fontSize: 13, fontFamily: 'var(--serif)' }}>
                No reports match the current filters.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

const portraitStyle: CSSProperties = {
  width: 150,
  height: 150,
  borderRadius: 16,
  background: 'rgba(255,255,255,0.12)',
  overflow: 'hidden',
  position: 'relative',
  boxShadow: '0 18px 40px rgba(0,0,0,0.18)',
};

const portraitInitialsStyle: CSSProperties = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#0B2218',
  fontFamily: 'var(--serif)',
  fontSize: 42,
  fontWeight: 700,
  letterSpacing: '-0.05em',
};

const badgeStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '6px 10px',
  borderRadius: 999,
  background: 'rgba(255,255,255,0.1)',
  border: '1px solid rgba(255,255,255,0.12)',
  color: '#FFFFFF',
  fontSize: 11,
  fontFamily: 'var(--mono)',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
};

const focusChipStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '6px 12px',
  borderRadius: 999,
  background: 'rgba(162, 173, 1, 0.14)',
  border: '1px solid rgba(162, 173, 1, 0.18)',
  color: '#EFF4D3',
  fontSize: 11,
  fontFamily: 'var(--mono)',
  letterSpacing: '0.06em',
};

const panelLabelStyle: CSSProperties = {
  fontSize: 10,
  letterSpacing: '0.12em',
  color: 'rgba(255,255,255,0.52)',
  textTransform: 'uppercase',
  margin: '0 0 8px',
  fontFamily: 'var(--mono)',
};

const contactLineStyle: CSSProperties = {
  fontSize: 13,
  color: '#FFFFFF',
  marginBottom: 14,
  lineHeight: 1.5,
  wordBreak: 'break-word',
};

const contactPanelStyle: CSSProperties = {
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.14)',
  borderRadius: 14,
  padding: 18,
};

const whiteCardStyle: CSSProperties = {
  background: '#FFFFFF',
  border: '1px solid #E5E8E6',
  borderRadius: 10,
  padding: 18,
  boxShadow: '0 10px 24px rgba(18, 71, 52, 0.04)',
};

const asideHeaderStyle: CSSProperties = {
  fontSize: 11,
  letterSpacing: '0.12em',
  color: '#888',
  textTransform: 'uppercase',
  marginBottom: 16,
  fontFamily: 'var(--mono)',
};

const asideLineStyle: CSSProperties = {
  fontSize: 10,
  letterSpacing: '0.1em',
  color: '#A1A1A1',
  textTransform: 'uppercase',
  marginBottom: 6,
  marginTop: 10,
  fontFamily: 'var(--mono)',
};

const asideValueStyle: CSSProperties = {
  fontSize: 13,
  color: '#124734',
  lineHeight: 1.5,
  wordBreak: 'break-word',
  fontFamily: 'var(--serif)',
};

const searchFieldStyle: CSSProperties = {
  flex: '1 1 320px',
  height: 44,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: '0 14px',
  border: '1px solid #E5E8E6',
  borderRadius: 10,
  background: '#FFF',
  color: '#789092',
};

const searchInputStyle: CSSProperties = {
  width: '100%',
  border: 0,
  outline: 0,
  fontFamily: 'var(--serif)',
  fontSize: 12,
  color: '#1D1D1B',
};

const dropdownStyle: CSSProperties = {
  position: 'relative',
  flex: '0 0 auto',
  minWidth: 124,
  height: 44,
  border: '1px solid #E5E8E6',
  borderRadius: 10,
  background: '#FFF',
  overflow: 'hidden',
};

const dropdownSelectStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  padding: '0 36px 0 14px',
  border: 0,
  background: 'transparent',
  color: '#124734',
  fontFamily: 'var(--serif)',
  fontSize: 13,
  appearance: 'none',
  outline: 'none',
  cursor: 'pointer',
};

function DropdownFilter({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  const allLabel = label === 'Country' ? 'All Countries' : label === 'Sector' ? 'All Sectors' : 'All Dates';

  return (
    <label style={dropdownStyle}>
      <select value={value} onChange={(event) => onChange(event.target.value)} style={dropdownSelectStyle} aria-label={label}>
        <option value="all">{allLabel}</option>
        {options
          .filter((item) => item !== 'all')
          .map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
      <ChevronDown
        size={14}
        style={{
          position: 'absolute',
          right: 14,
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#8A8A8A',
          pointerEvents: 'none',
        }}
      />
    </label>
  );
}
