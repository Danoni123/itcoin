import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function News() {
  const { t } = useLanguage()

  return (
    <section id="news" className="section news">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{t.news.kicker}</span>
          <h2>{t.news.title}</h2>
          <p>{t.news.description}</p>
        </div>

        <div className="news-grid">
          {t.news.cards.map((c) => (
            <div className="news-card" key={c.tag}>
              <span className="news-tag">{c.tag}</span>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .news-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .news-card {
          position: relative;
          padding: 28px 26px;
          border-radius: var(--radius-m);
          background: var(--surface);
          border: 1px solid var(--line);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .news-card:hover {
          transform: translateY(-4px);
          border-color: rgba(178, 75, 255, 0.4);
        }
        .news-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display);
          font-size: 0.78rem;
          color: var(--purple-bright);
          margin-bottom: 14px;
        }
        .news-tag::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold);
        }
        .news-card p {
          color: var(--ink-dim);
          font-size: 0.95rem;
        }
        @media (max-width: 780px) {
          .news-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
