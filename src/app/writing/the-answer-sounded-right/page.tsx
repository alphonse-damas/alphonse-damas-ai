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
          Companion Story
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          The Answer Sounded Right
        </h1>

        <p className="mt-5 text-xl leading-8 text-slate-300">
          A fictional case study about confidence, weak retrieval, and quiet AI
          failure.
        </p>

        <div className="mt-10 space-y-6 text-base leading-8 text-slate-300">
          <p>Sarah Mitchell almost ignored the warning.</p>

          <p>
            The message appeared in a small gray box at the bottom of her
            screen:
          </p>

          <p className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 font-semibold text-cyan-300">
            AI Response Generated Successfully.
          </p>

          <p>That was the important part, according to management.</p>

          <p>
            Three months earlier, the insurance company had rolled out its new
            AI claims assistant, a system designed to help agents process
            customer questions faster. Executives described it as
            transformational.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Faster response times.</li>
            <li>Lower operating costs.</li>
            <li>Improved customer experience.</li>
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

          <p>People called after some terrible interruption to ordinary life.</p>

          <p>
            The AI system — internally nicknamed “Atlas” — was supposed to help
            agents quickly interpret policy language. Instead of manually
            searching through hundreds of pages of documentation, employees
            could simply type a question.
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
            Burst pipe. Second-floor bathroom. Water damage through the ceiling.
            Hardwood floors ruined.
          </p>

          <p>Daniel sounded exhausted.</p>

          <p>
            “You’re the fourth person I’ve talked to,” he said. “Can someone
            just tell me if this is covered?”
          </p>

          <p>Sarah opened Atlas.</p>

          <p>
            The interface looked deceptively simple: a blinking cursor beneath
            the sentence:
          </p>

          <p className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 font-semibold text-white">
            Ask anything.
          </p>

          <p>She typed:</p>

          <p className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-200">
            Does homeowner policy cover water damage from burst bathroom pipe
            causing floor and ceiling damage?
          </p>

          <p>Atlas processed for a moment.</p>

          <p>Then the answer appeared.</p>

          <div className="rounded-3xl border border-cyan-400/30 bg-slate-900/80 p-6">
            <p className="font-bold text-cyan-300">Coverage Recommendation:</p>

            <p className="mt-3">
              Policy likely covers sudden and accidental water discharge events,
              including pipe failures.
            </p>

            <p className="mt-5 font-bold text-cyan-300">Confidence:</p>

            <p className="mt-3">High</p>

            <p className="mt-5 font-bold text-cyan-300">Supporting Sources:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Water Damage Policy Reference</li>
              <li>Residential Flood Event Guidelines</li>
              <li>Property Loss Coverage Summary</li>
            </ul>

            <p className="mt-5 font-bold text-cyan-300">Suggested Response:</p>

            <p className="mt-3">
              Customer should qualify for standard water damage coverage pending
              inspection.
            </p>
          </div>

          <p>Sarah felt relief.</p>

          <p>The system sounded certain.</p>

          <p>
            The words “Confidence: High” reassured her more than she realized.
          </p>

          <p>She relayed the information to Daniel.</p>

          <p>For the first time during the call, he sounded calmer.</p>

          <p>“Thank God,” he said quietly.</p>

          <p className="text-xl font-bold text-white">
            Two weeks later, the claim was denied.
          </p>

          <p>The problem was subtle.</p>

          <p>The customer’s policy did cover burst pipes.</p>

          <p>
            But not if the pipe failure resulted from long-term deferred
            maintenance.
          </p>

          <p>An exclusion added during a policy revision eighteen months earlier.</p>

          <p>Atlas had missed it entirely.</p>

          <p>The retrieval system had pulled:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>an older general policy document,</li>
            <li>a flood reference guide,</li>
            <li>and a regional claims summary.</li>
          </ul>

          <p>
            But it failed to retrieve the updated exclusion document stored in a
            separate internal database.
          </p>

          <p>No alarms triggered.</p>

          <p>No red warning messages appeared.</p>

          <p>
            The system simply answered using whatever information it had managed
            to find.
          </p>

          <p>
            And because the response sounded polished, everyone trusted it.
          </p>

          <p>Including Sarah.</p>

          <p>The escalation meeting happened the following Monday.</p>

          <p>
            Ten people crowded into a conference room with glass walls and
            artificial plants. A dashboard glowed on the screen.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>AI Adoption Metrics.</li>
            <li>Response Time Improvements.</li>
            <li>Customer Satisfaction Scores.</li>
            <li>Operational Efficiency Gains.</li>
          </ul>

          <p>The Vice President of Claims pointed toward the charts proudly.</p>

          <p>“Average handling time is down twenty-three percent.”</p>

          <p>Nobody mentioned Daniel Reeves until Sarah spoke.</p>

          <p>“The customer says we misled him.”</p>

          <p>Silence.</p>

          <p>One of the engineers adjusted his glasses.</p>

          <p>“The model hallucinated?” someone asked.</p>

          <p>
            “No,” the engineer replied carefully. “Technically, the language
            generation was fine.”
          </p>

          <p>Sarah frowned.</p>

          <p>“What does that mean?”</p>

          <p>The engineer hesitated.</p>

          <p>“It answered confidently using incomplete retrieval.”</p>

          <p>The room remained silent.</p>

          <p>Most people did not understand the sentence.</p>

          <p>Sarah understood only part of it.</p>

          <p>
            That night, unable to sleep, Sarah logged back into the system from
            home.
          </p>

          <p>She opened the original interaction.</p>

          <p>For the first time, she looked beyond the answer itself.</p>

          <p>She examined the retrieved documents.</p>

          <p>
            Three sources.
            <br />
            None containing the exclusion.
          </p>

          <p>
            The AI had not actually found the most important information.
          </p>

          <p>
            It simply constructed the best answer it could from weak material.
          </p>

          <p>
            Like a student bluffing through an exam question after reading only
            half the chapter.
          </p>

          <p>The next morning, Sarah visited Ethan from the internal AI team.</p>

          <p>
            His office was buried beneath cables, monitors, and half-empty
            coffee cups.
          </p>

          <p>“I need you to explain something to me,” she said.</p>

          <p>Ethan swiveled toward her.</p>

          <p>“Okay.”</p>

          <p>
            “When Atlas doesn’t know something… why doesn’t it just say that?”
          </p>

          <p>Ethan gave a tired smile.</p>

          <p>“That’s harder than people think.”</p>

          <p>He pulled up a diagram on his screen.</p>

          <p>
            “Most people think the AI is the important part,” he said. “But
            retrieval is usually the real problem.”
          </p>

          <p>Sarah stared blankly.</p>

          <p>
            Ethan leaned back. “Imagine you hire the smartest lawyer in the
            world,” he said. “But before every case, someone hands them random
            pages from random law books.”
          </p>

          <p>“That’s retrieval?”</p>

          <p>“Exactly.”</p>

          <p>“And the AI?”</p>

          <p>“The lawyer trying to make sense of whatever pages it received.”</p>

          <p>Sarah folded her arms.</p>

          <p>“So Atlas never actually understood the policy?”</p>

          <p>“It understood the documents it retrieved.”</p>

          <p>“But the important document was missing.”</p>

          <p>“Right.”</p>

          <p>She sat quietly for a moment.</p>

          <p>“Then why mark the answer high confidence?”</p>

          <p>Ethan exhaled slowly.</p>

          <p>
            “Because confidence often measures how fluent the answer sounds. Not
            whether the system retrieved the right evidence.”
          </p>

          <p>The sentence unsettled her.</p>

          <p>Over the following weeks, Sarah noticed things she had ignored before.</p>

          <p>Atlas almost never admitted uncertainty.</p>

          <p>Even weak answers sounded polished.</p>

          <p>Even partial answers sounded complete.</p>

          <p>Even missing information sounded authoritative.</p>

          <p>The system failed gracefully.</p>

          <p>And that made it dangerous.</p>

          <p>One afternoon, she tested it herself.</p>

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

          <p className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-200">
            Relevant policy updates may not have been retrieved. Human review
            recommended.
          </p>

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
      </article>
    </main>
  );
}