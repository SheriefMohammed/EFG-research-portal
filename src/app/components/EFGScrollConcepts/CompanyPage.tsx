import { useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { analystPathFor } from './analystData';
import { useInView } from './hooks';

const COMPANY_NAMES_BY_SLUG: Record<string, string> = {
  'saudi-aramco': 'Saudi Aramco',
  'al-rajhi-bank': 'Al Rajhi Bank',
  sabic: 'SABIC',
  stc: 'STC',
  'commercial-international-ba': 'Commercial International Bank',
  'commercial-international-bank': 'Commercial International Bank',
  'eastern-company': 'Eastern Company',
  'telecom-egypt': 'Telecom Egypt',
  'fawry-for-banking': 'Fawry for Banking',
  'kuwait-finance-house': 'Kuwait Finance House',
  'national-bank-of-kuwait': 'National Bank of Kuwait',
  'qatar-national-bank': 'Qatar National Bank',
  'industries-qatar': 'Industries Qatar',
  'emirates-nbd': 'Emirates NBD',
  'emaar-properties': 'Emaar Properties',
  'dp-world': 'DP World',
  'bank-muscat': 'Bank Muscat',
  'oman-telecom': 'Oman Telecom',
};

function titleFromSlug(slug = '') {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

const RECENT_REPORTS = [
  {
    id: 1,
    type: 'Earnings',
    title: 'Q1 2026 Results Review: Strong Q1',
    subtitle: 'Outperformance driven by higher NII and lower provisions',
    analyst: 'Mourad Moray',
    date: 'Apr 17, 2026',
  },
  {
    id: 2,
    type: 'Update',
    title: 'Sector Note: Egyptian Banks Mid-Cycle',
    subtitle: 'CIB well-positioned for rate normalization',
    analyst: 'Mourad Moray',
    date: 'Mar 12, 2026',
  },
  {
    id: 3,
    type: 'Flash Note',
    title: 'CIB — Q4 2025 Quick Take: Solid Q4',
    subtitle: 'Strong NII growth, margins remain elevated',
    analyst: 'Yasser Fawzy',
    date: 'Feb 8, 2026',
  },
  {
    id: 4,
    type: 'Initiation',
    title: 'CIB Initiation: Best-in-class franchise',
    subtitle: 'Initiating with BUY and EGP 126 PT',
    analyst: 'Mourad Moray',
    date: 'Jan 15, 2026',
  },
  {
    id: 5,
    type: 'Update',
    title: 'Digital Banking: The New Frontier',
    subtitle: 'Mobile adoption accelerates as CIB invests in tech',
    analyst: 'Yasser Fawzy',
    date: 'Dec 20, 2025',
  },
];

function RecentReportsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, '0px 0px -15% 0px');

  return (
    <section ref={ref} style={{ padding: '100px 56px', background: 'linear-gradient(135deg, #0B2218 0%, #124734 100%)' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto' }}>
        <div style={{ marginBottom: 60 }}>
          <div className="section-label" style={{ color: '#A2AD01', marginBottom: 16 }}>● Latest</div>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(32px, 4vw, 72px)',
            color: '#FFFFFF',
            lineHeight: 1,
            fontWeight: 400,
            marginBottom: 0,
          }}>
            Recent reports<span style={{ color: '#A2AD01', fontStyle: 'italic' }}>.</span>
          </h2>
        </div>

        <div style={{
          display: 'flex',
          gap: 32,
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: 20,
        }}>
          <style>{`
            section::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {RECENT_REPORTS.map((report, i) => (
            <article key={report.id} style={{
              minWidth: 520,
              maxWidth: 520,
              background: 'rgba(18, 71, 52, 0.4)',
              padding: '36px',
              borderRadius: 0,
              border: '1px solid rgba(255,255,255,0.12)',
              cursor: 'pointer',
              opacity: inView ? 1 : 0,
              transform: `translateY(${inView ? 0 : 50}px) scale(${inView ? 1 : 0.96})`,
              transition: `opacity 800ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 140}ms, transform 800ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 140}ms, background 300ms ease`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px) scale(1)';
              e.currentTarget.style.background = 'rgba(18, 71, 52, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.background = 'rgba(18, 71, 52, 0.4)';
            }}
            onClick={() => navigate(analystPathFor(report.analyst))}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                navigate(analystPathFor(report.analyst));
              }
            }}
            tabIndex={0}
            role="button"
            >
              <div style={{
                fontFamily: 'var(--serif)',
                fontSize: 11,
                color: '#A2AD01',
                letterSpacing: '0.12em',
                marginBottom: 40,
                fontWeight: 600,
              }}>
                {String(i + 1).padStart(2, '0')} · {report.type.toUpperCase()} · EGYPT
              </div>

              <h3 style={{
                fontFamily: 'var(--serif)',
                fontSize: 38,
                lineHeight: 1.2,
                color: 'rgba(255,255,255,0.95)',
                marginBottom: 24,
                letterSpacing: '-0.015em',
              }}>
                {report.title}
              </h3>

              <p style={{
                fontSize: 17,
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.6,
                marginBottom: 80,
              }}>
                {report.subtitle}
              </p>

              <div style={{
                paddingTop: 24,
                borderTop: '1px solid rgba(255,255,255,0.15)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
                <div>
                  <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.95)', marginBottom: 6 }}>
                    {report.analyst}
                  </div>
                  <div style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.08em',
                  }}>
                    {report.date.replace(', 2026', '').toUpperCase().replace(' ', ' · ')}
                  </div>
                </div>
                <div style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 11,
                  color: '#A2AD01',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                }}>
                  4 MIN
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinancialSummarySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, '0px 0px -15% 0px');

  const kpis = [
    { label: 'Revenue 2026E', value: '41.2 bn', unit: 'EGP', change: '+19%', trend: 'up' },
    { label: 'Net Income 2026E', value: '18.8 bn', unit: 'EGP', change: '+22%', trend: 'up' },
    { label: 'EPS 2026E', value: '8.9', unit: 'EGP', change: '+21%', trend: 'up' },
    { label: 'ROE', value: '30.8%', unit: '', change: '-0.4%', trend: 'down' },
    { label: 'NIM', value: '5.4%', unit: '', change: '-0.4%', trend: 'down' },
  ];

  const tableData = [
    { metric: 'Revenue', y2024: '28.2', y2025: '34.5', y2026: '41.2', trend: 'up' },
    { metric: 'Net Income', y2024: '12.1', y2025: '15.4', y2026: '18.8', trend: 'up' },
    { metric: 'EPS', y2024: '5.8', y2025: '7.3', y2026: '8.9', trend: 'up' },
    { metric: 'ROE', y2024: '28.4', y2025: '31.2', y2026: '30.8', trend: 'down' },
    { metric: 'ROAE', y2024: '32.1', y2025: '34.8', y2026: '33.5', trend: 'down' },
    { metric: 'NIM', y2024: '5.2', y2025: '5.8', y2026: '5.4', trend: 'down' },
  ];

  return (
    <section ref={ref} style={{ padding: '100px 56px', background: '#F7F7F5' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto' }}>
        <div style={{ marginBottom: 60 }}>
          <div className="section-label" style={{ color: '#888', marginBottom: 16 }}>● ● Latest</div>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(32px, 4vw, 72px)',
            color: '#1D1D1B',
            lineHeight: 1,
            fontWeight: 400,
            marginBottom: 0,
          }}>
            Financial summary<span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>.</span>
          </h2>
        </div>

        {/* KPI Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 20,
          marginBottom: 40,
        }}>
          {kpis.map((kpi, i) => (
            <div key={i} style={{
              background: '#FFFFFF',
              padding: '24px',
              borderRadius: 0,
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              cursor: 'pointer',
              opacity: inView ? 1 : 0,
              transform: `translateY(${inView ? 0 : 30}px)`,
              transition: `opacity 600ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 80}ms, transform 600ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 80}ms, box-shadow 200ms ease`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
            }}
            >
              <div style={{
                fontSize: 10,
                letterSpacing: '0.08em',
                color: '#888',
                marginBottom: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
              }}>
                {kpi.label}
              </div>
              <div style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#1D1D1B',
                marginBottom: 8,
                fontFamily: 'var(--serif)',
              }}>
                {kpi.value}
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 13,
                color: kpi.trend === 'up' ? '#2E7D5A' : '#D45845',
                fontWeight: 600,
              }}>
                <span>{kpi.trend === 'up' ? '↗' : '↘'}</span>
                <span>{kpi.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Table Card */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: 0,
          border: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          overflow: 'hidden',
          opacity: inView ? 1 : 0,
          transform: `translateY(${inView ? 0 : 30}px)`,
          transition: 'opacity 800ms cubic-bezier(0.22, 1, 0.36, 1) 400ms, transform 800ms cubic-bezier(0.22, 1, 0.36, 1) 400ms',
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ position: 'sticky', top: 0, background: '#F7F7F5', zIndex: 1 }}>
              <tr>
                <th style={{
                  padding: '20px 24px',
                  textAlign: 'left',
                  fontSize: 11,
                  color: '#888',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}>Metric</th>
                <th style={{
                  padding: '20px 24px',
                  textAlign: 'right',
                  fontSize: 11,
                  color: '#888',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}>2024</th>
                <th style={{
                  padding: '20px 24px',
                  textAlign: 'right',
                  fontSize: 11,
                  color: '#888',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}>2025</th>
                <th style={{
                  padding: '20px 24px',
                  textAlign: 'right',
                  fontSize: 11,
                  color: '#888',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}>2026E</th>
                <th style={{
                  padding: '20px 24px',
                  textAlign: 'center',
                  fontSize: 11,
                  color: '#888',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}>Trend</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i} style={{
                  borderTop: '1px solid #F2F2F0',
                  transition: 'background 200ms ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#F7F7F5'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={{
                    padding: '18px 24px',
                    fontSize: 15,
                    color: '#1D1D1B',
                    fontWeight: 600,
                  }}>{row.metric}</td>
                  <td style={{
                    padding: '18px 24px',
                    fontSize: 15,
                    color: '#555',
                    textAlign: 'right',
                  }}>{row.y2024}</td>
                  <td style={{
                    padding: '18px 24px',
                    fontSize: 15,
                    color: '#555',
                    textAlign: 'right',
                  }}>{row.y2025}</td>
                  <td style={{
                    padding: '18px 24px',
                    fontSize: 15,
                    color: '#555',
                    textAlign: 'right',
                  }}>{row.y2026}</td>
                  <td style={{
                    padding: '18px 24px',
                    textAlign: 'center',
                    fontSize: 18,
                    color: row.trend === 'up' ? '#2E7D5A' : '#D45845',
                  }}>
                    {row.trend === 'up' ? '↑' : '↓'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function CompanyPage() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { companySlug = '' } = useParams();
  const companyName = COMPANY_NAMES_BY_SLUG[companySlug] || titleFromSlug(companySlug);

  const handleBackToMap = () => {
    navigate('/#map');
  };

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  return (
    <div style={{
      background: '#F7F7F5',
      minHeight: '100vh',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 500ms cubic-bezier(0.22, 1, 0.36, 1)',
    }}>
      <section style={{
        background: 'linear-gradient(135deg, #0D3B2A 0%, #124734 100%)',
        padding: '0 56px',
        animation: 'fadeIn 0.4s ease-out',
      }}>
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
        <div style={{ maxWidth: 1360, margin: '0 auto' }}>
          <div style={{
            padding: '20px 0',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            animation: 'fadeIn 0.5s ease-out',
          }}>
            <div style={{ display: 'flex', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
              <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >Home</span>
              <span>›</span>
              <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >Coverage</span>
              <span>›</span>
              <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >Egypt</span>
              <span>›</span>
              <span style={{ color: 'rgba(255,255,255,0.9)' }}>Commercial International Bank</span>
            </div>
            <button
              onClick={handleBackToMap}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '8px 16px',
                borderRadius: 6,
                fontSize: 13,
                cursor: 'pointer',
                color: '#FFFFFF',
                fontWeight: 500,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.transform = 'translateX(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              ← Back to Map
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 60,
            paddingTop: 48,
            paddingBottom: 48,
          }}>
            <div style={{ animation: 'slideInLeft 0.6s ease-out 0.1s backwards' }}>
              <div style={{
                fontSize: 11,
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: 12,
                fontWeight: 600,
              }}>
                COMPANY: EGY
              </div>
              <div style={{
                fontFamily: 'var(--serif)',
                fontSize: 52,
                color: '#FFFFFF',
                marginBottom: 12,
                lineHeight: 1.1,
                fontWeight: 400,
              }}>
                {companyName}
              </div>
              <div style={{
                fontSize: 14,
                color: 'rgba(255,255,255,0.7)',
                marginBottom: 28,
              }}>
                Financial Services · Egypt
              </div>

              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 32 }}>
                <div style={{
                  background: '#2E7D5A',
                  color: '#FFFFFF',
                  padding: '8px 16px',
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                }}>
                  BUY
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontSize: 24, fontWeight: 700, color: '#FFFFFF' }}>EGP 126</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>Target</span>
                  <span style={{
                    fontSize: 14,
                    color: '#6FD393',
                    fontWeight: 600,
                    marginLeft: 4,
                  }}>
                    ↗ +13.2%
                  </span>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: 28,
                paddingTop: 24,
                borderTop: '1px solid rgba(255,255,255,0.1)',
              }}>
                {[
                  { label: 'MARKET CAP', value: '$5.8B' },
                  { label: 'AVG VOLUME', value: '2.4M' },
                  { label: 'EPS', value: 'EGP 12.30' },
                  { label: 'FREE FLOAT', value: '93%' },
                  { label: 'FY END', value: 'December' },
                ].map((stat, i) => (
                  <div key={i} style={{
                    animation: `slideUp 0.5s ease-out ${0.2 + i * 0.05}s backwards`,
                  }}>
                    <div style={{
                      fontSize: 10,
                      color: 'rgba(255,255,255,0.5)',
                      marginBottom: 6,
                      letterSpacing: '0.08em',
                      fontWeight: 600,
                    }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 600 }}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              animation: 'slideInRight 0.6s ease-out 0.2s backwards',
              minWidth: 200,
            }}>
              <div style={{
                fontSize: 10,
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: 20,
                fontWeight: 600,
              }}>
                COVERAGE ANALYSTS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { name: 'Mourad Moray', title: 'Head of Financials' },
                  { name: 'Yasser Fawzy', title: 'Analyst' },
                ].map((analyst, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 14,
                      color: '#FFFFFF',
                      fontWeight: 600,
                    }}>
                      👤
                    </div>
                    <div>
                      <div style={{ fontSize: 14, color: '#FFFFFF', fontWeight: 600, marginBottom: 2 }}>
                        {analyst.name}
                      </div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
                        {analyst.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '80px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
          <div>
            <div style={{
              fontSize: 11,
              letterSpacing: '0.1em',
              color: '#888',
              marginBottom: 16,
              fontWeight: 600,
            }}>
              INVESTMENT THESIS
            </div>
            <div style={{
              fontFamily: 'var(--serif)',
              fontSize: 24,
              color: '#1D1D1B',
              marginBottom: 20,
              lineHeight: 1.3,
            }}>
              Investment Thesis
            </div>
            <div style={{ fontSize: 15, lineHeight: 1.7, color: '#555' }}>
              Egypt's largest private-sector bank is well-positioned to benefit from economic reforms and rising consumer demand. Strong capitalization, diversified revenue streams, and expanding digital banking capabilities position CIB as a core holding for investors seeking exposure to Egypt's financial sector.
            </div>
          </div>

          <div>
            <div style={{
              fontSize: 11,
              letterSpacing: '0.1em',
              color: '#888',
              marginBottom: 16,
              fontWeight: 600,
            }}>
              VALUATION & RISKS
            </div>
            <div style={{
              fontFamily: 'var(--serif)',
              fontSize: 24,
              color: '#1D1D1B',
              marginBottom: 20,
              lineHeight: 1.3,
            }}>
              Valuation & Risks
            </div>
            <div style={{ fontSize: 15, lineHeight: 1.7, color: '#555' }}>
              Trading at 1.8x book value with strong return metrics. Key risks include currency volatility, regulatory changes, and macroeconomic headwinds. However, diversified revenue streams and strong capitalization provide downside protection.
            </div>
          </div>
        </div>

      </div>

      <RecentReportsSection />

      <FinancialSummarySection />

      <div style={{
        display: 'none',
      }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <span>EFG Hermes</span>
          <span>EFG Hermes Research · Prototype by IKEN Technology</span>
        </div>
        <div style={{ display: 'flex', gap: 24, fontFamily: 'var(--serif)' }}>
          <span>© 2026</span>
          <span>Licensed by FRA / CMA</span>
          <span style={{ color: '#A2AD01' }}>Data delayed 15m</span>
        </div>
      </div>
    </div>
  );
}
