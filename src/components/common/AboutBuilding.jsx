import React from 'react';

export default function AboutBuilding() {
  return (
    <div className="about-building-vector-stage" role="img" aria-label="Wizora Global Modern Technology Headquarters Architecture">
      <svg
        viewBox="0 0 340 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="about-building-svg"
      >
        <defs>
          {/* Sky Gradient */}
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9E6FD" />
            <stop offset="50%" stopColor="#EBF6FF" />
            <stop offset="100%" stopColor="#B4DCFB" />
          </linearGradient>

          {/* Glass Facade Gradient */}
          <linearGradient id="glassFacade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1B3F6E" />
            <stop offset="35%" stopColor="#2E6499" />
            <stop offset="70%" stopColor="#4A88BE" />
            <stop offset="100%" stopColor="#244C78" />
          </linearGradient>

          {/* Signboard Gradient */}
          <linearGradient id="signGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B1E38" />
            <stop offset="100%" stopColor="#051428" />
          </linearGradient>

          {/* Logo Gradient on Sign */}
          <linearGradient id="logoSignGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          <filter id="signGlow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#052B60" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Sky Background */}
        <rect x="0" y="0" width="340" height="420" rx="12" fill="url(#skyGrad)" />

        {/* Architectural Glass Tower (Perspective Angle) */}
        <g transform="skewY(-6) translate(20, 40)">
          {/* Main Glass Facade */}
          <rect x="20" y="10" width="280" height="380" fill="url(#glassFacade)" stroke="#D8EEFD" strokeWidth="3" />

          {/* Vertical Architectural Mullions (Pillars) */}
          <g stroke="#90C5EC" strokeWidth="2" strokeOpacity="0.8">
            <line x1="60" y1="10" x2="60" y2="390" />
            <line x1="100" y1="10" x2="100" y2="390" />
            <line x1="140" y1="10" x2="140" y2="390" />
            <line x1="180" y1="10" x2="180" y2="390" />
            <line x1="220" y1="10" x2="220" y2="390" />
            <line x1="260" y1="10" x2="260" y2="390" />
          </g>

          {/* Horizontal Floor Window Dividers */}
          <g stroke="#DDF0FC" strokeWidth="1.5" strokeOpacity="0.6">
            <line x1="20" y1="50" x2="300" y2="50" />
            <line x1="20" y1="90" x2="300" y2="90" />
            <line x1="20" y1="130" x2="300" y2="130" />
            <line x1="20" y1="170" x2="300" y2="170" />
            <line x1="20" y1="210" x2="300" y2="210" />
            <line x1="20" y1="250" x2="300" y2="250" />
            <line x1="20" y1="290" x2="300" y2="290" />
            <line x1="20" y1="330" x2="300" y2="330" />
            <line x1="20" y1="370" x2="300" y2="370" />
          </g>

          {/* Glass Cloud Reflections */}
          <path d="M40 80 Q 90 60, 150 90 T 260 70 L 290 120 L 30 140 Z" fill="#FFFFFF" fillOpacity="0.12" />
          <path d="M50 200 Q 120 180, 200 220 L 280 250 L 30 270 Z" fill="#FFFFFF" fillOpacity="0.08" />

          {/* Backlit Corporate Signboard */}
          <g transform="translate(45, 110)" filter="url(#signGlow)">
            {/* Sign Panel Frame */}
            <rect x="0" y="0" width="230" height="95" rx="6" fill="url(#signGrad)" stroke="#38BDF8" strokeWidth="1.5" />
            
            {/* 3D Brand Logo Triangle */}
            <polygon points="115,16 132,45 98,45" fill="url(#logoSignGrad)" />
            <polygon points="115,26 126,43 104,43" fill="#FFFFFF" />
            <polygon points="115,29 123,43 107,43" fill="#0284C7" />
            <circle cx="115" cy="36" r="3" fill="#00E5FF" />

            {/* Corporate Name */}
            <text
              x="115"
              y="68"
              fill="#FFFFFF"
              fontFamily="'Manrope', sans-serif"
              fontSize="14"
              fontWeight="800"
              letterSpacing="0.08em"
              textAnchor="middle"
            >
              WIZORA GLOBAL
            </text>

            <text
              x="115"
              y="82"
              fill="#93C5FD"
              fontFamily="'DM Sans', sans-serif"
              fontSize="7"
              fontWeight="600"
              letterSpacing="0.15em"
              textAnchor="middle"
            >
              HEADQUARTERS &amp; INNOVATION LABS
            </text>
          </g>
        </g>

        {/* Ground Level Landscaping Foliage (Trees) */}
        <g transform="translate(0, 340)">
          <path d="M-10 80 Q 30 20, 80 50 Q 120 10, 170 45 Q 230 0, 290 40 Q 330 15, 360 80 Z" fill="#15803D" fillOpacity="0.95" />
          <path d="M10 80 Q 60 35, 110 60 Q 160 25, 220 55 Q 280 15, 340 60 Z" fill="#16A34A" fillOpacity="0.9" />
          <path d="M50 80 Q 100 45, 150 70 Q 200 40, 260 65 Q 310 35, 350 80 Z" fill="#22C55E" fillOpacity="0.85" />
        </g>
      </svg>
    </div>
  );
}
