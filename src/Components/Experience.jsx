import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Stevens Institute of Technology",
    roles: [
      {
        title: "Graduate Assistant",
        period: "Oct 2024 - Present",
        description: [
          "Assisted professors with managing equipment for classes and labs",
          "Contributed to side projects focused on course analysis and improvement",
          "Provided support in administrative and technical tasks",
        ],
        techStack: ["Course Analysis", "Equipment Management", "Admin Tasks"],
      },
      {
        title: "Course Assistant for Web Programming",
        period: "Sep 2024 - Dec 2024",
        description: [
          "Conducted 60+ office hours to assist students to understand web programming node.js concepts.",
          "Provided detailed explanations of course material and debugging techniques",
        ],
        techStack: ["Web Programming", "Debugging", "Student Support"],
      },
    ],
    logo: `${import.meta.env.BASE_URL}/stevens.jpg`,
  },
  {
    company: "Accenture",
    roles: [
      {
        title: "Application Development Analyst",
        period: "Jan 2023 - Jul 2023",
        description: [
          "Developed a Snapchat filter using Lens Studio, integrating spatial mapping for AR showroom experiences",
          "Enhanced Aeromaverse VR project with a chatbot using character animations and Oculus voice SDK",
          "Participated fully from project inception to completion, ensuring seamless execution and delivery",
        ],
        techStack: ["Lens Studio", "Oculus Voice SDK", "Character Animations"],
      },
    ],
    logo: `${import.meta.env.BASE_URL}/Accenture.png`,
  },
  {
    company: "Tata Consultancy Services (TCS)",
    roles: [
      {
        title: "Assistant System Engineer",
        period: "Jan 2021 - Oct 2022",
        description: [
          "Designed 3D walkthroughs using Unity and C#, enhancing user engagement",
          "Created detailed 3D models with Blender, ensuring precise visual representation",
          "Developed AR applications with Unity, AR Foundation, and ARCore, improving efficiency by 50%",
          "Delivered immersive virtual experiences for high-profile clients like the Indian Navy and SAIPEM",
        ],
        techStack: ["Unity", "C#", "Blender", "AR Foundation", "ARCore"],
      },
    ],
    logo: `${import.meta.env.BASE_URL}/TCS.png`,
  },
];

const Experience = () => {
  return (
    <section
      id="Experience"
      className="py-20 bg-gray-50 dark:bg-gray-700 dark:text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
          EXPERIENCE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative group w-full h-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {exp.company}
                </h3>
              </div>
              {exp.roles.map((role, i) => (
                <div key={i} className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {role.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {role.period}
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 mt-2 list-disc pl-4">
                    {role.description.map((desc, j) => (
                      <li key={j}>{desc}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {role.techStack.map((tech, k) => (
                      <span
                        key={k}
                        className="px-3 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
