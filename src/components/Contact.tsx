import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export default function Contact() {
  const { currentLang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const content = {
    en: {
      title: "Contact",
      description: "I'm always open to new opportunities, collaborations, or just a good conversation.",
      location: "Franca, Brazil · Open to remote",
      copy: "Copy",
      copied: "Copied!",
    },
    pt: {
      title: "Contato",
      description: "Estou sempre aberto a novas oportunidades, colaborações ou apenas uma boa conversa.",
      location: "Franca, Brasil · Disponível para remoto",
      copy: "Copiar",
      copied: "Copiado!",
    }
  };

  const email = "lucas.gerbasi1@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const links = [
    {
      label: "GitHub",
      handle: "lucasgerbasi",
      href: "https://github.com/lucasgerbasi",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    },
    {
      label: "LinkedIn",
      handle: "lucas-gerbasi",
      href: "https://www.linkedin.com/in/lucas-gerbasi/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(251,191,36,0.04),transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-light">04 / Contact</span>
            <span className="flex-1 h-px bg-white/10 max-w-xs" />
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">
            {content[currentLang].title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div>
            <p className="text-white/40 text-base leading-relaxed mb-4">
              {content[currentLang].description}
            </p>
            <p className="text-white/20 text-sm tracking-widest uppercase">
              {content[currentLang].location}
            </p>
          </div>

          {/* Right — links */}
          <div className="space-y-0">
            {/* Email row */}
            <div
              className="group flex items-center justify-between py-5 border-b border-white/5 hover:border-amber-400/20 transition-all duration-300 cursor-pointer"
              onClick={handleCopy}
            >
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/20 group-hover:text-amber-400/60 transition-colors duration-300">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                </svg>
                <div>
                  <div className="text-white/20 text-xs tracking-widest uppercase mb-0.5">Email</div>
                  <div className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">{email}</div>
                </div>
              </div>
              <span className="text-white/20 text-xs tracking-widest uppercase group-hover:text-amber-400 transition-colors duration-300">
                {copied ? content[currentLang].copied : content[currentLang].copy}
              </span>
            </div>

            {/* Social links */}
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 border-b border-white/5 hover:border-amber-400/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-white/20 group-hover:text-amber-400/60 transition-colors duration-300">{link.icon}</span>
                  <div>
                    <div className="text-white/20 text-xs tracking-widest uppercase mb-0.5">{link.label}</div>
                    <div className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">{link.handle}</div>
                  </div>
                </div>
                <span className="text-white/20 text-xs group-hover:text-amber-400 transition-colors duration-300 tracking-widest uppercase">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}