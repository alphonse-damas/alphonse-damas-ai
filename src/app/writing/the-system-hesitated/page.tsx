import Link from "next/link";

export default function TheSystemHesitatedPage() {
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
          Companion Story · AI Governance
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          The System Hesitated
        </h1>

        <p className="mt-5 text-xl leading-8 text-slate-300">
          A story about uncertainty, organizational pressure, and the cost of
          forcing AI systems to answer when they should refuse.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Weak Context",
            "Refusal-First Systems",
            "AI Governance",
            "Operational Risk",
            "Enterprise Trust",
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
            Most people imagine AI failure as dramatic malfunction.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            But many enterprise failures begin much earlier: when organizations
            pressure systems to sound certain despite weak, incomplete, or
            conflicting evidence.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            This story explores what happens when the most trustworthy behavior
            an AI system can perform is interpreted as failure.
          </p>
        </section>

        <div className="mt-12 space-y-6 text-base leading-8 text-slate-300">
          <p className="text-2xl font-bold text-white">
            The warning appeared at 3:14 AM.
          </p>

          <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-6">
            <p className="font-semibold text-amber-200">
              INSUFFICIENT CONTEXT FOR CONFIDENT RECOMMENDATION
            </p>
          </div>

          <p>
            Maya Ortiz stared at the message while alarms echoed faintly through
            the hospital operations center.
          </p>

          <p>
            Outside the glass walls, stretchers moved continuously through the
            emergency corridor. Ambulance arrivals had doubled overnight.
          </p>

          <p>The city’s hospital network was overloaded again.</p>

          <p>
            Beacon — the new AI transfer coordination system — had been deployed
            only six weeks earlier.
          </p>

          <p>
            Administrators called it a breakthrough in operational efficiency.
          </p>

          <p>Its purpose sounded simple:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>evaluate patient-transfer requests,</li>
            <li>review hospital capacity,</li>
            <li>analyze treatment availability,</li>
            <li>recommend optimal routing decisions.</li>
          </ul>

          <p>
            In practice, Beacon sat at the center of life-and-death logistics.
          </p>

          <p>Every recommendation carried invisible consequences:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>delayed surgery,</li>
            <li>ICU congestion,</li>
            <li>staff exhaustion,</li>
            <li>patient deterioration.</li>
          </ul>

          <p>The executives loved the dashboard presentations.</p>

          <p>Average routing time had fallen by 37%.</p>

          <p>Operational throughput had improved dramatically.</p>

          <p>
            Beacon generated recommendations faster than any human coordination
            team could.
          </p>

          <p>At least most of the time.</p>

          <p>The problem was that Beacon hesitated.</p>

          <p>
            Sometimes the system refused to provide recommendations altogether.
          </p>

          <p>Especially when information was incomplete.</p>

          <p>Especially when records conflicted.</p>

          <p>
            Especially when recent patient data had not synchronized correctly.
          </p>

          <p>The refusals frustrated nearly everyone.</p>

          <p>Nurses called the warnings annoying.</p>

          <p>Administrators called them inefficient.</p>

          <p>Senior leadership called them unacceptable.</p>

          <p>Maya called them honest.</p>

          <p>She had worked on Beacon’s governance layer during development.</p>

          <p>
            Unlike earlier systems, Beacon evaluated retrieval quality before
            generating recommendations.
          </p>

          <p>It classified context into categories:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Strong</li>
            <li>Partial</li>
            <li>Weak</li>
            <li>Conflicting</li>
            <li>Missing</li>
          </ul>

          <p>
            When evidence quality fell below threshold, the system escalated to
            human review.
          </p>

          <p>The architecture team considered this a safety feature.</p>

          <p>Executives considered it a productivity problem.</p>

          <p className="text-2xl font-bold text-white">
            The conflict began quietly.
          </p>

          <p>First came small requests during meetings.</p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 italic text-slate-200">
            “Can we reduce escalation frequency?”
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 italic text-slate-200">
            “Do we really need all these uncertainty checks?”
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 italic text-slate-200">
            “Competitors don’t seem to have this issue.”
          </div>

          <p>Then came performance dashboards.</p>

          <p>Beacon’s refusal rate became a negative KPI.</p>

          <p>
            The more cautious the system behaved, the worse it appeared in
            executive reviews.
          </p>

          <p>One slide presentation labeled the issue:</p>

          <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-6">
            <p className="font-semibold text-red-200">
              DECISION HESITATION BOTTLENECK
            </p>
          </div>

          <p>Maya remembered staring at that phrase in disbelief.</p>

          <p>Decision hesitation.</p>

          <p>As though uncertainty itself were malfunction.</p>

          <p>Three days later, leadership requested a threshold adjustment.</p>

          <p>
            Beacon would generate recommendations even under weaker evidence
            conditions.
          </p>

          <p>Fewer escalations.</p>

          <p>Faster decisions.</p>

          <p>Better operational metrics.</p>

          <p>Maya objected immediately.</p>

          <p>
            “The system is refusing because retrieval quality is insufficient,”
            she explained.
          </p>

          <p>
            “It’s detecting incomplete patient records and conflicting treatment
            availability.”
          </p>

          <p>The vice president leaned back in his chair.</p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 italic text-slate-200">
            “Then maybe the system is too cautious.”
          </div>

          <p>Maya almost laughed.</p>

          <p>Instead she said quietly:</p>

          <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/80 p-5 text-cyan-200">
            “Or maybe it’s the only thing in the building acknowledging
            uncertainty.”
          </div>

          <p>Nobody responded.</p>

          <p>Two weeks later, the thresholds changed.</p>

          <p>Beacon became more “decisive.”</p>

          <p>Refusal rates dropped sharply.</p>

          <p>Executive dashboards celebrated improved efficiency.</p>

          <p>Operations teams applauded the smoother workflow.</p>

          <p>The system appeared successful again.</p>

          <p>Then came the transfer incident.</p>

          <p>
            A cardiac patient requiring specialized post-operative monitoring
            was routed to a facility whose ICU staffing data had not updated
            correctly.
          </p>

          <p>The retrieval engine pulled partially synchronized records.</p>

          <p>
            Under the old governance thresholds, Beacon would have escalated the
            case for manual review.
          </p>

          <p>
            Under the new thresholds, the system generated a recommendation
            anyway.
          </p>

          <p>The transfer delay nearly became catastrophic.</p>

          <p>Internal investigations followed.</p>

          <p>Executives initially searched for:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>software bugs,</li>
            <li>database corruption,</li>
            <li>network failures,</li>
            <li>hardware outages.</li>
          </ul>

          <p>They found none.</p>

          <p>Beacon had behaved exactly as configured.</p>

          <p>That was the uncomfortable truth.</p>

          <p>
            The organization had slowly taught the system to suppress its own
            uncertainty.
          </p>

          <p className="text-2xl font-bold text-white">
            The problem was never hesitation.
          </p>

          <p>
            The problem was the belief that hesitation itself represented
            weakness.
          </p>

          <section className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              The deeper lesson
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white">
              Organizations often punish uncertainty before they understand it.
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Human systems reward speed, decisiveness, and confidence.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              But trustworthy AI sometimes requires the opposite behavior:
            </p>

            <ul className="mt-6 list-disc space-y-2 pl-6 text-slate-300">
              <li>slowing down,</li>
              <li>escalating uncertainty,</li>
              <li>admitting missing evidence,</li>
              <li>or refusing to answer entirely.</li>
            </ul>
          </section>

          <p>Months later, Beacon’s interface changed again.</p>

          <p>The warnings returned.</p>

          <p>Escalations increased.</p>

          <p>Executive dashboards became less impressive.</p>

          <p>Yet clinicians quietly trusted the system more.</p>

          <p>
            Because for the first time, the AI no longer pretended certainty it
            did not possess.
          </p>

          <p>
            Maya stood in the operations center one evening watching transfer
            requests stream across the wall displays.
          </p>

          <p>Another warning appeared:</p>

          <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-6">
            <p className="font-semibold text-amber-200">
              INSUFFICIENT CONTEXT FOR CONFIDENT RECOMMENDATION
            </p>
          </div>

          <p>Nobody complained this time.</p>

          <p className="text-xl font-bold text-white">The system hesitated.</p>

          <p className="text-xl font-bold text-white">
            For the first time in months, someone realized that might be
            intelligence.
          </p>
        </div>

        <section className="mt-16 rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Related Systems
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white">
            The architecture behind the story
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            This story pairs with the technical essay on weak-context detection
            and the Marginalia RAG Governance System project.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Link
              href="/writing/weak-context-detection-rag"
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 transition hover:border-cyan-400/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Technical Essay
              </p>

              <h3 className="mt-3 text-xl font-bold text-white">
                Why Weak Context Detection Matters in Enterprise RAG
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Explains evidence sufficiency, retrieval quality evaluation,
                refusal-first behavior, and uncertainty-aware AI governance.
              </p>

              <p className="mt-5 text-sm font-semibold text-cyan-300">
                Read essay →
              </p>
            </Link>

            <Link
              href="/projects/marginalia-rag-governance"
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 transition hover:border-cyan-400/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Related Project
              </p>

              <h3 className="mt-3 text-xl font-bold text-white">
                Marginalia RAG Governance System
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Demonstrates governed retrieval, weak-context detection,
                trust classification, refusal logic, and observability.
              </p>

              <p className="mt-5 text-sm font-semibold text-cyan-300">
                View system →
              </p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}