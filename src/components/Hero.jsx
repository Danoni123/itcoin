import logo from '../assets/logo.png'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="hero">
      <div className="hero-glow hero-glow-a" />
      <div className="hero-glow hero-glow-b" />

      <div className="wrap hero-grid">
        <div className="hero-coin-stage">
          <div className="coin-outer-ring" />
          <div className="coin-shadow" />
          <div className="coin">
            <img src={logo} alt="ITCoin" />
          </div>
        </div>

        <div className="hero-copy">
          <span className="hero-label">{t.hero.label}</span>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.description}</p>
          <div className="hero-actions">
            <a href="#about" className="btn btn-primary">{t.hero.cta1}</a>
            <a
              href="https://ithom-economy.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-gold"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          padding: clamp(120px, 16vw, 210px) 0 clamp(64px, 8vw, 130px);
          overflow: hidden;
        }
        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          z-index: 0;
        }
        .hero-glow-a {
          width: 42vw;
          height: 42vw;
          max-width: 620px;
          max-height: 620px;
          background: rgba(132, 0, 176, 0.38);
          top: -14vw;
          left: -10vw;
        }
        .hero-glow-b {
          width: 34vw;
          height: 34vw;
          max-width: 500px;
          max-height: 500px;
          background: rgba(218, 178, 44, 0.16);
          bottom: -10vw;
          right: -6vw;
        }
        .hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 0.95fr 1.15fr;
          align-items: center;
          gap: clamp(28px, 5vw, 80px);
        }

        /*
          Coin stage: sized purely from ITS OWN column width (never from
          viewport vw units), so it can never be larger than the space it
          actually has and can never get clipped by an ancestor. Every ring
          inside it is expressed as a percentage of this same box, so they
          are always concentric and always fit.
        */
        .hero-coin-stage {
          position: relative;
          width: clamp(200px, 100%, 440px);
          aspect-ratio: 1;
          margin: 0 auto;
        }

        .coin-outer-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(218, 178, 44, 0.22);
        }

        .coin-shadow {
          position: absolute;
          left: 50%;
          bottom: -3%;
          transform: translateX(-50%);
          width: 44%;
          height: 6%;
          background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.55), transparent 72%);
        }

        /* Coin sits inset from the ring by an equal percentage on every side,
           which is what keeps it perfectly concentric with the ring above. */
        .coin {
          position: absolute;
          inset: 12%;
          border-radius: 50%;
          padding: 3%;
          background: conic-gradient(
            from 210deg,
            var(--gold-soft),
            var(--gold),
            var(--purple-bright),
            var(--purple),
            var(--gold-soft)
          );
          box-shadow:
            0 0 0 1px rgba(245, 242, 250, 0.08),
            0 0 70px rgba(178, 75, 255, 0.4),
            0 30px 56px -20px rgba(0, 0, 0, 0.75);
          display: grid;
          place-items: center;
        }
        .coin img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          box-shadow:
            inset 0 0 0 2px rgba(10, 7, 16, 0.9),
            inset 0 6px 16px rgba(0, 0, 0, 0.4);
        }

        .hero-label {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 0.82rem;
          color: var(--gold-soft);
          margin-bottom: 22px;
        }
        .hero-copy h1 {
          font-size: clamp(2.1rem, 3.6vw, 4rem);
          line-height: 1.08;
          margin-bottom: 22px;
        }
        .hero-copy p {
          color: var(--ink-dim);
          font-size: clamp(0.98rem, 1.1vw, 1.18rem);
          max-width: 560px;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          margin-top: 34px;
          flex-wrap: wrap;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-coin-stage {
            order: -1;
            width: clamp(200px, 78%, 340px);
          }
          .hero-copy p { margin: 0 auto; }
          .hero-actions { justify-content: center; }
        }
        @media (max-width: 420px) {
          .hero-actions .btn { flex: 1 1 auto; text-align: center; }
        }
      `}</style>
    </section>
  )
}
