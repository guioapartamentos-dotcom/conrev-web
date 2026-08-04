"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { company } from "@/app/lib/company";
import { navigation } from "@/app/lib/navigation";
import Button from "@/app/components/ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/images/logo/logo-conrev3.png"
            alt={company.name}
            width={56}
            height={56}
          />

          <div>

            <h2
              className={`font-black text-lg ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              CONREV
            </h2>

            <p
              className={`text-sm ${
                scrolled ? "text-slate-500" : "text-slate-200"
              }`}
            >
              Contadores y Revisores
            </p>

          </div>

        </Link>

        {/* Menú escritorio */}

        <nav className="hidden lg:flex items-center gap-8">

          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition hover:text-[#0F4C81] ${
                scrolled ? "text-slate-700" : "text-white"
              }`}
            >
              {item.title}
            </Link>
          ))}

        </nav>

        {/* Botón escritorio */}

        <div className="hidden lg:block">
          <Button href="/contacto">
            Solicitar asesoría
          </Button>
        </div>

        {/* Botón móvil */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? (
            <X
              className={scrolled ? "text-slate-900" : "text-white"}
            />
          ) : (
            <Menu
              className={scrolled ? "text-slate-900" : "text-white"}
            />
          )}
        </button>

      </div>

      {/* Menú móvil */}

      {open && (
        <div className="lg:hidden bg-white shadow-xl">

          <div className="px-6 py-6 flex flex-col gap-5">

            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-slate-700 font-medium"
              >
                {item.title}
              </Link>
            ))}

            <Button href="/contacto">
              Solicitar asesoría
            </Button>

          </div>

        </div>
      )}
    </header>
  );
}