export function Row1() {
  const linkInteres: string[] = [
    "Quienes somos",
    "Ayuda",
    "Preguntas Frecuentes",
    "Blog",
    "Premios Repartidos",
    "Mapa Web",
  ];

  const otrosLinks: string[] = [
    "Comprar Lotería De Navidad",
    "Comprar Lotería De Niño",
    "Lotería De Navidad Para Empresas",
    "Bote XX Millones Euromillones",
    "Lotería Sorteo Especial",
    "Lotería Jueves y Sábado",
  ];

  return (
    <div className="flex h-full w-full flex-col justify-between gap-y-6">
      <div className="flex w-full flex-col gap-y-4">
        <h4>Link de Interés</h4>

        <div className="grid grid-cols-2 gap-y-3">
          {linkInteres.map((linkIntere) => (
            <a className="a2" href="" key={linkIntere}>
              {linkIntere}
            </a>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col gap-y-4">
        <h4>Otros Links</h4>

        <div className="grid grid-cols-1 gap-y-3">
          {otrosLinks.map((otrosLink) => (
            <a className="a2" href="" key={otrosLink}>
              {otrosLink}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
