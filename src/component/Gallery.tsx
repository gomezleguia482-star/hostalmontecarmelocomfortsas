import { useEffect, useRef } from "react";
import gallery_0 from "../assets/gallery-img-0.jpeg";
import gallery_1 from "../assets/gallery-img-1.jpeg";
import gallery_2 from "../assets/gallery-img-2.jpeg";
import gallery_3 from "../assets/gallery-img-3.jpeg";
import gallery_4 from "../assets/gallery-img-4.jpeg";
import gallery_5 from "../assets/gallery-img-5.jpeg";
import gallery_6 from "../assets/gallery-img-6.jpeg";
import gallery_7 from "../assets/gallery-img-7.jpeg";
import gallery_8 from "../assets/gallery-img-8.jpeg";
import gallery_9 from "../assets/gallery-img-9.jpeg";

export function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const misFotos = [
    { id: 1, src: gallery_0, alt: "Vistas" },
    { id: 2, src: gallery_1, alt: "Zonas de Estar" },
    { id: 3, src: gallery_2, alt: "Vistas" },
    { id: 4, src: gallery_3, alt: "Zonas de Estar" },
    { id: 5, src: gallery_4, alt: "Zonas de Estar" },
    { id: 6, src: gallery_5, alt: "Vistas" },
    { id: 7, src: gallery_6, alt: "Zonas de Estar" },
    { id: 8, src: gallery_7, alt: "Vistas" },
    { id: 9, src: gallery_8, alt: "Zonas de Estar" },
    { id: 10, src: gallery_9, alt: "Zona de Estar" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold">Galería de Imágenes</h2>
        <p className="text-slate-500 mt-2">Nuestras instalaciones</p>
      </div>

      {/* Contenedor con REF y scrollbar-hide */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 px-6 pb-10"
      >
        {misFotos.map((foto, index) => (
          <div
            key={`${foto.id}-${index}`}
            className="min-w-[80%] md:min-w-[50%] lg:min-w-[40%] snap-center"
          >
            <div className="aspect-video overflow-hidden rounded-3xl shadow-md bg-slate-100">
              <img
                src={foto.src}
                alt={foto.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
