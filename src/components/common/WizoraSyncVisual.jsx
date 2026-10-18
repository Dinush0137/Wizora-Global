import React from 'react';

export default function WizoraSyncVisual() {
  return (
    <div className="product-visual-vector-stage" role="img" aria-label="Wizora Sync SaaS Enterprise Dashboard on Laptop and Smartphone">
      <svg
        viewBox="0 0 420 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="product-vector-svg"
      >
        <defs>
          <filter id="saasShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#052B60" floodOpacity="0.12" />
          </filter>
          <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
          <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1769F5" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1769F5" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>

        {/* Laptop Group */}
        <g transform="translate(15, 20)" filter="url(#saasShadow)">
          {/* Laptop Screen Bezel */}
          <rect x="20" y="0" width="280" height="180" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="2" />
          <circle cx="160" cy="5" r="2" fill="#64748B" />

          {/* Screen Content Area */}
          <rect x="26" y="12" width="268" height="162" rx="3" fill="#F8FAFC" />

          {/* Dashboard Left Sidebar */}
          <rect x="26" y="12" width="48" height="162" rx="0" fill="#0F1D38" />
          {/* Logo mark in sidebar */}
          <polygon points="50,22 58,34 42,34" fill="#1769F5" />
          <circle cx="50" cy="30" r="1.5" fill="#00E5FF" />
          {/* Nav Items in Sidebar */}
          <rect x="32" y="44" width="36" height="10" rx="2" fill="#1E293B" />
          <rect x="36" y="48" width="6" height="3" fill="#00E5FF" />
          <rect x="32" y="58" width="36" height="10" rx="2" fill="transparent" />
          <rect x="36" y="62" width="6" height="3" fill="#64748B" />
          <rect x="32" y="72" width="36" height="10" rx="2" fill="transparent" />
          <rect x="36" y="76" width="6" height="3" fill="#64748B" />
          <rect x="32" y="86" width="36" height="10" rx="2" fill="transparent" />
          <rect x="36" y="90" width="6" height="3" fill="#64748B" />

          {/* Main Dashboard Area */}
          <g transform="translate(80, 18)">
            {/* Top Bar */}
            <text x="0" y="10" fill="#0F172A" fontSize="9" fontFamily="'Manrope', sans-serif" fontWeight="800">WIZORA SYNC OS</text>
            <rect x="150" y="2" width="46" height="11" rx="5" fill="#DCFCE7" />
            <text x="173" y="10" fill="#15803D" fontSize="6.5" fontFamily="sans-serif" fontWeight="700" textAnchor="middle">● LIVE ACTIVE</text>

            {/* Stat Cards Row */}
            <g transform="translate(0, 18)">
              {/* Card 1 */}
              <rect x="0" y="0" width="65" height="34" rx="4" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
              <text x="6" y="10" fill="#64748B" fontSize="6" fontFamily="sans-serif" fontWeight="600">Team Collaboration</text>
              <text x="6" y="24" fill="#052B60" fontSize="11" fontFamily="'Manrope', sans-serif" fontWeight="800">98.4%</text>
              <rect x="6" y="28" width="53" height="2" rx="1" fill="#E2E8F0" />
              <rect x="6" y="28" width="48" height="2" rx="1" fill="#10B981" />

              {/* Card 2 */}
              <rect x="70" y="0" width="65" height="34" rx="4" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
              <text x="76" y="10" fill="#64748B" fontSize="6" fontFamily="sans-serif" fontWeight="600">Resource Load</text>
              <text x="76" y="24" fill="#052B60" fontSize="11" fontFamily="'Manrope', sans-serif" fontWeight="800">Optimal</text>
              <rect x="76" y="28" width="53" height="2" rx="1" fill="#E2E8F0" />
              <rect x="76" y="28" width="38" height="2" rx="1" fill="#1769F5" />

              {/* Card 3 */}
              <rect x="140" y="0" width="65" height="34" rx="4" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
              <text x="146" y="10" fill="#64748B" fontSize="6" fontFamily="sans-serif" fontWeight="600">Throughput</text>
              <text x="146" y="24" fill="#052B60" fontSize="11" fontFamily="'Manrope', sans-serif" fontWeight="800">1.2 GB/s</text>
              <rect x="146" y="28" width="53" height="2" rx="1" fill="#E2E8F0" />
              <rect x="146" y="28" width="50" height="2" rx="1" fill="#8B5CF6" />
            </g>

            {/* Analytics Chart Panel */}
            <g transform="translate(0, 60)">
              <rect x="0" y="0" width="205" height="85" rx="4" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
              <text x="8" y="12" fill="#0F172A" fontSize="7" fontFamily="'Manrope', sans-serif" fontWeight="700">Real-Time Data Analytics &amp; Workflow</text>
              
              {/* Chart Grid Lines */}
              <line x1="8" y1="26" x2="197" y2="26" stroke="#F1F5F9" strokeWidth="1" />
              <line x1="8" y1="44" x2="197" y2="44" stroke="#F1F5F9" strokeWidth="1" />
              <line x1="8" y1="62" x2="197" y2="62" stroke="#F1F5F9" strokeWidth="1" />

              {/* Area Chart Gradient Path */}
              <path
                d="M10 65 Q 40 40, 70 48 T 130 30 T 170 38 T 195 20 L 195 72 L 10 72 Z"
                fill="url(#chartGrad)"
              />
              <path
                d="M10 65 Q 40 40, 70 48 T 130 30 T 170 38 T 195 20"
                fill="none"
                stroke="#1769F5"
                strokeWidth="2"
              />
              {/* Data points */}
              <circle cx="70" cy="48" r="3" fill="#FFFFFF" stroke="#1769F5" strokeWidth="1.5" />
              <circle cx="130" cy="30" r="3" fill="#FFFFFF" stroke="#1769F5" strokeWidth="1.5" />
              <circle cx="195" cy="20" r="3" fill="#1769F5" stroke="#FFFFFF" strokeWidth="1.5" />
            </g>
          </g>

          {/* Laptop Keyboard Deck Base */}
          <path d="M0 180 L320 180 L300 198 L20 198 Z" fill="url(#laptopGrad)" stroke="#94A3B8" strokeWidth="1" />
          <rect x="130" y="182" width="60" height="4" rx="2" fill="#64748B" />
        </g>

        {/* Smartphone Group (Standing Right) */}
        <g transform="translate(305, 50)" filter="url(#saasShadow)">
          {/* Phone Body Frame */}
          <rect x="0" y="0" width="85" height="165" rx="14" fill="url(#phoneGrad)" stroke="#334155" strokeWidth="2.5" />
          {/* Phone Screen Display */}
          <rect x="4" y="6" width="77" height="153" rx="10" fill="#FFFFFF" />

          {/* Phone Dynamic Island */}
          <rect x="30" y="8" width="25" height="5" rx="2.5" fill="#0F172A" />

          {/* Mobile Screen UI */}
          <text x="10" y="24" fill="#052B60" fontSize="7" fontFamily="'Manrope', sans-serif" fontWeight="800">SYNC MOBILE</text>
          
          {/* Mobile Stat Card 1 */}
          <rect x="8" y="30" width="69" height="34" rx="4" fill="#F0F7FF" stroke="#D0E3F9" strokeWidth="0.8" />
          <text x="14" y="42" fill="#1769F5" fontSize="6" fontWeight="700">Enterprise Sync</text>
          <text x="14" y="54" fill="#052B60" fontSize="10" fontWeight="800">100%</text>

          {/* Mobile Card 2 */}
          <rect x="8" y="70" width="69" height="34" rx="4" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.8" />
          <text x="14" y="82" fill="#64748B" fontSize="6" fontWeight="600">Active Nodes</text>
          <text x="14" y="94" fill="#10B981" fontSize="9" fontWeight="800">54/54 Connected</text>

          {/* Mini Mobile Chart */}
          <rect x="8" y="110" width="69" height="38" rx="4" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.8" />
          <path d="M12 138 L25 130 L40 134 L55 124 L72 120" stroke="#1769F5" strokeWidth="1.5" fill="none" />
          <circle cx="72" cy="120" r="2" fill="#1769F5" />
        </g>
      </svg>
    </div>
  );
}
