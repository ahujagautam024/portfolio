import React from "react";
import { FaUniversity } from "react-icons/fa";

const education = [
  {
    institution: "Stevens Institute of Technology",
    degree: "Masters of Science in Computer Science",
    period: "2023 – Present",
    location: "Hoboken, USA",
    logo: "history/stevens.png",
  },
  {
    institution: "D.K.T.E's TEI",
    degree: "Bachelor of Technology in Computer Science",
    period: "2016 – 2020",
    location: "Ichalkaranji, India",
    logo: "history/dkte.png",
  },
];

const EducationSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
          EDUCATION
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex items-center bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <img
                src={edu.logo}
                alt={`${edu.institution} logo`}
                className="w-16 h-16 object-contain mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {edu.institution}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{edu.degree}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {edu.period} • {edu.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
