import {
  Calculator,
  ShieldCheck,
  Landmark,
  Briefcase,
  FileSearch,
  Users,
  LineChart,
} from "lucide-react";

const servicios = [
  {
    icon: Calculator,
    titulo: "Contabilidad",
    descripcion:
      "Información financiera confiable y oportuna para la toma de decisiones.",
  },
  {
    icon: Landmark,
    titulo: "Asesoría Tributaria",
    descripcion:
      "Planeación fiscal y cumplimiento de obligaciones tributarias.",
  },
  {
    icon: ShieldCheck,
    titulo: "Revisoría Fiscal",
    descripcion:
      "Transparencia, control y cumplimiento conforme a la normatividad.",
  },
  {
    icon: Users,
    titulo: "Nómina y Seguridad Social",
    descripcion:
      "Administración integral del personal y cumplimiento laboral.",
  },
  {
    icon: FileSearch,
    titulo: "Auditoría",
    descripcion:
      "Evaluación independiente de procesos y controles internos.",
  },
  {
    icon: LineChart,
    titulo: "NIIF",
    descripcion:
      "Implementación y actualización de estándares internacionales.",
  },
  {
    icon: Briefcase,
    titulo: "Consultoría Empresarial",
    descripcion:
      "Acompañamiento estratégico para fortalecer su organización.",
  },
];

export default function ServiciosGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-black text-center mb-16">
          Nuestros Servicios
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {servicios.map((servicio) => {
            const Icon = servicio.icon;

            return (
              <div
                key={servicio.titulo}
                className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition"
              >
                <Icon
                  size={42}
                  className="text-[#0B5E8E] mb-6"
                />

                <h3 className="text-2xl font-bold mb-4">
                  {servicio.titulo}
                </h3>

                <p className="text-slate-600 leading-8">
                  {servicio.descripcion}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}