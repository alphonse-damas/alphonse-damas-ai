"use client";

import { useState } from "react";
import TrustReportPanel from "@/components/TrustReportPanel";

const scenarios = [
  {
    id: "strong",
    label: "Strong Context",
    question: "What caused the shipment delays in Q4?",
    trustLevel: "High",
    decision: "Answer",
    weakContext: false,
    responseTone: "high",
    summary:
      "The retrieved context is aligned, specific, and strong enough to support an answer.",
    systemResponse:
      "Shipment delays in Q4 were primarily driven by staffing shortages in two fulfillment centers combined with elevated carrier pickup delays during peak holiday volume.",
    reasons: [
      "Average retrieval score meets the high-trust threshold.",
      "No weak-context flag was triggered.",
      "Retrieved evidence is aligned with the user question.",
    ],
    chunks: [
      {
        title: "Warehouse staffing report",
        score: "0.91",
        relevance: "Strong",
        text: "Q4 delays were linked to temporary staffing shortages in two fulfillment centers.",
      },
      {
        title: "Carrier performance summary",
        score: "0.87",
        relevance: "Strong",
        text: "Carrier pickup delays increased during peak holiday volume.",
      },
      {
        title: "Order volume trend",
        score: "0.82",
        relevance: "Strong",
        text: "Order volume exceeded forecast during the final three weeks of Q4.",
      },
    ],
    log: [
      "retrieval_count=3",
      "average_score=0.87",
      "weak_context_flag=false",
      "trust_classification=high",
      "response_mode=answer",
      "policy_version=rag-governance-v0.1",
      "audit_status=recorded",
    ],
  },
  {
    id: "mixed",
    label: "Mixed Context",
    question: "What caused the shipment delays in Q4?",
    trustLevel: "Moderate",
    decision: "Qualified Answer",
    weakContext: true,
    responseTone: "moderate",
    summary:
      "Some retrieved context is useful, but one source is weakly aligned. The system should answer carefully and qualify its confidence.",
    systemResponse:
      "Available evidence suggests staffing shortages and carrier delays contributed to shipment delays. However, some retrieved context was weakly aligned, so the system cannot fully verify all contributing factors.",
    reasons: [
      "Average retrieval score falls in the moderate-trust range.",
      "One retrieved chunk falls below the weak-context threshold.",
      "The system can answer, but should qualify its confidence.",
    ],
    chunks: [
      {
        title: "Warehouse staffing report",
        score: "0.84",
        relevance: "Useful",
        text: "Staffing shortages were reported in two fulfillment centers.",
      },
      {
        title: "Carrier performance summary",
        score: "0.78",
        relevance: "Useful",
        text: "Carrier delays were elevated during peak shipping weeks.",
      },
      {
        title: "Inventory policy note",
        score: "0.43",
        relevance: "Weak",
        text: "Inventory policy changes affected how some items were categorized.",
      },
    ],
    log: [
      "retrieval_count=3",
      "average_score=0.68",
      "weak_context_flag=true",
      "trust_classification=moderate",
      "response_mode=qualified_answer",
      "policy_version=rag-governance-v0.1",
      "audit_status=recorded",
    ],
  },
  {
    id: "weak",
    label: "Weak Context",
    question: "What caused the shipment delays in Q4?",
    trustLevel: "Low",
    decision: "Refuse",
    weakContext: true,
    responseTone: "low",
    summary:
      "The retrieved context is too weak or unrelated to support a reliable answer. The safer behavior is to refuse or request better context.",
    systemResponse:
      "The retrieved context is not strong enough to support a reliable answer. Please refine the question or provide additional operational context.",
    reasons: [
      "Average retrieval score falls below the low-trust threshold.",
      "All retrieved chunks are weakly aligned with the question.",
      "The system should refuse rather than produce an unsupported answer.",
    ],
    chunks: [
      {
        title: "Marketing calendar",
        score: "0.39",
        relevance: "Weak",
        text: "The marketing team launched several campaigns during Q4.",
      },
      {
        title: "Product taxonomy note",
        score: "0.34",
        relevance: "Weak",
        text: "Product categories were renamed for reporting consistency.",
      },
      {
        title: "Holiday homepage test",
        score: "0.29",
        relevance: "Weak",
        text: "The homepage layout was tested during the holiday season.",
      },
    ],
    log: [
      "retrieval_count=3",
      "average_score=0.34",
      "weak_context_flag=true",
      "trust_classification=low",
      "response_mode=refuse",
      "policy_version=rag-governance-v0.1",
      "audit_status=recorded",
    ],
  },
];

