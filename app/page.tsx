import { Metadata } from "next";
import { appTitle, appDescription } from "@/lib/config";
import { Icons } from "@/components/icons";

export const metadata: Metadata = {
  title: appTitle,
  description: appDescription,
};

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center items-center">
      <Icons.logoIcon className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 mb-8" />
      <h1 className="text-center">Vrai Architecture</h1>
    </main>
  );
}
