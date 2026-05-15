import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

function getProjectSlug(link: string) {
  return link.replace("/projects/", "");
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => getProjectSlug(item.link) === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <article className="mx-auto max-w-5xl px-6 py-12 md:px-10">
        <Link
          href="/projects"
          className="text-sm font-semibold text-cyan-300 hover:text-cyan-200"
        >
          ← Back to Projects
        </Link>

        <header className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            {project.type}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            {project.description}
          </p>
        </header>

        <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Project Overview
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white">
            What This System Is Designed to Show
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            This project is a self-contained portfolio system. It is meant to
            demonstrate how analytics and AI workflows can be structured around
            evidence quality, uncertainty, governance, observability, and
            decision readiness rather than simply producing outputs.
          </p>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Architecture Lens
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white">
            Core System Questions
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <h3 className="font-semibold text-white">Evidence</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                What information supports the system output, and is that
                evidence strong enough to trust?
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <h3 className="font-semibold text-white">Governance</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                What rules determine whether the system should answer, warn,
                escalate, or abstain?
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <h3 className="font-semibold text-white">Decision Support</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                How does the system help users make better decisions under
                uncertainty?
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            System Notes / Applied Essay
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white">
            Why This Project Matters
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            This project sits between technical implementation and enterprise
            decision-making. The goal is not only to show that a system can
            generate an answer, forecast an outcome, or produce a
            recommendation. The goal is to show whether the system can explain
            the quality of the evidence behind that output.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            In real organizations, the most important risks are often not loud
            failures. They are quiet failures: weak evidence, missing context,
            unclear assumptions, stale data, unlogged decisions, and outputs
            that appear more reliable than they actually are.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            This project is therefore designed as a decision-support artifact,
            not just a technical demo. It shows how a portfolio system can make
            trust, uncertainty, and operational readiness visible.
          </p>
        </section>

        {project.relatedEssays && project.relatedEssays.length > 0 && (
          <section className="mt-8 rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Related Long-Form Essays
            </p>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
              These essays provide the deeper systems-thinking layer behind this
              project. Project notes stay here; long-form analysis lives in the
              Writing section.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.relatedEssays.map((essay) =>
                essay.link === "#" ? (
                  <span
                    key={essay.title}
                    className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-500"
                  >
                    {essay.title}
                  </span>
                ) : (
                  <Link
                    key={essay.title}
                    href={essay.link}
                    className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                  >
                    {essay.title}
                  </Link>
                )
              )}
            </div>
          </section>
        )}

        <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Portfolio Connection
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white">
            From Output Generation to Decision Readiness
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            This project belongs to a broader portfolio thesis: enterprise AI and
            analytics systems should be designed for trust, transparency,
            decision readiness, and operational accountability.
          </p>

          <div className="mt-6">
            <Link
              href="/projects"
              className="rounded-full border border-slate-700 bg-slate-950/70 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              Back to Projects
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}