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


type SkillBadgeProps = {
  skill: string;
  index: number;
  isVisible: boolean;
};

const SkillBadge: React.FC<SkillBadgeProps> = React.memo(({ skill, index, isVisible }) => (
  <div
    className={`
      bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg
      transform transition-all duration-700 hover:scale-110 hover:shadow-xl cursor-pointer
      flex items-center justify-center will-change-transform
      ${isVisible 
        ? 'translate-y-0 opacity-100' 
        : 'translate-y-4 opacity-0'
      }
    `}
    style={{ 
      transitionDelay: `${index * 100}ms`
    }}
  >
    <span className="whitespace-nowrap">{skill}</span>
  </div>
));


type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

type TimelineItemProps = {
  exp: Experience;
  index: number;
  isVisible: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = React.memo(({ exp, index, isVisible }) => (
  <div
    className={`
      relative transform transition-all duration-800 hover:scale-[1.02] will-change-transform
      ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
    `}
    style={{ transitionDelay: `${index * 200}ms` }}
  >
    <div className="absolute -left-4 top-2 w-4 h-4 bg-blue-600 border-4 border-white rounded-full shadow-lg"></div>
    <div className="ml-2 bg-white/80 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
      <div className="font-bold text-lg text-blue-700">
        {exp.role}
      </div>
      <div className="text-blue-700 font-semibold">{exp.company}</div>
      <div className="text-gray-500 text-sm mb-2">{exp.period}</div>
      <div className="text-gray-700 leading-relaxed">{exp.description}</div>
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
      tabs: {
        skills: string;
        education: string;
        experience: string;
      };
      education: {
        degree: string;
        institution: string;
        period: string;
      }[];
      experience: {
        role: string;
        company: string;
        period: string;
        description: string;
      }[];
    }
  };
  const content = useMemo(() => ({
    en: {
      title: "About Me",
      text: `Software Developer with a strong foundation in Computer Science from UNI-FACEF, combining theoretical knowledge with extensive hands-on experience building digital solutions. As a self-taught professional, I am driven by complex problem-solving, continuous learning, and applying creativity to software engineering.

             My experience spans web development and data analysis to digital community management, always with a focus on delivering high-impact products. I am fluent in English and thrive in collaborative, international environments.`,
      tabs: {
        skills: "Skills & Technologies",
        education: "Education",
        experience: "Professional Experience"
      },
      education: [
        {
          degree: "Bachelor's in Computer Science",
          institution: "Uni-FACEF",
          period: "2022 - Present"
        }
      ],
      experience: [
        {
          role: "Freelance Web Developer",
          company: "Self-employed",
          period: "Feb 2022 – Present",
          description: "Development of responsive websites for small businesses using modern technologies. Direct client communication for feedback, iteration, and continuous improvement with focus on user experience and performance optimization."
        },
        {
          role: "Front-end Developer",
          company: "Instituto João de Barro",
          period: "2023",
          description: "Designed and implemented the front-end of a nonprofit organization's website using React. Focused on responsive layout, accessibility, user-friendly interface, and seamless integration with backend services."
        },
        {
          role: "Digital Operations Lead",
          company: "Online Community (35k+ members)",
          period: "Jun 2018 – Dec 2022",
          description: "Coordinated internal workflows, user support, and digital engagement strategies. Collaborated with leadership to improve systems and community experience while managing large-scale user interactions."
        },
        {
          role: "Web Developer",
          company: "Trote Solidário (Uni-FACEF)",
          period: "2022",
          description: "Led the development of a comprehensive web platform to manage charitable donations and events. Responsible for full-stack development, ensuring scalability, functionality, and exceptional user experience."
        }
      ]
    },
    pt: {
      title: "Sobre Mim",
      text: `Desenvolvedor de Software com uma base sólida em Ciência da Computação (UNI-FACEF), combinando conhecimento teórico com uma forte experiência prática na construção de soluções digitais. Como um profissional autodidata, sou movido pela resolução de problemas complexos, aprendizado contínuo e pela aplicação de criatividade na engenharia de software.

            Minha experiência abrange desde o desenvolvimento web e análise de dados até a gestão de comunidades digitais, sempre com foco em entregar produtos de alto impacto. Possuo comunicação fluente em inglês e prospero em ambientes colaborativos e internacionais.`,
      tabs: {
        skills: "Habilidades & Tecnologias",
        education: "Educação",
        experience: "Experiência Profissional"
      },
      education: [
        {
          degree: "Bacharelado em Ciência da Computação",
          institution: "Uni-FACEF",
          period: "2022 - Presente"
        }
      ],
      experience: [
        {
          role: "Desenvolvedor Web Freelancer",
          company: "Autônomo",
          period: "Fevereiro 2022 – Presente",
          description: "Criação de sites responsivos para pequenos negócios utilizando tecnologias modernas. Comunicação direta com clientes para ajustes e melhorias contínuas com foco em experiência do usuário e otimização de performance."
        },
        {
          role: "Desenvolvedor Front-end",
          company: "Instituto João de Barro",
          period: "2023",
          description: "Projetei e desenvolvi o front-end do site de uma organização sem fins lucrativos utilizando React. Enfoque em layout responsivo, acessibilidade, interface intuitiva e integração fluida com o backend."
        },
        {
          role: "Líder de Operações Digitais",
          company: "Comunidade Online (35 mil+ membros)",
          period: "Junho 2018 – Dezembro 2022",
          description: "Coordenação de fluxos internos, suporte a usuários e estratégias de engajamento digital. Colaboração com a liderança para melhorar sistemas e a experiência da comunidade gerenciando interações em larga escala."
        },
        {
          role: "Desenvolvedor Web",
          company: "Trote Solidário (Uni-FACEF)",
          period: "2022",
          description: "Liderei o desenvolvimento de uma plataforma web abrangente para gerenciamento de doações e eventos solidários. Responsável pelo desenvolvimento full-stack, garantindo escalabilidade, funcionalidade e experiência excepcional do usuário."
        }
      ]
    }
  }), []);

  const skills = useMemo(() => {
    return currentLang === "en"
      ? [
          "React.js", "TypeScript", "JavaScript ES6+", "HTML5 & CSS3", "Node.js", "Python", "SQL",
          "Electron.js", "Godot Engine", "GDScript", "Game Design", "Data-Driven Design",
          "Git & GitHub", "Tailwind CSS", "API Integration", "Agile Methodologies", "UI/UX Design",
          "Cryptography", "Security Principles", "Responsive Design", "Performance", "Problem Solving", "Data Analysis", "Prompt Engineering"
        ]
      : [
          "React.js", "TypeScript", "JavaScript ES6+", "HTML5 & CSS3", "Node.js", "Python", "SQL",
          "Electron.js", "Godot Engine", "GDScript", "Design de Jogos", "Orientado a Dados",
          "Git & GitHub", "Tailwind CSS", "Integração de APIs", "Métodos Ágeis", "UI/UX Design",
          "Criptografia", "Segurança", "Design Responsivo", "Performance", "Lógica & Debugging", "Análise de Dados", "Eng. de Prompt"
        ];
  }, [currentLang]);

  return (
  <section id="about" className="py-24 px-4 min-h-screen relative overflow-hidden bg-blue-50">
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className={`
        text-6xl font-bold mb-6 text-blue-700
        transform transition-all duration-1000 will-change-transform
        ${headerVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}
          `}>
        {content[currentLang].title}
          </h2>
          <div className={`
            inline-flex rounded-full overflow-hidden border border-gray-300 shadow-lg bg-white/70
            transform transition-all duration-700 delay-300 will-change-transform
            ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            {["en", "pt"].map((lang) => (
                <button
                key={lang}
                onClick={toggleLanguage}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${currentLang === lang
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-700 hover:bg-white/50"
                  }`}
                >
                {lang === "en" ? "English" : "Português"}
                </button>
            ))}
          </div>
        </div>

        <div className={`
          bg-white/90 rounded-3xl shadow-2xl overflow-hidden border border-white/20
          transform transition-all duration-1000 delay-500 will-change-[transform,opacity]
          ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
        `}>
            <div className="lg:flex">
            <aside className="lg:w-1/3 bg-blue-700 text-white p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-white/20"></div>
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full"></div>
              </div>
              
              <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="w-32 h-32 rounded-full bg-white/20 mx-auto flex items-center justify-center text-4xl font-bold mb-6 shadow-xl border border-white/20 hover:scale-110 transition-transform duration-300">
                LG
                </div>
              </div>
                
                <div className="space-y-6 text-sm">
                  {[
                    { label: "Email", value: "lucas.gerbasi1@gmail.com" },
                    { label: "Location", value: "Franca, Brazil" },
                    { label: "GitHub", value: "github.com/lucasgerbasi", link: "https://github.com/lucasgerbasi" },
                    { label: "LinkedIn", value: "linkedin.com/in/lucas-gerbasi", link: "https://www.linkedin.com/in/lucas-gerbasi/" }
                  ].map((item, index) => (
                    <div key={index} className={`
                      transform transition-all duration-500 hover:translate-x-2 will-change-transform
                      ${headerVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}
                    `} style={{ transitionDelay: `${800 + index * 100}ms` }}>
                      <h4 className="text-white/70 uppercase font-semibold text-xs mb-1">
                        {item.label}
                      </h4>
                      {item.link ? (
                        <a href={item.link} className="font-medium hover:text-blue-200 transition-colors duration-300 block" target="_blank" rel="noopener noreferrer">{item.value}</a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="my-8 border-t border-white/30"></div>
                
                <a
                  href={currentLang === "en" ? resumeEN : resumePT}
                  download={currentLang === "en" ? "CV - Lucas Gerbasi - English.pdf" : "CV - Lucas Gerbasi.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-full block px-6 py-3 bg-blue-600 hover:bg-blue-700
                    text-white rounded-full font-semibold shadow-lg transition-all duration-300 
                    hover:shadow-xl hover:scale-105 transform text-center will-change-transform
                    ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                  `}
                  style={{ transitionDelay: '1200ms' }}
                >
                  {currentLang === "en" ? "Download Resume" : "Baixar Currículo"}
                </a>
              </div>
            </aside>

            <main className="lg:w-2/3 p-8 lg:p-12 space-y-16 relative">
                <section className={`
                  transform transition-all duration-800 will-change-transform
                  ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                `} style={{ transitionDelay: '600ms' }}>
                  <p className="text-gray-700 leading-relaxed text-lg mb-8 relative whitespace-pre-line">
                    {content[currentLang].text}
                  </p>
                  <div className="flex justify-center mb-8">
                    <div className="w-32 h-1 rounded-full bg-blue-400 shadow-lg"></div>
                  </div>
                </section>

                <section ref={skillsRef}>
                  <h3 className={`
                    text-3xl font-bold mb-8 text-blue-700
                    transform transition-all duration-700 will-change-transform
                    ${skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                  `}>
                    {content[currentLang].tabs.skills}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                      <SkillBadge 
                        key={index}
                        skill={skill} 
                        index={index} 
                        isVisible={skillsVisible}
                      />
                    ))}
                  </div>
                </section>

                <section className={`
                transform transition-all duration-800 will-change-transform
                ${skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                `} style={{ transitionDelay: '400ms' }}>
                <h3 className="text-3xl font-bold mb-6 text-blue-700">
                  {content[currentLang].tabs.education}
                </h3>
                <div className="bg-blue-50 rounded-xl p-6 shadow-lg border border-blue-100">
                  {content[currentLang].education.map((edu, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
                    <div>
                    <strong className="text-lg font-semibold text-gray-800">{edu.degree}</strong>
                    <span className="text-gray-600"> - {edu.institution}</span>
                    <span className="text-blue-600 font-medium ml-2">({edu.period})</span>
                    </div>
                  </div>
                  ))}
                </div>
                </section>

                <section ref={experienceRef as React.RefObject<HTMLElement>}>
                <h3 className={`
                  text-3xl font-bold mb-8 text-blue-700
                  transform transition-all duration-700 will-change-transform
                  ${experienceVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                `}>
                  {content[currentLang].tabs.experience}
                </h3>
                <div className="relative pl-8">
                  <div className="absolute left-2 top-0 bottom-0 w-1 bg-blue-400 rounded-full shadow-lg"></div>
                  <div className="space-y-8">
                    {content[currentLang].experience.map((exp, index) => (
                      <TimelineItem 
                        key={index}
                        exp={exp} 
                        index={index} 
                        isVisible={experienceVisible as boolean}
                      />
                    ))}
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}