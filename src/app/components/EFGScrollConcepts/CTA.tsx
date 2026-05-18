import { useRef } from 'react';
import { useInView } from './hooks';
import imgLogo from '../../../imports/Link→EfgHermeslogoPng/2815474073593b9f7b05f597eda18d9dd105499b.png';

export function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} style={{ padding: '180px 56px 120px' }}>
      <div style={{
        maxWidth: 1360,
        margin: '0 auto',
        padding: '100px 80px',
        borderRadius: 24,
        background: 'linear-gradient(150deg, var(--bg-2), #0B2218)',
        border: '1px solid var(--rule-strong)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          right: -150,
          top: -100,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(162,173,1,0.22), transparent 70%)',
        }} />
        <div className={`fadein ${inView ? 'in' : ''}`} style={{ maxWidth: 780, position: 'relative' }}>
          <div className="section-label">Institutional access</div>
          <h2 className="section-title">
            See what the <span className="serif" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>desks</span> see.
          </h2>
          <p className="lede" style={{ marginTop: 24 }}>
            Access to the terminal is by request. We onboard new buy-side firms on a rolling basis.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 40 }}>
            <button className="btn btn-primary">Request access →</button>
            <button className="btn btn-ghost">Download sample report</button>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: 1360,
        margin: '80px auto 0',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '40px 0',
        borderTop: '1px solid var(--rule)',
        color: 'var(--ink-faint)',
        fontSize: 13,
      }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <img src={imgLogo} alt="EFG Hermes" style={{ height: 24, width: 'auto' }} />
          <span>EFG Hermes Research · Prototype by IKEN Technology</span>
        </div>
        <div style={{ display: 'flex', gap: 24 }} className="mono">
          <span>© 2026</span>
          <span>Licensed by FRA / CMA</span>
          <span style={{ color: 'var(--accent)' }}>Data delayed 15m</span>
        </div>
      </div>
    </section>
  );
}
