import { ArrowRight } from "lucide-react";

import Container from "@/app/components/ui/Container";
import SectionHeader from "@/app/components/ui/SectionHeader";
import IconCard from "@/app/components/ui/IconCard";
import { services } from "@/app/lib/services";

export default function Services() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeader
          badge="Nuestros servicios"
          title="Soluciones integrales para empresas"
          description="Ofrecemos servicios profesionales enfocados en el cumplimiento, el crecimiento y la toma de decisiones estratégicas."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div key={service.title} className="group">
              <IconCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />

              <button className="mt-5 flex items-center gap-2 font-semibold text-[#0F4C81] transition-all duration-300 group-hover:gap-3">
                Conocer más
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}