import Button from "./Button";

export default function CTA() {
  return (
    <section className="bg-[#0B5E8E] py-24">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          ¿Está listo para fortalecer la gestión
          contable de su empresa?
        </h2>

        <p className="text-xl text-blue-100 leading-8 mb-10">
          En CONREV acompañamos a empresas y emprendedores
          con soluciones contables, tributarias y de auditoría
          orientadas a generar confianza y apoyar la toma de decisiones.
        </p>

        <Button href="#contacto">
          Agendar una asesoría
        </Button>

      </div>

    </section>
  );
}