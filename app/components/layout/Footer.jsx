
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import Container from "@/app/components/ui/Container";
import { company } from "@/app/lib/company";

export default function Footer() {
  const year = new Date().getFullYear();

  const whatsappNumber = "573239290712";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const fixedPhone = "6042041918";

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
            <h3 className="text-xl font-bold">Servicios</h3>

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
            <h3 className="text-xl font-bold">Navegación</h3>

            <ul className="mt-6 space-y-3">
              <li>
                <Link href="/" className="transition hover:text-blue-300">
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  href="/nosotros"
                  className="transition hover:text-blue-300"
                >
                  Nosotros
                </Link>
              </li>

              <li>
                <Link
                  href="/servicios"
                  className="transition hover:text-blue-300"
                >
                  Servicios
                </Link>
              </li>

              <li>
                <Link
                  href="/recursos"
                  className="transition hover:text-blue-300"
                >
                  Recursos
                </Link>
              </li>

              <li>
                <Link
                  href="/contacto"
                  className="transition hover:text-blue-300"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold">Contáctenos</h3>

            <div className="mt-6 space-y-5">
              {/* WhatsApp / celular */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar a CONREV por WhatsApp"
                className="group flex items-start gap-3"
              >
                <FaWhatsapp
                  size={23}
                  className="mt-1 shrink-0 text-[#25D366] transition group-hover:scale-110"
                />

                <span className="transition group-hover:text-[#25D366]">
                  +57 323 929 0712
                </span>
              </a>

              {/* Teléfono fijo */}
              <a
                href={`tel:${fixedPhone}`}
                aria-label="Llamar al teléfono fijo de CONREV"
                className="group flex items-start gap-3"
              >
                <Phone
                  size={21}
                  className="mt-1 shrink-0 text-[#1684C7] transition group-hover:text-blue-300"
                />

                <span className="transition group-hover:text-blue-300">
                  (604) 204 1918
                </span>
              </a>

              {/* Correo */}
              <a
                href={`mailto:${company.contact.email}`}
                className="group flex items-start gap-3"
              >
                <Mail
                  size={21}
                  className="mt-1 shrink-0 text-[#1684C7]"
                />

                <span className="break-all transition group-hover:text-blue-300">
                  {company.contact.email}
                </span>
              </a>

              {/* Ubicación */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={21}
                  className="mt-1 shrink-0 text-[#1684C7]"
                />

                <span>Medellín · Cartagena, Colombia</span>
              </div>
            </div>

            <Link
              href="/contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0F4C81] px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              Solicitar asesoría
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </Container>

      {/* Pie de página */}
      <div className="border-t border-slate-800">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-slate-400 lg:flex-row">
          <p>
            © {year} {company.name}. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/politica-privacidad"
              className="transition hover:text-white"
            >
              Política de privacidad
            </Link>

            <Link
              href="/terminos"
              className="transition hover:text-white"
            >
              Términos y condiciones
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
