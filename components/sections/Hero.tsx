"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CiMail } from "react-icons/ci";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden">

      {/* TEXT LAYER */}
      <div className="relative z-10 text-center px-6">

        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(3rem,8vw,7rem)] font-bold leading-tight 
          bg-gradient-to-r from-primary to-black dark:to-primary-foreground 
          bg-clip-text text-transparent "
        >
          Yashpratap Shah
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg md:text-xl font-bold dark:text-muted-foreground"
        >
          Full Stack Web Developer
        </motion.p>
        {/* SOCIAL ICONS */}
        <div className="mt-6 flex justify-center gap-6">
          {[
            { icon: FiGithub, href: "https://github.com/yashpratapshah16" },
            {
              icon: FiLinkedin,
              href: "https://www.linkedin.com/in/yashpratap-shah-145953255/",
            },
            { icon: CiMail, href: "mailto:yashpratapshah@gmail.com" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              className="group relative p-3 rounded-xl transition-all"
            >
              <item.icon className="relative z-10 h-6 w-6 text-foreground group-hover:text-white" />

              {/* GLOW */}
              <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />

              {/* BACKGROUND */}
              <div
                className={cn(
                  "absolute inset-0 rounded-xl scale-0 transition-transform group-hover:scale-100",
                  "bg-primary"
                )}
              />
            </a>
          ))}
        </div>
      </div>

      {/* IMAGE LAYER */}
      <motion.img
        src="/me.png"
        alt="Yashpratap"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.4, scale: 1, y: [0, -12, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.3 },
          scale: { duration: 0.6, delay: 0.3 },
          y: {
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          },
        }}
        className="absolute grayscale dark:grayscale-0 translate-y-[-80%] md:translate-y-[-2%] z-0 w-70 md:w-[50vw] pointer-events-none select-none"
      />

      

    </section>
  );
}