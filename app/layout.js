import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/ui/WhatsAppButton";  

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://conrev.com.co"),

  title: {
    default: "CONREV Contadores y Revisores S.A.S.",
    template: "%s | CONREV",
  },

  description:
    "Firma especializada en contabilidad, revisoría fiscal, asesoría tributaria, auditoría, nómina y consultoría empresarial.",

  keywords: [
    "contabilidad",
    "contador",
    "revisoría fiscal",
    "auditoría",
    "asesoría tributaria",
    "consultoría empresarial",
    "Medellín",
    "Colombia",
  ],

  authors: [
    {
      name: "CONREV Contadores y Revisores S.A.S.",
    },
  ],

  openGraph: {
    title: "CONREV Contadores y Revisores S.A.S.",
    description:
      "Información confiable para decisiones inteligentes.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-white text-slate-900 antialiased">

        <Header />

        {children}

        <Footer />

        <WhatsAppButton />

      </body>
    </html>
  );
}