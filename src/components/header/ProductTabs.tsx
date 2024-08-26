import { ProductCells } from "./ProductCells";

export function ProductTabs() {
  return (
    <div className="mg:h-24 mg:px-3 flex h-10 w-full items-center justify-center bg-white lg:px-8">
      <div className="mg:hidden flex h-full w-full justify-around">
        <p className="p4 grid w-full place-items-center border-b-2 border-[#006089]">
          Recargar Saldo
        </p>
        <p className="p4 grid w-full place-items-center text-lightDisabled">
          Retirar Premios
        </p>
      </div>

      <div className="mg:flex hidden h-full w-full justify-around gap-3">
        <ProductCells />
        <ProductCells />
        <ProductCells />
        <ProductCells />
        <ProductCells />
        <ProductCells />
        <ProductCells />
        <ProductCells />
        <ProductCells />
        <ProductCells />
      </div>
    </div>
  );
}
