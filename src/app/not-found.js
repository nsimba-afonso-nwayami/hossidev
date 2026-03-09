import Link from "next/link";

// SEO Simples para página 404
export const metadata = {
  title: "Página não encontrada | HOSSIDEV",
  description: "A página que você procura não existe ou foi movida.",
  robots: {
    index: false, // Diz ao Google: "Não mostre esta página nas buscas"
    follow: true, // Mas permite que ele siga os links (como o botão 'Voltar')
  },
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-900 py-6 px-6 relative overflow-hidden">
      
      {/* Elemento Decorativo Sutil de Fundo (Grid Tecnológico) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/img/grid.svg')] bg-center mask-[linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      {/* Brilho Radial Sutil (Glow) */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-900/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="text-center space-y-12 relative z-10 container mx-auto max-w-5xl">
        
        {/* Visual de Impacto: O "404" Tecnológico */}
        <div className="relative inline-block group">
          <h1 className="text-[clamp(5rem,20vw,22rem)] font-black text-neutral-800 leading-none select-none tracking-tighter opacity-70 group-hover:opacity-100 transition-opacity duration-700">
            4<span className="text-blue-600 animate-pulse">0</span>4
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-[clamp(1.2rem,3vw,3rem)] font-light text-neutral-50 uppercase tracking-[0.4em] leading-tight drop-shadow-lg">
            Conexão <span className="font-extrabold text-blue-400">interrompida</span>
          </h2>
          </div>
        </div>

        {/* Linha Divisória Minimalista */}
        <div className="w-24 h-px bg-linear-to-r from-transparent via-neutral-600 to-transparent mx-auto"></div>

        {/* Mensagem de Apoio */}
        <div className="max-w-xl mx-auto space-y-4">
          <p className="text-neutral-300 text-xl font-medium leading-relaxed">
            Parece que o link que você tentou acessar não está respondendo. A página pode ter sido movida ou não existe mais na nossa infraestrutura digital.
          </p>
        </div>

        {/* Ações de Retorno Otimizadas */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
          <Link 
            href="/" 
            className="px-12 py-5 bg-blue-900 text-neutral-50 font-bold rounded-full hover:bg-neutral-50 hover:text-blue-900 transition-all duration-300 shadow-[0_15px_40px_rgba(30,58,138,0.4)] active:scale-95 flex items-center gap-3 group text-sm uppercase tracking-widest"
          >
            <i className="fas fa-arrow-left text-sm group-hover:-translate-x-1.5 transition-transform" />
            Restabelecer Conexão Home
          </Link>
          
          <Link 
            href="/#contato" 
            className="px-12 py-5 border-2 border-neutral-600 text-neutral-200 font-bold rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-300 active:scale-95 text-sm uppercase tracking-widest"
          >
            REPORTAR FALHA TÉCNICA
          </Link>
        </div>

      </div>
    </section>
  );
}