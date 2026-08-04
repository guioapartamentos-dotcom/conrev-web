import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

import HeroServicios from "../components/servicios/HeroServicios";
import ServiciosGrid from "../components/servicios/ServiciosGrid";
import Beneficios from "../components/servicios/Beneficios";

export const metadata = {
  title: "Servicios",
};

export default function ServiciosPage() {
  return (
    <>
      <Header />

      <main>
        <HeroServicios />
        <ServiciosGrid />
        <Beneficios />
        <CTA />
      </main>

      <Footer />
    </>
  );
}