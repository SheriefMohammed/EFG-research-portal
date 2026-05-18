import { useRef, useState } from 'react';
import { ChevronDown, Download, Search } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router';
import { getCountryBySlug, slugifyCountryName, type CoveredCountry } from './countryData';
import { useInView } from './hooks';

const REPORTS = [
  {
    title: 'Real estate: late cycle, but not the cycle you think',
    summary: 'Supply is back, prices are cooling, and yet velocity is holding up.',
    analyst: 'Jihane Benmansour',
    sector: 'Tech',
    date: '12 May 2024',
  },
  {
    title: 'Technology adoption accelerates financial inclusion',
    summary: 'Mobile payments and fintech startups are reshaping access to banking.',
    analyst: 'Omar Al-Mansoori',
    sector: 'Finance',
    date: '15 May 2024',
  },
  {
    title: 'Renewable energy infrastructure scales rapidly',
    summary: 'Solar and wind projects see massive investment across the region.',
    analyst: 'Layla Hassan',
    sector: 'Energy',
    date: '18 May 2024',
  },
];

const MACRO_COLUMNS = ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Q1 2026'];

const MACRO_PANELS = [
  {
    id: 'gdp',
    title: 'GDP & Economic Growth',
    rows: [
      ['Real GDP Growth (%)', '3.2', '3.5', '3.8', '4.1', '4.3'],
      ['Non-Oil GDP Growth (%)', '4.5', '4.8', '5.1', '5.3', '5.6'],
      ['Oil GDP Growth (%)', '1.2', '1.4', '1.6', '2.0', '2.2'],
    ],
  },
  {
    id: 'inflation',
    title: 'Inflation & Price Levels',
    rows: [
      ['Headline CPI (%)', '2.1', '2.4', '2.8', '3.0', '3.1'],
      ['Core CPI (%)', '1.8', '2.0', '2.3', '2.5', '2.6'],
      ['Food Inflation (%)', '3.4', '3.8', '4.1', '4.0', '3.7'],
    ],
  },
  {
    id: 'rates',
    title: 'Interest Rates & Yields',
    rows: [
      ['Policy Rate (%)', '5.50', '5.25', '5.00', '4.75', '4.50'],
      ['3M Interbank (%)', '5.72', '5.48', '5.22', '4.96', '4.74'],
      ['10Y Sovereign Yield (%)', '6.10', '5.95', '5.82', '5.70', '5.58'],
    ],
  },
  {
    id: 'currency',
    title: 'Currency & Reserves',
    rows: [
      ['FX Reserves (USD bn)', '39.2', '40.1', '41.0', '42.4', '43.0'],
      ['Current Account (% GDP)', '-1.8', '-1.6', '-1.4', '-1.3', '-1.1'],
      ['USD Exchange Rate', '3.75', '3.75', '3.75', '3.75', '3.75'],
    ],
  },
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 4)
    .toUpperCase();
}

function priceFor(index: number) {
  return ['$32.80', '$42.60', '$156.20', '$88.30', '$52.10'][index % 5];
}

function targetFor(index: number) {
  return ['$38.00', '$51.00', '$185.00', '$92.00', '$61.00'][index % 5];
}

function ratingFor(index: number) {
  return index % 3 === 1 ? 'HOLD' : 'BUY';
}

function countryFallback(slug: string): CoveredCountry {
  return {
    code: slug.toUpperCase() || 'KSA',
    name:
      slug
        .split('-')
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ') || 'Saudi Arabia',
    companies: 0,
    stocks: 0,
    mcap: '$0B',
    mcapShare: '0%',
    sectors: [],
  };
}

