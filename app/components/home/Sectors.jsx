import Container from "@/app/components/ui/Container";
import {
  Building2,
  Factory,
  Store,
  HeartPulse,
  GraduationCap,
  Landmark,
} from "lucide-react";

const sectors = [
  {
    icon: Building2,
    title: "Empresas de Servicios",
  },
  {
    icon: Factory,
    title: "Sector Industrial",
  },
  {
    icon: Store,
    title: "Comercio",
  },
  {
    icon: HeartPulse,
    title: "Sector Salud",
  },
  {
    icon: GraduationCap,
    title: "Educación",
  },
  {
    icon: Landmark,
    title: "Entidades sin ánimo de lucro",
  },
];

export default function Sectors() {
  return (
    <section className="bg-white py-24">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="uppercase tracking-[0.2em] text-[#0F4C81] font-semibold">
            Sectores
          </span>

          <h2 className="mt-4 text-4xl font-black text-slate-900">
            Experiencia en diferentes industrias
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Adaptamos nuestros servicios a las necesidades específicas de cada
            sector económico, ofreciendo soluciones prácticas y oportunas.
          </p>

        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {sectors.map((sector) => {

            const Icon = sector.icon;

            return (

              <div
                key={sector.title}
                className="rounded-3xl border border-slate-200 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0F4C81] hover:shadow-xl"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0F4C81]/10">

                  <Icon
                    size={36}
                    className="text-[#0F4C81]"
                  />

                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {sector.title}
                </h3>

              </div>

            );

          })}

        </div>

      </Container>
    </section>
  );
}