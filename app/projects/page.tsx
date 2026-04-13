/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import React from "react";
import { FiFolder } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

const projects = [
    {
        name: "CoDoc",
        url: "https://codoc-lake.vercel.app/",
        code: "https://github.com/yashpratapshah16/CoDoc-Live",
        src: "/images/codoc.png",
        techstacks: [
            "Reactjs",
            "Nextjs",
            "Tailwind",
            "Convex",
            "Tip-Tap",
            "Clerk",
            "Liveblocks",
        ],
        description:
            "A real-time collaborative document editing platform with live features.",
    },
    {
        name: "Spotify-Clone",
        url: "https://spotify-clone-flax-iota.vercel.app/",
        code: "https://github.com/yashpratapshah16/spotify-clone",
        src: "/images/spotify-clone.png",
        techstacks: ["Reactjs", "Nextjs", "Tailwind", "Typescript", "Supabase"],
        description:
            "A Spotify like music app which is focus on login/sign-up and music player functionality.",
    },
    {
        name: "TextUtils",
        url: "https://text-utils-theta-snowy.vercel.app/",
        code: "https://github.com/yashpratapshah16/TextUtils",
        src: "/images/textutils.png",
        techstacks: ["Reactjs", "Tailwind"],
        description:
            "A basic site which have a functionality of alerting texts.",
    },
    {
        name: "Keeper",
        url: "https://keeper-app-topaz.vercel.app/",
        code: "https://github.com/yashpratapshah16/Keeper-App",
        techstacks: ["Reactjs", "Tailwind", "Firebase"],
        src: "/images/keeper.png",
        description: "An online note storing website",
    },
    {
        name: "Technowizz 7.0 Round-1",
        url: "https://technowizz-7-0-round-1.vercel.app",
        code: "https://github.com/yashpratapshah16/technowizz-7.0-round-1",
        src: "/images/technowizz7.png",
        techstacks: ["Reactjs", "Tailwind", "Firebase"],
        description:
            "A website which made for technowizz event of my college. A basic game site",
    },
    {
        name: "Weather App",
        url: "https://weather-app-phi-five-98.vercel.app/",
        code: "https://github.com/yashpratapshah16/weather-app",
        src: "/images/weather-app.png",
        techstacks: ["Reactjs", "Nextjs", "Tailwind"],
        description:
            "A production-ready weather forecasting web application with real-time data.",
    },
    {
        name: "QuickTalk",
        code: "https://github.com/yashpratapshah16/quicktalk",
        src: "/images/quicktalk.png",
        techstacks: ["Reactjs", "Nextjs", "Tailwind", "Firebase", "Socket.io"],
        description:
            "A real-time chat application for seamless one-to-one communication.",
    },
    {
        name: "ProductiTrack",
        code: "https://github.com/yashpratapshah16/productitrack",
        src: "/images/productitrack.png",
        techstacks: ["React", "Vite"],
        description:
            "A Chrome Extension that tracks browsing activity and productivity.",
    },
];


export default function ProjectsPage() {
    const [index, setIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(1); // 1 = next, -1 = prev

    const next = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % projects.length);
    };

    const prev = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const project = projects[index];

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -100 : 100,
            opacity: 0,
        }),
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-6">
            <div className="w-full max-w-6xl">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl flex items-center justify-center gap-2 font-bold bg-linear-to-r from-primary to-foreground dark:to-white bg-clip-text text-transparent">
                        <FiFolder className="text-primary" />Projects
                    </h1>
                </div>

                {/* CAROUSEL */}
                <div className="relative overflow-hidden">

                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={project.name}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.35 }}
                            className="grid md:grid-cols-2 gap-10 items-center"
                        >

                            {/* IMAGE */}
                            <div className="rounded-xl overflow-hidden border border-border">
                                <img
                                    src={project.src}
                                    alt={project.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="flex flex-col gap-4">

                                <h2 className="text-2xl md:text-3xl font-bold">
                                    {project.name}
                                </h2>

                                <p className="text-muted-foreground text-sm md:text-base">
                                    {project.description}
                                </p>

                                {/* TECH */}
                                <div className="flex flex-wrap gap-2">
                                    {project.techstacks.map((tech) => (
                                        <Badge variant={"outline"}
                                            key={tech}
                                            className="text-xs  px-3 py-1 rounded-full border-black dark:border-border"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                {/* ACTIONS */}
                                <div className="flex gap-4 mt-4">

                                    {project.url && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm flex items-center gap-1"
                                        >
                                            <ExternalLink size={15} />

                                            Live
                                        </a>
                                    )}

                                    <a
                                        href={project.code}
                                        target="_blank"
                                        className=" px-4 py-2 bg-muted rounded-lg border border-border text-sm flex items-center gap-1"
                                    >
                                        <SiGithub size={15} />
                                        Code
                                    </a>

                                </div>

                            </div>
                        </motion.div>
                    </AnimatePresence>

                </div>

                {/* NAV */}
                <div className="flex justify-between mt-10">
                    <Button
                        onClick={prev}
                        className="px-4 cursor-pointer py-2 border border-border rounded-lg hover:bg-muted transition"
                    >
                        ← Prev
                    </Button>

                    <Button
                        onClick={next}
                        className="px-4 cursor-pointer py-2 border border-border rounded-lg hover:bg-muted transition"
                    >
                        Next →
                    </Button>
                </div>

                {/* DOTS */}
                <div className="flex justify-center gap-2 mt-6">
                    {projects.map((_, i) => (
                        <div
                            onClick={()=>setIndex(i)}
                            key={i}
                            className={`h-2 w-2 rounded-full cursor-pointer ${i === index ? "bg-primary" : " bg-white dark:bg-muted"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}