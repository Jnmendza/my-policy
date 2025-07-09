"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <Button variant='ghost' size='icon' onClick={toggleTheme}>
      {theme === "light" ? (
        <Moon className='h-5 w-5' />
      ) : (
        <Sun className='h-5 w-5' />
      )}
    </Button>
  );
};
