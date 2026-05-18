import { Building2 } from 'lucide-react';

interface SearchDropdownProps {
  query: string;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export function SearchDropdown({ query, onClose, onNavigate }: SearchDropdownProps) {
  const companies = [
    {
      name: 'Commercial International Bank (Egypt)',
      sector: 'Banks & Financials',
      ticker: 'COMI',
    },
    {
      name: 'National Bank of Egypt',
      sector: 'Banks & Financials',
      ticker: 'NBE',
    },
    {
      name: 'Al Ahli Bank of Kuwait (Bahrain)',
      sector: 'Banks & Financials',
      ticker: 'ABK',
    },
  ];

  const reports = [
    {
      category: 'TECH',
      date: '12 May 2024',
      title: '2024 Tech Sector Outlook: AI Integration in MENA',
      author: 'Ahmed Al-Mansour',
    },
    {
      category: 'FINANCE',
      date: '15 May 2024',
      title: 'Emerging Blockchain Trends in Middle Eastern Markets',
      author: 'Leila Hassan',
    },
  ];

  const sectors = [
    'Banks & Financials',
    'Real Estate',
    'Energy & Petrochemicals',
    'Telecom & Tech',
  ];

  const countries = [
    { name: 'Egypt', count: 42 },
    { name: 'UAE', count: 68 },
    { name: 'Saudi Arabia', count: 112 },
  ];

  const handleViewAllResults = () => {
    onNavigate(`/search?q=${encodeURIComponent(query)}`);
    onClose();
  };

  const handleCompanyClick = (ticker: string) => {
    onNavigate(`/company/${ticker}`);
    onClose();
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 'calc(100% + 8px)',
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(20px)',
        borderRadius: 8,
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        maxHeight: '80vh',
        overflowY: 'auto',
        zIndex: 1000,
      }}
    >
      <div style={{ padding: '24px' }}>
        {/* Companies Section */}
        <div style={{ marginBottom: 24 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 12,
            }}
          >
            <h3
              style={{
                fontSize: 14,
                color: '#124734',
                fontFamily: 'var(--serif)',
              }}
            >
              Companies
            </h3>
            <button
              onClick={handleViewAllResults}
              style={{
                fontSize: 12,
                color: '#A2AD01',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--serif)',
              }}
            >
              View All
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {companies.map((company, i) => (
              <div
                key={i}
                onClick={() => handleCompanyClick(company.ticker)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 12px',
                  background: '#F9F9F9',
                  borderRadius: 4,
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#F0F0F0')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#F9F9F9')}
              >
                <Building2 size={16} color="#666" />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 14,
                      color: '#1D1D1B',
                      fontFamily: 'var(--serif)',
                    }}
                  >
                    {company.name}
                  </div>
                  <div style={{ fontSize: 11, color: '#999' }}>
                    {company.sector}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Reports Section */}
        <div style={{ marginBottom: 24 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 12,
            }}
          >
            <h3
              style={{
                fontSize: 14,
                color: '#124734',
                fontFamily: 'var(--serif)',
              }}
            >
              Research Reports
            </h3>
            <button
              onClick={handleViewAllResults}
              style={{
                fontSize: 12,
                color: '#A2AD01',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--serif)',
              }}
            >
              View Library
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {reports.map((report, i) => (
              <div
                key={i}
                style={{
                  padding: '14px',
                  background: '#F9F9F9',
                  borderRadius: 6,
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onClick={handleViewAllResults}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#F0F0F0')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#F9F9F9')}
              >
                <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                  <span
                    style={{
                      fontSize: 9,
                      color: '#A2AD01',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {report.category}
                  </span>
                  <span style={{ fontSize: 9, color: '#999' }}>·</span>
                  <span style={{ fontSize: 9, color: '#999' }}>
                    {report.date}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: '#1D1D1B',
                    fontFamily: 'var(--serif)',
                    marginBottom: 6,
                  }}
                >
                  {report.title}
                </div>
                <div style={{ fontSize: 11, color: '#666' }}>
                  By {report.author}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sectors and Countries Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {/* Sectors Section */}
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 12,
              }}
            >
              <h3
                style={{
                  fontSize: 14,
                  color: '#124734',
                  fontFamily: 'var(--serif)',
                }}
              >
                Sectors
              </h3>
              <button
                onClick={handleViewAllResults}
                style={{
                  fontSize: 12,
                  color: '#A2AD01',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--serif)',
                }}
              >
                View All
              </button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {sectors.map((sector, i) => (
                <button
                  key={i}
                  onClick={handleViewAllResults}
                  style={{
                    padding: '8px 16px',
                    background: '#A2AD01',
                    color: 'white',
                    border: 'none',
                    borderRadius: 20,
                    fontSize: 12,
                    cursor: 'pointer',
                    fontFamily: 'var(--serif)',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>

          {/* Countries Section */}
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 12,
              }}
            >
              <h3
                style={{
                  fontSize: 14,
                  color: '#124734',
                  fontFamily: 'var(--serif)',
                }}
              >
                Countries
              </h3>
              <button
                onClick={handleViewAllResults}
                style={{
                  fontSize: 12,
                  color: '#A2AD01',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--serif)',
                }}
              >
                View All
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {countries.map((country, i) => (
                <div
                  key={i}
                  onClick={handleViewAllResults}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 12px',
                    cursor: 'pointer',
                    borderRadius: 4,
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#F9F9F9')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        background: '#124734',
                      }}
                    />
                    <span
                      style={{
                        fontSize: 13,
                        color: '#1D1D1B',
                        fontFamily: 'var(--serif)',
                      }}
                    >
                      {country.name}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      color: '#999',
                      fontFamily: 'monospace',
                    }}
                  >
                    {country.count} Companies
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          borderTop: '1px solid #E0E0E0',
          padding: '16px 24px',
        }}
      >
        <button
          onClick={handleViewAllResults}
          style={{
            width: '100%',
            padding: '14px',
            background: '#124734',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            fontSize: 14,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            fontFamily: 'var(--serif)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#0F3A29')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#124734')}
        >
          View all results for "{query}"
          <span style={{ fontSize: 18 }}>→</span>
        </button>
      </div>
    </div>
  );
}
