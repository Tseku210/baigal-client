"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { forwardRef, memo, useEffect, useState } from "react";
import Image from "next/image";
import { DarkModeToggle } from "../DarkModeToggle";
import { medNavigationData } from "@/constants/medicineNavigationData";
import { AnimatePresence, motion } from "motion/react";
import { MenuIcon, XIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";

// TODO: implement async search bar https://async.rdsx.dev/

function Navigation() {
  const [hoveredMedTypeImg, setHoveredMedTypeImg] = useState(
    medNavigationData[0].img,
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className="flex items-center dark:border-b-2 sticky z-10 top-0 w-full bg-background/90 justify-between md:justify-center p-3 gap-5 shadow-xs backdrop-blur-lg">
      <Link href="/">
        <Image
          src="/logo/baigal-logo.png"
          alt="baigal logo"
          width={50}
          height={20}
        />
      </Link>
      {/* desktop navigation */}
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Тан</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <div className="relative row-span-3 w-full hidden md:block">
                  <motion.div
                    key={hoveredMedTypeImg}
                    initial={{ opacity: 0, translateY: 10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: 10 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={hoveredMedTypeImg}
                      className="object-cover rounded-md"
                      fill
                      alt="Hovered Medicine Image"
                    />
                  </motion.div>
                </div>
                {medNavigationData.map((med, i) => (
                  <ListItem
                    key={i}
                    href={med.routeTo}
                    title={med.title}
                    onMouseEnter={() => setHoveredMedTypeImg(med.img)}
                  >
                    {med.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/address" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Хаяг байршил
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Холбоо барих
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <DarkModeToggle />
        </NavigationMenuList>
      </NavigationMenu>
      {/* mobile menu */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="outline" className="bg-transparent">
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <XIcon size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MenuIcon size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="w-full h-16 relative">
              <Link href="/">
                <Image src="/logo/baigal-logo.svg" alt="logo" fill />
              </Link>
            </SheetTitle>
            <div className="space-y-5 w-full text-left">
              <div>
                <p className="text-xs font-medium text-foreground/70">Тан</p>
                <Separator />
                <div className="flex flex-col gap-1 mt-3">
                  <Link href="/products">Бүх тан</Link>
                  <Link href="/products?type=tan">Нунтаг тан</Link>
                  <Link href="/products?type=urel">Үрлэн тан</Link>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium text-foreground/70">Бусад</p>
                <Separator />

                <div className="flex flex-col gap-1 mt-3">
                  <Link href="/address">Хаяг байршил</Link>
                  <Link href="/contact">Холбоо барих</Link>
                </div>
              </div>
            </div>
          </SheetHeader>
          <SheetFooter className="flex justify-center items-center mt-5">
            <DarkModeToggle />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default memo(Navigation);
