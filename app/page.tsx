import { Metadata } from "next";
import { appTitle, appDescription } from "@/lib/config";
import { HomeSlideshow } from "@/components/client/home-slideshow";
import { Preloader } from "@/components/preloader";

export const metadata: Metadata = {
  title: appTitle,
  description: appDescription,
};

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center items-center overflow-hidden">
      <Preloader />
      <HomeSlideshow />
    </main>
  );
}
