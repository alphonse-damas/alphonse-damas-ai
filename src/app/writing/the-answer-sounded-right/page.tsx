import Link from "next/link";

export default function StoryPage() {
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
          Companion Story · Trustworthy AI
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          The Answer Sounded Right
        </h1>

        <p className="mt-5 text-xl leading-8 text-slate-300">
          A fictional case study about confidence, weak retrieval, and quiet AI
          failure.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Weak Context",
            "Silent Failure",
            "AI Governance",
            "Enterprise Risk",
            "Human Consequence",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <section className="mt-10 rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Why this story exists
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Technical essays explain how weak AI systems fail.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            Stories show what those failures feel like when real people depend
            on the system.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            This companion narrative translates retrieval failure, weak context,
            and false confidence into an ordinary workplace scenario where the
            consequences are subtle enough to be ignored.
          </p>
        </section>

        <div className="mt-12 space-y-6 text-base leading-8 text-slate-300">
          <p className="text-2xl font-bold text-white">
            Sarah Mitchell almost ignored the warning.
          </p>

          <p>
            The message appeared in a small gray box at the bottom of her
            screen:
          </p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 font-semibold text-cyan-300">
            AI Response Generated Successfully.
          </div>

          <p>That was the important part, according to management.</p>

          <p>
            Three months earlier, the insurance company had rolled out its new
            AI claims assistant, a system designed to help agents process
            customer questions faster.
          </p>

          <p>
            Executives described the platform as transformational.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Faster response times.</li>
            <li>Lower operating costs.</li>
            <li>Improved customer experience.</li>
            <li>Reduced training requirements.</li>
          </ul>

          <p>At first, employees were skeptical.</p>

          <p>Then they became dependent on it.</p>

          <p>Sarah worked in property claims.</p>

          <p>Most days involved some version of the same human disaster:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>flooded kitchens,</li>
            <li>fallen trees,</li>
            <li>electrical fires,</li>
            <li>burst pipes,</li>
            <li>mold damage.</li>
          </ul>

          <p>People called after some interruption to ordinary life.</p>

          <p>
            The AI system — internally nicknamed “Atlas” — was supposed to help
            agents quickly interpret policy language.
          </p>

          <p>
            Instead of manually searching through hundreds of pages of
            documentation, employees could simply type a question.
          </p>

          <p>Atlas would:</p>

          <ol className="list-decimal space-y-2 pl-6">
            <li>search company documents,</li>
            <li>retrieve relevant information,</li>
            <li>summarize the answer,</li>
            <li>and provide a recommendation.</li>
          </ol>

          <p>At least that was the promise.</p>

          <p>
            At 2:17 PM, Sarah received a call from a customer named Daniel
            Reeves.
          </p>

          <p>
            Burst pipe. Second-floor bathroom. Water damage through the
            ceiling. Hardwood floors ruined.
          </p>

          <p>Daniel sounded exhausted.</p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 italic text-slate-200">
            “You’re the fourth person I’ve talked to,” he said. “Can someone
            just tell me if this is covered?”
          </div>

          <p>Sarah opened Atlas.</p>

          <p>
            The interface looked deceptively simple: a blinking cursor beneath
            the sentence:
          </p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 font-semibold text-white">
            Ask anything.
          </div>

          <p>She typed:</p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-200">
            Does homeowner policy cover water damage from burst second-floor
            bathroom pipe?
          </div>

          <p>The system paused.</p>

          <p>Then the response appeared.</p>

          <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/80 p-6">
            <p className="font-semibold text-cyan-300">
              Coverage confirmed under accidental water damage clause.
            </p>

            <p className="mt-4 text-slate-300">
              Customer may proceed with remediation and reimbursement process.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Confidence: 92%
            </p>
          </div>

          <p>Daniel exhaled with relief.</p>

          <p>Sarah almost moved on.</p>

          <p>Almost.</p>

          <p>
            Something about the answer bothered her. The wording felt unusually
            broad.
          </p>

          <p>
            She opened the retrieval panel — a feature most employees ignored.
          </p>

          <p>The system had retrieved three supporting documents.</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>a current homeowner policy,</li>
            <li>an archived regional claims memo,</li>
            <li>and an unrelated commercial property guideline.</li>
          </ul>

          <p>
            The commercial policy language contained the reimbursement approval
            Atlas had quoted.
          </p>

          <p>
            The system had stitched multiple fragments together into a confident
            answer.
          </p>

          <p>Partially correct.</p>

          <p>Partially irrelevant.</p>

          <p>Completely convincing.</p>

          <p>Sarah reopened the actual homeowner policy.</p>

          <p>There it was.</p>

          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5 text-amber-100">
            Water damage is covered unless the property was vacant for more than
            thirty consecutive days.
          </div>

          <p>She checked the claim notes.</p>

          <p>Daniel had been temporarily living elsewhere during renovations.</p>

          <p>The house had been vacant for forty-two days.</p>

          <p>The claim might not qualify.</p>

          <p>Atlas never mentioned the exclusion.</p>

          <p>
            Not because the information did not exist.
          </p>

          <p>Because the system never retrieved it.</p>

          <p className="text-2xl font-bold text-white">
            That was the moment Sarah understood the real danger.
          </p>

          <p>
            Atlas was not lying.
          </p>

          <p>
            It was answering from incomplete evidence.
          </p>

          <p>And incomplete evidence still sounded intelligent.</p>

          <p>
            Over the next few weeks, Sarah started noticing the pattern
            everywhere.
          </p>

          <p>
            Employees trusted polished language more than evidence quality.
          </p>

          <p>
            Managers celebrated response speed without reviewing retrieval
            accuracy.
          </p>

          <p>
            Executives monitored customer satisfaction dashboards while assuming
            the underlying answers were correct.
          </p>

          <p>
            Atlas rarely failed dramatically.
          </p>

          <p>That was precisely the problem.</p>

          <p>
            Even weak answers sounded polished.
          </p>

          <p>Even partial answers sounded complete.</p>

          <p>Even missing information sounded authoritative.</p>

          <p>The system failed gracefully.</p>

          <p>And that made it dangerous.</p>

          <p>One afternoon, Sarah tested it herself.</p>

          <p>She entered deliberately confusing policy questions.</p>

          <p>Sometimes Atlas retrieved:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>the wrong state regulations,</li>
            <li>outdated clauses,</li>
            <li>unrelated coverage categories,</li>
            <li>or partially matching language.</li>
          </ul>

          <p>Yet the responses still sounded convincing.</p>

          <p>The AI always seemed eager to answer.</p>

          <p>As though silence itself were forbidden.</p>

          <section className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              The deeper problem
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white">
              Confidence became a user interface.
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              The system did not need to be correct all the time to reshape
              human behavior.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              It only needed to sound reliable often enough for employees to
              stop questioning it.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Quiet dependence formed long before visible failure appeared.
            </p>
          </section>

          <p>Months later, the company quietly changed the interface.</p>

          <p>The gray “Confidence” label disappeared.</p>

          <p>In its place appeared something new:</p>

          <div className="rounded-3xl border border-cyan-400/30 bg-slate-900/80 p-6">
            <p className="font-bold text-cyan-300">Evidence Quality:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Strong</li>
              <li>Partial</li>
              <li>Weak</li>
              <li>Conflicting</li>
            </ul>
          </div>

          <p>A second notice sometimes appeared beneath responses:</p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-200">
            Relevant policy updates may not have been retrieved. Human review
            recommended.
          </div>

          <p>Executives worried the warnings would reduce trust.</p>

          <p>Instead, something unexpected happened.</p>

          <p>Employees trusted the system more.</p>

          <p>Not because it sounded smarter.</p>

          <p>But because it finally sounded honest.</p>

          <p>Sarah kept thinking about Daniel Reeves.</p>

          <p>Not because the system had crashed.</p>

          <p>Not because the AI had malfunctioned dramatically.</p>

          <p>But because nothing had appeared broken at all.</p>

          <p className="text-xl font-bold text-white">
            The answer sounded right.
          </p>

          <p className="text-xl font-bold text-white">
            That was the problem.
          </p>
        </div>

        <section className="mt-16 rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Related essay
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Why Most RAG Systems Fail Quietly
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            This companion technical essay explains the underlying architectural
            problem behind the story: weak retrieval, incomplete context,
            confidence inflation, and silent operational risk.
          </p>

          <Link
            href="/writing/why-most-rag-systems-fail-quietly"
            className="mt-8 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
          >
            Read the technical essay →
          </Link>
        </section>

        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Portfolio connection
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Stories reveal the operational consequence.
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            The projects in this portfolio demonstrate governance-first AI
            architectures.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            The essays explain the philosophy behind those systems.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            The stories show what happens when organizations deploy systems that
            sound intelligent before they become trustworthy.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Confidence without evidence creates operational risk.",
              "Silent failure is more dangerous than visible refusal.",
              "Weak retrieval can quietly distort business decisions.",
              "Trustworthy AI requires observability and governance.",
            ].map((lesson) => (
              <div
                key={lesson}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-slate-200"
              >
                {lesson}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects/marginalia-rag-governance"
              className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
            >
              View Related System
            </Link>

            <Link
              href="/writing"
              className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              Explore More Writing
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
