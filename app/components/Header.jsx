import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        <Link href="/">
          <Image
            src="/images/logo/logo-conrev.png"
            alt="CONREV"
            width={180}
            height={61}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10 font-semibold text-slate-700">

          <Link href="/">
            Inicio
          </Link>

          <Link href="/nosotros">
            Nosotros
          </Link>

          <Link href="/servicios">
            Servicios
          </Link>

          <Link href="/recursos">
            Recursos
          </Link>

          <Link href="/contacto">
            Contacto
          </Link>

        </nav>

        <Link
          href="/contacto"
          className="bg-[#0B5E8E] hover:bg-[#094c73] text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Agendar asesoría
        </Link>

      </div>
    </header>
  );
}