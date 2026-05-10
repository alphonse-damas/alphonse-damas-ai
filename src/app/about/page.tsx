export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white px-10 py-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          About
        </h1>

        <div className="space-y-8 text-xl text-gray-300 leading-relaxed">

          <p>
            I am an analytics and decision systems leader with experience
            across retail, financial services, healthcare, and operational analytics.
          </p>

          <p>
            My work focuses on building interpretable and operationally reliable
            systems that combine analytics, AI, governance, and observability.
          </p>

          <p>
            I am particularly interested in enterprise AI systems operating
            in regulated and high-stakes environments where trust,
            traceability, and uncertainty management matter.
          </p>

        </div>

      </div>
    </main>
  );
}