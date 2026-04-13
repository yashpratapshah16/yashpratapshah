"use client";

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import {
    SiNextdotjs,
    SiReact,
    SiNodedotjs,
    SiPostgresql,
    SiFirebase,
    SiNestjs,
    SiTypescript,
    SiTailwindcss,
    SiGit,
    SiPrisma,
    SiClerk,
} from "react-icons/si";

const skills = [
    {
        name: "React",
        icon: SiReact,
        url: "https://react.dev",
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
        url: "https://nextjs.org",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        url: "https://typescriptlang.org",
    },
    {
        name: "Tailwind",
        icon: SiTailwindcss,
        url: "https://tailwindcss.com",
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
        url: "https://nodejs.org",
    },
    {
        name: "Express",
        icon: SiNodedotjs,
        url: "https://expressjs.com/"
    },
    {
        icon: SiNestjs,
        url: "https://nestjs.com/",
        name: "NestJs"
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        url: "https://postgresql.org",
    },
    {
        name: "Firebase",
        icon: SiFirebase,
        url: "https://firebase.google.com",
    },
    {
        name:"Prisma",
        icon:SiPrisma,
        url:"https://prisma.io/"
    },
    {
        name:"Clerk",
        icon:SiClerk,
        url:"https://clerk.com/"
    },
    {
        name:"Git",
        icon:SiGit,
        url:"https://git-scm.com/"
    },
];

export default function TechPage() {
    return (
        <section className="min-h-screen px-6 py-10 md:py-20 flex flex-col items-center">

            {/* HEADER */}
            <div className="text-center max-w-2xl">
                <h1 className="text-4xl md:text-5xl flex items-center gap-2 font-bold bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
                    <FaCode className="text-primary"/>Technical Skills
                </h1>
                <p className="mt-4 text-muted-foreground">
                    Technologies I use regularly in production.
                </p>
            </div>

            {/* GRID */}
            <div className="mt-7 md:mt-16 w-full max-w-5xl grid grid-cols-2 md:grid-cols-3 gap-4">

                {skills.map((skill, i) => (
                    <motion.a
                        key={skill.name}
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="group relative flex items-center gap-3 px-5 py-4 rounded-xl border border-border bg-background hover:bg-primary/5 transition-all"
                    >
                        {/* ICON */}
                        <skill.icon className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />

                        {/* TEXT */}
                        <span className="text-sm md:text-base font-medium text-foreground">
                            {skill.name}
                        </span>

                        {/* HOVER GLOW */}
                        <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition" />

                        {/* RIGHT ARROW (micro UX) */}
                        <span className="ml-auto text-xs text-muted-foreground group-hover:text-primary">
                            ↗
                        </span>
                    </motion.a>
                ))}

            </div>

        </section>
    );
}