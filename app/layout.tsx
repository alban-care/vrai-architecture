import type { Metadata } from "next";
import { Montserrat_Alternates, Open_Sans } from "next/font/google";
import { appName, appDescription, appLocale } from "@/lib/config";
import { Providers } from "@/app/providers";
import { cn } from "@/lib/utils";
import "./globals.css";

const OpenSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserratAlternates = Montserrat_Alternates({
  variable: "--font-montserrat-alternates",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  icons: [
    {
      rel: "icon",
      href: "/logo-dark.png",
      url: "/logo-dark.png",
      type: "image/png",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      href: "/logo-light.png",
      url: "/logo-light.png",
      type: "image/png",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  title: appName,
  description: appDescription,
  openGraph: {
    type: "website",
    locale: appLocale,
    images: [
      {
        url: "/img/logo-dark.png",
        width: 854,
        height: 480,
        alt: `${appName} Logo sombre`,
      },
      {
        url: "/img/logo-light.png",
        width: 854,
        height: 480,
        alt: `${appName} Logo clair`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={appLocale} suppressHydrationWarning>
      <body className={cn(OpenSans.variable, montserratAlternates.variable)}>
        <Providers>
          <div className="h-full w-full flex flex-col">
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
