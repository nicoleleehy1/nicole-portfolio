// app/projects/page.tsx
import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import ProjectDashboard from "@/components/projects/ProjectDashboard";
import Link from "next/link";

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
          <Link href="/">
              <button className="!font-poppins rounded-full text-center 
                                justify-start text-[#F9C6CF] font-semibold text-xs">
                    ← Back to Home
              </button>
          </Link>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-neutral-400">
            A small collection of things I&apos;ve built recently!
          </p>
        </header>


        
        <ProjectDashboard projects={projects} limit={20} />

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
