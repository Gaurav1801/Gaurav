'use client'
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
// import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
  
  },[]);
  return (
    <main className="flex min-h-screen  flex-col bg-[#121212]">
      <Navbar/>
      <div className="container  mx-auto py-4 px-12">
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <EmailSection/>
      </div>
      <Footer/>
    </main>
  );
}
