export function Head() {
  return (
    <div className="mg:px-10 flex h-16 justify-between bg-primary px-4">
      <nav className="flex items-center text-darkPrimary">
        <div className="mg:gap-x-6 flex items-center justify-start gap-1 text-base font-medium">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mg:hidden"
          >
            <path
              d="M11 7L6 12L11 17"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 12H18"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            width="3"
            height="38"
            viewBox="0 0 3 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mg:block hidden"
          >
            <line
              x1="1.87011"
              y1="0.369019"
              x2="1.87011"
              y2="37.3179"
              stroke="white"
              stroke-opacity="0.5"
              stroke-width="2.05272"
            />
          </svg>

          <h6 className="mg:hidden">Gestión de Saldo</h6>

          <p className="p3 mg:block hidden">Inicio</p>
          <p className="p3 mg:block hidden">Resultados y Botes</p>
          <p className="p3 mg:block hidden">Quienes Somos</p>
          <p className="p3 mg:block hidden">Ayuda</p>
        </div>
      </nav>

      <div className="mg:gap-8 flex items-center justify-between gap-4 text-darkPrimary">
        <div className="flex flex-col items-center justify-center text-base font-semibold">
          <svg
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9257 10.2644C15.1931 10.2644 17.0312 8.42636 17.0312 6.15899C17.0312 3.89162 15.1931 2.05356 12.9257 2.05356C10.6584 2.05356 8.82031 3.89162 8.82031 6.15899C8.82031 8.42636 10.6584 10.2644 12.9257 10.2644Z"
              stroke="white"
              stroke-width="1.53954"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.7453 22.5807C19.064 22.5807 19.3783 22.5065 19.6633 22.364C19.9484 22.2215 20.1963 22.0146 20.3875 21.7596C20.5787 21.5047 20.7079 21.2087 20.7649 20.8952C20.8219 20.5817 20.8052 20.2592 20.7159 19.9532C20.1936 18.3067 19.1528 16.8733 17.7488 15.867C16.3448 14.8607 14.6529 14.3355 12.9259 14.3698C11.1988 14.3355 9.50701 14.8607 8.103 15.867C6.69899 16.8733 5.65813 18.3067 5.13583 19.9532C5.04635 20.26 5.02973 20.5834 5.08728 20.8977C5.14483 21.212 5.27497 21.5086 5.46733 21.7637C5.6597 22.0189 5.90897 22.2256 6.19532 22.3674C6.48166 22.5093 6.79716 22.5823 7.1167 22.5807H18.7453Z"
              stroke="white"
              stroke-width="1.53954"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className="p5 mg:p3 font-semibold">0,00€</p>
        </div>

        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.00586 4.52717H6.05756C6.36652 4.51659 6.66995 4.61092 6.91844 4.79481C7.16694 4.97869 7.34585 5.24129 7.42604 5.53984L11.3536 20.292C11.5081 20.8663 11.8455 21.3745 12.3146 21.74C12.7837 22.1054 13.3591 22.3081 13.9537 22.3174H22.8898C23.4653 22.3179 24.0263 22.137 24.4931 21.8004C24.9599 21.4639 25.3087 20.9887 25.4899 20.4426L28.3638 11.8075C28.4324 11.6046 28.4524 11.3884 28.4222 11.1763C28.3921 10.9643 28.3126 10.7623 28.1901 10.5866C28.0676 10.4108 27.9056 10.2663 27.7171 10.1646C27.5286 10.0629 27.3189 10.0069 27.1048 10.0011H8.61662"
            stroke="white"
            stroke-width="1.53954"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.9399 27.7913H13.9666"
            stroke="white"
            stroke-width="2.5659"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.1509 27.7913H22.1775"
            stroke="white"
            stroke-width="2.5659"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mg:hidden"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 9L9 15"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 15L9 9"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
