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

// Metadados Otimizados para SEO e Redes Sociais
export const metadata = {
  metadataBase: new URL('https://hossidev.vercel.app/'), // Substitua pela sua URL real
  title: {
    default: "Hossidev | Tecnologia, Segurança e Consultoria",
    template: "%s | Hossidev"
  },
  description: "Líder em soluções de Segurança Eletrónica, Infraestrutura de Redes, Consultoria Tecnológica e Desenvolvimento de Sistemas em Luanda, Angola.",
  keywords: ["Segurança Eletrónica Angola", "CCTV Luanda", "Hossidev", "Tecnologia Angola", "Energias Renováveis", "Desenvolvimento Web Angola"],
  authors: [{ name: "Hossidev" }],
  creator: "Hossidev",
  
  // Configuração para compartilhamento (WhatsApp, LinkedIn, FB)
  openGraph: {
    title: "Hossidev | Engenharia e Tecnologia de Ponta",
    description: "Soluções integradas de infraestrutura digital e segurança para o mercado angolano.",
    url: 'https://hossidev.vercel.app/',
    siteName: 'Hossidev',
    locale: 'pt_AO',
    type: 'website',
    images: [
      {
        url: '/hero.jpg', // Coloque uma imagem de 1200x630px na pasta /public
        width: 1200,
        height: 630,
        alt: 'Hossidev Tecnologia e Segurança',
      },
    ],
  },

  // Configuração para Twitter/X
  twitter: {
    card: 'summary_large_image',
    title: 'Hossidev | Tecnologia e Segurança',
    description: 'Soluções robustas para infraestruturas críticas e digitais.',
    images: ['/hero.jpg'],
  },

  // Instruções para robôs de busca
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
        <WhatsAppButton phone="244972614886" size={64} />
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