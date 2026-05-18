import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, ArrowLeft } from 'lucide-react';
import imgLogo from '../../../imports/Link→EfgHermeslogoPng/2815474073593b9f7b05f597eda18d9dd105499b.png';

interface SearchResultsProps {
  onNavigateHome: () => void;
}

export function SearchResults({ onNavigateHome }: SearchResultsProps) {
  const [countryExpanded, setCountryExpanded] = useState(true);
  const [sectorExpanded, setSectorExpanded] = useState(true);
  const [dateExpanded, setDateExpanded] = useState(false);

  const [selectedCountries, setSelectedCountries] = useState(['Saudi Arabia']);
  const [selectedSectors, setSelectedSectors] = useState(['Banking']);

  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('q') || '';

  const companies = [
    {
      name: 'Al Rajhi Bank',
      category: 'Banking',
      country: 'Saudi Arabia',
    },
    {
      name: 'Emirates NBD',
      category: 'Banking',
      country: 'United Arab Emirates',
    },
  ];

  const reports = [
    {
      id: '07',
      tags: ['ENVIRONMENT', 'BRAZIL'],
      title: 'Amazon conservation efforts gain momentum',
      description:
        'Collaborations between governments and NGOs are reducing deforestation rates.',
      author: 'Arjun Mehta',
      authorRole: 'LEAD INITIATOR',
      date: 'APR 14',
      readTime: '6 MIN',
    },
    {
      id: '08',
      tags: ['ENVIRONMENT', 'BRAZIL'],
      title: 'Innovative reforestation techniques restore degraded lands',
      description:
        'New drone technologies are accelerating tree planting across the Amazon basin.',
      author: 'Liana Cruz',
      authorRole: 'LEAD TECH',
      date: 'MAY 03',
      readTime: '7 MIN',
    },
    {
      id: '09',
      tags: ['ENVIRONMENT', 'BRAZIL'],
      title: 'Indigenous communities lead sustainable land management',
      description:
        'Traditional knowledge is proving key to preserving biodiversity hotspots.',
      author: 'Rafael Souza',
      authorRole: 'CULTURE & NATURE',
      date: 'MAY 15',
      readTime: '8 MIN',
    },
    {
      id: '11',
      tags: ['ENVIRONMENT', 'BRAZIL'],
      title: 'Reforestation efforts restore Amazon riverbanks',
      description:
        'Collaborative projects with local farmers are reviving native plant species along waterways.',
      author: 'Luana Pereira',
      authorRole: 'FOREST & CONSERVATION',
      date: 'JUNE 2',
      readTime: '7 MIN',
    },
    {
      id: '12',
      tags: ['ENVIRONMENT', 'BRAZIL'],
      title: 'Urban green spaces combat air pollution in São Paulo',
      description:
        'Innovative city planning integrates parks to improve residents\' health and biodiversity.',
      author: 'Carlos Mendes',
      authorRole: 'URBAN PLANNING',
      date: 'JUNE 10',
      readTime: '6 MIN',
    },
    {
      id: '13',
      tags: ['ENVIRONMENT', 'BRAZIL'],
      title: 'Urban green spaces combat air pollution in São Paulo',
      description:
        'Innovative city planning integrates parks to improve residents\' health and biodiversity.',
      author: 'Carlos Mendes',
      authorRole: 'URBAN PLANNING',
      date: 'JUNE 10',
      readTime: '6 MIN',
    },
  ];

  const toggleCountry = (country: string) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const toggleSector = (sector: string) => {
    if (selectedSectors.includes(sector)) {
      setSelectedSectors(selectedSectors.filter((s) => s !== sector));
    } else {
      setSelectedSectors([...selectedSectors, sector]);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAFA' }}>
      {/* Header */}
      <nav
        style={{
          background: '#124734',
          padding: '16px 56px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div
          style={{
            maxWidth: 1360,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 24,
                  height: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: 16,
                    height: 16,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 2,
                  }}
                >
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: 4,
                        height: 4,
                        background: 'white',
                        borderRadius: '50%',
                      }}
                    />
                  ))}
                </div>
              </div>
              <img src={imgLogo} alt="EFG Hermes" style={{ height: 24, width: 'auto' }} />
            </div>
            <div style={{ display: 'flex', gap: 24 }}>
              <a
                href="#"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: 14,
                  textDecoration: 'none',
                  fontFamily: 'var(--serif)',
                }}
              >
                Home
              </a>
              <a
                href="#"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: 14,
                  textDecoration: 'none',
                  fontFamily: 'var(--serif)',
                }}
              >
                Our Coverage
              </a>
              <a
                href="#"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: 14,
                  textDecoration: 'none',
                  fontFamily: 'var(--serif)',
                }}
              >
                Sectors
              </a>
              <a
                href="#"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: 14,
                  textDecoration: 'none',
                  fontFamily: 'var(--serif)',
                }}
              >
                Research Library
              </a>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 8,
              }}
            >
              <Search size={20} color="rgba(255,255,255,0.7)" />
            </button>
            <button
              style={{
                background: 'white',
                color: '#124734',
                border: 'none',
                borderRadius: 4,
                padding: '8px 20px',
                fontSize: 13,
                cursor: 'pointer',
                fontFamily: 'var(--serif)',
              }}
            >
              Log in
            </button>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div
        style={{
          background: 'white',
          borderBottom: '1px solid #E0E0E0',
          padding: '16px 56px',
        }}
      >
        <div style={{ maxWidth: 1360, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              onClick={onNavigateHome}
              style={{
                background: 'none',
                border: 'none',
                color: '#666',
                fontSize: 13,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: 'var(--serif)',
              }}
            >
              <ArrowLeft size={14} />
              Back to home
            </button>
            <span style={{ color: '#CCC' }}>›</span>
            <span style={{ color: '#124734', fontSize: 13, fontFamily: 'var(--serif)' }}>
              Search
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: '40px 56px' }}>
        <div
          style={{
            maxWidth: 1360,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '240px 1fr',
            gap: 40,
          }}
        >
          {/* Left Sidebar - Filters */}
          <div>
            {/* Country Filter */}
            <div style={{ marginBottom: 24 }}>
              <button
                onClick={() => setCountryExpanded(!countryExpanded)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  paddingBottom: 12,
                  borderBottom: '1px solid #E0E0E0',
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    color: '#124734',
                    fontFamily: 'var(--serif)',
                  }}
                >
                  Country
                </span>
                {countryExpanded ? (
                  <ChevronUp size={16} color="#666" />
                ) : (
                  <ChevronDown size={16} color="#666" />
                )}
              </button>
              {countryExpanded && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { name: 'Saudi Arabia', count: 42 },
                    { name: 'UAE', count: 18 },
                  ].map((country) => (
                    <label
                      key={country.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        cursor: 'pointer',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={selectedCountries.includes(country.name)}
                        onChange={() => toggleCountry(country.name)}
                        style={{
                          width: 16,
                          height: 16,
                          accentColor: '#124734',
                        }}
                      />
                      <span style={{ fontSize: 13, color: '#333', flex: 1, fontFamily: 'var(--serif)' }}>
                        {country.name}
                      </span>
                      <span style={{ fontSize: 11, color: '#999' }}>({country.count})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Sector Filter */}
            <div style={{ marginBottom: 24 }}>
              <button
                onClick={() => setSectorExpanded(!sectorExpanded)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  paddingBottom: 12,
                  borderBottom: '1px solid #E0E0E0',
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    color: '#124734',
                    fontFamily: 'var(--serif)',
                  }}
                >
                  Sector
                </span>
                {sectorExpanded ? (
                  <ChevronUp size={16} color="#666" />
                ) : (
                  <ChevronDown size={16} color="#666" />
                )}
              </button>
              {sectorExpanded && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { name: 'Banking', count: 28 },
                    { name: 'Real Estate', count: 12 },
                  ].map((sector) => (
                    <label
                      key={sector.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        cursor: 'pointer',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={selectedSectors.includes(sector.name)}
                        onChange={() => toggleSector(sector.name)}
                        style={{
                          width: 16,
                          height: 16,
                          accentColor: '#124734',
                        }}
                      />
                      <span style={{ fontSize: 13, color: '#333', flex: 1, fontFamily: 'var(--serif)' }}>
                        {sector.name}
                      </span>
                      <span style={{ fontSize: 11, color: '#999' }}>({sector.count})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Date Filter */}
            <div>
              <button
                onClick={() => setDateExpanded(!dateExpanded)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  paddingBottom: 12,
                  borderBottom: '1px solid #E0E0E0',
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    color: '#124734',
                    fontFamily: 'var(--serif)',
                  }}
                >
                  Date
                </span>
                {dateExpanded ? (
                  <ChevronUp size={16} color="#666" />
                ) : (
                  <ChevronDown size={16} color="#666" />
                )}
              </button>
            </div>
          </div>

          {/* Right Content Area */}
          <div>
            {/* Results Count */}
            <div style={{ marginBottom: 32 }}>
              <h1
                style={{
                  fontSize: 28,
                  color: '#124734',
                  fontFamily: 'var(--serif)',
                  marginBottom: 8,
                }}
              >
                128 results for "{query}"
              </h1>
            </div>

            {/* Companies Section */}
            <div style={{ marginBottom: 40 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 16,
                }}
              >
                <h2
                  style={{
                    fontSize: 20,
                    color: '#124734',
                    fontFamily: 'var(--serif)',
                  }}
                >
                  Companies
                </h2>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#A2AD01',
                    fontSize: 13,
                    cursor: 'pointer',
                    fontFamily: 'var(--serif)',
                  }}
                >
                  View All
                </button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {companies.map((company, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'white',
                      border: '1px solid #E0E0E0',
                      borderRadius: 8,
                      padding: '16px 20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      transition: 'box-shadow 0.2s',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)')
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 16,
                          color: '#124734',
                          marginBottom: 4,
                          fontFamily: 'var(--serif)',
                        }}
                      >
                        {company.name}
                      </div>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <span
                          style={{
                            fontSize: 11,
                            color: '#A2AD01',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {company.category}
                        </span>
                        <span style={{ fontSize: 11, color: '#CCC' }}>·</span>
                        <span style={{ fontSize: 11, color: '#999' }}>
                          {company.country}
                        </span>
                      </div>
                    </div>
                    <span style={{ fontSize: 20, color: '#CCC' }}>›</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Reports Section */}
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 16,
                }}
              >
                <h2
                  style={{
                    fontSize: 20,
                    color: '#124734',
                    fontFamily: 'var(--serif)',
                  }}
                >
                  Research Reports
                </h2>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#A2AD01',
                    fontSize: 13,
                    cursor: 'pointer',
                    fontFamily: 'var(--serif)',
                  }}
                >
                  View All
                </button>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 20,
                }}
              >
                {reports.map((report) => (
                  <div
                    key={report.id}
                    style={{
                      background: 'white',
                      border: '1px solid #E0E0E0',
                      borderRadius: 8,
                      padding: '20px',
                      cursor: 'pointer',
                      transition: 'box-shadow 0.2s',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)')
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
                  >
                    <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                      {report.tags.map((tag, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: 9,
                            color: '#A2AD01',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3
                      style={{
                        fontSize: 16,
                        color: '#124734',
                        marginBottom: 8,
                        fontFamily: 'var(--serif)',
                      }}
                    >
                      {report.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        color: '#666',
                        marginBottom: 16,
                        lineHeight: 1.5,
                        fontFamily: 'var(--serif)',
                      }}
                    >
                      {report.description}
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: 12,
                        borderTop: '1px solid #F0F0F0',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: 12, color: '#124734' }}>
                          {report.author}
                        </div>
                        <div
                          style={{
                            fontSize: 9,
                            color: '#999',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {report.authorRole}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div
                          style={{
                            fontSize: 11,
                            color: '#A2AD01',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {report.date}
                        </div>
                        <div style={{ fontSize: 10, color: '#999' }}>
                          {report.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
