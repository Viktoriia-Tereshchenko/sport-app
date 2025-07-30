"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggler() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // можно поставить какой нибудь html заглушку
  }
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={`w-14 h-8 flex items-center rounded-full px-1 transition-colors duration-300 ${
        resolvedTheme === "dark" ? "bg-gray-700" : "bg-yellow-400"
      }`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-sm ${
          resolvedTheme === "dark" ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {resolvedTheme === "dark" ? "🌛" : "🌞"}
      </div>
    </button>
  );
}
