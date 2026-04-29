"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Estilos do Swiper
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Hero() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const slides = [
    {
      title: "Ofertas Especiais de",
      highlight: "Temporada Tech",
      desc: "CCTV a partir de 100.000 Kz e Sites Institucionais a partir de 50.000 Kz. Tecnologia de ponta com condições exclusivas.",
      price: "Promoções Ativas",
      img: "/img/promocao.jpg",
    },
    {
      title: "Suporte de TI Profissional para",
      highlight: "Empresas Modernas",
      desc: "Especialistas em infraestrutura, redes e consultoria tecnológica para empresas que buscam alta performance em Luanda.",
      price: "A partir de 100.000 Kz",
      img: "/img/suporte.jpg",
    },
    {
      title: "Segurança Eletrónica e",
      highlight: "Vigilância CCTV",
      desc: "Instalação de câmeras IP de alta definição e monitoramento remoto. Proteja seu patrimônio com o que há de mais moderno.",
      price: "A partir de 20.000 Kz",
      img: "/img/seguranca.jpg",
    },
    {
      title: "Redes e",
      highlight: "Telecomunicações",
      desc: "Projetamos e implementamos redes estruturadas, Wi-Fi corporativo e sistemas de telecomunicações robustos.",
      price: "A partir de 200.000 Kz",
      img: "/img/hero.jpg",
    },
    {
      title: "Criação de",
      highlight: "Sistemas e Sites",
      desc: "Desenvolvemos sites institucionais, sistemas de gestão web e soluções personalizadas para o seu negócio.",
      price: "A partir de 50.000 Kz",
      img: "/img/sites.jpg",
    }
  ];

  if (!domLoaded) return <section className="h-screen bg-black" />;

  return (
    <section className="relative w-full h-screen bg-black group">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className="relative w-full h-full flex items-center overflow-hidden">
                
                <div className={`absolute inset-0 transition-transform duration-8000 ease-linear ${isActive ? "scale-110" : "scale-100"}`}>
                  <Image
                    src={slide.img}
                    alt={slide.highlight}
                    fill
                    priority={index === 0}
                    className="object-cover opacity-60"
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent z-10" />

                <div className="container mx-auto px-6 lg:px-12 relative z-20">
                  <div className="max-w-4xl space-y-6">
                    
                    <div className={`w-16 h-1 bg-blue-900 rounded-full transition-all duration-1000 delay-300 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`} />

                    <h1 className={`text-3xl md:text-5xl lg:text-7xl font-bold text-neutral-50 leading-tight transition-all duration-1000 delay-500 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                      {slide.title} <br />
                      <span className="text-blue-600 uppercase tracking-tighter">{slide.highlight}</span>
                    </h1>

                    <p className={`text-base md:text-xl text-neutral-200 max-w-2xl font-light leading-relaxed transition-all duration-1000 delay-700 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                      {slide.desc}
                    </p>

                    {slide.price && (
                      <div className={`inline-block px-4 py-2 bg-blue-900/20 border border-blue-900/30 rounded-lg transition-all duration-1000 delay-800 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
                        <p className="text-blue-400 font-bold text-lg md:text-xl italic">{slide.price}</p>
                      </div>
                    )}

                    {/* GRUPO DE BOTÕES ATUALIZADO */}
                    <div className={`flex flex-wrap gap-4 pt-6 transition-all duration-1000 delay-1000 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                      
                      {/* Botão Loja (Destaque Principal) */}
                      <Link
                        href="https://lojaonline.hossidev.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="px-8 py-4 bg-white text-blue-900 font-black rounded-xl hover:bg-blue-900 hover:text-white shadow-2xl transition-all text-center uppercase text-xs tracking-[0.2em] flex items-center gap-2"
                      >
                        <i className="fas fa-shopping-cart"></i>
                        Ir para a Loja
                      </Link>

                      {/* Botão Especialista */}
                      <Link
                        href="/#contato"
                        className="px-8 py-4 bg-blue-900 text-neutral-50 font-black rounded-xl hover:bg-blue-800 shadow-xl shadow-blue-900/20 transition-all text-center uppercase text-xs tracking-widest"
                      >
                        Falar com Especialista
                      </Link>

                      {/* Botão Serviços */}
                      <Link
                        href="/#servicos"
                        className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all text-center uppercase text-xs tracking-widest"
                      >
                        Serviços
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          opacity: 0;
          transition: all 0.3s ease;
          transform: scale(0.6);
        }
        .group:hover .swiper-button-next, .group:hover .swiper-button-prev {
          opacity: 0.4;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          opacity: 1 !important;
          transform: scale(0.7);
        }
        .swiper-pagination-bullet {
          background: white !important;
        }
        .swiper-pagination-bullet-active {
          background: #1e3a8a !important;
          width: 28px !important;
          border-radius: 4px !important;
        }
      `}</style>

      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neutral-800 to-transparent z-30" />
    </section>
  );
}