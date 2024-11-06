"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative"
      >
        <SunIcon
          className="absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out
               transform dark:rotate-90 dark:scale-0 dark:opacity-0 opacity-100 scale-100"
        />
        <MoonIcon
          className="absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out
               transform rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100"
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
};
export default DarkMode;
