import React from 'react';

export default function NexusGatewayVisual() {
  return (
    <div className="product-visual-vector-stage" role="img" aria-label="Nexus Gateway IoT Hub Industrial Controller Device">
      <svg
        viewBox="0 0 380 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="product-vector-svg"
      >
        <defs>
          <filter id="gatewayShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="16" stdDeviation="16" floodColor="#052B60" floodOpacity="0.14" />
          </filter>
          <filter id="ledGlowGreen" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#10B981" floodOpacity="0.8" />
          </filter>
          <filter id="ledGlowCyan" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#00E5FF" floodOpacity="0.8" />
          </filter>
          <linearGradient id="chassisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F1F5F9" />
            <stop offset="45%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>
          <linearGradient id="topCoverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
        </defs>

        {/* Ambient Signal Wave Rings */}
        <g stroke="#93C5FD" strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.6">
          <ellipse cx="280" cy="50" rx="30" ry="20" />
          <ellipse cx="280" cy="50" rx="55" ry="35" />
          <ellipse cx="120" cy="50" rx="30" ry="20" />
          <ellipse cx="120" cy="50" rx="55" ry="35" />
        </g>

        {/* Main Gateway Router Unit */}
        <g transform="translate(45, 55)" filter="url(#gatewayShadow)">
          {/* Antennas */}
          {/* Left Antenna */}
          <g>
            <rect x="70" y="5" width="8" height="60" rx="4" fill="#1E293B" stroke="#475569" strokeWidth="1" />
            <circle cx="74" cy="65" r="7" fill="#0F172A" stroke="#64748B" strokeWidth="1.5" />
            <circle cx="74" cy="65" r="2.5" fill="#CBD5E1" />
          </g>
          {/* Right Antenna */}
          <g>
            <rect x="210" y="5" width="8" height="60" rx="4" fill="#1E293B" stroke="#475569" strokeWidth="1" />
            <circle cx="214" cy="65" r="7" fill="#0F172A" stroke="#64748B" strokeWidth="1.5" />
            <circle cx="214" cy="65" r="2.5" fill="#CBD5E1" />
          </g>

          {/* Top Metal Lid (Chassis Surface) */}
          <polygon points="40,65 250,65 270,95 20,95" fill="url(#topCoverGrad)" stroke="#94A3B8" strokeWidth="1" />
          {/* Heat Dissipation Grooves on Top */}
          <line x1="55" y1="75" x2="235" y2="75" stroke="#64748B" strokeWidth="1" />
          <line x1="50" y1="82" x2="240" y2="82" stroke="#64748B" strokeWidth="1" />
          <line x1="45" y1="89" x2="245" y2="89" stroke="#64748B" strokeWidth="1" />

          {/* Laser-Engraved Top Logo */}
          <polygon points="145,71 151,80 139,80" fill="#475569" />
          <text x="156" y="79" fill="#334155" fontSize="7" fontFamily="'Manrope', sans-serif" fontWeight="800">WIZORA NEXUS</text>

          {/* Main Front Body Enclosure */}
          <rect x="20" y="95" width="250" height="75" rx="6" fill="url(#chassisGrad)" stroke="#64748B" strokeWidth="1.5" />

          {/* Front Bezel Recessed Black Panel */}
          <rect x="28" y="103" width="234" height="58" rx="4" fill="#0B132B" stroke="#1E293B" strokeWidth="1" />

          {/* Left Side: Industrial RJ-45 Gigabit Ethernet Ports */}
          <g transform="translate(40, 114)">
            {/* LAN 1 */}
            <rect x="0" y="0" width="30" height="26" rx="3" fill="#1E293B" stroke="#475569" strokeWidth="1" />
            <rect x="5" y="5" width="20" height="16" fill="#020617" />
            {/* Internal copper pins */}
            <line x1="9" y1="7" x2="9" y2="12" stroke="#F59E0B" strokeWidth="1" />
            <line x1="12" y1="7" x2="12" y2="12" stroke="#F59E0B" strokeWidth="1" />
            <line x1="15" y1="7" x2="15" y2="12" stroke="#F59E0B" strokeWidth="1" />
            <line x1="18" y1="7" x2="18" y2="12" stroke="#F59E0B" strokeWidth="1" />
            {/* LEDs above port */}
            <circle cx="6" cy="-4" r="2" fill="#10B981" filter="url(#ledGlowGreen)" />
            <circle cx="24" cy="-4" r="2" fill="#F59E0B" />
            <text x="15" y="34" fill="#64748B" fontSize="5.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">ETH 1</text>

            {/* LAN 2 (PoE+) */}
            <rect x="38" y="0" width="30" height="26" rx="3" fill="#1E293B" stroke="#475569" strokeWidth="1" />
            <rect x="43" y="5" width="20" height="16" fill="#020617" />
            <line x1="47" y1="7" x2="47" y2="12" stroke="#F59E0B" strokeWidth="1" />
            <line x1="50" y1="7" x2="50" y2="12" stroke="#F59E0B" strokeWidth="1" />
            <line x1="53" y1="7" x2="53" y2="12" stroke="#F59E0B" strokeWidth="1" />
            <line x1="56" y1="7" x2="56" y2="12" stroke="#F59E0B" strokeWidth="1" />
            <circle cx="44" cy="-4" r="2" fill="#10B981" filter="url(#ledGlowGreen)" />
            <circle cx="62" cy="-4" r="2" fill="#F59E0B" />
            <text x="53" y="34" fill="#64748B" fontSize="5.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">ETH 2 (PoE)</text>

            {/* Industrial RS-485 Terminal Block */}
            <rect x="76" y="0" width="36" height="26" rx="2" fill="#10B981" stroke="#059669" strokeWidth="1" />
            <rect x="80" y="4" width="28" height="18" fill="#064E3B" />
            <circle cx="85" cy="13" r="2" fill="#F59E0B" />
            <circle cx="94" cy="13" r="2" fill="#F59E0B" />
            <circle cx="103" cy="13" r="2" fill="#F59E0B" />
            <text x="94" y="34" fill="#64748B" fontSize="5.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">RS-485</text>
          </g>

          {/* Right Side: LED Diagnostic Bank */}
          <g transform="translate(175, 114)">
            {/* LED row */}
            <g>
              <circle cx="10" cy="4" r="3" fill="#10B981" filter="url(#ledGlowGreen)" />
              <text x="20" y="7" fill="#CBD5E1" fontSize="6.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">PWR</text>
            </g>
            <g transform="translate(0, 12)">
              <circle cx="10" cy="4" r="3" fill="#00E5FF" filter="url(#ledGlowCyan)" />
              <text x="20" y="7" fill="#CBD5E1" fontSize="6.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">CLOUD</text>
            </g>
            <g transform="translate(0, 24)">
              <circle cx="10" cy="4" r="3" fill="#3B82F6" />
              <text x="20" y="7" fill="#CBD5E1" fontSize="6.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">EDGE</text>
            </g>
            <g transform="translate(48, 4)">
              <circle cx="10" cy="4" r="3" fill="#10B981" filter="url(#ledGlowGreen)" />
              <text x="20" y="7" fill="#CBD5E1" fontSize="6.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">5G / LTE</text>
            </g>
            <g transform="translate(48, 16)">
              <circle cx="10" cy="4" r="3" fill="#F59E0B" />
              <text x="20" y="7" fill="#CBD5E1" fontSize="6.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">SYS</text>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
