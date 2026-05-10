import Link from "next/link";
import { essays } from "@/data/essays";

export default function WritingPage() {
  const pillar1Essays = essays.filter((essay) =>
    essay.pillar.includes("Pillar 1")
  );

  const pillar2Essays = essays.filter((essay) =>
    essay.pillar.includes("Pillar 2")
  );

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Systems Thinking & Technical Essays
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Writing & Insights
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Essays exploring AI governance, experimentation, observability,
            pricing intelligence, uncertainty, and enterprise decision systems.
            These essays complement the portfolio projects by explaining the
            operational and strategic thinking behind the systems.
          </p>
        </div>

        <section className="mb-12 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Writing Philosophy
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Translating Complex Systems Into Operational Understanding
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            These essays are designed to make enterprise analytics and AI
            systems understandable beyond technical audiences. The focus is not
            only on how systems work, but on how hidden risks, uncertainty, weak
            evidence, and operational failures can affect real business
            decisions.
          </p>
        </section>

        <section className="mb-14">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Pillar 1
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              Governed AI Infrastructure
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
              Essays focused on retrieval systems, weak context detection,
              confidence governance, observability, and trustworthy AI
              infrastructure.
            </p>
          </div>

          <div className="grid gap-6">
            {pillar1Essays.map((essay) => (
              <EssayCard key={essay.slug} essay={essay} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Pillar 2
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              Commercial Decision Intelligence
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
              Essays focused on experimentation, pricing analytics, customer
              tradeoffs, uncertainty, and executive decision systems.
            </p>
          </div>

          <div className="grid gap-6">
            {pillar2Essays.map((essay) => (
              <EssayCard key={essay.slug} essay={essay} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function EssayCard({
  essay,
}: {
  essay: {
    title: string;
    slug: string;
    description: string;
    tags: string[];
  };
}) {
  return (
    <Link
      href={`/writing/${essay.slug}`}
      className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 transition hover:border-cyan-400/40 hover:bg-slate-900 md:p-8"
    >
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
        <div>
          <h3 className="text-2xl font-bold text-white transition group-hover:text-cyan-200">
            {essay.title}
          </h3>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            {essay.description}
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
          Read Essay
        </span>
      </div>

      <div className="mt-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Concepts
        </p>

        <div className="flex flex-wrap gap-2">
          {essay.tags.map((concept) => (
            <span
              key={concept}
              className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-sm text-slate-300"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}