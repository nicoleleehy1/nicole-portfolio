"use client";

import HoverRipple from "@/components/HoverRipple";
import { Project } from "@/lib/projects";

interface Props {
  projects: Project[];
  limit?: number; // <-- NEW
}

export default function FeaturedProjects({ projects, limit = 3 }: Props) {
  const shown = projects.slice(0, limit);

  return (
    <div className="mt-6 grid md:grid-cols-3 gap-6">
      {shown.map((p) => (
        <HoverRipple key={p.title}>
          <>
            <h2 className="font-semibold text-2xl transition-colors duration-300 text-white
                           group-hover:text-[#B31A16]">
              {p.title}
            </h2>

            <div className="pt-2">
              {p.hackathon && (
                <div className="inline-block w-fit rounded-full bg-[#F9C6CF] px-2.5 py-0.5 
                                text-[12px] text-[#BD1F20] font-semibold tracking-wide">
                  {p.hackathon}
                </div>
              )}

              <ul className="flex flex-wrap gap-1.5 pt-2">
                {p.tech.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-neutral-500 px-2.5 py-0.5 
                               text-[12px] tracking-wide text-neutral-400 
                               transition-colors duration-300
                               group-hover:text-neutral-800"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-5 text-neutral-300 text-sm transition-colors duration-300 
                          group-hover:text-neutral-900">
              {p.description}
            </p>
          </>
        </HoverRipple>
      ))}
    </div>
  );
}
