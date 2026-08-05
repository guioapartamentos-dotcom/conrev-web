import Container from "./Container";
import FadeIn from "./FadeIn";

export default function PageHero({
  badge,
  title,
  description,
  dark = true,
}) {
  return (
    <section
      className={
        dark
          ? "bg-slate-900 py-24 text-white"
          : "bg-white py-24"
      }
    >
      <Container>

        <FadeIn>

          {badge && (
            <span
              className={
                dark
                  ? "uppercase tracking-[0.25em] text-blue-300 font-semibold"
                  : "uppercase tracking-[0.25em] text-[#0F4C81] font-semibold"
              }
            >
              {badge}
            </span>
          )}

          <h1
            className={`mt-6 max-w-4xl text-5xl font-black leading-tight ${
              dark ? "text-white" : "text-slate-900"
            }`}
          >
            {title}
          </h1>

          {description && (
            <p
              className={`mt-8 max-w-3xl text-xl leading-9 ${
                dark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {description}
            </p>
          )}

        </FadeIn>

      </Container>
    </section>
  );
}