import { Metadata } from "next";
import { appTitle, appDescription } from "@/lib/config";

export const metadata: Metadata = {
  title: appTitle,
  description: appDescription,
};

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center items-center">
      <h1 className="text-center">Vrai-Architecture</h1>
    </main>
  );
}
