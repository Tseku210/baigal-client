import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function useUnderDevelopment() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.pointerEvents = "none";
    document.body.style.overflow = "hidden";
    document.body.style.userSelect = "none";

    return () => {
      document.body.style.pointerEvents = "";
      document.body.style.overflow = "";
      document.body.style.userSelect = "";
    };
  }, []);

  const overlay = createPortal(
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center text-white text-xl md:text-2xl font-bold z-50">
      🚧 Under Development 🚧
    </div>,
    document.body,
  );

  return {
    ref,
    overlay,
  };
}
