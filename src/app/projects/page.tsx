import Link from "next/link";

const flagshipProjects = [
  {
    pillar: "Pillar 1",
    title: "Marginalia RAG Governance System",
    subtitle: "Governed AI Infrastructure",
    description:
      "An enterprise AI governance demo showing retrieval trust classification, weak-context detection, refusal-first behavior, confidence adjustment, observability, and audit traceability.",
    href: "/projects/marginalia-rag-governance",
    concepts: [
      "AI governance",
      "RAG trust scoring",
      "Weak-context detection",
      "Refusal-first architecture",
      "Audit traceability",
    ],
    relatedEssays: [
      {
        title: "Why Most RAG Systems Fail Quietly",
        href: "/writing/why-most-rag-systems-fail-quietly",
      },
      {
        title: "Why Weak Context Detection Matters in Enterprise RAG",
        href: "#",
      },
      {
        title: "Trust and Governance in RAG Pipelines",
        href: "#",
      },
    ],
  },
  {
    pillar: "Pillar 2",
    title: "Marginalia Commercial Decision System",
    subtitle: "Commercial Decision Intelligence",
    description:
      "A governed pricing and experimentation platform that simulates pricing interventions, validates evidence, models customer tradeoffs, and produces executive-ready recommendations.",
    href: "/projects/commercial-decision-system",
    concepts: [
      "Pricing analytics",
      "Elasticity",
      "A/B testing",
      "Customer preference intelligence",
      "Executive decision synthesis",
    ],
    relatedEssays: [
      {
        title: "Prediction Systems vs Decision Systems",
        href: "#",
      },
      {
        title: "From Analytics to Decision Intelligence",
        href: "#",
      },
      {
        title: "Why Explainability Matters More Than Model Accuracy",
        href: "#",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Enterprise Systems Portfolio
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Projects
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            A portfolio of governed AI, analytics, experimentation, and decision
            intelligence systems designed to demonstrate enterprise-ready
            thinking beyond dashboards and notebooks.
          </p>
        </div>

        <section className="mb-12 rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Portfolio Framework
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Systems, Philosophy, and Consequence
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            This portfolio is intentionally structured across three connected
            layers: operational systems, interpretive writing, and narrative
            consequence. Together they demonstrate not only how enterprise AI
            systems work, but why governance, uncertainty, and trust matter in
            real-world environments.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Projects
              </p>

              <p className="mt-3 text-xl font-bold text-white">
                Here is the system.
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Interactive architecture demos, governance workflows,
                retrieval systems, experimentation frameworks, and enterprise
                decision infrastructure.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Writing
              </p>

              <p className="mt-3 text-xl font-bold text-white">
                Here is the philosophy behind the system.
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Long-form technical essays explaining governance,
                observability, uncertainty, explainability, and trustworthy
                enterprise AI.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Stories
              </p>

              <p className="mt-3 text-xl font-bold text-white">
                Here is the human consequence of the system.
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Narrative companion pieces showing how weak governance,
                silent AI failure, and operational uncertainty affect real
                people.
              </p>
            </div>
          </div>
        </section>

        <div className="grid gap-8">
          {flagshipProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 transition hover:border-cyan-400/40 hover:bg-slate-900 md:p-8"
            >
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    {project.pillar}
                  </p>

                  <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-base font-medium text-cyan-200">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>
                </div>

                <Link
                  href={project.href}
                  className="shrink-0 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                >
                  View System
                </Link>
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Key Concepts Demonstrated
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {project.concepts.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2 text-sm text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-slate-800 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Related Long-Form Essays
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {project.relatedEssays.map((essay) =>
                    essay.href === "#" ? (
                      <span
                        key={essay.title}
                        className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-500"
                      >
                        {essay.title}
                      </span>
                    ) : (
                      <Link
                        key={essay.title}
                        href={essay.href}
                        className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                      >
                        {essay.title}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Portfolio Thesis
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            From Prediction to Governed Decision Systems
          </h2>

          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-300">
            These projects are designed around a shared idea: analytics and AI
            systems should not simply produce outputs. They should help leaders
            understand evidence quality, uncertainty, risk, and operational
            readiness before making decisions.
          </p>
        </section>
      </section>
    </main>
  );
}