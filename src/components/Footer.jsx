import logo from '../assets/logo.png'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">

        {/* BRAND */}
        <div className="footer-brand">
          <div className="brand footer-logo">
            <img src={logo} alt="ITCoin logo" />
            <span>{t.footer.brand}</span>
          </div>

          <p>{t.footer.description}</p>
        </div>

        {/* ECOSYSTEM */}
        <div className="footer-col">
          <h4>{t.footer.ecosystemHeading}</h4>

          <a href="#ecosystem">
            {t.footer.linkEcosystem}
          </a>

          <a
            href="https://ithom-economy.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {t.footer.linkEconomy}
          </a>

          <a href="#news">
            {t.footer.linkNews}
          </a>
        </div>

        {/* COMMUNITY */}
        <div className="footer-col">
          <h4>{t.footer.communityHeading}</h4>

          {t.footer.socials.map((s) => (
            <span className="footer-placeholder" key={s}>
              {s}
            </span>
          ))}
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>{t.footer.contactHeading}</h4>

          <a
            className="footer-email"
            href={`mailto:${t.footer.email}`}
          >
            <span className="email-icon">✉</span>
            <span>{t.footer.email}</span>
          </a>

          <span className="footer-contact-label">
            Official project contact
          </span>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="wrap footer-bottom">

        <p className="disclaimer">
          {t.footer.disclaimer}
        </p>

        <p className="copyright">
          {t.footer.copyright(new Date().getFullYear())}
        </p>

      </div>

      <style>{`
        .site-footer {
          border-top: 1px solid var(--line);
          background: var(--void-2);
          padding: 72px 0 32px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.25fr;
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
          line-height: 1.65;
        }

        .footer-col h4 {
          font-size: 0.95rem;
          color: var(--gold-soft);
          margin-bottom: 16px;
        }

        .footer-col a,
        .footer-placeholder {
          display: block;
          color: var(--ink-dim);
          font-size: 0.92rem;
          margin-bottom: 12px;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-col a:hover {
          color: var(--ink);
        }

        /* EMAIL */

        .footer-email {
          display: flex !important;
          align-items: center;
          gap: 9px;
          width: fit-content;
          color: var(--ink) !important;
          font-weight: 500;
          word-break: break-word;
        }

        .email-icon {
          color: var(--gold-soft);
          font-size: 1rem;
          flex-shrink: 0;
        }

        .footer-contact-label {
          display: block;
          color: var(--ink-faint);
          font-size: 0.78rem;
          margin-top: 4px;
          line-height: 1.4;
        }

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
          line-height: 1.5;
        }

        .copyright {
          color: var(--ink-faint);
          font-size: 0.82rem;
        }

        @media (max-width: 1000px) {
          .footer-grid {
            grid-template-columns: 1.4fr 1fr 1fr;
          }
        }

        @media (max-width: 780px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-email {
            max-width: 100%;
          }
        }
      `}</style>
    </footer>
  )
}