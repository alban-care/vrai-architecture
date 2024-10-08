import { Navigation } from "@/components/client/navigation";

export function Header(): JSX.Element {
  return (
    <header
      id="header"
      className="w-full"
      aria-label="Header principal du site"
    >
      <span className="sr-only">En-tête</span>
      <div className="Fixed top-0 sm:left-0">
        <Navigation />
      </div>
    </header>
  );
}
