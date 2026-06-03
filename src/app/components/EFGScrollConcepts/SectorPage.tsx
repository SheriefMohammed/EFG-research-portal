import { useRef } from 'react';
import { Banknote, Building2, Factory, HeartPulse, Home, Pickaxe, Smartphone, type LucideIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { useInView } from './hooks';

type TickerItem = {
  name: string;
  price: string;
  change: string;
  direction: 'up' | 'down';
  rating: 'BUY' | 'HOLD';
  target: string;
};

type SectorCard = {
  name: string;
  reports: number;
  icon: LucideIcon;
};

const SECTOR_TICKER: TickerItem[] = [
  { name: 'SABIC', price: '$85.50', change: '+2.4%', direction: 'up', rating: 'BUY', target: 'Target: $92' },
  { name: 'Al Rajhi Bank', price: '$88.30', change: '-1.2%', direction: 'down', rating: 'HOLD', target: 'Target: $90' },
  { name: 'Saudi Aramco', price: '$32.80', change: '+3.1%', direction: 'up', rating: 'BUY', target: 'Target: $38' },
  { name: 'STC', price: '$42.60', change: '+0.8%', direction: 'up', rating: 'BUY', target: 'Target: $48' },
  { name: 'ACWA Power', price: '$156.20', change: '-2.5%', direction: 'down', rating: 'BUY', target: 'Target: $168' },
];

const SECTOR_CARDS: SectorCard[] = [
  { name: 'Financials', reports: 124, icon: Banknote },
  { name: 'Energy', reports: 89, icon: Factory },
  { name: 'Healthcare', reports: 45, icon: HeartPulse },
  { name: 'Industrials', reports: 67, icon: Pickaxe },
  { name: 'Real Estate', reports: 96, icon: Home },
  { name: 'Tech', reports: 112, icon: Smartphone },
  { name: 'Consumer & Retail', reports: 34, icon: Building2 },
  { name: 'Telecom', reports: 21, icon: Banknote },
  { name: 'Utilities', reports: 29, icon: Building2 },
];

const SECTOR_REPORTS = [
  {
    country: 'Saudi Arabia',
    date: '12 May 2024',
    title: 'Real estate: late cycle, but not the cycle you think',
    summary: 'Supply is back, prices are cooling, and yet velocity is holding up. The mix is rotating away from speculative inventory.',
    analyst: 'Jihane Benmansour',
    sector: 'REAL ESTATE',
  },
  {
    country: 'United Arab Emirates',
    date: '15 May 2024',
    title: 'Technology adoption accelerates financial inclusion',
    summary: 'Mobile payments and fintech startups are reshaping access to banking and underwriting in under-served populations.',
    analyst: 'Omar Al-Mansoori',
    sector: 'TECH',
  },
  {
    country: 'United Arab Emirates',
    date: '15 May 2024',
    title: 'Digital infrastructure is now a core utilities theme',
    summary: 'Power demand, cloud capacity, and distributed assets are converging into a durable capital cycle across the region.',
    analyst: 'Layla Hassan',
    sector: 'UTILITIES',
  },
  {
    country: 'Egypt',
    date: '18 May 2024',
    title: 'Renewable energy infrastructure scales rapidly',
    summary: 'Solar and wind projects see massive investment, improving energy security and lowering dependency on fossil fuels.',
    analyst: 'Ahmed Al-Mansour',
    sector: 'ENERGY',
  },
];

function TickerStrip() {
  const items = [...SECTOR_TICKER, ...SECTOR_TICKER];

  return (
    <div className="ticker sector-ticker" aria-label="Sector market ticker">
      <div className="ticker-track">
        {items.map((item, index) => (
          <span key={`${item.name}-${index}`} className="ticker-item sector-ticker-item">
            <span className="sector-ticker-name">{item.name}</span>
            <span className="sector-ticker-price">{item.price}</span>
            <span className={item.direction === 'up' ? 'up' : 'dn'}>{item.change}</span>
            <span className={`sector-rating ${item.rating === 'BUY' ? 'buy' : 'hold'}`}>{item.rating}</span>
            <span className="sector-target">{item.target}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function SectorPage() {
  const navigate = useNavigate();
  const universeRef = useRef<HTMLElement>(null);
  const reportsRef = useRef<HTMLElement>(null);
  const universeInView = useInView(universeRef);
  const reportsInView = useInView(reportsRef);

  return (
    <main className="sector-page">
      <section className="sector-hero">
        <div className="sector-hero-inner sector-hero-reveal">
          <nav className="sector-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <strong>Sectors</strong>
          </nav>

          <h1>
            Sector Research
            <br />
            Across MENA
          </h1>
        </div>

        <TickerStrip />
      </section>

      <section
        ref={universeRef}
        className={`sector-section sector-reveal-section ${universeInView ? 'in' : ''}`}
      >
        <div className="sector-section-header sector-reveal-item">
          <div>
            <h2>Sector Universe</h2>
          </div>
          <button type="button" onClick={() => navigate('/search?q=sector%20universe')}>
            View All -&gt;
          </button>
        </div>

        <div className="sector-universe-grid">
          {SECTOR_CARDS.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <button
                key={sector.name}
                type="button"
                className="sector-universe-card sector-reveal-item"
                style={{ transitionDelay: `${90 + index * 70}ms` }}
                onClick={() => navigate(`/search?q=${encodeURIComponent(sector.name)}`)}
              >
                <div className="sector-universe-card-top">
                  <span className="sector-card-icon">
                    <Icon size={18} />
                  </span>
                  <span className="sector-card-update">Last update: 2h ago</span>
                </div>
                <div className="sector-universe-card-body">
                  <strong>{sector.name}</strong>
                  <small>{sector.reports} Reports</small>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section
        ref={reportsRef}
        className={`sector-section sector-section-tight sector-reveal-section ${reportsInView ? 'in' : ''}`}
      >
        <div className="sector-section-header sector-reveal-item">
          <div>
            <h2>Research Reports</h2>
          </div>
          <button type="button" onClick={() => navigate('/search?q=sector%20reports')}>
            View All -&gt;
          </button>
        </div>

        <div className="sector-report-grid">
          {SECTOR_REPORTS.map((report, index) => (
            <article
              key={`${report.title}-${index}`}
              className="sector-report-card sector-reveal-item"
              style={{ transitionDelay: `${110 + index * 80}ms` }}
            >
              <div className="sector-report-meta">
                {report.country} <span>-</span> {report.date}
              </div>
              <h3>{report.title}</h3>
              <p>{report.summary}</p>
              <footer className="sector-report-footer">
                <span>
                  {report.analyst}
                  <small>{report.sector}</small>
                </span>
                <button type="button">Download PDF</button>
              </footer>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
