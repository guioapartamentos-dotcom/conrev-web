import FadeIn from "./FadeIn";

export default function IconCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}) {
  return (
    <FadeIn delay={delay}>
      <div className="group h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0F4C81]/10 transition-colors duration-300 group-hover:bg-[#0F4C81]">

          <Icon
            size={34}
            className="text-[#0F4C81] transition-colors duration-300 group-hover:text-white"
          />

        </div>

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          {title}
        </h3>

        {description && (
          <p className="mt-4 leading-7 text-slate-600">
            {description}
          </p>
        )}

      </div>
    </FadeIn>
  );
}