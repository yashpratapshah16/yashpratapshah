"use client";

import {
    useScroll,
    motion,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import React from "react";
import { MdOutlineWorkHistory } from "react-icons/md";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const { scrollYProgress } = useScroll();

    return (
        <div className="w-full font-sans">

            {/* ✅ STICKY HEADER */}
            <div className="sticky top-0 z-50  backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto py-6 px-6 text-center">
                    <h2 className="flex items-center justify-center gap-2 text-4xl md:text-6xl font-bold">
                        <MdOutlineWorkHistory className="text-primary" />
                        <span className="bg-gradient-to-r from-primary to-foreground dark:to-white bg-clip-text text-transparent">
                            Experience
                        </span>
                    </h2>
                </div>
            </div>

            {/* ✅ SCROLL INDICATOR */}
            <motion.div
                initial={{ opacity: 1 }}
                style={{ opacity: scrollYProgress }}
                className="fixed bottom-6 md:bottom-25 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center pointer-events-none"
            >
                <span className="text-xs text-muted-foreground mb-1">
                    Scroll
                </span>
                <ChevronDown className="h-10 w-10 text-primary animate-bounce" />
            </motion.div>

            {/* ✅ BOTTOM FADE */}
            <div className="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-40" />

            {/* ✅ SECTIONS */}
            <div className="snap-y snap-mandatory">
                {data.map((item, index) => (
                    <section
                        key={index}
                        className="h-screen snap-start flex items-center pl-12"
                    >
                        <div className="max-w-5xl mx-auto w-full px-6 grid md:grid-cols-2 gap-10 items-center">

                            {/* LEFT */}
                            <div>
                                <h3 className="text-3xl md:text-5xl font-bold text-primary">
                                    {item.title}
                                </h3>
                            </div>

                            {/* RIGHT */}
                            <div className="text-lg text-muted-foreground">
                                {item.content}
                            </div>

                        </div>
                    </section>
                ))}

                {/* ✅ END SECTION */}
                <section className="h-screen snap-start flex items-center justify-center">
                    <div className="w-full flex items-center gap-4 px-6">

                        {/* LEFT LINE */}
                        <div className="flex-1 h-[1px] bg-border" />

                        {/* TEXT */}
                        <span className="text-lg text-muted-foreground tracking-widest uppercase opacity-70">
                            End of Timeline
                        </span>

                        {/* RIGHT LINE */}
                        <div className="flex-1 h-[1px] bg-border" />

                    </div>
                </section>
            </div>

        </div>
    );
};