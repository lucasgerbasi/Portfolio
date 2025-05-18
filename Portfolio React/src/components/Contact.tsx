import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export default function Contact() {
  const { currentLang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const content = {
    en: {
      title: "Contact Me",
      description: "Feel free to reach out to me through any of the platforms below. I'm always open to connecting!",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Email",
      socialHeading: "Connect with me on:",
      location: "Based in Brazil · Open to remote work",
      copy: "Copy email",
      copied: "Copied!"
    },
    pt: {
      title: "Entre em Contato",
      description: "Sinta-se à vontade para entrar em contato comigo por qualquer uma das plataformas abaixo. Estou sempre aberto a conexões!",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Email",
      socialHeading: "Conecte-se comigo em:",
      location: "Baseado no Brasil · Disponível para remoto",
      copy: "Copiar email",
      copied: "Copiado!"
    }
  };

  const email = "lucas.gerbasi1@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          {content[currentLang].title}
        </h2>
        <p className="text-center text-gray-700 mb-2">
          {content[currentLang].location}
        </p>
        <p className="text-center text-gray-700 mb-8">
          {content[currentLang].description}
        </p>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6 font-semibold text-gray-700">
            {content[currentLang].socialHeading}
          </div>
          <div className="flex flex-col items-center space-y-6">
            <a
              href="https://www.linkedin.com/in/lucas-gerbasi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-blue-700 hover:text-blue-900 transition text-lg hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>{content[currentLang].linkedin}</span>
            </a>
            <a
              href="https://github.com/lucasgerbasi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-800 hover:text-black transition text-lg hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>{content[currentLang].github}</span>
            </a>
            <div className="flex flex-col items-center space-y-2">
              <button
                onClick={handleCopy}
                className="flex items-center space-x-3 text-red-700 hover:text-red-900 transition text-lg hover:scale-105 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                </svg>
                <span>{content[currentLang].email}: {email}</span>
              </button>
              <span className="text-xs text-gray-500 cursor-pointer" onClick={handleCopy}>
                {copied ? content[currentLang].copied : content[currentLang].copy}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}