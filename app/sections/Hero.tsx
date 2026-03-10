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
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-0">
          {/* Terminal header */}
          <div className="mb-6 sm:mb-8">
            <span className="font-mono text-xs sm:text-sm text-[#00ff88] tracking-wider">
              ~$ whoami
            </span>
          </div>

          {/* Main title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight break-words">
            <span className="glow-text text-[#00d4ff]">TheForGivenOne</span>
          </h1>

          {/* Animated subtitle */}
          <div className="h-auto min-h-[2rem] sm:h-8 mb-6 sm:mb-8">
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
          <p className="text-base sm:text-lg text-[#888899] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0">
            Building modern web experiences with clean code and thoughtful design. 
            Transforming ideas into digital reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
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
              className="px-4 sm:px-6 py-3 border border-[#00d4ff]/30 rounded text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:border-[#00d4ff] transition-all duration-300 text-sm sm:text-base"
            >
              Get in Touch
            </button>
          </div>

          {/* Tech stack badges */}
          <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-2 sm:gap-3 px-4 sm:px-0">
            {["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "AI-Assisted"].map((tech) => (
              <span
                key={tech}
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-mono bg-[#111118] border border-[#00d4ff]/20 text-[#00d4ff]/80 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[#00d4ff]/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#00d4ff]/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
