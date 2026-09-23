import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Ecosystem() {
  const { t } = useLanguage()
  const flow = t.ecosystem.flow

  return (
    <section id="ecosystem" className="section ecosystem">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{t.ecosystem.kicker}</span>
          <h2>{t.ecosystem.title}</h2>
          <p>{t.ecosystem.description}</p>
        </div>

        <div className="flow" role="list">
          {flow.map((step, i) => (
            <div className="flow-item" key={step} role="listitem">
              <div className="flow-node">{step}</div>
              {i < flow.length - 1 && <span className="flow-connector" aria-hidden="true" />}
            </div>
          ))}
        </div>

        <div className="eco-body">
          <div className="eco-status">
            <span className="status-dot" />
            {t.ecosystem.statusNote}
          </div>

          <div className="eco-features">
            {t.ecosystem.features.map((f) => (
              <div className="eco-chip" key={f}>{f}</div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .ecosystem { background: var(--void-2); }
        .flow {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0;
          margin-bottom: 48px;
        }
        .flow-item { display: flex; align-items: center; }
        .flow-node {
          padding: 14px 22px;
          border-radius: 999px;
          background: var(--surface);
          border: 1px solid var(--line);
          font-family: var(--font-display);
          font-size: 0.92rem;
          color: var(--ink);
          white-space: nowrap;
        }
        .flow-item:first-child .flow-node {
          background: linear-gradient(135deg, var(--purple-bright), var(--purple));
          border-color: transparent;
        }
        .flow-connector {
          width: 34px;
          height: 1px;
          background: linear-gradient(90deg, var(--purple-bright), var(--gold));
          margin: 0 4px;
        }
        .eco-body {
          display: grid;
          grid-template-columns: 0.9fr 1.4fr;
          gap: 40px;
          align-items: start;
        }
        .eco-status {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 22px;
          border-radius: var(--radius-m);
          background: var(--surface);
          border: 1px solid var(--line);
          color: var(--ink-dim);
          font-size: 0.96rem;
        }
        .status-dot {
          width: 9px;
          height: 9px;
          min-width: 9px;
          margin-top: 6px;
          border-radius: 50%;
          background: var(--gold);
          box-shadow: 0 0 12px var(--gold);
        }
        .eco-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .eco-chip {
          padding: 16px 18px;
          border-radius: var(--radius-s);
          border: 1px solid var(--line);
          font-size: 0.95rem;
          color: var(--ink-dim);
          transition: border-color 0.25s ease, color 0.25s ease;
        }
        .eco-chip:hover {
          border-color: rgba(178, 75, 255, 0.5);
          color: var(--ink);
        }
        @media (max-width: 860px) {
          .eco-body { grid-template-columns: 1fr; }
          .eco-features { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 520px) {
          .flow-node { font-size: 0.82rem; padding: 11px 16px; }
          .flow-connector { width: 18px; }
          .eco-features { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
