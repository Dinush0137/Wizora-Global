import React, { useState } from 'react';
import { siteConfig } from '../../data/site';
import worldMapImg from '../../assets/world-map-network.png';

export default function WorldMap() {
  const { mapLocations } = siteConfig.clientsNetwork;
  const [activePin, setActivePin] = useState(null);
  const [viewMode, setViewMode] = useState('vector'); // 'vector' or 'graphic'

  return (
    <div className="map-card-wrapper" role="region" aria-label="Global Client Locations Map">
      <div className="map-header-bar">
        <div className="map-title-info">
          <strong>Global Client Footprint</strong>
          <span className="map-live-tag">
            <span className="live-dot"></span> Active Nodes
          </span>
        </div>
        <div className="map-view-toggle">
          <button
            type="button"
            className={`toggle-pill ${viewMode === 'vector' ? 'active' : ''}`}
            onClick={() => setViewMode('vector')}
          >
            Interactive
          </button>
          <button
            type="button"
            className={`toggle-pill ${viewMode === 'graphic' ? 'active' : ''}`}
            onClick={() => setViewMode('graphic')}
          >
            HD Map
          </button>
        </div>
      </div>

      {viewMode === 'graphic' ? (
        <div className="map-graphic-view">
          <img
            src={worldMapImg}
            alt="World map showing Wizora Global client locations across USA, Europe, Middle East, Asia, and Australia"
            className="world-map-hd-img"
          />
        </div>
      ) : (
        <div className="map-svg-container">
          <svg
            className="world-map-svg"
            viewBox="0 0 720 350"
            role="img"
            aria-label="Stylized world map with Wizora Global client locations across USA, Europe, Middle East, Asia, and Australia"
          >
            <defs>
              <filter id="markerShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#052B60" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* Continents Vector Geometry */}
            <g className="map-continents">
              {/* North America */}
              <path d="M60 76 L91 46 139 38 167 56 205 53 225 75 211 94 185 102 177 123 153 133 144 158 121 166 104 147 83 140 73 117 48 106Z" />
              {/* South America */}
              <path d="M163 171 L194 179 214 207 208 234 190 264 181 300 165 316 151 284 156 253 142 224 145 198Z" />
              {/* Europe */}
              <path d="M302 74 L330 54 361 61 379 75 399 70 422 85 410 103 384 105 374 122 349 127 341 151 320 147 305 122 285 113 278 91Z" />
              {/* Africa */}
              <path d="M333 151 L359 145 386 159 395 186 382 215 365 236 348 216 344 193 329 177Z" />
              {/* Asia */}
              <path d="M391 78 L430 54 483 45 533 57 576 77 620 79 648 101 626 122 590 124 568 145 535 136 516 158 491 152 470 129 438 131 420 112 398 109Z" />
              {/* Southeast Asia */}
              <path d="M530 201 L558 192 583 206 592 225 577 245 552 238 535 222Z" />
              {/* Australia */}
              <path d="M565 242 L600 230 L635 245 L648 275 L630 290 L590 292 L570 268 Z" />
              {/* New Zealand */}
              <path d="M655 285 L665 280 L660 300 Z" />
            </g>

            {/* Map Markers */}
            <g className="map-markers-group">
              {mapLocations.map((loc) => {
                const isHovered = activePin === loc.name;
                return (
                  <g
                    key={loc.name}
                    transform={`translate(${loc.x} ${loc.y})`}
                    className={`map-pin ${isHovered ? 'is-active' : ''}`}
                    onMouseEnter={() => setActivePin(loc.name)}
                    onMouseLeave={() => setActivePin(null)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Client Location: ${loc.name}`}
                  >
                    {/* Pulsing Ring */}
                    <circle r="10" className="pulse-ring" />
                    {/* Pin Core */}
                    <circle r="5" className="pin-core" filter="url(#markerShadow)" />
                    {/* Location Name Label */}
                    <text
                      x={loc.labelX}
                      y={loc.labelY}
                      textAnchor={loc.anchor || 'start'}
                      className="pin-label"
                    >
                      {loc.name}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
      )}

      <div className="map-caption-bar">
        <span className="map-live-dot" aria-hidden="true"></span>
        <span>Client connections across North America, Europe, Middle East, Asia, &amp; Australia</span>
      </div>
    </div>
  );
}
