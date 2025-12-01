// app/projects/page.tsx
import HoverRipple from "@/components/HoverRipple";
import { Divide } from "lucide-react";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | Nicole Lee",
  description: "Selected software and engineering projects.",
};

type Project = {
  title: string;
  description: string;
  tech: string[];
  hackathon?: string;
  link?: string;
  github?: string;
  year?: string;
};


export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#280903] text-neutral-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Selected Work
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-neutral-400">
            A small collection of things I&apos;ve built recently. Each project
            blends{" "}
            <span className="font-medium text-neutral-200">
              engineering, design, and research
            </span>{" "}
            in some way.
          </p>
        </header>


        <div className="mt-6 grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <HoverRipple key={p.title}>
          <>
            <h2 className="font-semibold text-2xl transition-colors duration-300 
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
                {p.tech.map(tag => (
                  <li
                    key={tag}
                    className="rounded-full border border-neutral-500 px-2.5 py-0.5 
                               text-[12px] tracking-wide text-neutral-400 group-hover:text-neutral-600 group-hover:text-neutral-800"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
        
            <p className="mt-5 text-neutral-400 text-sm transition-colors duration-300 
                          group-hover:text-neutral-900">
              {p.description}
            </p>
          </>
        </HoverRipple>        
        ))}
      </div>

          {/* Subtle footer note */}
          <footer className="mt-10 text-xs text-neutral-500">
            More projects on request or{" "}
            <span className="underline-offset-4 hover:underline">
              LinkedIn / GitHub
            </span>
            .
          </footer>
        </div>
      </main>
    );
  }
