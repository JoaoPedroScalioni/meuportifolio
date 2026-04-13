import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "João Pedro | Desenvolvedor Web & Estrategista de Performance",
  description: "Portfólio de João Pedro, Desenvolvedor Web e Estrategista de Performance. Criando sistemas robustos e interfaces de alto impacto.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.variable} font-sans antialiased text-white/90`}>
        {children}
      </body>
    </html>
  );
}
