export default function Timeline() {
  const eventos = [
    {
      año: "2017",
      titulo: "Nacimiento de CONREV",
      texto: "Iniciamos con el propósito de construir una firma basada en la confianza y la ética profesional.",
    },
    {
      año: "Hoy",
      titulo: "Aliado estratégico",
      texto: "Acompañamos empresas y emprendedores con soluciones contables, tributarias y empresariales.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-black text-center mb-16">
          Nuestra evolución
        </h2>

        <div className="space-y-10">
          {eventos.map((item) => (
            <div
              key={item.año}
              className="flex gap-8 items-start bg-white rounded-2xl shadow p-8"
            >
              <div className="text-3xl font-black text-[#0B5E8E] min-w-[90px]">
                {item.año}
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">
                  {item.titulo}
                </h3>

                <p className="text-slate-600 leading-8">
                  {item.texto}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}