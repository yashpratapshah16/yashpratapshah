/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { delay: idx * 0.05 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full
                  bg-background border border-border backdrop-blur-md"
                >
                  <div className="flex h-4 w-4 text-foreground items-center justify-center">
                    {item.icon}
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="flex  h-10 w-10 items-center justify-center rounded-full
        bg-background border border-border backdrop-blur-md"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-foreground" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 px-4 pb-3 md:flex",
        "rounded-2xl bg-background/70 backdrop-blur-xl border border-border shadow-md",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer key={item.title} mouseX={mouseX} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: any;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = pathname === href;

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const size = useTransform(distance, [-150, 0, 150], [45, 75, 45]);
  const iconSize = useTransform(distance, [-150, 0, 150], [20, 32, 20]);

  const width = useSpring(size, { stiffness: 150, damping: 12 });
  const height = useSpring(size, { stiffness: 150, damping: 12 });

  const widthIcon = useSpring(iconSize, { stiffness: 150, damping: 12 });
  const heightIcon = useSpring(iconSize, { stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} className="group">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full border transition",
          "bg-muted border-border",
          isActive && "bg-primary/20 border-primary/40"
        )}
      >
        {/* Tooltip */}
        <AnimatePresence>
          {(hovered || isActive) && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 rounded-md border border-border bg-background px-2 py-0.5 text-xs text-foreground"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ACTIVE GLOW */}
        <div
          className={cn(
            "absolute inset-0 rounded-full bg-primary/20 blur-xl transition",
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          )}
        />

        {/* ICON */}
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className={cn(
            "flex items-center justify-center transition",
            isActive
              ? "text-primary"
              : "text-foreground group-hover:text-primary"
          )}
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}