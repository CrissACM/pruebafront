export function Row2() {
  return (
    <div className="flex h-full w-full flex-col gap-y-8">
      <div className="gap-y flex flex-col gap-y-4">
        <h4>Confianza y Seguridad</h4>

        <div className="flex flex-col gap-y-3">
          <p className="p4">Sellos de confianza</p>

          <div className="flex gap-x-4">
            <img src="/confianzaOnline.svg" alt="img1" />
            <img src="/juegoResponsable.svg" alt="img2" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-2">
        <p className="p4">Métodos de Pago</p>

        <div className="flex flex-wrap gap-4">
          <img src="/visa.svg" alt="img1" />
          <img src="/maestro.svg" alt="img1" />
          <img src="/mastercard.svg" alt="img1" />
          <img src="/telepago.svg" alt="img1" />
          <img src="/servired.svg" alt="img1" />
          <img src="/bizum.svg" alt="img1" />
          <img src="/laCaixa.svg" alt="img1" />
          <img src="/bbva.svg" alt="img1" />
          <img src="/santander.svg" alt="img1" />
          <img src="/bsabadell.svg" alt="img1" />
        </div>
      </div>
    </div>
  );
}
