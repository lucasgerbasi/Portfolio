import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import ijbprojeto from '../assets/images/ijbprojeto.jpg';
import trotesolidario from '../assets/images/trotesolidario.png';
import spotify from '../assets/images/spotify.jpg';

// Enhanced animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const projectVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 12 
    }
  },
  hover: { 
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: { scale: 0.98 }
};

export default function Projects() {
  const { currentLang } = useLanguage();
  type Project = typeof projects[number];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isInView, setIsInView] = useState(false);

  // Enhanced project data with case study fields
  const projects = [
    {
      id: 1,
      title: { en: "IJB Website", pt: "Site IJB" },
      description: {
        en: "Built a site for a nonprofit that renovates homes. Led front-end using React and styled components.",
        pt: "Construí um site para uma ONG que reforma casas. Liderei o front-end com React e componentes estilizados."
      },
      longDescription: {
        en: "Designed and implemented a comprehensive website for Instituto João de Barro, a nonprofit organization focused on home renovation for families in need. Led the front-end development team, implementing responsive design principles and accessibility features.",
        pt: "Projetei e implementei um site abrangente para o Instituto João de Barro, uma organização sem fins lucrativos focada na renovação de casas para famílias necessitadas. Liderei a equipe de desenvolvimento front-end, implementando princípios de design responsivo e recursos de acessibilidade."
      },
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      image: ijbprojeto,
      link: "https://github.com/MPasti/instituto-joao-de-barro",
      year: 2023,
      caseStudy: {
        problem: {
          en: "The nonprofit needed a modern, accessible website to better reach donors and volunteers.",
          pt: "A ONG precisava de um site moderno e acessível para alcançar melhor doadores e voluntários."
        },
        process: {
          en: "Collaborated with stakeholders to define requirements, designed wireframes, and led the front-end build with React. Focused on accessibility and mobile responsiveness. Used GitHub for version control and Figma for design.",
          pt: "Colaborei com stakeholders para definir requisitos, desenhei wireframes e liderei o front-end com React. Foquei em acessibilidade e responsividade. Usei GitHub para versionamento e Figma para design."
        },
        screenshots: [
          { src: ijbprojeto, alt: "Instituto João de Barro Website Screenshot" }
        ],
        result: {
          en: "Website launch increased online donations by 30% and received positive feedback from both users and the nonprofit team.",
          pt: "O lançamento do site aumentou as doações online em 30% e recebeu feedback positivo dos usuários e da equipe da ONG."
        }
      }
    },
    {
      id: 2,
      title: { en: "Solidarity Hazing", pt: "Trote Solidário" },
      description: {
        en: "A donations tracker for a student integration event. Focused on responsive layout and clarity.",
        pt: "Rastreador de doações para um evento estudantil. Foquei em layout responsivo e clareza."
      },
      longDescription: {
        en: "Created a donation tracking system for university student integration events. The platform allows organizers to monitor donation goals in real-time, visualize progress, and engage participants through gamification elements.",
        pt: "Criei um sistema de rastreamento de doações para eventos de integração de estudantes universitários. A plataforma permite que os organizadores monitorem as metas de doação em tempo real, visualizem o progresso e envolvam os participantes por meio de elementos de gamificação."
      },
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: trotesolidario,
      link: "https://github.com/lucasgerbasi/Trote-Solidario",
      year: 2022,
      caseStudy: {
        problem: {
          en: "Organizers needed a way to track and display donation progress for a charity event.",
          pt: "Os organizadores precisavam de uma forma de rastrear e exibir o progresso das doações para um evento beneficente."
        },
        process: {
          en: "Developed a real-time tracker using vanilla JS, designed a clear UI, and ensured mobile compatibility. Used Google Sheets as a backend for quick updates.",
          pt: "Desenvolvi um rastreador em tempo real com JS puro, criei uma UI clara e garanti compatibilidade mobile. Usei Google Sheets como backend para atualizações rápidas."
        },
        screenshots: [
          { src: trotesolidario, alt: "Trote Solidário Screenshot" }
        ],
        result: {
          en: "Helped the event surpass its donation goal and improved participant engagement.",
          pt: "Ajudou o evento a superar a meta de doações e aumentou o engajamento dos participantes."
        }
      }
    },
    {
      id: 3,
      title: { en: "Spotify API App", pt: "Aplicativo Spotify API" },
      description: {
        en: "Flask web app that shows top tracks/artists using the Spotify API. Clean interface and OAuth flow.",
        pt: "Web app com Flask que mostra músicas/artistas usando a API do Spotify. Interface limpa e OAuth."
      },
      longDescription: {
        en: "Developed a web application using Flask that integrates with Spotify's API to showcase users' listening habits, top tracks, and favorite artists. Implemented secure OAuth authentication flow and created an intuitive dashboard for music analytics.",
        pt: "Desenvolvi uma aplicação web usando Flask que se integra à API do Spotify para mostrar os hábitos de audição dos usuários, principais faixas e artistas favoritos. Implementei fluxo de autenticação OAuth seguro e criei um painel intuitivo para análise musical."
      },
      tech: ['Python', 'Flask', 'Spotify API'],
      image: spotify,
      link: "https://github.com/lucasgerbasi/Spotify-API-App",
      year: 2023,
      caseStudy: {
        problem: {
          en: "Music fans wanted to visualize their Spotify stats in a user-friendly dashboard.",
          pt: "Fãs de música queriam visualizar suas estatísticas do Spotify em um painel amigável."
        },
        process: {
          en: "Built a Flask backend with OAuth, fetched user data from Spotify, and designed a dashboard with charts. Focused on security and privacy.",
          pt: "Construi um backend Flask com OAuth, busquei dados do usuário no Spotify e criei um dashboard com gráficos. Foquei em segurança e privacidade."
        },
        screenshots: [
          { src: spotify, alt: "Spotify API App Screenshot" }
        ],
        result: {
          en: "Personal project.",
          pt: "Projeto pessoal."
        }
      }
    }
  ];

  // Animation trigger on component mount
  useEffect(() => {
    setTimeout(() => setIsInView(true), 300);
  }, []);

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
            {currentLang === 'en' ? 'My Projects' : 'Meus Projetos'}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto">
            {currentLang === 'en' 
              ? 'A collection of my work that showcases my skills and passion for development.' 
              : 'Uma coleção do meu trabalho que mostra minhas habilidades e paixão pelo desenvolvimento.'}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover="hover"
                whileTap="tap"
                layout
                className="flex flex-col h-full"
              >
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer shadow-md"
                >
                  <div className="relative overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title[currentLang]}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white w-full">
                        <p className="font-medium">
                          {currentLang === 'en' ? 'View Details' : 'Ver Detalhes'}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
                        {project.title[currentLang]}
                      </h3>
                      <span className="text-sm bg-zinc-100 dark:bg-zinc-700 px-2 py-1 rounded-full text-zinc-600 dark:text-zinc-300">
                        {project.year}
                      </span>
                    </div>
                    
                    <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-4 flex-grow">
                      {project.description[currentLang]}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.link, '_blank');
                        }}
                        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                      >
                        GitHub
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-zinc-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title[currentLang]}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                    {selectedProject.title[currentLang]}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  {selectedProject.longDescription[currentLang]}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg text-blue-700 dark:text-blue-300 mb-2">
                    {currentLang === 'en' ? 'Case Study' : 'Estudo de Caso'}
                  </h4>
                  <div className="mb-2">
                    <strong>{currentLang === 'en' ? 'Problem:' : 'Problema:'}</strong>
                    <span className="ml-2">{selectedProject.caseStudy.problem[currentLang]}</span>
                  </div>
                  <div className="mb-2">
                    <strong>{currentLang === 'en' ? 'Process:' : 'Processo:'}</strong>
                    <span className="ml-2">{selectedProject.caseStudy.process[currentLang]}</span>
                  </div>
                  <div className="mb-2">
                    <strong>{currentLang === 'en' ? 'Screenshots:' : 'Capturas:'}</strong>
                    <div className="flex gap-3 mt-2">
                      {selectedProject.caseStudy.screenshots.map((shot, idx) => (
                        <img
                          key={idx}
                          src={shot.src}
                          alt={shot.alt}
                          className="w-32 h-20 object-cover rounded shadow"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mb-2">
                    <strong>{currentLang === 'en' ? 'Result:' : 'Resultado:'}</strong>
                    <span className="ml-2">{selectedProject.caseStudy.result[currentLang]}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
                    {currentLang === 'en' ? 'Technologies Used' : 'Tecnologias Utilizadas'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-sm font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-zinc-800 dark:text-zinc-200 font-medium py-2 px-4 rounded-lg"
                  >
                    {currentLang === 'en' ? 'Close' : 'Fechar'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}