import {
  ShieldCheck,
  Handshake,
  Gem,
  Award,
} from "lucide-react";

export default function Valores() {

  const valores = [
    {
      icono: ShieldCheck,
      titulo: "Integridad",
      texto: "Actuamos con ética y transparencia.",
    },
    {
      icono: Handshake,
      titulo: "Confianza",
      texto: "Construimos relaciones duraderas.",
    },
    {
      icono: Gem,
      titulo: "Compromiso",
      texto: "Cumplimos con responsabilidad.",
    },
    {
      icono: Award,
      titulo: "Excelencia",
      texto: "Buscamos mejorar continuamente.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-black text-center mb-16">
          Nuestros Valores
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {valores.map((valor) => {

            const Icono = valor.icono;

            return (
              <div
                key={valor.titulo}
                className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition"
              >
                <Icono
                  size={42}
                  className="text-[#0B5E8E] mb-6"
                />

                <h3 className="text-2xl font-bold mb-4">
                  {valor.titulo}
                </h3>

                <p className="text-slate-600 leading-7">
                  {valor.texto}
                </p>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}