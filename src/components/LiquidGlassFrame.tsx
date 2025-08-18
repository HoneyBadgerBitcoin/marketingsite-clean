import React from 'react';

interface LiquidGlassFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function LiquidGlassFrame({ 
  children, 
  className = ''
}: LiquidGlassFrameProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Simple glass container - similar to navbar */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-sm border border-white/30">
        {/* Content container */}
        <div className="relative z-10 p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
