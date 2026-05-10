export default function ExecutiveDecisionSummary() {
  return (
    <section className="mt-8 rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-5 shadow-2xl shadow-black/30 md:p-8">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Executive Decision Summary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
            Controlled Rollout Recommended
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-200">
            Pricing simulations indicate moderate revenue expansion potential,
            while experimentation results suggest some retention softness among
            price-sensitive customers. Product tradeoff analysis shows stronger
            preference alignment in premium customer groups. The system
            recommends controlled deployment with continued monitoring before
            enterprise-wide rollout.
          </p>
        </div>

        <div className="shrink-0 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200">
          Decision Status: Governed Pilot
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <SummarySignal
          label="Pricing Signal"
          value="Positive"
          detail="Revenue and margin improve under current assumptions."
        />

        <SummarySignal
          label="Experiment Signal"
          value="Moderate"
          detail="Revenue lift exists, but retention needs monitoring."
        />

        <SummarySignal
          label="Preference Signal"
          value="Segmented"
          detail="Premium customers show stronger offer alignment."
        />

        <SummarySignal
          label="Governance Decision"
          value="Pilot"
          detail="Controlled rollout preferred over full deployment."
        />
      </div>
    </section>
  );
}

function SummarySignal({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-xl font-bold text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p>
    </div>
  );
}