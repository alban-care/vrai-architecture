"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { ModeToggle } from "@/components/mode-toggle";

const ModeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ModeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <ModeToggle variant="dialog" />
    </ModeProvider>
  );
}
