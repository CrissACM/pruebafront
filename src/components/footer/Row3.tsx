export function Row3() {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-y-6">
      <div className="flex flex-col gap-y-4">
        <h4>Texto Legales</h4>
        <div className="flex flex-col gap-y-3">
          <a className="a2" href="">
            Condiciones Generales
          </a>
          <a className="a2" href="">
            Política De Privacidad
          </a>
          <a className="a2" href="">
            Política De Cookies
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <h4>Contacto</h4>
        <div className="flex flex-col gap-y-3">
          <a className="a2" href="">
            hello@devtalenty.com
          </a>
          <p className="p5">+506 124 356 789</p>
          <a className="a2" href="">
            Chat
          </a>
          <p className="p5">De lunes a viernes de 9:00h a 19:00h</p>
          <div className="flex items-center gap-x-3">
            <p className="p5">Síguenos en: </p>
            <img src="/iconFacebook.svg" alt="" />
            <img src="/iconInstagram.svg" alt="" />
            <img src="/iconTwitter.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
