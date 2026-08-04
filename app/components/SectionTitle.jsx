export default function SectionTitle({ titulo, subtitulo }) {
  return (
    <div className="text-center mb-16">

      <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
        {titulo}
      </h2>

      <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-8">
        {subtitulo}
      </p>

    </div>
  );
}