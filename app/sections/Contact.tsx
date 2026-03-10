"use client";

import { useEffect, useRef, useState } from "react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/TheForgivenOne",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:successmove000@gmail.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Contact() {
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
      id="contact"
      className="py-24 sm:py-32 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-mono text-xs sm:text-sm text-[#00d4ff] tracking-wider mb-3 sm:mb-4 block">
            ~$ contact --initiate
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Get in <span className="glow-text text-[#00d4ff]">Touch</span>
          </h2>
          <div className="line-accent w-20 sm:w-24 mx-auto mb-4 sm:mb-6" />
          <p className="text-[#888899] text-base sm:text-lg px-4 sm:px-0">
            Ready to start your next project? Let&apos;s connect.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-0">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Contact info */}
            <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#e0e0e8]">
                    Let&apos;s Build Something Amazing
                  </h3>
                  <p className="text-[#888899] text-sm sm:text-base leading-relaxed">
                    Whether you have a project in mind or just want to chat about tech, 
                    I&apos;m always open to discussing new opportunities and ideas.
                  </p>
                </div>

                {/* Quick contact */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 sm:gap-4 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#111118] border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] group-hover:border-[#00d4ff] group-hover:glow-border transition-all flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-[#888899]">Email</p>
                      <a href="mailto:successmove000@gmail.com" className="text-sm sm:text-base text-[#e0e0e8] hover:text-[#00d4ff] transition-colors truncate block">
                        successmove000@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#111118] border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] group-hover:border-[#00d4ff] group-hover:glow-border transition-all flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-[#888899]">Location</p>
                      <p className="text-sm sm:text-base text-[#e0e0e8]">Remote / Worldwide</p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div>
                  <p className="text-xs sm:text-sm text-[#888899] mb-3 sm:mb-4 font-mono">~$ connect --social</p>
                  <div className="flex gap-3 sm:gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#111118] border border-[#00d4ff]/20 flex items-center justify-center text-[#888899] hover:text-[#00d4ff] hover:border-[#00d4ff] hover:glow-border transition-all duration-300"
                        aria-label={link.name}
                      >
                        <span className="scale-90 sm:scale-100">{link.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Visual element */}
            <div className={`mt-8 md:mt-0 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">
                {/* Decorative terminal window */}
                <div className="bg-[#111118] rounded-lg border border-[#00d4ff]/20 overflow-hidden glow-box">
                  {/* Terminal header */}
                  <div className="bg-[#1a1a24] px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 border-b border-[#00d4ff]/10">
                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-xs text-[#888899] font-mono">contact.sh</span>
                    </div>
                  </div>
                  
                  {/* Terminal content */}
                  <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-1.5 sm:space-y-2">
                    <div className="text-[#00ff88]">
                      <span className="text-[#00d4ff]">$</span> echo &quot;Hello!&quot;
                    </div>
                    <div className="text-[#e0e0e8]">Hello!</div>
                    <div className="text-[#00ff88]">
                      <span className="text-[#00d4ff]">$</span> cat availability.txt
                    </div>
                    <div className="text-[#e0e0e8]">
                      Status: <span className="text-[#00ff88]">Available for projects</span>
                    </div>
                    <div className="text-[#e0e0e8]">
                      Response time: <span className="text-[#00d4ff]">&lt; 24 hours</span>
                    </div>
                    <div className="text-[#00ff88]">
                      <span className="text-[#00d4ff]">$</span> _
                      <span className="animate-pulse">▋</span>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-[#00d4ff]/20 to-transparent rounded-full blur-xl" />
                <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-[#00d4ff]/10 to-transparent rounded-full blur-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-16 sm:mt-24 pt-6 sm:pt-8 border-t border-[#00d4ff]/10 text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#888899] text-xs sm:text-sm font-mono">
            <span className="text-[#00d4ff]">~$</span> echo &quot;Built with Next.js, Vinext, Tailwind & AI assistance&quot;
          </p>
          <p className="text-[#888899]/60 text-xs mt-2">
            © {new Date().getFullYear()} TheForGivenOne. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
