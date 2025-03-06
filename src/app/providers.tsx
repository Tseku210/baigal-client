"use client";

import { ProgressProvider } from "@bprogress/next/app";
import { ThemeProvider } from "@/provider/ThemeProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      color="hsl(142.1 76.2% 36.3%)"
      options={{ showSpinner: true }}
      shallowRouting
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ProgressProvider>
  );
};

export default Providers;
