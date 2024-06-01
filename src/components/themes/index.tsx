"use client";

import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import React from "react";
import { Button } from "../ui/button";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setTheme("light");
  }, []);

  return (
    <div className="w-full bg-red-400">
      <Button
        variant="ghost"
        className="absolute right-3 top-3"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <BsSunFill size={20} /> : <MdDarkMode size={20} />}
      </Button>
    </div>
  );
}
