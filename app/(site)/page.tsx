"use client"
import { FlipWords } from "@/components/UI/flip-words";
import { LinkPreview } from "@/components/UI/link-preview";
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { BiUser } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { FaCode, FaNodeJs, FaReact, FaTerminal } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IoTriangle } from "react-icons/io5";
import { SiCplusplus, SiFirebase, SiMongodb, SiNestjs, SiPostgresql, SiPython } from "react-icons/si";
import { VscPreview } from "react-icons/vsc";


export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

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

  return (
    <div className=" min-h-screen text-green-400 font-mono">

      <div className=" h-screen flex items-center justify-center">
        <div className="relative text-center  z-10 max-w-4xl px-4">
          <FaTerminal className="w-16 h-16 mx-auto mb-8 animate-pulse" />
          <h1 className="text-5xl md:text-7xl animate-glow tracking-tight mb-8 font-bold">
            <span>
              Yashpratap
            </span>{" "}
            <span className="text-white">
              Shah
            </span>
          </h1>
          <div className="text-xl md:text-2xl mb-8 opacity-90">
            <FlipWords words={["Full Stack Developer ", "Software Engineer"]} />
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
                  <div className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform bg-green-400/10" />
                </a>
              ))}
          </div>
        </div>
      </div>

      <section className="py-15">
        <div className="max-w-4xl mx-auto px-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <div className="flex items-center gap-2 mb-8">
            <BiUser className="w-6 h-6" />
            <h2 className="text-2xl font-bold text-gradient">About Me</h2>
          </div>
          <p className=" text-gray-400 leading-relaxed mb-12  animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            Aspiring IT professional with hands-on experience in backend, frontend development. Seeking opportunities to leverage skills in Python, C++/C# And React, Next.js to contribute to innovative projects in a fast-paced IT environment
          </p>
          <div className="mb-16">
            <div className="flex items-center gap-2 mx-auto mb-4  animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <FaCode className="w-6 h-6" />
              <h2 className="text-2xl font-bold text-gradient">Technical Skill</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
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
              ].map((item, index) => (
                <LinkPreview url={item.href} key={index} className=" flex items-center rounded-lg text-2xl justify-center w-full my-2 h-full  border gap-2 hover:border-green-500/60 border-green-500/30 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
                  <item.icon className="w-8 h-8 text-green-400" />
                  <h1 className="text-green-400">
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
              <h2 className="text-2xl font-bold text-gradient">Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {
                [
                  {
                    name: "Spotify-Clone",
                    url: "https://spotify-clone-flax-iota.vercel.app/",
                    code: "https://github.com/yashpratapshah16/spotify-clone",
                    src: "/images/spotify-clone.png",
                    description: "A Spotify like music app which is focus on login/sign-up and music player functionality."
                  },
                  {
                    name: "TextUtils",
                    url: "https://text-utils-theta-snowy.vercel.app/",
                    code: "https://github.com/yashpratapshah16/TextUtils",
                    src: "/images/textutils.png",
                    description: "A basic site which have a functionality of alerting texts."
                  },
                  {
                    name: "Keeper",
                    url: "https://keeper-app-topaz.vercel.app/",
                    code: "https://github.com/yashpratapshah16/Keeper-App",
                    src: "/images/keeper.png",
                    description: "An online note storing website"
                  },
                  {
                    name: "Techwizz 7.0 Round-1",
                    url: "https://technowizz-7-0-round-1.vercel.app",
                    code: "https://github.com/yashpratapshah16/technowizz-7.0-round-1",
                    src: "/images/technowizz7.png",
                    description: "A website which made for technowizz event of my college. A basic game site"
                  },
                ].map((item, index) => (
                  <Card key={index} sx={{ maxWidth: 400, height: 350 }} className="flex flex-col border border-green-500 hover:border-green-400 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ">
                    <CardMedia
                      sx={{ height: 300 }}
                      image={item.src}
                      title={item.name}
                    />
                    <CardContent className="bg-black text-green-400">
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant="body2">
                        {item.description}
                      </Typography>
                    </CardContent>
                    <CardActions className="bg-black text-green-400 flex items-center justify-center">
                      <a target="_blank" className="group flex justify-center items-center gap-2 hover:text-white" href={item.code}>
                        <FiGithub />
                        <span className="relative">
                          Code
                          <span className="absolute inset-x-0 bottom-0 h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        </span>
                      </a>
                      <a target="_blank" className="group flex justify-center items-center gap-2 hover:text-white" href={item.url}>
                        <VscPreview />
                        <span className="relative">
                          Preview
                          <span className="absolute inset-x-0 bottom-0 h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        </span>
                      </a>
                    </CardActions>
                  </Card>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <footer className="py-8 border-t border-green-500/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Yashpratp Shah. Built with Nextjs & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
