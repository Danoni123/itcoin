import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Header() {
  const { lang, toggleLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const LINKS = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.ecosystem, href: '#ecosystem' },
    { label: t.nav.tokenomics, href: '#tokenomics' },
    { label: t.nav.utility, href: '#utility' },
    { label: t.nav.roadmap, href: '#roadmap' },
  ]

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap header-row">
        <a href="#top" className="brand">
          <img src={logo} alt="ITCoin logo" className="brand-mark" />
          <span>ITCoin</span>
        </a>

        <nav className="nav-desktop">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="header-cta">
          <button className="lang-toggle" onClick={toggleLang} aria-label="Switch language">
            <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
            <span className="lang-sep">/</span>
            <span className={lang === 'ru' ? 'is-active' : ''}>RU</span>
          </button>
          <a
            className="btn btn-gold header-btn"
            href="https://ithom-economy.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {t.nav.economyBtn}
          </a>
        </div>

        <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <button className="lang-toggle lang-toggle--mobile" onClick={toggleLang}>
            <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
            <span className="lang-sep">/</span>
            <span className={lang === 'ru' ? 'is-active' : ''}>RU</span>
          </button>
          <a
            className="btn btn-primary"
            href="https://ithom-economy.netlify.app/"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            {t.nav.economyBtn}
          </a>
        </div>
      )}

      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 20px 0;
          transition: background 0.3s ease, padding 0.3s ease, border-color 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        .site-header.is-scrolled {
          background: rgba(10, 7, 16, 0.82);
          backdrop-filter: blur(14px);
          padding: 14px 0;
          border-bottom: 1px solid var(--line);
        }
        .header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          flex-shrink: 0;
        }
        .brand-mark {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 0 0 1px rgba(218, 178, 44, 0.5), 0 0 18px rgba(178, 75, 255, 0.45);
        }
        .nav-desktop {
          display: flex;
          gap: 34px;
          font-size: 0.94rem;
          color: var(--ink-dim);
        }
        .nav-desktop a:hover { color: var(--ink); }
        .header-cta {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .header-btn { padding: 10px 20px; font-size: 0.88rem; }
        .lang-toggle {
          display: flex;
          align-items: center;
          gap: 5px;
          background: none;
          padding: 8px 10px;
          border-radius: 999px;
          border: 1px solid var(--line);
          font-family: var(--font-display);
          font-size: 0.8rem;
          color: var(--ink-faint);
        }
        .lang-toggle:hover { border-color: rgba(218, 178, 44, 0.5); }
        .lang-toggle span.is-active { color: var(--gold-soft); }
        .lang-sep { color: var(--ink-faint); opacity: 0.5; }
        .lang-toggle--mobile { align-self: flex-start; }
        .nav-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          padding: 6px;
        }
        .nav-toggle span {
          width: 22px;
          height: 2px;
          background: var(--ink);
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .nav-toggle.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nav-toggle.is-open span:nth-child(2) { opacity: 0; }
        .nav-toggle.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
        .nav-mobile {
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: 22px 24px 28px;
          background: rgba(10, 7, 16, 0.97);
          border-top: 1px solid var(--line);
        }
        .nav-mobile a { font-size: 1.02rem; }
        @media (max-width: 860px) {
          .nav-desktop, .header-cta { display: none; }
          .nav-toggle { display: flex; }
        }
      `}</style>
    </header>
  )
}
