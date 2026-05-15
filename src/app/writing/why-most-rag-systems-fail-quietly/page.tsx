import Link from "next/link";

export default function RagEssayPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <article className="mx-auto max-w-3xl px-6 py-12 md:px-10">
        <Link
          href="/writing"
          className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
        >
          ← Back to Writing
        </Link>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Technical Essay
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Why Most RAG Systems Fail Quietly
        </h1>

        <p className="mt-5 text-xl leading-8 text-slate-300">
          And why that matters more than most people realize.
        </p>

        <div className="mt-10 space-y-8 text-base leading-8 text-slate-300">
          <section>
            <p>Imagine this.</p>

            <p className="mt-3">
              You walk into a large hospital. A doctor types your symptoms into
              an AI assistant designed to help recommend treatments. The system
              confidently produces an answer. Everyone in the room assumes the
              AI “looked everything up.”
            </p>

            <p className="mt-3">But what if it didn’t?</p>

            <p className="mt-3">
              What if the system never actually found the right information in
              the first place?
            </p>

            <p className="mt-3">What if it quietly guessed?</p>

            <p className="mt-3">
              That is the hidden problem at the center of many modern AI systems
              — especially something called RAG.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              First, What Is RAG?
            </h2>

            <p className="mt-3">
              RAG stands for Retrieval-Augmented Generation.
            </p>

            <p className="mt-3">
              That sounds technical, but the idea is surprisingly simple.
            </p>

            <p className="mt-3">
              A normal AI system is similar to a student taking a test from
              memory. A RAG system is more like an open-book student.
            </p>

            <p className="mt-3">
              Before answering your question, the AI first searches through
              documents, databases, manuals, reports, or websites to gather
              information. Then it uses those materials to construct an answer.
            </p>

            <p className="mt-3">
              The retrieval part is the “searching.” The generation part is the
              “writing the answer.”
            </p>

            <p className="mt-3">Sounds reasonable.</p>

            <p className="mt-3">But this is where the problem begins.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              The Dangerous Assumption
            </h2>

            <p className="mt-3">
              Most people assume: “If the AI gave an answer, it must have found
              the right information.”
            </p>

            <p className="mt-3">
              Unfortunately, that assumption is often wrong.
            </p>

            <p className="mt-3">
              Many RAG systems fail silently. Not dramatically. Not with
              flashing red warning signs. Quietly.
            </p>

            <p className="mt-3">
              The system retrieves weak, incomplete, outdated, or irrelevant
              information — and then confidently builds an answer anyway.
            </p>

            <p className="mt-3">
              That confidence is what makes the failure dangerous.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              A Real-World Analogy: The Librarian Who Pretends
            </h2>

            <p className="mt-3">
              Imagine you ask a librarian: “Can you help me find the latest tax
              rules for small businesses?”
            </p>

            <p className="mt-3">
              Now imagine the librarian searches the wrong shelf, finds an
              outdated book, skims two random pages, and still gives you an
              answer confidently.
            </p>

            <p className="mt-3">Would you trust that answer?</p>

            <p className="mt-3">Probably not.</p>

            <p className="mt-3">
              But many AI systems do essentially this every day.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              The Case Study: Sarah and the Insurance Portal
            </h2>

            <p className="mt-3">
              Sarah works for an insurance company. Customers use an AI
              assistant to ask questions about coverage.
            </p>

            <p className="mt-3">
              One customer types: “Does my policy cover water damage from a
              burst pipe?”
            </p>

            <p className="mt-3">
              The retrieval system finds an old policy document from 2021. It
              misses a newer 2025 update. It retrieves a paragraph about flood
              damage instead of burst pipes.
            </p>

            <p className="mt-3">
              The AI then combines fragments together and answers: “Yes, your
              policy likely covers this event.”
            </p>

            <p className="mt-3">
              The customer relies on that answer. Weeks later, the claim is
              denied.
            </p>

            <p className="mt-3">
              The system “worked.” Except it didn’t.
            </p>

            <p className="mt-3">
              This is how RAG systems fail quietly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              Why Quiet Failures Are Hard to Detect
            </h2>

            <p className="mt-3">
              If a calculator says 2 + 2 = 19, everyone notices immediately.
            </p>

            <p className="mt-3">
              But RAG failures are harder because the answers often sound
              reasonable.
            </p>

            <p className="mt-3">
              Humans naturally trust fluent language, polished explanations, and
              confident tone — even when the underlying evidence is weak.
            </p>

            <p className="mt-3">
              This creates a dangerous illusion: the appearance of intelligence
              without reliable understanding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              What Does “Weak Retrieval” Actually Mean?
            </h2>

            <h3 className="mt-5 text-xl font-semibold text-white">
              1. Missing Information
            </h3>
            <p className="mt-2">
              The system never finds the relevant document. The information
              exists. The system just misses it.
            </p>

            <h3 className="mt-5 text-xl font-semibold text-white">
              2. Partial Information
            </h3>
            <p className="mt-2">
              The AI finds only part of the answer, like reading one paragraph
              of a contract and assuming you understand the whole agreement.
            </p>

            <h3 className="mt-5 text-xl font-semibold text-white">
              3. Outdated Information
            </h3>
            <p className="mt-2">
              The AI retrieves old policies, retired procedures, outdated
              pricing, or obsolete regulations.
            </p>

            <h3 className="mt-5 text-xl font-semibold text-white">
              4. Similar But Wrong Information
            </h3>
            <p className="mt-2">
              The AI retrieves information that looks related but actually
              answers a different question.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              What Good RAG Systems Do Differently
            </h2>

            <p className="mt-3">
              The best systems are not necessarily the ones that sound smartest.
              They are the ones that are honest about uncertainty.
            </p>

            <p className="mt-3">
              A trustworthy system should sometimes say: “I found weak evidence,”
              “I may not have enough information,” or “This answer should be
              reviewed by a human.”
            </p>

            <p className="mt-3">
              Ironically, this often makes the AI appear less magical — but far
              more trustworthy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Final Thought</h2>

            <p className="mt-3">
              When most people think about AI risk, they imagine futuristic
              robots or science fiction scenarios.
            </p>

            <p className="mt-3">
              But many of the real risks are far more ordinary.
            </p>

            <p className="mt-3">
              A missing document. An outdated policy. A partially retrieved
              paragraph. A confident answer built on weak evidence.
            </p>

            <p className="mt-3">Not dramatic failure.</p>

            <p className="mt-3">Silent failure.</p>

            <p className="mt-3">
              And in many ways, that is far more difficult to see.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}