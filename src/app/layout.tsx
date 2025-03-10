import type { Metadata } from "next";
import { rubik, gip } from "@/lib/fonts";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BuiltByTseku } from "@/components/BuiltBy";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Baigal",
  description: "Уламжлалт Монгол тан эм хэрэглэж өвчнөөс сэргийлье.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mn"
      className={`${gip.variable} ${rubik.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Navigation />
          {children}
          <Footer />
          <BuiltByTseku />
        </Providers>
      </body>
    </html>
  );
}
