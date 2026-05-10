export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white px-10 py-20">
      <section className="max-w-5xl mx-auto">
        <p className="text-blue-400 uppercase tracking-widest mb-4">
          Contact
        </p>

        <h1 className="text-5xl font-bold mb-6">
          Let’s Connect
        </h1>

        <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mb-16">
          I’m interested in opportunities involving enterprise analytics,
          applied AI, decision systems, experimentation, analytics governance,
          operational intelligence, and trustworthy AI infrastructure.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="space-y-8">

            <div className="border border-gray-800 bg-[#111827] rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">
                Professional Interests
              </h2>

              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li>• Enterprise AI & Decision Systems</li>
                <li>• Experimentation & Pricing Analytics</li>
                <li>• Analytics Governance & Observability</li>
                <li>• Forecasting & Operational Analytics</li>
                <li>• AI Reliability & Trust Infrastructure</li>
                <li>• Applied Machine Learning</li>
              </ul>
            </div>

            <div className="border border-gray-800 bg-[#111827] rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">
                Connect Online
              </h2>

              <div className="space-y-4">

                <a
                  href="https://www.linkedin.com/in/alphonse-damas-phd-609222212/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-400 hover:text-blue-300"
                >
                  LinkedIn →
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=alphonse.damas@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-400 hover:text-blue-300"
                >
                  Email →
                </a>

                <a
                  href="/resume/Alphonse_Damas_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-400 hover:text-blue-300"
                >
                  Download Resume →
                </a>

              </div>
            </div>

          </div>

          {/* Right Side */}
          <div className="border border-gray-800 bg-[#111827] rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Send a Message
            </h2>

            <form className="space-y-6">

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-[#0B1120] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-[#0B1120] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell me about your opportunity or project..."
                  className="w-full bg-[#0B1120] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 px-6 py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>
    </main>
  );
}