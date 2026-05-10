export default function MarginaliaRagGovernancePage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white px-10 py-20">
      <article className="max-w-5xl mx-auto">
        <p className="text-blue-400 uppercase tracking-widest mb-4">
          Flagship Project • Enterprise RAG • AI Governance
        </p>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          Marginalia RAG Governance System
        </h1>

        <p className="text-xl text-gray-400 leading-relaxed mb-16">
          A governance-oriented retrieval-augmented generation framework focused
          on weak-context detection, evidence sufficiency, refusal behavior,
          traceability, and observability.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Problem</h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            Many enterprise RAG systems optimize for answer generation rather
            than evidence quality. They retrieve related information, pass it to
            a language model, and generate a response even when the supporting
            context is incomplete, weak, outdated, or only partially relevant.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">System Objective</h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            Marginalia is designed to treat evidence sufficiency as a first-class
            system concern. Instead of asking only whether the model can produce
            an answer, the system evaluates whether the available context is
            strong enough to support a reliable answer.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Core Architecture</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">Retrieval</h3>
              <p className="text-gray-400">
                Finds candidate context from indexed documents using semantic
                search and relevance thresholds.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">
                Trust Classification
              </h3>
              <p className="text-gray-400">
                Classifies available evidence as strong, weak, or insufficient
                before answer generation.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">Refusal Logic</h3>
              <p className="text-gray-400">
                Prevents unsupported answers when evidence quality does not meet
                the required threshold.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">Prompt Builder</h3>
              <p className="text-gray-400">
                Constructs model prompts using retrieved evidence, trust signals,
                and explicit response constraints.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">Observability</h3>
              <p className="text-gray-400">
                Logs retrieval results, context quality, confidence signals, and
                system behavior for review.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h3 className="text-xl font-semibold mb-3">Trust Report</h3>
              <p className="text-gray-400">
                Produces a structured artifact showing evidence strength,
                limitations, and decision rationale.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Design Principles</h2>

          <ul className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <li>
              <strong className="text-white">Refusal-first behavior:</strong>{" "}
              The system should decline unsupported answers rather than invent
              confidence.
            </li>

            <li>
              <strong className="text-white">Evidence sufficiency:</strong>{" "}
              Retrieval success is not enough; retrieved context must be strong
              enough to support the answer.
            </li>

            <li>
              <strong className="text-white">Traceability:</strong> Outputs
              should be reconstructable through logs, source context, and trust
              artifacts.
            </li>

            <li>
              <strong className="text-white">Operational governance:</strong>{" "}
              The system is designed for controlled enterprise environments
              where trust, accountability, and review matter.
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Why It Matters</h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            In enterprise environments, the danger is not only that an AI system
            produces a wrong answer. The greater danger is that it produces a
            confident, professional-sounding answer from weak evidence. Marginalia
            focuses on exposing that risk before the answer becomes part of an
            operational workflow.
          </p>
        </section>
      </article>
    </main>
  );
}