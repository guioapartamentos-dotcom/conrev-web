import FadeIn from "./FadeIn";

export default function SectionHeader({
  badge,
  title,
  description,
  center = true,
}) {
  return (
    <FadeIn
      className={
        center
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }
    >
      {badge && (
        <span className="font-semibold uppercase tracking-[0.25em] text-[#0F4C81]">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-4xl font-black text-slate-900 lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </FadeIn>
  );
}