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
  title: "Método PVR - Aprenda Marketing Digital do Zero",
  description: "Descubra como dominar o marketing digital do zero com o Método PVR. Estratégias comprovadas para alavancar negócios online.",
  keywords: "marketing digital, método PVR, curso de marketing, tráfego pago, estratégias digitais",
  robots: "index, follow",
  openGraph: {
    title: "Método PVR - Aprenda Marketing Digital do Zero",
    description: "Descubra como dominar o marketing digital do zero com o Método PVR. Estratégias comprovadas para alavancar negócios online.",
    type: "website",
    url: "https://www.metodopvr.com.br",
    images: "https://www.metodopvr.com.br/_next/image?url=%2Fimage1.png&w=384&q=75",
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
