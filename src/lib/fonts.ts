import { Rubik } from "next/font/google";
import localFont from "next/font/local";

export const rubik = Rubik({
  subsets: ["cyrillic"],
  variable: "--font-rubik",
});

export const gip = localFont({
  src: [
    {
      path: "../../public/fonts/Gilroy/GIP-Bold.otf",
      weight: "900",
    },
    {
      path: "../../public/fonts/Gilroy/GIP-BoldItalic.otf",
      style: "italic",
      weight: "900",
    },
    {
      path: "../../public/fonts/Gilroy/GIP-ExtraBold.otf",
      weight: "800",
    },
    {
      path: "../../public/fonts/Gilroy/GIP-ExtraBoldItalic.otf",
      style: "italic",
      weight: "800",
    },
    {
      path: "../../public/fonts/Gilroy/GIP-Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Gilroy/GIP-BoldItalic.otf",
      style: "italic",
      weight: "700",
    },
    {
      path: "../../public/fonts/Gilroy/GIP-SemiBold.otf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Gilroy/GIP-SemiBoldItalic.otf",
      style: "italic",
      weight: "600",
    },
    {
      path: "../../public/fonts/Gilroy/GIP-Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Gilroy/GIP-MediumItalic.otf",
      style: "italic",
      weight: "500",
    },
    {
      path: "../../public/fonts/Gilroy/GIP-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Gilroy/GIP-RegularItalic.otf",
      style: "italic",
      weight: "400",
    },
    {
      path: "../../public/fonts/Gilroy/GIP-Light.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Gilroy/GIP-LightItalic.otf",
      style: "italic",
      weight: "300",
    },
    {
      path: "../../public/fonts/Gilroy/GIP-Thin.otf",
      weight: "200",
    },
    {
      path: "../../public/fonts/Gilroy/GIP-ThinItalic.otf",
      style: "italic",
      weight: "200",
    },
    {
      path: "../../public/fonts/Gilroy/GIP-UltraLight.otf",
      weight: "100",
    },
    {
      path: "../../public/fonts/Gilroy/GIP-UltraLightItalic.otf",
      style: "italic",
      weight: "100",
    },
  ],
  variable: "--font-gip",
  display: "swap",
});
