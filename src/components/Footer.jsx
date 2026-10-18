import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/site';
import BrandLogo from './common/BrandLogo';
import './Footer.css';

// Lightweight inline brand SVGs for social platforms
const SocialIcons = {
  LinkedIn: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  GitHub: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  ),
  Facebook: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  X: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main-grid">
          {/* Brand Info Column */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-brand-link" aria-label="Wizora Global Home">
              <BrandLogo variant="dark" />
            </a>
            <p className="footer-description">
              Empowering global innovation through state-of-the-art software systems,
              connected hardware architecture, and bespoke technology consulting.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-nav-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links-list">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-link">
                    <ArrowRight size={12} className="footer-arrow" /> {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us / Socials Column */}
          <div className="footer-social-col">
            <h4 className="footer-title">Follow Us</h4>
            <div className="social-icons-row">
              {siteConfig.socialLinks.map((social) => {
                const IconComponent = SocialIcons[social.name] || SocialIcons.LinkedIn;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="social-icon-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Wizora Global on ${social.name}`}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
            <span className="social-note">
              Replace social links with official corporate profiles.
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <span>&copy; {currentYear} {siteConfig.company.name}. All rights reserved.</span>
          <span>{siteConfig.company.footerQuote}</span>
        </div>
      </div>
    </footer>
  );
}
