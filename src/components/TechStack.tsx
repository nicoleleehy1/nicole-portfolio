import React from "react";

const technicalSkills = {
  languages: ["Python", "Java", "C++", "TypeScript", "JavaScript", "HTML/CSS"],
  frameworks: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "Flask"],
  tools: ["Git", "GitHub", "AWS", "Docker", "PostgreSQL", "VS Code"],
};

const TechStack = () => {
  return (
    <div className="relative">
      {/* Background image */}
      <img src="tech-stack-blank.svg" alt="" className="w-full h-auto" />

      {/* Overlay container */}
      <div
        className="
          absolute
          w-[70%]
          max-w-[60rem]
          left-[14%]
          top-[20%]
          flex flex-col
          gap-4
          text-left
        "
      >
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#B61E1D]">
          Tech Stack.
        </h1>

        {/* Skills Section */}
        <div className="flex flex-col gap-3 ml-1">
          {/* Languages */}
          <div className="rounded-[10px] p-3 bg-white">
            <h2 className="font-semibold text-sm mb-1">Languages</h2>
            <div className="flex flex-wrap gap-1.5">
              {technicalSkills.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-2 py-0.5 text-xs bg-gray-100 text-gray-800 rounded-md"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="rounded-[10px] p-3 bg-white shadow-sm">
            <h2 className="font-semibold text-sm mb-1">Frameworks</h2>
            <div className="flex flex-wrap gap-1.5">
              {technicalSkills.frameworks.map((fw) => (
                <span
                  key={fw}
                  className="px-2 py-0.5 text-xs bg-gray-100 text-gray-800 rounded-md"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="rounded-[10px] p-3 bg-white">
            <h2 className="font-semibold text-sm mb-1">Tools</h2>
            <div className="flex flex-wrap gap-1.5">
              {technicalSkills.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-0.5 text-xs bg-gray-100 text-gray-800 rounded-md"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
