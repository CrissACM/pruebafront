export function RightContent() {
  return (
    <div className="mg:block hidden h-full w-[50%] gap-y-4">
      <div className="mb-4 flex flex-col gap-y-6 rounded-xl border bg-white p-4 shadow drop-shadow">
        <div className="flex justify-between px-3">
          <h5>Hilla Amada</h5>
          <p className="p5 rounded-sm bg-[#F6BD11] p-1 font-semibold">
            Saldo: 10,00 €
          </p>
        </div>

        <div className="flex justify-between gap-4">
          <button className="p4 rounded border border-black p-3">
            Retirar Premios
          </button>
          <button className="p4 rounded bg-primary p-3 text-darkPrimary">
            Recargar Saldo
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-y-6 rounded-xl border bg-white p-4 shadow drop-shadow">
        <div className="flex flex-col gap-3 px-3">
          <h5>Mi Cuenta</h5>
          <div>
            <div className="flex items-center gap-2 p-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.87905 7.67164C10.3906 7.67164 11.616 6.44627 11.616 4.93469C11.616 3.42311 10.3906 2.19773 8.87905 2.19773C7.36747 2.19773 6.14209 3.42311 6.14209 4.93469C6.14209 6.44627 7.36747 7.67164 8.87905 7.67164Z"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.7586 15.8825C12.9711 15.8825 13.1806 15.8331 13.3706 15.738C13.5606 15.643 13.7259 15.5051 13.8534 15.3351C13.9809 15.1652 14.067 14.9679 14.105 14.7588C14.143 14.5498 14.1318 14.3348 14.0723 14.1309C13.7241 13.0332 13.0302 12.0776 12.0942 11.4067C11.1582 10.7358 10.0303 10.3857 8.87898 10.4086C7.72761 10.3857 6.59972 10.7358 5.66372 11.4067C4.72771 12.0776 4.03381 13.0332 3.6856 14.1309C3.62595 14.3354 3.61487 14.551 3.65324 14.7605C3.69161 14.9701 3.77836 15.1678 3.90661 15.3379C4.03485 15.508 4.20103 15.6458 4.39193 15.7403C4.58282 15.8349 4.79316 15.8836 5.00618 15.8825H12.7586Z"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="p4">Mis Datos Personales</p>
            </div>
            <div className="flex items-center gap-2 p-2">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.87891 1.6194V15.3042"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.3001 3.67212H7.16827C6.53312 3.67212 5.92399 3.92443 5.47487 4.37355C5.02575 4.82267 4.77344 5.4318 4.77344 6.06695V6.06695C4.77344 6.7021 5.02575 7.31124 5.47487 7.76036C5.92399 8.20948 6.53312 8.46179 7.16827 8.46179H10.5895C11.2246 8.46179 11.8338 8.7141 12.2829 9.16322C12.732 9.61234 12.9843 10.2215 12.9843 10.8566C12.9843 11.4918 12.732 12.1009 12.2829 12.55C11.8338 12.9992 11.2246 13.2515 10.5895 13.2515H5.45768"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="p4">Datos Bancarios</p>
            </div>
            <div className="flex items-center gap-2 p-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.03662 7.51505L8.02371 2.72538C8.26643 2.53105 8.56808 2.42517 8.87901 2.42517C9.18993 2.42517 9.49159 2.53105 9.73431 2.72538L15.7214 7.51505"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.40479 6.48869V14.3574C3.40479 14.7204 3.54896 15.0685 3.8056 15.3251C4.06224 15.5817 4.41032 15.7259 4.77326 15.7259H12.9841C13.3471 15.7259 13.6951 15.5817 13.9518 15.3251C14.2084 15.0685 14.3526 14.7204 14.3526 14.3574V6.48869"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="p4">Direcciones</p>
            </div>
            <div className="flex items-center gap-2 p-2">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_2981)">
                  <path
                    d="M13.8191 9.17423L14.6265 10.1869C14.7876 10.3881 14.8886 10.6307 14.9178 10.8868C14.9471 11.1429 14.9035 11.402 14.7919 11.6344C14.6804 11.8668 14.5055 12.0629 14.2874 12.2002C14.0693 12.3376 13.8168 12.4105 13.5591 12.4107H4.19868C3.94093 12.4105 3.68847 12.3376 3.47036 12.2002C3.25225 12.0629 3.07735 11.8668 2.96582 11.6344C2.85428 11.402 2.81064 11.1429 2.83991 10.8868C2.86918 10.6307 2.97017 10.3881 3.13127 10.1869L3.93867 9.17423C4.03526 9.05385 4.08831 8.90434 4.0892 8.75V6.45096C4.07118 5.18207 4.54351 3.95517 5.40775 3.02592C6.27199 2.09667 7.46147 1.53676 8.72834 1.46286C9.36988 1.44269 10.0089 1.55167 10.6075 1.78332C11.2061 2.01498 11.7521 2.36458 12.2129 2.81137C12.6737 3.25816 13.04 3.79301 13.2901 4.38416C13.5402 4.9753 13.6689 5.61067 13.6685 6.25253V8.75C13.6694 8.90434 13.7225 9.05385 13.8191 9.17423V9.17423Z"
                    stroke="black"
                    stroke-width="1.02636"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.616 12.4107C11.616 13.1366 11.3276 13.8327 10.8144 14.346C10.3011 14.8593 9.60493 15.1476 8.87905 15.1476C8.15316 15.1476 7.457 14.8593 6.94373 14.346C6.43045 13.8327 6.14209 13.1366 6.14209 12.4107"
                    stroke="black"
                    stroke-width="1.02636"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_2981">
                    <rect
                      width="16.4217"
                      height="16.4217"
                      fill="white"
                      transform="translate(0.667969 0.0943909)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <p className="p4">Mis Notificaciones</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-3">
          <h5>Historial</h5>
          <div>
            <div className="flex items-center gap-2 p-2">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2578 14.6972L8.8787 11.4128L4.49957 14.6972C4.39791 14.7734 4.27703 14.8199 4.15047 14.8313C4.02391 14.8427 3.89668 14.8186 3.78302 14.7618C3.66937 14.705 3.57378 14.6176 3.50698 14.5095C3.44017 14.4014 3.40479 14.2769 3.40479 14.1498V3.20197C3.40479 2.83903 3.54896 2.49095 3.8056 2.23431C4.06224 1.97767 4.41032 1.8335 4.77326 1.8335H12.9841C13.3471 1.8335 13.6951 1.97767 13.9518 2.23431C14.2084 2.49095 14.3526 2.83903 14.3526 3.20197V14.1498C14.3526 14.2769 14.3172 14.4014 14.2504 14.5095C14.1836 14.6176 14.088 14.705 13.9744 14.7618C13.8607 14.8186 13.7335 14.8427 13.6069 14.8313C13.4804 14.8199 13.3595 14.7734 13.2578 14.6972Z"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.9316 6.62317H6.82617"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="p4">Mis Apuestas</p>
            </div>
            <div className="flex items-center gap-2 p-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9316 8.41339H15.0371V4.30795"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.037 8.33126C15.037 8.33126 14.9959 8.2423 14.9138 8.09861C14.8317 7.95492 14.7085 7.73597 14.5443 7.4828C14.3801 7.22963 14.1885 6.93541 13.9559 6.62066C13.7232 6.30591 13.4564 5.93642 13.1553 5.63535C12.8455 5.28442 12.5141 4.95307 12.1632 4.64321C11.7982 4.32331 11.4068 4.03489 10.9931 3.78107C10.5779 3.5233 10.1319 3.31871 9.6657 3.17209C9.19046 3.01831 8.69409 2.93982 8.19459 2.93945C7.86998 2.9409 7.54649 2.97761 7.22981 3.04893C6.91952 3.11764 6.61859 3.22331 6.33346 3.36368C6.04603 3.49985 5.77321 3.66492 5.51922 3.85633C5.26965 4.06186 5.0405 4.291 4.83498 4.54057C4.60619 4.7769 4.40214 5.03597 4.226 5.31376C4.04921 5.6047 3.9003 5.91169 3.78125 6.23064"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.82614 9.78186H2.7207V13.8873"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.7207 9.86395C2.7207 9.86395 2.76176 9.9529 2.84387 10.0966C2.92597 10.2403 3.04914 10.4592 3.21336 10.7124C3.37757 10.9656 3.56916 11.2598 3.8018 11.5745C4.03444 11.8893 4.30129 12.2588 4.60236 12.5599C4.91222 12.9108 5.24358 13.2421 5.59451 13.552C5.95948 13.8719 6.35089 14.1603 6.76455 14.4141C7.17979 14.6719 7.62575 14.8765 8.09198 15.0231C8.56722 15.1769 9.06359 15.2554 9.56309 15.2558C9.8877 15.2543 10.2112 15.2176 10.5279 15.1463C10.8382 15.0776 11.1391 14.9719 11.4242 14.8315C11.7116 14.6954 11.9845 14.5303 12.2385 14.3389C12.488 14.1334 12.7172 13.9042 12.9227 13.6546C13.1431 13.4105 13.338 13.1446 13.5043 12.8609C13.6811 12.57 13.83 12.263 13.9491 11.944"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="p4">Mis Renovaciones</p>
            </div>
            <div className="flex items-center gap-2 p-2">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3529 1.67694H3.4051C2.64931 1.67694 2.03662 2.28963 2.03662 3.04542V13.9932C2.03662 14.749 2.64931 15.3617 3.4051 15.3617H14.3529C15.1087 15.3617 15.7214 14.749 15.7214 13.9932V3.04542C15.7214 2.28963 15.1087 1.67694 14.3529 1.67694Z"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.45752 5.78238H12.2999"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.45752 8.51935H12.2999"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.45752 11.2563H8.87871"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="p4">Mis Movimientos</p>
            </div>
            <div className="flex items-center gap-2 p-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.7207 2.78293L14.3528 8.94108L2.7207 15.0992L4.77342 8.94108L2.7207 2.78293Z"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.51039 8.9411H4.77344"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="p4">Mis Envíos</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-3">
          <h5>Ayuda y Contacto</h5>
          <div>
            <div className="flex items-center gap-2 p-2">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_3002)">
                  <path
                    d="M8.87901 15.1541C12.658 15.1541 15.7214 12.0906 15.7214 8.31169C15.7214 4.53274 12.658 1.4693 8.87901 1.4693C5.10006 1.4693 2.03662 4.53274 2.03662 8.31169C2.03662 12.0906 5.10006 15.1541 8.87901 15.1541Z"
                    stroke="black"
                    stroke-width="1.02636"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.87158 11.7329H8.88492"
                    stroke="black"
                    stroke-width="1.02636"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.82617 6.94322C6.82617 6.53723 6.94656 6.14036 7.17212 5.80279C7.39767 5.46522 7.71826 5.20212 8.09335 5.04676C8.46843 4.89139 8.88117 4.85074 9.27935 4.92995C9.67754 5.00915 10.0433 5.20465 10.3304 5.49173C10.6175 5.77881 10.813 6.14457 10.8922 6.54276C10.9714 6.94094 10.9307 7.35368 10.7754 7.72876C10.62 8.10385 10.3569 8.42444 10.0193 8.64999C9.68175 8.87555 9.28488 8.99594 8.87889 8.99594V9.68018"
                    stroke="black"
                    stroke-width="1.02636"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_3002">
                    <rect
                      width="16.4217"
                      height="16.4217"
                      fill="white"
                      transform="translate(0.667969 0.10083)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <p className="p4">Preguntas Frecuentes</p>
            </div>

            <div className="flex items-center gap-2 p-2">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.03662 2.57535H3.56247C3.71695 2.57006 3.86867 2.61723 3.99291 2.70917C4.11716 2.80111 4.20662 2.93241 4.24671 3.08169L6.21048 10.4578C6.28775 10.7449 6.45642 10.999 6.69099 11.1817C6.92555 11.3645 7.21324 11.4658 7.51053 11.4705H11.9786C12.2663 11.4707 12.5468 11.3803 12.7802 11.212C13.0136 11.0437 13.188 10.8061 13.2787 10.5331L14.7156 6.2155C14.7499 6.11405 14.7599 6.00597 14.7448 5.89994C14.7297 5.79392 14.69 5.69291 14.6287 5.60505C14.5675 5.51719 14.4865 5.44493 14.3922 5.39409C14.298 5.34324 14.1931 5.31523 14.0861 5.31231H4.842"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.50391 14.2073H7.51724"
                  stroke="black"
                  stroke-width="2.05272"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.6089 14.2073H11.6222"
                  stroke="black"
                  stroke-width="2.05272"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="p4">Nuestro Productos</p>
            </div>

            <div className="flex items-center gap-2 p-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.26825 9.29198L6.05995 7.57454C6.2885 7.43395 6.47067 7.22927 6.58381 6.98595C6.69696 6.74264 6.73607 6.47143 6.69629 6.20607L6.31311 3.46911C6.26248 3.14639 6.09807 2.85242 5.8496 2.64034C5.60113 2.42826 5.28499 2.31207 4.95832 2.31275H3.4051C3.04216 2.31275 2.69408 2.45693 2.43744 2.71356C2.1808 2.9702 2.03662 3.31828 2.03662 3.68122V4.36546C2.03662 7.45048 3.26214 10.4091 5.44357 12.5906C7.62501 14.772 10.5837 15.9975 13.6687 15.9975H14.3529C14.7159 15.9975 15.0639 15.8533 15.3206 15.5967C15.5772 15.3401 15.7214 14.992 15.7214 14.629V13.0758C15.7247 12.7438 15.6071 12.4218 15.3905 12.1701C15.174 11.9183 14.8733 11.7538 14.5445 11.7073L11.8076 11.3242C11.5422 11.2844 11.271 11.3235 11.0277 11.4366C10.7843 11.5498 10.5797 11.732 10.4391 11.9605L8.74216 14.7659"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.2476 5.04968C10.9734 5.04968 11.6696 5.33804 12.1829 5.85132C12.6962 6.3646 12.9845 7.06075 12.9845 7.78664"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.2476 2.31274C11.6993 2.31274 13.0916 2.88946 14.1182 3.91602C15.1448 4.94257 15.7215 6.33488 15.7215 7.78665"
                  stroke="black"
                  stroke-width="1.02636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="p4">Contacto</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2">
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0686 4.57843C12.7321 5.02683 13.3034 5.59821 13.7518 6.26166C13.9783 6.58915 14.1687 6.94015 14.3198 7.30854C14.4795 7.68072 14.601 8.06817 14.6824 8.46491C14.8466 9.28239 14.8466 10.1244 14.6824 10.9419C14.601 11.3386 14.4795 11.726 14.3198 12.0982C14.1661 12.4524 13.9757 12.7895 13.7518 13.104C13.3034 13.7675 12.7321 14.3389 12.0686 14.7873C11.7411 15.0137 11.3901 15.2041 11.0217 15.3552C10.6495 15.5149 10.2621 15.6364 9.86536 15.7178C9.04787 15.8821 8.20589 15.8821 7.38841 15.7178C6.99167 15.6364 6.60423 15.5149 6.23205 15.3552C5.87786 15.2015 5.54074 15.0112 5.22622 14.7873C4.89745 14.5688 4.59244 14.3166 4.31618 14.0346C4.02593 13.7529 3.76672 13.441 3.54299 13.104C3.31654 12.7766 3.12613 12.4256 2.97507 12.0572C2.81534 11.685 2.69384 11.2975 2.61242 10.9008C2.4482 10.0833 2.4482 9.24133 2.61242 8.42385C2.69517 8.0341 2.81665 7.6536 2.97507 7.28802C3.12745 6.92673 3.31782 6.58267 3.54299 6.26166C3.76145 5.93289 4.01371 5.62788 4.29565 5.35162C4.57732 5.06138 4.88929 4.80216 5.22622 4.57843"
              stroke="#333333"
              stroke-width="1.02636"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.64746 2.15625V8.99864"
              stroke="#333333"
              stroke-width="1.02636"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <a className="a1" href="">
            Cerrar Sesión
          </a>
        </div>
      </div>
    </div>
  );
}
