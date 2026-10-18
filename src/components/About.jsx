import React, { useState } from 'react';
import { Target, Eye, Award, Sparkles, Image as ImageIcon } from 'lucide-react';
import { siteConfig } from '../data/site';
import { useReveal } from '../hooks/useReveal';
import AboutBuilding from './common/AboutBuilding';
import aboutBuildingImg from '../assets/about-building.png';
import './About.css';

export default function About() {
  const revealRef = useReveal();
  const { about } = siteConfig;
  const [viewMode, setViewMode] = useState('vector'); // 'vector' or 'photo'

  return (
    <section className="section about-section" id="about">
      <div className="container about-grid" ref={revealRef}>
        {/* Column 1: Copy & Stats */}
        <div className="about-copy reveal">
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true"></span>
            <span>{about.eyebrow}</span>
          </p>

          <h2>
            {about.title} <br />
            <em>{about.titleAccent}</em>
          </h2>

          <p className="about-description">{about.description}</p>

          <div className="stats-row">
            {about.stats.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <strong className="stat-number">{stat.value}</strong>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Modern Headquarters Building */}
        <div className="about-building-wrapper reveal reveal-delay-2">
          <div className="building-toggle-bar">
            <button
              type="button"
              className={`view-pill-sm ${viewMode === 'vector' ? 'active' : ''}`}
              onClick={() => setViewMode('vector')}
              aria-label="View Ultra-HD Architectural Art"
            >
              <Sparkles size={11} /> Ultra-HD
            </button>
            <button
              type="button"
              className={`view-pill-sm ${viewMode === 'photo' ? 'active' : ''}`}
              onClick={() => setViewMode('photo')}
              aria-label="View Concept Photo"
            >
              <ImageIcon size={11} /> Photo
            </button>
          </div>

          <div className="about-building-card" role="img" aria-label="Wizora Global Technology Headquarters">
            {viewMode === 'vector' ? (
              <AboutBuilding />
            ) : (
              <img
                src={aboutBuildingImg}
                alt="Wizora Global headquarters modern glass architecture"
                className="about-building-img"
              />
            )}
          </div>
        </div>

        {/* Column 3: Values, Mission, Vision Cards */}
        <div className="values-card-container reveal reveal-delay-3">
          {/* Mission */}
          <article className="value-block">
            <div className="value-icon-box" aria-hidden="true">
              <Target size={22} />
            </div>
            <div className="value-content">
              <h3>{about.mission.title}</h3>
              <p>{about.mission.description}</p>
            </div>
          </article>

          {/* Vision */}
          <article className="value-block">
            <div className="value-icon-box" aria-hidden="true">
              <Eye size={22} />
            </div>
            <div className="value-content">
              <h3>{about.vision.title}</h3>
              <p>{about.vision.description}</p>
            </div>
          </article>

          {/* Core Values */}
          <article className="value-block">
            <div className="value-icon-box" aria-hidden="true">
              <Award size={22} />
            </div>
            <div className="value-content">
              <h3>Our Core Values</h3>
              <ul className="core-values-list">
                {about.coreValues.map((val) => (
                  <li key={val}>
                    <span className="value-bullet">&bull;</span>
                    <strong>{val}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
