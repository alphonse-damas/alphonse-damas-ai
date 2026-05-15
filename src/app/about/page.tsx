export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">

      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            About Alphonse Damas
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold tracking-tight text-white md:text-7xl">
            Enterprise analytics, AI governance,
            and decision systems architecture.
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-300">
            I design analytics and AI systems that help organizations understand
            evidence quality, uncertainty, operational risk, and decision readiness
            before action is taken.
          </p>

        </div>
      </section>

      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">

          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Professional Background
              </p>

              <h2 className="mt-4 text-4xl font-bold text-white">
                Building trustworthy enterprise decision infrastructure
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-slate-300">

                <p>
                  I am an analytics and decision systems leader with experience
                  across retail, financial services, healthcare, operational analytics,
                  experimentation, and enterprise performance systems.
                </p>

                <p>
                  Throughout my career, I have focused on translating complex
                  analytical work into systems that executives and operational
                  teams can actually trust and use.
                </p>

                <p>
                  My work spans experimentation frameworks, pricing analytics,
                  forecasting, operational intelligence, AI governance,
                  observability, and retrieval-based AI systems.
                </p>

                <p>
                  Increasingly, my focus has shifted toward enterprise AI systems
                  operating in regulated and high-stakes environments where
                  uncertainty management, explainability, retrieval quality,
                  and operational trust matter.
                </p>

                <p>
                  I am particularly interested in how organizations move beyond
                  prediction-only thinking toward governed decision systems that
                  make evidence quality visible rather than hidden.
                </p>

              </div>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/40 p-8">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Core Areas
              </p>

              <div className="mt-8 space-y-5">

                {[
                  "AI governance systems",
                  "Retrieval-Augmented Generation (RAG)",
                  "Weak-context detection",
                  "Decision intelligence",
                  "Enterprise observability",
                  "Pricing and experimentation analytics",
                  "Operational risk visibility",
                  "Governance-first architecture",
                  "Trustworthy AI infrastructure",
                  "Human-centered technical communication",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-800 bg-slate-900/40 px-5 py-4 text-sm text-slate-300"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">

          <div className="rounded-3xl border border-slate-800 bg-slate-950/40 p-8 md:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              How to Read This Portfolio
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Systems, Philosophy, and Consequence
            </h2>

            <p className="mt-6 max-w-4xl text-base leading-8 text-slate-300">
              This portfolio is intentionally structured across three connected
              layers. Together, the projects, essays, and companion stories
              explain not only how enterprise AI systems work,
              but why governance, uncertainty, and trust matter
              in real-world environments.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  Projects
                </p>

                <h3 className="mt-4 text-2xl font-bold text-white">
                  Here is the system.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Interactive governance demos, retrieval systems,
                  experimentation frameworks, observability workflows,
                  and enterprise decision infrastructure.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  Writing
                </p>

                <h3 className="mt-4 text-2xl font-bold text-white">
                  Here is the philosophy behind the system.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Long-form essays translating governance,
                  explainability, uncertainty, and trustworthy AI
                  into practical business language.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  Stories
                </p>

                <h3 className="mt-4 text-2xl font-bold text-white">
                  Here is the human consequence of the system.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Narrative companion pieces exploring how weak governance,
                  silent AI failure, and operational uncertainty
                  affect real people.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Portfolio Thesis
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold text-white md:text-5xl">
            From prediction systems to governed decision systems.
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-300">
            Many enterprise AI systems are optimized to generate answers quickly.
            This portfolio explores a different direction:
            systems that expose uncertainty, qualify confidence,
            explain evidence quality, and support accountable decision-making.
          </p>

        </div>
      </section>

    </main>
  );
}