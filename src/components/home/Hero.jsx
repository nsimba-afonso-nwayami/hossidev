"use client";

import Link from "next/link";
import Image from "next/image";
import heroBg from "@/assets/img/hero.jpg";
import { useEffect, useState } from "react";

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Dispara animações quando o componente é montado
    const timeout = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">
      {/* 1. Imagem de Fundo */}
      <Image
        src={heroBg}
        alt="Infraestrutura de TI Avançada"
        fill
        priority
        className="object-cover object-center z-0 opacity-70"
      />

      {/* 2. Overlay Preto/Gradiente */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent z-10" />

      {/* 3. Conteúdo */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="max-w-3xl space-y-6">
          {/* Linha de acento azul */}
          <div
            className={`w-16 h-1 bg-blue-900 mb-4 rounded-full transition-all duration-1000 transform ${
              animate
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          />

          {/* Título */}
          <h1
            className={`text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-50 leading-snug tracking-tight transition-all duration-1000 transform ${
              animate
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            Tecnologia de <span className="text-blue-800">Elite</span> para
            Empresas Visionárias
          </h1>

          {/* Descrição */}
          <p
            className={`mt-6 text-base md:text-lg text-neutral-200 max-w-2xl leading-relaxed font-light transition-all duration-1000 delay-200 transform ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Especialistas em infraestrutura crítica, segurança cibernética e
            cloud computing. Protegemos o seu hoje, construindo o seu amanhã.
          </p>

          {/* Botões */}
          <div
            className={`mt-10 flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 delay-400 transform ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <Link
              href="/#contato"
              className="group w-full sm:w-auto px-8 py-3 bg-blue-900 text-neutral-50 font-bold rounded-lg hover:bg-blue-800 shadow-lg transition-all duration-300 text-center"
            >
              Começar agora
            </Link>

            <Link
              href="/#servicos"
              className="w-full sm:w-auto px-8 py-3 border border-neutral-600 text-neutral-50 font-bold rounded-lg hover:bg-neutral-50 hover:text-black transition-all duration-300 text-center"
            >
              Nossas Soluções
            </Link>
          </div>

          {/* Stats Rápidos */}
          <div
            className={`mt-16 flex flex-wrap gap-10 border-l border-blue-900 pl-6 transition-all duration-1000 delay-600 transform ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <div>
              <p className="text-2xl md:text-3xl font-bold text-neutral-50">
                99.9%
              </p>
              <p className="text-xs md:text-sm text-neutral-400 uppercase tracking-widest mt-1">
                Uptime
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-neutral-50">
                24/7
              </p>
              <p className="text-xs md:text-sm text-neutral-400 uppercase tracking-widest mt-1">
                Suporte
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-neutral-50">
                +500
              </p>
              <p className="text-xs md:text-sm text-neutral-400 uppercase tracking-widest mt-1">
                Projetos
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detalhe de borda inferior */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neutral-800 to-transparent z-20" />
    </section>
  );
}
