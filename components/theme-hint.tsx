"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Kbd } from "@/components/ui/kbd";

export default function ThemeHint() {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 0.6, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        hidden fixed bottom-4 z-50 md:flex items-center gap-2 text-xs text-muted-foreground pointer-events-none
        left-1/2 -translate-x-1/2      /* mobile center */
        md:left-auto md:translate-x-0 md:right-6  /* desktop right */
      "
    >
      <span>Press</span>
      <Kbd>Shift</Kbd>
      <span>+</span>
      <Kbd>D</Kbd>
      <span>to switch theme</span>
    </motion.div>
  );
}