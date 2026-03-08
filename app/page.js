"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function HomePage() {
  const personas = [
    {
      text: "Web3",
      description: "on-chain systems, smart contracts, and decentralized protocols"
    },
    {
      text: "Backend & Infra",
      description: "backend architecture, infrastructure, and scalable systems"
    },
    {
      text: "AI / ML",
      description: "machine learning, computer vision systems, and AI pipelines"
    },
  ];

  // Organized in 4 rows matching the reference design
  const techStackRows = [
    // Row 1: Web Development Frameworks and Languages
    [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
      { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    ],
    // Row 2: Databases, Mobile Development, and Backend Frameworks
    [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Material-UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    ],
    // Row 3: Version Control, Cloud, Operating Systems, AI / ML, and Hardware
    [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
      { name: "Matlab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" },
      { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
      { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
    ],
    // Row 4: IDEs, Design Tools, and Programming Languages
    [
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Eclipse", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" },
      { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
      { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
      { name: "Markdown", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" },
      { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ],
  ];


  const [currentPersona, setCurrentPersona] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const carouselRef = useRef(null);
  const rotationRef = useRef(0);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Continuous rotation using requestAnimationFrame for smooth performance
    const rotate = () => {
      if (carouselRef.current) {
        rotationRef.current -= 0.15; // Slower rotation
        // Normalize to 0-360 range using modulo to prevent jamming
        rotationRef.current = ((rotationRef.current % 360) + 360) % 360;
        carouselRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
      }
      animationFrameRef.current = requestAnimationFrame(rotate);
    };
    
    // Start the rotation
    animationFrameRef.current = requestAnimationFrame(rotate);
    
    // Change highlighted card every 3 seconds
    const personaInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPersona((prev) => (prev + 1) % personas.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearInterval(personaInterval);
    };
  }, [personas.length]);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="flex min-h-screen flex-col bg-bg-deep text-gold-soft">
      <Navbar />

      <main id="top" className="flex-1">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-neutral-900/80 min-h-screen">
              <div className="pointer-events-none absolute inset-0 -z-10">
                {/* Gradient overlays */}
                <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-black via-bg-deep/90 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black via-bg-deep/60 to-transparent" />
                <div className="absolute inset-0 bg-grain opacity-20 mix-blend-soft-light" />
                
                {/* Vignette effect */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30" />
                
                {/* Grid pattern - more visible */}
                <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#f3e0c4_1px,transparent_1px),linear-gradient(to_bottom,#f3e0c4_1px,transparent_1px)] bg-[size:80px_80px]" />
                
                {/* Well-positioned floating orbs - darker */}
                <div className="absolute top-20 right-20 w-64 h-64 bg-gold-soft/12 rounded-full blur-3xl animate-float-slow" />
                <div className="absolute bottom-20 left-20 w-56 h-56 bg-gold-soft/10 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gold-soft/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
                
                {/* Corner accents - darker and more visible */}
                <div className="absolute top-0 left-0 w-64 h-64 border-t border-l border-gold-soft/25 opacity-70" />
                <div className="absolute bottom-0 right-0 w-64 h-64 border-b border-r border-gold-soft/25 opacity-70" />
                <div className="absolute top-0 right-0 w-48 h-48 border-t border-r border-gold-soft/20 opacity-60" />
                <div className="absolute bottom-0 left-0 w-48 h-48 border-b border-l border-gold-soft/20 opacity-60" />
                
                {/* Animated geometric shapes - larger and darker */}
                <div className="absolute top-32 left-1/4 w-3 h-3 bg-gold-soft/50 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
                <div className="absolute top-40 left-1/3 w-2.5 h-2.5 bg-gold-soft/45 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-32 right-1/4 w-3 h-3 bg-gold-soft/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-40 right-1/3 w-2.5 h-2.5 bg-gold-soft/45 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
                <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-gold-soft/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-gold-soft/40 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }} />
                
                {/* Decorative line accents - darker and longer */}
                <div className="absolute top-1/4 left-0 w-48 h-px bg-gradient-to-r from-transparent via-gold-soft/40 to-transparent opacity-80" />
                <div className="absolute bottom-1/4 right-0 w-48 h-px bg-gradient-to-l from-transparent via-gold-soft/40 to-transparent opacity-80" />
                <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-gold-soft/35 to-transparent opacity-70" />
                <div className="absolute top-1/2 right-0 w-32 h-px bg-gradient-to-l from-transparent via-gold-soft/35 to-transparent opacity-70" />
                
                {/* Creative geometric pattern - top right - darker */}
                <svg className="absolute top-16 right-16 w-24 h-24 text-gold-soft/25 animate-float-slow pointer-events-none" fill="none" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8" />
                  <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
                  <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                  <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                  <line x1="25" y1="25" x2="75" y2="75" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                  <line x1="75" y1="25" x2="25" y2="75" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                </svg>
                
                {/* Creative geometric pattern - bottom left - darker */}
                <svg className="absolute bottom-16 left-16 w-24 h-24 text-gold-soft/25 animate-pulse-slow pointer-events-none" fill="none" viewBox="0 0 100 100">
                  <polygon points="50,10 90,50 50,90 10,50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8" />
                  <polygon points="50,30 70,50 50,70 30,50" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
                  <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
                </svg>
                
                {/* Additional geometric patterns */}
                <svg className="absolute top-1/3 right-1/4 w-16 h-16 text-gold-soft/20 animate-float pointer-events-none" fill="none" viewBox="0 0 100 100">
                  <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
                  <rect x="30" y="30" width="40" height="40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                </svg>
                
                <svg className="absolute bottom-1/3 left-1/4 w-16 h-16 text-gold-soft/20 animate-pulse pointer-events-none" fill="none" viewBox="0 0 100 100">
                  <path d="M50 10 L90 50 L50 90 L10 50 Z" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
                  <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                </svg>
                
                {/* Diagonal accent lines - darker */}
                <div className="absolute top-1/3 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-gold-soft/35 to-transparent opacity-70" style={{ transform: 'rotate(45deg)' }} />
                <div className="absolute bottom-1/3 right-1/4 w-px h-32 bg-gradient-to-t from-transparent via-gold-soft/35 to-transparent opacity-70" style={{ transform: 'rotate(-45deg)' }} />
                <div className="absolute top-2/3 left-1/3 w-px h-24 bg-gradient-to-b from-transparent via-gold-soft/30 to-transparent opacity-60" style={{ transform: 'rotate(-45deg)' }} />
                <div className="absolute bottom-2/3 right-1/3 w-px h-24 bg-gradient-to-t from-transparent via-gold-soft/30 to-transparent opacity-60" style={{ transform: 'rotate(45deg)' }} />
                
                {/* Floating particles - larger and darker */}
                <div className="absolute top-1/2 left-1/5 w-2 h-2 bg-gold-soft/60 rounded-full animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }} />
                <div className="absolute top-2/3 right-1/5 w-2 h-2 bg-gold-soft/55 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '10s' }} />
                <div className="absolute bottom-1/3 left-2/5 w-2.5 h-2.5 bg-gold-soft/50 rounded-full animate-float" style={{ animationDelay: '4s', animationDuration: '9s' }} />
                <div className="absolute top-1/4 right-2/5 w-1.5 h-1.5 bg-gold-soft/45 rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '11s' }} />
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-gold-soft/50 rounded-full animate-float" style={{ animationDelay: '3s', animationDuration: '7s' }} />
                
                {/* Additional decorative lines */}
                <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-soft/25 to-transparent opacity-60" />
                <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-soft/25 to-transparent opacity-60" />
              </div>

              <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-12 px-4 pb-20 pt-12 sm:flex-row sm:items-center sm:gap-16 sm:px-6 lg:gap-20 lg:px-8 lg:pt-16">
            {/* Left side - Name and Description */}
            <div className="flex flex-[1.5] flex-col text-center sm:flex-[2] lg:flex-[2.5] relative">
              {/* Aesthetic bold elements */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Bold accent lines */}
                <div className="absolute -left-6 top-1/3 w-10 h-[1.5px] bg-gradient-to-r from-transparent via-gold-soft/40 to-transparent opacity-80" />
                <div className="absolute -left-6 bottom-1/3 w-10 h-[1.5px] bg-gradient-to-r from-transparent via-gold-soft/40 to-transparent opacity-80" />
                <div className="absolute -right-6 top-1/3 w-10 h-[1.5px] bg-gradient-to-l from-transparent via-gold-soft/40 to-transparent opacity-80" />
                <div className="absolute -right-6 bottom-1/3 w-10 h-[1.5px] bg-gradient-to-l from-transparent via-gold-soft/40 to-transparent opacity-80" />
                
                {/* Bold geometric accent */}
                <svg className="absolute -left-8 top-1/2 -translate-y-1/2 w-14 h-14 text-gold-soft/25 pointer-events-none" fill="none" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
                  <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
                </svg>
                
                <svg className="absolute -right-8 top-1/2 -translate-y-1/2 w-14 h-14 text-gold-soft/25 pointer-events-none" fill="none" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
                  <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
                </svg>
                
                {/* Bold top/bottom accents */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-20 h-[1.5px] bg-gradient-to-r from-transparent via-gold-soft/35 to-transparent opacity-70" />
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-20 h-[1.5px] bg-gradient-to-r from-transparent via-gold-soft/35 to-transparent opacity-70" />
                
                {/* Bold corner dots */}
                <div className="absolute -left-4 top-1/4 w-1.5 h-1.5 bg-gold-soft/50 rounded-full opacity-80" />
                <div className="absolute -left-4 bottom-1/4 w-1.5 h-1.5 bg-gold-soft/50 rounded-full opacity-80" />
                <div className="absolute -right-4 top-1/4 w-1.5 h-1.5 bg-gold-soft/50 rounded-full opacity-80" />
                <div className="absolute -right-4 bottom-1/4 w-1.5 h-1.5 bg-gold-soft/50 rounded-full opacity-80" />
              </div>
              
              <div className="relative z-10">
                <h1 className={`text-3xl font-normal tracking-[0.05em] text-gold-soft sm:text-4xl lg:text-5xl xl:text-6xl transition-all duration-1000 delay-100 whitespace-nowrap ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <span className="inline-block font-display text-[2rem] leading-tight sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] bg-gradient-to-br from-gold-soft via-gold-soft to-gold-muted bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(243,224,196,0.3)] relative">
                    Sesha Sai <span className="font-bold tracking-[0.08em]">Vamsi</span> M
                  </span>
                </h1>

                {/* Elegant divider line - centered */}
                <div className={`mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold-soft/40 to-transparent mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />

                {/* Tagline - centered */}
                <div className={`mt-8 flex justify-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <span className={`block font-mono text-xl font-light text-gold-muted/80 sm:text-2xl lg:text-3xl tracking-wider relative`}>
                    <span className="inline-block relative group">
                      <span className="text-gold-soft/60 transition-all duration-300 group-hover:text-gold-soft/90">{"{"}</span>
                      <span className="px-2 relative">
                        〈 0 → 1 〉 · 〈 1 → n 〉
                      </span>
                      <span className="text-gold-soft/60 transition-all duration-300 group-hover:text-gold-soft/90">{"}"}</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right side - Persona Cards in 3D Loop */}
            <div className="flex flex-1 items-center justify-center sm:flex-[1.5] lg:flex-[2] -mt-8">
              <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center perspective-1000">
                {/* Subtle background glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-64 h-64 bg-gold-soft/4 rounded-full blur-3xl animate-pulse-slow" />
                </div>
                
                {/* 3D Carousel Container */}
                <div 
                  ref={carouselRef}
                  className="relative w-full h-full flex items-center justify-center preserve-3d"
                  style={{
                    transformStyle: 'preserve-3d',
                    willChange: 'transform',
                    transition: 'none', // Prevent CSS transitions from interfering with continuous rotation
                  }}
                >
                  {/* Web3 Card - Position 0 */}
                  <div 
                    className={`absolute transition-opacity duration-500 ${
                      currentPersona === 0 
                        ? 'opacity-100 z-30' 
                        : 'opacity-90 z-10'
                    }`}
                    style={{
                      transform: `
                        rotateY(${0 * 120}deg) 
                        translateZ(140px)
                        scale(1.0)
                      `,
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                  >
                    <Link href="/projects#blockchain" className="block">
                      <PersonaCard
                        title="Web3"
                        subtitle=""
                        body="Worked as a DeFi engineer. Wrote smart contracts and worked with on-chain systems. Integrated AMMs (CPAMM/CLAMM), swaps, bridges, and protocol-level mechanics across multiple projects."
                        linkText="Explore Web3 Work →"
                        isHighlighted={currentPersona === 0}
                        currentPersona={currentPersona}
                        personaIndex={0}
                        onPersonaChange={(index) => {
                          setIsAnimating(true);
                          setTimeout(() => {
                            setCurrentPersona(index);
                            setIsAnimating(false);
                          }, 300);
                        }}
                        isCompact={true}
                        is3D={true}
                      />
                    </Link>
                  </div>

                  {/* Backend & Infra Card - Position 1 */}
                  <div 
                    className={`absolute transition-opacity duration-500 ${
                      currentPersona === 1 
                        ? 'opacity-100 z-30' 
                        : 'opacity-90 z-10'
                    }`}
                    style={{
                      transform: `
                        rotateY(${1 * 120}deg) 
                        translateZ(140px)
                        scale(1.0)
                      `,
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                  >
                    <Link href="/projects#backend-infra" className="block">
                      <PersonaCard
                        title="Backend & Systems"
                        subtitle=""
                        body="Built Python and Node.js backends with end-to-end ownership of services at my previous company. Developed multiple backend projects across domains, handling AWS deployments, testing, uptime, and production maintenance."
                        linkText="Explore Backend Work →"
                        isHighlighted={currentPersona === 1}
                        currentPersona={currentPersona}
                        personaIndex={1}
                        onPersonaChange={(index) => {
                          setIsAnimating(true);
                          setTimeout(() => {
                            setCurrentPersona(index);
                            setIsAnimating(false);
                          }, 300);
                        }}
                        isCompact={true}
                        is3D={true}
                      />
                    </Link>
                  </div>

                  {/* AI / ML Card - Position 2 */}
                  <div 
                    className={`absolute transition-opacity duration-500 ${
                      currentPersona === 2 
                        ? 'opacity-100 z-30' 
                        : 'opacity-95 z-10'
                    }`}
                    style={{
                      transform: `
                        rotateY(${2 * 120}deg) 
                        translateZ(140px)
                        scale(1.0)
                      `,
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                  >
                    <Link href="/projects#ml-dl" className="block">
                      <PersonaCard
                        title="AI / ML"
                        subtitle=""
                        body="Published research and developed machine learning and computer vision systems. Built an end-to-end applied system from model design to deployment."
                        linkText="Explore AI / ML Work →"
                        isHighlighted={currentPersona === 2}
                        currentPersona={currentPersona}
                        personaIndex={2}
                        onPersonaChange={(index) => {
                          setIsAnimating(true);
                          setTimeout(() => {
                            setCurrentPersona(index);
                            setIsAnimating(false);
                          }, 300);
                        }}
                        isCompact={true}
                        is3D={true}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll Down Arrow - Bottom Center */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
              <button
                onClick={() => {
                  const nextSection = document.querySelector('#resume-section') || document.querySelector('section:nth-of-type(2)');
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                  }
                }}
                className="group relative flex flex-col items-center gap-2 text-gold-soft/60 hover:text-gold-soft transition-all duration-300"
                aria-label="Scroll down"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold-soft/5 blur-xl animate-scroll-glow group-hover:bg-gold-soft/10 transition-all duration-300" />
                </div>
                
                {/* Arrow icon */}
                <div className="relative z-10 animate-scroll-arrow">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                </div>
                
                {/* Decorative line */}
                <div className="relative z-10 w-px h-8 bg-gradient-to-b from-gold-soft/40 via-gold-soft/20 to-transparent group-hover:from-gold-soft/60 group-hover:via-gold-soft/40 transition-all duration-300" />
              </button>
            </div>
          </div>
        </section>

        {/* Resume & Technical Skills */}
        <section id="resume-section" className="relative border-t border-neutral-900/80 bg-black/95 py-20 overflow-hidden section-elegant">
          {/* Enhanced background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="geometric-shape shape-circle top-10 right-10 opacity-[0.04]" />
            <div className="geometric-shape shape-line top-1/4 right-20 opacity-[0.06]" />
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold-soft/3 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-soft/2 rounded-full blur-3xl opacity-20" />
          </div>
          
          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Resume Section */}
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
              <div className="flex-1 relative">
                {/* Decorative background elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold-soft/8 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute top-1/2 -right-8 w-40 h-40 bg-gold-soft/5 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-gold-soft/3 rounded-full blur-2xl" />
                
                {/* Main card */}
                <div className="relative z-10 rounded-xl border border-neutral-800/50 bg-gradient-to-br from-neutral-950/60 via-neutral-950/40 to-neutral-950/60 backdrop-blur-sm p-8 transition-all hover:border-gold-soft/30 hover:shadow-lg hover:shadow-gold-soft/5 card-elegant-hover">
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold-soft/0 via-gold-soft/0 to-gold-soft/0 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  {/* Subtle inner glow */}
                  <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-gold-soft/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10">
                    {/* Header with icon */}
                    <div className="flex flex-col items-center gap-4 mb-6">
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold-soft/15 via-gold-soft/8 to-gold-soft/5 border border-gold-soft/20 shadow-lg shadow-gold-soft/10 animate-glow-pulse">
                        <svg className="h-7 w-7 text-gold-soft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {/* Icon glow */}
                        <div className="absolute inset-0 rounded-xl bg-gold-soft/10 blur-md animate-pulse-slow" />
                      </div>
                      <div className="text-center">
                        <h2 className="font-display text-2xl font-semibold tracking-tight text-gold-soft sm:text-3xl">
                          Resume
                        </h2>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-base leading-relaxed text-gold-muted mb-8 text-center">
                      For a deeper look at my work and experience, see my resume.
                    </p>
                    
                    {/* Download button */}
                    <div className="flex justify-center">
                    <a
                      href="/Sesha Sai Vamsi Resume.pdf"
                      download="Sesha Sai Vamsi Resume.pdf"
                      className="group relative inline-flex items-center justify-center gap-3 rounded-lg border-2 border-gold-soft/30 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 px-8 py-4 text-base font-medium text-gold-soft transition-all duration-300 hover:border-gold-soft/60 hover:shadow-lg hover:shadow-gold-soft/20 overflow-hidden"
                    >
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-gold-soft/0 via-gold-soft/10 to-gold-soft/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-soft/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Icon */}
                      <svg className="relative z-10 h-5 w-5 text-gold-soft transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      
                      {/* Text */}
                      <span className="relative z-10">Download PDF</span>
                      
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-gold-soft/20 to-transparent" />
                    </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex-1 relative">
                {/* Decorative background elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold-soft/8 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute top-1/2 -left-8 w-40 h-40 bg-gold-soft/5 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-gold-soft/3 rounded-full blur-2xl" />
                
                {/* Main card */}
                <div className="relative z-10 rounded-xl border border-neutral-800/50 bg-gradient-to-br from-neutral-950/60 via-neutral-950/40 to-neutral-950/60 backdrop-blur-sm p-8 transition-all hover:border-gold-soft/30 hover:shadow-lg hover:shadow-gold-soft/5 card-elegant-hover">
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold-soft/0 via-gold-soft/0 to-gold-soft/0 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  {/* Subtle inner glow */}
                  <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-gold-soft/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10">
                    {/* Header with icon */}
                    <div className="flex flex-col items-center gap-4 mb-6">
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold-soft/15 via-gold-soft/8 to-gold-soft/5 border border-gold-soft/20 shadow-lg shadow-gold-soft/10 animate-glow-pulse">
                        <svg className="h-7 w-7 text-gold-soft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        {/* Icon glow */}
                        <div className="absolute inset-0 rounded-xl bg-gold-soft/10 blur-md animate-pulse-slow" />
                      </div>
                      <div className="text-center">
                        <h2 className="font-display text-2xl font-semibold tracking-tight text-gold-soft sm:text-3xl">
                          Tech Stack
                        </h2>
                      </div>
                    </div>
                    
                    <div className="space-y-6 relative z-10">
                    {/* Languages */}
                    <div>
                      <h3 className="font-display text-sm font-semibold text-gold-soft/90 mb-3 uppercase tracking-wider text-xs">
                        Languages
                      </h3>
                      <div className="grid grid-cols-5 gap-2">
                        {[
                          { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                          { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                          { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                          { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
                          { name: "Solidity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
                        ].map((skill, index) => (
                          <div
                            key={skill.name}
                            className="flex flex-col items-center gap-1 p-1.5 rounded relative transition-all duration-300 group animate-fade-in-up"
                            style={{ animationDelay: `${index * 50}ms` }}
                            title={skill.name}
                          >
                            {/* Luminous glow effect */}
                            <div className="absolute inset-0 rounded bg-gradient-to-br from-gold-soft/20 via-gold-soft/10 to-gold-soft/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md animate-pulse-slow" />
                            <div className="absolute inset-0 rounded bg-gradient-to-br from-gold-soft/15 via-gold-soft/8 to-gold-soft/15 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                            
                            <div className="w-7 h-7 flex items-center justify-center relative z-10">
                              <img 
                                src={skill.icon} 
                                alt={skill.name}
                                className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:brightness-125 group-hover:scale-110 transition-all duration-300"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  const fallback = e.target.nextElementSibling;
                                  if (fallback) fallback.style.display = 'flex';
                                }}
                              />
                              <div className="hidden items-center justify-center w-full h-full text-gold-muted/70 group-hover:text-gold-soft/80 text-xs font-mono">
                                {skill.name.charAt(0)}
                              </div>
                            </div>
                            <span className="text-[7px] text-gold-muted/70 text-center group-hover:text-gold-soft group-hover:font-medium transition-all duration-300 leading-tight relative z-10">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Backend and Systems */}
                    <div>
                      <h3 className="font-display text-sm font-semibold text-gold-soft/90 mb-3 uppercase tracking-wider text-xs">
                        Backend & Systems
                      </h3>
                      <div className="grid grid-cols-5 gap-2">
                        {[
                          { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
                          { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
                          { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
                          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                          { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
                          { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
                          { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
                        ].map((skill, index) => (
                          <div
                            key={skill.name}
                            className="flex flex-col items-center gap-1 p-1.5 rounded relative transition-all duration-300 group animate-fade-in-up"
                            style={{ animationDelay: `${(index + 5) * 50}ms` }}
                            title={skill.name}
                          >
                            {/* Luminous glow effect */}
                            <div className="absolute inset-0 rounded bg-gradient-to-br from-gold-soft/20 via-gold-soft/10 to-gold-soft/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md animate-pulse-slow" />
                            <div className="absolute inset-0 rounded bg-gradient-to-br from-gold-soft/15 via-gold-soft/8 to-gold-soft/15 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                            
                            <div className="w-7 h-7 flex items-center justify-center relative z-10">
                              <img 
                                src={skill.icon} 
                                alt={skill.name}
                                className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:brightness-125 group-hover:scale-110 transition-all duration-300"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  const fallback = e.target.nextElementSibling;
                                  if (fallback) fallback.style.display = 'flex';
                                }}
                              />
                              <div className="hidden items-center justify-center w-full h-full text-gold-muted/70 group-hover:text-gold-soft/80 text-xs font-mono">
                                {skill.name.charAt(0)}
                              </div>
                            </div>
                            <span className="text-[7px] text-gold-muted/70 text-center group-hover:text-gold-soft group-hover:font-medium transition-all duration-300 leading-tight relative z-10">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cloud and Infrastructure */}
                    <div>
                      <h3 className="font-display text-sm font-semibold text-gold-soft/90 mb-3 uppercase tracking-wider text-xs">
                        Cloud & Infrastructure
                      </h3>
                      <div className="grid grid-cols-5 gap-2">
                        {[
                          { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
                        ].map((skill, index) => (
                          <div
                            key={skill.name}
                            className="flex flex-col items-center gap-1 p-1.5 rounded relative transition-all duration-300 group animate-fade-in-up"
                            style={{ animationDelay: `${(index + 12) * 50}ms` }}
                            title={skill.name}
                          >
                            {/* Luminous glow effect */}
                            <div className="absolute inset-0 rounded bg-gradient-to-br from-gold-soft/20 via-gold-soft/10 to-gold-soft/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md animate-pulse-slow" />
                            <div className="absolute inset-0 rounded bg-gradient-to-br from-gold-soft/15 via-gold-soft/8 to-gold-soft/15 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                            
                            <div className="w-7 h-7 flex items-center justify-center relative z-10">
                              <img 
                                src={skill.icon} 
                                alt={skill.name}
                                className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:brightness-125 group-hover:scale-110 transition-all duration-300"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  const fallback = e.target.nextElementSibling;
                                  if (fallback) fallback.style.display = 'flex';
                                }}
                              />
                              <div className="hidden items-center justify-center w-full h-full text-gold-muted/70 group-hover:text-gold-soft/80 text-xs font-mono">
                                {skill.name.charAt(0)}
                              </div>
                            </div>
                            <span className="text-[7px] text-gold-muted/70 text-center group-hover:text-gold-soft group-hover:font-medium transition-all duration-300 leading-tight relative z-10">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Databases */}
                    <div>
                      <h3 className="font-display text-sm font-semibold text-gold-soft/90 mb-3 uppercase tracking-wider text-xs">
                        Databases
                      </h3>
                      <div className="grid grid-cols-5 gap-2">
                        {[
                          { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                          { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                          { name: "DynamoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
                          { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
                        ].map((skill, index) => (
                          <div
                            key={skill.name}
                            className="flex flex-col items-center gap-1 p-1.5 rounded relative transition-all duration-300 group animate-fade-in-up"
                            style={{ animationDelay: `${(index + 13) * 50}ms` }}
                            title={skill.name}
                          >
                            {/* Luminous glow effect */}
                            <div className="absolute inset-0 rounded bg-gradient-to-br from-gold-soft/20 via-gold-soft/10 to-gold-soft/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md animate-pulse-slow" />
                            <div className="absolute inset-0 rounded bg-gradient-to-br from-gold-soft/15 via-gold-soft/8 to-gold-soft/15 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                            
                            <div className="w-7 h-7 flex items-center justify-center relative z-10">
                              <img 
                                src={skill.icon} 
                                alt={skill.name}
                                className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:brightness-125 group-hover:scale-110 transition-all duration-300"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  const fallback = e.target.nextElementSibling;
                                  if (fallback) fallback.style.display = 'flex';
                                }}
                              />
                              <div className="hidden items-center justify-center w-full h-full text-gold-muted/70 group-hover:text-gold-soft/80 text-xs font-mono">
                                {skill.name.charAt(0)}
                              </div>
                            </div>
                            <span className="text-[7px] text-gold-muted/70 text-center group-hover:text-gold-soft group-hover:font-medium transition-all duration-300 leading-tight relative z-10">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Blockchain and DeFi Engineering */}
                    <div>
                      <h3 className="font-display text-sm font-semibold text-gold-soft/90 mb-3 uppercase tracking-wider text-xs">
                        Blockchain & DeFi
                      </h3>
                      <div className="grid grid-cols-5 gap-2">
                        {[
                          { name: "Solidity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
                          { name: "Hardhat", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                          { name: "Foundry", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
                        ].map((skill, index) => (
                          <div
                            key={skill.name}
                            className="flex flex-col items-center gap-1 p-1.5 rounded relative transition-all duration-300 group animate-fade-in-up"
                            style={{ animationDelay: `${(index + 18) * 50}ms` }}
                            title={skill.name}
                          >
                            {/* Luminous glow effect */}
                            <div className="absolute inset-0 rounded bg-gradient-to-br from-gold-soft/20 via-gold-soft/10 to-gold-soft/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md animate-pulse-slow" />
                            <div className="absolute inset-0 rounded bg-gradient-to-br from-gold-soft/15 via-gold-soft/8 to-gold-soft/15 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                            
                            <div className="w-7 h-7 flex items-center justify-center relative z-10">
                              <img 
                                src={skill.icon} 
                                alt={skill.name}
                                className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:brightness-125 group-hover:scale-110 transition-all duration-300"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  const fallback = e.target.nextElementSibling;
                                  if (fallback) fallback.style.display = 'flex';
                                }}
                              />
                              <div className="hidden items-center justify-center w-full h-full text-gold-muted/70 group-hover:text-gold-soft/80 text-xs font-mono">
                                {skill.name.charAt(0)}
                              </div>
                            </div>
                            <span className="text-[7px] text-gold-muted/70 text-center group-hover:text-gold-soft group-hover:font-medium transition-all duration-300 leading-tight relative z-10">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Frontend */}
                    <div>
                      <h3 className="font-display text-sm font-semibold text-gold-soft/90 mb-3 uppercase tracking-wider text-xs">
                        Frontend
                      </h3>
                      <div className="grid grid-cols-5 gap-2">
                        {[
                          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                          { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                          { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
                          { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
                        ].map((skill, index) => (
                          <div
                            key={skill.name}
                            className="flex flex-col items-center gap-1 p-1.5 rounded relative transition-all duration-300 group animate-fade-in-up"
                            style={{ animationDelay: `${(index + 20) * 50}ms` }}
                            title={skill.name}
                          >
                            {/* Luminous glow effect */}
                            <div className="absolute inset-0 rounded bg-gradient-to-br from-gold-soft/20 via-gold-soft/10 to-gold-soft/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md animate-pulse-slow" />
                            <div className="absolute inset-0 rounded bg-gradient-to-br from-gold-soft/15 via-gold-soft/8 to-gold-soft/15 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                            
                            <div className="w-7 h-7 flex items-center justify-center relative z-10">
                              <img 
                                src={skill.icon} 
                                alt={skill.name}
                                className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:brightness-125 group-hover:scale-110 transition-all duration-300"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  const fallback = e.target.nextElementSibling;
                                  if (fallback) fallback.style.display = 'flex';
                                }}
                              />
                              <div className="hidden items-center justify-center w-full h-full text-gold-muted/70 group-hover:text-gold-soft/80 text-xs font-mono">
                                {skill.name.charAt(0)}
                              </div>
                            </div>
                            <span className="text-[7px] text-gold-muted/70 text-center group-hover:text-gold-soft group-hover:font-medium transition-all duration-300 leading-tight relative z-10">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* Contact */}
        <section
          id="contact"
          className="relative border-t border-neutral-900/80 bg-black/95 py-24 overflow-hidden section-elegant"
        >
          {/* Enhanced background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="geometric-shape shape-square bottom-20 left-10 opacity-[0.04]" />
            <div className="geometric-shape shape-circle top-20 left-1/4 opacity-[0.04]" />
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-gold-soft/4 rounded-full blur-3xl opacity-40" />
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gold-soft/3 rounded-full blur-3xl opacity-30" />
          </div>
          
          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mx-auto max-w-2xl text-center space-y-6 animate-fade-in-up-elegant">
              <div className="relative inline-block">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-gold-soft sm:text-4xl decorative-line relative z-10">
                  Drop a Line
                </h2>
                {/* Subtle glow behind heading */}
                <div className="absolute inset-0 bg-gold-soft/10 blur-2xl -z-10" />
              </div>
              <p className="text-lg leading-relaxed text-gold-muted/90 max-w-xl mx-auto">
                If you&apos;d like to talk about systems, ideas, or opportunities, feel free to reach out.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {/* Email Card */}
              <a
                href="mailto:vamsi.027.11@gmail.com"
                className="group flex items-center gap-3 rounded-lg border border-neutral-800/50 bg-neutral-950/60 px-4 py-3 transition-all hover:border-gold-soft/40 hover:bg-neutral-950/80 card-elegant-hover relative overflow-hidden"
              >
                {/* Subtle shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900/50 border border-neutral-800/50 group-hover:border-gold-soft/30 transition-colors">
                  <svg className="h-5 w-5 text-gold-soft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gold-soft/90 group-hover:text-gold-soft relative z-10">
                  vamsi.027.11@gmail.com
                </span>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/m-sesha-sai-vamsi/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-neutral-800/50 bg-neutral-950/60 px-4 py-3 transition-all hover:border-gold-soft/40 hover:bg-neutral-950/80 card-elegant-hover relative overflow-hidden"
              >
                {/* Subtle shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900/50 border border-neutral-800/50 group-hover:border-gold-soft/30 transition-colors">
                  <svg className="h-5 w-5 text-gold-soft" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gold-soft/90 group-hover:text-gold-soft relative z-10">
                  Sesha Sai Vamsi
                </span>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/27vamsi"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-neutral-800/50 bg-neutral-950/60 px-4 py-3 transition-all hover:border-gold-soft/40 hover:bg-neutral-950/80 card-elegant-hover relative overflow-hidden"
              >
                {/* Subtle shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900/50 border border-neutral-800/50 group-hover:border-gold-soft/30 transition-colors">
                  <svg className="h-5 w-5 text-gold-soft" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gold-soft/90 group-hover:text-gold-soft relative z-10">
                  @27vamsi
                </span>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+917550027299"
                className="group flex items-center gap-3 rounded-lg border border-neutral-800/50 bg-neutral-950/60 px-4 py-3 transition-all hover:border-gold-soft/40 hover:bg-neutral-950/80 card-elegant-hover relative overflow-hidden"
              >
                {/* Subtle shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900/50 border border-neutral-800/50 group-hover:border-gold-soft/30 transition-colors">
                  <svg className="h-5 w-5 text-gold-soft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gold-soft/90 group-hover:text-gold-soft relative z-10">
                  +91 7550027299
                </span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="fixed bottom-8 right-8 z-50 group flex items-center justify-center w-12 h-12 rounded-full border border-gold-soft/30 bg-gradient-to-br from-neutral-950/90 via-neutral-950/80 to-neutral-950/90 backdrop-blur-sm transition-all duration-300 hover:border-gold-soft/60 hover:shadow-lg hover:shadow-gold-soft/20 hover:scale-110"
          aria-label="Scroll to top"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gold-soft/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Arrow icon */}
          <svg
            className="relative z-10 w-5 h-5 text-gold-soft/80 group-hover:text-gold-soft transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
          
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-full border border-gold-soft/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow" />
        </button>
      )}

      <footer className="border-t border-neutral-900/80 bg-black py-4 text-[11px] text-gold-muted">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} Sesha Sai Vamsi.</span>
        </div>
      </footer>
    </div>
  );
}

function PersonaCard({ title, subtitle, body, linkText, isHighlighted = false, currentPersona, personaIndex, onPersonaChange, isCompact = false, is3D = false }) {
  return (
    <div 
      className={`group relative flex flex-col justify-between text-left transition-all duration-500 rounded-lg border border-neutral-800/30 bg-neutral-950/20 backdrop-blur-sm ${
        isCompact 
          ? 'px-5 py-6 w-[260px] sm:w-[280px] min-h-[320px]' 
          : 'px-6 py-7 min-h-[180px]'
      } ${
        isHighlighted 
          ? 'border-gold-soft/40 bg-neutral-950/30 shadow-lg shadow-gold-soft/10' 
          : 'hover:border-neutral-700/30'
      }`}
      style={{
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: 'rotateY(0deg)',
      }}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 rounded-lg bg-gradient-to-br transition-all duration-700 ${
        isHighlighted 
          ? 'from-gold-soft/8 via-gold-soft/3 to-transparent opacity-100' 
          : 'from-gold-soft/3 via-transparent to-transparent opacity-30'
      }`} />
      
      {/* Animated particles/grid effect */}
      <div className="absolute inset-0 rounded-lg opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3e0c4_1px,transparent_1px),linear-gradient(to_bottom,#f3e0c4_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Unique asymmetric border design */}
      <div className="pointer-events-none absolute inset-0 rounded-lg">
        {/* Top-left corner accent */}
        <div className={`absolute top-0 left-0 h-px bg-gradient-to-r from-gold-soft/60 via-gold-soft/30 to-transparent transition-all duration-700 ${
          isHighlighted ? 'w-32 opacity-100' : 'w-24 opacity-40'
        }`} />
        <div className={`absolute top-0 left-0 w-px bg-gradient-to-b from-gold-soft/60 via-gold-soft/30 to-transparent transition-all duration-700 ${
          isHighlighted ? 'h-20 opacity-100' : 'h-16 opacity-40'
        }`} />
        
        {/* Bottom-right corner accent */}
        <div className={`absolute bottom-0 right-0 h-px bg-gradient-to-l from-gold-soft/60 via-gold-soft/30 to-transparent transition-all duration-700 ${
          isHighlighted ? 'w-32 opacity-100' : 'w-24 opacity-40'
        }`} />
        <div className={`absolute bottom-0 right-0 w-px bg-gradient-to-t from-gold-soft/60 via-gold-soft/30 to-transparent transition-all duration-700 ${
          isHighlighted ? 'h-20 opacity-100' : 'h-16 opacity-40'
        }`} />
        
        {/* Subtle side borders */}
        <div className={`absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold-soft/10 to-transparent transition-all duration-700 ${
          isHighlighted ? 'via-gold-soft/25' : ''
        }`} />
        <div className={`absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold-soft/10 to-transparent transition-all duration-700 ${
          isHighlighted ? 'via-gold-soft/25' : ''
        }`} />
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        {subtitle && (
          <p className={`font-mono uppercase tracking-[0.3em] transition-all duration-500 ${
            isCompact ? 'text-[10px]' : 'text-xs sm:text-sm'
          } ${
            isHighlighted ? 'text-gold-soft/90' : 'text-gold-muted/70'
          }`}>
            {subtitle}
          </p>
        )}
        <h3 className={`mt-2 font-display transition-all duration-500 ${
          isCompact ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
        } ${
          isHighlighted ? 'text-gold-soft' : 'text-gold-soft/80'
        }`}>
          {title}
        </h3>
        <p className={`mt-2 leading-relaxed transition-all duration-500 ${
          isCompact ? 'text-sm' : 'text-base sm:text-lg'
        } ${
          isHighlighted ? 'text-gold-muted' : 'text-gold-muted/70'
        }`}>
          {body}
        </p>
        {linkText && (
          <p className={`mt-3 text-sm font-medium transition-all duration-500 ${
            isHighlighted ? 'text-gold-soft' : 'text-gold-soft/70'
          }`}>
            {linkText}
          </p>
        )}
      </div>
      
      {/* Animated glow effect */}
      <div className={`absolute inset-0 -z-10 rounded-lg transition-all duration-700 ${
        isHighlighted 
          ? 'bg-gradient-to-br from-gold-soft/[0.03] via-gold-soft/[0.015] to-gold-soft/[0.03] shadow-[0_0_40px_rgba(243,224,196,0.1)]' 
          : ''
      }`} />
      
      {/* Bottom accent line */}
      <span className={`inline-flex h-px bg-gradient-to-r transition-all duration-700 relative z-10 ${
        isCompact ? 'mt-3' : 'mt-4'
      } ${
        isHighlighted 
          ? 'from-gold-soft to-transparent w-12' 
          : 'from-gold-soft/50 to-transparent w-8'
      }`} />
    </div>
  );
}

function ContactBlock({ label, children }) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-neutral-900 bg-neutral-950/80 p-4">
      <h3 className="text-[11px] font-mono uppercase tracking-[0.3em] text-gold-muted/80">
        {label}
      </h3>
      {children}
    </div>
  );
}
