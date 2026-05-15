"use client";

import React from "react";

const emailAddress = "alphonse.damas@gmail.com";
const linkedInUrl = "https://www.linkedin.com/in/alphonse-damas-phd-609222212/";

export default function ContactPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    const subject = encodeURIComponent("Portfolio Contact Message");

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-[#020817] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h1 className="mb-6 text-5xl font-bold">Let’s Connect</h1>

          <p className="text-lg leading-relaxed text-gray-300">
            I’m interested in opportunities involving enterprise analytics,
            applied AI, decision systems, experimentation, analytics governance,
            operational intelligence, and trustworthy AI infrastructure.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-[#071224] p-8">
              <h2 className="mb-6 text-3xl font-bold">
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

            <div className="rounded-3xl border border-white/10 bg-[#071224] p-8">
              <h2 className="mb-6 text-3xl font-bold">Connect Online</h2>

              <div className="space-y-4 text-cyan-400">
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition hover:text-cyan-300"
                >
                  LinkedIn →
                </a>

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition hover:text-cyan-300"
                >
                  Email via Gmail →
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  className="block transition hover:text-cyan-300"
                >
                  Email via default mail app →
                </a>

                <a
                  href="/resume/Alphonse_Damas_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition hover:text-cyan-300"
                >
                  Download Resume →
                </a>
              </div>

              <p className="mt-8 text-sm leading-6 text-gray-400">
                Direct email:{" "}
                <span className="font-semibold text-gray-300">
                  {emailAddress}
                </span>
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#071224] p-8">
            <h2 className="mb-6 text-3xl font-bold">Send a Message</h2>

            <p className="mb-6 text-sm leading-6 text-gray-400">
              This form opens a pre-filled Gmail message in a new tab. You can
              review and send it from your email account.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#020817] px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#020817] px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Message
                </label>

                <textarea
                  name="message"
                  placeholder="Tell me about your opportunity or project..."
                  rows={6}
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#020817] px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                Open Email Draft
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}