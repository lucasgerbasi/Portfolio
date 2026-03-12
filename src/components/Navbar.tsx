import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const { currentLang, toggleLanguage } = useLanguage();

  const navItems = {
    en: ['Home', 'About', 'Projects', 'Contact'],
    pt: ['Início', 'Sobre', 'Projetos', 'Contato']
  };

  const sectionIds = ['home', 'about', 'projects', 'contact'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.2 }
    );
    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => {
      sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="text-white font-light tracking-[0.2em] text-sm uppercase hover:text-amber-400 transition-colors duration-300"
          >
            Lucas<span className="text-amber-400 font-semibold">.</span>
          </a>

          <div className="flex-1" />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems[currentLang].map((item, index) => {
              const sectionId = sectionIds[index];
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={index}
                  href={`#${sectionId}`}
                  className={`relative text-sm tracking-widest uppercase font-light transition-colors duration-300 group ${
                    isActive ? 'text-amber-400' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-amber-400 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}

            <button
              onClick={toggleLanguage}
              className="ml-4 text-xs tracking-widest uppercase font-light text-white/40 hover:text-amber-400 border border-white/10 hover:border-amber-400/50 px-3 py-1.5 rounded transition-all duration-300"
            >
              {currentLang === 'en' ? 'PT' : 'EN'}
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/70 hover:text-amber-400 transition-colors p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0d0d0d]/98 border-t border-white/5 py-4">
            {navItems[currentLang].map((item, index) => {
              const sectionId = sectionIds[index];
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={index}
                  href={`#${sectionId}`}
                  className={`block px-4 py-3 text-sm tracking-widest uppercase font-light transition-colors ${
                    isActive ? 'text-amber-400' : 'text-white/60 hover:text-white'
                  }`}
                  onClick={handleNavClick}
                >
                  {item}
                </a>
              );
            })}
            <button
              onClick={toggleLanguage}
              className="mx-4 mt-2 text-xs tracking-widest uppercase font-light text-white/40 hover:text-amber-400 border border-white/10 hover:border-amber-400/40 px-3 py-1.5 rounded transition-all duration-300"
            >
              {currentLang === 'en' ? 'PT' : 'EN'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}