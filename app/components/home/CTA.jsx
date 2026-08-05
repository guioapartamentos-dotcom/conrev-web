import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0F4C81] py-24">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.15),transparent_40%)]" />

      <Container className="relative">

        <div className="mx-auto max-w-4xl text-center">

          <span className="uppercase tracking-[0.25em] text-blue-200 font-semibold">
            Comencemos hoy
          </span>

          <h2 className="mt-6 text-5xl font-black text-white leading-tight">
            La información financiera correcta
            impulsa mejores decisiones.
          </h2>

          <p className="mt-8 text-xl leading-9 text-blue-100">
            Permítanos acompañar el crecimiento de su empresa mediante un
            servicio profesional, cercano y orientado a resultados.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Button
              href="/contacto"
              size="lg"
              className="bg-white text-[#0F4C81] hover:bg-slate-100"
            >
              Solicitar asesoría
            </Button>

            <Button
              href="/servicios"
              variant="outline"
              size="lg"
            >
              Conocer servicios
            </Button>

          </div>

        </div>

      </Container>

    </section>
  );
}