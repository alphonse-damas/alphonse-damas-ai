import Link from "next/link";

const writingCategories = [
  {
    category: "Trustworthy AI",
    description:
      "Essays and stories about evidence quality, uncertainty, hallucination prevention, refusal-first behavior, and enterprise AI trust.",

    entries: [
      {
        essayTitle: "Why Most RAG Systems Fail Quietly",
        essayDescription:
          "Weak retrieval quality, embedding mismatch, context fragmentation, and silent degradation in Retrieval-Augmented Generation systems.",
        essayHref: "/writing/why-most-rag-systems-fail-quietly",

        storyTitle: "The Answer Sounded Right",
        storyDescription:
          "A fictional insurance claims scenario showing how polished AI answers can quietly mislead users when evidence retrieval is incomplete.",
        storyHref: "/writing/the-answer-sounded-right",
      },

      {
        essayTitle: "Building AI Systems That Know Their Limits",
        essayDescription:
          "Calibrated confidence, uncertainty handling, and evidence-aware response generation in enterprise AI systems.",
        essayHref: "#",

        storyTitle: "Coming Soon",
        storyDescription:
          "Narrative companion story exploring operational consequences of overconfident AI systems.",
        storyHref: "#",
      },

      {
        essayTitle: "What Makes Enterprise AI Trustworthy",
        essayDescription:
          "Practical requirements for deploying AI systems safely in regulated and high-stakes environments.",
        essayHref: "#",

        storyTitle: "Coming Soon",
        storyDescription:
          "Narrative companion story exploring trust breakdown inside a large enterprise AI rollout.",
        storyHref: "#",
      },
    ],
  },

  {
    category: "Observability & Governance",
    description:
      "Essays on retrieval traces, evidence logging, auditability, governance breakdowns, and operational failure modes.",

    entries: [
      {
        essayTitle: "Observable AI Systems",
        essayDescription:
          "Retrieval traces, TrustReports, evidence logging, execution metadata, and auditability-first system design.",
        essayHref: "#",

        storyTitle: "Coming Soon",
        storyDescription:
          "A narrative about a company discovering its AI system cannot explain its own decisions.",
        storyHref: "#",
      },

      {
        essayTitle: "Failure Modes in Enterprise AI",
        essayDescription:
          "Hidden operational risks including retrieval failures, silent hallucinations, weak observability, and governance breakdowns.",
        essayHref: "#",

        storyTitle: "Coming Soon",
        storyDescription:
          "A fictional operational incident triggered by unnoticed AI degradation inside an enterprise workflow.",
        storyHref: "#",
      },

      {
        essayTitle: "Designing AI Systems for Auditability",
        essayDescription:
          "Observability-first engineering, replay systems, diff engines, and reproducible AI behavior.",
        essayHref: "#",

        storyTitle: "Coming Soon",
        storyDescription:
          "A story about investigators trying to reconstruct how an enterprise AI system made a critical decision.",
        storyHref: "#",
      },

      {
        essayTitle: "The Hidden Cost of Black-Box AI",
        essayDescription:
          "Operational, legal, and governance risks created when AI systems cannot explain their outputs.",
        essayHref: "#",

        storyTitle: "Coming Soon",
        storyDescription:
          "A narrative exploring organizational dependence on systems nobody fully understands.",
        storyHref: "#",
      },
    ],
  },

  {
    category: "Decision Intelligence",
    description:
      "Essays about moving beyond predictions and dashboards toward operational judgment, decision support, and uncertainty-aware systems.",

    entries: [
      {
        essayTitle: "Prediction Systems vs Decision Systems",
        essayDescription:
          "The difference between generating predictions and supporting real-world decisions under uncertainty.",
        essayHref: "#",

        storyTitle: "Coming Soon",
        storyDescription:
          "A narrative about a company confusing accurate predictions with good operational decisions.",
        storyHref: "#",
      },

      {
        essayTitle: "From Analytics to Decision Intelligence",
        essayDescription:
          "The transition from dashboards and forecasting toward policy-aware decision systems.",
        essayHref: "#",

        storyTitle: "Coming Soon",
        storyDescription:
          "A fictional executive team struggling to turn analytics into meaningful action.",
        storyHref: "#",
      },

      {
        essayTitle: "Why Explainability Matters More Than Model Accuracy",
        essayDescription:
          "Why enterprise AI systems require interpretability, traceability, and governance beyond raw predictive performance.",
        essayHref: "#",

        storyTitle: "Coming Soon",
        storyDescription:
          "A story exploring the consequences of deploying a highly accurate system nobody can explain.",
        storyHref: "#",
      },
    ],
  },

  {
    category: "Interpretive Systems",
    description:
      "Essays on meaning-centered AI, interpretive RAG, search versus understanding, and multi-perspective reasoning systems.",

    entries: [
      {
        essayTitle: "Interpretive RAG and Meaning-Centered AI",
        essayDescription:
          "Multi-perspective interpretation systems including Authorial, Contrarian, Ombudsman, and Sentinel reasoning architectures.",
        essayHref: "#",

        storyTitle: "Coming Soon",
        storyDescription:
          "A fictional narrative about competing AI interpretations inside a governance system.",
        storyHref: "#",
      },

      {
        essayTitle: "The Difference Between Search, Retrieval, and Understanding",
        essayDescription:
          "A conceptual distinction between finding information and constructing grounded reasoning.",
        essayHref: "#",

        storyTitle: "Coming Soon",
        storyDescription:
          "A story exploring the gap between possessing information and truly understanding it.",
        storyHref: "#",
      },

      {
        essayTitle: "Refusal-First AI Architectures",
        essayDescription:
          "AI systems that intentionally abstain when evidence quality is weak rather than fabricating answers.",
        essayHref: "#",

        storyTitle: "Coming Soon",
        storyDescription:
          "A narrative about an AI system punished for refusing to answer uncertain questions.",
        storyHref: "#",
      },

      {
        essayTitle: "Trust and Governance in RAG Pipelines",
        essayDescription:
          "Deterministic context classification, policy gating, and enterprise-safe AI workflow design.",
        essayHref: "#",

        storyTitle: "Coming Soon",
        storyDescription:
          "A fictional enterprise rollout where governance controls determine whether the AI can respond.",
        storyHref: "#",
      },

      {
        essayTitle: "Why Weak Context Detection Matters in Enterprise RAG",
        essayDescription:
          "Weak and empty context handling, hallucination prevention, refusal-first behavior, and trust-aware retrieval systems.",
        essayHref: "#",

        storyTitle: "Coming Soon",
        storyDescription:
          "A story about an AI assistant quietly answering questions from incomplete evidence.",
        storyHref: "#",
      },
    ],
  },
];

