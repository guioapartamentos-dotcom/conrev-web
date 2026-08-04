export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-100 ${className}`}
    >
      {children}
    </div>
  );
}