export default function TrustFlowSimulation() {
  const [selectedScenarioId, setSelectedScenarioId] = useState("mixed");

  const scenario =
    scenarios.find((item) => item.id === selectedScenarioId) ?? scenarios[1];

  const responseStyles = {
    high: "border-emerald-500/30 bg-emerald-500/10",
    moderate: "border-amber-500/30 bg-amber-500/10",
    low: "border-red-500/30 bg-red-500/10",
  };

  return (
    <section
      id="trust-flow"
      className="scroll-mt-24 mx-auto max-w-6xl px-6 py-14 md:py-16"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          Trust Flow Simulation
        </p>

        <h2 className="mt-4 text-3xl font-bold">
          See how retrieval quality changes system behavior.
        </h2>

        <p className="mt-5 text-slate-300">
          This simulation shows how the same user question can produce
          different system behavior depending on retrieval quality. The purpose
          is not to make the system answer every question. The purpose is to
          decide when it is safe to answer.
        </p>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-950 p-4 transition-all duration-300 md:p-5">
        <div className="flex flex-wrap gap-3">
          {scenarios.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedScenarioId(item.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                selectedScenarioId === item.id
                  ? "bg-blue-500 text-white shadow-sm shadow-blue-500/20"
                  : "border border-slate-700 text-slate-300 hover:border-blue-400 hover:text-blue-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-[#0B1120] p-4 transition-all duration-300">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            User Question
          </p>

          <p className="mt-3 text-xl font-semibold text-white">
            {scenario.question}
          </p>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="text-xl font-semibold">Retrieved Context</h3>

            <div className="mt-4 space-y-3">
              {scenario.chunks.map((chunk) => (
                <div
                  key={chunk.title}
                  className="rounded-2xl border border-slate-800 bg-[#0B1120] p-4 transition-all duration-300 hover:border-slate-700"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h4 className="font-semibold text-white">
                      {chunk.title}
                    </h4>

                    <div className="flex gap-2 text-xs font-semibold">
                      <span className="rounded-full border border-slate-700 px-3 py-1 text-slate-300">
                        score {chunk.score}
                      </span>

                      <span className="rounded-full border border-slate-700 px-3 py-1 text-slate-300">
                        {chunk.relevance}
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {chunk.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-slate-800 bg-[#0B1120] p-4 transition-all duration-300 hover:border-slate-700">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Weak Context
                </p>

                <p className="mt-3 text-xl font-bold">
                  {scenario.weakContext ? "Detected" : "Not Detected"}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-[#0B1120] p-4 transition-all duration-300 hover:border-slate-700">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Trust Classification
                </p>

                <p className="mt-3 text-xl font-bold">{scenario.trustLevel}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0B1120] p-4 transition-all duration-300 hover:border-slate-700">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Policy Thresholds
              </p>

              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-slate-100">
                    High Trust:
                  </span>{" "}
                  average score ≥ 0.80
                </p>

                <p>
                  <span className="font-semibold text-slate-100">
                    Moderate Trust:
                  </span>{" "}
                  average score 0.55–0.79
                </p>

                <p>
                  <span className="font-semibold text-slate-100">
                    Low Trust:
                  </span>{" "}
                  average score &lt; 0.55
                </p>

                <p>
                  <span className="font-semibold text-slate-100">
                    Weak Context Trigger:
                  </span>{" "}
                  any critical chunk &lt; 0.50
                </p>
              </div>
            </div>

            <div
              className={`rounded-2xl border p-4 transition-all duration-300 ${
                responseStyles[
                  scenario.responseTone as keyof typeof responseStyles
                ]
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-200">
                Governed System Output
              </p>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Decision
                </p>

                <p className="mt-2 text-xl font-bold text-slate-100">
                  {scenario.decision}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {scenario.summary}
                </p>
              </div>

              <div className="mt-4 border-t border-white/10 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Response
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-100">
                  {scenario.systemResponse}
                </p>
              </div>

              <div className="mt-4 border-t border-white/10 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Why this decision?
                </p>

                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  {scenario.reasons.map((reason) => (
                    <li key={reason}>• {reason}</li>
                  ))}
                </ul>
              </div>
            </div>

            <TrustReportPanel scenario={scenario} />

            <div className="rounded-2xl border border-slate-800 bg-black/30 p-4 font-mono text-sm text-slate-300 transition-all duration-300 hover:border-slate-700">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Observability Log
              </p>

              <div className="space-y-2">
                {scenario.log.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}