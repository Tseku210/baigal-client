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
      <body className="flex flex-col min-h-screen relative">
        <Providers>
          <Navigation />
          <div className="rounded-b-2xl md:rounded-b-4xl shadow-lg pb-20">
            {children}
          </div>
          <div className="relative bg-transparent">
            <Footer />
            <BuiltByTseku />
          </div>
        </Providers>
      </body>
    </html>
  );
}
