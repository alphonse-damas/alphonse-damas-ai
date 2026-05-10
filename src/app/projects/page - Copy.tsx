import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects in enterprise AI, RAG governance, analytics governance, experimentation, and decision systems.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white px-6 md:px-10 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-400 uppercase tracking-widest mb-4">
          Portfolio
        </p>

        <h1 className="text-5xl font-bold mb-6">Projects</h1>

        <p className="text-xl text-gray-400 mb-16 max-w-3xl">
          Selected work focused on decision systems, enterprise AI, analytics
          governance, experimentation, and operational reliability.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}