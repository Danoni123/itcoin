import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Utility() {
  const { t } = useLanguage()

  return (
    <section id="utility" className="section utility">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{t.utility.kicker}</span>
          <h2>{t.utility.title}</h2>
          <p>{t.utility.description}</p>
        </div>

        <div className="util-grid">
          {t.utility.cases.map((c) => (
            <div className="util-card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .util-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .util-card {
          position: relative;
          padding: 30px 26px 26px;
          border-radius: var(--radius-m);
          background: linear-gradient(180deg, var(--surface-2), var(--surface));
          border: 1px solid var(--line);
          overflow: hidden;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .util-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--purple-bright), var(--gold));
          opacity: 0.5;
          transition: opacity 0.25s ease;
        }
        .util-card:hover {
          transform: translateY(-6px);
          border-color: rgba(218, 178, 44, 0.4);
          box-shadow: 0 24px 48px -24px rgba(132, 0, 176, 0.55);
        }
        .util-card:hover::before { opacity: 1; }
        .util-card h3 {
          font-size: 1.08rem;
          margin-bottom: 10px;
          color: var(--gold-soft);
        }
        .util-card p {
          color: var(--ink-dim);
          font-size: 0.96rem;
        }
        @media (max-width: 900px) {
          .util-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .util-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
