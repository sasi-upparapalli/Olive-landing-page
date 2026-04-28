import React from 'react';

export default function OliveLogo() {
  return (
    <svg width="90" height="34" viewBox="0 0 90 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Olive character icon */}
      <g transform="translate(0, 2)">
        {/* Body */}
        <ellipse cx="13" cy="18" rx="9" ry="11" fill="#4a6b25"/>
        {/* Face highlight */}
        <ellipse cx="13" cy="17" rx="7" ry="9" fill="#5a8030"/>
        {/* Eyes */}
        <circle cx="10.5" cy="16" r="1.2" fill="#1a2010"/>
        <circle cx="15.5" cy="16" r="1.2" fill="#1a2010"/>
        {/* Smile */}
        <path d="M10 19.5 Q13 22 16 19.5" stroke="#1a2010" strokeWidth="1" strokeLinecap="round" fill="none"/>
        {/* Stem */}
        <path d="M13 7 Q15 3 18 2" stroke="#4a6b25" strokeWidth="2" strokeLinecap="round" fill="none"/>
        {/* Leaf */}
        <ellipse cx="18.5" cy="2.5" rx="3" ry="1.5" fill="#6ab030" transform="rotate(-30 18.5 2.5)"/>
      </g>
      {/* "live" text */}
      <text x="26" y="23" fontFamily="Fraunces, Georgia, serif" fontSize="22" fontWeight="700" fill="#1a2010" letterSpacing="-0.5">live</text>
    </svg>
  );
}
