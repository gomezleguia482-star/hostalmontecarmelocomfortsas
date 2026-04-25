import { useEffect, useState } from "react";
import montecarmelo from "../assets/gallery-img-0.jpeg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/#home" },
    { name: "Habitaciones", href: "/#rooms" },
    { name: "Servicios", href: "/#services" },
    { name: "Galería", href: "/#gallery" },
    { name: "Ubicación", href: "/#map" },
  ];

  return (
    <>
      {/* --- BARRA DE NAVEGACIÓN (Siempre arriba) --- */}
      <nav
        className={`fixed w-full z-50 nav-transition transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            className={`text-2xl font-bold tracking-tighter nav-transition ${
              scrolled ? "text-hotel-red" : "text-white"
            }`}
          >
            MONTE CARMELO
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-widest font-semibold transition-colors ${
                  scrolled
                    ? "text-slate-700 border-b-2 border-transparent hover:text-red-500 hover:border-b-red-500"
                    : "text-white border-b-2 border-transparent hover:border-b-slate-200"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Botón Hamburguesa (Móvil) */}
          <button
            className={`md:hidden p-2 ${scrolled ? "text-slate-800" : "text-white"}`}
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* --- SECCIÓN HERO --- */}
      <header
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <img
          src={montecarmelo}
          alt="Frente Hostal Montecarmelo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay oscuro para que se lea el texto */}
        <div className="absolute inset-0 bg-black/40 hero-overlay"></div>

        <div className="relative z-10 text-center text-white px-4">
          <span className="bg-hotel-blue px-4 py-1 text-xs tracking-[0.3em] uppercase mb-4 inline-block rounded-full font-bold">
            Tradición y Confort
          </span>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 drop-shadow-lg">
            Hostal <br />
            <span className="text-hotel-red uppercase">
              Monte Carmelo Comfort SAS
            </span>
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto font-light mb-8 opacity-90">
            Hospedate en el corazón de los montes de maria.
          </p>
          <a
            href="https://wa.me/573022906081"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-hotel-red hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl"
          >
            CONSULTAR DISPONIBILIDAD
          </a>
        </div>
      </header>

      {/* Menú Móvil (Overlay) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center p-8 animate-menu-overlay">
          {/* Botón de cerrar */}
          <button
            className="absolute top-8 right-8 text-slate-800 hover:text-hotel-red hover:rotate-90 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Contenedor de Links */}
          <div className="flex flex-col space-y-6 text-center">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="animate-link-item text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-800 hover:text-hotel-red transition-all duration-300 transform hover:scale-110"
                style={{ animationDelay: `${(index + 1) * 100}ms` }} // El delay ahora sí funcionará
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Línea decorativa con delay al final */}
          <div
            className="animate-link-item mt-12 w-20 h-1 bg-hotel-red rounded-full"
            style={{ animationDelay: `${(navLinks.length + 1) * 100}ms` }}
          ></div>
        </div>
      )}
    </>
  );
}
