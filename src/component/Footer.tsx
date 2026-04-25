import { Link } from "react-router-dom";
import { MessageCircle, MapPin, Mail } from "lucide-react"; // Si usas lucide-react

export function Footer() {
  return (
    <footer className="py-12 bg-white ">
      <div className="container mx-auto px-6">
        {/* Contenedor Grid de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left border-t border-slate-400 mt-4 pt-12">
          {/* Columna 1: Marca y Eslogan */}
          <div className="flex flex-col">
            <h3 className="text-sm md:text-xl font-bold text-center text-hotel-red mb-4 uppercase tracking-tighter">
              Hostal Monte Carmelo Comfort SAS
            </h3>
            <p className="text-slate-500 text-sm italic mb-4 text-justify">
              "Donde cada huésped es de la familia"
            </p>
            <p className="text-slate-500 text-sm text-justify">
              Disfruta de la mejor hospitalidad en El Carmen de Bolívar.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos / Legales */}
          <div className="flex flex-col items-center">
            <h4 className="text-slate-800 font-bold mb-4 uppercase text-sm tracking-widest">
              Información
            </h4>
            <nav className="flex flex-col space-y-2 text-slate-500 text-sm">
              <a
                href="/#home"
                className="hover:text-hotel-red transition-colors underline"
              >
                Inicio
              </a>
              <Link
                to="/privacypolicies"
                className="hover:text-hotel-red transition-colors underline"
              >
                Políticas de Privacidad
              </Link>
              <Link
                to="/termsconditions"
                className="hover:text-hotel-red transition-colors underline"
              >
                Términos y Condiciones
              </Link>
            </nav>
          </div>

          {/* Columna 3: Contacto Directo */}
          <div className="flex flex-col items-center">
            <h4 className="text-slate-800 font-bold mb-4 uppercase text-sm tracking-widest">
              Contacto
            </h4>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-hotel-red" />
                <span>Cra. 55 #N°24-36, El Carmen de Bolívar</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={18} className="text-hotel-red" />
                <a
                  href="https://wa.me/573022906081"
                  target="_blank"
                  className="hover:underline"
                >
                  +57 302 290 6081
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-hotel-red" />
                <a
                  href="mailto:luluaga2006@hotmail.com?subject=Consulta sobre Reservas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  luluaga2006@hotmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-hotel-red" />
                <a
                  href="mailto:hostalmontecarmelo2021@hotmail.com?subject=Consulta sobre Reservas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  hostalmontecarmelo2021@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea final de créditos */}
        <div className="border-t border-slate-400 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-xs">
            &copy; {new Date().getFullYear()} Hostal Monte Carmelo Comfort SAS.
            Todos los derechos reservados.
          </p>
          <p className="text-slate-400 text-xs mt-2">
            Desarrollado por{" "}
            <a
              href="https://cargole.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-hotel-red hover:underline"
            >
              Cargole
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
