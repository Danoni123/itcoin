import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Economy() {
  const { t } = useLanguage()

  return (
    <section className="section economy">
      <div className="wrap economy-panel">
        <div>
          <span className="kicker">{t.economy.kicker}</span>
          <h2>{t.economy.title}</h2>
          <p>{t.economy.description}</p>
        </div>
        <a href="https://ithom-economy.netlify.app/" target="_blank" rel="noreferrer" className="btn btn-primary">
          {t.economy.cta}
        </a>
      </div>

      <style>{`
        .economy-panel {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding: clamp(36px, 4vw, 56px) clamp(28px, 4vw, 56px);
          border-radius: var(--radius-l);
          background: linear-gradient(135deg, rgba(132,0,176,0.28), rgba(218,178,44,0.08));
          border: 1px solid var(--line);
        }
        .economy-panel h2 {
          font-size: clamp(1.5rem, 2.6vw, 2rem);
          margin: 10px 0 12px;
        }
        .economy-panel p { color: var(--ink-dim); max-width: 460px; }
        .economy-panel .btn { flex-shrink: 0; }
        @media (max-width: 780px) {
          .economy-panel { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  )
}
