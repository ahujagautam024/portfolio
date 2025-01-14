import React from "react";

const Projects = () => {
  const projectsData = [
    {
      title: "Research Collabarotion Platform",
      imageSrc: "projects/twitter_sentiment.png",
      description:
        "Designed to facilitate meaningful connections between professors and students at Stevens Institute of Technology, enabling them to collaborate on research projects. Professors can post research needs, while students can browse and apply for relevant projects. The platform features a LinkedIn-style news feed, a directory for filtering profiles by department, and chat functionality to support real-time collaboration. Built with a modern tech stack including React, TypeScript, Node.js, Express.js, MongoDB, WebSockets, and Redis, the platform provides user authentication, project management, and messaging with future plans for advanced features.",
      skills: [
        "Node.js",
        "JavaScript",
        "React",
        "Graphql",
        "Socket.io",
        "Appollo server",
        "Apollo client",
        "Redis",
        "Docker",
      ],
      demo: "https://www.example.com",
      source:
        "https://github.com/CS-554-Team-Cool-Kids/Research-collaboration-platform.git",
    },
    {
      title: "Job Tracker Application",
      imageSrc: "projects/job_tracker.png",
      description:
        "Developed a Job Tracker Application with straightforward functionalities aiding candidates in efficiently managing their applications. Implemented insightful statistics alongside a cohesive team effort.",
      skills: ["Node.js", "HTML", "CSS", "JavaScript", "Handlebars", "Leaflet"],
      demo: "https://www.example.com",
      source: "https://www.github.com/ahujagautam024/job-tracker",
    },
    {
      title: "OpenAI Desktop Assistant",
      imageSrc: "projects/openai_assistant.png",
      description:
        "Implemented a desktop OpenAI assistant to enhance user experiences through advanced speech recognition technology and seamless interactions using the OpenAI API.",
      skills: ["Python", "OpenAI", "Speech Recognition"],
      demo: "https://www.example.com",
      source: "https://www.github.com/ahujagautam024/openai-assistant",
    },
    {
      title: "Sentiment Analysis for Twitter Data",
      imageSrc: "projects/twitter_sentiment.png",
      description:
        "Built a model using an attention mechanism to classify whether a given comment or review exhibits a positive, negative, or neutral sentiment.",
      skills: ["Python", "Anaconda", "Keras", "NLP"],
      demo: "https://www.example.com",
      source:
        "https://github.com/ahujagautam024/Sentiment-Analysis-for-Twitter-Data",
    },
  ];

  return (
    <section
      name="Projects"
      className="px-8 md:px-16 py-16 bg-white dark:bg-gray-800"
    >
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-white dark:bg-white   shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-105"
          >
            {/* Project Details */}
            <div className="flex flex-col">
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-900 mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-900 mb-4">
                {project.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition-colors duration-300"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
