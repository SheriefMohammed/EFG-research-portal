import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, Building2, Search } from 'lucide-react';
import { analystPathFor } from './analystData';

interface SearchDropdownProps {
  query: string;
  onQueryChange: (query: string) => void;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export function SearchDropdown({ query, onQueryChange, onClose, onNavigate }: SearchDropdownProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const displayQuery = query.trim() || 'Commercial';

  const companies = [
    { name: 'Commercial International Bank (Egypt)', sector: 'Banks & Financials', ticker: 'COMI' },
    { name: 'National Bank of Egypt', sector: 'Banks & Financials', ticker: 'NBE' },
    { name: 'Al Ahli Bank of Kuwait (Bahrain)', sector: 'Banks & Financials', ticker: 'ABK' },
  ];

  const reports = [
    {
      category: 'TECH',
      country: 'Saudi Arabia',
      date: '12 May 2024',
      title: '2024 Tech Sector Outlook: AI Integration in MENA',
      author: 'Ahmed Al-Mansour',
    },
    {
      category: 'FINANCE',
      country: 'Saudi Arabia',
      date: '15 May 2024',
      title: 'Emerging Blockchain Trends in Middle Eastern Markets',
      author: 'Leila Hassan',
    },
  ];

  const sectors = ['Banks & Financials', 'Real Estate', 'Energy & Petrochemicals', 'Telecom & Tech'];

  const countries = [
    { name: 'Egypt', count: 42 },
    { name: 'UAE', count: 68 },
    { name: 'Saudi Arabia', count: 112 },
  ];

  useEffect(() => {
    inputRef.current?.focus();
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [onClose]);

  const handleViewAllResults = () => {
    onNavigate(`/search?q=${encodeURIComponent(displayQuery)}`);
    onClose();
  };

  const handleCompanyClick = (ticker: string) => {
    onNavigate(`/company/${ticker}`);
    onClose();
  };

  const handleReportClick = (author: string) => {
    onNavigate(analystPathFor(author));
    onClose();
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 3000,
        background: 'rgba(29, 29, 27, 0.22)',
        backdropFilter: 'blur(1px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '16px min(18px, 4vw)',
        overflowY: 'auto',
      }}
    >
      <div
        className="search-dialog"
        onMouseDown={(event) => event.stopPropagation()}
        style={{
          width: 'min(900px, 100%)',
          marginTop: 'min(8vh, 42px)',
          color: '#1D1D1B',
        }}
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleViewAllResults();
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.98)',
            borderRadius: 10,
            padding: '5px 6px 5px 24px',
            marginBottom: 32,
            boxShadow: '0 1px 0 rgba(0,0,0,0.08), 0 12px 30px rgba(0,0,0,0.08)',
          }}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search research, companies, sectors..."
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            style={{
              flex: 1,
              minWidth: 0,
              border: 'none',
              background: 'transparent',
              fontSize: 13,
              color: '#1D1D1B',
              outline: 'none',
              padding: '13px 0',
            }}
          />
          <button
            type="submit"
            aria-label="Search"
            style={{
              width: 46,
              height: 46,
              background: '#A2AD01',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: '0 0 auto',
            }}
          >
            <Search size={22} color="white" />
          </button>
        </form>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderRadius: 16,
            boxShadow: '0 24px 70px rgba(0,0,0,0.20)',
            overflow: 'hidden',
          }}
        >
          <div style={{ padding: '28px 32px 24px' }}>
            <div style={{ marginBottom: 26 }}>
              <SectionHeader title="Companies" action="View All ->" onClick={handleViewAllResults} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {companies.map((company, i) => (
                  <button
                    key={company.ticker}
                    onClick={() => handleCompanyClick(company.ticker)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '12px',
                      border: 'none',
                      borderBottom: i === companies.length - 1 ? 'none' : '1px solid #EAEAEA',
                      background: 'transparent',
                      cursor: 'pointer',
                      textAlign: 'left',
                      width: '100%',
                    }}
                  >
                    <Building2 size={15} color="#8A8A8A" />
                    <span style={{ flex: 1, minWidth: 0 }}>
                      <span
                        style={{
                          display: 'block',
                          fontSize: 13,
                          color: '#124734',
                          fontFamily: 'var(--serif)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {company.name}
                      </span>
                      <span style={{ display: 'block', fontSize: 11, color: '#8A8A8A' }}>{company.sector}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 28 }}>
              <SectionHeader title="Research Reports" action="View Library ->" onClick={handleViewAllResults} />
              <div className="search-dialog-report-grid">
                {reports.map((report) => (
                  <button
                    key={report.title}
                    onClick={() => handleReportClick(report.author)}
                    style={{
                      padding: '18px 20px',
                      background: '#F1F1F1',
                      border: 'none',
                      borderRadius: 8,
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ display: 'flex', gap: 8, marginBottom: 8, minWidth: 0 }}>
                      <span style={tagStyle}>{report.category}</span>
                      <span style={{ fontSize: 9, color: '#999' }}>-</span>
                      <span style={tagStyle}>{report.country}</span>
                      <span style={{ fontSize: 9, color: '#999' }}>-</span>
                      <span style={{ fontSize: 9, color: '#999' }}>{report.date}</span>
                    </span>
                    <span
                      style={{
                        display: 'block',
                        fontSize: 13,
                        color: '#124734',
                        fontFamily: 'var(--serif)',
                        marginBottom: 8,
                        lineHeight: 1.3,
                      }}
                    >
                      {report.title}
                    </span>
                    <span style={{ display: 'block', fontSize: 11, color: '#8A8A8A' }}>By {report.author}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="search-dialog-bottom-grid">
              <div>
                <SectionHeader title="Sectors" action="View All ->" onClick={handleViewAllResults} />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {sectors.map((sector) => (
                    <button
                      key={sector}
                      onClick={handleViewAllResults}
                      style={{
                        padding: '8px 16px',
                        background: '#A2AD01',
                        color: 'white',
                        border: 'none',
                        borderRadius: 999,
                        fontSize: 11,
                        cursor: 'pointer',
                        fontFamily: 'var(--serif)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {sector}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeader title="Countries" action="View All ->" onClick={handleViewAllResults} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {countries.map((country, i) => (
                    <button
                      key={country.name}
                      onClick={handleViewAllResults}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '8px 0',
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        gap: 12,
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
                        <span
                          style={{
                            width: 16,
                            height: 16,
                            borderRadius: '50%',
                            background: i === 0 ? '#2A2115' : i === 1 ? '#124734' : '#006B45',
                            boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.16)',
                            flex: '0 0 auto',
                          }}
                        />
                        <span style={{ fontSize: 13, color: '#1D1D1B', fontFamily: 'var(--serif)', whiteSpace: 'nowrap' }}>
                          {country.name}
                        </span>
                      </span>
                      <span style={{ fontSize: 11, color: '#9A9A9A', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>
                        {country.count} Companies
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleViewAllResults}
            style={{
              width: '100%',
              padding: '24px 20px',
              background: '#124734',
              color: 'white',
              border: 'none',
              borderRadius: 0,
              fontSize: 14,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              fontFamily: 'var(--serif)',
            }}
          >
            View all results for "{displayQuery}"
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

function SectionHeader({ title, action, onClick }: { title: string; action: string; onClick: () => void }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
      }}
    >
      <h3 style={{ fontSize: 14, color: '#124734', fontFamily: 'var(--serif)', margin: 0 }}>{title}</h3>
      <button
        onClick={onClick}
        style={{
          fontSize: 12,
          color: '#A2AD01',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--serif)',
        }}
      >
        {action}
      </button>
    </div>
  );
}

const tagStyle = {
  fontSize: 9,
  color: '#A2AD01',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
} as const;
