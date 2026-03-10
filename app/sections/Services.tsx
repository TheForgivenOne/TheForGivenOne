"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "01",
    title: "Website Creation",
    description: "Custom websites built from scratch. From landing pages to complex web applications, tailored to your specific needs and goals.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Web Development",
    description: "Full-stack development using modern technologies. React, Next.js, TypeScript, and more. Scalable, maintainable, and performant.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "UI/UX Design",
    description: "User-centered design that looks great and works even better. Wireframes, prototypes, and polished interfaces that convert.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Software Development",
    description: "End-to-end software solutions beyond the web. Desktop applications, automation tools, scripts, and custom software tailored to your workflow.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "API Development",
    description: "Robust RESTful and GraphQL APIs. Secure authentication, efficient data handling, and comprehensive documentation for seamless integration.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "06",
    title: "Database Design",
    description: "Scalable database architecture and optimization. PostgreSQL, MongoDB, Redis. Data modeling, migration strategies, and performance tuning.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
];

export default function Services() {
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
      id="services"
      className="py-24 sm:py-32 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-mono text-xs sm:text-sm text-[#00d4ff] tracking-wider mb-3 sm:mb-4 block">
            ~$ services --list
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            What I <span className="glow-text text-[#00d4ff]">Do</span>
          </h2>
          <div className="line-accent w-20 sm:w-24 mx-auto mb-4 sm:mb-6" />
          <p className="text-[#888899] text-base sm:text-lg px-4 sm:px-0">
            Comprehensive digital solutions for modern businesses
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-0">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`card-hover bg-[#111118] rounded-lg p-6 sm:p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="font-mono text-xs sm:text-sm text-[#00d4ff]/50">{service.id}</span>
                <div className="text-[#00d4ff] scale-90 sm:scale-100">{service.icon}</div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#e0e0e8]">
                {service.title}
              </h3>
              
              <p className="text-[#888899] text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#00d4ff]/10">
                <span className="font-mono text-xs text-[#00ff88]">
                  Available Now →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#888899] mb-6">
            Need something specific? Let&apos;s discuss your project requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#00ff88] transition-colors font-mono text-sm"
          >
            <span>~$ start-project</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
