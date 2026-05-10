export default function CommercialArchitectureSummary() {
  return (
    <section className="mb-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
        System Architecture
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        From Commercial Signal to Governed Decision
      </h2>

      <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-400">
        This platform models how a business decision moves from an initial
        commercial idea to a governed executive recommendation. Each module adds
        a different layer of evidence before the system recommends whether to
        proceed, delay, test further, or limit rollout.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-5">
        <ArchitectureStep
          step="01"
          title="Context"
          body="Clarifies the business problem and why commercial decisions can fail."
        />

        <ArchitectureStep
          step="02"
          title="Simulate"
          body="Tests how price, demand, elasticity, and risk may affect business outcomes."
        />

        <ArchitectureStep
          step="03"
          title="Validate"
          body="Reviews experimental evidence before recommending broad action."
        />

        <ArchitectureStep
          step="04"
          title="Compare"
          body="Examines customer tradeoffs across price, features, and segment appeal."
        />

        <ArchitectureStep
          step="05"
          title="Decide"
          body="Synthesizes the evidence into an executive-ready governed recommendation."
        />
      </div>
    </section>
  );
}

function ArchitectureStep({
  step,
  title,
  body,
}: {
  step: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
        {step}
      </p>

      <h3 className="mt-2 font-semibold text-white">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
    </div>
  );
}