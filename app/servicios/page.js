import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CTA from "../components/CTA";

import HeroServicios from "../components/servicios/HeroServicios";
import ServiciosGrid from "../components/servicios/ServiciosGrid";
import Proceso from "../components/servicios/Proceso";
import Sectores from "../components/servicios/Sectores";
import Ventajas from "../components/servicios/Ventajas";
import CTAFinal from "../components/servicios/CTAFinal";

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

        <Proceso />

        <Sectores />

        <Ventajas />

        <CTAFinal />

        <CTA />

      </main>

      <Footer />
    </>
  );
}