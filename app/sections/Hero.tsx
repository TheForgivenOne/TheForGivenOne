"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Web Developer & Digital Creator";
  const [showCursor, setShowCursor] = useState(true);
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    const interval = setInterval(() => {
      if (indexRef.current <= fullText.length) {
        setTypedText(fullText.slice(0, indexRef.current));
        indexRef.current++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb orb-1 top-0 -left-20" />
        <div className="floating-orb orb-2 bottom-0 -right-20" />
        <div className="floating-orb orb-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern grid-pattern-animated opacity-30" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-0">
          {/* Terminal header */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <span className="font-mono text-xs sm:text-sm text-[#00ff88] tracking-wider">
              ~$ whoami
            </span>
          </div>

          {/* Main title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight break-words animate-fade-in-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <span className="glow-text text-[#00d4ff]">TheForGivenOne</span>
          </h1>

          {/* Animated subtitle */}
          <div className="h-auto min-h-[2rem] sm:h-8 mb-6 sm:mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <p className="text-base sm:text-xl md:text-2xl text-[#888899] font-mono">
              <span className="text-[#00ff88]">$</span> {typedText}
              <span 
                className={`text-[#00d4ff] ${showCursor ? 'opacity-100' : 'opacity-0'}`}
              >
                ▋
              </span>
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#888899] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0 animate-fade-in-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Building modern web experiences with clean code and thoughtful design. 
            Transforming ideas into digital reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0 animate-fade-in-up opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary inline-flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span>View Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary px-4 sm:px-6 py-3 border border-[#00d4ff]/30 rounded text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:border-[#00d4ff] transition-all duration-300 text-sm sm:text-base"
            >
              Get in Touch
            </button>
          </div>

          {/* Tech stack badges */}
          <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-2 sm:gap-3 px-4 sm:px-0">
            {["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "AI-Assisted"].map((tech, i) => (
              <span
                key={tech}
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-mono bg-[#111118] border border-[#00d4ff]/20 text-[#00d4ff]/80 rounded transition-all duration-300 hover:border-[#00d4ff] hover:text-[#00d4ff] hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] cursor-default"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up opacity-0" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
        <button
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-6 h-10 border-2 border-[#00d4ff]/30 rounded-full flex justify-center items-start p-1 hover:border-[#00d4ff]/60 transition-colors group"
          aria-label="Scroll to services"
        >
          <div className="w-1 h-3 bg-[#00d4ff]/50 rounded-full mt-0.5 animate-bounce group-hover:bg-[#00d4ff] transition-colors" />
        </button>
      </div>
    </section>
  );
}
