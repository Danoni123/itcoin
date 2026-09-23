import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section about">
      <div className="about-glow" />
      <div className="wrap">
        <div className="about-grid">
          <div className="section-head about-head">
            <span className="kicker">{t.about.kicker}</span>
            <h2>{t.about.title}</h2>
            <p>{t.about.description}</p>
          </div>

          <ul className="about-list">
            {t.about.points.map((point, i) => (
              <li key={i}>
                <span className="about-index">{String(i + 1).padStart(2, '0')}</span>
                <p>{point}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="about-note">{t.about.note}</p>
      </div>

      <style>{`
        .about { position: relative; overflow: hidden; }
        .about-glow {
          position: absolute;
          top: -20%;
          right: -8%;
          width: 32vw;
          height: 32vw;
          max-width: 420px;
          max-height: 420px;
          background: rgba(218, 178, 44, 0.1);
          border-radius: 50%;
          filter: blur(110px);
          pointer-events: none;
        }
        .about-grid {
          position: relative;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 60px;
        }
        .about-head { margin-bottom: 0; }
        .about-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }
        .about-list li {
          display: flex;
          gap: 22px;
          padding: 22px 4px;
          border-top: 1px solid var(--line);
          transition: padding-left 0.25s ease;
        }
        .about-list li:hover { padding-left: 12px; }
        .about-list li:last-child { border-bottom: 1px solid var(--line); }
        .about-index {
          font-family: var(--font-display);
          color: var(--gold);
          font-size: 0.95rem;
          padding-top: 2px;
          min-width: 28px;
        }
        .about-list p { color: var(--ink-dim); font-size: 1.02rem; }
        .about-note {
          margin-top: 56px;
          padding-top: 28px;
          border-top: 1px solid var(--line);
          color: var(--ink-faint);
          font-size: 0.92rem;
          max-width: 720px;
        }
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </section>
  )
}