export function CountryPage() {
  const navigate = useNavigate();
  const { countrySlug = 'saudi-arabia' } = useParams();
  const [activeMacroPanel, setActiveMacroPanel] = useState(MACRO_PANELS[0].id);
  const convictionsRef = useRef<HTMLElement>(null);
  const reportsRef = useRef<HTMLElement>(null);
  const macroRef = useRef<HTMLElement>(null);
  const convictionsInView = useInView(convictionsRef);
  const reportsInView = useInView(reportsRef);
  const macroInView = useInView(macroRef);
  const country = getCountryBySlug(countrySlug) || countryFallback(countrySlug);
  const companies = country.sectors.length ? country.sectors : [{ name: country.name, sector: 'Market' }];
  const tickerItems = companies.concat(companies).slice(0, 8);

  return (
    <main className="country-page">
      <section className="country-hero">
        <div className="country-hero-inner country-hero-reveal">
          <nav className="country-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Back to home</Link>
            <span>&gt;</span>
            <Link to="/#coverage">Our Coverage</Link>
            <span>&gt;</span>
            <strong>{country.name}</strong>
          </nav>

          <h1>{country.name}</h1>

          <div className="country-hero-stats">
            <span>
              <strong>{country.stocks}</strong>
              Stocks
            </span>
            <span>
              <strong>{country.mcapShare}</strong>
              Mkt. Cap
            </span>
          </div>
        </div>

        <div className="country-ticker country-ticker-reveal" aria-label={`${country.name} market ticker`}>
          {tickerItems.map((company, index) => (
            <button
              key={`${company.name}-${index}`}
              type="button"
              onClick={() => navigate(`/company/${slugifyCountryName(company.name)}`)}
            >
              <strong>{company.name}</strong>
              <span>{priceFor(index)}</span>
              <em className={index % 4 === 1 ? 'down' : 'up'}>{index % 4 === 1 ? '-1.2%' : '+2.4%'}</em>
              <small>{ratingFor(index)}</small>
            </button>
          ))}
        </div>
      </section>

      <section ref={convictionsRef} className={`country-section country-reveal-section ${convictionsInView ? 'in' : ''}`}>
        <div className="country-section-header country-reveal-item">
          <h2>Top Convictions</h2>
        </div>
        <div className="country-conviction-grid">
          {companies.slice(0, 3).map((company, index) => (
            <article
              key={company.name}
              className="country-conviction-card country-reveal-item"
              style={{ transitionDelay: `${120 + index * 90}ms` }}
            >
              <div className="country-company-mark">{initials(company.name)}</div>
              <div>
                <h3>{company.name}</h3>
                <p>{company.sector}</p>
              </div>
              <span>{ratingFor(index)}</span>
              <strong>{priceFor(index)}</strong>
              <small>Target {targetFor(index)} (+{16 + index * 2}% upside)</small>
            </article>
          ))}
        </div>

        <div className="country-section-header country-row-header country-reveal-item" style={{ transitionDelay: '390ms' }}>
          <h2>Intelligence Rows</h2>
          <div className="country-table-tools">
            <label>
              <Search size={14} />
              <input placeholder="Search companies..." />
            </label>
            <div>
              {['All', 'Strong Buy', 'Buy', 'Hold'].map((item) => (
                <button key={item} className={item === 'All' ? 'active' : ''} type="button">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="country-table-wrap country-reveal-item" style={{ transitionDelay: '480ms' }}>
          <table className="country-intel-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Sector</th>
                <th>Rating</th>
                <th>Current Price</th>
                <th>Target Price</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              {companies.slice(0, 5).map((company, index) => (
                <tr key={company.name}>
                  <td>
                    <span className="country-company-mark small">{initials(company.name)}</span>
                    <span>
                      <strong>{company.name}</strong>
                      <small>{country.code}.{index + 10}0</small>
                    </span>
                  </td>
                  <td>{company.sector}</td>
                  <td>
                    <mark className={ratingFor(index).toLowerCase()}>{ratingFor(index)}</mark>
                    {index % 2 === 0 && <mark>Strong Buy</mark>}
                  </td>
                  <td>{priceFor(index)}</td>
                  <td>
                    {targetFor(index)}
                    <small className={index % 4 === 1 ? 'negative' : ''}>{index % 4 === 1 ? '-4.5%' : '+7.6%'}</small>
                  </td>
                  <td>
                    <svg viewBox="0 0 80 24" aria-hidden="true">
                      <polyline
                        points={
                          index % 4 === 1
                            ? '2,7 22,11 38,9 55,18 68,15 78,20'
                            : '2,18 22,14 38,16 55,8 68,10 78,5'
                        }
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section ref={reportsRef} className={`country-section country-section-tight country-reveal-section ${reportsInView ? 'in' : ''}`}>
        <div className="country-section-header country-reveal-item">
          <h2>Research Reports</h2>
          <button type="button">View All -&gt;</button>
        </div>
        <div className="country-report-grid">
          {REPORTS.concat(REPORTS.slice(0, 1)).map((report, index) => (
            <article
              key={`${report.title}-${index}`}
              className="country-report-card country-reveal-item"
              style={{ transitionDelay: `${120 + index * 75}ms` }}
            >
              <div>
                {index === 0 ? country.name : index === 3 ? 'Egypt' : 'United Arab Emirates'} <span>-</span> {report.date}
              </div>
              <h3>{report.title}</h3>
              <p>{report.summary}</p>
              <footer>
                <span>
                  {report.analyst}
                  <small>{report.sector}</small>
                </span>
                <button type="button">
                  <Download size={14} />
                  Download PDF
                </button>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section
        ref={macroRef}
        className={`country-section country-section-tight country-macro country-reveal-section ${macroInView ? 'in' : ''}`}
      >
        <div className="country-section-header country-reveal-item">
          <h2>Macroeconomic Indicators</h2>
          <button type="button">View All -&gt;</button>
        </div>
        <div className="country-reveal-item" style={{ transitionDelay: '140ms' }}>
          {MACRO_PANELS.map((panel) => {
            const isOpen = activeMacroPanel === panel.id;
            return (
              <div key={panel.id} className={`country-accordion ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`country-macro-${panel.id}`}
                  onClick={() => setActiveMacroPanel(panel.id)}
                >
                  {panel.title} <ChevronDown size={18} />
                </button>
                <div id={`country-macro-${panel.id}`} className="country-accordion-content">
                  <table>
                    <thead>
                      <tr>
                        <th>Indicator</th>
                        {MACRO_COLUMNS.map((column) => (
                          <th key={column}>{column}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {panel.rows.map((row) => (
                        <tr key={row[0]}>
                          {row.map((cell) => (
                            <td key={cell}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
