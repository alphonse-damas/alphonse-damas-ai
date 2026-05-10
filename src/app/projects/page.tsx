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

        <div className="grid gap-8">
          {flagshipProjects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 transition hover:border-cyan-400/40 hover:bg-slate-900 md:p-8"
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

                <span className="shrink-0 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                  View System
                </span>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Key Concepts Demonstrated
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.concepts.map((concept) => (
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
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Portfolio Thesis
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            From Prediction to Governed Decision Systems
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
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