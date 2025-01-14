import React from "react";

const About = () => {
  return (
    <section
      name="About"
      className="flex justify-center px-8 md:px-16 py-16 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          ABOUT
        </h2>
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            My name is <strong>Gautam Ahuja</strong>. I am a graduate student
            pursuing a Master's in Computer Science at Stevens Institute of
            Technology with a strong foundation in software development and
            testing, including expertise in Python, C#, SQL, JavaScript, and
            various frameworks and tools.
          </p>
          <p>
            My professional journey began with{" "}
            <strong>Tata Consultancy Services</strong>, where I developed 3D
            walkthroughs and AR solutions for high-profile clients such as the
            Indian Navy and SAIPEM. Later, at <strong>Accenture</strong>, I
            worked on exciting projects like enhancing a VR project with chatbot
            capabilities and developing an innovative Snapchat filter for AR
            showroom experiences.
          </p>
          <p>
            As a dedicated developer, my technical toolkit includes frameworks
            like React, Node.js, Selenium, Three.js, and ARFoundation, alongside
            tools like Git, Jira, and Unity. My passion for technology drives me
            to continuously explore and expand my skills.
          </p>
          <p>
            Whether collaborating on cutting-edge AR/VR solutions or developing
            robust web applications, I strive to deliver innovative and
            impactful solutions that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
