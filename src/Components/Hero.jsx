import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaDatabase,
  FaUnity,
  FaPython,
  FaGit,
  FaGithub,
  FaCameraRetro,
} from "react-icons/fa";
import {
  SiGraphql,
  SiMongodb,
  SiJavascript,
  SiNextdotjs,
  SiRedis,
  SiPandas,
  SiNumpy,
  SiJira,
  SiBlender,
} from "react-icons/si";

import { Link } from "react-scroll";

const imageSrc = `${import.meta.env.BASE_URL}/Gautam.jpeg`;

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const skills = [
    { icon: <FaReact />, name: "React", color: "text-blue-500" },
    { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
    { icon: <SiGraphql />, name: "GraphQL", color: "text-pink-500" },
    { icon: <FaDocker />, name: "Docker", color: "text-blue-600" },
    { icon: <FaAws />, name: "AWS", color: "text-orange-500" },
    { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
    { icon: <FaDatabase />, name: "SQL", color: "text-gray-500" },
    { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-500" },
    { icon: <FaUnity />, name: "Unity", color: "text-gray-500" },
    { icon: <FaPython />, name: "Python", color: "text-blue-500" },
    { icon: <FaGit />, name: "Git", color: "text-orange-500" },
    { icon: <FaGithub />, name: "Github", color: "text-gray-500" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "text-black" },
    { icon: <SiRedis />, name: "Redis", color: "text-red-500" },
    { icon: <SiPandas />, name: "Pandas", color: "text-blue-500" },
    { icon: <SiNumpy />, name: "Numpy", color: "text-blue-400" },
    { icon: <FaCameraRetro />, name: "Lens Studio", color: "text-purple-500" },
    { icon: <SiJira />, name: "Jira", color: "text-blue-400" },
    { icon: <SiBlender />, name: "Blender", color: "text-orange-500" },
  ];

  return (
    <div
      id="Hero"
      className=" bg-gray-50 py-4 px-1 dark:bg-gray-700 dark:text-gray-300"
    >
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-sm font-medium text-gray-600 tracking-wider mb-4 dark:text-gray-300"
              {...fadeInUp}
            >
              WELCOME TO MY PORTFOLIO
            </motion.p>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 dark:text-gray-300"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm Gautam Ahuja
            </motion.h1>
            <div className="h-16 mb-6 ">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1000,
                  "Software Engineer",
                  1000,
                  "Problem Solver",
                  1000,
                  "Tech Enthusiast",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium"
                repeat={Infinity}
              />
            </div>
            <motion.p
              className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl"
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Passionate about crafting elegant solutions to complex problems.
              With expertise in full-stack development and a deep understanding
              of modern technologies, I create scalable and efficient
              applications that make a difference.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                className="px-8 py-3 bg-gray-900 dark:text-gray-300 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
              >
                Get in Touch
              </Link>
              <a
                href="/portfolio/Gautam_Ahuja_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gray-900 border-2 text-white border-gray-900 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                View Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full animate-pulse"></div>
              <img
                src={imageSrc}
                alt="Gautam Ahuja"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-3">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-16 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            TECHNICAL SKILLS
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, Hero) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Hero * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`text-4xl mb-3 ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  {skill.icon}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
