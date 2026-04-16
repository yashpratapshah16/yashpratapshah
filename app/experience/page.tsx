"use client";

import { Timeline } from "@/components/timeline";
import { Calendar } from "lucide-react";

export default function ExperiencePage() {
  const data = [
    {
      title: "Project-Based Learning",
      content: (
        <>
          <p className="flex gap-x-2 items-center"><Calendar/>June 2022 - September 2025</p>
          <br/>
          <p>
            Built multiple full-stack applications focusing on scalability,
            real-time systems, and clean UI/UX. Continuously improving through
            hands-on projects.
          </p>
        </>
      ),
    },
    {
      title: "Webtactic",
      content: (
        <>
          <p className="flex gap-x-2 items-center"><Calendar/>September 2025 - Present</p>
          <br/>
          <p>
            Working as a full stack developer building scalable web applications
            and improving user experience across projects. Delivered production
            level applications including JKumar portfolio.
          </p>
        </>
      ),
    },
  ];

  return (
    <main className="h-screen overflow-y-scroll no-scrollbar snap-y snap-mandatory scroll-smooth">
      <Timeline data={data} />
    </main>
  );
}