export default function Confianza() {
  return (
    <section
      id="confianza"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            ¿Por qué confiar en CONREV?
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Nuestro compromiso es ofrecer un servicio basado en la ética,
            el conocimiento y el acompañamiento permanente para que nuestros
            clientes puedan tomar decisiones con tranquilidad.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="text-5xl mb-5">🛡️</div>
            <h3 className="text-xl font-bold mb-3">
              Ética Profesional
            </h3>

            <p className="text-gray-600">
              Actuamos con integridad, transparencia y confidencialidad
              en cada servicio.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="text-5xl mb-5">📊</div>

            <h3 className="text-xl font-bold mb-3">
              Información Confiable
            </h3>

            <p className="text-gray-600">
              Generamos información clara para apoyar la toma de decisiones.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="text-5xl mb-5">🤝</div>

            <h3 className="text-xl font-bold mb-3">
              Acompañamiento
            </h3>

            <p className="text-gray-600">
              Construimos relaciones de largo plazo con nuestros clientes.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="text-5xl mb-5">⚖️</div>

            <h3 className="text-xl font-bold mb-3">
              Cumplimiento
            </h3>

            <p className="text-gray-600">
              Trabajamos con responsabilidad para cumplir oportunamente cada obligación.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}