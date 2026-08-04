export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = true,
}) {
  return (
    <div className={center ? "text-center mb-16" : "mb-16"}>

      {eyebrow && (
        <p className="uppercase tracking-[5px] text-[#0F4C81] font-semibold mb-4">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl font-black text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="max-w-3xl mx-auto mt-6 text-xl text-slate-600 leading-9">
          {description}
        </p>
      )}

    </div>
  );
}