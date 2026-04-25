import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si no hay hash (#), sube al inicio (útil para Políticas de Privacidad)
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Si hay hash, espera un poquito a que React renderice y haz scroll
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
}
