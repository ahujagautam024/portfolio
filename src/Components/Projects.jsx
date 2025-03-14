import { useState } from "react";

const projects = [
  {
    title: "Research Collaboration Platform",
    description:
      "Designed to facilitate meaningful connections between professors and students at Stevens Institute of Technology, enabling them to collaborate on research projects. Professors can post research needs, while students can browse and apply for relevant projects.",
    images: [
      `${import.meta.env.BASE_URL}/rcp/1.png`,
      `${import.meta.env.BASE_URL}/rcp/2.png`,
      `${import.meta.env.BASE_URL}/rcp/3.png`,
    ],
    technologies: [
      "Node.js",
      "JavaScript",
      "React",
      "GraphQL",
      "Socket.io",
      "Apollo Server",
      "Apollo Client",
      "Redis",
      "Docker",
    ],
    demoUrl: "https://www.example.com",
    githubUrl:
      "https://github.com/CS-554-Team-Cool-Kids/Research-collaboration-platform.git",
  },
  {
    title: "Job Tracker Application",
    description:
      "Developed a Job Tracker Application with straightforward functionalities aiding candidates in efficiently managing their applications. Implemented insightful statistics alongside a cohesive team effort.",
    images: [
      `${import.meta.env.BASE_URL}/JTA/2.png`,
      `${import.meta.env.BASE_URL}/JTA/3.png`,
      `${import.meta.env.BASE_URL}/JTA/4.png`,
    ],
    technologies: [
      "Node.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Handlebars",
      "Leaflet",
    ],
    demoUrl: "https://www.example.com",
    githubUrl: "https://www.github.com/ahujagautam024/job-tracker",
  },
  {
    title: "Library Management System",
    description:
      "A comprehensive platform for managing books, authors, publishers, and chapters. It allows you to add, edit, and delete authors or publishers, link books to both authors and publishers, and perform advanced searches. The system provides a clean dashboard UI with easy-to-use forms and data tables, making library administration efficient and intuitive.",
    images: [
      `${import.meta.env.BASE_URL}/lms/1.png`,
      `${import.meta.env.BASE_URL}/lms/2.png`,
      `${import.meta.env.BASE_URL}/lms/3.png`,
      `${import.meta.env.BASE_URL}/lms/4.png`,
      `${import.meta.env.BASE_URL}/lms/5.png`,
      `${import.meta.env.BASE_URL}/lms/6.png`,
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDb",
      "Apollo Client",
      "Apollo Server",
      "Redis",
      "Data Tables",
    ],
    demoUrl: "https://www.example.com",
    githubUrl: "https://github.com/YourUsername/YourLibraryManagementRepo.git",
  },
];

const ProjectsSection = () => {
  const [currentSlides, setCurrentSlides] = useState({});

  const nextSlide = (projectIndex) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] || 0) + 1) % projects[projectIndex].images.length,
    }));
  };

  const prevSlide = (projectIndex) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] || 0) - 1 + projects[projectIndex].images.length) %
        projects[projectIndex].images.length,
    }));
  };

  return (
    <section
      id="Projects"
      className="py-4 px-1 bg-gray-50 dark:bg-gray-700 dark:text-gray-300"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">PROJECTS</h2>
        <div className="space-y-10 ">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300
                  backdrop-blur-sm border border-gray-100 dark:border-gray-700 flex flex-col lg:flex-row ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
              >
                {/* Image Section */}
                <div className="w-full relative lg:w-1/2">
                  <div className="flex aspect-video justify-center items-center relative overflow-hidden rounded-lg">
                    <img
                      src={project.images[currentSlides[index] || 0]}
                      alt={`${project.title} screenshot ${
                        (currentSlides[index] || 0) + 1
                      }`}
                      className="object-cover transition-transform duration-300 w-[80%] h-[80%] rounded-lg"
                      loading="lazy"
                    />
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevSlide(index)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full
                                    hover:bg-black/70 transition-colors"
                          aria-label="Previous image"
                        >
                          ←
                        </button>
                        <button
                          onClick={() => nextSlide(index)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full
                                    hover:bg-black/70 transition-colors"
                          aria-label="Next image"
                        >
                          →
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Info Section */}
                <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-6">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg
                                hover:bg-blue-700 transition-colors"
                    >
                      🔗 Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg
                                hover:bg-gray-900 transition-colors"
                    >
                      🛠 Source Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
