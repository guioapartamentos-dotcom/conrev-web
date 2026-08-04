import {
  ShieldCheck,
  BarChart3,
  Handshake,
  Scale,
} from "lucide-react";

export default function Indicadores() {
  const indicadores = [
    {
      icono: ShieldCheck,
      titulo: "Confianza",
      descripcion: "Actuamos con ética, transparencia y responsabilidad.",
    },
    {
      icono: BarChart3,
      titulo: "Información confiable",
      descripcion: "Datos claros para apoyar decisiones empresariales.",
    },
    {
      icono: Handshake,
      titulo: "Acompañamiento",
      descripcion: "Atención cercana y personalizada para cada cliente.",
    },
    {
      icono: Scale,
      titulo: "Cumplimiento",
      descripcion: "Compromiso con las obligaciones legales y tributarias.",
    },
  ];

  return (
    <section className="bg-white py-20 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {indicadores.map((item) => {
            const Icono = item.icono;

            return (
              <div
                key={item.titulo}
                className="text-center"
              >
                <div className="flex justify-center mb-5">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                    <Icono
                      size={34}
                      className="text-[#0B5E8E]"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {item.titulo}
                </h3>

                <p className="text-slate-600 leading-7">
                  {item.descripcion}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}