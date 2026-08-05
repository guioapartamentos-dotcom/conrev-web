export default function Card({
  children,
  className = "",
  hover = true,
}) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        ${
          hover
            ? "transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}