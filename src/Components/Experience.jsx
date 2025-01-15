import React, { useState, useEffect, useRef } from "react";
import { Tag } from "primereact/tag";

const Experience = () => {
  const [selectedOrg, setSelectedOrg] = useState("Stevens");
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isInView, setIsInView] = useState(true); // Track if the component is in view
  const experienceRef = useRef(null);

  const experiences = {
    Stevens: {
      organisation: "Stevens Institute of Technology",
      roles: [
        {
          title: "Graduate Assistant",
          period: "Oct 2024 - Present",
          description: `
            - Assisted professors with managing equipment for classes and labs.
            - Contributed to side projects focused on course analysis and improvement.
            - Provided support in administrative and technical tasks.`,
          techStack: [
            "Course Analysis",
            "Equipment Management",
            "Administrative Tasks",
          ],
        },
        {
          title: "Course Assistant for Web Programming",
          period: "Sep 2024 - Dec 2024",
          description: `
            - Helped students with assignments and projects related to web programming.
            - Provided detailed explanations of course material and debugging techniques.
            - Assisted in creating examples to aid in student understanding.`,
          techStack: ["Web Programming", "Debugging", "Student Support"],
        },
      ],
      imageSrc: "history/stevens.png",
    },
    Accenture: {
      organisation: "Accenture",
      roles: [
        {
          title: "Application Development Analyst",
          period: "Jan 2023 - Jul 2023",
          description: `
            - Developed a Snapchat filter using Lens Studio, integrating spatial mapping for AR showroom experiences.
            - Enhanced Aeromaverse VR project with a chatbot using character animations and Oculus voice SDK.
            - Participated fully from project inception to completion, ensuring seamless execution and delivery.`,
          techStack: [
            "Lens Studio",
            "Oculus Voice SDK",
            "Character Animations",
          ],
        },
      ],
      imageSrc: "history/accenture.png",
    },
    TCS: {
      organisation: "Tata Consultancy Services (TCS)",
      roles: [
        {
          title: "Assistant System Engineer",
          period: "Jan 2021 - Oct 2022",
          description: `
            - Designed 3D walkthroughs using Unity and C#, enhancing user engagement and understanding.
            - Created detailed 3D models with Blender, ensuring precise visual representation.
            - Developed AR applications with Unity, AR Foundation, and ARCore, improving efficiency by 50%.
            - Utilized VRTK and XR Interaction Toolkit for VR development, boosting final product quality by 40%.
            - Delivered immersive virtual experiences for high-profile clients like the Indian Navy and SAIPEM.`,
          techStack: [
            "Unity",
            "C#",
            "Blender",
            "AR Foundation",
            "ARCore",
            "VRTK",
          ],
        },
      ],
      imageSrc: "history/tcs.png",
    },
  };

  useEffect(() => {
    const keys = Object.keys(experiences);

    const interval = setInterval(() => {
      if (isInView) return; // Skip automatic selection if the component is in view
      setFade(true);
      setTimeout(() => {
        setSelectedOrg((prevOrg) => {
          const currentIndex = keys.indexOf(prevOrg);
          const nextOrgIndex = (currentIndex + 1) % keys.length;
          setSelectedRoleIndex(0); // Reset to the first role for the new organization
          return keys[nextOrgIndex];
        });
        setFade(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isInView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Update the `isInView` state
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  const handleOrgSwitch = (orgKey) => {
    if (orgKey !== selectedOrg) {
      setFade(true);
      setTimeout(() => {
        setSelectedOrg(orgKey);
        setSelectedRoleIndex(0); // Reset to the first role when switching organizations
        setFade(false);
      }, 300);
    }
  };

  const handleRoleSwitch = (index) => {
    setSelectedRoleIndex(index);
  };

  const currentOrg = experiences[selectedOrg];
  const currentRole = currentOrg.roles[selectedRoleIndex];

  return (
    <section
      ref={experienceRef}
      name="Experience"
      className="min-h-[500px] pt-16 pb-16 px-8 md:px-16 bg-white dark:bg-gray-800 transition-colors duration-300"
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
                onClick={() => handleOrgSwitch(key)}
                className={`text-left text-lg font-medium ${
                  selectedOrg === key
                    ? "text-red-500 border-l-4 border-red-500 pl-4"
                    : "text-gray-700 dark:text-gray-300 pl-6"
                }`}
              >
                {experiences[key].organisation}
              </button>
            ))}
          </div>

          {/* Content */}
          <div
            className={`md:w-2/3 mt-8 md:mt-0 md:ml-12 transition-all duration-300 transform ${
              fade ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Role Switcher */}
            {currentOrg.roles.length > 1 && (
              <div className="flex gap-2 mb-4">
                {currentOrg.roles.map((role, index) => (
                  <button
                    key={index}
                    onClick={() => handleRoleSwitch(index)}
                    className={`px-4 py-1 text-sm rounded ${
                      selectedRoleIndex === index
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {role.title}
                  </button>
                ))}
              </div>
            )}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {currentRole.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {currentRole.period}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line">
              {currentRole.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {currentRole.techStack.map((tech, index) => (
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
