import Link from "next/link";

export default function RagEssayPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <article className="mx-auto max-w-4xl px-6 py-12 md:px-10">
        <Link
          href="/writing"
          className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
        >
          ← Back to Writing
        </Link>

        <header className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Technical Essay · Trustworthy AI
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Why Most RAG Systems Fail Quietly
          </h1>

          <p className="mt-5 max-w-3xl text-xl leading-8 text-slate-300">
            And why silent failure matters more than most organizations realize.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
              AI Governance
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
              RAG Systems
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
              Weak Context
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
              Enterprise Trust
            </span>
          </div>
        </header>

        <section className="mt-12 rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Reader Promise
          </p>

          <p className="mt-4 text-base leading-8 text-slate-300">
            This essay explains Retrieval-Augmented Generation in plain language.
            You do not need to be an engineer to understand the core risk:
            an AI system can sound confident even when the evidence underneath
            it is weak, incomplete, outdated, or wrong.
          </p>
        </section>

        <div className="mt-12 space-y-14 text-base leading-8 text-slate-300">
          <section>
            <h2 className="text-3xl font-bold text-white">
              The Invisible Enterprise Risk
            </h2>

            <p className="mt-5">Imagine this.</p>

            <p className="mt-4">
              You walk into a large hospital. A doctor types your symptoms into
              an AI assistant designed to help recommend treatments. The system
              confidently produces an answer. Everyone in the room assumes the AI
              looked everything up.
            </p>

            <p className="mt-4">But what if it did not?</p>

            <p className="mt-4">
              What if the system never actually found the right medical
              guideline, policy, or patient-specific information in the first
              place?
            </p>

            <p className="mt-4">What if it quietly guessed?</p>

            <p className="mt-4">
              That is the hidden problem at the center of many modern enterprise
              AI systems, especially systems built around something called RAG.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white">
              First, What Is RAG?
            </h2>

            <p className="mt-5">
              RAG stands for Retrieval-Augmented Generation.
            </p>

            <p className="mt-4">
              The phrase sounds technical, but the idea is simple.
            </p>

            <p className="mt-4">
              A normal AI system is like a student taking a test from memory. A
              RAG system is more like an open-book student. Before answering a
              question, the system first searches through documents, databases,
              manuals, reports, policies, websites, or internal knowledge bases.
              Then it uses what it retrieved to write an answer.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="font-semibold text-white">Simple mental model:</p>

              <p className="mt-3 text-slate-300">
                Retrieval is the searching. Generation is the writing. Governance
                is deciding whether the system found enough reliable evidence to
                answer safely.
              </p>
            </div>

            <p className="mt-4">
              In theory, this should make AI more reliable because the system is
              not relying only on memory. A customer service chatbot can search
              company policy documents. A hospital assistant can search clinical
              guidelines. A law firm assistant can search legal material. A
              warehouse assistant can search operating procedures.
            </p>

            <p className="mt-4">That sounds reasonable.</p>

            <p className="mt-4">But this is where the problem begins.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white">
              The Dangerous Assumption
            </h2>

            <p className="mt-5">
              Most people assume that if an AI system gives an answer, it must
              have found the right information.
            </p>

            <p className="mt-4">
              Unfortunately, that assumption is often wrong.
            </p>

            <p className="mt-4">
              Many RAG systems fail silently. Not dramatically. Not with flashing
              red warning signs. Quietly.
            </p>

            <p className="mt-4">
              The system retrieves weak, incomplete, outdated, or irrelevant
              information and then confidently builds an answer anyway.
            </p>

            <p className="mt-4">
              That confidence is what makes the failure dangerous. A poor answer
              that sounds uncertain may trigger caution. A poor answer that
              sounds polished can create false trust.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white">
              Why Similarity Is Not Trust
            </h2>

            <p className="mt-5">
              RAG systems often retrieve information by looking for documents
              that are mathematically similar to the user’s question. That can be
              useful, but similarity is not the same as trust.
            </p>

            <p className="mt-4">
              A document can look similar to the question while still being the
              wrong source. It may be outdated. It may answer a nearby question
              rather than the actual question. It may contain only part of the
              answer. It may come from the wrong region, policy version, customer
              segment, product line, or regulatory context.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                <h3 className="font-semibold text-white">Similarity asks:</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Does this document look related to the question?
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/70 p-5">
                <h3 className="font-semibold text-white">Trust asks:</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Is this evidence strong enough to support the answer?
                </p>
              </div>
            </div>

            <p className="mt-4">
              Those are very different questions. Many organizations optimize
              for the first one while assuming they have solved the second.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white">
              A Real-World Analogy: The Librarian Who Pretends
            </h2>

            <p className="mt-5">
              Imagine you ask a librarian for the latest tax rules for small
              businesses.
            </p>

            <p className="mt-4">
              Now imagine the librarian searches the wrong shelf, finds an
              outdated book, skims two random pages, and still gives you an
              answer confidently.
            </p>

            <p className="mt-4">Would you trust that answer?</p>

            <p className="mt-4">Probably not.</p>

            <p className="mt-4">
              But many AI systems do essentially this every day. They retrieve
              the wrong documents, retrieve only partial information,
              misunderstand the question, or fail to find anything useful at
              all. Then they write a fluent answer as though everything is fine.
            </p>

            <p className="mt-4">That is quiet failure.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white">
              The Case Study: Sarah and the Insurance Portal
            </h2>

            <p className="mt-5">
              Sarah works for an insurance company. Customers use an AI assistant
              to ask questions about coverage.
            </p>

            <p className="mt-4">
              One customer types: “Does my policy cover water damage from a
              burst pipe?”
            </p>

            <p className="mt-4">
              Behind the scenes, the retrieval system finds an old policy
              document from 2021. It misses a newer update. It retrieves a
              paragraph about flood damage instead of burst pipes. The AI then
              combines fragments together and answers: “Yes, your policy likely
              covers this event.”
            </p>

            <p className="mt-4">
              The customer relies on that answer. Weeks later, the claim is
              denied. The customer blames the company. The company blames the
              AI. The AI logs show no obvious crash.
            </p>

            <p className="mt-4">The system worked.</p>

            <p className="mt-4">Except it did not.</p>

            <p className="mt-4">
              This is how RAG systems fail quietly.
            </p>

            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-slate-900/70 p-6">
              <p className="font-semibold text-white">
                Companion story:
              </p>
              <p className="mt-2 text-slate-300">
                The fictional story “The Answer Sounded Right” explores this
                scenario from the perspective of the claims worker who trusted
                the system.
              </p>
              <Link
                href="/writing/the-answer-sounded-right"
                className="mt-4 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200"
              >
                Read the companion story →
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white">
              Why Hallucination Is the Wrong Focus
            </h2>

            <p className="mt-5">
              Many conversations about AI risk focus on hallucination. That is
              understandable, but it is incomplete.
            </p>

            <p className="mt-4">
              In a RAG system, the model may not invent anything in an obvious
              way. The language generation may be technically fine. The answer
              may be coherent, grammatically correct, and based on retrieved
              material.
            </p>

            <p className="mt-4">
              The deeper problem is that the retrieved material itself may be too
              weak to support the answer.
            </p>

            <p className="mt-4">
              In other words, the model may answer correctly according to the
              wrong evidence. That is harder to detect than a ridiculous
              hallucination because the answer sounds reasonable.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white">
              What Weak Retrieval Actually Means
            </h2>

            <div className="mt-6 space-y-5">
              {[
                {
                  title: "1. Missing Information",
                  body: "The system never finds the relevant document. The information exists, but the retrieval process misses it.",
                },
                {
                  title: "2. Partial Information",
                  body: "The AI finds only part of the answer, like reading one paragraph of a contract and assuming you understand the whole agreement.",
                },
                {
                  title: "3. Outdated Information",
                  body: "The AI retrieves old policies, retired procedures, outdated pricing, obsolete regulations, or stale operating rules.",
                },
                {
                  title: "4. Similar But Wrong Information",
                  body: "The AI retrieves information that looks related but answers a different question, such as confusing flood damage with pipe damage.",
                },
                {
                  title: "5. Fragmented Context",
                  body: "The system retrieves pieces of information that are individually plausible but incomplete when stitched together.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white">
              The Confidence Problem
            </h2>

            <p className="mt-5">
              Many systems display confidence in ways that are misleading. A
              confidence score may reflect how strongly the model generated an
              answer, not whether the retrieval evidence was complete,
              current, or appropriate.
            </p>

            <p className="mt-4">
              This is dangerous because people naturally trust fluent language.
              We trust polished explanations. We trust confident tone. We trust
              clean formatting. But none of those things prove that the system
              found the right evidence.
            </p>

            <p className="mt-4">
              A trustworthy system should separate answer fluency from evidence
              quality. It should make clear whether the answer is based on
              strong, partial, weak, missing, or conflicting evidence.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white">
              Why Most Systems Lack Observability
            </h2>

            <p className="mt-5">
              Observability means being able to see what the system did and why
              it behaved the way it did.
            </p>

            <p className="mt-4">
              In many enterprise RAG systems, users see only the final answer.
              They do not see which documents were retrieved, whether those
              documents were current, whether important sources were missing, or
              whether the system had enough evidence to answer safely.
            </p>

            <p className="mt-4">
              Without observability, the answer becomes a black box. If
              something goes wrong, the organization may not be able to
              reconstruct the failure. That creates operational, legal, and
              governance risk.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white">
              Governance Before Generation
            </h2>

            <p className="mt-5">
              Most RAG systems follow a simple pattern: retrieve documents, send
              them to the model, generate an answer.
            </p>

            <p className="mt-4">
              A more trustworthy pattern adds a governance layer before answer
              generation. The system should ask:
            </p>

            <ul className="mt-5 list-disc space-y-3 pl-6">
              <li>Did we retrieve enough relevant evidence?</li>
              <li>Is the evidence current?</li>
              <li>Are the sources consistent or conflicting?</li>
              <li>Is the context strong enough to answer?</li>
              <li>Should the system answer, qualify the response, escalate, or refuse?</li>
            </ul>

            <p className="mt-5">
              This is the difference between an answer engine and a governed
              decision-support system.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white">
              What Trustworthy RAG Systems Do Differently
            </h2>

            <p className="mt-5">
              The best systems are not necessarily the ones that sound smartest.
              They are the ones that are honest about uncertainty.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "They classify evidence quality before answering.",
                "They expose retrieval traces and source quality.",
                "They distinguish confidence from evidence strength.",
                "They refuse or qualify answers when context is weak.",
                "They create audit logs for high-risk decisions.",
                "They help humans understand when review is needed.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
                >
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-6">
              This often makes AI appear less magical, but far more trustworthy.
            </p>
          </section>

          <section className="rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Related System
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Marginalia RAG Governance System
            </h2>

            <p className="mt-4 text-slate-300">
              The portfolio project connected to this essay demonstrates a
              governance-first retrieval architecture that evaluates context
              quality before deciding whether the system should answer, qualify,
              or refuse.
            </p>

            <Link
              href="/projects/marginalia-rag-governance"
              className="mt-6 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              View the related system →
            </Link>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white">
              Final Thought: The Future of Enterprise AI
            </h2>

            <p className="mt-5">
              When most people think about AI risk, they imagine futuristic
              robots or science fiction scenarios. But many real risks are far
              more ordinary.
            </p>

            <p className="mt-4">
              A missing document. An outdated policy. A partially retrieved
              paragraph. A confident answer built on weak evidence.
            </p>

            <p className="mt-4">Not dramatic failure.</p>

            <p className="mt-4">Silent failure.</p>

            <p className="mt-4">
              And in many ways, that is far more difficult to see.
            </p>

            <p className="mt-4">
              The next major challenge in enterprise AI may not be making
              systems sound more intelligent. It may be making them more honest
              about what they know, what they found, and what they should not
              claim.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}