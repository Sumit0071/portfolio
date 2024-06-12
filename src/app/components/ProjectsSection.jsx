"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Movix",
        description: "A movie streaming platform using React,vite,sass and Movidb Api",
        image: "/assets/movix.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Sumit0071/Movix/tree/main",
        previewUrl: "https://movix-jnz8.vercel.app/",
    },
    {
        id: 2,
        title: "Nike store clone ",
        description: "made with react,tailwindcss",
        image: "/assets/nike.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Sumit0071/Nike-Web-app",
        previewUrl: "https://nike-web-app.vercel.app/",
    },
    {
        id: 3,
        title: "Full stack E-commerce Application",
        description: "Project 3 description",
        // image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "MindCare Pro",
        description: "Made this project initially for SIH23 that landed us in grand finals",
        image: "/assets/mindcarelogin.jpg",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/Sumit0071/MindCare-Pro/tree/main",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "LessMeet",
        description: "web application analogous to Google Meet,build with NextJS,CSS,JavaScript",
        // image: "/images/projects/5.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Coming Soon",
        description: "Coming Soon",
        // image: "/images/projects/6.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Sumit0071/Lessmeet",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState( "All" );
    const ref = useRef( null );
    const isInView = useInView( ref, { once: true } );

    const handleTagChange = ( newTag ) => {
        setTag( newTag );
    };

    const filteredProjects = projectsData.filter( ( project ) =>
        project.tag.includes( tag )
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map( ( project, index ) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <div>
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl === "/" ? null : project.gitUrl}
                                previewUrl={project.previewUrl === "/" ? null : project.previewUrl}
                            />
                            {( project.gitUrl === "/" || project.previewUrl === "/" ) && (
                                <p className="text-red-500 text-sm">
                                    Oopsie! {project.gitUrl === "/" ? "GitHub repo" : "Live link"} not available.
                                </p>
                            )}
                        </div>
                    </motion.li>
                ) )}
            </ul>
        </section>
    );
};

export default ProjectsSection;
