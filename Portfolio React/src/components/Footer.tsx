import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { currentLang } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/lucasgerbasi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <i className="fab fa-github text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-gerbasi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <i className="fab fa-linkedin text-2xl" />
          </a>
        </div>
        <p>
          &copy; 2025 Lucas Gerbasi. 
          {currentLang === 'en' 
            ? ' All rights reserved.'
            : ' Todos os direitos reservados.'}
        </p>
      </div>
    </footer>
  );
}