export default function Button({
  href = "#",
  children,
  variant = "primary",
}) {
  const base =
    "inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-[#0B5E8E] text-white hover:bg-[#094c73] hover:scale-105 shadow-lg",

    secondary:
      "border-2 border-white text-white hover:bg-white hover:text-slate-900",

    outline:
      "border-2 border-[#0B5E8E] text-[#0B5E8E] hover:bg-[#0B5E8E] hover:text-white",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  );
}