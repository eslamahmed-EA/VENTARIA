import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, Shield, ArrowUpLeft, ArrowUpRight, Code, Database, Globe2, Cloud } from 'lucide-react';
import { Language } from '../types';

interface Hero3DProps {
  lang: Language;
  t: any;
  setCurrentNav: (nav: string) => void;
}

export default function Hero3D({ lang, t, setCurrentNav }: Hero3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse Move Event listener for organic 3D parallax tilting
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // range: -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5; // range: -0.5 to 0.5
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // HTML5 Canvas Particle System in background for ultimate weightless micro-animations
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      grow: boolean;
    }> = [];

    // Create particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4 - 0.2, // bias floating upwards
        opacity: Math.random() * 0.7 + 0.1,
        grow: Math.random() > 0.5
      });
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // floating physics
        p.x += p.speedX;
        p.y += p.speedY;

        // opacity cycle
        if (p.grow) {
          p.opacity += 0.005;
          if (p.opacity >= 0.8) p.grow = false;
        } else {
          p.opacity -= 0.005;
          if (p.opacity <= 0.1) p.grow = true;
        }

        // boundaries check
        if (p.y < 0) p.y = height;
        if (p.x < 0 || p.x > width) p.x = Math.random() * width;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 214, 181, ${p.opacity})`;
        ctx.fill();
      });

      // Simple grid connection logic for web tech-feeling nodes
      ctx.strokeStyle = 'rgba(99, 214, 181, 0.03)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen pt-36 pb-20 flex items-center justify-center overflow-hidden bg-[#030712]"
    >
      {/* Background canvas for lightweight particle systems */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0" 
      />

      {/* Massive ambient blurred neon backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#63D6B5] to-[#46C6A5] opacity-10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[15%] w-[300px] h-[300px] bg-[#89FFE1] opacity-5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-60 z-0" />

      {/* Container Layout */}
      <div className="container mx-auto px-6 max-w-7xl pt-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left/Content Column (staggered animated entries) */}
        <div 
          style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
          className="lg:col-span-7 flex flex-col justify-center text-right text-right"
        >
          {/* Trust badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#63D6B5]/10 border border-[#63D6B5]/20 text-[#89FFE1] text-xs font-mono font-bold tracking-wide self-start ${lang === 'ar' ? 'md:ml-auto' : 'md:mr-auto'}`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#63D6B5] animate-pulse" />
            <span>{t.heroTrustBadge}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white leading-[1.12] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-400"
          >
            {t.heroTitle}
          </motion.h1>

          {/* Description Slogan */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-gray-400 font-sans text-sm md:text-lg leading-relaxed max-w-2xl text-justify"
          >
            {t.heroSubtitle}
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-start items-stretch sm:items-center"
          >
            <a
              href="#contact"
              onClick={() => setCurrentNav('contact')}
              className="flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 font-bold text-sm tracking-wide shadow-xl shadow-[#63D6B5]/10 hover:shadow-[#63D6B5]/20 hover:scale-[1.02] transition-transform duration-300"
            >
              <span>{t.ctaGetStarted}</span>
              {lang === 'ar' ? <ArrowUpLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
            </a>
            
            <a
              href="#portfolio"
              onClick={() => setCurrentNav('portfolio')}
              className="flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-gray-900/60 border border-gray-800 text-white font-bold text-sm tracking-wide hover:border-[#63D6B5]/60 hover:bg-gray-900 transition-colors duration-300"
            >
              <span>{t.ctaViewPortfolio}</span>
            </a>
          </motion.div>

          {/* Trust Stats Counter (Bento-grid styled list) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-900 pt-8"
          >
            <div>
              <div className="text-2xl md:text-3xl font-black font-mono text-[#89FFE1]">500+</div>
              <div className="text-[10px] text-gray-500 font-mono mt-1 uppercase tracking-wider">{t.heroStatProjects}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black font-mono text-white">250+</div>
              <div className="text-[10px] text-gray-500 font-mono mt-1 uppercase tracking-wider">{t.heroStatClients}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black font-mono text-[#63D6B5]">99%</div>
              <div className="text-[10px] text-gray-500 font-mono mt-1 uppercase tracking-wider">{t.heroStatSatisfaction}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black font-mono text-white">24/7</div>
              <div className="text-[10px] text-gray-500 font-mono mt-1 uppercase tracking-wider">{t.heroStatSupport}</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Centerpiece Vector/SVG System */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          
          <motion.div 
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            style={{
              transform: `perspective(1000px) rotateX(${mousePos.y * 15}deg) rotateY(${mousePos.x * 15}deg)`
            }} 
            className="w-full max-w-[420px] aspect-square relative flex items-center justify-center transition-all duration-300"
          >
            
            {/* Ambient Outer Ring with orbiting circle */}
            <div className="absolute inset-0 rounded-full border border-[#63D6B5]/15 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-dashed border-[#89FFE1]/20 animate-[spin_25s_linear_infinite_reverse]" />
            <div className="absolute inset-10 rounded-full border border-[#63D6B5]/30 animate-[spin_15s_linear_infinite]" />

            {/* Glowing Centerpiece inspired by the logo */}
            <div className="relative w-44 h-44 rounded-full bg-[#030712] border-2 border-[#63D6B5] flex items-center justify-center shadow-[0_0_50px_rgba(99,214,181,0.25)]">
              
              {/* Rotating glowing core logo vector */}
              <svg className="w-24 h-24 animate-[spin_30s_linear_infinite]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Dynamic circular movement curves */}
                <circle cx="50" cy="50" r="42" stroke="url(#logo-grad-1)" strokeWidth="2" strokeDasharray="30 15 10 5" />
                <circle cx="50" cy="50" r="30" stroke="url(#logo-grad-2)" strokeWidth="2.5" strokeDasharray="40 10" />
                <path d="M50 20C66.5685 20 80 33.4315 80 50C80 66.5685 66.5685 80 50 80" stroke="#89FFE1" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="logo-grad-1" x1="0" y1="0" x2="100" y2="100">
                    <stop offset="0%" stopColor="#63D6B5" />
                    <stop offset="100%" stopColor="#07111D" />
                  </linearGradient>
                  <linearGradient id="logo-grad-2" x1="0" y1="100" x2="100" y2="0">
                    <stop offset="0%" stopColor="#89FFE1" />
                    <stop offset="100%" stopColor="#46C6A5" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center icon overlay */}
              <div className="absolute inset-0 m-auto w-12 h-12 bg-gray-950 rounded-full border border-[#63D6B5]/40 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-[#89FFE1]" />
              </div>
            </div>

            {/* Floating technology badges mirroring our categories */}
            <motion.div 
              style={{ transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)` }}
              className="absolute top-[10%] left-[8%] p-3 rounded-2xl bg-[#07111D]/80 border border-gray-800 backdrop-blur-md shadow-2xl flex items-center justify-center group"
            >
              <Code className="w-4 h-4 text-[#89FFE1] group-hover:scale-110 transition-transform" />
            </motion.div>

            <motion.div 
              style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * -15}px)` }}
              className="absolute bottom-[15%] left-[5%] p-3 rounded-2xl bg-[#07111D]/80 border border-gray-800 backdrop-blur-md shadow-2xl flex items-center justify-center group"
            >
              <Database className="w-4 h-4 text-[#63D6B5] group-hover:scale-110 transition-transform" />
            </motion.div>

            <motion.div 
              style={{ transform: `translate(${mousePos.x * -25}px, ${mousePos.y * 20}px)` }}
              className="absolute top-[25%] right-[2%] p-3 rounded-2xl bg-[#07111D]/80 border border-gray-800 backdrop-blur-md shadow-2xl flex items-center justify-center group"
            >
              <Cloud className="w-4 h-4 text-[#89FFE1] group-hover:scale-110 transition-transform" />
            </motion.div>

            <motion.div 
              style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)` }}
              className="absolute bottom-[8%] right-[10%] p-3 rounded-2xl bg-[#07111D]/80 border border-gray-800 backdrop-blur-md shadow-2xl flex items-center justify-center group"
            >
              <Globe2 className="w-4 h-4 text-[#63D6B5] group-hover:scale-110 transition-transform" />
            </motion.div>
          </motion.div>

        </div>

      </div>

      {/* Modern Wave-cut Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none z-10" />
    </section>
  );
}