export default function WritingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        {/* HERO */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Long-Form Essays & Narrative Systems Analysis
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Writing
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A table of contents for long-form technical essays and companion
            stories exploring AI governance, observability, uncertainty,
            decision systems, and human-centered enterprise AI.
          </p>
        </div>

        {/* PORTFOLIO FRAMEWORK */}
        <section className="mb-12 rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Portfolio Framework
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Systems, Philosophy, and Consequence
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            The writing section is the philosophy layer of the portfolio.
            Projects show the system. Technical essays explain the philosophy
            behind the system. Companion stories reveal the human consequence of
            the system.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Link
              href="/projects"
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition hover:border-cyan-400/40"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Projects
              </p>

              <p className="mt-3 text-xl font-bold text-white">
                Here is the system.
              </p>
            </Link>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Writing
              </p>

              <p className="mt-3 text-xl font-bold text-white">
                Here is the philosophy behind the system.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Stories
              </p>

              <p className="mt-3 text-xl font-bold text-white">
                Here is the human consequence of the system.
              </p>
            </div>
          </div>
        </section>

        {/* CATEGORY SECTIONS */}
        <div className="space-y-12">
          {writingCategories.map((category) => (
            <section
              key={category.category}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white">
                  {category.category}
                </h2>

                <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
                  {category.description}
                </p>
              </div>

              {/* TABLE */}
              <div className="overflow-hidden rounded-2xl border border-slate-800">
                {/* HEADER */}
                <div className="grid grid-cols-2 bg-slate-950/80 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  <div className="border-r border-slate-800 p-4">
                    Technical Essay
                  </div>

                  <div className="p-4">Companion Story</div>
                </div>

                {/* ROWS */}
                {category.entries.map((entry) => (
                  <div
                    key={entry.essayTitle}
                    className="grid grid-cols-2 border-t border-slate-800 transition hover:bg-slate-950/40"
                  >
                    {/* ESSAY */}
                    <div className="border-r border-slate-800 p-5">
                      {entry.essayHref === "#" ? (
                        <div>
                          <p className="font-semibold text-slate-500">
                            {entry.essayTitle}
                          </p>

                          <p className="mt-2 text-sm leading-6 text-slate-500">
                            {entry.essayDescription}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <Link
                            href={entry.essayHref}
                            className="font-semibold text-white hover:text-cyan-300"
                          >
                            {entry.essayTitle}
                          </Link>

                          <p className="mt-2 text-sm leading-6 text-slate-400">
                            {entry.essayDescription}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* STORY */}
                    <div className="p-5">
                      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-cyan-500">
                        Narrative Companion
                      </p>

                      {entry.storyHref === "#" ? (
                        <div>
                          <p className="font-semibold text-slate-500">
                            {entry.storyTitle}
                          </p>

                          <p className="mt-2 text-sm leading-6 text-slate-500">
                            {entry.storyDescription}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <Link
                            href={entry.storyHref}
                            className="font-semibold text-white hover:text-cyan-300"
                          >
                            {entry.storyTitle}
                          </Link>

                          <p className="mt-2 text-sm leading-6 text-slate-400">
                            {entry.storyDescription}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}