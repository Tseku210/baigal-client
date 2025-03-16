"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { BuiltByTseku } from "../BuiltBy";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const { theme, setTheme } = useTheme();
  const footerRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(true);
  const [placeholderHeight, setPlaceholderHeight] = useState(384); // Default 384px (h-96)

  useEffect(() => {
    const updateLayout = () => {
      if (!footerRef.current) return;

      const footerHeight = footerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      if (footerHeight > viewportHeight) {
        setIsFixed(false);
        setPlaceholderHeight(0);
      } else {
        setIsFixed(true);
        setPlaceholderHeight(footerHeight);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div style={{ height: placeholderHeight }} />
      <motion.footer
        ref={footerRef}
        initial={{ opacity: 0, translateY: 50 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, translateY: 0 }}
        className={cn(
          "container h-fit bg-transparent text-foreground transition-colors duration-300",
          isFixed ? "fixed bottom-0" : "relative",
        )}
      >
        <div className="mx-auto px-4 py-8 md:py-12 md:px-6 lg:px-8">
          <div className="grid gap-5 md:gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-primary to-foreground">
                Бидэнтэй нэгдээрэй
              </h2>
              <p className="mb-6 text-muted-foreground">
                Бидэнтэй мэйлээ хуваалцаж тогтмол зөвлөгөө авах боломжтой.
              </p>
              <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Үндсэн хуудсууд</h3>
              <nav className="space-y-2 text-sm">
                <Link
                  href="/"
                  className="block transition-colors hover:text-primary"
                >
                  Үндсэн
                </Link>
                <Link
                  href="/about-us"
                  className="block transition-colors hover:text-primary"
                >
                  Бидний талаар
                </Link>
                <Link
                  href="/products"
                  className="block transition-colors hover:text-primary"
                >
                  Тан
                </Link>
                <Link
                  href="/address"
                  className="block transition-colors hover:text-primary"
                >
                  Хаяг байршил
                </Link>
                <Link
                  href="/contact"
                  className="block transition-colors hover:text-primary"
                >
                  Холбоо барих
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Бидний хаяг</h3>
              <address className="space-y-2 text-sm not-italic">
                <p>
                  Улаанбаатар хот, Хан-Уул дүүрэг, 21-р хороо, Буянт-Ухаа
                  хороолол, Морингийн зам гудамж 46/1 тоот
                </p>
                <p>Эмийн лавлах: (976) 78000088</p>
                <p>Утас: (976) 88086538, (976) 91911929</p>
                <p>
                  Мэйл:{" "}
                  <span className="underline">monintra.company@gmail.com</span>
                </p>
              </address>
            </div>
            <div className="relative">
              <h3 className="mb-4 text-lg font-semibold">Сошл хуудсууд</h3>
              <div className="mb-6 flex space-x-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://www.facebook.com/baigalbrandmn"
                        target="_blank"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full"
                        >
                          <Image
                            src="/icons/facebook.svg"
                            alt="facebook icon"
                            width={16}
                            height={16}
                            className="size-4 dark:invert"
                          />
                          <span className="sr-only">Facebook</span>
                        </Button>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Фэйсбүүк дээр дагаарай</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://www.instagram.com/baigalbrand"
                        target="_blank"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full"
                        >
                          <Image
                            src="/icons/instagram.svg"
                            alt="facebook icon"
                            width={16}
                            height={16}
                            className="size-4 dark:invert"
                          />
                          <span className="sr-only">Instagram</span>
                        </Button>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Инстаграм дээр дагаарай</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-center space-x-2">
                <SunIcon className="h-4 w-4" />
                <Switch
                  id="dark-mode"
                  checked={theme === "dark"}
                  onCheckedChange={(checked) =>
                    setTheme(checked ? "dark" : "light")
                  }
                />
                <MoonIcon className="h-4 w-4" />
                <Label htmlFor="dark-mode" className="sr-only">
                  Toggle dark mode
                </Label>
              </div>
            </div>
          </div>
        </div>
        <BuiltByTseku />
      </motion.footer>
    </div>
  );
};
