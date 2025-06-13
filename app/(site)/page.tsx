"use client"
import { FlipWords } from "@/components/UI/flip-words";
import { LinkPreview } from "@/components/UI/link-preview";
import { Timeline } from "@/components/UI/timeline";
import { cn } from "@/lib/utils";
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BiUser } from "react-icons/bi";
import { CgCalendar, CgWebsite } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { FaChrome, FaCode, FaMoon, FaNodeJs, FaReact, FaSun, FaTerminal } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IoTriangle } from "react-icons/io5";
import { SiClerk, SiCplusplus, SiFirebase, SiMongodb, SiNestjs, SiPostgresql, SiPrisma, SiPython, } from "react-icons/si";
import { VscPreview } from "react-icons/vsc";


export default function Home() {

  const observerRef = useRef<IntersectionObserver | null>(null);

  const [dark, setDark] = useState(true);
  const textDark = "text-green-500"
  const textLight = "text-neutral-800"

  useEffect(() => {
    window.scrollTo(0, 0);
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const data = [
    {
      title: "Project-Based Learning",
      content: (
        <div className={
          cn(
            "flex flex-col item-center gap-3 ",
            dark ? "text-gray-400" : textLight
          )
        }>
          <p className="flex items-center"><CgCalendar size={20} />Date:07/2022 - present</p>
          <p>
            Self-driven projects aimed at personal skill enhancement
          </p>
          <p>
            Developed various real-world projects to enhance full-stack development skills
          </p>
          <p>
            Focused on continuous learning in emerging technologies
          </p>
          <p>
            Collaborated with peers to share knowledge and foster innovation
          </p>
          <p>
            Maintained documentation and analysis of project outcomes
          </p>
        </div>
      )
    },
    {
      title: "CODTECH",
      content: (
        <div className={
          cn(
            "flex flex-col item-center gap-3 ",
            dark ? "text-gray-400" : textLight
          )
        }>
          <p className="flex items-center"><CgCalendar size={20} />Date:04/2025 - 05/2025</p>
          <p>Remote internship for 1 month</p>
          <p>Given Four Tasks to complete</p>
          <p>Built various Full stack websites independently</p>
          <p>Learned various features over the past month</p>
          <p>All projects are on my GitHub with documentation</p>
          <p>Certificate:</p>
          <Image
            alt="certificate"
            src="/images/codtech.png"
            height={500}
            width={400}
          />
        </div>
      )
    }
  ]


  return (
    <div className={
      cn(
        "relative min-h-screen  font-mono transition-colors",
        dark ? "bg-black " + textDark : "bg-neutral-100 " + textLight
      )
    }>
      <div className=" h-screen flex items-center justify-center">
        <div className="relative text-center  z-10 max-w-4xl px-4">
          <FaTerminal className="w-16 h-16 mx-auto mb-8 animate-pulse" />
          <h1 className={cn(
            "text-5xl md:text-7xl  tracking-tight mb-8 font-bold gap-5 flex items-center justify-center",
            dark ? "animate-glowDark" : "animate-glowLight"
          )}>
            <span>
              Yashpratap
            </span>
            <span className={cn(
              dark ? "text-white" : textDark
            )}>
              Shah
            </span>
          </h1>
          <div className="text-xl md:text-2xl mb-8 opacity-90">
            <FlipWords className={cn(
              dark ? "text-white" : "text-neutral-800"
            )} words={["Full Stack Developer ", "Software Engineer"]} />
          </div>
          <div className="flex justify-center gap-6">
            {
              [
                { icon: FiGithub, href: "https://github.com/yashpratapshah16" },
                { icon: FiLinkedin, href: "https://www.linkedin.com/in/yashpratap-shah-145953255/" },
                { icon: CiMail, href: "mailto:yashpratapshah@gmail.com" },
              ].map((item, index) => (
                <a
                  target="_blank"
                  href={item.href}
                  key={index}
                  className="group relative p-2 hover:text-white transition-colors"
                >
                  <item.icon className="w-6 h-6 relative z-10" />
                  <div className={
                    cn(
                      "absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform",
                      dark ? "bg-green-400/10" : "bg-neutral-800"
                    )
                  } />
                </a>
              ))}
          </div>
        </div>
      </div>

      <section className="py-15">
        <div className="max-w-4xl mx-auto px-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <div className="flex items-center gap-2 mb-8">
            <BiUser className="w-6 h-6" />
            <h2 className={
              cn(
                "text-2xl font-bold ",
                dark ? "text-gradientDark" : "text-gradientLight"
              )
            }>About Me</h2>
          </div>
          <p className={
            cn(
              "mb-12",
              dark ? "text-gray-400" : textLight
            )
          }>
            Aspiring IT professional with a focus on full-stack development and
            project-based learning, possessing strong expertise in JavaScript and
            Python. Key achievements include developing various real-world
            projects independently and ranking in the top of my class with a CGPA
            of 9.3/10. Seeking a Full Stack Developer position at your company,
            where my full-stack development and continuous learning abilities can
            support your mission of innovation and technological advancement.
            Experience includes a one-month remote internship at CODTECH,

            where full-stack websites were successfully built, and multiple self-
            driven projects were developed and documented on GitHub.          </p>
          <Timeline dark={dark} data={data} />
          <div className="mb-16">
            <div className="flex items-center gap-2 mx-auto mb-4  animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <FaCode className="w-6 h-6" />
              <h2 className={
                cn(
                  "text-2xl font-bold ",
                  dark ? "text-gradientDark" : "text-gradientLight"
                )
              }>Technical Skill</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              {[
                { icon: FaReact, href: "https://react.dev/", name: "ReactJs" },
                { icon: IoTriangle, href: "https://nextjs.org/", name: "NextJs" },
                { icon: FaNodeJs, href: "https://nodejs.org/en", name: "NodeJs" },
                { icon: SiNestjs, href: "https://nestjs.com/", name: "NestJs" },
                { icon: SiMongodb, href: "https://www.mongodb.com/", name: "MongoDB" },
                { icon: SiPostgresql, href: "https://www.mongodb.com/", name: "PostgreSQL" },
                { icon: SiFirebase, href: "https://firebase.google.com/", name: "Firebase" },
                { icon: SiPython, href: "https://www.python.org/", name: "Python" },
                { icon: SiCplusplus, href: "https://cplusplus.com/", name: "C++" },
                { icon: SiClerk, href: "https://clerk.com/", name: "Clerk" },
                { icon: SiPrisma, href: "https://www.prisma.io/", name: "Prisma" },
                { icon: FaChrome, href: "https://www.convex.dev/", name: "Convex" }
              ].map((item, index) => (
                <LinkPreview url={item.href} key={index} className={
                  cn(
                    " flex items-center rounded-lg text-2xl justify-center w-full my-2 h-full  border gap-2",
                    dark ? "hover:border-green-500/60 border-green-500/30" : "hover:border-neutral-800/60 border-neutral-800/30"
                  )
                }>
                  <item.icon className={
                    cn(
                      "w-8 h-8",
                      dark ? textDark : textLight
                    )
                  } />
                  <h1 className={
                    cn(
                      dark ? textDark : textLight
                    )
                  }>
                    {item.name}
                  </h1>
                </LinkPreview>
              ))
              }
            </div>
          </div>
          <div className=" mb-16">
            <div className="flex items-center gap-2 mx-auto mb-4  animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <CgWebsite className="w-6 h-6" />
              <h2 className={
                cn(
                  "text-2xl font-bold ",
                  dark ? "text-gradientDark" : "text-gradientLight"
                )
              }>Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ">
              {
                [
                  {
                    name: "Spotify-Clone",
                    url: "https://spotify-clone-flax-iota.vercel.app/",
                    code: "https://github.com/yashpratapshah16/spotify-clone",
                    src: "/images/spotify-clone.png",
                    techstacks: ["Reactjs", "Nextjs", "Tailwind", "Typescript", "Supabase"],
                    description: "A Spotify like music app which is focus on login/sign-up and music player functionality."
                  },
                  {
                    name: "TextUtils",
                    url: "https://text-utils-theta-snowy.vercel.app/",
                    code: "https://github.com/yashpratapshah16/TextUtils",
                    src: "/images/textutils.png",
                    techstacks: ["Reactjs", "Tailwind"],
                    description: "A basic site which have a functionality of alerting texts."
                  },
                  {
                    name: "Keeper",
                    url: "https://keeper-app-topaz.vercel.app/",
                    code: "https://github.com/yashpratapshah16/Keeper-App",
                    techstacks: ["Reactjs", "Tailwind", "Firebase"],
                    src: "/images/keeper.png",
                    description: "An online note storing website"
                  },
                  {
                    name: "Technowizz 7.0 Round-1",
                    url: "https://technowizz-7-0-round-1.vercel.app",
                    code: "https://github.com/yashpratapshah16/technowizz-7.0-round-1",
                    src: "/images/technowizz7.png",
                    techstacks: ["Reactjs", "Tailwind", "Firebase"],
                    description: "A website which made for technowizz event of my college. A basic game site"
                  },
                  {
                    name: "Weather App",
                    url: "https://weather-app-phi-five-98.vercel.app/",
                    code: "https://github.com/yashpratapshah16/weather-app",
                    src: "/images/weather-app.png",
                    techstacks: ["Reactjs", "Nextjs", "Tailwind"],
                    description: "A production-ready weather forecasting web application built with modern frontend technologies.It fetches real-time weather data from the OpenWeatherMap API and displays it in a clean, responsive UI."
                  },
                  {
                    name: "QuickTalk",
                    url: "https://quicktalk-blue.vercel.app/",
                    code: "https://github.com/yashpratapshah16/quicktalk",
                    src: "/images/quicktalk.png",
                    techstacks: ["Reactjs", "Nextjs", "Tailwind", "Firebase", "Socket.io"],
                    description: "A real-time chat application built with modern full-stack technologies for seamless one-to-one communication. Designed with performance, responsiveness, and scalability in mind, QuickTalk offers a lightweight, intuitive, and real-time messaging experience."
                  },
                  {
                    name: "CoDoc",
                    url: "https://codoc-lake.vercel.app/",
                    code: "https://github.com/yashpratapshah16/CoDoc-Live",
                    src: "/images/codoc.png",
                    techstacks: ["Reactjs", "Nextjs", "Tailwind", "Convex", "Tip-Tap", "Clerk", "Liveblocks"],
                    description: "CoDoc is a real-time collaborative document editing platform built with a modern full-stack architecture. It enables users to create, edit, and collaborate on rich-text documents simultaneously, with support for live cursors, threads, comments, and team-based permissions."
                  },
                  {
                    name: "ProductiTrack",
                    code: "https://github.com/yashpratapshah16/productitrack",
                    src: "/images/productitrack.png",
                    techstacks: ["React", "Vite"],
                    description: "ProductiTrack is a lightweight and efficient Chrome Extension that monitors user activity and tracks the amount of time spent on various websites. Designed with a focus on productivity, the extension helps users understand their browsing habits and distinguish between productive and non-productive usage."
                  },
                ].map((item, index) => (
                  <Card key={index} className={
                    cn(
                      " h-fit flex flex-col border",
                      dark ? "border-green-500 hover:border-green-400" : "border-neutral-800 hover:border-neutral-500"
                    )
                  }>
                    <CardMedia
                      sx={{ height: 200 }}
                      image={item.src}
                      title={item.name}
                    />
                    <CardContent className={
                      cn(
                        dark ? "bg-black " + textDark : "bg-neutral-100 " + textLight
                      )
                    }>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant="body2">
                        {item.description}
                      </Typography>
                      <div className="mt-2">
                        <h2 className="mb-2 text-lg">TechStack</h2>
                        <div className="flex flex-wrap gap-2">
                          {
                            item.techstacks.map((item, index) => (
                              <span key={index} className={
                                cn(
                                  "h-5 w-fit border rounded-full px-2 flex items-center",
                                  dark ? "border-green-500" : "border-neutral-800"
                                )
                              }>{item}</span>
                            ))
                          }
                        </div>
                      </div>
                    </CardContent>
                    <CardActions className={
                      cn(
                        "flex items-center justify-center",
                        dark ? "bg-black " + textDark : "bg-neutral-100 " + textLight
                      )
                    }>
                      <a target="_blank" className={
                        cn(
                          "group flex justify-center items-center gap-2 ",
                          dark ? "hover:text-white" : "hover:text-neutral-500"
                        )
                      } href={item.code}>
                        <FiGithub />
                        <span className="relative">
                          Code
                          <span className="absolute inset-x-0 bottom-0 h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        </span>
                      </a>
                      {
                        item.url &&
                        <a target="_blank" className={
                          cn(
                            "group flex justify-center items-center gap-2 ",
                            dark ? "hover:text-white" : "hover:text-neutral-500"
                          )
                        } href={item.url}>
                          <VscPreview />
                          <span className="relative">
                            Preview
                            <span className="absolute inset-x-0 bottom-0 h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                          </span>
                        </a>
                      }
                    </CardActions>
                  </Card>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <footer className={
        cn(
          "py-8 border-t ",
          dark?"border-green-500/20":"border-neutral-800/20"
        )
      }>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className={
            cn(
              dark?"text-gray-400":"text-neutral-800"
            )
          }>
            © {new Date().getFullYear()} Yashpratp Shah. Built with Nextjs & Tailwind CSS.
          </p>
        </div>
      </footer>
      <div onClick={() => setDark((val) => !val)}
        className={
          cn(
            "fixed hover:cursor-pointer h-12 w-12 rounded-full  transition-all flex items-center justify-center  bottom-6 right-6",
            dark ? "bg-neutral-800 hover:bg-neutral-900" : " bg-neutral-400 hover:bg-neutral-500"
          )
        }
      >
        {
          dark ?
            <FaMoon className="text-green-500" size={20} />
            :
            <FaSun className="text-neutral-800" size={20} />
        }
      </div>
    </div>
  );
}
