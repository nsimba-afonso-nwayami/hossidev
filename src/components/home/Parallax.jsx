"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import parallax from "@/assets/img/parallax.jpg";

export default function Parallax() {
  return (
    <section
      className="relative w-full h-125 md:h-162.5 flex items-center justify-center text-center overflow-hidden border-t border-blue-900/20 border-b"
      style={{
        backgroundImage: `url(${parallax.src})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay Premium */}
      <div className="absolute inset-0 bg-blue-900/85 mix-blend-multiply"></div>

      {/* Gradiente adicional */}
      <div className="absolute inset-0 bg-linear-to-b from-blue-900/40 via-transparent to-blue-900/60"></div>

      {/* Conteúdo Centralizado com animação */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-6"
      >
        <div className="max-w-4xl mx-auto space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-neutral-50 font-bold uppercase tracking-[0.5em] text-[9px] md:text-[11px] animate-pulse">
              Tecnologia que Antecipa o Futuro
            </h4>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extralight text-neutral-50 leading-tight">
              Segurança e{" "}
              <span className="font-bold text-white">Performance</span> <br />
              de Classe Mundial.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-100/90 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Na <span className="font-bold text-white">HOSSIDEV</span>,
            transformamos a complexidade tecnológica em vantagem competitiva
            para o seu negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8"
          >
            <Link
              href="#contato"
              className="group relative inline-flex items-center gap-4 px-12 py-5 bg-neutral-50 text-blue-900 font-black rounded-full transition-all duration-300 hover:bg-blue-800 hover:text-neutral-50 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            >
              <span className="relative z-10">SOLICITAR ORÇAMENTO AGORA</span>
              <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Detalhe decorativo inferior */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <div className="w-px h-20 bg-linear-to-t from-neutral-50 to-transparent opacity-40"></div>
      </div>
    </section>
  );
}
