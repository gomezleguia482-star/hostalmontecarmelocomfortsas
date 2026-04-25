import { MessageCircle, MapPin } from "lucide-react";

export function Map() {
  return (
    <section id="map" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4 italic text-red-600">
            Encuéntranos
          </h2>
          <p className="text-slate-400 mb-8 text-lg ">
            Visítanos en nuestra ubicación en El Carmen de Bolivar, estamos
            listos para recibirte.
          </p>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 text-slate-600">
                <MapPin />
              </div>
              <p className="text-slate-400 text-xs md:text-sm">
                Cra. 55 #N°24-36, El Carmen de Bolívar
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 text-slate-600">
                <MessageCircle />
              </div>
              <p className="text-slate-400 text-xs md:text-sm">
                +57 302-2906081
              </p>
            </div>
          </div>
        </div>
        <div className="h-96 rounded-3xl overflow-hidden border-8 border-slate-800 shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.606803750419!2d-75.12013792408635!3d9.714559877879449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e58d05044d443fb%3A0xebc9feb3ea25cbed!2sHostal%20Monte%20Carmelo%20Comfort%20S.A.S!5e0!3m2!1ses-419!2sco!4v1776963073509!5m2!1ses-419!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
