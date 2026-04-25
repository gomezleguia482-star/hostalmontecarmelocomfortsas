import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  const phoneNumber = "573022906081";
  const message =
    "Hola, me gustaría recibir más información sobre las habitaciones.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-2 right-2 z-50 bg-[#25D366] text-white p-2 rounded-full shadow-lg hover:bg-[#288c12] transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <span className="absolute right-16 bg-white text-slate-800 text-xs font-bold px-3 py-1 rounded shadow-md whitespace-nowrap">
        ¿Necesitas ayuda?
      </span>
      <FaWhatsapp size={30} />
    </a>
  );
}
