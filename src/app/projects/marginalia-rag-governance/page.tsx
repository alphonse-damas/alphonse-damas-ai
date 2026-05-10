import type { Metadata } from "next";
import Link from "next/link";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import TrustFlowSimulation from "@/components/TrustFlowSimulation";

export const metadata: Metadata = {
  title: "Marginalia RAG Governance System",
  description:
    "A governance-first RAG architecture case study focused on weak-context detection, trust classification, refusal-first behavior, and AI observability.",
};

const failureTests = [
  {
    title: "Empty Index",
    description:
      "System detects that no usable context exists and refuses rather than inventing an answer.",
  },
  {
    title: "Strict Threshold",
    description:
      "Retrieval scores below the trust threshold are blocked before reaching the generation layer.",
  },
  {
    title: "Semantic Mismatch",
    description:
      "Retrieved chunks may appear similar but fail meaningfully against the user’s actual question.",
  },
  {
    title: "Weak Context",
    description:
      "The system flags incomplete or low-confidence context and changes the response mode.",
  },
];

const principles = [
  "Trust before fluency",
  "Observability before scale",
  "Refusal before hallucination",
  "Explainability before automation",
  "Reliability before optimization",
];

export default function MarginaliaRAGGovernancePage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Flagship Architecture Case Study
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Marginalia RAG Governance System
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A governance-first retrieval architecture designed to detect weak
            context, classify trust, expose uncertainty, and prevent AI systems
            from producing confident but unsupported answers.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#architecture"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              View Architecture
            </a>

            <a
              href="#trust-flow"
              className="rounded-full border border-blue-500/50 px-6 py-3 text-sm font-semibold text-blue-200 transition hover:border-blue-400 hover:text-blue-300"
            >
              View Trust Flow Demo
            </a>

            <Link
              href="/writing"
              className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
            >
              Read Related Essays
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-950/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">
              System Focus
            </p>
            <p className="mt-2 text-xl font-semibold">
              Trustworthy AI Decision Infrastructure
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Core Risk
            </p>
            <p className="mt-2 text-xl font-semibold">
              Silent RAG Failure and False Confidence
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Design Pattern
            </p>
            <p className="mt-2 text-xl font-semibold">
              Refusal-First, Observable, Governed Retrieval
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Executive Summary
            </p>
            <h2 className="mt-4 text-3xl font-bold">The Problem</h2>
          </div>

          <div className="space-y-6 text-slate-300">
            <p>
              Most Retrieval-Augmented Generation systems are optimized to
              produce answers. Marginalia was designed around a different
              question: should the system answer at all?
            </p>

            <p>
              In enterprise settings, the danger is not only that an AI system
              may hallucinate. The greater danger is that it may fail quietly by
              giving a confident answer based on weak, incomplete, or unrelated
              retrieved context.
            </p>

            <p>
              Marginalia treats retrieval quality, uncertainty, refusal logic,
              and observability as first-class design requirements rather than
              afterthoughts.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-950/70">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Why Traditional RAG Fails
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Similarity is not the same as trust.
            </h2>

            <p className="mt-6 text-slate-300">
              A retrieved document can look mathematically similar while still
              being incomplete, outdated, irrelevant, or unsafe to use as the
              basis for an answer.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Similarity scores are often treated as confidence scores.",
              "Weak context is still passed into the language model.",
              "The system rarely explains why it answered.",
              "There is often no audit trail for retrieval decisions.",
              "Failures are hidden behind polished language.",
              "Refusal behavior is usually bolted on too late.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-800 bg-[#0B1120] p-6"
              >
                <p className="text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            System Architecture
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Governance-first retrieval pipeline
          </h2>

          <p className="mt-6 text-slate-300">
            The system is organized around a clear decision flow: retrieve,
            evaluate, classify trust, decide whether to answer, and generate a
            traceable trust report.
          </p>
        </div>

        <ArchitectureFlow />

        <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">
          <h3 className="text-xl font-semibold text-blue-100">
            How to read this architecture
          </h3>

          <p className="mt-4 text-slate-300">
            The key design choice is that governance happens before answer
            generation.
          </p>

          <p className="mt-4 text-slate-300">
            The system does not simply retrieve documents and send them to a
            language model. It first evaluates whether the retrieved context is
            strong enough to support an answer.
          </p>

          <p className="mt-4 text-slate-300">
            If the context is weak, incomplete, or poorly aligned with the
            question, the system can qualify the response, request better
            context, or refuse to answer.
          </p>
        </div>
      </section>

      <TrustFlowSimulation />

      <section className="bg-slate-950/70">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Weak-Context Detection
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                The system looks for unsafe uncertainty.
              </h2>

              <p className="mt-6 text-slate-300">
                Weak context occurs when the retrieved material is not strong
                enough to support a reliable answer.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0B1120] p-6">
              <h3 className="text-xl font-semibold">Trust Signals</h3>

              <ul className="mt-6 space-y-4 text-slate-300">
                <li>• Retrieval score strength</li>
                <li>• Number of usable chunks</li>
                <li>• Semantic alignment with the question</li>
                <li>• Evidence completeness</li>
                <li>• Threshold pass/fail status</li>
                <li>• Response mode recommendation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Related Writing
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Essays Behind the Architecture
            </h2>

            <p className="mt-6 text-slate-300">
              These essays explain the larger ideas behind the system using
              simple language, business examples, and relatable scenarios.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link
              href="/writing/why-rag-systems-fail-quietly"
              className="rounded-2xl border border-slate-800 bg-[#0B1120] p-6 transition hover:border-blue-500"
            >
              <p className="text-sm uppercase tracking-widest text-blue-400">
                AI Governance
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Why Most RAG Systems Fail Quietly
              </h3>

              <p className="mt-4 text-slate-300">
                Explains how AI systems can sound confident even when operating
                on weak evidence.
              </p>

              <p className="mt-6 text-sm font-semibold text-blue-300">
                Read Essay →
              </p>
            </Link>

            <Link
              href="/writing/correlation-is-not-a-business-strategy"
              className="rounded-2xl border border-slate-800 bg-[#0B1120] p-6 transition hover:border-blue-500"
            >
              <p className="text-sm uppercase tracking-widest text-blue-400">
                Decision Intelligence
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Correlation Is Not a Business Strategy
              </h3>

              <p className="mt-4 text-slate-300">
                Shows why strong-looking metrics can still lead companies toward
                poor strategic decisions.
              </p>

              <p className="mt-6 text-sm font-semibold text-blue-300">
                Read Essay →
              </p>
            </Link>

            <Link
              href="/writing/why-pricing-experiments-mislead-companies"
              className="rounded-2xl border border-slate-800 bg-[#0B1120] p-6 transition hover:border-blue-500"
            >
              <p className="text-sm uppercase tracking-widest text-blue-400">
                Pricing Analytics
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Why Pricing Experiments Often Mislead Companies
              </h3>

              <p className="mt-4 text-slate-300">
                Explains how averages can hide important customer behavior and
                operational risk.
              </p>

              <p className="mt-6 text-sm font-semibold text-blue-300">
                Read Essay →
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">Key Lessons Learned</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              "Retrieval quality is not the same as answer quality.",
              "Silent failure is more dangerous than visible refusal.",
              "Governance must be designed before deployment, not after.",
              "Observability turns AI from a black box into an accountable system.",
            ].map((lesson) => (
              <div
                key={lesson}
                className="rounded-2xl border border-slate-800 bg-[#0B1120] p-6 text-slate-300"
              >
                {lesson}
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
            >
              Back to Projects
            </Link>

            <Link
              href="/writing/why-rag-systems-fail-quietly"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Read RAG Essay
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}