export function DeviceIllustration() {
  return (
    <div className="relative flex items-center justify-center select-none">
      {/* outer glow rings */}
      <div className="absolute w-[340px] h-[340px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #00c8ff 0%, transparent 70%)" }} />
      <div className="absolute w-[260px] h-[260px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, #6644ff 0%, transparent 65%)" }} />

      <svg width="280" height="300" viewBox="0 0 280 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
        <defs>
          <radialGradient id="uvGlow" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stopColor="#00c8ff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6644ff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="innerGlow" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#00c8ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00c8ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a2a4a" />
            <stop offset="100%" stopColor="#0a1220" />
          </linearGradient>
          <linearGradient id="doorGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#162038" />
            <stop offset="100%" stopColor="#0c1624" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <ellipse cx="140" cy="210" rx="120" ry="30" fill="url(#uvGlow)" />
        <rect x="30" y="60" width="220" height="180" rx="16" fill="url(#bodyGrad)" stroke="rgba(0,200,255,0.25)" strokeWidth="1.5" />
        <rect x="42" y="72" width="140" height="156" rx="12" fill="url(#doorGrad)" stroke="rgba(0,200,255,0.35)" strokeWidth="1" />
        <rect x="54" y="84" width="116" height="100" rx="8" fill="#03091a" stroke="rgba(0,200,255,0.5)" strokeWidth="1" />
        <rect x="54" y="84" width="116" height="100" rx="8" fill="url(#innerGlow)" />
        <rect x="64" y="90" width="96" height="8" rx="4" fill="#00c8ff" opacity="0.9" filter="url(#glow)" />
        <rect x="64" y="168" width="96" height="8" rx="4" fill="#00c8ff" opacity="0.9" filter="url(#glow)" />

        <g opacity="0.85">
          <ellipse cx="112" cy="152" rx="44" ry="10" fill="#1e3a5a" stroke="rgba(0,200,255,0.3)" strokeWidth="0.5" />
          <path d="M72 152 Q80 120 112 118 Q140 116 152 128 Q158 136 152 144 Q144 148 112 150 Z" fill="#1a3060" stroke="rgba(0,200,255,0.4)" strokeWidth="0.5" />
          <line x1="95" y1="132" x2="105" y2="128" stroke="rgba(0,200,255,0.6)" strokeWidth="1" />
          <line x1="105" y1="134" x2="115" y2="130" stroke="rgba(0,200,255,0.6)" strokeWidth="1" />
          <line x1="115" y1="135" x2="125" y2="132" stroke="rgba(0,200,255,0.6)" strokeWidth="1" />
        </g>

        <rect x="58" y="154" width="108" height="28" rx="5" fill="#0d1a30" stroke="rgba(0,200,255,0.2)" strokeWidth="0.5" />
        {[68, 84, 100, 116, 132, 148].map((x, i) => (
          <line key={i} x1={x} y1="157" x2={x - 6} y2="179" stroke="rgba(0,200,255,0.15)" strokeWidth="1" />
        ))}

        <rect x="42" y="82" width="4" height="16" rx="2" fill="rgba(0,200,255,0.4)" />
        <rect x="42" y="204" width="4" height="16" rx="2" fill="rgba(0,200,255,0.4)" />
        <circle cx="186" cy="132" r="6" fill="#0a1830" stroke="rgba(0,200,255,0.5)" strokeWidth="1" />
        <circle cx="186" cy="132" r="2.5" fill="#00c8ff" filter="url(#glow)" />

        <rect x="192" y="72" width="48" height="156" rx="8" fill="#0d1a2e" stroke="rgba(0,200,255,0.2)" strokeWidth="1" />
        <rect x="198" y="80" width="36" height="22" rx="4" fill="#020d18" stroke="rgba(0,200,255,0.4)" strokeWidth="0.75" />
        <text x="216" y="88" fill="#00c8ff" fontSize="5" textAnchor="middle" fontFamily="JetBrains Mono, monospace">UV-C</text>
        <text x="216" y="96" fill="#00ff9d" fontSize="4.5" textAnchor="middle" fontFamily="JetBrains Mono, monospace">ACTIVE</text>

        {[0, 1, 2].map(row =>
          [0, 1, 2].map(col => (
            <rect
              key={`${row}-${col}`}
              x={200 + col * 12}
              y={110 + row * 12}
              width="8"
              height="8"
              rx="2"
              fill={row === 0 && col === 1 ? "#00c8ff" : "#162040"}
              stroke="rgba(0,200,255,0.3)"
              strokeWidth="0.5"
            />
          ))
        )}

        <rect x="198" y="152" width="36" height="8" rx="3" fill="#00c8ff" opacity="0.85" filter="url(#glow)" />
        <rect x="198" y="164" width="36" height="8" rx="3" fill="#162040" stroke="rgba(0,200,255,0.3)" strokeWidth="0.5" />
        <rect x="198" y="176" width="36" height="8" rx="3" fill="#162040" stroke="rgba(0,200,255,0.3)" strokeWidth="0.5" />

        {[0, 1, 2, 3, 4].map(i => (
          <circle key={i} cx={205 + i * 8} cy={196} r="2" fill={i < 3 ? "#00c8ff" : "#1a2a4a"} filter={i < 3 ? "url(#glow)" : undefined} />
        ))}

        <rect x="50" y="236" width="180" height="14" rx="7" fill="#0d1a2e" stroke="rgba(0,200,255,0.2)" strokeWidth="1" />
        <rect x="60" y="248" width="20" height="8" rx="4" fill="#0a1220" />
        <rect x="200" y="248" width="20" height="8" rx="4" fill="#0a1220" />

        {[
          { cx: 80, cy: 100, r: 1.5 }, { cx: 130, cy: 95, r: 1 }, { cx: 155, cy: 110, r: 1.5 },
          { cx: 70, cy: 160, r: 1 }, { cx: 145, cy: 170, r: 1.5 }, { cx: 100, cy: 180, r: 1 }
        ].map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill="#00c8ff" opacity="0.7" filter="url(#strongGlow)" />
        ))}

        <text x="112" y="216" fill="rgba(0,200,255,0.5)" fontSize="7" textAnchor="middle" letterSpacing="3" fontFamily="Oxanium, sans-serif" fontWeight="600">SHOECLEANSE</text>
      </svg>
    </div>
  );
}
