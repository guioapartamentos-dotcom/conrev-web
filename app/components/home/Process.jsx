import Container from "@/app/components/ui/Container";
import {
  Search,
  ClipboardCheck,
  TrendingUp,
  Handshake,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description:
      "Analizamos la situación financiera, tributaria y contable de su empresa para identificar oportunidades y riesgos.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Planeación",
    description:
      "Diseñamos una estrategia personalizada enfocada en cumplimiento, optimización y crecimiento.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Implementación",
    description:
      "Ejecutamos los procesos contables, fiscales y de auditoría con estándares profesionales.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Acompañamiento",
    description:
      "Brindamos seguimiento permanente para apoyar la toma de decisiones y el crecimiento del negocio.",
  },
];

export default function Process() {
  return (
    <section className="bg-slate-900 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="uppercase tracking-[0.2em] text-blue-300 font-semibold">
            Nuestro proceso
          </span>

          <h2 className="mt-4 text-4xl font-black text-white">
            Una metodología clara para generar resultados
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Cada cliente recibe una atención personalizada basada en un proceso
            estructurado que garantiza calidad, cumplimiento y confianza.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="rounded-3xl border border-slate-700 bg-slate-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#0F4C81]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F4C81]">
                    <Icon size={28} className="text-white" />
                  </div>

                  <span className="text-4xl font-black text-slate-600">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}