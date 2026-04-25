import {
  Wifi,
  AirVent,
  Coffee,
  MapPin,
  Tv,
  Car,
  Utensils,
  WashingMachine,
} from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <span className="text-hotel-red font-semibold tracking-widest uppercase text-sm">
          Experiencia Única
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-16 italic">
          Servicios para tu tranquilidad
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Wi-Fi */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 flex items-center justify-center bg-slate-50 rounded-2xl text-slate-700 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Wifi size={32} />
            </div>
            <h3 className="font-bold text-lg">Wi-Fi Gratis</h3>
            <p className="text-sm text-slate-500">Alta velocidad</p>
          </div>

          {/* Aire */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 flex items-center justify-center bg-slate-50 rounded-2xl text-slate-700 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <AirVent size={32} />
            </div>
            <h3 className="font-bold text-lg">Aire Acondicionado</h3>
            <p className="text-sm text-slate-500">Confort total</p>
          </div>

          {/* Café */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 flex items-center justify-center bg-slate-50 rounded-2xl text-slate-700 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Coffee size={32} />
            </div>
            <h3 className="font-bold text-lg">Zona de Café</h3>
            <p className="text-sm text-slate-500">Siempre disponible</p>
          </div>

          {/* Ubicación */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 flex items-center justify-center bg-slate-50 rounded-2xl text-slate-700 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <MapPin size={32} />
            </div>
            <h3 className="font-bold text-lg">Ubicación Central</h3>
            <p className="text-sm text-slate-500">Cerca de todo</p>
          </div>

          {/* Televisión */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 flex items-center justify-center bg-slate-50 rounded-2xl text-slate-700 mb-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <Tv size={32} />
            </div>
            <h3 className="font-bold text-lg">Smart TV</h3>
            <p className="text-sm text-slate-500">Canales nacionales</p>
          </div>

          {/* Parqueadero */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 flex items-center justify-center bg-slate-50 rounded-2xl text-slate-700 mb-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <Car size={32} />
            </div>
            <h3 className="font-bold text-lg">Parqueadero</h3>
            <p className="text-sm text-slate-500">Sujeto a disponibilidad</p>
          </div>
          {/* Desayuno */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 flex items-center justify-center bg-slate-50 rounded-2xl text-slate-700 mb-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <Utensils size={32} />
            </div>
            <h3 className="font-bold text-lg">Desayuno Opcional</h3>
            <p className="text-sm text-slate-500">Típico de la región</p>
          </div>

          {/* Lavandería */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 flex items-center justify-center bg-slate-50 rounded-2xl text-slate-700 mb-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <WashingMachine size={32} />
            </div>
            <h3 className="font-bold text-lg">Lavandería</h3>
            <p className="text-sm text-slate-500">
              Servicio con costo adicional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
