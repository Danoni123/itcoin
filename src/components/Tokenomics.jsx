import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const TOTAL_SUPPLY = 100_000_000
const RADIUS = 90
const CIRC = 2 * Math.PI * RADIUS

function formatITC(n, lang) {
  const num = n.toLocaleString(lang === 'ru' ? 'ru-RU' : 'en-US')
  return `${num} ITC`
}

export default function Tokenomics() {
  const { t, lang } = useLanguage()
  const [active, setActive] = useState(null)
  const allocations = t.tokenomics.allocations

  let offset = 0
  const segments = allocations.map((a, i) => {
    const length = (a.pct / 100) * CIRC
    const seg = { ...a, dash: `${length} ${CIRC - length}`, dashoffset: -offset, index: i }
    offset += length
    return seg
  })

  const shown = active !== null ? allocations[active] : null

  return (
    <section id="tokenomics" className="section tokenomics">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{t.tokenomics.kicker}</span>
          <h2>{t.tokenomics.title}</h2>
          <p>{t.tokenomics.description}</p>
        </div>

        <div className="tok-panel">
          <div className="tok-grid">
            <div className="tok-chart">
              <svg viewBox="0 0 220 220" className="donut">
                <circle cx="110" cy="110" r={RADIUS} fill="none" stroke="rgba(245,242,250,0.06)" strokeWidth="26" />
                {segments.map((s) => (
                  <circle
                    key={s.label}
                    cx="110"
                    cy="110"
                    r={RADIUS}
                    fill="none"
                    stroke={s.color}
                    strokeWidth={active === s.index ? 30 : 26}
                    strokeDasharray={s.dash}
                    strokeDashoffset={s.dashoffset}
                    transform="rotate(-90 110 110)"
                    className="donut-seg"
                    style={{ opacity: active === null || active === s.index ? 1 : 0.35 }}
                    onMouseEnter={() => setActive(s.index)}
                    onMouseLeave={() => setActive(null)}
                    onClick={() => setActive(active === s.index ? null : s.index)}
                  />
                ))}
                <text x="110" y="102" textAnchor="middle" className="donut-total-num">
                  {shown ? `${shown.pct}%` : '100,000,000'}
                </text>
                <text x="110" y="124" textAnchor="middle" className="donut-total-label">
                  {shown ? shown.label : t.tokenomics.totalLabel}
                </text>
              </svg>
            </div>

            <div className="tok-legend">
              {allocations.map((a, i) => (
                <button
                  key={a.label}
                  className={`tok-row ${active === i ? 'is-active' : ''}`}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => setActive(active === i ? null : i)}
                >
                  <span className="tok-dot" style={{ background: a.color }} />
                  <span className="tok-name">{a.label}</span>
                  <span className="tok-pct">{a.pct}%</span>
                  <span className="tok-amount">{formatITC((a.pct / 100) * TOTAL_SUPPLY, lang)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .tok-panel {
          padding: clamp(28px, 3.2vw, 48px);
          border-radius: var(--radius-l);
          background: linear-gradient(155deg, rgba(29, 17, 48, 0.7), rgba(14, 9, 22, 0.6));
          border: 1px solid var(--line);
          box-shadow: 0 30px 70px -40px rgba(132, 0, 176, 0.5);
          backdrop-filter: blur(6px);
        }
        .tok-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 56px;
          align-items: center;
        }
        .tok-chart {
          display: flex;
          justify-content: center;
        }
        .donut {
          width: 100%;
          max-width: 360px;
        }
        .donut-seg {
          cursor: pointer;
          transition: stroke-width 0.2s ease, opacity 0.2s ease;
        }
        .donut-total-num {
          font-family: var(--font-display);
          font-size: 15px;
          fill: var(--ink);
        }
        .donut-total-label {
          font-family: var(--font-body);
          font-size: 7.5px;
          fill: var(--ink-faint);
          letter-spacing: 0.02em;
        }
        .tok-legend {
          display: flex;
          flex-direction: column;
        }
        .tok-row {
          display: grid;
          grid-template-columns: 12px 1fr auto auto;
          align-items: center;
          gap: 14px;
          background: none;
          text-align: left;
          padding: 16px 14px;
          border-radius: var(--radius-s);
          border-top: 1px solid var(--line);
          color: var(--ink-dim);
          transition: background 0.2s ease, color 0.2s ease;
        }
        .tok-legend .tok-row:last-child { border-bottom: 1px solid var(--line); }
        .tok-row.is-active, .tok-row:hover {
          background: rgba(178, 75, 255, 0.08);
          color: var(--ink);
        }
        .tok-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }
        .tok-name { font-size: 0.98rem; }
        .tok-pct {
          font-family: var(--font-display);
          color: var(--gold-soft);
          font-size: 0.98rem;
        }
        .tok-amount {
          font-size: 0.86rem;
          color: var(--ink-faint);
          min-width: 120px;
          text-align: right;
        }
        @media (max-width: 860px) {
          .tok-grid { grid-template-columns: 1fr; gap: 32px; }
        }
        @media (max-width: 520px) {
          .tok-row { grid-template-columns: 10px 1fr auto; }
          .tok-amount { display: none; }
        }
      `}</style>
    </section>
  )
}
