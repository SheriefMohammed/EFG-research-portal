import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router';
import './styles.css';
import { HeroSafe, HeroBold } from './Hero';
import { CoverageSafe, CoverageBold } from './Coverage';
import { MapSafe } from './Map';
import { NewsSafe, NewsBold } from './News';
import { StatsSafe, StatsBold } from './Stats';
import { TerminalSafe, TerminalBold } from './Terminal';
import { CTASection } from './CTA';
import { SearchResults } from './SearchResults';
import { CompanyPage } from './CompanyPage';
import { CountryPage } from './CountryPage';
import { AnalystPage } from './AnalystPage';
import { SectorPage } from './SectorPage';
import { AppFooter, AppHeader } from './AppShell';

const TWEAK_DEFAULTS = {
  theme: 'dark',
  device: 'desktop',
  heroVariant: 'safe',
  coverageVariant: 'safe',
  mapVariant: 'safe',
  newsVariant: 'bold',
  statsVariant: 'safe',
  terminalVariant: 'safe',
};

function Ticker() {
  const items = [
    ['EGX30', '28,412.60', '+1.24%', 'up'],
    ['TASI', '12,104.82', '+0.68%', 'up'],
    ['DFM', '4,870.15', '-0.12%', 'dn'],
    ['ADX', '9,622.04', '+0.42%', 'up'],
    ['QE', '10,418.77', '+0.91%', 'up'],
    ['MASI', '14,226.30', '-0.23%', 'dn'],
    ['KSE', '7,984.41', '+1.02%', 'up'],
    ['BRENT', '$84.22', '+0.51%', 'up'],
    ['USD/EGP', '47.82', '-0.08%', 'dn'],
    ['USD/SAR', '3.7504', '+0.00%', 'up'],
    ['GOLD', '$2,418.50', '+0.34%', 'up'],
  ];

  const doubled = [...items, ...items];

  return (
    <div className='ticker'>
      <div className='ticker-track'>
        {doubled.map((t, i) => (
          <span key={i} className='ticker-item'>
            <span className='sym'>{t[0]}</span>
            <span className='val'>{t[1]}</span>
            <span className={t[3]}>{t[2]}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

interface ScrollRailProps {
  chapters: Array<{ id: string; label: string }>;
}

function ScrollRail({ chapters }: ScrollRailProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight / 2;
      let found = 0;
      chapters.forEach((c, i) => {
        const el = document.getElementById(c.id);
        if (el && el.offsetTop <= y) found = i;
      });
      setActive(found);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [chapters]);

  return (
    <div className='scroll-rail'>
      {chapters.map((c, i) => (
        <div
          key={c.id}
          className={`chapter ${i === active ? 'active' : ''}`}
          onClick={() =>
            document.getElementById(c.id)?.scrollIntoView({ behavior: 'auto' })
          }
        >
          <span>{String(i + 1).padStart(2, '0')}</span>
          <span className='tick' />
          <span>{c.label}</span>
        </div>
      ))}
    </div>
  );
}

interface TweakToggleProps {
  value: string;
  onChange: (value: string) => void;
  options?: string[];
}

function TweakToggle({
  value,
  onChange,
  options = ['safe', 'bold'],
}: TweakToggleProps) {
  return (
    <div className='tweak-toggle'>
      {options.map((opt) => (
        <button
          key={opt}
          className={value === opt ? 'on' : ''}
          onClick={() => onChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

interface TweaksPanelProps {
  visible: boolean;
  state: typeof TWEAK_DEFAULTS;
  setState: (patch: Partial<typeof TWEAK_DEFAULTS>) => void;
}

function TweaksPanel({ visible, state, setState }: TweaksPanelProps) {
  const allToBold = () =>
    setState({
      heroVariant: 'bold',
      coverageVariant: 'bold',
      mapVariant: 'bold',
      newsVariant: 'bold',
      statsVariant: 'bold',
      terminalVariant: 'bold',
    });

  const allToSafe = () =>
    setState({
      heroVariant: 'safe',
      coverageVariant: 'safe',
      mapVariant: 'safe',
      newsVariant: 'safe',
      statsVariant: 'safe',
      terminalVariant: 'safe',
    });

  if (!visible) return null;

  return (
    <div className='tweaks-panel'>
      <h3>Tweaks · Section Variants</h3>
      <div className='tweak-row'>
        <label>Device</label>
        <TweakToggle
          value={state.device || 'desktop'}
          onChange={(v) => setState({ device: v })}
          options={['desktop', 'mobile']}
        />
      </div>
      <div className='tweak-row'>
        <label>Theme</label>
        <TweakToggle
          value={state.theme || 'dark'}
          onChange={(v) => setState({ theme: v })}
          options={['dark', 'light']}
        />
      </div>
      <div className='tweak-row'>
        <label>Hero</label>
        <TweakToggle
          value={state.heroVariant}
          onChange={(v) => setState({ heroVariant: v })}
        />
      </div>
      <div className='tweak-row'>
        <label>Coverage</label>
        <TweakToggle
          value={state.coverageVariant}
          onChange={(v) => setState({ coverageVariant: v })}
        />
      </div>
      <div className='tweak-row'>
        <label>Map</label>
        <TweakToggle
          value={state.mapVariant}
          onChange={(v) => setState({ mapVariant: v })}
        />
      </div>
      <div className='tweak-row'>
        <label>News</label>
        <TweakToggle
          value={state.newsVariant}
          onChange={(v) => setState({ newsVariant: v })}
        />
      </div>
      <div className='tweak-row'>
        <label>Stats</label>
        <TweakToggle
          value={state.statsVariant}
          onChange={(v) => setState({ statsVariant: v })}
        />
      </div>
      <div className='tweak-row'>
        <label>Terminal</label>
        <TweakToggle
          value={state.terminalVariant}
          onChange={(v) => setState({ terminalVariant: v })}
        />
      </div>
      <div className='tweak-row' style={{ gap: 8 }}>
        <button
          className='btn btn-ghost'
          style={{ padding: '6px 10px', fontSize: 11 }}
          onClick={allToSafe}
        >
          All safe
        </button>
        <button
          className='btn btn-primary'
          style={{ padding: '6px 10px', fontSize: 11 }}
          onClick={allToBold}
        >
          All bold
        </button>
      </div>
      <div
        style={{
          marginTop: 10,
          fontSize: 10,
          color: 'var(--ink-faint)',
          fontFamily: 'var(--mono)',
          lineHeight: 1.5,
        }}
      >
        Safe = reveal-on-scroll. Bold = pinned / horizontal / cinematic.
      </div>
    </div>
  );
}

export default function App() {
  const [state] = useState(TWEAK_DEFAULTS);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme || 'dark');
    document.documentElement.setAttribute(
      'data-device',
      state.device || 'desktop',
    );
  }, [state.theme, state.device]);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        document
          .querySelector(location.hash)
          ?.scrollIntoView({ behavior: 'auto' });
      }, 0);
      return;
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <>
      <AppHeader />
      <Routes>
        <Route
          path='/search'
          element={<SearchResults onNavigateHome={handleNavigateHome} />}
        />
        <Route path='/company/:companySlug' element={<CompanyPage />} />
        <Route path='/country/:countrySlug' element={<CountryPage />} />
        <Route path='/sectors' element={<SectorPage />} />
        <Route path='/analyst' element={<AnalystPage />} />
        <Route path='/analyst/:analystSlug' element={<AnalystPage />} />
        <Route path='*' element={<HomePage state={state} />} />
      </Routes>
      <AppFooter />
    </>
  );
}

function HomePage({ state }: { state: typeof TWEAK_DEFAULTS }) {
  // Show home page
  const chapters = [
    { id: 'hero', label: 'Hero' },
    { id: 'coverage', label: 'Coverage' },
    { id: 'map', label: 'Map' },
    { id: 'news', label: 'News' },
    { id: 'stats', label: 'Numbers' },
    { id: 'terminal', label: 'Terminal' },
    { id: 'cta', label: 'Access' },
  ];

  return (
    <>
      <ScrollRail chapters={chapters} />

      <div id='hero' data-screen-label='01 Hero'>
        {state.heroVariant === 'bold' ? <HeroBold /> : <HeroSafe />}
      </div>

      <div style={{ background: 'var(--bg-2)', padding: '0 56px' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto' }}>
          <Ticker />
        </div>
      </div>

      <div id='coverage' data-screen-label='02 Coverage'>
        {state.coverageVariant === 'bold' ? <CoverageBold /> : <CoverageSafe />}
      </div>

      <div id='map' data-screen-label='03 Map'>
        <MapSafe />
        <div className='coverage-card absolute top-16 start-0'>
          <h3 className='ps-20'>
            Our Coverage <span>Across MENA &</span>
            <br />
            <span>Frontier</span> Markets
          </h3>
        </div>
      </div>

      <div id='news' data-screen-label='04 News'>
        {state.newsVariant === 'bold' ? <NewsBold /> : <NewsSafe />}
      </div>

      <div id='stats' data-screen-label='05 Stats'>
        {state.statsVariant === 'bold' ? <StatsBold /> : <StatsSafe />}
      </div>

      <div id='terminal' data-screen-label='06 Terminal'>
        {state.terminalVariant === 'bold' ? <TerminalBold /> : <TerminalSafe />}
      </div>

      <div id='cta' data-screen-label='07 CTA'>
        <CTASection />
      </div>
    </>
  );
}
