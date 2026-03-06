import Hero from "@/components/home/Hero";
import Sobre from "@/components/home/Sobre";
import Servicos from "@/components/home/Servicos";
import Parallax from "@/components/home/Parallax";
import Contato from "@/components/home/Contato";

// 1. Configuração de Metadata (SEO Principal)
export const metadata = {
  title: "HOSSIDEV | Tecnologia, Segurança Eletrónica e Consultoria em Angola",
  description: "Especialistas em Segurança Eletrónica, CCTV, Redes, Energias Renováveis e Desenvolvimento de Sistemas em Luanda. Soluções de infraestrutura de alta performance.",
  keywords: "Segurança Eletrónica Angola, CCTV Luanda, Consultoria Tecnológica, HOSSIDEV, Redes e Telecomunicações, Desenvolvimento de Software Angola, Energias Renováveis Luanda",
  authors: [{ name: "HOSSIDEV" }],
  creator: "HOSSIDEV",
  publisher: "HOSSIDEV",
  alternates: {
    canonical: "https://www.hossidev.com",
  },
  openGraph: {
    title: "HOSSIDEV | Soluções Tecnológicas de Alta Performance",
    description: "Infraestrutura digital, segurança e sistemas personalizados para o mercado angolano.",
    url: "https://www.hossidev.com",
    siteName: "HOSSIDEV",
    locale: "pt_AO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Crie uma imagem de 1200x630px na pasta public
        width: 1200,
        height: 630,
        alt: "HOSSIDEV Tecnologia e Segurança",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  // 2. Dados Estruturados (JSON-LD) para o Google entender que é uma empresa local
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "HOSSIDEV",
    "image": "https://www.hossidev.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sua Rua aqui",
      "addressLocality": "Luanda",
      "addressCountry": "AO"
    },
    "url": "https://www.hossidev.com",
    "telephone": "+2449XXXXXXXX",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -8.8368, // Coordenadas aproximadas de Luanda
      "longitude": 13.2343
    }
  };
  return (
    <>
      {/* Inserindo Dados Estruturados no HTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Hero />
      <Sobre />
      <Servicos />
      <Parallax />
      <Contato />
    </>
  );
}
