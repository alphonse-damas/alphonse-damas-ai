import Link from "next/link";
import { notFound } from "next/navigation";
import { essays } from "@/data/essays";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const orderedEssays = essays;

function getNextEssay(currentSlug: string) {
  const currentIndex = orderedEssays.findIndex(
    (essay) => essay.slug === currentSlug
  );

  if (currentIndex === -1) return null;

  return orderedEssays[currentIndex + 1] ?? null;
}

export default async function EssayPage({ params }: Props) {
  const { slug } = await params;

  const essay = essays.find((item) => item.slug === slug);
  const nextEssay = getNextEssay(slug);

  if (!essay) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <article className="mx-auto max-w-4xl px-6 py-12 md:px-10">
        <Link
          href="/writing"
          className="text-sm font-semibold text-cyan-300 hover:text-cyan-200"
        >
          ← Back to Writing
        </Link>

        <header className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            {essay.pillar}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            {essay.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {essay.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {essay.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <section className="mt-10 rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Reader Promise
          </p>

          <p className="mt-3 text-base leading-7 text-slate-200">
            This essay uses simple language and relatable examples to explain
            complex systems problems without requiring a technical background.
          </p>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <div
            className="
              max-w-none
              [&_h2]:mt-10
              [&_h2:first-child]:mt-0
              [&_h2]:text-2xl
              [&_h2]:font-bold
              [&_h2]:text-white
              [&_p]:mt-4
              [&_p]:text-base
              [&_p]:leading-8
              [&_p]:text-slate-300
            "
          >
            {essay.content}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Portfolio Connection
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            This essay supports the portfolio’s broader thesis: strong AI and
            analytics systems should not only produce outputs. They should help
            people understand evidence quality, uncertainty, operational risk,
            and decision readiness before action is taken.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={
                essay.pillar.includes("Pillar 1")
                  ? "/projects/marginalia-rag-governance"
                  : "/projects/commercial-decision-system"
              }
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              View Related System
            </Link>

            <Link
              href="/writing"
              className="rounded-full border border-slate-700 bg-slate-950/70 px-5 py-3 text-center text-sm font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              Back to Writing
            </Link>
          </div>
        </section>

        {nextEssay && (
          <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Continue Reading
            </p>

            <div className="mt-4">
              <Link
                href={`/writing/${nextEssay.slug}`}
                className="group block rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition hover:border-cyan-400/40 hover:bg-slate-900"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  {nextEssay.pillar}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white group-hover:text-cyan-300">
                  {nextEssay.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {nextEssay.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-cyan-300">
                  Read next essay →
                </p>
              </Link>
            </div>
          </section>
        )}
      </article>
    </main>
  );
}