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
import { forwardRef, memo, useState } from "react";
import Image from "next/image";
import { DarkModeToggle } from "../DarkModeToggle";
import { medNavigationData } from "@/constants/medicineNavigationData";
import { motion } from "motion/react";

function Navigation() {
  const [hoveredMedTypeImg, setHoveredMedTypeImg] = useState(
    medNavigationData[0].img,
  );

  return (
    <div className="flex items-center dark:border-b-2 sticky z-10 top-0 w-full bg-background/90 justify-center p-3 gap-5 shadow-xs backdrop-blur-lg">
      <Link href="/">
        <Image
          src="/logo/baigal-logo.png"
          alt="baigal logo"
          width={50}
          height={20}
        />
      </Link>
      <NavigationMenu>
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
        </NavigationMenuList>
      </NavigationMenu>
      <DarkModeToggle />
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
