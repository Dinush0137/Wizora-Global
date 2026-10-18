import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/site';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrolled } from '../hooks/useScrolled';
import BrandLogo from './common/BrandLogo';
import Button from './common/Button';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrolled(20);
  const activeSection = useActiveSection(['home', 'about', 'services', 'clients', 'innovations', 'contact']);
  const navRef = useRef(null);
  const toggleBtnRef = useRef(null);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        if (toggleBtnRef.current) toggleBtnRef.current.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-wrap">
        {/* Brand Link */}
        <a href="#home" className="brand-anchor" aria-label="Wizora Global Home" onClick={closeMenu}>
          <BrandLogo variant="light" />
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button
          ref={toggleBtnRef}
          className="menu-toggle"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          aria-controls="primary-navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <nav
          id="primary-navigation"
          ref={navRef}
          className={`nav-links ${mobileMenuOpen ? 'is-open' : ''}`}
          aria-label="Main Navigation"
        >
          {siteConfig.navigation.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            );
          })}

          <div className="mobile-cta">
            <Button
              href="#contact"
              variant="primary"
              size="small"
              className="w-full"
              onClick={closeMenu}
            >
              Contact Us <ArrowUpRight size={16} />
            </Button>
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className="header-cta desktop-only">
          <Button href="#contact" variant="primary" size="small">
            Contact Us <ArrowUpRight size={16} />
          </Button>
        </div>
      </div>
    </header>
  );
}
