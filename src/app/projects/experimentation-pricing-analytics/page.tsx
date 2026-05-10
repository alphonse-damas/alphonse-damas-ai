export default function ExperimentationPricingAnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white px-10 py-20">
      <article className="max-w-5xl mx-auto">
        <p className="text-blue-400 uppercase tracking-widest mb-4">
          Project • Experimentation • Pricing Analytics
        </p>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          Experimentation / Pricing Analytics
        </h1>

        <p className="text-xl text-gray-400 leading-relaxed mb-16">
          A portfolio case study area focused on pricing strategy, elasticity,
          experimentation, causal reasoning, and commercial decision-making.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Problem</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Pricing decisions often require balancing customer behavior,
            demand sensitivity, revenue impact, margin protection, competitive
            dynamics, and operational constraints. A model may identify a price
            opportunity, but the business still needs a decision framework for
            interpreting tradeoffs.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Analytical Focus Areas</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">Elasticity Modeling</h3>
              <p className="text-gray-400">
                Estimate how customer demand changes as price changes across
                products, categories, or segments.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">Experiment Design</h3>
              <p className="text-gray-400">
                Structure tests that separate real business effects from noise,
                seasonality, selection bias, and operational variation.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">Scenario Analysis</h3>
              <p className="text-gray-400">
                Compare pricing decisions under different assumptions about
                volume, margin, customer response, and competitive pressure.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">Decision Translation</h3>
              <p className="text-gray-400">
                Convert analytical findings into clear business choices,
                risks, guardrails, and recommended actions.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Decision-System Framing</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            The goal is not simply to predict demand or estimate elasticity.
            The goal is to help decision-makers understand what action should
            be taken given uncertainty, tradeoffs, customer behavior, and
            commercial risk.
          </p>
        </section>
      </article>
    </main>
  );
}