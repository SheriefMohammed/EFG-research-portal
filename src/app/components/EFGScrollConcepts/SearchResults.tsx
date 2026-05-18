import { useMemo, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { useNavigate } from 'react-router';
import {
  Banknote,
  Building2,
  ChevronDown,
  Factory,
  HeartPulse,
  Home,
  Pickaxe,
  Search,
  Smartphone,
} from 'lucide-react';

interface SearchResultsProps {
  onNavigateHome: () => void;
}

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
  {
    category: 'FINANCE',
    country: 'Kuwait',
    date: '10 April 2024',
    title: 'Impact of AI on Global Stock Exchanges',
    author: 'Marcus Lee',
  },
  {
    category: 'FINANCE',
    country: 'Saudi Arabia',
    date: '22 March 2024',
    title: 'Sustainable Investing: Trends and Opportunities',
    author: 'Aisha Patel',
  },
  {
    category: 'FINANCE',
    country: 'Saudi Arabia',
    date: '05 February 2024',
    title: 'Cryptocurrency Regulation: A Comparative Analysis',
    author: 'Omar Al-Farid',
  },
  {
    category: 'FINANCE',
    country: 'Saudi Arabia',
    date: '28 January 2024',
    title: 'The Rise of Fintech Startups in Africa',
    author: 'Nia Johnson',
  },
];

const companies = [
  { name: 'Al Rajhi Bank', sector: 'Financials', country: 'KSA', slug: 'al-rajhi-bank' },
  { name: 'SNB', sector: 'Financials', country: 'KSA', slug: 'snb' },
  { name: 'Riyad Bank', sector: 'Financials', country: 'KSA', slug: 'riyad-bank' },
  { name: 'Banque Saudi', sector: 'Financials', country: 'KSA', slug: 'banque-saudi' },
];

const sectors = [
  { name: 'Banking & Financials', reports: 142, icon: Banknote },
  { name: 'Real Estate', reports: 88, icon: Building2 },
  { name: 'Energy & Petrochem', reports: 115, icon: Factory },
  { name: 'Telecom & Tech', reports: 64, icon: Smartphone },
  { name: 'Healthcare', reports: 32, icon: HeartPulse },
  { name: 'Consumer & Retail', reports: 51, icon: Home },
  { name: 'Industrials', reports: 41, icon: Pickaxe },
];

