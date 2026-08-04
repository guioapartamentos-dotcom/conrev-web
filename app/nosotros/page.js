import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroNosotros from "../components/nosotros/HeroNosotros";
import Historia from "../components/nosotros/Historia";
import Timeline from "../components/nosotros/Timeline";
import MisionVision from "../components/nosotros/MisionVision";
import Valores from "../components/nosotros/Valores";

export default function NosotrosPage() {
  return (
    <>
      <Header />

      <main>
        <HeroNosotros />
        <Historia /> 
        <Timeline />
        <MisionVision /> 
        <Valores /> 
      </main>

      <Footer />
    </>
  );
}