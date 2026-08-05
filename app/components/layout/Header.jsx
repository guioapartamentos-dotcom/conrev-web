"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { company } from "@/app/lib/company";
import { navigation } from "@/app/lib/navigation";
import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";

export default function Header() {
  const pathname = usePathname();
  const [scrolled,setScrolled]=useState(false);
  const [menuOpen,setMenuOpen]=useState(false);

  useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>40);
    h();
    window.addEventListener("scroll",h);
    return ()=>window.removeEventListener("scroll",h);
  },[]);

  useEffect(()=>{
    document.body.style.overflow=menuOpen?"hidden":"";
    return ()=>{document.body.style.overflow="";};
  },[menuOpen]);

  useEffect(()=>{setMenuOpen(false);},[pathname]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled?"bg-white/95 backdrop-blur-xl shadow-lg py-4":"bg-transparent py-8"}`}>
        <Container className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src={scrolled?"/images/logo/logo-conrev-dark.png":"/images/logo/logo-conrev-light.png"} alt={company.shortName} width={220} height={58} priority className="h-auto w-[170px] lg:w-[220px]" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item)=>{
              const active=pathname===item.href;
              return <Link key={item.href} href={item.href} className={active?"font-semibold text-[#0F4C81]":(scrolled?"text-slate-700 hover:text-[#0F4C81]":"text-white hover:text-blue-200")}>{item.title}</Link>;
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contacto">Solicitar asesoría</Button>
          </div>

          <button className="lg:hidden" onClick={()=>setMenuOpen(true)} aria-label="Abrir menú">
            <Menu className={scrolled?"text-slate-900":"text-white"} />
          </button>
        </Container>
      </header>

      {menuOpen && <>
        <div className="fixed inset-0 z-40 bg-black/40" onClick={()=>setMenuOpen(false)} />
        <aside className="fixed top-0 right-0 z-50 h-screen w-80 bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b p-6">
            <h3 className="font-bold">{company.shortName}</h3>
            <button onClick={()=>setMenuOpen(false)}><X/></button>
          </div>
          <div className="flex flex-col gap-6 p-6">
            {navigation.map(item=><Link key={item.href} href={item.href} className="text-lg text-slate-700">{item.title}</Link>)}
            <Button href="/contacto" className="w-full">Solicitar asesoría</Button>
            <div className="border-t pt-6 text-sm text-slate-600">
              <p>{company.contact.phone}</p>
              <p>{company.contact.email}</p>
              <p>{company.contact.address}</p>
            </div>
          </div>
        </aside>
      </>}
    </>
  );
}