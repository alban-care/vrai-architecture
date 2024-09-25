"use client";

import { MouseEventHandler, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useTheme } from "next-themes";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Moon, Sun } from "lucide-react";

const Modes = ["light", "dark", "system"] as const;

export function ModeToggle({
  variant = "dropdown",
}: {
  variant?: "dropdown" | "dialog";
}) {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useHotkeys("ctrl+m", () => setIsOpen(true));

  const onItemClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (!event) return;
    setTheme(event.currentTarget.value);
    setIsOpen((prev) => !prev);
  };

  if (variant === "dialog") {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Mode</DialogTitle>
            <DialogDescription>
              Select a mode to change the appearance of the website.
            </DialogDescription>
          </DialogHeader>
          <RadioGroup defaultValue={theme}>
            {Modes.map((mode) => (
              <div key={mode} className="flex items-center space-x-2">
                <RadioGroupItem id={mode} value={mode} onClick={onItemClick} />
                <Label htmlFor={theme}>
                  {mode[0].toUpperCase() + mode.slice(1)}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <span className="sr-only">Toggle mode theme</span>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="mx-4">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          aria-label="Light mode"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          aria-label="Dark mode"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          aria-label="System mode"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
