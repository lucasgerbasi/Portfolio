import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

import mementoImg from '../assets/images/memento.jpg';
import ijbprojetoImg from '../assets/images/ijbprojeto.jpg';
import localvaultImg from '../assets/images/localvaultlogo.jpg';
import lumenImg from '../assets/images/lumenlogo.png';
import trotesolidarioImg from '../assets/images/trotesolidario.png';
import whatyouforgotImg from '../assets/images/whatyouforgot.png';
import echoboxImg from '../assets/images/echobox.png';
import placeholderGif from '../assets/images/placeholder.gif';
import localvaultGif from '../assets/videos/localvault.gif';
import lumenWebM from '../assets/images/placeholder.gif';
import mementoWebM from '../assets/videos/memento.webm';
import deaddropImg from '../assets/images/deaddrop_logo.png';

export default function Projects() {
  const { currentLang } = useLanguage();
  type Lang = 'en' | 'pt';
  type Project = typeof projects[number] & { caseStudyLink?: string };
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isShowingDemo, setIsShowingDemo] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleTrack = (name: string) => {
    if ((window as any).goatcounter?.count) (window as any).goatcounter.count({ path: name, event: true });
  };

  const projects = [
    {
      id: 2, year: 2025, featured: true,
      title: { en: "LocalVault", pt: "LocalVault" },
      description: { en: "A secure, local-first password manager built from scratch with Electron and Node.js.", pt: "Um gerenciador de senhas seguro e 'local-first' construído do zero com Electron e Node.js." },
      longDescription: { en: "I created LocalVault to solve my own need for a straightforward, highly secure password manager that wasn't reliant on the cloud. This project is a desktop application that gives users complete control over their data by encrypting and storing it locally, secured by a single master password. It includes a full suite of features, from a secure password generator to encrypted vault backups.", pt: "Eu criei o LocalVault para resolver minha própria necessidade de um gerenciador de senhas direto, altamente seguro e que não dependesse da nuvem. Este projeto é uma aplicação de desktop que dá aos usuários controle total sobre seus dados, criptografando e armazenando-os localmente, protegidos por uma única senha mestra. Inclui um conjunto completo de recursos, desde um gerador de senhas seguro até backups criptografados do cofre." },
      tech: ['Electron', 'Node.js', 'Argon2', 'AES-256-GCM', 'Cryptography'],
      image: localvaultImg, demoAsset: localvaultGif, mediaType: 'gif' as const,
      githubLink: "https://github.com/lucasgerbasi/LocalVault", liveLink: null,
      caseStudyLink: "https://docs.google.com/document/d/17RtvC_PenJwMyh9gcbhf5_vfJ-HuuzLcmjGg8ho4SXQ/edit?usp=sharing",
      caseStudy: {
        myRole: { en: "Solo Full-Stack Developer & Security Architect", pt: "Desenvolvedor Full-Stack Solo e Arquiteto de Segurança" },
        challenge: { en: "The primary challenge was to architect a zero-knowledge, local-only application with state-of-the-art security. This required correctly implementing modern cryptographic standards from scratch using Node.js's native crypto module, ensuring secure inter-process communication (IPC) in Electron, and designing a user-friendly interface for complex security features.", pt: "O desafio principal era arquitetar uma aplicação 'zero-knowledge' e 'local-only' com segurança de ponta. Isso exigiu a implementação correta de padrões criptográficos modernos do zero, usando o módulo nativo de criptografia do Node.js, garantindo a comunicação segura entre processos (IPC) no Electron e projetando uma interface amigável para recursos de segurança complexos." },
        solution: { en: "For key derivation, I upgraded from Scrypt to Argon2id, the current industry gold standard. For encryption, I used AES-256-GCM to ensure both confidentiality and data integrity. To secure the application's architecture, I disabled Node.js integration in the renderer and used Electron's `contextBridge` to create a minimal, secure API between the front-end and back-end, preventing any potential security leaks.", pt: "Para a derivação de chave, atualizei de Scrypt para Argon2id, o padrão ouro atual da indústria. Para criptografia, usei AES-256-GCM para garantir tanto a confidencialidade quanto a integridade dos dados. Para proteger a arquitetura da aplicação, desativei a integração do Node.js no renderer e usei o `contextBridge` do Electron para criar uma API mínima e segura entre o front-end e o back-end, prevenindo vazamentos de segurança." },
        outcome: { en: "The result is a fully-featured, highly secure desktop password manager that I use myself. This project was an incredible deep dive into applied cryptography, secure application architecture, and the intricacies of the Electron framework. I learned not only how to implement security features, but also how to design them in a way that is robust and user-centric.", pt: "O resultado é um gerenciador de senhas de desktop completo e altamente seguro que eu mesmo uso. Este projeto foi um mergulho profundo em criptografia aplicada, arquitetura de aplicações seguras e nas complexidades do framework Electron. Aprendi não apenas a implementar recursos de segurança, mas também a projetá-los de uma forma que seja robusta e centrada no usuário." }
      }
    },
    {
      id: 7, year: 2025, featured: true,
      title: { en: "DeadDrop", pt: "DeadDrop" },
      description: { en: "A privacy-first, ephemeral file-sharing web application with a zero-knowledge architecture.", pt: "Uma aplicação web de compartilhamento de arquivos efêmero, focado em privacidade e com arquitetura de conhecimento zero." },
      longDescription: { en: "Similar to LocalVault, I built DeadDrop to address my own need for a truly private, one-time method of sharing sensitive files without trusting a third party. It's a web utility that implements a Zero-Knowledge Architecture where all encryption occurs client-side, ensuring the server is blind to file contents. Files are permanently deleted after the first download.", pt: "Assim como o LocalVault, construí o DeadDrop para resolver minha própria necessidade de um método verdadeiramente privado e de uso único para compartilhar arquivos sensíveis sem confiar em terceiros. É um utilitário web que implementa uma Arquitetura de Conhecimento Zero, onde toda a criptografia ocorre no lado do cliente, garantindo que o servidor seja cego ao conteúdo dos arquivos. Os arquivos são permanentemente excluídos após o primeiro download." },
      tech: ['React', 'Node.js', 'Web Crypto API', 'Zero-Knowledge'],
      image: deaddropImg, demoAsset: placeholderGif, mediaType: 'gif' as const,
      githubLink: "https://github.com/lucasgerbasi/DeadDrop", liveLink: "https://lucasgerbasi.github.io/DeadDrop/",
      caseStudyLink: "https://docs.google.com/document/d/1zi4Es4g4lryFLYn33BewXvd1A_vY1kBbhZ6wx5MHu0Q/edit?usp=sharing",
      caseStudy: {
        myRole: { en: "Solo Developer & Security Architect", pt: "Desenvolvedor Solo e Arquiteto de Segurança" },
        challenge: { en: "The core challenge was to design a zero-knowledge, end-to-end encrypted file sharing system where the server is provably blind to file content, and to deploy it entirely on free-tier platforms without compromising security.", pt: "O desafio principal foi projetar um sistema de compartilhamento de arquivos com criptografia de ponta a ponta e conhecimento zero, onde o servidor é comprovadamente cego ao conteúdo, e implantá-lo totalmente em plataformas de nível gratuito sem comprometer a segurança." },
        solution: { en: "Implemented client-side AES-256-GCM encryption using the Web Crypto API. The encryption key is transferred to the recipient via the URL hash fragment (#), which is never sent to the server, guaranteeing zero-knowledge. The Node.js backend enforces a strict delete-on-download policy.", pt: "Implementei criptografia AES-256-GCM no lado do cliente usando a Web Crypto API. A chave de criptografia é transferida ao destinatário através do fragmento hash da URL (#), que nunca é enviado ao servidor, garantindo conhecimento zero. O backend em Node.js impõe uma política estrita de exclusão após o download." },
        outcome: { en: "Successfully created a fully functional, highly secure E2EE application with zero infrastructure cost. This project was a deep dive into applied web cryptography, secure architectural patterns, and proved that enterprise-grade privacy can be accessible and affordable.", pt: "Criei com sucesso uma aplicação E2EE funcional e altamente segura com custo zero de infraestrutura. Este projeto foi um mergulho profundo em criptografia web aplicada, padrões de arquitetura segura e provou que a privacidade de nível empresarial pode ser acessível." }
      }
    },
    {
      id: 8, year: 2026, featured: false,
      title: { en: "Lumen", pt: "Lumen" },
      description: { en: "A fully local RAG engine for secure document and repository querying.", pt: "Um motor RAG totalmente local para consulta segura de documentos e repositórios." },
      longDescription: { en: "Lumen is a fully local RAG (Retrieval-Augmented Generation) application designed to help you query your documents securely. By ingesting PDFs and GitHub repositories, Lumen allows you to ask questions in plain English and receive answers grounded strictly in your own data, without any information ever leaving your machine.", pt: "Lumen é uma aplicação RAG (Retrieval-Augmented Generation) totalmente local projetada para ajudar você a consultar seus documentos com segurança. Ao ingerir PDFs e repositórios GitHub, o Lumen permite que você faça perguntas em linguagem natural e receba respostas baseadas estritamente em seus próprios dados, sem que nenhuma informação saia da sua máquina." },
      tech: ['FastAPI', 'Ollama', 'FAISS', 'Python', 'LangChain'],
      image: lumenImg, demoAsset: lumenWebM, mediaType: 'video' as const,
      githubLink: "https://github.com/lucasgerbasi/Lumen", liveLink: null,
      caseStudy: {
        myRole: { en: "Solo Backend Developer & AI Integrator", pt: "Desenvolvedor Backend Solo e Integrador de IA" },
        challenge: { en: "Designing a high-performance RAG pipeline that runs entirely on consumer hardware without cloud dependencies, managing model swapping and vector memory efficiently.", pt: "Projetar um pipeline RAG de alto desempenho que rode inteiramente em hardware doméstico sem dependências de nuvem, gerenciando a troca de modelos e memória vetorial de forma eficiente." },
        solution: { en: "I integrated Ollama for local LLM and embedding inference, using FAISS for lightning-fast in-memory similarity search and FastAPI for a streaming response architecture.", pt: "Integrei o Ollama para LLM local e inferência de embeddings, usando FAISS para busca de similaridade ultra-rápida em memória e FastAPI para uma arquitetura de resposta por streaming." },
        outcome: { en: "A modular, privacy-focused knowledge engine that enables technical documentation analysis without privacy leaks.", pt: "Um motor de conhecimento modular focado em privacidade que permite a análise de documentação técnica sem vazamentos de dados." }
      }
    },
    {
      id: 1, year: 2025, featured: false,
      title: { en: "Memento", pt: "Memento" },
      description: { en: "A complex application in Godot 4, architected from the ground up to demonstrate advanced data-driven systems and state management.", pt: "Uma aplicação complexa em Godot 4, arquitetada do zero para demonstrar sistemas avançados orientados a dados e gerenciamento de estado." },
      longDescription: { en: "Memento is a top-down exploration and collection game set in the Echorealm, a drowned sea of memory. As a 'Stable Echo,' the player engages in a core loop of catching unique fish, sacrificing them for currency, upgrading permanent abilities, and crafting new fish forms through a deep, multi-layered system.", pt: "Memento é um jogo de exploração e coleção top-down ambientado no Echorealm, um mar afogado de memórias. Como um 'Eco Estável', o jogador participa de um loop de gameplay de pescar peixes únicos, sacrificá-los por moeda, aprimorar habilidades permanentes e criar novas formas de peixes através de um sistema profundo e multifacetado." },
      tech: ['Godot 4', 'GDScript', 'Data-Driven Design'],
      image: mementoImg, demoAsset: mementoWebM, mediaType: 'video' as const,
      githubLink: "https://github.com/lucasgerbasi/memento", liveLink: null,
      caseStudyLink: "https://docs.google.com/document/d/1uvvJmvyPA4PYNZNG3Lr1oJGowkQMPpODNN5TN-YgnjE/edit?usp=sharing",
      caseStudy: {
        myRole: { en: "Solo Developer & Game Designer", pt: "Desenvolvedor Solo e Game Designer" },
        challenge: { en: "Architecting a highly data-driven and interconnected system in Godot where dozens of unique items and world events could interact without writing brittle, hard-coded logic. The system needed to be scalable for future content.", pt: "Arquitetar um sistema altamente interconectado e orientado a dados em Godot, onde dezenas de itens e eventos de mundo pudessem interagir sem lógica frágil e hard-coded. O sistema precisava ser escalável para conteúdo futuro." },
        solution: { en: "I implemented a robust singleton pattern where a central 'GameData' manager loads all game entities from resource files into dictionaries at startup. Other systems query this manager by ID, completely decoupling the logic from the content and allowing for rapid content creation.", pt: "Implementei um padrão singleton robusto onde um gerenciador central 'GameData' carrega todas as entidades do jogo de arquivos de recurso para dicionários na inicialização. Outros sistemas consultam este gerenciador por ID, desacoplando completamente a lógica do conteúdo e permitindo a criação rápida de novo conteúdo." },
        outcome: { en: "This architecture resulted in a highly scalable and stable prototype, significantly speeding up the process of adding new content. It also taught me invaluable lessons in data-oriented design patterns.", pt: "Essa arquitetura resultou em um protótipo altamente escalável e estável, acelerando significativamente o processo de adicionar novo conteúdo. Também me ensinou lições valiosas sobre padrões de design orientados a dados." }
      }
    },
    {
      id: 3, year: 2023, featured: false,
      title: { en: "IJB Website", pt: "Site IJB" },
      description: { en: "Built a site for a nonprofit that renovates homes. Led front-end using React and styled components.", pt: "Construí um site para uma ONG que reforma casas. Liderei o front-end com React e componentes estilizados." },
      longDescription: { en: "Designed and implemented a comprehensive website for Instituto João de Barro. Led the front-end development team, implementing responsive design principles and accessibility features.", pt: "Projetei e implementei um site abrangente para o Instituto João de Barro. Liderei a equipe de desenvolvimento front-end, implementando princípios de design responsivo e acessibilidade." },
      tech: ['React', 'HTML5', 'CSS3', 'JavaScript'],
      image: ijbprojetoImg, demoAsset: placeholderGif, mediaType: 'gif' as const,
      githubLink: "https://github.com/MPasti/instituto-joao-de-barro", liveLink: null,
      caseStudy: {
        myRole: { en: "Front-End Development Lead", pt: "Líder de Desenvolvimento Front-End" },
        challenge: { en: "Ensuring the site was highly accessible (WCAG AA) and performed well on low-end devices.", pt: "Garantir que o site fosse altamente acessível (WCAG AA) e tivesse um bom desempenho em dispositivos de baixo custo." },
        solution: { en: "I enforced strict semantic HTML and used lazy loading for images. Conducted regular audits with Lighthouse.", pt: "Impus o uso de HTML semântico e usei carregamento tardio para imagens. Realizei auditorias regulares com o Lighthouse." },
        outcome: { en: "Led to a 30% increase in online donations and solidified my skills in team leadership and performance optimization.", pt: "Resultou em um aumento de 30% nas doações online e solidificou minhas habilidades em liderança de equipe e otimização." }
      }
    },
    {
      id: 4, year: 2022, featured: false,
      title: { en: "Trote Solidário", pt: "Trote Solidário" },
      description: { en: "Full-stack charity donations and events platform for Uni-FACEF.", pt: "Plataforma full-stack de doações e eventos solidários na Uni-FACEF." },
      longDescription: { en: "Led full-stack development of a charity platform for Uni-FACEF's annual initiative, focused on scalability and event management.", pt: "Liderou o desenvolvimento full-stack de uma plataforma solidária para a iniciativa anual da Uni-FACEF." },
      tech: ['React', 'Node.js', 'Full-Stack'],
      image: trotesolidarioImg, demoAsset: placeholderGif, mediaType: 'gif' as const,
      githubLink: "https://github.com/lucasgerbasi", liveLink: null,
      caseStudy: {
        myRole: { en: "Full-Stack Developer", pt: "Desenvolvedor Full-Stack" },
        challenge: { en: "Building a reliable donation and event management platform for a live university initiative.", pt: "Construir uma plataforma confiável de doações para uma iniciativa universitária real." },
        solution: { en: "React front-end with Node.js backend, designed for scalability.", pt: "Front-end React com backend Node.js projetado para escalabilidade." },
        outcome: { en: "Successfully powered the university's annual charity initiative.", pt: "Impulsionou com sucesso a iniciativa anual de caridade da universidade." }
      }
    },
    {
      id: 5, year: 2024, featured: false,
      title: { en: "What You Forgot to Remember", pt: "O Que Você Esqueceu de Lembrar" },
      description: { en: "A minimalist, emotionally evocative web experience that feels like a dream you almost recall.", pt: "Uma experiência web minimalista e emocionalmente evocativa que parece um sonho que você quase lembra." },
      longDescription: { en: "An introspective digital experience that presents random 'memories' with surreal, nostalgic undertones. Limited to 2 memories per day to preserve emotional impact.", pt: "Uma experiência digital introspectiva que apresenta 'memórias' aleatórias com tons surreais. Limitado a 2 memórias por dia para preservar o impacto emocional." },
      tech: ['HTML5', 'CSS3', 'JavaScript', 'html2canvas'],
      image: whatyouforgotImg, demoAsset: placeholderGif, mediaType: 'gif' as const,
      githubLink: "https://github.com/lucasgerbasi/what-you-forgot-to-remember", liveLink: "https://lucasgerbasi.github.io/what-you-forgot-to-remember/",
      caseStudy: {
        myRole: { en: "Solo Developer & Creator", pt: "Desenvolvedor Solo e Criador" },
        challenge: { en: "Creating a reliable 'save-as-image' feature directly in the browser without a backend server.", pt: "Criar uma funcionalidade confiável de 'salvar como imagem' diretamente no navegador sem um servidor backend." },
        solution: { en: "I integrated 'html2canvas' to take screenshots of DOM elements and convert them to downloadable data URLs.", pt: "Integrei a biblioteca 'html2canvas' para tirar screenshots de elementos DOM e convertê-los em URLs de dados para download." },
        outcome: { en: "A unique digital art piece that encourages mindful interaction and creative coding.", pt: "Uma peça de arte digital única que incentiva a interação consciente e a programação criativa." }
      }
    },
    {
      id: 6, year: 2024, featured: false,
      title: { en: "EchoBox", pt: "EchoBox" },
      description: { en: "Anonymous confession and echo system where users submit messages and receive random ones from others.", pt: "Sistema anônimo de confissões onde usuários enviam mensagens e recebem outras aleatórias." },
      longDescription: { en: "A Flask-based anonymous messaging platform that creates connections through shared vulnerability. Fosters empathy while maintaining complete anonymity.", pt: "Uma plataforma de mensagens anônimas baseada em Flask que cria conexões através da vulnerabilidade compartilhada." },
      tech: ['Python', 'Flask', 'SQLite', 'HTML5', 'CSS3'],
      image: echoboxImg, demoAsset: placeholderGif, mediaType: 'gif' as const,
      githubLink: "https://github.com/lucasgerbasi/echobox", liveLink: null,
      caseStudy: {
        myRole: { en: "Full-Stack Developer", pt: "Desenvolvedor Full-Stack" },
        challenge: { en: "Ensuring true user anonymity while preventing spam or malicious use.", pt: "Garantir o anonimato real do usuário e, ao mesmo tempo, prevenir spam ou uso malicioso." },
        solution: { en: "Designed SQLite schema to never store PII and implemented a profanity filter on the backend.", pt: "Projetei o esquema SQLite para nunca armazenar PII e implementei um filtro de palavrões no backend." },
        outcome: { en: "A safe space for anonymous sharing and a great introduction to full-stack development with Python.", pt: "Um espaço seguro para compartilhamento anônimo e uma ótima introdução ao desenvolvimento full-stack com Python." }
      }
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsInView(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleOpenDetails = (project: Project) => { setSelectedProject(project); setIsShowingDemo(false); };
  const handleToggleDemo = () => setIsShowingDemo(p => !p);
  const lang = currentLang as Lang;

  const animStyle = (delay: number): React.CSSProperties => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.45s ease ${delay}ms, transform 0.45s ease ${delay}ms`,
  });

  const FeaturedBadge = () => (
    <div className="absolute top-3 left-3 z-10">
      <span className="text-amber-400 text-[10px] tracking-widest uppercase border border-amber-400/30 px-2 py-0.5 bg-black/60">Featured</span>
    </div>
  );

  // Removed the truncation limit entirely as requested
  const TechLine = ({ tech }: { tech: string[] }) => (
    <p className="text-white/30 text-[11px] leading-relaxed">
      {tech.join(' · ')}
    </p>
  );

  const CardLinks = ({ project }: { project: any }) => (
    <div className="flex items-center gap-3 pt-2.5 border-t border-white/[0.06] mt-auto">
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
        onClick={(e: React.MouseEvent) => { e.stopPropagation(); handleTrack(`Clicked GitHub (Card): ${project.title.en}`); }}
        className="text-white/25 text-[11px] hover:text-amber-400 transition-colors uppercase tracking-wider">GitHub ↗</a>
      {project.liveLink && (
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          className="text-white/25 text-[11px] hover:text-amber-400 transition-colors uppercase tracking-wider">Live ↗</a>
      )}
      {project.caseStudyLink && (
        <a href={project.caseStudyLink} target="_blank" rel="noopener noreferrer"
          onClick={(e: React.MouseEvent) => { e.stopPropagation(); handleTrack(`Clicked Case Study (Card): ${project.title.en}`); }}
          className="text-white/25 text-[11px] hover:text-amber-400 transition-colors uppercase tracking-wider">Case Study ↗</a>
      )}
      <span className="ml-auto text-white/10 text-[11px] group-hover:text-amber-400/50 transition-colors">→</span>
    </div>
  );

  const topProjects = projects.slice(0, 4);
  const restProjects = projects.slice(4);

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.03),transparent_70%)]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-light">03 / Projects</span>
            <span className="flex-1 h-px bg-white/10 max-w-xs" />
          </div>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">
              {currentLang === 'en' ? 'My Work' : 'Meu Trabalho'}
            </h2>
            <p className="text-white/25 text-sm max-w-xs text-right">
              {currentLang === 'en' ? 'A collection of projects built with intention.' : 'Uma coleção de projetos construídos com intenção.'}
            </p>
          </div>
        </motion.div>

        {/* ── TOP GRID ── 3 Cols, 2 Rows ───────── */}
        <div
          className="mb-3 hidden lg:grid gap-3"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            // Changed strictly fixed rows to minmax to allow content (like untruncated tags/desc) to flow without clipping
            gridTemplateRows: 'minmax(280px, auto) minmax(280px, auto)',
          }}
        >
          {/* 1. LocalVault (Col 1, Row 1-2) */}
          <div
            className="group cursor-pointer overflow-hidden bg-[#141414] border border-white/5 hover:border-amber-400/25 transition-all duration-500 flex flex-col col-span-1 row-span-2"
            style={{ ...animStyle(60) }}
            onClick={() => handleOpenDetails(topProjects[0] as Project)}
          >
            <div className="relative overflow-hidden" style={{ flex: '1 1 0', minHeight: 0 }}>
              <img src={topProjects[0].image} alt={topProjects[0].title[lang]}
                className="w-full h-full object-cover opacity-55 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/10 to-transparent" />
              <FeaturedBadge />
            </div>
            <div className="p-6 flex flex-col gap-2 flex-shrink-0">
              <div className="flex items-baseline justify-between">
                <h3 className="text-white text-lg font-light group-hover:text-amber-300 transition-colors duration-300">{topProjects[0].title[lang]}</h3>
                <span className="text-white/20 text-xs ml-2">{topProjects[0].year}</span>
              </div>
              <p className="text-white/35 text-sm leading-relaxed">{topProjects[0].description[lang]}</p>
              <TechLine tech={topProjects[0].tech} />
              <CardLinks project={topProjects[0]} />
            </div>
          </div>

          {/* 2. DeadDrop (Col 2-3, Row 1) */}
          <div
            className="group cursor-pointer overflow-hidden bg-[#141414] border border-white/5 hover:border-amber-400/25 transition-all duration-500 flex col-span-2 row-span-1"
            style={{ ...animStyle(120) }}
            onClick={() => handleOpenDetails(topProjects[1] as Project)}
          >
            <div className="relative w-2/5 flex-shrink-0 overflow-hidden">
              <img src={topProjects[1].image} alt={topProjects[1].title[lang]}
                className="w-full h-full object-cover opacity-55 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#141414]" />
              <FeaturedBadge />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-center gap-2">
              <div className="flex items-baseline justify-between">
                <h3 className="text-white text-xl font-light group-hover:text-amber-300 transition-colors duration-300">{topProjects[1].title[lang]}</h3>
                <span className="text-white/20 text-xs ml-3">{topProjects[1].year}</span>
              </div>
              <p className="text-white/35 text-sm leading-relaxed">{topProjects[1].description[lang]}</p>
              <TechLine tech={topProjects[1].tech} />
              <CardLinks project={topProjects[1]} />
            </div>
          </div>

          {/* 3. Lumen (Col 2, Row 2) */}
          <div
            className="group cursor-pointer overflow-hidden bg-[#141414] border border-white/5 hover:border-amber-400/25 transition-all duration-500 flex flex-col col-span-1 row-span-1"
            style={{ ...animStyle(180) }}
            onClick={() => handleOpenDetails(topProjects[2] as Project)}
          >
            <div className="relative h-36 overflow-hidden flex-shrink-0">
              <img src={topProjects[2].image} alt={topProjects[2].title[lang]}
                className="w-full h-full object-cover opacity-55 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />
            </div>
            <div className="p-5 flex flex-col gap-1.5 flex-grow">
              <div className="flex items-baseline justify-between">
                <h3 className="text-white/80 text-base font-light group-hover:text-amber-300 transition-colors duration-300">{topProjects[2].title[lang]}</h3>
                <span className="text-white/20 text-xs">{topProjects[2].year}</span>
              </div>
              <p className="text-white/35 text-xs leading-relaxed">{topProjects[2].description[lang]}</p>
              <TechLine tech={topProjects[2].tech} />
              <CardLinks project={topProjects[2]} />
            </div>
          </div>

          {/* 4. Memento (Col 3, Row 2) */}
          <div
            className="group cursor-pointer overflow-hidden bg-[#141414] border border-white/5 hover:border-amber-400/25 transition-all duration-500 flex flex-col col-span-1 row-span-1"
            style={{ ...animStyle(240) }}
            onClick={() => handleOpenDetails(topProjects[3] as Project)}
          >
            <div className="relative h-36 overflow-hidden flex-shrink-0">
              <img src={topProjects[3].image} alt={topProjects[3].title[lang]}
                className="w-full h-full object-cover opacity-55 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />
            </div>
            <div className="p-5 flex flex-col gap-1.5 flex-grow">
              <div className="flex items-baseline justify-between">
                <h3 className="text-white/80 text-base font-light group-hover:text-amber-300 transition-colors duration-300">{topProjects[3].title[lang]}</h3>
                <span className="text-white/20 text-xs">{topProjects[3].year}</span>
              </div>
              <p className="text-white/35 text-xs leading-relaxed">{topProjects[3].description[lang]}</p>
              <TechLine tech={topProjects[3].tech} />
              <CardLinks project={topProjects[3]} />
            </div>
          </div>
        </div>

        {/* Mobile top grid — stacked */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          {topProjects.map((project, i) => (
            <div key={project.id} className="group cursor-pointer overflow-hidden bg-[#141414] border border-white/5 hover:border-amber-400/25 transition-all duration-500 flex flex-col"
              style={animStyle(i * 60)} onClick={() => handleOpenDetails(project as Project)}>
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img src={project.image} alt={project.title[lang]} className="w-full h-full object-cover opacity-55 group-hover:opacity-75 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
                {i < 2 && <FeaturedBadge />}
              </div>
              <div className="p-5 flex flex-col gap-2 flex-grow">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-white text-base font-light group-hover:text-amber-300 transition-colors">{project.title[lang]}</h3>
                  <span className="text-white/20 text-xs">{project.year}</span>
                </div>
                <p className="text-white/35 text-xs leading-relaxed">{project.description[lang]}</p>
                <TechLine tech={project.tech} />
                <CardLinks project={project} />
              </div>
            </div>
          ))}
        </div>

        {/* ── REST — equal boxes ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {restProjects.map((project, i) => (
            <div
              key={project.id}
              className="group cursor-pointer overflow-hidden bg-[#141414] border border-white/5 hover:border-amber-400/20 transition-all duration-500 flex flex-col"
              style={animStyle(300 + i * 60)}
              onClick={() => handleOpenDetails(project as Project)}
            >
              <div className="relative h-40 overflow-hidden flex-shrink-0">
                <img src={project.image} alt={project.title[lang]}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />
              </div>
              <div className="p-4 flex flex-col gap-1.5 flex-grow">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-white/70 text-sm font-light group-hover:text-white transition-colors duration-300">{project.title[lang]}</h3>
                  <span className="text-white/20 text-xs">{project.year}</span>
                </div>
                <p className="text-white/30 text-xs leading-relaxed">{project.description[lang]}</p>
                <TechLine tech={project.tech} />
                <CardLinks project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MODAL ─────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 16 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-[#111111] border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                {isShowingDemo
                  ? selectedProject.mediaType === 'video'
                    ? <video src={selectedProject.demoAsset} autoPlay loop muted playsInline className="w-full h-auto max-h-80 object-contain bg-black" key={selectedProject.id} />
                    : <img src={selectedProject.demoAsset} alt="Demo" className="w-full h-auto max-h-80 object-contain bg-black" />
                  : <img src={selectedProject.image} alt={selectedProject.title[lang]} className="w-full h-64 object-cover opacity-60" />
                }
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none" />
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors p-1 z-10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-white text-2xl font-light tracking-wide">{selectedProject.title[lang]}</h3>
                  <span className="text-white/20 text-sm">{selectedProject.year}</span>
                </div>
                <p className="text-white/45 text-sm leading-relaxed mb-8">{selectedProject.longDescription[lang]}</p>
                <div className="space-y-4">
                  {[
                    { label: currentLang === 'en' ? 'My Contribution' : 'Minha Contribuição', value: selectedProject.caseStudy.myRole[lang], accent: false },
                    { label: currentLang === 'en' ? 'Key Challenge' : 'Principal Desafio', value: selectedProject.caseStudy.challenge[lang], accent: false },
                    { label: currentLang === 'en' ? 'My Solution' : 'Minha Solução', value: selectedProject.caseStudy.solution[lang], accent: false },
                    { label: currentLang === 'en' ? 'Outcome & Learnings' : 'Resultado e Aprendizados', value: selectedProject.caseStudy.outcome[lang], accent: true },
                  ].map((item, i) => (
                    <div key={i} className={`p-4 border ${item.accent ? 'border-amber-400/20 bg-amber-400/5' : 'border-white/5 bg-white/[0.02]'}`}>
                      <div className={`text-xs tracking-widest uppercase mb-1.5 ${item.accent ? 'text-amber-400/60' : 'text-white/20'}`}>{item.label}</div>
                      <p className={`text-sm leading-relaxed ${item.accent ? 'text-white/55' : 'text-white/40'}`}>{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-6">
                  {selectedProject.tech.map((t: string, i: number) => (
                    <span key={i} className="text-white/30 text-xs bg-white/5 px-2 py-1">{t}</span>
                  ))}
                </div>
              </div>

              <div className="px-8 pb-8 flex gap-3 flex-wrap border-t border-white/5 pt-6">
                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer"
                  onClick={() => handleTrack(`Clicked GitHub (Modal): ${selectedProject.title.en}`)}
                  className="px-5 py-2.5 text-sm text-white border border-white/15 hover:border-amber-400/50 hover:text-amber-300 transition-all duration-300 tracking-wider">
                  GitHub ↗
                </a>
                {selectedProject.liveLink && (
                  <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer"
                    className="px-5 py-2.5 text-sm text-black bg-amber-400 hover:bg-amber-300 transition-all duration-300 tracking-wider font-medium">
                    {currentLang === 'en' ? 'Live Demo ↗' : 'Demo ao Vivo ↗'}
                  </a>
                )}
                {selectedProject.caseStudyLink && (
                  <a href={selectedProject.caseStudyLink} target="_blank" rel="noopener noreferrer"
                    onClick={() => handleTrack(`Clicked Case Study (Modal): ${selectedProject.title.en}`)}
                    className="px-5 py-2.5 text-sm text-white border border-white/15 hover:border-amber-400/50 hover:text-amber-300 transition-all duration-300 tracking-wider">
                    {currentLang === 'en' ? 'Case Study ↗' : 'Estudo de Caso ↗'}
                  </a>
                )}
                <button onClick={handleToggleDemo}
                  className="px-5 py-2.5 text-sm text-white/35 border border-white/8 hover:border-white/20 hover:text-white/60 transition-all duration-300 tracking-wider">
                  {isShowingDemo ? (currentLang === 'en' ? 'Static Image' : 'Imagem') : (currentLang === 'en' ? 'Show Demo' : 'Ver Demo')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}