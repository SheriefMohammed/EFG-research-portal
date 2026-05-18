import { ChevronDown, Download, Search } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router';
import { getCountryBySlug, slugifyCountryName, type CoveredCountry } from './countryData';

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

const METRICS = [
  ['Real GDP Growth (%)', '3.2', '3.5', '3.8', '4.1', '4.3'],
  ['Non-Oil GDP Growth (%)', '4.5', '4.8', '5.1', '5.3', '5.6'],
  ['Oil GDP Growth (%)', '1.2', '1.4', '1.6', '2.0', '2.2'],
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
    name: slug
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
  const country = getCountryBySlug(countrySlug) || countryFallback(countrySlug);
  const companies = country.sectors.length ? country.sectors : [{ name: country.name, sector: 'Market' }];
  const tickerItems = companies.concat(companies).slice(0, 8);

  return (
    <main className="country-page">
      <section className="country-hero">
        <div className="country-hero-inner">
          <nav className="country-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Back to home</Link>
            <span>›</span>
            <Link to="/#coverage">Our Coverage</Link>
            <span>›</span>
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

        <div className="country-ticker" aria-label={`${country.name} market ticker`}>
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

      <section className="country-section">
        <div className="country-section-header">
          <h2>Top Convictions</h2>
        </div>
        <div className="country-conviction-grid">
          {companies.slice(0, 3).map((company, index) => (
            <article key={company.name} className="country-conviction-card">
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

        <div className="country-section-header country-row-header">
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

        <div className="country-table-wrap">
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
                      <polyline points={index % 4 === 1 ? '2,7 22,11 38,9 55,18 68,15 78,20' : '2,18 22,14 38,16 55,8 68,10 78,5'} />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="country-section country-section-tight">
        <div className="country-section-header">
          <h2>Research Reports</h2>
          <button type="button">View All →</button>
        </div>
        <div className="country-report-grid">
          {REPORTS.concat(REPORTS.slice(0, 1)).map((report, index) => (
            <article key={`${report.title}-${index}`} className="country-report-card">
              <div>{index === 0 ? country.name : index === 3 ? 'Egypt' : 'United Arab Emirates'} <span>•</span> {report.date}</div>
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

      <section className="country-section country-section-tight country-macro">
        <div className="country-section-header">
          <h2>Macroeconomic Indicators</h2>
          <button type="button">View All →</button>
        </div>
        <div className="country-accordion open">
          <button type="button">GDP & Economic Growth <ChevronDown size={18} /></button>
          <table>
            <thead>
              <tr>
                <th>Indicator</th>
                <th>Q1 2025</th>
                <th>Q2 2025</th>
                <th>Q3 2025</th>
                <th>Q4 2025</th>
                <th>Q1 2026</th>
              </tr>
            </thead>
            <tbody>
              {METRICS.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {['Inflation & Price Levels', 'Interest Rates & Yields', 'Currency & Reserves'].map((label) => (
          <div key={label} className="country-accordion">
            <button type="button">{label} <ChevronDown size={18} /></button>
          </div>
        ))}
      </section>
    </main>
  );
}
