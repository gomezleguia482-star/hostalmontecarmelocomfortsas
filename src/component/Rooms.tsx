import triple_sencilla from "../assets/triple-sencilla.jpeg";
import doble_sencilla from "../assets/doble-sencilla.jpeg";
import doble_doble from "../assets/doble-doble.jpeg";
import doble from "../assets/doble.jpeg";
import doble_sencilla_sencilla from "../assets/doble-sencilla-sencilla.jpeg";
import sencilla from "../assets/sencilla.jpeg";

export function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-hotel-blue font-semibold tracking-widest uppercase text-sm">
            Tu espacio ideal
          </span>
          <h2 className="text-4xl font-bold mt-2">Nuestras Habitaciones</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              tipo: "Sencilla",
              precio: "90.000",
              img: sencilla,
              description: "Una cama sencilla para una persona",
            },
            {
              tipo: "Sencilla",
              precio: "100.000",
              img: doble,
              description: "Una cama doble para una persona ",
            },
            {
              tipo: "Tripe sencilla",
              precio: "170.000",
              img: triple_sencilla,
              description: "Tres camas sencillas, para 3 personas",
            },
            {
              tipo: "Doble, sencilla",
              precio: "165.000",
              img: doble_sencilla,
              description: "Una cama doble mas una sencilla, para 3 personas",
            },
            {
              tipo: "Doble",
              precio: "190.000",
              img: doble_doble,
              description: "Dos camas doble, para cuatro personas",
            },
            {
              tipo: "Doble, sencilla",
              precio: "190.000",
              img: doble_sencilla_sencilla,
              description: "Una cama doble mas dos sencilla, para 4 personas",
            },
          ].map((room) => (
            <div
              key={room.tipo}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.img}
                  alt={room.tipo}
                  className="w-full h-64 object-cover object-top rounded-lg"
                />
                <div className="absolute top-4 right-4 bg-hotel-red text-white px-4 py-1 rounded-full text-xs font-bold">
                  DESDE ${room.precio}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{room.tipo}</h3>
                <ul className="space-y-2 text-slate-500 text-sm mb-6 border-b pb-6">
                  <li>{room.description}</li>
                  <li className="flex items-center">Baño privado con ducha</li>
                  <li className="flex items-center">TV</li>
                  <li className="flex items-center">Aire acondiccionado</li>
                  <li className="flex items-center">Ventilador</li>
                </ul>
                <a
                  href="https://wa.me/573022906081"
                  className="block text-center w-full bg-slate-600 text-white py-4 rounded-xl font-bold hover:bg-hotel-red transition-colors"
                >
                  Reservar Habitación
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
