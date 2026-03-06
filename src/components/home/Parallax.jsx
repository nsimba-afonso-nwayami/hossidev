import Link from "next/link";
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
      {/* Overlay Premium (Seu azul blue-900 com 85% de opacidade e mix-blend) */}
      <div className="absolute inset-0 bg-blue-900/85 mix-blend-multiply"></div>
      
      {/* Gradiente adicional para profundidade */}
      <div className="absolute inset-0 bg-linear-to-b from-blue-900/40 via-transparent to-blue-900/60"></div>

      {/* Conteúdo Centralizado */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          
          <div className="space-y-4">
            <h4 className="text-neutral-50 font-bold uppercase tracking-[0.5em] text-xs md:text-sm animate-pulse">
              Tecnologia que Antecipa o Futuro
            </h4>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-extralight text-neutral-50 leading-tight">
              Segurança e <span className="font-bold text-white">Performance</span> <br />
              de Classe Mundial.
            </h2>
          </div>

          <p className="text-neutral-100/90 text-lg md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed">
            Na <span className="font-bold text-white">HOSSIDEV</span>, transformamos a complexidade tecnológica em vantagem competitiva para o seu negócio.
          </p>

          <div className="pt-8">
            <Link 
              href="#contato" 
              className="group relative inline-flex items-center gap-4 px-12 py-5 bg-neutral-50 text-blue-900 font-black rounded-full transition-all duration-300 hover:bg-blue-800 hover:text-neutral-50 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            >
              <span className="relative z-10">SOLICITAR ORÇAMENTO AGORA</span>
              <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
          
        </div>
      </div>

      {/* Detalhe Decorativo Inferior (Linha de Luz) */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <div className="w-px h-20 bg-linear-to-t from-neutral-50 to-transparent opacity-40"></div>
      </div>
    </section>
  );
}