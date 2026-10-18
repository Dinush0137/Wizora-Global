import React from 'react';
import logoImg from '../../assets/logo.png';
import './BrandLogo.css';

export default function BrandLogo({ variant = 'light', size = 'default', className = '' }) {
  const isDark = variant === 'dark'; // on dark background (like footer)

  if (!isDark) {
    return (
      <div className={`brand-logo-component brand-light size-${size} ${className}`.trim()}>
        <img
          src={logoImg}
          alt="Wizora Global"
          className="brand-logo-img"
          loading="eager"
        />
      </div>
    );
  }

  return (
    <div className={`brand-logo-component brand-dark size-${size} ${className}`.trim()}>
      {/* Geometric Brand Mark (Exact Vector Recreation with layered gradient) */}
      <span className="brand-mark-box" aria-hidden="true">
        <svg
          viewBox="0 0 38 40"
          className="brand-mark-svg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6BBDFF" />
              <stop offset="100%" stopColor="#0756D9" />
            </linearGradient>
            <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#1769F5" floodOpacity="0.3" />
            </filter>
          </defs>
          {/* Outer Triangle */}
          <polygon
            points="19,1 37,35 1,35"
            fill="url(#brandGrad)"
            filter="url(#logoGlow)"
          />
          {/* Inner Inverted Diamond / Cutout Star */}
          <polygon
            points="19,13 28,31 10,31"
            fill="#FFFFFF"
          />
          {/* Core Cyan/Blue Accent Star */}
          <polygon
            points="19,17 25,31 13,31"
            fill="#0E55D8"
          />
          <circle cx="19" cy="21" r="3" fill="#00E5FF" />
        </svg>
      </span>

      <span className="brand-text-wrap">
        <strong className="brand-title">WIZORA GLOBAL</strong>
        <small className="brand-tagline">Software &bull; Hardware &bull; Innovations</small>
      </span>
    </div>
  );
}
