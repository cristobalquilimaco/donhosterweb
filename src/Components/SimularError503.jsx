import { useEffect } from "react";

function SimularError503() {
  useEffect(() => {
    // Simulando un error 503 al cargar este componente
    throw new Error('503: Servicio no disponible');
  }, []);

  return (
    <div>
      {/* Contenido del componente */}
    </div>
  );
}

export default SimularError503;
