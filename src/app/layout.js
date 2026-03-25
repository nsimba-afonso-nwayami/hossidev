import { Poppins } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

// SEO GLOBAL DO SITE
export const metadata = {
  metadataBase: new URL("https://hossidev.vercel.app"),

  title: {
    default: "HOSSIDEV | Suporte de TI, CCTV e Desenvolvimento de Sistemas em Luanda",
    template: "%s | HOSSIDEV",
  },

  description:
    "Empresa especializada em suporte de TI, instalação de CCTV, redes informáticas, controle de acesso, desenvolvimento de sistemas e criação de sites em Luanda, Angola.",

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

  category: "technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "HOSSIDEV | Suporte de TI e Soluções Tecnológicas em Angola",
    description:
      "Soluções completas em suporte de TI, segurança eletrónica, CCTV, redes informáticas e desenvolvimento de sistemas personalizados.",

    url: "https://hossidev.vercel.app",
    siteName: "HOSSIDEV",

    locale: "pt_AO",
    type: "website",

    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "HOSSIDEV - Tecnologia e Segurança Eletrónica",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HOSSIDEV | Tecnologia e Segurança",
    description:
      "Especialistas em suporte de TI, CCTV, redes informáticas e desenvolvimento de sistemas em Angola.",
    images: ["/hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Ao">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {/* Header */}
        <Header />

        <main>
          {children}
        </main>

        {/* Botão WhatsApp fixo do site */}
        <WhatsAppButton phone="244924034804" size={64} />
        <Toaster
          position="top-right"
          containerStyle={{
            zIndex: 10000,
          }}
        />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}