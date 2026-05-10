import Link from "next/link";

import PricingSimulation from "@/components/PricingSimulation";
import ExperimentationPanel from "@/components/ExperimentationPanel";
import ProblemContextPanel from "@/components/ProblemContextPanel";
import PreferenceIntelligence from "@/components/PreferenceIntelligence";
import ExecutiveDecisionSummary from "@/components/ExecutiveDecisionSummary";
import CommercialArchitectureSummary from "@/components/CommercialArchitectureSummary";

export default function CommercialDecisionSystemPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Pillar 2 · Commercial Analytics / Decision Science
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Marginalia Commercial Decision System
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            A governed pricing and experimentation simulation platform for
            evaluating revenue impact, customer risk, uncertainty, and executive
            decision readiness.
          </p>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h3 className="font-semibold text-white">Pricing Analytics</h3>

            <p className="mt-2 text-sm text-slate-400">
              Simulates how pricing changes affect demand, margin, and revenue.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h3 className="font-semibold text-white">Elasticity</h3>

            <p className="mt-2 text-sm text-slate-400">
              Models how sensitive customers are to price movement.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h3 className="font-semibold text-white">
              Decision Governance
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Adjusts recommendations based on uncertainty and evidence quality.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h3 className="font-semibold text-white">Executive Output</h3>

            <p className="mt-2 text-sm text-slate-400">
              Translates analytics into business-readable recommendations.
            </p>
          </div>
        </div>

        <CommercialArchitectureSummary />

        <ProblemContextPanel />

        <PricingSimulation />

        <ExperimentationPanel />

        <PreferenceIntelligence />

        <ExecutiveDecisionSummary />

        <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Related Writing
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Essays Behind This System
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
            These essays explain the decision-science ideas behind this
            commercial intelligence system in plain language.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link
              href="/writing/correlation-is-not-a-business-strategy"
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition hover:border-cyan-400/40 hover:bg-slate-900"
            >
              <h3 className="font-semibold text-white">
                Correlation Is Not a Business Strategy
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Why strong-looking metrics can still lead to poor decisions.
              </p>
            </Link>

            <Link
              href="/writing/why-pricing-experiments-mislead-companies"
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition hover:border-cyan-400/40 hover:bg-slate-900"
            >
              <h3 className="font-semibold text-white">
                Why Pricing Experiments Often Mislead Companies
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                How average results can hide segment-level customer risk.
              </p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}