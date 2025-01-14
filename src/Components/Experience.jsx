import React, { useState, useEffect } from "react";
import { Tag } from "primereact/tag";

const Experience = () => {
  const [selected, setSelected] = useState("Stevens_GA");
  const [fade, setFade] = useState(false);

  const experiences = {
    Stevens_GA: {
      title: "Graduate Assistant",
      organisation: "Stevens Institute of Technology",
      period: "Fall 2024 - Present",
      description: `
        - Assisted professors with managing equipment for classes and labs.
        - Contributed to side projects focused on course analysis and improvement.
        - Provided support in administrative and technical tasks.`,
      techStack: [
        "Course Analysis",
        "Equipment Management",
        "Administrative Tasks",
      ],
      imageSrc: "history/stevens.png",
    },
    Stevens_CA: {
      title: "Course Assistant for Web Programming",
      organisation: "Stevens Institute of Technology",
      period: "Fall 2024",
      description: `
        - Helped students with assignments and projects related to web programming.
        - Provided detailed explanations of course material and debugging techniques.
        - Assisted in creating examples to aid in student understanding.`,
      techStack: ["Web Programming", "Debugging", "Student Support"],
      imageSrc: "history/stevens.png",
    },
    Accenture: {
      title: "Application Development Analyst",
      organisation: "Accenture",
      period: "Jan 2023 - Jul 2023",
      description: `
        - Developed a Snapchat filter using Lens Studio, integrating spatial mapping for AR showroom experiences.
        - Enhanced Aeromaverse VR project with a chatbot using character animations and Oculus voice SDK.
        - Participated fully from project inception to completion, ensuring seamless execution and delivery.`,
      techStack: ["Lens Studio", "Oculus Voice SDK", "Character Animations"],
      imageSrc: "history/accenture.png",
    },
    TCS: {
      title: "Assistant System Engineer",
      organisation: "Tata Consultancy Services (TCS)",
      period: "Jan 2021 - Oct 2022",
      description: `
        - Designed 3D walkthroughs using Unity and C#, enhancing user engagement and understanding.
        - Created detailed 3D models with Blender, ensuring precise visual representation.
        - Developed AR applications with Unity, AR Foundation, and ARCore, improving efficiency by 50%.
        - Utilized VRTK and XR Interaction Toolkit for VR development, boosting final product quality by 40%.
        - Delivered immersive virtual experiences for high-profile clients like the Indian Navy and SAIPEM.`,
      techStack: ["Unity", "C#", "Blender", "AR Foundation", "ARCore", "VRTK"],
      imageSrc: "history/tcs.png",
    },
  };

  useEffect(() => {
    const keys = Object.keys(experiences);
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setSelected((prev) => {
          const currentIndex = keys.indexOf(prev);
          const nextIndex = (currentIndex + 1) % keys.length;
          return keys[nextIndex];
        });
        setFade(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [selected]);

  const handleSwitch = (key) => {
    if (key !== selected) {
      setFade(true);
      setTimeout(() => {
        setSelected(key);
        setFade(false);
      }, 300);
    }
  };

  return (
    <section
      name="Experience"
      className="max-h-full pt-16 pb-16 px-8 md:px-16 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
          EXPERIENCE
        </h2>
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-1/3 flex flex-col space-y-4">
            {Object.keys(experiences).map((key) => (
              <button
                key={key}
                onClick={() => handleSwitch(key)}
                className={`text-left text-lg font-medium ${
                  selected === key
                    ? "text-red-500 border-l-4 border-red-500 pl-4"
                    : "text-gray-700 dark:text-gray-300 pl-6"
                }`}
              >
                {key.split("_")[0]}
              </button>
            ))}
          </div>

          {/* Content */}
          <div
            className={`md:w-2/3 mt-8 md:mt-0 md:ml-12 transition-all duration-300 transform ${
              fade ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {experiences[selected].title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {experiences[selected].period}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line">
              {experiences[selected].description}
            </p>
            {/* <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 hover:cursor-pointer ">
              {experiences[selected].techStack.map((tech, index) => (
                <li key={index} className="text-sm">
                  {tech}
                </li>
              ))}
            </ul> */}
            <div className="flex flex-wrap gap-2">
              {experiences[selected].techStack.map((tech, index) => (
                <Tag
                  key={index}
                  value={tech}
                  className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
