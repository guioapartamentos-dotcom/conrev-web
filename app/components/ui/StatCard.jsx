export default function StatCard({
  value,
  title,
}) {
  return (
    <div className="text-center">

      <h3 className="text-5xl font-black text-[#0F4C81]">
        {value}
      </h3>

      <p className="mt-3 text-slate-600 font-medium">
        {title}
      </p>

    </div>
  );
}