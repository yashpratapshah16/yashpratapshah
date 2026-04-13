import {  Geist_Mono, Public_Sans, Noto_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import Dock from "@/components/Dock";
import { Metadata } from "next";

const notoSansHeading = Noto_Sans({subsets:['latin'],variable:'--font-heading'});

const publicSans = Public_Sans({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Yashpratap Shah",
  description: "A website About MySelf,his Name is Yashpratap Shah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", publicSans.variable, notoSansHeading.variable)}
    >
      <body className="min-h-screen overflow-hidden">
        <ThemeProvider>{children}</ThemeProvider>
        <Dock />
      </body>
    </html>
  )
}
