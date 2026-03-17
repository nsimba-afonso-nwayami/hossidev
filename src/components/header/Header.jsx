"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Fecha o menu automaticamente ao rolar
      setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed w-full top-0 left-0 z-50 px-6 transition-all duration-500 ease-in-out
        ${scrolled 
          ? "py-3 bg-black/80 backdrop-blur-lg border-b border-neutral-800 shadow-md" 
          : "py-6 bg-transparent border-b border-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center" title="HOSSIDEV">
          <Image
            src={logo}
            alt="HOSSIDEV"
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Botão Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-neutral-50 text-2xl transition-transform duration-300 focus:outline-none"
        >
          <i className={`fas ${menuOpen ? "fa-xmark rotate-180 scale-110" : "fa-bars rotate-0 scale-100"} transition-all duration-300`}></i>
        </button>

        {/* Menu - Mantendo sua estrutura original de links */}
        <nav
          className={`
            absolute md:static top-full right-0 w-full md:w-auto
            flex flex-col md:flex-row items-center gap-6
            text-neutral-50 font-medium
            transition-all duration-500 ease-in-out overflow-hidden
            ${menuOpen 
              ? "max-h-96 py-6 bg-black/95 md:bg-transparent border-b border-neutral-800 md:border-none" 
              : "max-h-0 md:max-h-full"}
          `}
        >
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-800 transition-colors duration-300 uppercase text-sm tracking-wider font-semibold">Início</Link>
          <Link href="/#sobre" onClick={() => setMenuOpen(false)} className="hover:text-blue-800 transition-colors duration-300 uppercase text-sm tracking-wider font-semibold">Sobre</Link>
          <Link href="/#servicos" onClick={() => setMenuOpen(false)} className="hover:text-blue-800 transition-colors duration-300 uppercase text-sm tracking-wider font-semibold">Serviços</Link>
          <Link href="/#contato" onClick={() => setMenuOpen(false)} className="hover:text-blue-800 transition-colors duration-300 uppercase text-sm tracking-wider font-semibold">Contato</Link>

          {/* CTA - Estilo Premium para combinar com o Hero */}
          <a
            href="https://wa.me/244972614886?text=Olá%20HOSSIDEV,%20preciso%20de%20suporte%20de%20TI."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-900 text-neutral-50 px-6 py-2 rounded-md hover:bg-blue-800 transition-all duration-300 border border-blue-800 font-bold shadow-lg shadow-blue-900/20"
          >
            <i className="fab fa-whatsapp text-lg"></i>
            Falar com Especialista
          </a>
        </nav>
      </div>
    </header>
  );
}