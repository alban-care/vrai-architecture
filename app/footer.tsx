import { Contact } from "@/components/client/contact";
import { Copyright } from "@/components/client/copyright";

export function Footer(): JSX.Element {
  return (
    <footer
      id="footer"
      className="hidden w-full md:flex flex-row-reverse justify-betwen text-center px-4 py-2"
    >
      <span className="sr-only">Pied de page</span>
      <nav id="contact" className="hidden md:block">
        <Contact />
        <span className="sr-only">Social Menu Navigation</span>
      </nav>
      <Copyright />
    </footer>
  );
}
