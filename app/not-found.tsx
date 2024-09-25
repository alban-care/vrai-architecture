import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function NotFoundPage(): JSX.Element {
  return (
    <main className="h-full flex flex-col justify-center items-center gap-4 [&>*]:text-center">
      <Icons.logoIcon className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48" />
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="text-lg">Cette page a peut-être quitté le bâtiment.</p>
      <Button asChild>
        <Link href="/">Retour à la page d'accueil</Link>
      </Button>
    </main>
  );
}
