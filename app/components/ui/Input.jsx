export default function Input({
  label,
  ...props
}) {
  return (
    <div>

      {label && (
        <label className="mb-2 block font-medium text-slate-700">
          {label}
        </label>
      )}

      <input
        {...props}
        className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#0B5E8E] focus:ring-2 focus:ring-[#0B5E8E]/20"
      />

    </div>
  );
}