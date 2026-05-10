import Image from "next/image";
import Link from "next/link";

const flagshipSystems = [
  {
    pillar: "Pillar 1",
    title: "Marginalia RAG Governance System",
    description:
      "A governed AI infrastructure demo focused on weak-context detection, trust classification, refusal-first behavior, confidence adjustment, and observability.",
    href: "/projects/marginalia-rag-governance",
  },
  {
    pillar: "Pillar 2",
    title: "Marginalia Commercial Decision System",
    description:
      "A commercial decision intelligence platform for pricing simulation, experimentation review, customer tradeoff analysis, and executive recommendation synthesis.",
    href: "/projects/commercial-decision-system",
  },
];

const essays = [
  {
    title: "Why Most RAG Systems Fail Quietly",
    href: "/writing/why-rag-systems-fail-quietly",
    description:
      "Why AI systems can sound confident even when working with weak or incomplete information.",
  },
  {
    title: "Correlation Is Not a Business Strategy",
    href: "/writing/correlation-is-not-a-business-strategy",
    description:
      "Why strong-looking metrics can still lead companies toward poor strategic decisions.",
  },
  {
    title: "Why Pricing Experiments Often Mislead Companies",
    href: "/writing/why-pricing-experiments-mislead-companies",
    description:
      "How average results can hide customer-level risk and long-term business tradeoffs.",
  },
];

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-5xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Enterprise AI Governance · Analytics · Decision Systems
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Building trustworthy AI and decision systems for enterprise
            environments.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            I design analytics and AI systems that help organizations understand
            evidence quality, uncertainty, operational risk, and decision
            readiness before action is taken.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="rounded-full bg-cyan-400 px-8 py-4 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Flagship Systems
            </Link>

            <Link
              href="/writing"
              className="rounded-full border border-slate-700 px-8 py-4 text-center text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Read Essays
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3 md:px-10">
          <ValueCard
            title="Governance by Design"
            body="Systems should expose uncertainty, evidence quality, and risk before producing recommendations."
          />

          <ValueCard
            title="Decision-Centered AI"
            body="The goal is not just prediction. The goal is better operational judgment under uncertainty."
          />

          <ValueCard
            title="Enterprise Reliability"
            body="Built around observability, traceability, refusal-first behavior, and executive-ready communication."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Flagship Systems
          </p>

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Two enterprise systems demonstrating how I think, build, and
            communicate.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            These projects are not standalone demos. They are connected examples
            of governed AI infrastructure, commercial decision intelligence,
            experimentation, observability, and executive decision support.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {flagshipSystems.map((system) => (
            <Link
              key={system.title}
              href={system.href}
              className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 transition hover:border-cyan-400/40 hover:bg-slate-900 md:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                {system.pillar}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white transition group-hover:text-cyan-200 md:text-3xl">
                {system.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {system.description}
              </p>

              <p className="mt-6 text-sm font-semibold text-cyan-300">
                View system →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Writing & Insights
            </p>

            <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
              Plain-language essays that explain the systems behind the work.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              The writing layer makes the technical work accessible to
              nontechnical leaders, recruiters, and business stakeholders.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {essays.map((essay) => (
              <Link
                key={essay.title}
                href={essay.href}
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 transition hover:border-cyan-400/40 hover:bg-slate-900"
              >
                <h3 className="text-xl font-semibold text-white">
                  {essay.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {essay.description}
                </p>

                <p className="mt-5 text-sm font-semibold text-cyan-300">
                  Read essay →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
          <div className="relative mx-auto h-[320px] w-full max-w-[320px] overflow-hidden rounded-3xl border border-slate-800 shadow-2xl shadow-black/30 lg:mx-0">
            <Image
              src="/img/headshot.png"
              alt="Alphonse Damas"
              fill
              sizes="(max-width: 768px) 320px, 320px"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              About
            </p>

            <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
              Senior analytics and AI systems leader focused on trustworthy
              decision infrastructure.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              My work sits at the intersection of enterprise analytics, AI
              governance, experimentation, pricing intelligence, operational
              decision systems, and executive communication.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <StatCard label="Years Experience" value="20+" />
              <StatCard label="Enterprise Background" value="Fortune 500" />
              <StatCard label="Core Focus" value="Decision Systems" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ValueCard({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-400">{body}</p>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <p className="text-3xl font-bold text-cyan-300">{value}</p>
      <p className="mt-2 text-sm font-semibold text-slate-300">{label}</p>
    </div>
  );
}