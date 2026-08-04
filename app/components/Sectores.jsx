import SectionTitle from "./SectionTitle";

export default function Sectores() {

  const sectores = [
    "Empresas",
    "Comercio",
    "Servicios",
    "Construcción",
    "Transporte",
    "Agropecuario"
  ];

  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          titulo="Sectores que atendemos"
          subtitulo="Acompañamos empresas y emprendedores de diferentes sectores económicos con soluciones contables y tributarias adaptadas a sus necesidades."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {sectores.map((sector) => (

            <div
              key={sector}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition"
            >

              <div className="text-5xl mb-5">
                🏢
              </div>

              <h3 className="text-2xl font-bold text-slate-800">
                {sector}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}