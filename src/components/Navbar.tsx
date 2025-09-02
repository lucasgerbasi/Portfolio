import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
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
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
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

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#23272f] bg-opacity-95 backdrop-blur-lg shadow-lg transition-all">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16">
          <div className="flex items-center flex-shrink-0">
            <a href="#home" className="flex items-center gap-2 text-white font-bold text-xl tracking-tight hover:text-blue-400 transition">
              <span className="hidden sm:inline text-base font-normal text-gray-300">Lucas Gerbasi</span>
            </a>
          </div>

          <div className="flex-1"></div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems[currentLang].map((item, index) => {
              const sectionId = sectionIds[index];
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={index}
                  href={`#${sectionId}`}
                  className={`relative px-2 py-1 font-medium transition-colors duration-200 ${
                    isActive ? 'text-blue-400' : 'text-white hover:text-blue-400'
                  }`}
                >
                  {item}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-400 rounded transition-all"></span>
                  )}
                </a>
              );
            })}
            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1 rounded-full bg-gray-800 text-gray-200 hover:bg-blue-600 hover:text-white transition text-sm font-semibold border border-blue-500"
              aria-label="Toggle language"
            >
              {currentLang === 'en' ? 'PT' : 'EN'}
            </button>
          </div>
          <div className="md:hidden flex items-center ml-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
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
          <div className="md:hidden bg-[#23272f] bg-opacity-95 rounded-b-xl shadow-lg animate-fade-in-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems[currentLang].map((item, index) => {
                const sectionId = sectionIds[index];
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={index}
                    href={`#${sectionId}`}
                    className={`block px-3 py-2 rounded text-base font-medium transition ${
                      isActive ? 'bg-blue-600 text-white' : 'text-gray-200 hover:bg-blue-700 hover:text-white'
                    }`}
                    onClick={handleNavClick}
                  >
                    {item}
                  </a>
                );
              })}
              <button
                onClick={toggleLanguage}
                className="w-full mt-2 px-3 py-2 rounded-full bg-gray-800 text-gray-200 hover:bg-blue-600 hover:text-white transition text-sm font-semibold border border-blue-500"
                aria-label="Toggle language"
              >
                {currentLang === 'en' ? 'PT' : 'EN'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}