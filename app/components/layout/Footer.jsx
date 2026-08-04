export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Empresa */}

          <div>

            <h2 className="text-2xl font-bold mb-4">
              CONREV
            </h2>

            <p className="text-gray-300 leading-7">
              Contadores y Revisores S.A.S.
            </p>

            <p className="text-gray-400 mt-4">
              Su confianza,
              nuestro mayor compromiso.
            </p>

          </div>

          {/* Soluciones */}

          <div>

            <h3 className="font-bold text-lg mb-4">
              Soluciones
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>Contabilidad Empresarial</li>

              <li>Asesoría Tributaria</li>

              <li>Revisoría Fiscal</li>

              <li>Gestión Laboral</li>

            </ul>

          </div>

          {/* Contacto */}

          <div>

            <h3 className="font-bold text-lg mb-4">
              Contacto
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>📞 302 344 9702</li>

              <li>✉ info@conrev.com.co</li>

              <li>📍 Medellín - Colombia</li>

            </ul>

          </div>

          {/* Redes */}

          <div>

            <h3 className="font-bold text-lg mb-4">
              Síguenos
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>Facebook</li>

              <li>Instagram</li>

              <li>LinkedIn</li>

            </ul>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-gray-400">

          © 2026 CONREV Contadores y Revisores S.A.S.
          Todos los derechos reservados.

        </div>

      </div>

    </footer>
  );
}