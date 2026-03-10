"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack online store with payment integration and inventory management",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    status: "In Development",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Real-time data visualization dashboard for business metrics",
    tags: ["React", "D3.js", "Node.js"],
    status: "Coming Soon",
  },
  {
    id: 3,
    title: "Social Media App",
    description: "Mobile-first social platform with real-time messaging",
    tags: ["React Native", "Firebase", "GraphQL"],
    status: "Coming Soon",
  },
  {
    id: 4,
    title: "Portfolio Generator",
    description: "Automated portfolio creation tool for developers",
    tags: ["TypeScript", "Tailwind", "Vite"],
    status: "Coming Soon",
  },
  {
    id: 5,
    title: "Task Management",
    description: "Collaborative project management tool with team features",
    tags: ["Next.js", "Prisma", "Socket.io"],
    status: "Coming Soon",
  },
  {
    id: 6,
    title: "AI Content Tool",
    description: "Content generation assistant powered by machine learning",
    tags: ["Python", "OpenAI", "FastAPI"],
    status: "Coming Soon",
  },
];

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
            Featured <span className="glow-text text-[#00d4ff]">Projects</span>
          </h2>
          <div className="line-accent w-20 sm:w-24 mx-auto mb-4 sm:mb-6" />
          <p className="text-[#888899] text-base sm:text-lg px-4 sm:px-0">
            A collection of work and experiments
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-4 sm:px-0">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative card-hover card-glow bg-[#111118] rounded-lg overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card content */}
              <div className="p-4 sm:p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <span className="font-mono text-xs text-[#00d4ff]/50">
                    {String(project.id).padStart(2, "0")}
                  </span>
                  <span className={`text-xs font-mono px-2 py-1 rounded ${
                    project.status === "In Development" 
                      ? "bg-[#00ff88]/10 text-[#00ff88]" 
                      : "bg-[#00d4ff]/10 text-[#00d4ff]"
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-[#e0e0e8] group-hover:text-[#00d4ff] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#888899] text-sm mb-3 sm:mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-[#1a1a24] text-[#888899] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded transition-all duration-300 hover:bg-[#00d4ff]/10 hover:text-[#00d4ff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-bl from-[#00d4ff]/10 to-transparent transform rotate-45 translate-x-6 sm:translate-x-8 -translate-y-6 sm:-translate-y-8" />
              </div>
            </div>
          ))}
        </div>

        {/* View more CTA */}
        <div className={`mt-8 sm:mt-12 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://github.com/TheForgivenOne"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#888899] hover:text-[#00d4ff] transition-colors font-mono text-xs sm:text-sm border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 px-4 sm:px-6 py-2.5 sm:py-3 rounded"
          >
            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
