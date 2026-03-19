"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Servicos() {
  const [verTodos, setVerTodos] = useState(false);

  const listaServicos = [
    {
      title: "Consultoria Estratégica",
      icon: "fas fa-lightbulb",
      desc: "Análise técnica detalhada para otimizar processos e reduzir custos operacionais com tecnologia.",
      preco: null,
    },
    {
      title: "Segurança Eletrónica",
      icon: "fas fa-shield-halved",
      desc: "Proteção perimetral avançada com sistemas inteligentes de detecção e resposta rápida.",
      preco: "150.000",
    },
    {
      title: "Video Vigilância CCTV",
      icon: "fas fa-video",
      desc: "Monitoramento em alta definição com acesso remoto e análise de vídeo em tempo real.",
      preco: "100.000",
    },
    {
      title: "Sistemas de RADAR",
      icon: "fas fa-microchip",
      desc: "Tecnologia de precisão para controle de velocidade e monitoramento de tráfego inteligente.",
      preco: "2.000.000",
    },
    {
      title: "Redes e Telecomunicações",
      icon: "fas fa-network-wired",
      desc: "Projetagem e implementação de infraestrutura de rede robusta para garantir alta performance.",
      preco: "200.000",
    },
    {
      title: "Controle de Acesso RFID",
      icon: "fas fa-id-card-clip",
      desc: "Gestão de fluxo de pessoas com fechaduras magnéticas e autenticação biométrica ou RFID.",
      preco: "100.000",
    },
    {
      title: "Energias Renováveis",
      icon: "fas fa-solar-panel",
      desc: "Implementação de sistemas fotovoltaicos para eficiência energética e sustentabilidade.",
      preco: "1.500.000",
    },
    {
      title: "Softwares de Arquitetura",
      icon: "fas fa-pen-ruler",
      desc: "Instalação e configuração de ferramentas avançadas para desenho técnico e modelagem 3D.",
      preco: null,
    },
    {
      title: "Criação de Sites",
      icon: "fas fa-laptop-code",
      desc: "Desenvolvimento de plataformas web responsivas, rápidas e focadas em conversão.",
      preco: "50.000",
    },
    {
      title: "Sistemas de Gestão Web",
      icon: "fas fa-database",
      desc: "Softwares ERP e CRM personalizados para centralizar o controle da sua empresa.",
      preco: "300.000",
    },
    {
      title: "Sistemas Personalizados",
      icon: "fas fa-code-merge",
      desc: "Desenvolvimento sob medida para resolver desafios específicos do seu negócio.",
      preco: null,
    },
    {
      title: "Fechadura Magnética Simples",
      icon: "fas fa-door-closed",
      desc: "Segurança básica e eficiente para portas internas e externas com travamento eletromagnético.",
      preco: "150.000",
    },
    // Estes aparecem no "Ver Mais"
    {
      title: "Sistema Biométrico Analógico",
      icon: "fas fa-fingerprint",
      desc: "Controle de entrada clássico por impressão digital com alta taxa de reconhecimento.",
      preco: "100.000",
    },
    {
      title: "Sistema Biométrico Completo",
      icon: "fas fa-users-gear",
      desc: "Solução integral com gestão de horários, relatórios e integração com software de RH.",
      preco: "400.000",
    },
    {
      title: "Controle de Acesso e Biometria",
      icon: "fas fa-user-shield",
      desc: "Combinação de segurança física e digital para áreas de acesso restrito e alta segurança.",
      preco: "400.000",
    },
    {
      title: "Manutenção Preventiva",
      icon: "fas fa-tools",
      desc: "Suporte técnico contínuo para garantir que sua infraestrutura nunca pare de funcionar.",
      preco: null,
    },
  ];

  const servicosExibidos = verTodos ? listaServicos : listaServicos.slice(0, 12);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: (i % 12) * 0.05, duration: 0.4 },
    }),
  };

  return (
    <section id="servicos" className="py-24 lg:py-40 bg-neutral-100">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl space-y-4">
            <h4 className="text-blue-900 font-bold uppercase tracking-[0.3em] text-xs">
              Nossas Soluções
            </h4>
            <h2 className="text-4xl lg:text-5xl font-light text-neutral-700 leading-tight">
              Tecnologia de ponta para <br />
              <span className="font-bold text-blue-900">
                infraestruturas críticas.
              </span>
            </h2>
          </div>
          <div className="hidden md:block w-24 h-px bg-neutral-400 mb-4"></div>
        </div>

        {/* Grid de Serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-neutral-400/20 overflow-hidden rounded-2xl border border-neutral-400/20 shadow-2xl">
          <AnimatePresence initial={false}>
            {servicosExibidos.map((servico, index) => (
              <motion.div
                key={servico.title}
                custom={index}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
                variants={cardVariants}
                layout
                className="bg-neutral-50 p-10 transition-all duration-700 group relative hover:z-10 flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, color: "#1E40AF" }}
                    className="mb-8 w-14 h-14 flex items-center justify-center rounded-xl bg-neutral-100 group-hover:bg-blue-900 transition-all duration-500 shadow-sm text-blue-900 text-2xl"
                  >
                    <i className={servico.icon}></i>
                  </motion.div>

                  <h3 className="text-lg font-bold text-neutral-700 mb-4 group-hover:text-blue-900 transition-colors duration-300 min-h-14 flex items-center leading-snug">
                    {servico.title}
                  </h3>

                  <div className="mb-6 flex items-center h-8">
                    {servico.preco ? (
                      <div className="flex flex-col">
                        <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider leading-none">A partir de</span>
                        <span className="text-blue-900 font-bold text-lg leading-tight">{servico.preco} Kz </span>
                      </div>
                    ) : (
                      <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-neutral-200 group-hover:bg-blue-900/10 group-hover:text-blue-900 transition-colors duration-500">
                        Sob consulta
                      </span>
                    )}
                  </div>

                  <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                    {servico.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 overflow-hidden relative z-10">
                  <div className="w-8 h-px bg-blue-900 -translate-x-12 group-hover:translate-x-0 transition-transform duration-500"></div>
                  <span className="text-[10px] font-bold text-blue-900 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {servico.title.split(" ")[0]}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Área de Ação */}
        <div className="mt-20 flex flex-col items-center gap-10">
          
          {/* Botão Alternável Ver Mais / Ver Menos */}
          <button
            onClick={() => setVerTodos(!verTodos)}
            className="group cursor-pointer flex items-center gap-4 px-10 py-4 border-2 border-blue-900 text-blue-900 font-bold rounded-full hover:bg-blue-900 hover:text-neutral-50 transition-all duration-500 uppercase text-xs tracking-[0.2em]"
          >
            {verTodos ? "Ver menos serviços" : "Ver mais serviços"}
            <i className={`fas fa-chevron-down transition-transform duration-500 ${verTodos ? "rotate-180" : ""}`} />
          </button>

          {/* CTA Principal */}
          <Link
            href="#contato"
            className="group relative px-14 py-6 bg-blue-900 text-neutral-50 font-bold rounded-full overflow-hidden transition-all shadow-[0_20px_50px_rgba(30,58,138,0.2)] hover:shadow-blue-900/40 active:scale-95 text-center mt-4"
          >
            <span className="relative z-10 flex items-center gap-3">
              Falar com um Consultor Especialista
              <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-2" />
            </span>
            <div className="absolute inset-0 bg-blue-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </Link>
          
          <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-[0.4em]">
            Qualidade · Segurança · Inovação
          </p>
        </div>
      </div>
    </section>
  );
}