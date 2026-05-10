export default function AccuracyIsNotReliabilityPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white px-10 py-20">
      <article className="max-w-3xl mx-auto">
        <p className="text-blue-400 uppercase tracking-widest mb-4">
          Enterprise AI • Reliability
        </p>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          Accuracy Is Not Reliability
        </h1>

        <p className="text-gray-400 text-lg mb-12">
          Why predictive performance alone does not create trustworthy systems.
        </p>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <p>
            Enterprise analytics teams often optimize heavily for predictive
            accuracy. Accuracy becomes the primary signal of model quality.
          </p>

          <p>
            But highly accurate systems can still be operationally dangerous.
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-6 text-xl text-white">
            Reliability is broader than correctness.
          </blockquote>

          <p>
            A reliable system behaves predictably under uncertainty, exposes
            limitations clearly, handles edge cases responsibly, and supports
            operational trust.
          </p>

          <p>
            A model may achieve strong benchmark performance while failing
            silently under changing business conditions, weak evidence, missing
            inputs, or distribution shifts.
          </p>

          <p>
            Reliability requires observability, governance, monitoring,
            traceability, and uncertainty handling.
          </p>

          <p>
            In enterprise environments, decision-makers care not only about
            whether a model is usually correct, but whether it behaves safely
            when conditions become unstable.
          </p>

          <p>
            Systems that hide uncertainty create false confidence.
          </p>

          <p>
            Systems that expose uncertainty create operational trust.
          </p>

          <p>
            The future of enterprise AI depends less on maximizing benchmark
            scores and more on building systems that remain dependable under
            real-world complexity.
          </p>
        </div>
      </article>
    </main>
  );
}