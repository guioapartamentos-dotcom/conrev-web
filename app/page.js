import Indicadores from "./components/Indicadores";
import Confianza from "./components/Confianza";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroConrev from "./components/HeroConrev";
import Soluciones from "./components/Soluciones";
import MetodoTrabajo from "./components/MetodoTrabajo";
import Sectores from "./components/Sectores";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <HeroConrev />
      <Indicadores />
      <Confianza />
      <Soluciones />
      <MetodoTrabajo /> 
      <Sectores />
      <CTA /> 
      <Footer />
    </>
  );
}