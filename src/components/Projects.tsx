import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

import localvaultImg from '../assets/images/localvaultlogo.jpg';
import deaddropImg from '../assets/images/deaddrop_logo.png';
import lumenImg from '../assets/images/lumenlogo.png';
import buyorwaitImg from '../assets/images/buyorwait.png';
import hyakkiImg from '../assets/images/hyakki.png';
import ijbprojetoImg from '../assets/images/ijbprojeto.jpg';
import whatyouforgotImg from '../assets/images/whatyouforgot.png';

import placeholderGif from '../assets/images/placeholder.gif';
import localvaultGif from '../assets/videos/localvault.gif';
import hyakkiGif from '../assets/videos/hyakkigif1.gif';
import lumenWebM from '../assets/images/placeholder.gif';

export default function Projects() {
  const { currentLang } = useLanguage();
  type Lang = 'en' | 'pt';
  type Project = typeof projects[number] & { caseStudyLink?: string };
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isShowingDemo, setIsShowingDemo] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

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
      hasDemo: true,
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
      hasDemo: false,
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
      id: 8, year: 2026, featured: true,
      title: { en: "Lumen", pt: "Lumen" },
      description: { en: "A fully local RAG engine for secure document and repository querying.", pt: "Um motor RAG totalmente local para consulta segura de documentos e repositórios." },
      longDescription: { en: "Lumen is a fully local RAG (Retrieval-Augmented Generation) application designed to help you query your documents securely. By ingesting PDFs and GitHub repositories, Lumen allows you to ask questions in plain English and receive answers grounded strictly in your own data, without any information ever leaving your machine.", pt: "Lumen é uma aplicação RAG (Retrieval-Augmented Generation) totalmente local projetada para ajudar você a consultar seus documentos com segurança. Ao ingerir PDFs e repositórios GitHub, o Lumen permite que você faça perguntas em linguagem natural e receba respostas baseadas estritamente em seus próprios dados, sem que nenhuma informação saia da sua máquina." },
      tech: ['FastAPI', 'Ollama', 'FAISS', 'Python', 'LangChain'],
      image: lumenImg, demoAsset: lumenWebM, mediaType: 'video' as const,
      hasDemo: false,
      githubLink: "https://github.com/lucasgerbasi/Lumen", liveLink: null,
      caseStudy: {
        myRole: { en: "Solo Backend Developer & AI Integrator", pt: "Desenvolvedor Backend Solo e Integrador de IA" },
        challenge: { en: "Designing a high-performance RAG pipeline that runs entirely on consumer hardware without cloud dependencies, managing model swapping and vector memory efficiently.", pt: "Projetar um pipeline RAG de alto desempenho que rode inteiramente em hardware doméstico sem dependências de nuvem, gerenciando a troca de modelos e memória vetorial de forma eficiente." },
        solution: { en: "I integrated Ollama for local LLM and embedding inference, using FAISS for lightning-fast in-memory similarity search and FastAPI for a streaming response architecture.", pt: "Integrei o Ollama para LLM local e inferência de embeddings, usando FAISS para busca de similaridade ultra-rápida em memória e FastAPI para uma arquitetura de resposta por streaming." },
        outcome: { en: "A modular, privacy-focused knowledge engine that enables technical documentation analysis without privacy leaks.", pt: "Um motor de conhecimento modular focado em privacidade que permite a análise de documentação técnica sem vazamentos de dados." }
      }
    },
    {
      id: 9, year: 2026, featured: true,
      title: { en: "Buy or Wait", pt: "Buy or Wait" },
      description: { en: "A mobile app that tracks game prices across official stores and sends background notifications for historical lows.", pt: "Um aplicativo móvel que rastreia preços de jogos em lojas oficiais e envia notificações automáticas em segundo plano para mínimas históricas." },
      longDescription: { en: "Built with Flutter and Firebase, this app consumes multiple APIs (Steam, GG.deals) to track game prices across curated official stores. It utilizes background workers to check for historical low prices every 24 hours and sends local notifications to the user, ensuring they never miss a deal while avoiding shady key resellers.", pt: "Desenvolvido com Flutter e Firebase, este app consome múltiplas APIs (Steam, GG.deals) para rastrear preços de jogos em lojas oficiais curadas. Ele utiliza background workers para checar mínimas históricas a cada 24 horas e envia notificações locais ao usuário, garantindo que ele nunca perca uma promoção enquanto evita revendedores obscuros." },
      tech: ['Flutter', 'Dart', 'Firebase', 'APIs'],
      image: buyorwaitImg, demoAsset: placeholderGif, mediaType: 'gif' as const,
      hasDemo: false,
      githubLink: "https://github.com/lucasgerbasi/BuyOrWait", liveLink: "https://github.com/lucasgerbasi/BuyOrWait/releases/tag/1.0",
      caseStudy: {
        myRole: { en: "Solo Mobile Developer", pt: "Desenvolvedor Mobile Solo" },
        challenge: { en: "Running reliable background tasks on mobile devices to check multiple APIs without draining battery, and cross-referencing Steam IDs with a curated list of official stores.", pt: "Rodar tarefas em segundo plano de forma confiável em dispositivos móveis para checar múltiplas APIs sem drenar a bateria, e cruzar IDs da Steam com uma lista curada de lojas oficiais." },
        solution: { en: "Implemented the `workmanager` package for efficient background execution and utilized Firebase Anonymous Authentication with Cloud Firestore to sync user wishlists securely without requiring complex login flows.", pt: "Implementei o pacote `workmanager` para execução eficiente em segundo plano e utilizei o Firebase Anonymous Authentication com Cloud Firestore para sincronizar listas de desejos de forma segura sem exigir fluxos complexos de login." },
        outcome: { en: "A fully functional, cross-platform mobile utility that provides genuine value to gamers by filtering out gray-market noise and focusing on legitimate, historical-low deals.", pt: "Um utilitário móvel multiplataforma totalmente funcional que fornece valor real aos gamers, filtrando o ruído do mercado cinza e focando em ofertas legítimas de mínimas históricas." }
      }
    },
    {
      id: 10, year: 2025, featured: false,
      title: { en: "HYAKKI", pt: "HYAKKI" },
      description: { en: "A snake-like action roguelite featuring infinite scaling and a custom \"constriction\" AoE mechanic.", pt: "Um action roguelite estilo 'snake' focado em escala infinita e mecânicas de área de efeito." },
      longDescription: { en: "HYAKKI is a snake-like action roguelite set in a world of Japanese folklore. Instead of wielding weapons, you are the parade itself. Players must slither through hordes of enemies, creating complete loops with their body to trigger massive area-of-effect \"constriction\" attacks. The public demo achieved a highly successful 50% view-to-play conversion rate on itch.io.", pt: "HYAKKI é um action roguelite estilo snake ambientado no folclore japonês. Em vez de empunhar armas, você é o próprio desfile. Os jogadores devem rastejar por hordas de inimigos, criando loops completos com seus corpos para ativar ataques massivos de \"constrição\" em área. A demo pública alcançou uma taxa de conversão (view-to-play) altamente bem-sucedida de 50% no itch.io." },
      tech: ['Godot 4', 'GDScript', 'Game Design', 'Data-Driven'],
      image: hyakkiImg, demoAsset: hyakkiGif, mediaType: 'gif' as const,
      hasDemo: true,
      githubLink: null, liveLink: "https://lugerp.itch.io/hyakki",
      caseStudy: {
        myRole: { en: "Solo Indie Developer & Game Designer", pt: "Desenvolvedor Indie Solo e Game Designer" },
        challenge: { en: "Designing a unique, satisfying core loop that combines the classic movement of \"Snake\" with the high-intensity, infinite-scaling combat of modern action roguelites.", pt: "Projetar um loop principal único e satisfatório que combina o movimento clássico de \"Snake\" com o combate de alta intensidade e escala infinita dos action roguelites modernos." },
        solution: { en: "Engineered a custom polygon-intersection algorithm to detect when the player's tail loops over itself, calculating the area and applying massive damage to all entities caught inside, heavily rewarding precise movement.", pt: "Criei um algoritmo customizado de interseção de polígonos para detectar quando a cauda do jogador cruza sobre si mesma, calculando a área e aplicando dano massivo a todas as entidades presas dentro, recompensando fortemente a movimentação precisa." },
        outcome: { en: "Successfully shipped a playable, highly engaging demo that resonated strongly with players, validating the core mechanics through excellent conversion metrics.", pt: "Lancei com sucesso uma demo jogável e altamente envolvente que ressoou fortemente com os jogadores, validando as mecânicas principais por meio de excelentes métricas de conversão." }
      }
    },
    {
      id: 3, year: 2023, featured: false,
      title: { en: "IJB Website", pt: "Site IJB" },
      description: { en: "Built a fundraising platform for a home-renovation nonprofit. Led front-end development using React.", pt: "Construí uma plataforma de captação para uma ONG que reforma casas. Liderei o front-end com React." },
      longDescription: { en: "Designed and implemented the front-end for Instituto João de Barro's fundraising platform. Focused on building a robust, accessible, and performant user interface to support the NGO's mission of renovating homes.", pt: "Projetei e implementei o front-end da plataforma de captação do Instituto João de Barro. Foco em construir uma interface robusta, acessível e de alto desempenho para apoiar a missão da ONG de reformar casas." },
      tech: ['React', 'HTML5', 'CSS3', 'JavaScript'],
      image: ijbprojetoImg, demoAsset: placeholderGif, mediaType: 'gif' as const,
      hasDemo: false,
      githubLink: "https://github.com/MPasti/instituto-joao-de-barro", liveLink: null,
      caseStudy: {
        myRole: { en: "Front-End Development Lead", pt: "Líder de Desenvolvimento Front-End" },
        challenge: { en: "Ensuring the platform was highly accessible (WCAG guidelines) and performed exceptionally well on low-end devices to maximize outreach.", pt: "Garantir que a plataforma fosse altamente acessível (diretrizes WCAG) e tivesse um excelente desempenho em dispositivos de entrada para maximizar o alcance." },
        solution: { en: "Implemented strict semantic HTML, optimized assets, and integrated SEO best practices. Conducted rigorous testing to meet high performance standards.", pt: "Implementei HTML semântico rigoroso, otimizei assets e integrei boas práticas de SEO. Realizei testes rigorosos para atingir altos padrões de desempenho." },
        outcome: { en: "Successfully deployed the platform, achieving a 96/100 Best Practices score on Lighthouse and establishing a solid foundation for the organization's digital presence.", pt: "Plataforma lançada com sucesso, atingindo a marca de 96/100 em Boas Práticas no Lighthouse e estabelecendo uma base sólida para a presença digital da organização." }
      }
    },
    {
      id: 5, year: 2024, featured: false,
      title: { en: "What You Forgot to Remember", pt: "O Que Você Esqueceu de Lembrar" },
      description: { en: "A minimalist, emotionally evocative web experience that feels like a dream you almost recall.", pt: "Uma experiência web minimalista e emocionalmente evocativa que parece um sonho que você quase lembra." },
      longDescription: { en: "An introspective digital experience that presents random 'memories' with surreal, nostalgic undertones. Limited to 2 memories per day to preserve emotional impact.", pt: "Uma experiência digital introspectiva que apresenta 'memórias' aleatórias com tons surreais. Limitado a 2 memórias por dia para preservar o impacto emocional." },
      tech: ['HTML5', 'CSS3', 'JavaScript', 'html2canvas'],
      image: whatyouforgotImg, demoAsset: placeholderGif, mediaType: 'gif' as const,
      hasDemo: false,
      githubLink: "https://github.com/lucasgerbasi/what-you-forgot-to-remember", liveLink: "https://lucasgerbasi.github.io/what-you-forgot-to-remember/",
      caseStudy: {
        myRole: { en: "Solo Developer & Creator", pt: "Desenvolvedor Solo e Criador" },
        challenge: { en: "Creating a reliable 'save-as-image' feature directly in the browser without a backend server.", pt: "Criar uma funcionalidade confiável de 'salvar como imagem' diretamente no navegador sem um servidor backend." },
        solution: { en: "I integrated 'html2canvas' to take screenshots of DOM elements and convert them to downloadable data URLs.", pt: "Integrei a biblioteca 'html2canvas' para tirar screenshots de elementos DOM e convertê-los em URLs de dados para download." },
        outcome: { en: "A unique digital art piece that encourages mindful interaction and creative coding.", pt: "Uma peça de arte digital única que incentiva a interação consciente e a programação criativa." }
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsInView(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleOpenDetails = (project: Project) => { 
    setSelectedProject(project); 
    setIsShowingDemo(false); 
  };

  const handleToggleDemo = () => {
    setIsShowingDemo(p => !p);
    
    // Smoothly scroll to the top of the modal after a tiny delay
    // to ensure React has rendered the new image/video tag.
    setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

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

  const TechLine = ({ tech }: { tech: string[] }) => (
    <p className="text-white/30 text-[11px] leading-relaxed">
      {tech.join(' · ')}
    </p>
  );

  const CardLinks = ({ project }: { project: any }) => (
    <div className="flex items-center gap-3 pt-2.5 border-t border-white/[0.06] mt-auto">
      {project.githubLink && (
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
          onClick={(e: React.MouseEvent) => { e.stopPropagation(); handleTrack(`Clicked GitHub (Card): ${project.title.en}`); }}
          className="text-white/25 text-[11px] hover:text-amber-400 transition-colors uppercase tracking-wider">GitHub ↗</a>
      )}
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

          {/* 4. Buy or Wait (Col 3, Row 2) */}
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
              ref={modalRef}
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
                {selectedProject.githubLink && (
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer"
                    onClick={() => handleTrack(`Clicked GitHub (Modal): ${selectedProject.title.en}`)}
                    className="px-5 py-2.5 text-sm text-white border border-white/15 hover:border-amber-400/50 hover:text-amber-300 transition-all duration-300 tracking-wider">
                    GitHub ↗
                  </a>
                )}
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
                {selectedProject.hasDemo && (
                  <button onClick={handleToggleDemo}
                    className="px-5 py-2.5 text-sm text-white/35 border border-white/8 hover:border-white/20 hover:text-white/60 transition-all duration-300 tracking-wider">
                    {isShowingDemo ? (currentLang === 'en' ? 'Static Image' : 'Imagem') : (currentLang === 'en' ? 'Show Demo' : 'Ver Demo')}
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}