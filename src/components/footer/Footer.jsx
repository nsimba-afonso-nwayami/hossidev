import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-50 relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Coluna 1: Logo e descrição */}
        <div className="md:col-span-1">
          <h3 className="text-3xl font-bold text-neutral-50 mb-6 tracking-tighter">
            HOSSI<span className="text-blue-900 font-black">DEV</span>
          </h3>
          <p className="text-neutral-400 leading-relaxed max-w-sm">
            Soluções avançadas em tecnologia da informação e desenvolvimento digital. 
            Impulsionamos negócios através de infraestrutura robusta e inovação constante.
          </p>
          
          {/* Redes sociais - Ícones brancos no hover azul */}
          <div className="flex mt-8 space-x-4">
            {["facebook-f", "instagram", "linkedin-in"].map((icon, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center justify-center w-10 h-10 text-neutral-50 bg-neutral-900 rounded-lg border border-neutral-800 shadow-sm hover:bg-blue-900 hover:border-blue-900 transform hover:-translate-y-1 transition-all duration-300"
              >
                <i className={`fab fa-${icon} text-sm`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Coluna 2: Links rápidos */}
        <div className="md:pl-10">
          <h4 className="text-lg font-bold text-neutral-50 uppercase tracking-widest mb-6">
            Navegação
          </h4>
          <ul className="space-y-4 text-neutral-400 font-medium">
            <li>
              <Link href="/" className="hover:text-blue-800 transition-colors">Início</Link>
            </li>
            <li>
              <Link href="/#servicos" className="hover:text-blue-800 transition-colors">Serviços</Link>
            </li>
            <li>
              <Link href="/#sobre" className="hover:text-blue-800 transition-colors">Sobre Nós</Link>
            </li>
            <li>
              <Link href="/#contato" className="hover:text-blue-800 transition-colors">Contato</Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Contato com Ícones Brancos */}
        <div>
          <h4 className="text-lg font-bold text-neutral-50 uppercase tracking-widest mb-6">
            Contato
          </h4>
          <div className="text-neutral-400 space-y-4">
            <div className="flex items-start">
              {/* Ícone agora é neutral-50 */}
              <i className="fas fa-map-marker-alt mt-1 mr-3 text-neutral-50"></i>
              <p className="text-sm leading-relaxed">
                Centralidade do Kilamba Quarteirão F,<br />
                Edifício F27, Apt. 91, Luanda, Angola
              </p>
            </div>
            <div className="flex items-center">
              <i className="fas fa-phone mr-3 text-neutral-50"></i>
              <a href="tel:+244924034804" className="hover:text-blue-800 transition">+244 924 034 804</a>
            </div>
            <div className="flex items-center">
              <i className="fas fa-envelope mr-3 text-neutral-50"></i>
              <a href="mailto:geral@hossidev.com" className="hover:text-blue-800 transition">geral@hossidev.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Divisor */}
      <div className="border-t border-neutral-900"></div>

      {/* Créditos */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-xs tracking-widest uppercase font-semibold">
        <p>
          &copy; {new Date().getFullYear()} HOSSIDEV. Todos os direitos reservados.
        </p>
        <div className="mt-4 md:mt-0 flex items-center gap-6">
          <Link href="/termos" className="hover:text-neutral-50 transition">Termos</Link>
          <Link href="/privacidade" className="hover:text-neutral-50 transition">Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}