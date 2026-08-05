import Container from "@/app/components/ui/Container";
import FadeIn from "@/app/components/ui/FadeIn";
import { stats } from "@/app/lib/stats";

export default function Stats() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.1}>
              <div className="text-center">
                <h3 className="text-5xl font-black text-[#0F4C81]">
                  {item.number}
                </h3>

                <p className="mt-3 text-slate-600 font-medium">
                  {item.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}