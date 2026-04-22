import Hero from "@/components/home/Hero";
import Sobre from "@/components/home/Sobre";
import Servicos from "@/components/home/Servicos";
import Parallax from "@/components/home/Parallax";
import Contato from "@/components/home/Contato";

// Configuração de Metadata (SEO Principal)
export const metadata = {
  title: "HOSSIDEV | Suporte de TI, CCTV, Redes e Desenvolvimento Web em Luanda",
  
  description:
    "A HOSSIDEV oferece suporte de TI profissional em Luanda, instalação de CCTV, redes informáticas, controle de acesso, criação de sites e desenvolvimento de sistemas personalizados para empresas em Angola.",

  keywords: [
    "Suporte de TI Angola",
    "Suporte informático Luanda",
    "Instalação CCTV Angola",
    "Segurança eletrónica Luanda",
    "Redes informáticas Angola",
    "Controle de acesso RFID Angola",
    "Criação de sites Angola",
    "Desenvolvimento de sistemas web Angola",
    "Consultoria tecnológica Luanda",
    "HOSSIDEV"
  ],

  authors: [{ name: "HOSSIDEV" }],
  creator: "HOSSIDEV",
  publisher: "HOSSIDEV",

  alternates: {
    canonical: "https://hossidev.com/",
  },

  openGraph: {
    title: "HOSSIDEV | Suporte de TI e Soluções Tecnológicas em Angola",
    description:
      "Especialistas em suporte de TI, CCTV, redes informáticas, controle de acesso e desenvolvimento de sistemas personalizados para empresas em Angola.",

    url: "https://hossidev.com/",
    siteName: "HOSSIDEV",
    locale: "pt_AO",
    type: "website",

    images: [
      {
        url: "https://hossidev.com/hero.jpg",
        width: 1200,
        height: 630,
        alt: "HOSSIDEV - Suporte de TI e Segurança Eletrónica",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  // Dados Estruturados (JSON-LD) para o Google entender que é uma empresa local
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ITService",
    "name": "HOSSIDEV",
    "url": "https://hossidev.com/",
    "logo": "https://hossidev.com/logo.png",
    "image": "https://hossidev.com/hero.jpg",

    "description":
      "Empresa especializada em suporte de TI, segurança eletrónica, CCTV, redes informáticas, controle de acesso e desenvolvimento de sistemas personalizados em Angola.",

    "telephone": "+244972614886",

    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+244972614886",
      "contactType": "customer support",
      "areaServed": "AO",
      "availableLanguage": ["Portuguese"],
      "url": "https://wa.me/244972614886"
    },

    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Luanda",
      "addressCountry": "AO"
    },

    "areaServed": {
      "@type": "Country",
      "name": "Angola"
    },

    "serviceType": [
      "Suporte de TI",
      "Instalação de CCTV",
      "Segurança eletrónica",
      "Instalação de redes informáticas",
      "Controle de acesso RFID",
      "Criação de sites",
      "Desenvolvimento de sistemas web",
      "Consultoria tecnológica"
    ],

    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],

    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -8.8368,
      "longitude": 13.2343
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "A HOSSIDEV oferece suporte de TI em Luanda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. A HOSSIDEV oferece suporte de TI profissional para empresas em Luanda incluindo manutenção de computadores, servidores, redes e infraestrutura tecnológica."
        }
      },
      {
        "@type": "Question",
        "name": "Vocês instalam sistemas de CCTV?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. Instalamos sistemas completos de videovigilância CCTV para empresas e residências com monitoramento e gravação."
        }
      },
      {
        "@type": "Question",
        "name": "A HOSSIDEV cria sites profissionais?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. Desenvolvemos sites modernos, rápidos e otimizados para SEO além de sistemas web personalizados."
        }
      },
      {
        "@type": "Question",
        "name": "Vocês fazem instalação de redes informáticas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. Realizamos instalação e manutenção de redes informáticas e infraestrutura de telecomunicações."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Suporte de TI",
    "provider": {
      "@type": "Organization",
      "name": "HOSSIDEV",
      "url": "https://hossidev.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Luanda"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Tecnologia",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Suporte de TI"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Instalação de CCTV"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Instalação de redes informáticas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Controle de acesso RFID"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Criação de sites"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desenvolvimento de sistemas web"
          }
        }
      ]
    }
  };

  return (
    <>
      {/* Inserindo Dados Estruturados no HTML */}
      {/* Empresa */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Serviços */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Hero />
      <Sobre />
      <Servicos />
      <Parallax />
      <Contato />
    </>
  );
}
