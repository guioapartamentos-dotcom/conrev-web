export default function MetodoTrabajo() {
  const pasos = [
    {
      numero: "01",
      titulo: "Escuchamos",
      descripcion:
        "Conocemos su empresa, entendemos sus necesidades y definimos los objetivos."
    },
    {
      numero: "02",
      titulo: "Analizamos",
      descripcion:
        "Evaluamos la información contable, tributaria y financiera para identificar oportunidades."
    },
    {
      numero: "03",
      titulo: "Implementamos",
      descripcion:
        "Ejecutamos soluciones con responsabilidad, claridad y cumplimiento."
    },
    {
      numero: "04",
      titulo: "Acompañamos",
      descripcion:
        "Brindamos seguimiento permanente para apoyar el crecimiento de su empresa."
    }
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Nuestro método de trabajo
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cada cliente recibe un acompañamiento estructurado,
            cercano y orientado a resultados.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {pasos.map((paso) => (

            <div
              key={paso.numero}
              className="bg-slate-50 rounded-2xl p-8 shadow hover:shadow-xl transition"
            >

              <div className="text-5xl font-black text-[#0B5E8E] mb-6">
                {paso.numero}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {paso.titulo}
              </h3>

              <p className="text-gray-600 leading-7">
                {paso.descripcion}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}