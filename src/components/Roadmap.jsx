import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Roadmap() {
  const { t } = useLanguage()

  return (
    <section id="roadmap" className="section roadmap">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{t.roadmap.kicker}</span>
          <h2>{t.roadmap.title}</h2>
          <p>{t.roadmap.description}</p>
        </div>

        <div className="road-track">
          {t.roadmap.stages.map((s, i) => (
            <div className="road-stage" key={s.title}>
              <div className={`road-node road-node--${s.status}`}>
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{s.title}</h3>
              <span className={`road-tag road-tag--${s.status}`}>{t.roadmap.statusLabels[s.status]}</span>
              <p>{s.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .roadmap { background: var(--void-2); }
        .road-track {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
          position: relative;
        }
        .road-track::before {
          content: '';
          position: absolute;
          top: 22px;
          left: 5%;
          right: 5%;
          height: 1px;
          background: linear-gradient(90deg, var(--purple-bright), var(--gold));
          opacity: 0.35;
        }
        .road-stage { position: relative; }
        .road-node {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 0.85rem;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
          background: var(--void-2);
          border: 1px solid var(--line);
        }
        .road-node--done {
          background: linear-gradient(135deg, var(--purple-bright), var(--purple));
          border-color: transparent;
        }
        .road-node--active {
          border-color: var(--gold);
          box-shadow: 0 0 0 4px rgba(218, 178, 44, 0.14);
        }
        .road-stage h3 {
          font-size: 1.02rem;
          margin-bottom: 8px;
        }
        .road-tag {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 0.72rem;
          padding: 4px 10px;
          border-radius: 999px;
          margin-bottom: 12px;
        }
        .road-tag--done { background: rgba(178, 75, 255, 0.18); color: var(--purple-bright); }
        .road-tag--active { background: rgba(218, 178, 44, 0.16); color: var(--gold-soft); }
        .road-tag--planned { background: rgba(245, 242, 250, 0.08); color: var(--ink-faint); }
        .road-stage p {
          color: var(--ink-dim);
          font-size: 0.9rem;
        }
        @media (max-width: 900px) {
          .road-track { grid-template-columns: 1fr 1fr; }
          .road-track::before { display: none; }
        }
        @media (max-width: 520px) {
          .road-track { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
