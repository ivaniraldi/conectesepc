'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center text-center text-white overflow-hidden p-0">
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
        <Image
          src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1920&h=1080&fit=crop"
          alt="Escritório moderno com tecnologia de ponta"
          data-ai-hint="modern office technology"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline tracking-tight animate-fade-in-up transition-all duration-300 ease-in-out hover:neon-primary hover:scale-105">
          Tecnologia e Desempenho Sob Medida
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-200 text-shadow-sm animate-fade-in-up transition-transform duration-300 ease-in-out hover:scale-105" style={{ animationDelay: '0.5s' }}>
          Soluções de computadores Brazil PC para empresas que buscam eficiência, design e suporte especializado.
        </p>
        <Button size="lg" className="mt-8 animate-fade-in-up transition-transform hover:scale-110" style={{ animationDelay: '1s' }} asChild>
          <a href="#produtos">Explore Nossas Soluções</a>
        </Button>
      </div>
    </section>
  );
}