export function SearchResults({ onNavigateHome }: SearchResultsProps) {
  const navigate = useNavigate();
  const [countryExpanded, setCountryExpanded] = useState(true);
  const [sectorExpanded, setSectorExpanded] = useState(true);
  const [dateExpanded, setDateExpanded] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState(['Saudi Arabia']);
  const [selectedSectors, setSelectedSectors] = useState(['Financials']);

  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('q') || 'Saudi banks';
  const [searchTerm, setSearchTerm] = useState(query);

  const resultCount = useMemo(() => 128, []);

  const toggleCountry = (country: string) => {
    setSelectedCountries((current) =>
      current.includes(country) ? current.filter((item) => item !== country) : [...current, country]
    );
  };

  const toggleSector = (sector: string) => {
    setSelectedSectors((current) =>
      current.includes(sector) ? current.filter((item) => item !== sector) : [...current, sector]
    );
  };

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchTerm || 'Saudi banks')}`);
  };

  return (
    <main className="search-page">
      <div className="search-page-inner">
        <div className="search-breadcrumb">
          <button type="button" onClick={onNavigateHome}>
            Home
          </button>
          <span>/</span>
          <span>Search</span>
        </div>

        <div className="search-layout">
          <aside className="filter-panel">
            <div className="filter-panel-header">
              <div>FILTER SYSTEM</div>
              <span>Institutional Filters</span>
            </div>

            <FilterGroup title="Country" expanded={countryExpanded} onToggle={() => setCountryExpanded(!countryExpanded)}>
              <FilterCheckbox
                label="Saudi Arabia"
                count={84}
                checked={selectedCountries.includes('Saudi Arabia')}
                onChange={() => toggleCountry('Saudi Arabia')}
              />
              <FilterCheckbox
                label="UAE"
                count={22}
                checked={selectedCountries.includes('UAE')}
                onChange={() => toggleCountry('UAE')}
              />
              <FilterCheckbox
                label="Kuwait"
                count={12}
                checked={selectedCountries.includes('Kuwait')}
                onChange={() => toggleCountry('Kuwait')}
              />
            </FilterGroup>

            <FilterGroup title="Sector" expanded={sectorExpanded} onToggle={() => setSectorExpanded(!sectorExpanded)}>
              <FilterCheckbox
                label="Financials"
                count={110}
                checked={selectedSectors.includes('Financials')}
                onChange={() => toggleSector('Financials')}
              />
              <FilterCheckbox
                label="Real Estate"
                count={10}
                checked={selectedSectors.includes('Real Estate')}
                onChange={() => toggleSector('Real Estate')}
              />
              <FilterCheckbox
                label="Energy"
                count={8}
                checked={selectedSectors.includes('Energy')}
                onChange={() => toggleSector('Energy')}
              />
            </FilterGroup>

            <FilterGroup title="Date Range" expanded={dateExpanded} onToggle={() => setDateExpanded(!dateExpanded)}>
              <button className="filter-date-button" type="button">
                Last 3 Months
              </button>
            </FilterGroup>
          </aside>

          <section className="search-content">
            <form className="search-page-form" onSubmit={submitSearch}>
              <Search size={17} />
              <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
              <button type="submit" aria-label="Search">
                <Search size={18} />
              </button>
            </form>

            <p className="search-result-count">
              {resultCount} results for <em>"{query}"</em>
            </p>

            <SearchSectionHeader title="Latest Research Reports" />
            <div className="research-card-grid">
              {reports.map((report) => (
                <article className="research-card" key={report.title}>
                  <div className="research-card-meta">
                    <span>{report.category}</span>
                    <span>-</span>
                    <span>{report.country}</span>
                    <span>-</span>
                    <span>{report.date}</span>
                  </div>
                  <h2>{report.title}</h2>
                  <p>By {report.author}</p>
                </article>
              ))}
            </div>

            <SearchSectionHeader title="Companies (4)" />
            <div className="company-card-grid">
              {companies.map((company) => (
                <button
                  className="company-result-card"
                  key={company.slug}
                  type="button"
                  onClick={() => navigate(`/company/${company.slug}`)}
                >
                  <span className="company-card-icon">
                    <Building2 size={18} />
                  </span>
                  <span className="company-card-arrow">-&gt;</span>
                  <span className="company-card-name">{company.name}</span>
                  <span className="company-card-sector">{company.sector}</span>
                  <span className="company-card-country">{company.country}</span>
                </button>
              ))}
            </div>

            <SearchSectionHeader title="Sector (7)" />
            <div className="sector-card-grid">
              {sectors.map((sector) => {
                const Icon = sector.icon;
                return (
                  <button className="sector-card" type="button" key={sector.name}>
                    <span>
                      <Icon size={18} />
                    </span>
                    <strong>{sector.name}</strong>
                    <small>{sector.reports} Reports</small>
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function SearchSectionHeader({ title }: { title: string }) {
  return (
    <div className="search-section-header">
      <h1>{title}</h1>
      <button type="button">View All -&gt;</button>
    </div>
  );
}

function FilterGroup({
  title,
  expanded,
  onToggle,
  children,
}: {
  title: string;
  expanded: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="filter-group">
      <button type="button" onClick={onToggle}>
        <span>{title}</span>
        <ChevronDown size={14} className={expanded ? 'expanded' : ''} />
      </button>
      {expanded && <div className="filter-group-body">{children}</div>}
    </div>
  );
}

function FilterCheckbox({
  label,
  count,
  checked,
  onChange,
}: {
  label: string;
  count: number;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="filter-checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>
        {label} ({count})
      </span>
    </label>
  );
}
