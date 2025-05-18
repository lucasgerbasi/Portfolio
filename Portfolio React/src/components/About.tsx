import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { currentLang, toggleLanguage } = useLanguage();

  const content = {
    en: {
      title: "About Me",
      text: "Computer Science student at UNI-FACEF with a self-taught profile and practical experience in web development, data analysis, digital community management, and collaborative digital projects. Focused on problem-solving, continuous learning, and the application of creative solutions. Comfortable in international environments with English communication.",
      tabs: {
        skills: "Skills",
        education: "Education",
        experience: "Experience"
      },
      education: [
        {
          degree: "Bachelor's in Computer Science",
          institution: "Uni-FACEF",
          period: "2023 - Present"
        }
      ],
      experience: [
        {
          role: "Freelance Web Developer",
          company: "Self-employed",
          period: "Feb 2022 – Present",
          description: "Development of responsive websites for small businesses using HTML, CSS, and JavaScript. Direct client communication for feedback, iteration, and continuous improvement."
        },
        {
          role: "Front-end Developer",
          company: "Instituto João de Barro",
          period: "2023",
          description: "Designed and implemented the front-end of a nonprofit organization's website using React. Focused on responsive layout, user-friendly interface, and seamless integration with backend services."
        },
        {
          role: "Digital Operations Lead",
          company: "Online Community (35k+ members)",
          period: "Jun 2018 – Dec 2022",
          description: "Coordinated internal workflows, user support, and digital engagement strategies. Collaborated with leadership to improve systems and community experience."
        },
        {
          role: "Web Developer",
          company: "Trote Solidário (Uni-FACEF)",
          period: "2022",
          description: "Led the development of a web platform to manage charitable donations and events. Responsible for front-end structure and key backend features, ensuring functionality, responsiveness, and clean user experience."
        }
      ]
    },
    pt: {
      title: "Sobre Mim",
      text: "Estudante de Ciência da Computação na UNI-FACEF com perfil autodidata, experiência prática em desenvolvimento web, análise de dados, gestão de comunidades digitais e projetos digitais colaborativos. Foco em resolução de problemas, aprendizado contínuo e aplicação de soluções criativas. Confortável em ambiente internacional com comunicação em inglês.",
      tabs: {
        skills: "Habilidades",
        education: "Educação",
        experience: "Experiência"
      },
      education: [
        {
          degree: "Bacharelado em Ciência da Computação",
          institution: "Uni-FACEF",
          period: "2023 - Presente"
        }
      ],
      experience: [
        {
          role: "Desenvolvedor Web Freelancer",
          company: "Autônomo",
          period: "Fevereiro 2022 – Presente",
          description: "Criação de sites responsivos para pequenos negócios utilizando HTML, CSS e JavaScript. Comunicação direta com clientes para ajustes e melhorias contínuas."
        },
        {
          role: "Desenvolvedor Front-end",
          company: "Instituto João de Barro",
          period: "2023",
          description: "Projetei e desenvolvi o front-end do site de uma organização sem fins lucrativos utilizando React. Enfoque em layout responsivo, interface intuitiva e integração fluida com o backend."
        },
        {
          role: "Líder de Operações Digitais",
          company: "Comunidade Online (35 mil+ membros)",
          period: "Junho 2018 – Dezembro 2022",
          description: "Coordenação de fluxos internos, suporte a usuários e estratégias de engajamento digital. Colaboração com a liderança para melhorar sistemas e a experiência da comunidade."
        },
        {
          role: "Desenvolvedor Web",
          company: "Trote Solidário (Uni-FACEF)",
          period: "2022",
          description: "Liderei o desenvolvimento de uma plataforma web para gerenciamento de doações e eventos solidários. Responsável pela estrutura do front-end e recursos principais do backend, garantindo funcionalidade e experiência de uso eficientes."
        }
      ]
    }
  };

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Git/GitHub",
    "Responsive Design",
    "Tailwind CSS"
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header & Language Toggle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            {content[currentLang].title}
          </h2>
          <div className="inline-flex rounded-full overflow-hidden border border-gray-300">
            {["en", "pt"].map((lang) => (
              <button
                key={lang}
                onClick={toggleLanguage}
                className={`px-4 py-2 text-sm font-medium transition ${currentLang === lang
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {lang === "en" ? "English" : "Português"}
              </button>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Sidebar */}
            <aside className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 flex flex-col justify-between">
              <div className="text-center">
                <div className="w-28 h-28 rounded-full bg-white/10 mx-auto flex items-center justify-center text-4xl font-bold mb-6">
                  LG
                </div>
              </div>
              <ul className="space-y-4 text-sm">
                <li>
                  <h4 className="text-white/70 uppercase">Email</h4>
                  <p className="font-medium">lucas.gerbasi1@gmail.com</p>
                </li>
                <li>
                  <h4 className="text-white/70 uppercase">Location</h4>
                  <p className="font-medium">Franca, Brazil</p>
                </li>
                <li>
                  <h4 className="text-white/70 uppercase">GitHub</h4>
                  <a
                    href="https://github.com/lucasgerbasi"
                    className="font-medium hover:text-blue-200 transition"
                    target="_blank" rel="noopener noreferrer"
                  >
                    github.com/lucasgerbasi
                  </a>
                </li>
                <li>
                  <h4 className="text-white/70 uppercase">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/lucas-gerbasi/"
                    className="font-medium hover:text-blue-200 transition"
                    target="_blank" rel="noopener noreferrer"
                  >
                    linkedin.com/in/lucas-gerbasi
                  </a>
                </li>
              </ul>
              <div className="my-6 border-t border-blue-400/30"></div>
              {/* Download Resume Button */}
              <a
                href="/resume.pdf"
                download
                className="inline-block mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-full font-semibold shadow transition"
              >
                {currentLang === "en" ? "Download Resume" : "Baixar Currículo"}
              </a>
            </aside>

            {/* Main content with sections and timeline */}
            <main className="md:w-2/3 p-8 space-y-10">
              <section>
                <p className="text-gray-700 leading-relaxed mb-8">
                  {content[currentLang].text}
                </p>
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-700"></div>
                </div>
              </section>

              {/* Skills */}
              <section>
                <h3 className="text-2xl font-bold mb-4">
                  {content[currentLang].tabs.skills}
                </h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-700">
                  {skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-gray-200 px-3 py-2 rounded-full text-center shadow-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Education */}
              <section>
                <h3 className="text-2xl font-bold mb-4">
                  {content[currentLang].tabs.education}
                </h3>
                <ul className="space-y-2">
                  {content[currentLang].education.map((edu, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                      <div>
                        <strong>{edu.degree}</strong> - {edu.institution} <span className="text-gray-500">({edu.period})</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Experience */}
              <section>
                <h3 className="text-2xl font-bold mb-4">
                  {content[currentLang].tabs.experience}
                </h3>
                <div className="relative pl-8">
                  <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-700 rounded-full"></div>
                  <ul className="space-y-8">
                    {content[currentLang].experience.map((exp, i) => (
                      <li key={i} className="relative">
                        <span className="absolute -left-4 top-2 w-4 h-4 bg-blue-500 border-4 border-white rounded-full shadow"></span>
                        <div className="ml-2">
                          <div className="font-bold text-lg">{exp.role}</div>
                          <div className="text-blue-700 font-semibold">{exp.company}</div>
                          <div className="text-gray-500 text-sm mb-1">{exp.period}</div>
                          <div className="text-gray-600">{exp.description}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}