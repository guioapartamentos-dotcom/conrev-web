import {
  Calculator,
  FileText,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function Soluciones() {
  const soluciones = [
    {
      titulo: "Contabilidad Empresarial",
      icono: Calculator,
      descripcion:
        "Organizamos su información financiera para que tome decisiones con seguridad y cumpla oportunamente sus obligaciones legales.",
    },
    {
      titulo: "Asesoría Tributaria",
      icono: FileText,
      descripcion:
        "Planeamos y acompañamos el cumplimiento de sus obligaciones tributarias, reduciendo riesgos y optimizando su carga fiscal.",
    },
    {
      titulo: "Revisoría Fiscal",
      icono: ShieldCheck,
      descripcion:
        "Fortalecemos la transparencia y el control mediante una supervisión independiente, objetiva y profesional.",
    },
    {
      titulo: "Gestión Laboral",
      icono: Users,
      descripcion:
        "Administramos procesos de nómina y seguridad social con orden, oportunidad y respaldo profesional.",
    },
  ];

  return (
    <section
      id="soluciones"
      className="bg-slate-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
            Soluciones para su empresa
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-8">
            Más que cumplir obligaciones, ayudamos a nuestros clientes
            a organizar su información, reducir riesgos y tomar mejores
            decisiones.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {soluciones.map((item) => {

            const Icono = item.icono;

            return (

              <div
                key={item.titulo}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-100 hover:-translate-y-2"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">

                  <Icono
                    size={34}
                    className="text-[#0B5E8E]"
                    strokeWidth={2.2}
                  />

                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {item.titulo}
                </h3>

                <p className="text-slate-600 leading-7 mb-6">
                  {item.descripcion}
                </p>

                <a
                  href="#contacto"
                  className="text-[#0B5E8E] font-semibold hover:underline"
                >
                  Conocer más →
                </a>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}