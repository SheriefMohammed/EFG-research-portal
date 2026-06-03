import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation, useNavigate } from 'react-router';
import { Building2, Search, X } from 'lucide-react';
import { SearchDropdown } from './SearchDropdown';
import imgLogo from '../../../imports/Link→EfgHermeslogoPng/2815474073593b9f7b05f597eda18d9dd105499b.png';

export function AppHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDialog, setShowSearchDialog] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Our Coverage', to: '/#coverage' },
    { label: 'Sectors', to: '/sectors' },
    { label: 'Research Library', to: '/search?q=Saudi%20banks' },
  ];

  const isActive = (to: string) => {
    if (to === '/') {
      return location.pathname === '/';
    }

    if (to.startsWith('/#')) {
      return location.pathname === '/' && location.hash === to.slice(1);
    }

    const [path] = to.split('?');
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <Link to="/" className="app-header-brand" aria-label="EFG Hermes home">
            <img src={imgLogo} alt="EFG Hermes" />
          </Link>

          <nav className="app-header-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={isActive(item.to) ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="app-header-actions">
            <button
              className="app-icon-button"
              type="button"
              aria-label="Open search"
              onClick={() => setShowSearchDialog(true)}
            >
              <Search size={16} />
            </button>
            <button className="app-login-button" type="button" onClick={() => setShowLoginDialog(true)}>
              Log in
            </button>
          </div>
        </div>
      </header>

      {showSearchDialog && (
        <SearchDropdown
          query={searchQuery}
          onQueryChange={setSearchQuery}
          onClose={() => setShowSearchDialog(false)}
          onNavigate={navigate}
        />
      )}

      {showLoginDialog && <LoginDialog onClose={() => setShowLoginDialog(false)} />}
    </>
  );
}

function LoginDialog({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="login-dialog-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Login"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="login-dialog" onMouseDown={(event) => event.stopPropagation()}>
        <div className="login-dialog-hero">
          <button className="login-dialog-close" type="button" aria-label="Close login" onClick={onClose}>
            <X size={17} />
          </button>
          <div className="login-dialog-brand">
            <Building2 size={13} />
            <span>EFG Hermes</span>
          </div>
          <div className="login-dialog-title">Our Research ... Your way!</div>
          <div className="login-dialog-mark" aria-hidden="true" />
        </div>

        <form
          className="login-dialog-form"
          onSubmit={(event) => {
            event.preventDefault();
            onClose();
          }}
        >
          <h2>Login</h2>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <div className="login-dialog-options">
            <label>
              <input type="checkbox" defaultChecked />
              <span>Remember me</span>
            </label>
            <a href="#">Forget password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>,
    document.body
  );
}

export function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="app-footer-inner">
        <div className="app-footer-brand">
          <img src={imgLogo} alt="EFG Hermes" />
          <p>
            An EFG Holding Company. The leading investment bank in the Middle East and North Africa,
            providing research, brokerage, asset management, and private equity services.
          </p>
        </div>

        <FooterColumn title="Platform" links={['Research Library', 'Our Coverage', 'Sectors', 'Macro Strategy', 'My EFG Dashboard']} />
        <FooterColumn title="Company" links={['About EFG Hermes', 'Our Analysts', 'EFG Holding', 'Careers']} />
        <FooterColumn title="Legal" links={['Terms & Conditions', 'Privacy Policy', 'Disclaimer', 'Cookie Preferences']} />
      </div>

      <div className="app-footer-bottom">
        <span>Copyright © 2026 EFG Hermes Holding SAE and/or its affiliates. All rights reserved.</span>
        <span className="app-footer-socials">
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="app-footer-column">
      <h3>{title}</h3>
      {links.map((link) => (
        <a key={link} href="#">
          {link}
        </a>
      ))}
    </div>
  );
}
