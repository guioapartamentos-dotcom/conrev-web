import Link from "next/link";

const variants = {
  primary:
    "bg-[#0F4C81] text-white hover:bg-[#0A3A63] shadow-lg hover:shadow-xl",

  secondary:
    "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50",

  outline:
    "border border-white text-white hover:bg-white hover:text-[#0F4C81]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const classes = `
    inline-flex
    items-center
    justify-center
    rounded-xl
    font-semibold
    transition-all
    duration-300
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}