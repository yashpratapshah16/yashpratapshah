"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { FaCode } from "react-icons/fa";
import { FiHome, FiUser,FiFolder, FiMail } from "react-icons/fi";
import { MdOutlineWorkHistory } from "react-icons/md";

export default function Dock() {
  const items = [
    { title: "Home", icon: <FiHome />, href: "/" },
    { title: "About", icon: <FiUser />, href: "/about" },
    { title: "Experience", icon: <MdOutlineWorkHistory />, href: "/experience" },
    { title: "Technical Skills", icon: <FaCode />, href: "/technical-skills" },
    { title: "Projects", icon: <FiFolder />, href: "/projects" },
  ];

  return (
    <>
      {/* Desktop Dock (center bottom) */}
      <div className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={items} />
      </div>

      {/* Mobile Dock (right side floating button) */}
      <div className="md:hidden fixed bottom-6 right-4 z-50">
        <FloatingDock items={items} />
      </div>
    </>
  );
}