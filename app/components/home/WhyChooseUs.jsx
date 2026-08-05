import {
  ShieldCheck,
  Users,
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";

import Container from "@/app/components/ui/Container";
import FadeIn from "@/app/components/ui/FadeIn";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Confianza",
    description:
      "Actuamos con ética, transparencia y responsabilidad en cada proceso, brindando seguridad a nuestros clientes.",
  },
  {
    icon: Users,
    title: "Atención personalizada",
    description:
      "Cada empresa recibe un acompañamiento cercano, adaptado a sus necesidades y objetivos.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Experiencia profesional",
    description:
      "Contamos con experiencia en contabilidad, auditoría, revisoría fiscal y asesoría tributaria para diversos sectores.",
  },
  {
    icon: TrendingUp,
    title: "Enfoque estratégico",
    description:
      "Convertimos la información financiera en una herramienta para apoyar el crecimiento y la toma de decisiones.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.25em] text-[#0F4C81]">
            ¿Por qué elegir CONREV?
          </span>

          <h2 className="mt-4 text-4xl font-black text-slate-900 lg:text-5xl">
            Experiencia, compromiso y resultados
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Más que un proveedor de servicios contables, somos un aliado
            estratégico que acompaña a las empresas en su crecimiento con
            información confiable y asesoría especializada.
          </p>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <FadeIn key={reason.title} delay={index * 0.1}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0F4C81]/10">
                    <Icon size={34} className="text-[#0F4C81]" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {reason.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {reason.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}