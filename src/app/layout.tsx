import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Método PMG - Aprenda Marketing Digital do Zero",
  description: "Descubra como dominar o marketing digital do zero com o Método PMG. Estratégias comprovadas para alavancar negócios online.",
  keywords: "marketing digital, método PMG, curso de marketing, tráfego pago, estratégias digitais",
  robots: "index, follow",
  openGraph: {
    title: "Método PMG - Aprenda Marketing Digital do Zero",
    description: "Descubra como dominar o marketing digital do zero com o Método PMG. Estratégias comprovadas para alavancar negócios online.",
    type: "website",
    url: "https://metodopmg.vercel.app",
    images: "https://seusite.com/imagem.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
