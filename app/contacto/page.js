import Container from "../components/ui/Container";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "Contacto",
};

export default function ContactoPage() {
  return (
    <main className="pt-40">

      {/* HERO */}

      <section className="bg-[#0F4C81] py-24 text-white">

        <Container>

          <span className="uppercase tracking-[0.25em] text-blue-200 font-semibold">
            Contacto
          </span>

          <h1 className="mt-6 text-5xl font-black">
            Estamos listos para ayudarle.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            Contáctenos y uno de nuestros profesionales se comunicará con usted
            para conocer sus necesidades y brindarle la mejor solución.
          </p>

        </Container>

      </section>

      {/* CONTENIDO */}

      <section className="py-24">

        <Container>

          <div className="grid lg:grid-cols-2 gap-16">

            {/* FORMULARIO */}

            <div className="rounded-3xl border border-slate-200 p-10 shadow-sm">

              <h2 className="text-3xl font-black">
                Envíenos un mensaje
              </h2>

              <form className="mt-10 space-y-6">

                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-[#0F4C81]"
                />

                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-[#0F4C81]"
                />

                <input
                  type="text"
                  placeholder="Empresa"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-[#0F4C81]"
                />

                <textarea
                  rows="6"
                  placeholder="¿Cómo podemos ayudarle?"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-[#0F4C81]"
                />

                <button
                  type="submit"
                  className="rounded-xl bg-[#0F4C81] px-8 py-4 font-semibold text-white hover:bg-blue-800 transition"
                >
                  Enviar mensaje
                </button>

              </form>

            </div>

            {/* INFORMACIÓN */}

            <div>

              <h2 className="text-3xl font-black">
                Información de contacto
              </h2>

              <div className="mt-10 space-y-8">

                <div className="flex gap-5">

                  <Phone className="text-[#0F4C81]" />

                  <div>

                    <h3 className="font-bold">
                      Teléfono
                    </h3>

                    <p className="text-slate-600">
                      +57 323 929 0712
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <Mail className="text-[#0F4C81]" />

                  <div>

                    <h3 className="font-bold">
                      Correo
                    </h3>

                    <p className="text-slate-600">
                      info@conrev.com.co
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <MapPin className="text-[#0F4C81]" />

                  <div>

                    <h3 className="font-bold">
                      Ubicación
                    </h3>

                    <p className="text-slate-600">
                      Medellín, Antioquia, Colombia
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <Clock className="text-[#0F4C81]" />

                  <div>

                    <h3 className="font-bold">
                      Horario
                    </h3>

                    <p className="text-slate-600">
                      Lunes a Viernes
                    </p>

                    <p className="text-slate-600">
                      8:00 AM - 5:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </Container>

      </section>

    </main>
  );
}