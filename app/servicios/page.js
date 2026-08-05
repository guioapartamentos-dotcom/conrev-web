import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import {
  Calculator,
  ShieldCheck,
  Landmark,
  FileSearch,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Contabilidad",
    description:
      "Administramos la información contable de su empresa con precisión, oportunidad y cumplimiento de la normativa vigente.",
    benefits: [
      "Estados financieros",
      "Información confiable",
      "Cumplimiento NIIF",
      "Reportes gerenciales",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Revisoría Fiscal",
    description:
      "Brindamos control independiente para fortalecer la transparencia y la confianza en su organización.",
    benefits: [
      "Cumplimiento legal",
      "Control interno",
      "Informes especializados",
      "Mayor confianza",
    ],
  },
  {
    icon: Landmark,
    title: "Asesoría Tributaria",
    description:
      "Planeación y acompañamiento tributario para optimizar la carga fiscal dentro del marco legal.",
    benefits: [
      "Planeación tributaria",
      "Declaraciones",
      "DIAN",
      "Reducción de riesgos",
    ],
  },
  {
    icon: FileSearch,
    title: "Auditoría",
    description:
      "Evaluamos procesos financieros y administrativos para mejorar el desempeño y la seguridad empresarial.",
    benefits: [
      "Auditoría financiera",
      "Auditoría interna",
      "Procesos",
      "Gestión del riesgo",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "Consultoría Empresarial",
    description:
      "Acompañamos la toma de decisiones mediante análisis financiero y estratégico.",
    benefits: [
      "Planeación",
      "Indicadores",
      "Rentabilidad",
      "Crecimiento",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <main className="pt-40 pb-24">

      <Container>

        <div className="max-w-4xl">

          <span className="uppercase tracking-[0.25em] text-[#0F4C81] font-semibold">
            Nuestros Servicios
          </span>

          <h1 className="mt-4 text-5xl font-black text-slate-900">
            Soluciones empresariales para crecer con confianza.
          </h1>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            En CONREV ofrecemos un portafolio integral de servicios
            contables, tributarios y de consultoría para empresas de
            cualquier tamaño.
          </p>

        </div>

        <div className="mt-20 space-y-12">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 p-10 shadow-sm hover:shadow-xl transition"
              >

                <div className="grid lg:grid-cols-3 gap-10">

                  <div>

                    <div className="w-16 h-16 rounded-2xl bg-[#0F4C81]/10 flex items-center justify-center">

                      <Icon
                        size={34}
                        className="text-[#0F4C81]"
                      />

                    </div>

                    <h2 className="mt-6 text-3xl font-bold">
                      {service.title}
                    </h2>

                    <p className="mt-6 leading-8 text-slate-600">
                      {service.description}
                    </p>

                  </div>

                  <div className="lg:col-span-2">

                    <h3 className="font-bold text-xl">
                      Beneficios
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4 mt-6">

                      {service.benefits.map((benefit) => (

                        <div
                          key={benefit}
                          className="rounded-xl bg-slate-100 px-5 py-4"
                        >
                          ✓ {benefit}
                        </div>

                      ))}

                    </div>

                    <Button
                      href="/contacto"
                      className="mt-10"
                    >
                      Solicitar asesoría

                      <ArrowRight
                        size={18}
                        className="ml-2"
                      />

                    </Button>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </Container>

    </main>
  );
}