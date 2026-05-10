type ExperimentStatus =
  | "Controlled Pilot"
  | "Proceed"
  | "Extend Test"
  | "Insufficient Evidence";

export default function ExperimentationPanel() {
  const control = {
    conversion: 4.8,
    retention: 82,
    revenuePerUser: 41,
  };

  const treatment = {
    conversion: 5.6,
    retention: 79,
    revenuePerUser: 46,
  };

  const conversionLift =
    ((treatment.conversion - control.conversion) / control.conversion) * 100;

  const revenueLift =
    ((treatment.revenuePerUser - control.revenuePerUser) /
      control.revenuePerUser) *
    100;

  const retentionChange = treatment.retention - control.retention;

  let status: ExperimentStatus = "Controlled Pilot";

  if (revenueLift > 10 && retentionChange > -2) {
    status = "Proceed";
  } else if (retentionChange < -4) {
    status = "Extend Test";
  } else if (conversionLift < 3) {
    status = "Insufficient Evidence";
  }

  return (
    <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-black/30 md:p-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Experimentation Framework
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          Pricing Intervention Evidence Review
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
          This panel simulates how a pricing intervention would be reviewed
          before broad rollout. The goal is not just to detect lift, but to
          evaluate whether the evidence is stable enough for executive action.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <h3 className="text-lg font-semibold text-white">
            A/B Test Snapshot
          </h3>

          <div className="mt-5 overflow-hidden rounded-xl border border-slate-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-slate-400">
                <tr>
                  <th className="px-4 py-3">Metric</th>
                  <th className="px-4 py-3">Control</th>
                  <th className="px-4 py-3">Treatment</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800 text-slate-200">
                <tr>
                  <td className="px-4 py-3 text-slate-400">Conversion</td>
                  <td className="px-4 py-3">{control.conversion}%</td>
                  <td className="px-4 py-3">{treatment.conversion}%</td>
                </tr>

                <tr>
                  <td className="px-4 py-3 text-slate-400">Retention</td>
                  <td className="px-4 py-3">{control.retention}%</td>
                  <td className="px-4 py-3">{treatment.retention}%</td>
                </tr>

                <tr>
                  <td className="px-4 py-3 text-slate-400">
                    Revenue / User
                  </td>
                  <td className="px-4 py-3">${control.revenuePerUser}</td>
                  <td className="px-4 py-3">${treatment.revenuePerUser}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <h3 className="text-lg font-semibold text-white">
            Governed Experiment Outputs
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <ExperimentMetric
              label="Conversion Lift"
              value={`+${conversionLift.toFixed(1)}%`}
            />

            <ExperimentMetric
              label="Revenue Lift"
              value={`+${revenueLift.toFixed(1)}%`}
            />

            <ExperimentMetric
              label="Retention Change"
              value={`${retentionChange.toFixed(1)} pts`}
            />

            <ExperimentMetric label="Rollout Status" value={status} />
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Executive Interpretation
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-200">
          Experimental results suggest probable revenue improvement, but the
          treatment group shows some retention softness. The system recommends a
          controlled pilot rather than immediate enterprise-wide rollout, with
          additional validation across price-sensitive customer segments.
        </p>
      </div>
    </section>
  );
}

function ExperimentMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-1 text-xl font-bold text-white">{value}</p>
    </div>
  );
}