export default function Beneficios() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-black text-center mb-16">
          ¿Por qué elegir CONREV?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            "Atención personalizada",
            "Experiencia profesional",
            "Cumplimiento normativo",
            "Acompañamiento permanente",
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl shadow-md p-8 text-center"
            >
              <div className="text-5xl mb-5">✓</div>

              <h3 className="text-xl font-bold text-slate-800">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}