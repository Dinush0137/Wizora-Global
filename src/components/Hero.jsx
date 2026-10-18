import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Lightbulb, Globe2, ShieldCheck, Sparkles, Image as ImageIcon } from 'lucide-react';
import { siteConfig } from '../data/site';
import { useReveal } from '../hooks/useReveal';
import Button from './common/Button';
import HeroGraphic from './common/HeroGraphic';
import heroTechImg from '../assets/hero-tech.png';
import './Hero.css';

export default function Hero() {
  const revealRef = useReveal();
  const { hero, contact } = siteConfig;
  const [viewMode, setViewMode] = useState('vector'); // 'vector' (ultra HD) or 'photo'

  return (
    <section className="hero-section section-tint" id="home">
      <div className="container hero-grid" ref={revealRef}>
        {/* Left Column: Copy & Actions */}
        <div className="hero-copy reveal">
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true"></span>
            <span>{hero.eyebrow}</span>
          </p>

          <h1>
            {hero.headline} <em>{hero.headlineAccent}</em>
          </h1>

          <p className="hero-intro">{hero.subtext}</p>

          <div className="hero-actions">
            <Button href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label} <ArrowRight size={18} />
            </Button>

            <Button
              href={contact.whatsappUrl}
              variant="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Chat with Wizora Global on WhatsApp"
            >
              <MessageCircle size={18} className="whatsapp-btn-icon" />
              {hero.secondaryCta.label}
            </Button>
          </div>

          <div className="trust-points">
            <div className="trust-item">
              <span className="trust-item-icon">
                <Lightbulb size={18} />
              </span>
              <span>{hero.trustPoints[0].label}</span>
            </div>
            <div className="trust-divider" aria-hidden="true"></div>
            <div className="trust-item">
              <span className="trust-item-icon">
                <Globe2 size={18} />
              </span>
              <span>{hero.trustPoints[1].label}</span>
            </div>
            <div className="trust-divider" aria-hidden="true"></div>
            <div className="trust-item">
              <span className="trust-item-icon">
                <ShieldCheck size={18} />
              </span>
              <span>{hero.trustPoints[2].label}</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Tech Composition Visual */}
        <div className="hero-visual-column reveal reveal-delay-2" aria-label="Illustration of software and hardware technology">
          {/* Subtle View Switcher Toggle */}
          <div className="hero-view-mode-bar">
            <button
              type="button"
              className={`view-pill ${viewMode === 'vector' ? 'active' : ''}`}
              onClick={() => setViewMode('vector')}
              aria-label="View Ultra-HD Vector Studio Art"
            >
              <Sparkles size={13} /> Ultra-HD Vector
            </button>
            <button
              type="button"
              className={`view-pill ${viewMode === 'photo' ? 'active' : ''}`}
              onClick={() => setViewMode('photo')}
              aria-label="View Original Concept Image"
            >
              <ImageIcon size={13} /> Concept Photo
            </button>
          </div>

          <div className="hero-visual-wrapper">
            {viewMode === 'vector' ? (
              <HeroGraphic />
            ) : (
              <div className="photo-view-box">
                <div className="hero-art-glow" aria-hidden="true"></div>
                <img
                  src={heroTechImg}
                  alt="Wizora Global Software, IoT Hardware, and Cloud Architecture"
                  className="hero-tech-image"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
