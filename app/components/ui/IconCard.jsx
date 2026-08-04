import Card from "./Card";

export default function IconCard({
  icon,
  title,
  description,
}) {
  const Icon = icon;

  return (
    <Card>

      <Icon
        size={46}
        className="text-[#0F4C81] mb-6"
      />

      <h3 className="text-2xl font-bold text-slate-900 mb-4">
        {title}
      </h3>

      <p className="text-slate-600 leading-8">
        {description}
      </p>

    </Card>
  );
}