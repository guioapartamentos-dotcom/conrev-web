import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/home/Hero";
import Stats from "./components/home/Stats";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Services from "./components/home/Services";
import Process from "./components/home/Process";
import Sectors from "./components/home/Sectors";
import CTA from "./components/home/CTA";

export const metadata = {
  title: "CONREV Contadores y Revisores S.A.S.",
  description:
    "Firma especializada en contabilidad, revisoría fiscal, asesoría tributaria, auditoría y consultoría empresarial.",
};

export default function HomePage() {
  return (
    <>
      <Header />

      <main>

        <Hero />

        <Stats />

        <WhyChooseUs />

        <Services />

        <Process />

        <Sectors />

        <CTA />

      </main>

      <Footer />
    </>
  );
}