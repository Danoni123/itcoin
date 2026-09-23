import logo from '../assets/logo.png'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <div className="brand footer-logo">
            <img src={logo} alt="ITCoin logo" />
            <span>{t.footer.brand}</span>
          </div>
          <p>{t.footer.description}</p>
        </div>

        <div className="footer-col">
          <h4>{t.footer.ecosystemHeading}</h4>
          <a href="#ecosystem">{t.footer.linkEcosystem}</a>
          <a href="https://ithom-economy.netlify.app/" target="_blank" rel="noreferrer">{t.footer.linkEconomy}</a>
          <a href="#news">{t.footer.linkNews}</a>
        </div>

        <div className="footer-col">
          <h4>{t.footer.communityHeading}</h4>
          {t.footer.socials.map((s) => (
            <span className="footer-placeholder" key={s}>{s}</span>
          ))}
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p className="disclaimer">{t.footer.disclaimer}</p>
        <p className="copyright">{t.footer.copyright(new Date().getFullYear())}</p>
      </div>

      <style>{`
        .site-footer {
          border-top: 1px solid var(--line);
          background: var(--void-2);
          padding: 72px 0 32px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 44px;
        }
        .footer-logo {
          margin-bottom: 16px;
        }
        .footer-logo img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }
        .footer-brand p {
          color: var(--ink-dim);
          max-width: 340px;
          font-size: 0.94rem;
        }
        .footer-col h4 {
          font-size: 0.95rem;
          color: var(--gold-soft);
          margin-bottom: 16px;
        }
        .footer-col a, .footer-placeholder {
          display: block;
          color: var(--ink-dim);
          font-size: 0.92rem;
          margin-bottom: 12px;
        }
        .footer-col a:hover { color: var(--ink); }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding-top: 28px;
          border-top: 1px solid var(--line);
          flex-wrap: wrap;
        }
        .disclaimer {
          color: var(--ink-faint);
          font-size: 0.82rem;
          max-width: 560px;
        }
        .copyright {
          color: var(--ink-faint);
          font-size: 0.82rem;
        }
        @media (max-width: 780px) {
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </footer>
  )
}
