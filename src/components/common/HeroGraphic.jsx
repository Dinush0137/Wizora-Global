import React from 'react';
import './HeroGraphic.css';

export default function HeroGraphic() {
  return (
    <div className="hero-graphic-vector-stage" role="img" aria-label="Wizora Global Software, IoT Hardware, and Cloud Architecture">
      <svg
        className="hero-graphic-svg"
        viewBox="0 0 680 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Ambient Radial Glow */}
          <radialGradient id="heroArtGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1769F5" stopOpacity="0.14" />
            <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>

          {/* Laptop Metal Gradient */}
          <linearGradient id="laptopChassis" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          {/* Screen Bezel */}
          <linearGradient id="screenBezel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#0A111E" />
          </linearGradient>

          {/* PCB Board Gradient */}
          <linearGradient id="pcbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F4A38" />
            <stop offset="50%" stopColor="#0B382A" />
            <stop offset="100%" stopColor="#06241B" />
          </linearGradient>

          {/* Router Metal */}
          <linearGradient id="routerChassis" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="40%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          {/* Drop Shadows */}
          <filter id="vectorDropShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="16" stdDeviation="16" floodColor="#052B60" floodOpacity="0.16" />
          </filter>
          <filter id="chipGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#00E5FF" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* Ambient Glow */}
        <circle cx="340" cy="230" r="230" fill="url(#heroArtGlow)" />

        {/* Orbital Network Rings */}
        <ellipse cx="340" cy="240" rx="300" ry="140" stroke="#CBDFF5" strokeWidth="1.5" strokeDasharray="6 6" className="orbit-rotate-1" />
        <ellipse cx="340" cy="240" rx="240" ry="180" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="4 8" transform="rotate(-18 340 240)" className="orbit-rotate-2" />

        {/* Connection Network Particles */}
        <g className="network-particles">
          <circle cx="90" cy="190" r="5" fill="#1769F5" filter="url(#chipGlow)" />
          <circle cx="580" cy="160" r="5" fill="#00E5FF" filter="url(#chipGlow)" />
          <circle cx="340" cy="50" r="6" fill="#10A968" filter="url(#chipGlow)" />
          <circle cx="210" cy="380" r="4.5" fill="#1769F5" />
          <circle cx="510" cy="390" r="5" fill="#1769F5" />
          <line x1="90" y1="190" x2="180" y2="180" stroke="#93C5FD" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="340" y1="80" x2="340" y2="120" stroke="#93C5FD" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="580" y1="160" x2="520" y2="220" stroke="#93C5FD" strokeWidth="1" strokeDasharray="3 3" />
        </g>

        {/* ======================================================== */}
        {/* 1. CLOUD ARCHITECTURE ICON (Floating Top) */}
        {/* ======================================================== */}
        <g transform="translate(305, 35)" className="floating-cloud-node">
          <rect x="-10" y="-8" width="90" height="48" rx="24" fill="#FFFFFF" filter="url(#vectorDropShadow)" />
          <path
            d="M18 28h32a12 12 0 0 0 0-24 16 16 0 0 0-30-2 10 10 0 0 0-2 26z"
            fill="#1769F5"
          />
          {/* Signal wave arcs */}
          <path d="M4 14 A18 18 0 0 0 4 24" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M64 14 A18 18 0 0 1 64 24" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" fill="none" />
        </g>

        {/* ======================================================== */}
        {/* 2. DEVELOPER LAPTOP (Left Side) */}
        {/* ======================================================== */}
        <g transform="translate(45, 110)" filter="url(#vectorDropShadow)" className="laptop-interactive-group">
          {/* Screen Outer Frame */}
          <rect x="25" y="0" width="280" height="185" rx="10" fill="url(#screenBezel)" stroke="#334155" strokeWidth="2" />
          {/* Camera Dot */}
          <circle cx="165" cy="6" r="2" fill="#475569" />

          {/* Screen Glass Display (IDE Code Editor) */}
          <rect x="33" y="14" width="264" height="163" rx="4" fill="#0B132B" />

          {/* IDE Window Titlebar */}
          <rect x="33" y="14" width="264" height="20" rx="4" fill="#141E38" />
          <circle cx="45" cy="24" r="3.5" fill="#EF4444" />
          <circle cx="56" cy="24" r="3.5" fill="#F59E0B" />
          <circle cx="67" cy="24" r="3.5" fill="#10B981" />
          
          {/* File Tabs */}
          <rect x="80" y="18" width="65" height="16" rx="3" fill="#1E293B" />
          <text x="86" y="29" fill="#93C5FD" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="600">WizoraApp.tsx</text>
          <text x="156" y="29" fill="#64748B" fontSize="8" fontFamily="'JetBrains Mono', monospace">gateway.c</text>

          {/* Line Numbers */}
          <g fill="#475569" fontSize="7.5" fontFamily="'JetBrains Mono', monospace" textAnchor="end">
            <text x="47" y="47">1</text>
            <text x="47" y="58">2</text>
            <text x="47" y="69">3</text>
            <text x="47" y="80">4</text>
            <text x="47" y="91">5</text>
            <text x="47" y="102">6</text>
            <text x="47" y="113">7</text>
            <text x="47" y="124">8</text>
            <text x="47" y="135">9</text>
          </g>

          {/* Syntax Highlighted Code Lines */}
          <g fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="500">
            {/* Line 1 */}
            <text x="56" y="47"><tspan fill="#F43F5E">import</tspan> <tspan fill="#38BDF8">{'{'} NexusGateway {'}'}</tspan> <tspan fill="#F43F5E">from</tspan> <tspan fill="#34D399">'@wizora/iot'</tspan>;</text>
            {/* Line 2 */}
            <text x="56" y="58"><tspan fill="#F43F5E">import</tspan> <tspan fill="#38BDF8">{'{'} CloudSync {'}'}</tspan> <tspan fill="#F43F5E">from</tspan> <tspan fill="#34D399">'@wizora/cloud'</tspan>;</text>
            {/* Line 3 */}
            <text x="56" y="69"><tspan fill="#64748B">// Initialize Hardware &amp; Cloud Mesh</tspan></text>
            {/* Line 4 */}
            <text x="56" y="80"><tspan fill="#818CF8">const</tspan> <tspan fill="#FBBF24">system</tspan> = <tspan fill="#818CF8">new</tspan> <tspan fill="#38BDF8">NexusGateway</tspan>({'{'}</text>
            {/* Line 5 */}
            <text x="68" y="91"><tspan fill="#94A3B8">latency:</tspan> <tspan fill="#FBBF24">&lt;1ms</tspan>, <tspan fill="#94A3B8">security:</tspan> <tspan fill="#34D399">'AES-256'</tspan>,</text>
            {/* Line 6 */}
            <text x="68" y="102"><tspan fill="#94A3B8">cluster:</tspan> <tspan fill="#34D399">'Global-Edge'</tspan>,</text>
            {/* Line 7 */}
            <text x="56" y="113">{'}'});</text>
            {/* Line 8 */}
            <text x="56" y="124"><tspan fill="#FBBF24">system</tspan>.<tspan fill="#38BDF8">connectLiveTelemetry</tspan>();</text>
          </g>

          {/* Terminal Console Strip */}
          <rect x="33" y="146" width="264" height="31" fill="#070C18" />
          <circle cx="43" cy="158" r="3" fill="#10B981" />
          <text x="52" y="161" fill="#34D399" fontSize="7.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">✓ TELEMETRY ONLINE: 100% Signal Integrity</text>
          <text x="52" y="171" fill="#60A5FA" fontSize="7" fontFamily="'JetBrains Mono', monospace">Connected to Wizora Global Edge Cloud</text>

          {/* Laptop Base (Keyboard Deck) */}
          <path d="M0 185 L330 185 L310 206 L20 206 Z" fill="url(#laptopChassis)" stroke="#94A3B8" strokeWidth="1" />
          <rect x="130" y="187" width="70" height="4" rx="2" fill="#64748B" />
          <rect x="125" y="195" width="80" height="9" rx="2" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
          {/* Base bottom lip */}
          <path d="M15 206 L315 206 L305 212 L25 212 Z" fill="#64748B" />
        </g>

        {/* ======================================================== */}
        {/* 3. EMBEDDED IOT HARDWARE PCB (Bottom Center) */}
        {/* ======================================================== */}
        <g transform="translate(230, 240)" filter="url(#vectorDropShadow)" className="pcb-interactive-group">
          {/* PCB Substrate */}
          <rect x="0" y="0" width="175" height="120" rx="8" fill="url(#pcbGrad)" stroke="#10B981" strokeWidth="1.5" />
          
          {/* Gold Mounting Holes */}
          <circle cx="10" cy="10" r="5" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
          <circle cx="10" cy="10" r="2.5" fill="#0B132B" />
          <circle cx="165" cy="10" r="5" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
          <circle cx="165" cy="10" r="2.5" fill="#0B132B" />
          <circle cx="10" cy="110" r="5" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
          <circle cx="10" cy="110" r="2.5" fill="#0B132B" />
          <circle cx="165" cy="110" r="5" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
          <circle cx="165" cy="110" r="2.5" fill="#0B132B" />

          {/* Copper / Golden Circuit Traces */}
          <g stroke="#F59E0B" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.75" fill="none">
            <path d="M25 25 H55 V45 H70" />
            <path d="M25 40 H45 V55 H70" />
            <path d="M25 80 H60 V75 H70" />
            <path d="M25 95 H70" />
            <path d="M110 45 H125 V25 H150" />
            <path d="M110 55 H135 V35 H150" />
            <path d="M110 75 H130 V90 H150" />
            <path d="M110 85 H150" />
            <path d="M85 20 V38" />
            <path d="M95 20 V38" />
            <path d="M85 82 V100" />
            <path d="M95 82 V100" />
          </g>

          {/* Main Microcontroller Chip (WIZORA MCU) */}
          <rect x="70" y="38" width="40" height="44" rx="4" fill="#0F172A" stroke="#CBD5E1" strokeWidth="1.5" />
          {/* IC Chip Pins */}
          <g fill="#CBD5E1">
            <rect x="65" y="44" width="5" height="2" rx="0.5" />
            <rect x="65" y="50" width="5" height="2" rx="0.5" />
            <rect x="65" y="56" width="5" height="2" rx="0.5" />
            <rect x="65" y="62" width="5" height="2" rx="0.5" />
            <rect x="65" y="68" width="5" height="2" rx="0.5" />
            <rect x="110" y="44" width="5" height="2" rx="0.5" />
            <rect x="110" y="50" width="5" height="2" rx="0.5" />
            <rect x="110" y="56" width="5" height="2" rx="0.5" />
            <rect x="110" y="62" width="5" height="2" rx="0.5" />
            <rect x="110" y="68" width="5" height="2" rx="0.5" />
          </g>
          <text x="90" y="56" fill="#00E5FF" fontSize="6.5" fontFamily="'Manrope', sans-serif" fontWeight="800" textAnchor="middle">WIZORA</text>
          <text x="90" y="65" fill="#94A3B8" fontSize="5.5" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">CORTEX-M7</text>
          <circle cx="75" cy="44" r="1.5" fill="#F59E0B" />

          {/* Quartz Crystal Resonator */}
          <rect x="42" y="62" width="16" height="8" rx="2" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="0.8" />
          <text x="50" y="68" fill="#475569" fontSize="4.5" fontFamily="monospace" textAnchor="middle">16.0MHz</text>

          {/* LED Status Array on Board */}
          <circle cx="140" cy="20" r="3" fill="#10B981" filter="url(#chipGlow)" />
          <circle cx="150" cy="20" r="3" fill="#00E5FF" filter="url(#chipGlow)" />
          <circle cx="140" cy="100" r="2.5" fill="#3B82F6" />
          <circle cx="150" cy="100" r="2.5" fill="#F59E0B" />
        </g>

        {/* ======================================================== */}
        {/* 4. INDUSTRIAL IOT GATEWAY ROUTER (Right Side) */}
        {/* ======================================================== */}
        <g transform="translate(435, 140)" filter="url(#vectorDropShadow)" className="router-interactive-group">
          {/* Antennas */}
          <g stroke="#334155" strokeWidth="6" strokeLinecap="round">
            <line x1="45" y1="50" x2="45" y2="0" />
            <line x1="150" y1="50" x2="150" y2="0" />
          </g>
          {/* Antenna Hinges */}
          <circle cx="45" cy="50" r="6" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
          <circle cx="150" cy="50" r="6" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />

          {/* Main Metal Chassis */}
          <rect x="15" y="48" width="165" height="96" rx="6" fill="url(#routerChassis)" stroke="#94A3B8" strokeWidth="1.5" />

          {/* Ventilation Grille Slots */}
          <g fill="#475569">
            <rect x="30" y="58" width="135" height="2" rx="1" />
            <rect x="30" y="63" width="135" height="2" rx="1" />
            <rect x="30" y="68" width="135" height="2" rx="1" />
          </g>

          {/* Front Bezel Panel */}
          <rect x="22" y="78" width="151" height="58" rx="4" fill="#0F172A" stroke="#334155" strokeWidth="1" />

          {/* Brand Laser Etching */}
          <text x="32" y="90" fill="#94A3B8" fontSize="7" fontFamily="'Manrope', sans-serif" fontWeight="800" letterSpacing="0.05em">WIZORA NEXUS HUB</text>

          {/* Ethernet Ports (RJ45 with Link LEDs) */}
          <g transform="translate(30, 96)">
            {/* Port 1 */}
            <rect x="0" y="0" width="24" height="20" rx="2" fill="#1E293B" stroke="#64748B" strokeWidth="1" />
            <rect x="4" y="4" width="16" height="12" fill="#0A0F1D" />
            <circle cx="4" cy="-3" r="1.5" fill="#10B981" filter="url(#chipGlow)" />
            <circle cx="20" cy="-3" r="1.5" fill="#F59E0B" />

            {/* Port 2 */}
            <rect x="30" y="0" width="24" height="20" rx="2" fill="#1E293B" stroke="#64748B" strokeWidth="1" />
            <rect x="34" y="4" width="16" height="12" fill="#0A0F1D" />
            <circle cx="34" cy="-3" r="1.5" fill="#10B981" filter="url(#chipGlow)" />
            <circle cx="50" cy="-3" r="1.5" fill="#F59E0B" />

            {/* SFP / Optical Fiber Cage */}
            <rect x="60" y="0" width="30" height="20" rx="2" fill="#334155" stroke="#94A3B8" strokeWidth="1" />
            <rect x="65" y="4" width="20" height="12" fill="#020617" />
            <text x="75" y="12" fill="#00E5FF" fontSize="5" fontFamily="monospace" textAnchor="middle">SFP+</text>
          </g>

          {/* Status LEDs Array */}
          <g transform="translate(132, 94)">
            <circle cx="0" cy="4" r="2.5" fill="#10B981" filter="url(#chipGlow)" />
            <circle cx="10" cy="4" r="2.5" fill="#00E5FF" filter="url(#chipGlow)" />
            <circle cx="0" cy="14" r="2.5" fill="#3B82F6" />
            <circle cx="10" cy="14" r="2.5" fill="#10B981" />
            <text x="5" y="26" fill="#64748B" fontSize="5" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">STATUS</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
