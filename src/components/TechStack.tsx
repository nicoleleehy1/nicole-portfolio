"use client"
import React, { useState } from "react";

type TabId = "classes" | "languages" | "skills";

type Tab = {
  id: TabId;
  left: string;
  tags?: string[];
};

const tabs: Tab[] = [
  { id: "classes", 
    left: "left-[2%]",
  },
  { id: "skills", left: "left-[17%]" },
  // { id: "languages", left: "left-[32%]" },
];

const classSections = {
  "Electrical Engineering & Computer Science": [
    "Functional Programming",
    "Data Structures & Algorithms",
    "Discrete Mathematics & Probability",
    "Computer Architecture (Machine Structures)",
    "Fullstack Development",
    "Signals, Dynamical Systems and Information Processing",
  ],
  Bioengineering: [
    "Intro to Biomedicine for Engineers",
    "Chemical Structure and Reactivity",
    "Organic Chemistry and Biochemistry",
    "Linear Algebra and Differential Equations",
  ],
} as const;

const technicalSkills = {
  "Languages": ["Python", "Java", "C/C++", "HTML/CSS", "TypeScript", "JavaScript", "SQL", "R", "Tailwind"],
  "Frameworks": ["React", "Next.js", "Vite", "React Native", "Node.js", "Express.js", "Flask", "MongoDB", "PostgreSQL", "FastAPI", "Rest API"],
  "Tools": ["Git", "Docker", "AWS Amplify", "AWS Lambda", "AWS S3", "AWS Sagemaker", "Hugging Face", "Scikit Learn", "Tensorflow.js", "OpenCV", "MediaPipe", "Figma"]
} as const;

const languages = [
  { id: "English", proficiency: "Native" },
  { id: "Cantonese", proficiency: "Native" },
  { id: "Mandarin", proficiency: "Working Proficency" },
  { id: "French", proficiency: "Beginner" },
]



const TechStack = () => {

  const [activeTab, setActiveTab] = useState<"classes" | "languages" | "skills">("classes");
  const active = tabs.find((t) => t.id === activeTab);

  return (
    <div className="relative">
      <div className="
      absolute
      top-[4%]
      left-[3%]
      font-semibold
      text-[#FFFDFD]
      ">
        click me!
      </div>

      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
            absolute
            w-[15%]
            top-[9.5%]
            ${tab.left}
            text-sm
            font-semibold
            p-1
            rounded-t-[10px]
            z-0
            ${
              activeTab === tab.id
                ? "bg-[#B31A16] text-[#FFFBEC]"     // active
                : "bg-[#F9C6CF] text-[#BD1F20]"     // inactive
            }
          `}
        >
          {tab.id}
        </button>
      ))}

      
      {/* Background image */}
      <img src="tech-stack-blank.svg" alt="" className="w-full h-auto" />
      {/* Overlay container */}
      <div
        className="
          absolute
          w-[80%]
          left-[5%]
          top-[25%]
          flex flex-col
          gap-4
          text-left
          z-10
        "
      >
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#B61E1D]">
          {activeTab}
        </h1>

        {/* Tags */}
        <div className="space-y-3">
          {activeTab === "classes" &&
            Object.entries(classSections).map(([title, tags]) => (
              <div key={title}>
                <h2 className="font-semibold text-sm text-[#DC8282] mb-1">{title}</h2>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-sm text-[#9B3827] bg-[#FFFDFD] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          {/* Skills tab */}
          {activeTab === "skills" &&
            Object.entries(technicalSkills).map(([title, tags]) => (
              <div key={title}>
                <h2 className="font-semibold text-sm text-[#DC8282] mb-1">{title}</h2>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-sm bg-[#FFFDFD] text-[#9B3827] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default TechStack;
