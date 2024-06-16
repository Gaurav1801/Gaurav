"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>ReactJS</li>
        <li>NextJS</li>
        <li>Tailwind</li>
        <li>bootstrap</li>
        <li>Typescript</li>
        <li>Javascript</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
    ),
  },{
    title: "Experience",
    id: "Experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Web developer intern from "Meshdroid Technologies"</li>
        <li>Frontend intern from "Wappzo Infotech Pvt. Ltd."</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>Schooling from Bhataashram Ashramshala Eng. Med. School</li>
        <li>Bechlore in Engineering (CSE) from G.T.U.</li>
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handelTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/image/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-whie mb-4">About Us</h2>
          <p className="text-base lg:text-lg">
          I am <b>Gaurav Tiwari</b> , a dedicated Frontend Developer. Currently, I am pursuing a Bachelor of Engineering in Computer Science at Gujarat Technological University. I enhancing user experience through various web development projects. Passionate about continuous learning and innovation, I am eager to bring my expertise to dynamic and impactful projects.
          </p>

          <div className="flex  flex-row justify-start mt-8">
            <div className="me-1 sm:me-4">
              <TabButton
                selectTab={() => handelTabChange("skills")}
                active={tab === "skills"}
              >
                
                Skills
              </TabButton>
            </div>
            <div className="me-1 sm:me-4">
            <TabButton
              selectTab={() => handelTabChange("Experience")}
              active={tab === "Experience"}
            >
             
              Experience
            </TabButton>
            </div>
            <div className="me-4">
            <TabButton
              selectTab={() => handelTabChange("Education")}
              active={tab === "Education"}
            >
             
               Education
            </TabButton>
            </div>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}
