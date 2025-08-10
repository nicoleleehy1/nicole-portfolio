"use client";

import { useRef, useState, useEffect } from "react";
import { experiences } from "../lib/experiences";

export default function ExperienceSection() {
  // Single ref that stores an array of HTMLDivElement or null
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const centerY = window.innerHeight / 2;
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      setActiveIndex(closestIndex);
      setShowSidebar(window.scrollY > window.innerHeight * 0.1);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="relative max-w-5xl mx-auto px-6 py-12">
      {/* Sidebar */}
      {showSidebar && (
        <div className="fixed left-15 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
          {experiences.map((_, index) => (
            <button
              key={index}
              className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center"
              onClick={() => {
                const element = cardRefs.current[index];
                if (element) {
                  const rect = element.getBoundingClientRect();
                  const scrollTop = window.scrollY;
                  const elementTop = rect.top + scrollTop;
                  const offset =
                    elementTop - window.innerHeight / 2 + rect.height / 2;

                  window.scrollTo({
                    top: offset,
                    behavior: "smooth",
                  });
                }
              }}
            >
              {activeIndex === index && (
                <img src={"/globe.svg"} alt="Leaf" className="w-5 h-5" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Section title */}
      <h2 className="!font-poppins text-2xl font-bold text-white">Experience</h2>

      {/* Experience list */}
      <div className="mt-6 space-y-6">
      {experiences.map((exp, i) => (
        <article
          key={exp.company}
          ref={(el: HTMLDivElement | null) => {
            cardRefs.current[i] = el;
          }}
          className="p-5 border rounded-lg bg-white shadow-sm"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">
                {exp.title} — {exp.company}
              </h3>
              <p className="text-sm text-gray-500">{exp.date}</p>
            </div>
          </div>
          <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
            {exp.bullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </article>
      ))}
      </div>
    </section>
  );
}
