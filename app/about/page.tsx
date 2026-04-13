"use client";

import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";

export default function AboutPage() {
    return (
        <section className="min-h-screen px-6 py-20 flex flex-col items-center justify-center">

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-3xl "
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                        text-5xl md:text-7xl font-bold
                        bg-gradient-to-r from-primary to-foreground dark:to-white
                        bg-clip-text text-transparent flex items-center justify-center gap-4
                        "
                >
                   <FiUser className="text-primary"/>
                    About Me
                </motion.h1>

                <p className="mt-4 text-muted-foreground text-xl md:text-2xl">
                    I build scalable web applications with clean UI and strong performance focus.
                </p>
            </motion.div>

            {/* ABOUT TEXT */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-10 max-w-2xl text-center text-muted-foreground"
            >
                <p className="text-lg md:text-xl">
                    I’m a full stack developer focused on building real-world applications
                    using modern technologies like Next.js, Node.js, and databases like MongoDB
                    and PostgreSQL. I enjoy solving complex problems and continuously improving
                    my development skills through hands-on projects.
                </p>
            </motion.div>
        </section>
    );
}