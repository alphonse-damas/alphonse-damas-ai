export default function DecisionEngineFinancialSimulationPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white px-10 py-20">
      <article className="max-w-5xl mx-auto">
        <p className="text-blue-400 uppercase tracking-widest mb-4">
          Project • Decision Engine • Scenario Simulation
        </p>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          Decision Engine / Financial Simulation
        </h1>

        <p className="text-xl text-gray-400 leading-relaxed mb-16">
          A scenario-based decision modeling framework designed to evaluate
          tradeoffs under uncertainty, constraints, inflation, risk exposure,
          and long-term change.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Problem</h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            Many financial and operational decisions are not simple yes-or-no
            choices. They require comparing multiple scenarios over time while
            accounting for uncertainty, changing assumptions, constraints, and
            risk tolerance.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">System Objective</h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            The objective is to translate complex long-term planning questions
            into structured decision scenarios. Instead of offering a single
            answer, the framework compares assumptions, tradeoffs, downside
            risks, and sustainability over time.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Core Components</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">
                Scenario Inputs
              </h3>
              <p className="text-gray-400">
                Captures assumptions such as income, expenses, inflation,
                asset balances, returns, debt, and decision constraints.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">
                Baseline Projection
              </h3>
              <p className="text-gray-400">
                Establishes a reference path showing how current assumptions
                evolve over time.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">
                Stress Testing
              </h3>
              <p className="text-gray-400">
                Tests downside conditions such as higher inflation, unexpected
                costs, lower returns, or delayed income.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">
                Decision Comparison
              </h3>
              <p className="text-gray-400">
                Compares alternatives using sustainability, liquidity,
                downside risk, and flexibility as decision criteria.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Decision-System Framing</h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            The system is not designed to give financial advice. It is designed
            to demonstrate how structured assumptions, scenario modeling, and
            decision rules can help evaluate complex choices under uncertainty.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Why It Matters</h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            Strong decision systems make uncertainty visible. They help users
            see which assumptions drive outcomes, where the pressure points are,
            and how decisions change when conditions shift.
          </p>
        </section>
      </article>
    </main>
  );
}