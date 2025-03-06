"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col justify-center">
      <input
        type="checkbox"
        name="theme-checkbox"
        id="theme-checkbox"
        className="peer sr-only"
        checked={theme === "dark"}
        onChange={() =>
          setTheme((prev) => (prev === "dark" ? "light" : "dark"))
        }
      />
      <label
        className="group relative inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-input bg-transparent text-foreground transition-colors hover:bg-accent hover:text-accent-foreground hover:inset-shadow-xs peer-focus-visible:outline peer-focus-visible:outline-ring/70"
        htmlFor="theme-checkbox"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <span className="in-[.group]:hidden">Light</span>
        <motion.div
          initial={{ translateY: -10, opacity: 0 }}
          animate={
            theme === "dark"
              ? { translateY: 0, opacity: 1 }
              : { translateY: -10, opacity: 0 }
          }
          transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
          className="absolute"
        >
          <Moon
            size={16}
            strokeWidth={2}
            // className="shrink-0 scale-0 opacity-0 transition-all in-[.group]:peer-checked:scale-100 in-[.group]:peer-checked:opacity-100"
            aria-hidden="true"
          />
        </motion.div>
        <motion.div
          initial={{ translateY: 10, opacity: 0 }}
          animate={
            theme === "light"
              ? { translateY: 0, opacity: 1 }
              : { translateY: 10, opacity: 0 }
          }
          transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
        >
          <Sun
            size={16}
            strokeWidth={2}
            // className="absolute shrink-0 scale-100 opacity-100 transition-all in-[.group]:peer-checked:scale-0 in-[.group]:peer-checked:opacity-0"
            aria-hidden="true"
          />
        </motion.div>
      </label>
    </div>
  );
};
