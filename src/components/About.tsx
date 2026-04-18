import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';

import resumeEN from '../assets/pdf/CV - Lucas Gerbasi - English.pdf';
import resumePT from '../assets/pdf/CV - Lucas Gerbasi.pdf';

const useIntersectionObserver = <T extends HTMLElement = HTMLElement>(options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    let hasIntersected = false;
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasIntersected) {
        setIsIntersecting(true);
        hasIntersected = true;
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isIntersecting] as const;
};

type SkillBadgeProps = { skill: string; index: number; isVisible: boolean; };
const SkillBadge: React.FC<SkillBadgeProps> = React.memo(({ skill, index, isVisible }) => (
  <div
    className={`
      border border-white/10 text-white/70 px-3 py-1.5 text-xs tracking-wider uppercase font-light
      transition-all duration-700 hover:border-amber-400/60 hover:text-amber-300 cursor-default
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
    `}
    style={{ transitionDelay: `${index * 40}ms` }}
  >
    {skill}
  </div>
));

type Experience = { role: string; company: string; period: string; description: string; };
type TimelineItemProps = { exp: Experience; index: number; isVisible: boolean; };

const TimelineItem: React.FC<TimelineItemProps> = React.memo(({ exp, index, isVisible }) => (
  <div
    className={`relative pl-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    {/* Amber dot */}
    <span className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
    {/* Vertical line */}
    <span className="absolute left-[3px] top-4 bottom-0 w-px bg-white/10" />

    <div className="pb-8">
      <div className="flex flex-wrap items-baseline gap-2 mb-1">
        <span className="text-white font-medium">{exp.role}</span>
        <span className="text-amber-400/80 text-sm">@ {exp.company}</span>
      </div>
      <div className="text-white/30 text-xs tracking-widest uppercase mb-2">{exp.period}</div>
      <p className="text-white/50 text-sm leading-relaxed">{exp.description}</p>
    </div>
  </div>
));

export default function About() {
  const { currentLang, toggleLanguage } = useLanguage();
  const [headerRef, headerVisible] = useIntersectionObserver<HTMLDivElement>();
  const [skillsRef, skillsVisible] = useIntersectionObserver<HTMLElement>();
  const [experienceRef, experienceVisible] = useIntersectionObserver<HTMLElement>();

  type Lang = "en" | "pt";
  type Content = {
    [key in Lang]: {
      title: string;
      text: string;
      tabs: { skills: string; education: string; experience: string; };
      education: { degree: string; institution: string; period: string; }[];
      experience: { role: string; company: string; period: string; description: string; }[];
    }
  };

  const content = useMemo<Content>(() => ({
    en: {
      title: "About Me",
      text: `I'm a software engineer who builds practical, secure, and user-centric applications from the ground up. My journey in tech is driven by a simple principle: if I can't find the right tool for a job, I'll build it myself, a philosophy that led to the creation of projects like LocalVault and DeadDrop.\n\nWith a strong foundation in Computer Science, I specialize in full-stack development with a deep focus on security architecture and applied cryptography. I am passionate about creating zero-knowledge systems that empower users by giving them complete control over their data. I thrive on architecting complex, scalable solutions and am constantly exploring new technologies to build robust and meaningful software. I am fluent in English and thrive in collaborative, international environments.`,
      tabs: { skills: "Skills & Technologies", education: "Education", experience: "Professional Experience" },
      education: [{ degree: "Bachelor's in Computer Science", institution: "Uni-FACEF", period: "2022 - Present" }],
      experience: [
        { role: "Freelance Web Developer", company: "Self-employed", period: "Feb 2022 – Present", description: "Development of responsive websites for small businesses using modern technologies. Direct client communication for feedback, iteration, and continuous improvement with focus on user experience and performance optimization." },
        { role: "Front-end Developer", company: "Instituto João de Barro", period: "2023", description: "Designed and implemented the front-end of a nonprofit organization's website using React. Focused on responsive layout, accessibility, user-friendly interface, and seamless integration with backend services." },
        { role: "Digital Operations Lead", company: "Online Community (35k+ members)", period: "Jun 2018 – Dec 2022", description: "Coordinated internal workflows, user support, and digital engagement strategies. Collaborated with leadership to improve systems and community experience while managing large-scale user interactions." },
        { role: "Web Developer", company: "Trote Solidário (Uni-FACEF)", period: "2022", description: "Led the development of a comprehensive web platform to manage charitable donations and events. Responsible for full-stack development, ensuring scalability, functionality, and exceptional user experience." }
      ]
    },
    pt: {
      title: "Sobre Mim",
      text: `Sou um engenheiro de software que constrói aplicações práticas, seguras e centradas no usuário do zero. Minha jornada em tecnologia é guiada por um princípio simples: se não encontro a ferramenta certa, eu mesmo a construo, uma filosofia que levou à criação de projetos como o LocalVault e o DeadDrop.\n\nCom uma base sólida em Ciência da Computação, sou especialista em desenvolvimento full-stack com um foco profundo em arquitetura de segurança e criptografia aplicada. Sou apaixonado por criar sistemas de 'conhecimento-zero' (zero-knowledge) que empoderam os usuários, dando-lhes controle total sobre seus dados. Gosto de arquitetar soluções complexas e escaláveis e estou constantemente explorando novas tecnologias para construir software robusto e significativo. Possuo comunicação fluente em inglês e prospero em ambientes colaborativos e internacionais.`,
      tabs: { skills: "Habilidades & Tecnologias", education: "Educação", experience: "Experiência Profissional" },
      education: [{ degree: "Bacharelado em Ciência da Computação", institution: "Uni-FACEF", period: "2022 - Presente" }],
      experience: [
        { role: "Desenvolvedor Web Freelancer", company: "Autônomo", period: "Fevereiro 2022 – Presente", description: "Criação de sites responsivos para pequenos negócios utilizando tecnologias modernas. Comunicação direta com clientes para ajustes e melhorias contínuas com foco em experiência do usuário e otimização de performance." },
        { role: "Desenvolvedor Front-end", company: "Instituto João de Barro", period: "2023", description: "Projetei e desenvolvi o front-end do site de uma organização sem fins lucrativos utilizando React. Enfoque em layout responsivo, acessibilidade, interface intuitiva e integração fluida com o backend." },
        { role: "Líder de Operações Digitais", company: "Comunidade Online (35 mil+ membros)", period: "Junho 2018 – Dezembro 2022", description: "Coordenação de fluxos internos, suporte a usuários e estratégias de engajamento digital. Colaboração com a liderança para melhorar sistemas e a experiência da comunidade gerenciando interações em larga escala." },
        { role: "Desenvolvedor Web", company: "Trote Solidário (Uni-FACEF)", period: "2022", description: "Liderei o desenvolvimento de uma plataforma web abrangente para gerenciamento de doações e eventos solidários. Responsável pelo desenvolvimento full-stack, garantindo escalabilidade, funcionalidade e experiência excepcional do usuário." }
      ]
    }
  }), []);

  const skills = useMemo(() => {
    // Ordered by: Languages -> Frameworks -> Tools/Cloud -> Concepts
    return currentLang === "en"
      ? [
          "Python", "Node.js", "TypeScript", "C#", "SQL", "Dart", "GDScript", "HTML5 & CSS3",
          "FastAPI", "Electron.js", "React.js", "Flutter", "Tailwind CSS",
          "AWS", "LangChain", "Firebase", "Godot Engine", "Git & GitHub",
          "Cryptography", "Security Architecture", "REST APIs", "RAG Systems", "Data-Driven Design", "Mobile Development", "Prompt Engineering", "Agile Methodologies", "UI/UX Design"
        ]
      : [
          "Python", "Node.js", "TypeScript", "C#", "SQL", "Dart", "GDScript", "HTML5 & CSS3",
          "FastAPI", "Electron.js", "React.js", "Flutter", "Tailwind CSS",
          "AWS", "LangChain", "Firebase", "Godot Engine", "Git & GitHub",
          "Criptografia", "Arquitetura de Segurança", "APIs REST", "Sistemas RAG", "Orientado a Dados", "Desenvolvimento Mobile", "Eng. de Prompt", "Métodos Ágeis", "UI/UX Design"
        ];
  }, [currentLang]);

  return (
    <section id="about" className="py-32 px-6 min-h-screen bg-[#0d0d0d] relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.04),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(251,191,36,0.03),transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div ref={headerRef} className="mb-20">
          <div className={`flex items-center gap-4 mb-4 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-light">02 / About</span>
            <span className="flex-1 h-px bg-white/10 max-w-xs" />
          </div>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className={`text-5xl md:text-6xl font-light text-white tracking-tight transition-all duration-1000 delay-100 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {content[currentLang].title}
            </h2>
            {/* Language toggle */}
            <div className={`flex border border-white/10 transition-all duration-700 delay-200 ${headerVisible ? 'opacity-100' : 'opacity-0'}`}>
              {["en", "pt"].map((lang) => (
                <button
                  key={lang}
                  onClick={toggleLanguage}
                  className={`px-5 py-2 text-xs tracking-widest uppercase font-light transition-all duration-300 ${
                    currentLang === lang ? "bg-amber-400 text-black" : "text-white/40 hover:text-white"
                  }`}
                >
                  {lang === "en" ? "English" : "Português"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">

          {/* LEFT — Info column */}
          <aside className={`transition-all duration-700 delay-300 ${headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            {/* Contact info */}
            <div className="space-y-6 mb-10">
              {[
                { label: "Email", value: "lucas.gerbasi1@gmail.com" },
                { label: "Location", value: "Franca, Brazil" },
                { label: "GitHub", value: "github.com/lucasgerbasi", link: "https://github.com/lucasgerbasi" },
                { label: "LinkedIn", value: "linkedin.com/in/lucas-gerbasi", link: "https://www.linkedin.com/in/lucas-gerbasi/" }
              ].map((item, i) => (
                <div key={i} style={{ transitionDelay: `${400 + i * 80}ms` }} className={`transition-all duration-500 ${headerVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="text-white/25 text-xs tracking-[0.3em] uppercase mb-1">{item.label}</div>
                  {item.link ? (
                    <a href={item.link} className="text-white/70 text-sm hover:text-amber-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">{item.value}</a>
                  ) : (
                    <p className="text-white/70 text-sm">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="h-px bg-white/10 mb-10" />

            {/* Resume */}
            <a
              href={currentLang === "en" ? resumeEN : resumePT}
              download={currentLang === "en" ? "CV - Lucas Gerbasi - English.pdf" : "CV - Lucas Gerbasi.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group text-sm text-white/60 hover:text-white transition-colors duration-300"
            >
              <span className="w-8 h-px bg-white/30 group-hover:w-12 group-hover:bg-amber-400 transition-all duration-300" />
              {currentLang === "en" ? "Download Resume" : "Baixar Currículo"}
              <svg className="w-4 h-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </aside>

          {/* RIGHT — Content column */}
          <main className="space-y-16">
            {/* Bio */}
            <section className={`transition-all duration-700 delay-400 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {content[currentLang].text.split('\n\n').map((para, i) => (
                <p key={i} className="text-white/60 leading-relaxed text-base mb-4 last:mb-0">{para}</p>
              ))}
            </section>

            {/* Education */}
            <section className={`transition-all duration-700 delay-500 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-light">{content[currentLang].tabs.education}</span>
                <span className="flex-1 h-px bg-white/10" />
              </div>
              {content[currentLang].education.map((edu, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">{edu.degree}</span>
                    <span className="text-white/40 text-sm"> — {edu.institution}</span>
                    <div className="text-white/25 text-xs tracking-widest uppercase mt-0.5">{edu.period}</div>
                  </div>
                </div>
              ))}
            </section>

            {/* Skills */}
            <section ref={skillsRef as React.RefObject<HTMLElement>}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-light">{content[currentLang].tabs.skills}</span>
                <span className="flex-1 h-px bg-white/10" />
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} index={index} isVisible={skillsVisible} />
                ))}
              </div>
            </section>

            {/* Experience */}
            <section ref={experienceRef as React.RefObject<HTMLElement>}>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-light">{content[currentLang].tabs.experience}</span>
                <span className="flex-1 h-px bg-white/10" />
              </div>
              <div>
                {content[currentLang].experience.map((exp, index) => (
                  <TimelineItem key={index} exp={exp} index={index} isVisible={experienceVisible as boolean} />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </section>
  );
}