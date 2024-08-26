import { LogoDev, Row1, Row2, Row3 } from "./footer/";
import { NavBottom } from "./footer/NavBottom";

export function Footer() {
  return (
    <footer>
      <NavBottom />

      <div className="mg:flex hidden h-[424.84px] items-center justify-around gap-8 bg-black p-8 text-darkPrimary">
        <LogoDev />
        <Row1 />
        <Row2 />
        <Row3 />
      </div>
    </footer>
  );
}
