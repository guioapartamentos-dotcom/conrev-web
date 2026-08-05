import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import {
  ShieldCheck,
  Target,
  Eye,
  HeartHandshake,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integridad",
    description:
      "Actuamos con ética, transparencia y absoluta confidencialidad en cada servicio que prestamos.",
  },
  {
    icon: Target,
    title: "Compromiso",
    description:
      "Trabajamos orientados a resultados que aporten valor y tranquilidad a nuestros clientes.",
  },
  {
    icon: Eye,
    title: "Excelencia",
    description:
      "Mantenemos altos estándares técnicos y una actualización permanente en materia contable y tributaria.",
  },
  {
    icon: HeartHandshake,
    title: "Confianza",
    description:
      "Construimos relaciones duraderas basadas en el profesionalismo y el acompañamiento continuo.",
  },
];

export default function NosotrosPage() {
  return (
    <main className="pt-40">

      {/* HERO */}

      <section className="bg-slate-900 py-24 text-white">

        <Container>

          <span className="uppercase tracking-[0.25em] text-blue-300 font-semibold">
            Nosotros
          </span>

          <h1 className="mt-6 text-5xl font-black max-w-4xl">
            Somos una firma comprometida con el crecimiento y la tranquilidad financiera de nuestros clientes.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            En CONREV combinamos experiencia, conocimiento técnico y atención
            personalizada para ofrecer soluciones contables y empresariales
            que generan confianza y apoyan la toma de decisiones.
          </p>

        </Container>

      </section>

      {/* HISTORIA */}

      <section className="py-24">

        <Container>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="uppercase tracking-[0.2em] text-[#0F4C81] font-semibold">
                Nuestra historia
              </span>

              <h2 className="mt-4 text-4xl font-black text-slate-900">
                Más que contadores, somos aliados estratégicos.
              </h2>

              <p className="mt-8 leading-8 text-lg text-slate-600">
                Desde nuestra creación hemos acompañado empresas de distintos
                sectores económicos ofreciendo servicios de contabilidad,
                auditoría, revisoría fiscal y consultoría empresarial.
              </p>

              <p className="mt-6 leading-8 text-lg text-slate-600">
                Nuestro propósito es brindar información confiable para que
                empresarios y emprendedores puedan tomar mejores decisiones y
                desarrollar sus organizaciones con seguridad.
              </p>

            </div>

            <div className="rounded-3xl bg-slate-100 p-12">

              <h3 className="text-2xl font-bold">
                Nuestra misión
              </h3>

              <p className="mt-6 leading-8 text-slate-600">
                Brindar soluciones integrales en contabilidad, auditoría,
                revisoría fiscal y consultoría con altos estándares de calidad,
                fortaleciendo el crecimiento de nuestros clientes.
              </p>

              <h3 className="mt-10 text-2xl font-bold">
                Nuestra visión
              </h3>

              <p className="mt-6 leading-8 text-slate-600">
                Consolidarnos como una firma reconocida por la confianza,
                innovación y excelencia en la prestación de servicios
                profesionales en Colombia.
              </p>

            </div>

          </div>

        </Container>

      </section>

      {/* VALORES */}

      <section className="bg-slate-50 py-24">

        <Container>

          <div className="text-center max-w-3xl mx-auto">

            <h2 className="text-4xl font-black">
              Nuestros Valores
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              Son los principios que orientan cada decisión y cada servicio que prestamos.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 mt-16">

            {values.map((value) => {

              const Icon = value.icon;

              return (

                <div
                  key={value.title}
                  className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition"
                >

                  <div className="w-16 h-16 rounded-2xl bg-[#0F4C81]/10 flex items-center justify-center">

                    <Icon
                      size={32}
                      className="text-[#0F4C81]"
                    />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {value.description}
                  </p>

                </div>

              );

            })}

          </div>

        </Container>

      </section>

      {/* CTA */}

      <section className="py-24">

        <Container className="text-center">

          <h2 className="text-4xl font-black">
            ¿Necesita acompañamiento profesional?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
            Permítanos conocer su empresa y ayudarle a tomar mejores decisiones
            financieras y tributarias.
          </p>

          <Button
            href="/contacto"
            size="lg"
            className="mt-10"
          >
            Solicitar asesoría
          </Button>

        </Container>

      </section>

    </main>
  );
}