import { Head } from "./header/Head";
import { ProductTabs } from "./header/ProductTabs";

export function Header() {
  return (
    <header className="h-auto w-full">
      <Head />
      <ProductTabs />
    </header>
  );
}
