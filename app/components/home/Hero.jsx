"use client";

import Image from "next/image";
import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import { company } from "@/app/lib/company";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-home.webp"
          alt="CONREV"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/20" />
      </div>

      <Container className="relative z-10 min-h-screen flex items-center pt-24 lg:pt-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              {company.slogan}
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-white">
              Construimos confianza para el crecimiento de su empresa.
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              Contabilidad, revisoría fiscal, auditoría, impuestos y consultoría
              empresarial para que tome decisiones con información confiable.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contacto" size="lg">
                Solicitar asesoría
              </Button>

              <Button
                href="/servicios"
                variant="outline"
                size="lg"
              >
                Ver servicios
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8 w-full max-w-md shadow-2xl">
              <h3 className="text-2xl font-bold text-white">
                ¿Por qué CONREV?
              </h3>

              <div className="mt-8 space-y-6">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-slate-300">Experiencia</span>
                  <strong className="text-white">
                    {company.metrics.experience} años
                  </strong>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-slate-300">Clientes</span>
                  <strong className="text-white">
                    {company.metrics.clients}
                  </strong>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-slate-300">Cobertura</span>
                  <strong className="text-white">
                    {company.metrics.coverage}
                  </strong>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-300">Compromiso</span>
                  <strong className="text-white">
                    {company.metrics.commitment}
                  </strong>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}