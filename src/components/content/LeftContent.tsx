export function LeftContent() {
  return (
    <div className="flex h-full w-full flex-col gap-y-6">
      <div className="mg:flex mb-8 hidden flex-col gap-y-3">
        <h3>Gestión de Saldo</h3>

        <div className="flex">
          <p className="p4 mg:p-2 mg:w-1/4 mg:flex mg:justify-center grid w-full place-items-center border-b-2 border-[#006089]">
            Recargar Saldo
          </p>
          <p className="p4 mg:p-2 mg:w-1/4 mg:flex mg:justify-center grid w-full place-items-center text-lightDisabled">
            Retirar Premios
          </p>
        </div>
      </div>

      <div className="text-center">
        <h1>10,00 €</h1>
        <p className="p4">Tu Saldo</p>
      </div>

      <div>
        <h5>Selecciona Importe a Añadir:</h5>

        <div className="flex flex-col">
          <label
            className="p5 mg:hidden relative left-4 z-10 w-fit rounded-lg border-2 border-white bg-white"
            htmlFor="importe"
          >
            Importe (€)
          </label>

          <input
            type="number"
            name="importe"
            id="importe"
            value=""
            placeholder="Importe (€)"
            aria-label="importe"
            className="mg:top-0 mg:my-2 relative -top-3 rounded-md border-2 border-black p-3"
          />

          <p className="p5">Importe mínimo 1€</p>

          <div className="mt-1 flex justify-around gap-x-3">
            <button className="p3 w-full rounded-md bg-primary/20 p-2 font-semibold">
              5$
            </button>
            <button className="p3 w-full rounded-md bg-primary/20 p-2 font-semibold">
              10$
            </button>
            <button className="p3 w-full rounded-md bg-primary/20 p-2 font-semibold">
              20$
            </button>
            <button className="p3 w-full rounded-md bg-primary/20 p-2 font-semibold">
              50$
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <h5>Método de pago</h5>

        <div className="flex flex-col gap-y-4 rounded-lg border border-primary p-2 shadow drop-shadow">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <input
                type="radio"
                className="accent-black"
                checked
                name=""
                id=""
              />
              <label htmlFor="default-checkbox" className="p4">
                Tarjeta Bancaria
              </label>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_13818)">
                  <path
                    d="M7.99998 14.6667C11.6819 14.6667 14.6666 11.6819 14.6666 8C14.6666 4.3181 11.6819 1.33334 7.99998 1.33334C4.31808 1.33334 1.33331 4.3181 1.33331 8C1.33331 11.6819 4.31808 14.6667 7.99998 14.6667Z"
                    stroke="#1184E0"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.99335 11.3333H8.00668"
                    stroke="#1184E0"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 6.66666C6 6.2711 6.1173 5.88442 6.33706 5.55552C6.55682 5.22663 6.86918 4.97028 7.23463 4.81891C7.60009 4.66753 8.00222 4.62792 8.39018 4.70509C8.77814 4.78226 9.13451 4.97275 9.41421 5.25245C9.69392 5.53216 9.8844 5.88852 9.96157 6.27648C10.0387 6.66445 9.99913 7.06658 9.84776 7.43203C9.69638 7.79748 9.44004 8.10984 9.11114 8.3296C8.78224 8.54937 8.39556 8.66666 8 8.66666V9.33333"
                    stroke="#1184E0"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_13818">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="p5 text-lightDisabled">Instantáneo</p>
          </div>

          <div className="flex flex-col gap-y-3 pl-3">
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="radio"
                checked
                className="h-4 w-4 accent-black"
              />
              <label htmlFor="default-checkbox" className="p4 ml-2">
                Tarjeta terminada en 0909
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="radio"
                className="h-4 w-4 accent-black"
              />
              <label htmlFor="default-checkbox" className="p4 ml-2">
                Utilizar otra tarjeta
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-between rounded-lg border p-2">
          <div className="flex gap-2">
            <input type="radio" className="accent-black" name="" id="" />
            <label htmlFor="default-checkbox" className="p4">
              Bizum
            </label>

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_13818)">
                <path
                  d="M7.99998 14.6667C11.6819 14.6667 14.6666 11.6819 14.6666 8C14.6666 4.3181 11.6819 1.33334 7.99998 1.33334C4.31808 1.33334 1.33331 4.3181 1.33331 8C1.33331 11.6819 4.31808 14.6667 7.99998 14.6667Z"
                  stroke="#1184E0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99335 11.3333H8.00668"
                  stroke="#1184E0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 6.66666C6 6.2711 6.1173 5.88442 6.33706 5.55552C6.55682 5.22663 6.86918 4.97028 7.23463 4.81891C7.60009 4.66753 8.00222 4.62792 8.39018 4.70509C8.77814 4.78226 9.13451 4.97275 9.41421 5.25245C9.69392 5.53216 9.8844 5.88852 9.96157 6.27648C10.0387 6.66445 9.99913 7.06658 9.84776 7.43203C9.69638 7.79748 9.44004 8.10984 9.11114 8.3296C8.78224 8.54937 8.39556 8.66666 8 8.66666V9.33333"
                  stroke="#1184E0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_13818">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="p5 text-lightDisabled">Importe mínimo 10€</p>
        </div>

        <div className="flex justify-between rounded-lg border p-2">
          <div className="flex gap-2">
            <input type="radio" className="accent-black" name="" id="" />
            <label htmlFor="default-checkbox" className="p4">
              Transferencia
            </label>

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_13818)">
                <path
                  d="M7.99998 14.6667C11.6819 14.6667 14.6666 11.6819 14.6666 8C14.6666 4.3181 11.6819 1.33334 7.99998 1.33334C4.31808 1.33334 1.33331 4.3181 1.33331 8C1.33331 11.6819 4.31808 14.6667 7.99998 14.6667Z"
                  stroke="#1184E0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99335 11.3333H8.00668"
                  stroke="#1184E0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 6.66666C6 6.2711 6.1173 5.88442 6.33706 5.55552C6.55682 5.22663 6.86918 4.97028 7.23463 4.81891C7.60009 4.66753 8.00222 4.62792 8.39018 4.70509C8.77814 4.78226 9.13451 4.97275 9.41421 5.25245C9.69392 5.53216 9.8844 5.88852 9.96157 6.27648C10.0387 6.66445 9.99913 7.06658 9.84776 7.43203C9.69638 7.79748 9.44004 8.10984 9.11114 8.3296C8.78224 8.54937 8.39556 8.66666 8 8.66666V9.33333"
                  stroke="#1184E0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_13818">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="p5 text-lightDisabled">No instantáneo</p>
        </div>
      </div>

      <div className="mg:flex-row-reverse flex flex-col gap-4">
        <button
          type="submit"
          disabled
          className="p3 mg:w-[30%] rounded bg-[#00A9E070] p-3 font-semibold text-lightPrimary/50"
        >
          Recargar Cuenta
        </button>

        <div className="flex gap-x-3">
          <svg
            width="44"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.68 2.10999L4.37 4.53999C3.97089 4.67245 3.62369 4.92734 3.37774 5.26844C3.1318 5.60953 2.99962 6.01947 3 6.43999V10.11C2.99896 11.9223 3.44572 13.7068 4.30057 15.3049C5.15542 16.9029 6.39187 18.265 7.9 19.27L11.45 21.63C11.6133 21.7375 11.8045 21.7948 12 21.7948C12.1955 21.7948 12.3867 21.7375 12.55 21.63L16.1 19.27C17.6081 18.265 18.8446 16.9029 19.6994 15.3049C20.5543 13.7068 21.001 11.9223 21 10.11V6.43999C21.0004 6.01947 20.8682 5.60953 20.6223 5.26844C20.3763 4.92734 20.0291 4.67245 19.63 4.53999L12.32 2.10999C12.1124 2.03988 11.8876 2.03988 11.68 2.10999V2.10999Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className="p5 my-2">
            Todos los pagos en Dev Talenty son 100% seguros. Web certificada por
            Confianza Online.
          </p>
        </div>
      </div>
    </div>
  );
}
