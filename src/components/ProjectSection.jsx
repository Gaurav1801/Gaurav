"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: 1,
    title: "React protfolio website",
    description: "project 1 description",
    image: "/image/hero-image.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "TextUtil",
    description: "The different functional task operated on the given texts",
    image: "/image/textutil.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Gaurav1801/TextUtil",
    previewUrl: "https://gaurav1801.github.io/TextUtil",
  },
  {
    id: 3,
    title: "NewsAunty",
    description: "Personal daily news site",
    image: "/image/hero-image.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "StockIdeas",
    description: "Helping the trader with the support and resistence of particular stock price",
    image: "/image/hero-image.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Todo-List",
    description: "Simply add our Daily task and also we edit our task",
    image: "/image/todolist.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Gaurav1801/Todo-list",
    previewUrl: "https://gaurav1801.github.io/Todo-list/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All"); 

  const handelTagChange = (newTag) => {
    setTag(newTag);
  };

const filteredProjects=projectData.filter((project)=>project.tag.includes(tag))

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4  mb-8 md:mb-12">
        My Project
      </h2>
      <div className="text-white flex flex-row justify-center items-cente gap-2 py-6">
        <ProjectTag onClick={handelTagChange} name="All" isSelected={tag=="All"} />
        <ProjectTag onClick={handelTagChange} name="Web" isSelected={tag=="Web"} />
        <ProjectTag onClick={handelTagChange} name="Mobile" isSelected={tag=="Mobile"} />

                
      </div>
      <div className="grid md:grid-cols-3 text-white gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
