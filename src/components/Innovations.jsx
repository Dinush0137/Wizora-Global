import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Image as ImageIcon } from 'lucide-react';
import { siteConfig } from '../data/site';
import { useReveal } from '../hooks/useReveal';
import SectionHeading from './common/SectionHeading';
import Button from './common/Button';
import WizoraSyncVisual from './common/WizoraSyncVisual';
import NexusGatewayVisual from './common/NexusGatewayVisual';
import wizoraSyncImg from '../assets/wizora-sync.png';
import nexusGatewayImg from '../assets/nexus-gateway.png';
import './Innovations.css';

export default function Innovations() {
  const revealRef = useReveal();
  const { innovations } = siteConfig;
  const [viewMode, setViewMode] = useState('vector'); // 'vector' or 'photo'

  return (
    <section className="section section-tint" id="innovations">
      <div className="container" ref={revealRef}>
        <div className="innovations-header-row">
          <SectionHeading
            eyebrow={innovations.eyebrow}
            title={innovations.title}
            titleAccent={innovations.titleAccent}
            description={innovations.subtext}
            className="reveal"
          />

          <div className="innovations-toggle-bar">
            <button
              type="button"
              className={`view-pill-sm ${viewMode === 'vector' ? 'active' : ''}`}
              onClick={() => setViewMode('vector')}
              aria-label="View Ultra-HD Product Models"
            >
              <Sparkles size={11} /> Ultra-HD Models
            </button>
            <button
              type="button"
              className={`view-pill-sm ${viewMode === 'photo' ? 'active' : ''}`}
              onClick={() => setViewMode('photo')}
              aria-label="View Concept Photos"
            >
              <ImageIcon size={11} /> Concept Photos
            </button>
          </div>
        </div>

        <div className="product-grid">
          {/* Product 1: WIZORA SYNC (SaaS) */}
          <article className="product-card reveal reveal-delay-1">
            <div className="product-content">
              <span className="product-pill">{innovations.products[0].badge}</span>
              <h3>{innovations.products[0].title}</h3>
              <p className="product-tagline">{innovations.products[0].tagline}</p>

              <ul className="product-features">
                {innovations.products[0].features.map((feat) => (
                  <li key={feat}>
                    <CheckCircle2 size={16} className="feature-check-icon" />
                    <strong>{feat}</strong>
                  </li>
                ))}
              </ul>

              <div className="product-action">
                <Button href={innovations.products[0].ctaHref} variant="primary" size="small">
                  {innovations.products[0].ctaText} <ArrowRight size={14} />
                </Button>
              </div>
            </div>

            <div className="product-visual-box">
              {viewMode === 'vector' ? (
                <WizoraSyncVisual />
              ) : (
                <img
                  src={wizoraSyncImg}
                  alt="Wizora Sync SaaS Platform Laptop and Mobile Dashboard Interface"
                  className="product-preview-img"
                />
              )}
            </div>
          </article>

          {/* Product 2: NEXUS GATEWAY (IoT Hub) */}
          <article className="product-card reveal reveal-delay-2">
            <div className="product-content">
              <span className="product-pill">{innovations.products[1].badge}</span>
              <h3>{innovations.products[1].title}</h3>
              <p className="product-tagline">{innovations.products[1].tagline}</p>

              <ul className="product-features">
                {innovations.products[1].features.map((feat) => (
                  <li key={feat}>
                    <CheckCircle2 size={16} className="feature-check-icon" />
                    <strong>{feat}</strong>
                  </li>
                ))}
              </ul>

              <div className="product-action">
                <Button href={innovations.products[1].ctaHref} variant="primary" size="small">
                  {innovations.products[1].ctaText} <ArrowRight size={14} />
                </Button>
              </div>
            </div>

            <div className="product-visual-box">
              {viewMode === 'vector' ? (
                <NexusGatewayVisual />
              ) : (
                <img
                  src={nexusGatewayImg}
                  alt="Nexus Gateway IoT Hub Industrial Controller Device"
                  className="product-preview-img gateway-img"
                />
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
