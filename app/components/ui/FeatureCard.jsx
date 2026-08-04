import Card from "./Card";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <Card className="h-full">

      <div className="w-14 h-14 rounded-2xl bg-[#0F4C81]/10 flex items-center justify-center mb-6">
        <Icon
          size={30}
          className="text-[#0F4C81]"
        />
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-4">
        {title}
      </h3>

      <p className="text-slate-600 leading-8">
        {description}
      </p>

    </Card>
  );
}