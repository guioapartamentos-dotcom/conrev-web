import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-7 py-4 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-[#0F4C81] text-white hover:bg-[#0A3A63] shadow-lg hover:shadow-xl",

    secondary:
      "border border-white/30 text-white hover:bg-white hover:text-slate-900",

    outline:
      "border border-[#0F4C81] text-[#0F4C81] hover:bg-[#0F4C81] hover:text-white",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}