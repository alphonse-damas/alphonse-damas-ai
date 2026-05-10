export default function AnalyticsGovernancePage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white px-10 py-20">
      <article className="max-w-5xl mx-auto">
        <p className="text-blue-400 uppercase tracking-widest mb-4">
          Project • Analytics Governance • Operational Trust
        </p>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          Analytics Governance
        </h1>

        <p className="text-xl text-gray-400 leading-relaxed mb-16">
          A governance framework for data quality, model reliability,
          auditability, monitoring, lineage, validation, and operational
          trust in enterprise analytics environments.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Problem</h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            Many analytics systems produce reports, predictions, and dashboards
            without enough visibility into data quality, assumptions, validation,
            ownership, or operational risk. This creates trust gaps between
            technical teams and business decision-makers.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">System Objective</h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            The goal is to design analytics systems that are not only accurate,
            but also traceable, reviewable, monitorable, and aligned with
            business controls. Governance becomes part of the system design,
            not an afterthought.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Governance Focus Areas</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">Data Quality</h3>
              <p className="text-gray-400">
                Define checks for completeness, accuracy, consistency,
                timeliness, and unexpected data drift.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">Lineage</h3>
              <p className="text-gray-400">
                Track how data flows from source systems through transformations,
                metrics, models, dashboards, and decisions.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">Validation</h3>
              <p className="text-gray-400">
                Establish review methods for assumptions, outputs, thresholds,
                definitions, and decision logic.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">Monitoring</h3>
              <p className="text-gray-400">
                Observe performance, data shifts, reliability issues, broken
                pipelines, and changes in business conditions.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">Auditability</h3>
              <p className="text-gray-400">
                Preserve evidence of what changed, when it changed, who reviewed
                it, and how decisions were supported.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">Policy Controls</h3>
              <p className="text-gray-400">
                Embed guardrails for access, usage, escalation, documentation,
                and acceptable decision boundaries.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Decision-System Framing</h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            Analytics governance is not simply compliance documentation. It is
            a design discipline for making analytical systems trustworthy enough
            to support real operational decisions.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Why It Matters</h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            In enterprise environments, trust depends on more than technical
            accuracy. Decision-makers need to know where numbers came from, how
            outputs were validated, what assumptions were used, and whether the
            system can be reviewed when something goes wrong.
          </p>
        </section>
      </article>
    </main>
  );
}