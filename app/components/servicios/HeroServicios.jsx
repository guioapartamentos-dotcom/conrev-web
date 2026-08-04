export default function HeroServicios() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">

      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-servicios.jpg"
          alt="Servicios CONREV"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">

        <p className="uppercase tracking-[5px] text-blue-400 font-semibold mb-5">
          SOLUCIONES EMPRESARIALES
        </p>

        <h1 className="text-5xl md:text-6xl font-black leading-tight mb-8">
          Servicios diseñados
          <br />
          para el crecimiento
          <br />
          de su empresa.
        </h1>

        <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-9">
          Brindamos acompañamiento contable, tributario, financiero y
          empresarial con un enfoque estratégico que aporta seguridad,
          cumplimiento y mejores decisiones.
        </p>

      </div>

    </section>
  );
}