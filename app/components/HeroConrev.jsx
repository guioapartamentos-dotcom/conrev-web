export default function HeroConrev() {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 text-white py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}

          <div>

            <p className="uppercase tracking-[5px] text-blue-400 font-semibold mb-6">
              CONREV Contadores y Revisores S.A.S.
            </p>

            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-8">
              Su confianza,
              <br />
              nuestro mayor compromiso.
            </h1>

            <p className="text-xl text-slate-300 leading-9 mb-10">
              Acompañamos a empresas y emprendedores con soluciones
              contables, tributarias, de auditoría y gestión laboral,
              brindando información confiable para tomar decisiones
              estratégicas y cumplir oportunamente sus obligaciones.
            </p>

            <div className="flex flex-wrap gap-5">

              <a
                href="#contacto"
                className="bg-[#0B5E8E] hover:bg-[#094c73] hover:scale-105 transition-all duration-300 px-8 py-4 rounded-xl font-bold shadow-lg"
              >
                Solicitar asesoría
              </a>

              <a
                href="#soluciones"
                className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Conocer nuestras soluciones
              </a>

            </div>

          </div>

          {/* Imagen */}

          <div className="flex justify-center">

            <img
              src="/images/hero/hero-conrev.webp"
              alt="Equipo de profesionales analizando información financiera"
              className="w-full max-w-2xl rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}