"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import sobre from "@/assets/img/sobre.jpg";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="py-20 lg:py-32 bg-neutral-50 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Lado Esquerdo: Imagem com Elementos Decorativos */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Moldura decorativa atrás da imagem usando seu azul principal */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-900 rounded-lg z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500" />

            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/img/sobre.jpg"
                alt="Nossa equipe de especialistas em TI"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Selo de Experiência */}
            <motion.div
              className="absolute -top-10 -left-10 bg-blue-900 p-8 rounded-lg shadow-xl z-20 hidden md:block"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-4xl font-bold text-neutral-50 text-center">
                10+
              </p>
              <p className="text-xs text-neutral-100 uppercase tracking-widest text-center mt-1">
                Anos de <br /> Mercado
              </p>
            </motion.div>
          </motion.div>

          {/* Lado Direito: Texto e Conteúdo */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-4">
              <h4 className="text-blue-900 font-bold uppercase tracking-[0.2em] text-sm">
                Quem Somos
              </h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-700 leading-tight">
                Transformando desafios complexos em{" "}
                <span className="text-blue-800 font-black">
                  soluções simples.
                </span>
              </h2>
            </div>

            <p className="text-neutral-600 text-lg leading-relaxed">
              Na <span className="font-bold text-neutral-700">HOSSIDEV</span>,
              não apenas implementamos tecnologia; construímos os alicerces
              digitais que permitem que empresas cresçam com segurança e
              escalabilidade.
            </p>

            {/* Lista de diferenciais usando a paleta */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Consultoria Estratégica",
                "Suporte Técnico Proativo",
                "Segurança de Dados",
                "Inovação Constante",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center">
                    <i className="fas fa-check text-[10px] text-neutral-50"></i>
                  </div>
                  <span className="text-neutral-500 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                href="/#servicos"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-neutral-50 font-bold rounded-md hover:bg-blue-800 transition-all duration-300 group"
              >
                Explorar nossos serviços
                <i className="fas fa-arrow-down text-sm transition-transform group-hover:translate-y-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
