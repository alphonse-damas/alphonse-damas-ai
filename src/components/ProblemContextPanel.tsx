export default function ProblemContextPanel() {
  return (
    <section className="mb-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
        Problem Context
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Why Commercial Decisions Fail
      </h2>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <ContextCard
          title="The Problem"
          body="Businesses often make pricing or product decisions using incomplete signals. Revenue may look promising at first, while customer churn, competitor response, or segment risk remain hidden."
        />

        <ContextCard
          title="Why It Matters"
          body="A pricing change can improve margin in one customer group while damaging retention in another. Without evidence review, leaders may mistake short-term lift for a durable business improvement."
        />

        <ContextCard
          title="How This System Helps"
          body="This platform connects simulation, experimentation, customer tradeoffs, and governed recommendations so leaders can see both the opportunity and the risk before acting."
        />
      </div>
    </section>
  );
}

function ContextCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{body}</p>
    </div>
  );
}