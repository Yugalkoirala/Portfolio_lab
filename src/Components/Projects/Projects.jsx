import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Todo App"
          main="This is a simple todo app built using React, where users can add, edit, and delete tasks."
          sourceCodeUrl="https://github.com/Yugalkoirala/Todo-app"
        />
        <ProjectCard
          title="Graphics Project"
          main="This project involves creating interactive graphics and visualizations using C++."
          sourceCodeUrl="https://github.com/Yugalkoirala/GraphicsProject"
        />
        <ProjectCard
          title="Sorting Techniques"
          main="This project demonstrates different sorting algorithms implemented in Data structure and algorithm."
          sourceCodeUrl="https://github.com/Yugalkoirala/DSA"
        />
      </div>
    </div>
  );
};

export default Projects;
