import { Circle } from "./content/Circle";
import { LeftContent } from "./content/LeftContent";
import { RightContent } from "./content/RightContent";

export function Content() {
  return (
    <main className="mg:px-24 mg:py-8 flex h-auto w-full items-center justify-between gap-20 px-4 py-6">
      <LeftContent />

      <RightContent />

      <Circle />
    </main>
  );
}
