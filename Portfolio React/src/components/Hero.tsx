import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import profile from '../assets/images/profile.jpg';

export default function Hero() {
  const { currentLang } = useLanguage();
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const particlesRef = useRef<HTMLCanvasElement>(null);
  
  const content = {
    en: {
      greeting: "👋 Hello! I'm",
      roles: ["Web Developer", "Frontend Specialist", "Python Programmer", "React Developer"],
      cta: ["View My Work", "Contact Me"]
    },
    pt: {
      greeting: "👋 Olá! Eu sou",
      roles: ["Desenvolvedor Web", "Especialista Frontend", "Programador Python", "Desenvolvedor React"],
      cta: ["Ver Projetos", "Contato"]
    }
  };

  useEffect(() => {
    const roles = content[currentLang].roles;
    const currentRole = roles[currentRoleIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
        return;
      }

      setTypingSpeed(isDeleting ? 80 : 150);
      
      setTypedText(
        isDeleting 
          ? currentRole.substring(0, typedText.length - 1)
          : currentRole.substring(0, typedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentRoleIndex, currentLang]);

  useEffect(() => {
    if (!particlesRef.current) return;
    
    const canvas = particlesRef.current;
    const ctx = canvas.getContext('2d');
    const particles: Particle[] = [];
    let animationFrameId: number;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.2})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.size > 0.2) this.size -= 0.01;
        
        // Loop around edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      
      draw() {
        if (ctx) {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    
    // Initialize particles
    const init = () => {
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    };
    
    // Animation loop
    const animate = () => {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      
      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Connect nearby particles
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            if (ctx) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 - distance/500})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
        
        // Replace particles
        if (particles[i].size <= 0.2) {
          particles.splice(i, 1);
          i--;
          particles.push(new Particle());
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center text-white relative overflow-hidden">
      <canvas ref={particlesRef} className="absolute inset-0 z-0" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80 z-0" />
      
      <div className="relative z-10 px-4 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-left order-2 md:order-1">
            <div className="flex items-center mb-4">
              <div className="h-1 w-12 bg-blue-500 mr-4"></div>
              <p className="text-2xl text-blue-400 animate-fadeIn">{content[currentLang].greeting}</p>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              Lucas Gerbasi
            </h1>
            
            <div className="h-16 mb-8 border-l-4 border-blue-500 pl-4">
              <div className="text-2xl md:text-3xl font-light">
                <span className="text-blue-400 mr-2">{'<'}</span>
                <span>{typedText}</span>
                <span className="inline-block w-1 h-8 bg-blue-400 animate-pulse ml-1"></span>
                <span className="text-blue-400 ml-2">{'/>'}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 animate-fadeIn pt-6">
              <a
                href="#projects"
                className="px-8 py-4 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center group"
              >
                <span className="group-hover:mr-2 transition-all">{content[currentLang].cta[0]}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-0 w-0 group-hover:h-5 group-hover:w-5 transition-all" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-white rounded-lg text-white font-semibold hover:bg-white hover:text-gray-900 transition transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center group relative overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-gray-900 transition-colors">
                  {content[currentLang].cta[1]}
                </span>
                <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            </div>
            
            <div className="flex gap-6 mt-12">
              <a
                href="https://github.com/lucasgerbasi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-gerbasi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex-shrink-0 order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur-md opacity-75 group-hover:opacity-100 animate-pulse-slow"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-sm opacity-50 group-hover:opacity-75 animate-pulse-slow animation-delay-500"></div>
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full blur-md opacity-25 group-hover:opacity-50 animate-pulse-slow animation-delay-1000"></div>
              
              <img
                src={profile}
                alt="Lucas Gerbasi"
                className="w-64 h-64 md:w-72 md:h-72 rounded-full relative z-10 border-4 border-white/20 shadow-xl object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}