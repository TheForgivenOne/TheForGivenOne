"use client";

import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 sm:py-32 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-mono text-xs sm:text-sm text-[#00d4ff] tracking-wider mb-3 sm:mb-4 block">
            ~$ ls -la projects/
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="glow-text text-[#00d4ff]">Projects</span>
          </h2>
          <div className="line-accent w-20 sm:w-24 mx-auto mb-4 sm:mb-6" />
          <p className="text-[#888899] text-base sm:text-lg px-4 sm:px-0">
            A collection of work and experiments
          </p>
        </div>

        {/* Projects grid */}
        <div className="flex items-center justify-center min-h-[300px]">
          <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00d4ff]/10 mb-6">
              <svg className="w-8 h-8 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#e0e0e8] mb-3">
              Coming Soon
            </h3>
            <p className="text-[#888899] text-base">
              New projects in the works. Stay tuned!
            </p>
          </div>
        </div>

        {/* View more CTA */}
        {/* </div> */}
      </div>
    </section>
  );
}
