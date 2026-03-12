import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect } from 'react';
import profile from '../assets/images/profile.jpg';

export default function Hero() {
  const { currentLang } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const content = {
    en: {
      greeting: "Software Engineer",
      roles: ["Full-Stack Developer", "Security Architect", "AI Integrator", "Backend Developer", "React Developer", "Game Developer"],
      available: "Available for work",
      cta: ["View My Work", "Contact Me"],
      tagline: "I build things that are\nsecure, useful, and mine."
    },
    pt: {
      greeting: "Engenheiro de Software",
      roles: ["Desenvolvedor Full-Stack", "Arquiteto de Segurança", "Integrador de IA", "Desenvolvedor Backend", "Desenvolvedor React", "Desenvolvedor de Jogos"],
      available: "Disponível para projetos",
      cta: ["Ver Projetos", "Contato"],
      tagline: "Construo coisas que são\nseguras, úteis e minhas."
    }
  };

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Reset on lang change
  useEffect(() => {
    setTypedText('');
    setCurrentRoleIndex(0);
    setIsDeleting(false);
  }, [currentLang]);

  // Typing effect
  useEffect(() => {
    const roles = content[currentLang].roles;
    const currentRole = roles[currentRoleIndex % roles.length];

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex(i => (i + 1) % roles.length);
        return;
      }
      setTypingSpeed(isDeleting ? 60 : 120);
      setTypedText(isDeleting
        ? currentRole.substring(0, typedText.length - 1)
        : currentRole.substring(0, typedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentRoleIndex, currentLang]);

  return (
    <section
      id="home"
      className="min-h-screen bg-[#0d0d0d] relative overflow-hidden flex flex-col"
    >
      {/* Subtle amber gradient glow — bottom right */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-400/[0.04] rounded-full blur-[120px] pointer-events-none" />
      {/* Very faint top-left accent */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-400/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Thin vertical rule — left edge decoration */}
      <div className="absolute left-6 top-24 bottom-12 w-px bg-white/[0.04] hidden lg:block" />

      {/* Main content */}
      <div className="flex-1 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">

            {/* LEFT — Typography block */}
            <div>
              {/* Section label */}
              <div
                className={`flex items-center gap-4 mb-10 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-light">01 / Home</span>
                <span className="w-12 h-px bg-white/10" />
                <span className="flex items-center gap-2 text-xs text-white/30 font-light tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  {content[currentLang].available}
                </span>
              </div>

              {/* Greeting line */}
              <p
                className={`text-white/35 text-sm tracking-[0.3em] uppercase font-light mb-4 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                {content[currentLang].greeting}
              </p>

              {/* Name — the big statement */}
              <h1
                className={`text-[clamp(3rem,9vw,7.5rem)] font-light text-white leading-none tracking-tight mb-2 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              >
                Lucas
              </h1>
              <h1
                className={`text-[clamp(3rem,9vw,7.5rem)] font-light leading-none tracking-tight mb-10 transition-all duration-700 delay-[400ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                  Gerbasi
                </span>
              </h1>

              {/* Typing role */}
              <div
                className={`flex items-center gap-3 mb-10 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <span className="w-8 h-px bg-amber-400/50" />
                <span className="text-white/40 text-sm font-light min-h-[1.5rem] tracking-wide">
                  {typedText}
                  <span className="inline-block w-0.5 h-4 bg-amber-400 ml-0.5 animate-pulse align-middle" />
                </span>
              </div>

              {/* Tagline */}
              <p
                className={`text-white/20 text-sm font-light leading-loose tracking-wide mb-12 whitespace-pre-line transition-all duration-700 delay-[600ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                {content[currentLang].tagline}
              </p>

              {/* CTAs */}
              <div
                className={`flex flex-wrap gap-4 transition-all duration-700 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-amber-400 text-black text-sm font-medium tracking-wider hover:bg-amber-300 transition-all duration-300"
                >
                  {content[currentLang].cta[0]}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-white/15 text-white/60 text-sm font-light tracking-wider hover:border-amber-400/40 hover:text-white transition-all duration-300"
                >
                  {content[currentLang].cta[1]}
                </a>
              </div>

              {/* Social links */}
              <div
                className={`flex items-center gap-6 mt-12 transition-all duration-700 delay-[800ms] ${mounted ? 'opacity-100' : 'opacity-0'}`}
              >
                <a href="https://github.com/lucasgerbasi" target="_blank" rel="noopener noreferrer"
                  className="text-white/20 hover:text-amber-400 transition-colors duration-300" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/lucas-gerbasi/" target="_blank" rel="noopener noreferrer"
                  className="text-white/20 hover:text-amber-400 transition-colors duration-300" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <span className="w-px h-4 bg-white/10" />
                <span className="text-white/15 text-xs tracking-widest uppercase">Lucas Gerbasi</span>
              </div>
            </div>

            {/* RIGHT — Profile photo, asymmetric, clipped */}
            <div
              className={`hidden lg:block flex-shrink-0 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              <div className="relative">
                {/* Amber accent bar — left edge of photo */}
                <div className="absolute -left-3 top-8 bottom-8 w-0.5 bg-amber-400/50" />

                {/* Photo — Added group class to wrapper to detect hover properly */}
                <div className="relative w-72 h-96 overflow-hidden group">
                  <img
                    src={profile}
                    alt="Lucas Gerbasi"
                    className="w-full h-full object-cover object-top grayscale group-hover:!grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100 scale-105 group-hover:scale-100"
                  />
                  {/* Bottom fade into bg - Added pointer-events-none */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent pointer-events-none" />
                  {/* Right fade - Added pointer-events-none */}
                  <div className="absolute inset-0 bg-gradient-to-l from-[#0d0d0d]/30 to-transparent pointer-events-none" />
                </div>

                {/* Floating year label */}
                <div className="absolute -bottom-4 -right-4 bg-[#141414] border border-white/8 px-4 py-2">
                  <span className="text-white/20 text-xs tracking-widest uppercase">Est. 2025</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={`pb-8 flex justify-center transition-all duration-700 delay-[1000ms] ${mounted ? 'opacity-100' : 'opacity-0'}`}
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-white/15 hover:text-amber-400/50 transition-colors duration-300 group">
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
          <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}