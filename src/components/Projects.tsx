import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

// --- PROJECT ASSETS ---
import ijbprojetoImg from '../assets/images/ijbprojeto.jpg';
import localvaultImg from '../assets/images/localvaultlogo.jpg';
import trotesolidarioImg from '../assets/images/trotesolidario.png';
import whatyouforgotImg from '../assets/images/whatyouforgot.png';
import echoboxImg from '../assets/images/echobox.png';
import placeholderGif from '../assets/images/placeholder.gif';

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 }}};
const projectVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 12 }},
  hover: { y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", transition: { type: "spring", stiffness: 400, damping: 10 }},
  tap: { scale: 0.98 }
};

export default function Projects() {
  const { currentLang } = useLanguage();
  type Project = typeof projects[number];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [isShowingGif, setIsShowingGif] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // --- FULLY ENHANCED PROJECTS ARRAY ---
  const projects = [
    {
      id: 1,
      title: { en: "Memento", pt: "Memento" },
      description: { en: "A top-down, loop-driven exploration game with a 'horror-cute' aesthetic, built in Godot 4.", pt: "Um jogo de exploração top-down focado em loops com uma estética 'horror-cute', construído em Godot 4." },
      longDescription: { en: "Memento is a top-down exploration and collection game set in the Echorealm, a drowned sea of memory. As a 'Stable Echo,' the player engages in a core loop of catching unique fish, sacrificing them for currency, upgrading permanent abilities, and crafting new fish forms through a deep, multi-layered system.", pt: "Memento é um jogo de exploração e coleção top-down ambientado no Echorealm, um mar afogado de memórias. Como um 'Eco Estável', o jogador participa de um loop de gameplay de pescar peixes únicos, sacrificá-los por moeda, aprimorar habilidades permanentes e criar novas formas de peixes através de um sistema profundo e multifacetado." },
      tech: ['Godot 4', 'GDScript', 'Data-Driven Design'],
      image: ijbprojetoImg,
      gif: placeholderGif,
      githubLink: "https://github.com/lucasgerbasi/memento",
      liveLink: null,
      year: 2024,
      caseStudy: {
        myRole: { en: "Solo Developer & Game Designer", pt: "Desenvolvedor Solo e Game Designer" },
        challenge: { en: "Architecting a highly data-driven and interconnected system in Godot where dozens of unique items and world events could interact without writing brittle, hard-coded logic. The system needed to be scalable for future content.", pt: "Arquitetar um sistema altamente interconectado e orientado a dados em Godot, onde dezenas de itens e eventos de mundo pudessem interagir sem lógica frágil e hard-coded. O sistema precisava ser escalável para conteúdo futuro." },
        solution: { en: "I implemented a robust singleton pattern where a central 'GameData' manager loads all game entities from resource files into dictionaries at startup. Other systems query this manager by ID, completely decoupling the logic from the content and allowing for rapid content creation.", pt: "Implementei um padrão singleton robusto onde um gerenciador central 'GameData' carrega todas as entidades do jogo de arquivos de recurso para dicionários na inicialização. Outros sistemas consultam este gerenciador por ID, desacoplando completamente a lógica do conteúdo e permitindo a criação rápida de novo conteúdo." },
        outcome: { en: "This architecture resulted in a highly scalable and stable prototype, significantly speeding up the process of adding new content. It also taught me invaluable lessons in data-oriented design patterns.", pt: "Essa arquitetura resultou em um protótipo altamente escalável e estável, acelerando significativamente o processo de adicionar novo conteúdo. Também me ensinou lições valiosas sobre padrões de design orientados a dados." }
      }
    },
    {
      id: 2,
      title: { en: "LocalVault", pt: "LocalVault" },
      description: { en: "A secure, local-first password manager built with Electron. Your data never leaves your device.", pt: "Um gerenciador de senhas seguro e 'local-first' construído com Electron. Seus dados nunca saem do seu dispositivo." },
      longDescription: { en: "LocalVault is a cross-platform desktop application that provides a secure, private, and straightforward way to manage passwords. It operates on a local-first principle, meaning your sensitive data is never sent to or stored on any cloud server. Everything is encrypted and saved directly on your computer, giving you complete control.", pt: "LocalVault é um aplicativo de desktop multiplataforma que oferece uma maneira segura, privada e direta de gerenciar senhas. Ele opera com um princípio 'local-first', o que significa que seus dados sensíveis nunca são enviados ou armazenados em nenhum servidor na nuvem. Tudo é criptografado e salvo diretamente no seu computador, dando a você controle total." },
      tech: ['Electron', 'Node.js', 'AES-256-GCM', 'Scrypt'],
      image: localvaultImg,
      gif: placeholderGif,
      githubLink: "https://github.com/lucasgerbasi/LocalVault",
      liveLink: null,
      year: 2024,
      caseStudy: {
        myRole: { en: "Solo Developer", pt: "Desenvolvedor Solo" },
        challenge: { en: "Ensuring top-tier security without relying on external libraries. The main challenge was correctly implementing modern cryptographic standards (Scrypt, AES-GCM) and secure inter-process communication within Electron's architecture.", pt: "Garantir segurança de alto nível sem depender de bibliotecas externas. O principal desafio foi implementar corretamente padrões criptográficos modernos (Scrypt, AES-GCM) e comunicação segura entre processos na arquitetura do Electron." },
        solution: { en: "I used Node.js's native 'crypto' module for end-to-end encryption. For security between processes, I used Electron's `contextBridge` to create a secure API, preventing any Node.js APIs from leaking to the frontend.", pt: "Usei o módulo nativo 'crypto' do Node.js para criptografia de ponta a ponta. Para a segurança entre processos, usei o `contextBridge` do Electron para criar uma API segura, impedindo que APIs do Node.js vazassem para o frontend." },
        outcome: { en: "A functional and secure desktop application that adheres to modern security best practices. This project deepened my understanding of applied cryptography and secure application architecture.", pt: "Uma aplicação de desktop funcional e segura que adere às melhores práticas de segurança modernas. Este projeto aprofundou meu entendimento de criptografia aplicada e arquitetura de aplicações seguras." }
      }
    },
    {
        id: 3,
        title: { en: "IJB Website", pt: "Site IJB" },
        description: { en: "Built a site for a nonprofit that renovates homes. Led front-end using React and styled components.", pt: "Construí um site para uma ONG que reforma casas. Liderei o front-end com React e componentes estilizados." },
        longDescription: { en: "Designed and implemented a comprehensive website for Instituto João de Barro, a nonprofit organization focused on home renovation for families in need. Led the front-end development team, implementing responsive design principles and accessibility features.", pt: "Projetei e implementei um site abrangente para o Instituto João de Barro, uma organização sem fins lucrativos focada na renovação de casas para famílias necessitadas. Liderei a equipe de desenvolvimento front-end, implementando princípios de design responsivo e recursos de acessibilidade." },
        tech: ['React', 'HTML', 'CSS', 'JavaScript'],
        image: ijbprojetoImg,
        gif: placeholderGif,
        githubLink: "https://github.com/MPasti/instituto-joao-de-barro",
        liveLink: null, // Example live link
        year: 2023,
        caseStudy: {
            myRole: { en: "Front-End Development Lead", pt: "Líder de Desenvolvimento Front-End" },
            challenge: { en: "The main challenge was ensuring the site was highly accessible (WCAG AA) and performed well on low-end devices, as the target audience included donors and volunteers from diverse backgrounds.", pt: "O principal desafio foi garantir que o site fosse altamente acessível (WCAG AA) e tivesse um bom desempenho em dispositivos de baixo custo, já que o público-alvo incluía doadores e voluntários de diversas origens." },
            solution: { en: "I enforced strict semantic HTML, managed focus states carefully, and used lazy loading for images and components to improve initial load times. We conducted regular audits with Lighthouse to track and fix performance and accessibility issues.", pt: "Eu impus o uso de HTML semântico, gerenciei cuidadosamente os estados de foco e usei carregamento tardio para imagens e componentes para melhorar os tempos de carregamento inicial. Realizamos auditorias regulares com o Lighthouse para rastrear e corrigir problemas de desempenho e acessibilidade." },
            outcome: { en: "The launched website led to a 30% increase in online donations and was praised for its ease of use. This project solidified my skills in team leadership, accessibility, and performance optimization in React.", pt: "O site lançado resultou em um aumento de 30% nas doações online e foi elogiado por sua facilidade de uso. Este projeto solidificou minhas habilidades em liderança de equipe, acessibilidade e otimização de desempenho em React." }
        }
    },
    {
        id: 4,
        title: { en: "What You Forgot to Remember", pt: "O Que Você Esqueceu de Lembrar" },
        description: { en: "A minimalist, emotionally evocative web experience that feels like a dream you almost recall.", pt: "Uma experiência web minimalista e emocionalmente evocativa que parece um sonho que você quase lembra." },
        longDescription: { en: "An introspective digital experience that presents random 'memories' with surreal, nostalgic undertones. Limited to 2 memories per day to preserve emotional impact, featuring save-as-image functionality, ambient audio, and a memory archive system.", pt: "Uma experiência digital introspectiva que apresenta 'memórias' aleatórias com tons surreais e nostálgicos. Limitado a 2 memórias por dia para preservar o impacto emocional, com funcionalidade de salvar como imagem, áudio ambiente e sistema de arquivo de memórias." },
        tech: ['HTML5', 'CSS3', 'JavaScript', 'html2canvas'],
        image: whatyouforgotImg,
        gif: placeholderGif,
        githubLink: "https://github.com/lucasgerbasi/what-you-forgot-to-remember",
        liveLink: "https://lucasgerbasi.github.io/what-you-forgot-to-remember/", // Example live link
        year: 2024,
        caseStudy: {
            myRole: { en: "Solo Developer & Creator", pt: "Desenvolvedor Solo e Criador" },
            challenge: { en: "The challenge was technical: creating a reliable 'save-as-image' feature directly in the browser. It needed to capture the styled text and background perfectly without requiring a backend server.", pt: "O desafio foi técnico: criar uma funcionalidade confiável de 'salvar como imagem' diretamente no navegador. Precisava capturar o texto estilizado e o fundo perfeitamente, sem a necessidade de um servidor backend." },
            solution: { en: "I integrated the 'html2canvas' library, which effectively takes a 'screenshot' of a specified DOM element and converts it into a canvas. From there, I could convert the canvas to a data URL and trigger a download for the user.", pt: "Integrei a biblioteca 'html2canvas', que efetivamente tira um 'screenshot' de um elemento DOM específico e o converte em um canvas. A partir daí, pude converter o canvas para uma URL de dados e acionar um download para o usuário." },
            outcome: { en: "A unique digital art piece that achieves its goal of encouraging mindful interaction. This project was a great exercise in focusing on user experience and creative coding over pure technical complexity.", pt: "Uma peça de arte digital única que atinge seu objetivo de incentivar a interação consciente. Este projeto foi um ótimo exercício de foco na experiência do usuário e na programação criativa em detrimento da pura complexidade técnica." }
        }
    },
    {
        id: 5,
        title: { en: "EchoBox", pt: "EchoBox" },
        description: { en: "Anonymous confession and echo system where users submit messages and receive random ones from others.", pt: "Sistema anônimo de confissões onde usuários enviam mensagens e recebem outras aleatórias." },
        longDescription: { en: "A Flask-based anonymous messaging platform that creates connections through shared vulnerability. Users can submit personal messages and receive random confessions from others, fostering empathy and human connection while maintaining complete anonymity.", pt: "Uma plataforma de mensagens anônimas baseada em Flask que cria conexões através da vulnerabilidade compartilhada. Usuários podem enviar mensagens pessoais e receber confissões aleatórias de outros, promovendo empatia e conexão humana mantendo anonimato completo." },
        tech: ['Python', 'Flask', 'SQLite', 'HTML5', 'CSS3'],
        image: echoboxImg,
        gif: placeholderGif,
        githubLink: "https://github.com/lucasgerbasi/echobox",
        liveLink: null,
        year: 2024,
        caseStudy: {
            myRole: { en: "Full-Stack Developer", pt: "Desenvolvedor Full-Stack" },
            challenge: { en: "The core challenge was ensuring true user anonymity while preventing spam or malicious use. This required careful database design and a simple but effective content moderation strategy.", pt: "O desafio principal era garantir o anonimato real do usuário e, ao mesmo tempo, prevenir spam ou uso malicioso. Isso exigiu um design de banco de dados cuidadoso e uma estratégia de moderação de conteúdo simples, mas eficaz." },
            solution: { en: "I designed the SQLite database schema to never store any personally identifiable information (like IP addresses). For moderation, I implemented a simple profanity filter on the backend to automatically screen submissions before they were made public.", pt: "Projetei o esquema do banco de dados SQLite para nunca armazenar nenhuma informação de identificação pessoal (como endereços IP). Para moderação, implementei um filtro de palavrões simples no backend para verificar automaticamente os envios antes de serem tornados públicos." },
            outcome: { en: "A simple yet effective platform that provides a safe space for anonymous sharing. This project was a great introduction to full-stack development with Python and Flask, and managing a simple database.", pt: "Uma plataforma simples, mas eficaz, que oferece um espaço seguro para compartilhamento anônimo. Este projeto foi uma ótima introdução ao desenvolvimento full-stack com Python e Flask, e ao gerenciamento de um banco de dados simples." }
        }
    },
    {
        id: 6,
        title: { en: "Solidarity Hazing", pt: "Trote Solidário" },
        description: { en: "A donations tracker for a student integration event. Focused on responsive layout and clarity.", pt: "Rastreador de doações para um evento estudantil. Foquei em layout responsivo e clareza." },
        longDescription: { en: "Created a donation tracking system for university student integration events. The platform allows organizers to monitor donation goals in real-time, visualize progress, and engage participants through gamification elements.", pt: "Criei um sistema de rastreamento de doações para eventos de integração de estudantes universitários. A plataforma permite que os organizadores monitorem as metas de doação em tempo real, visualizem o progresso e envolvam os participantes por meio de elementos de gamificação." },
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: trotesolidarioImg,
        gif: placeholderGif,
        githubLink: "https://github.com/lucasgerbasi/Trote-Solidario",
        liveLink: null, // Example live link
        year: 2022,
        caseStudy: {
            myRole: { en: "Solo Developer", pt: "Desenvolvedor Solo" },
            challenge: { en: "The project needed a simple, real-time 'backend' that could be updated quickly and easily by non-technical event organizers during a live event.", pt: "O projeto precisava de um 'backend' simples e em tempo real que pudesse ser atualizado de forma rápida e fácil por organizadores de eventos não técnicos durante um evento ao vivo." },
            solution: { en: "Instead of a traditional database, I used Google Sheets as a data source. A simple vanilla JavaScript function fetched the data from the public sheet URL, allowing organizers to update donation numbers in a familiar interface, with changes reflected on the site instantly.", pt: "Em vez de um banco de dados tradicional, usei o Google Sheets como fonte de dados. Uma função simples em JavaScript puro buscava os dados da URL pública da planilha, permitindo que os organizadores atualizassem os números das doações em uma interface familiar, com as alterações refletidas no site instantaneamente." },
            outcome: { en: "The tracker was a huge success, helping the event surpass its donation goals. It proved to be a valuable lesson in choosing the right tool for the job, demonstrating that sometimes the simplest solution is the most effective.", pt: "O rastreador foi um grande sucesso, ajudando o evento a superar suas metas de doação. Provou ser uma lição valiosa na escolha da ferramenta certa para o trabalho, demonstrando que, às vezes, a solução mais simples é a mais eficaz." }
        }
    }
  ];

  useEffect(() => {
    setTimeout(() => setIsInView(true), 300);
  }, []);

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setIsShowingGif(false);
  };

  const handleOpenDemo = (project: Project) => {
    setSelectedProject(project);
    setIsShowingGif(true);
  };

  const handleToggleGif = () => {
    setIsShowingGif(prevState => !prevState);
    if (modalRef.current) {
      modalRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">{currentLang === 'en' ? 'My Projects' : 'Meus Projetos'}</h2>
          <p className="text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto">{currentLang === 'en' ? 'A collection of my work that showcases my skills and passion for development.' : 'Uma coleção do meu trabalho que mostra minhas habilidades e paixão pelo desenvolvimento.'}</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div key={project.id} variants={projectVariants} whileHover="hover" whileTap="tap" layout className="flex flex-col h-full">
                <div className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden flex flex-col h-full shadow-md">
                  <div onClick={() => handleOpenDetails(project)} className="relative overflow-hidden group cursor-pointer">
                    <img src={project.image} alt={project.title[currentLang]} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white w-full"><p className="font-medium">{currentLang === 'en' ? 'View Details' : 'Ver Detalhes'}</p></div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">{project.title[currentLang]}</h3>
                      <span className="text-sm bg-zinc-100 dark:bg-zinc-700 px-2 py-1 rounded-full text-zinc-600 dark:text-zinc-300">{project.year}</span>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-4 flex-grow">{project.description[currentLang]}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (<span key={idx} className="text-xs font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 px-3 py-1 rounded-full">{tech}</span>))}
                    </div>
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-700">
                      <button onClick={(e) => { e.stopPropagation(); handleOpenDemo(project);}} className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                        {currentLang === 'en' ? 'View Demo' : 'Ver Demo'}
                      </button>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:underline flex items-center gap-1.5">
                         GitHub
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <motion.div ref={modalRef} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white dark:bg-zinc-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                {isShowingGif ? <img src={selectedProject.gif} alt={`${selectedProject.title[currentLang]} Demo GIF`} className="w-full h-auto object-contain max-h-96 bg-black" /> : <img src={selectedProject.image} alt={selectedProject.title[currentLang]} className="w-full h-64 object-cover" />}
              </div>

              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">{selectedProject.title[currentLang]}</h3>
                  <button onClick={() => setSelectedProject(null)} className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 mb-8">{selectedProject.longDescription[currentLang]}</p>

                <div className="space-y-6">
                    <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-lg">
                        <h4 className="font-bold text-lg text-zinc-800 dark:text-zinc-200 mb-2">{currentLang === 'en' ? 'My Contribution' : 'Minha Contribuição'}</h4>
                        <p className="text-zinc-600 dark:text-zinc-300">{selectedProject.caseStudy.myRole[currentLang]}</p>
                    </div>
                    <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-lg">
                        <h4 className="font-bold text-lg text-zinc-800 dark:text-zinc-200 mb-2">{currentLang === 'en' ? 'Key Challenge' : 'Principal Desafio'}</h4>
                        <p className="text-zinc-600 dark:text-zinc-300">{selectedProject.caseStudy.challenge[currentLang]}</p>
                    </div>
                    <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-lg">
                        <h4 className="font-bold text-lg text-zinc-800 dark:text-zinc-200 mb-2">{currentLang === 'en' ? 'My Solution' : 'Minha Solução'}</h4>
                        <p className="text-zinc-600 dark:text-zinc-300">{selectedProject.caseStudy.solution[currentLang]}</p>
                    </div>
                     <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-500/30">
                        <h4 className="font-bold text-lg text-blue-800 dark:text-blue-200 mb-2">{currentLang === 'en' ? 'Outcome & Key Learnings' : 'Resultado e Aprendizados'}</h4>
                        <p className="text-blue-700 dark:text-blue-300">{selectedProject.caseStudy.outcome[currentLang]}</p>
                    </div>
                </div>
              </div>
              
              <div className="p-6 border-t border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 sticky bottom-0 flex gap-4 flex-wrap items-center">
                 {selectedProject.liveLink && (
                    <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[150px] bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>
                      {currentLang === 'en' ? 'Live Demo' : 'Demo ao Vivo'}
                    </a>
                 )}
                 <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[150px] bg-zinc-800 hover:bg-zinc-900 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center transition-colors dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-white">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    GitHub
                 </a>
                 <button onClick={handleToggleGif} className="flex-1 min-w-[150px] bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-zinc-800 dark:text-zinc-200 font-medium py-2 px-4 rounded-lg flex items-center justify-center transition-colors">
                  {isShowingGif ? (currentLang === 'en' ? 'Static Image' : 'Imagem') : (currentLang === 'en' ? 'Show GIF Demo' : 'Ver Demo GIF')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}