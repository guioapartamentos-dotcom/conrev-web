import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import Container from "@/app/components/ui/Container";
import { company } from "@/app/lib/company";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">

      <Container className="py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Empresa */}

          <div>

            <Image
              src="/images/logo/logo-conrev-light.png"
              alt={company.shortName}
              width={220}
              height={60}
              className="h-auto"
            />

            <p className="mt-6 leading-7 text-slate-300">
              Información confiable para decisiones inteligentes.
              Somos una firma especializada en contabilidad,
              auditoría, revisoría fiscal y consultoría empresarial.
            </p>

          </div>

          {/* Servicios */}

          <div>

            <h3 className="text-xl font-bold">
              Servicios
            </h3>

            <ul className="mt-6 space-y-3 text-slate-300">

              <li>Contabilidad</li>

              <li>Revisoría Fiscal</li>

              <li>Auditoría</li>

              <li>Asesoría Tributaria</li>

              <li>Consultoría Empresarial</li>

            </ul>

          </div>

          {/* Navegación */}

          <div>

            <h3 className="text-xl font-bold">
              Navegación
            </h3>

            <ul className="mt-6 space-y-3">

              <li>
                <Link
                  href="/"
                  className="hover:text-blue-300 transition"
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  href="/nosotros"
                  className="hover:text-blue-300 transition"
                >
                  Nosotros
                </Link>
              </li>

              <li>
                <Link
                  href="/servicios"
                  className="hover:text-blue-300 transition"
                >
                  Servicios
                </Link>
              </li>

              <li>
                <Link
                  href="/recursos"
                  className="hover:text-blue-300 transition"
                >
                  Recursos
                </Link>
              </li>

              <li>
                <Link
                  href="/contacto"
                  className="hover:text-blue-300 transition"
                >
                  Contacto
                </Link>
              </li>

            </ul>

          </div>

          {/* Contacto */}

          <div>

            <h3 className="text-xl font-bold">
              Contáctenos
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">

                <Phone
                  size={20}
                  className="mt-1 text-[#0F4C81]"
                />

                <span>
                  {company.contact.phone}
                </span>

              </div>

              <div className="flex items-start gap-3">

                <Mail
                  size={20}
                  className="mt-1 text-[#0F4C81]"
                />

                <span>
                  {company.contact.email}
                </span>

              </div>

              <div className="flex items-start gap-3">

                <MapPin
                  size={20}
                  className="mt-1 text-[#0F4C81]"
                />

                <span>
                  {company.contact.address}
                </span>

              </div>

            </div>

            <Link
              href="/contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0F4C81] px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              Solicitar asesoría

              <ArrowUpRight size={18} />

            </Link>

          </div>

        </div>

      </Container>

      <div className="border-t border-slate-800">

        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-slate-400 lg:flex-row">

          <p>
            © {year} {company.name}. Todos los derechos reservados.
          </p>

          <div className="flex gap-6">

            <Link
              href="/politica-privacidad"
              className="hover:text-white transition"
            >
              Política de privacidad
            </Link>

            <Link
              href="/terminos"
              className="hover:text-white transition"
            >
              Términos y condiciones
            </Link>

          </div>

        </Container>

      </div>

    </footer>
  );
}