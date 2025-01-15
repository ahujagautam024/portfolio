import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaDocker,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDatabase,
  FaGit,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import {
  SiGraphql,
  SiMongodb,
  SiJavascript,
  SiAwslambda,
} from "react-icons/si";
import { Link } from "react-scroll";
import { FaUnity } from "react-icons/fa6";
import GautamImage from "/Gautam.png";

const Hero = () => {
  const skills = [
    { icon: <FaReact className="text-blue-500 text-6xl" />, name: "React" },
    { icon: <FaNodeJs className="text-green-500 text-6xl" />, name: "Node.js" },
    { icon: <SiGraphql className="text-pink-500 text-6xl" />, name: "GraphQL" },
    { icon: <FaDocker className="text-blue-600 text-6xl" />, name: "Docker" },
    { icon: <FaAws className="text-orange-500 text-6xl" />, name: "AWS" },
    {
      icon: <SiMongodb className="text-green-500 text-6xl" />,
      name: "MongoDB",
    },
    { icon: <FaDatabase className="text-gray-500 text-6xl" />, name: "SQL" },
    {
      icon: <SiJavascript className="text-yellow-500 text-6xl" />,
      name: "JavaScript",
    },
    { icon: <FaUnity className="text-gray-500 text-6xl" />, name: "Unity" },
  ];
  return (
    <div name="Hero" className="pt-6">
      {/* First Section: Intro and Photo */}
      <section className="flex flex-col md:flex-row items-center justify-center px-8 md:px-16 py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="text-center md:text-left max-w-lg mr-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Hi, my name is
          </p>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Gautam Ahuja
          </h1>
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1000,
              "Software Engineer",
              1000,
              "Backend Engineer",
              1000,
              "Frontend Engineer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            className="text-gray-700 dark:text-gray-300"
            repeat={Infinity}
          />
          <br />

          <div className="flex gap-2 mt-4">
            <Link
              to="Contact"
              smooth={true}
              duration={500}
              className="px-6 py-2 border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
            >
              GET IN TOUCH
            </Link>
            <a
              href="/portfolio/Gautam_Ahuja_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              RESUME
            </a>
          </div>
        </div>
        <div className="mt-8 md:mt-0 pl-8">
          <div className="w-64 h-64 rounded-full overflow-hidden">
            <img
              src={GautamImage}
              alt="Gautam Ahuja"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Second Section: Skills */}
      <section className="px-8 md:px-16 py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <FaReact className="text-blue-500 text-4xl mb-2" />
            <p className="text-sm text-gray-700 dark:text-gray-300">React</p>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-green-500 text-4xl mb-2" />
            <p className="text-sm text-gray-700 dark:text-gray-300">Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <SiGraphql className="text-pink-500 text-4xl mb-2" />
            <p className="text-sm text-gray-700 dark:text-gray-300">GraphQL</p>
          </div>
          <div className="flex flex-col items-center">
            <FaDocker className="text-blue-600 text-4xl mb-2" />
            <p className="text-sm text-gray-700 dark:text-gray-300">Docker</p>
          </div>
          <div className="flex flex-col items-center">
            <FaAws className="text-orange-500 text-4xl mb-2" />
            <p className="text-sm text-gray-700 dark:text-gray-300">AWS</p>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb className="text-green-500 text-4xl mb-2" />
            <p className="text-sm text-gray-700 dark:text-gray-300">MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <FaDatabase className="text-gray-500 text-4xl mb-2" />
            <p className="text-sm text-gray-700 dark:text-gray-300">SQL</p>
          </div>
          <div className="flex flex-col items-center">
            <SiJavascript className="text-yellow-500 text-4xl mb-2" />
            <p className="text-sm text-gray-700 dark:text-gray-300">
              JavaScript
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaPython className="text-blue-500 text-4xl mb-2" />
            <p className="text-sm text-gray-700 dark:text-gray-300">Python</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUnity className="text-gray-500 text-4xl mb-2" />
            <p className="text-sm text-gray-700 dark:text-gray-300">Unity</p>
          </div>
          <div className="flex flex-col items-center">
            <FaGit className="text-orange-500 text-4xl mb-2" />
            <p className="text-sm text-gray-700 dark:text-gray-300">Git</p>
          </div>
          <div className="flex flex-col items-center">
            <FaGithub className="text-gray-500 text-4xl mb-2" />
            <p className="text-sm text-gray-700 dark:text-gray-300">Github</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
