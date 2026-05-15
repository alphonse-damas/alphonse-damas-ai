"use client";

import React from "react";

export default function ContactPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent("Portfolio Contact Message");

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:alphonse.damas@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-[#020817] text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <h1 className="text-5xl font-bold mb-6">Let’s Connect</h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            I’m interested in opportunities involving enterprise analytics,
            applied AI, decision systems, experimentation, analytics
            governance, operational intelligence, and trustworthy AI
            infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-[#071224] border border-white/10 rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-6">
                Professional Interests
              </h2>

              <ul className="space-y-4 text-gray-300">
                <li>• Enterprise AI & Decision Systems</li>
                <li>• Experimentation & Pricing Analytics</li>
                <li>• Analytics Governance & Observability</li>
                <li>• Forecasting & Operational Analytics</li>
                <li>• AI Reliability & Trust Infrastructure</li>
                <li>• Applied Machine Learning</li>
              </ul>
            </div>

            <div className="bg-[#071224] border border-white/10 rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-6">Connect Online</h2>

              <div className="space-y-4 text-cyan-400">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-cyan-300 transition"
                >
                  LinkedIn →
                </a>

                <a
                  href="mailto:alphonse.damas@gmail.com"
                  className="block hover:text-cyan-300 transition"
                >
                  Email →
                </a>

                <a
                  href="/resume/Alphonse_Damas_Resume.pdf"
                  target="_blank"
                  className="block hover:text-cyan-300 transition"
                >
                  Download Resume →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#071224] border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full bg-[#020817] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full bg-[#020817] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  placeholder="Tell me about your opportunity or project..."
                  rows={6}
                  required
                  className="w-full bg-[#020817] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 transition text-white px-6 py-3 rounded-xl font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}