
import React from 'react';

export const CeBadge: React.FC<{ className?: string }> = ({ className = "w-24 h-24 text-[#D5C4A1]" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    {/* Outer Ring with 'Rope' or 'Gear' effect implies engineering */}
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" />
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
    
    {/* Inner Field */}
    <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" className="opacity-50" />

    {/* Top Text Curve (Simulated) */}
    <path d="M30 25 Q50 15 70 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-0" id="topCurve" />
    
    {/* Manual Text Placement for "OCEAN RATED" */}
    <g className="font-bold tracking-widest" style={{ textAnchor: 'middle' }}>
        <text x="50" y="24" fontSize="6" fill="#D5C4A1">OCEAN RATED</text>
    </g>

    {/* Center CE */}
    <text x="50" y="55" fontSize="28" fontWeight="bold" fill="#D5C4A1" textAnchor="middle" style={{ letterSpacing: '-1px' }}>CE</text>
    
    {/* Class A */}
    <text x="50" y="72" fontSize="10" fontWeight="bold" fill="#D5C4A1" textAnchor="middle" letterSpacing="2">CLASS A</text>

    {/* Bottom Details */}
    <text x="50" y="82" fontSize="5" fill="#D5C4A1" textAnchor="middle" className="opacity-90">UNLIMITED OFFSHORE</text>

    {/* Stars */}
    <circle cx="20" cy="50" r="1.5" fill="#D5C4A1" />
    <circle cx="80" cy="50" r="1.5" fill="#D5C4A1" />
  </svg>
);
