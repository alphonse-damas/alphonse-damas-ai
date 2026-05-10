"use client";

import { useMemo, useState } from "react";

type TrustReportPanelProps = {
  scenario: {
    question: string;
    trustLevel: string;
    decision: string;
    weakContext: boolean;
    chunks: {
      title: string;
      score: string;
      relevance: string;
    }[];
    log: string[];
  };
};

export default function TrustReportPanel({
  scenario,
}: TrustReportPanelProps) {
  const [expanded, setExpanded] = useState(false);
  const [exported, setExported] = useState(false);

  const averageScore =
    scenario.log
      .find((item) => item.startsWith("average_score="))
      ?.replace("average_score=", "") ?? "N/A";

  const requestId = useMemo(() => {
    return `REQ-${Math.floor(Math.random() * 9000 + 1000)}`;
  }, []);

  const timestamp = useMemo(() => {
    return new Date().toISOString();
  }, []);

  const reportStatus =
    scenario.trustLevel === "High"
      ? "PASS"
      : scenario.trustLevel === "Moderate"
      ? "WARNING"
      : "FAIL";

  const statusStyles =
    scenario.trustLevel === "High"
      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
      : scenario.trustLevel === "Moderate"
      ? "border-amber-500/30 bg-amber-500/10 text-amber-300"
      : "border-red-500/30 bg-red-500/10 text-red-300";

  const confidenceAdjustment =
    scenario.trustLevel === "High"
      ? {
          raw: "0.92",
          governed: "0.89",
        }
      : scenario.trustLevel === "Moderate"
      ? {
          raw: "0.81",
          governed: "0.63",
        }
      : {
          raw: "0.74",
          governed: "0.18",
        };

  const triggeredPolicies =
    scenario.trustLevel === "High"
      ? ["SAFE_RESPONSE_POLICY"]
      : scenario.trustLevel === "Moderate"
      ? ["WEAK_CONTEXT_POLICY"]
      : ["LOW_ALIGNMENT_POLICY", "UNSAFE_RESPONSE_POLICY"];

  function handleExport() {
    setExported(true);
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0B1120]">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left transition hover:bg-white/[0.02]"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Trust Report
          </p>

          <h4 className="mt-2 text-lg font-bold text-white">
            AI Governance Review
          </h4>

          <p className="mt-1 text-sm text-slate-400">
            Expand to inspect the policy trace, evidence, and audit record.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles}`}
          >
            {reportStatus}
          </span>

          <span className="text-sm text-slate-400">
            {expanded ? "−" : "+"}
          </span>
        </div>
      </button>

      {expanded && (
        <div className="border-t border-slate-800 px-4 pb-4 pt-4">
          <div className="space-y-4 text-sm text-slate-300">
            <div className="rounded-xl border border-slate-800 bg-black/20 p-3">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Query Metadata
              </p>

              <div className="mt-3 space-y-2">
                <p>
                  <span className="font-semibold text-slate-100">
                    Question:
                  </span>{" "}
                  {scenario.question}
                </p>

                <p>
                  <span className="font-semibold text-slate-100">
                    Retrieval Count:
                  </span>{" "}
                  {scenario.chunks.length}
                </p>

                <p>
                  <span className="font-semibold text-slate-100">
                    Average Score:
                  </span>{" "}
                  {averageScore}
                </p>

                <p>
                  <span className="font-semibold text-slate-100">
                    Request ID:
                  </span>{" "}
                  {requestId}
                </p>

                <p>
                  <span className="font-semibold text-slate-100">
                    Timestamp:
                  </span>{" "}
                  {timestamp}
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-black/20 p-3">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Governance Outcome
              </p>

              <div className="mt-3 space-y-2">
                <p>
                  <span className="font-semibold text-slate-100">
                    Trust Classification:
                  </span>{" "}
                  {scenario.trustLevel}
                </p>

                <p>
                  <span className="font-semibold text-slate-100">
                    Decision Mode:
                  </span>{" "}
                  {scenario.decision}
                </p>

                <p>
                  <span className="font-semibold text-slate-100">
                    Weak Context Flag:
                  </span>{" "}
                  {scenario.weakContext ? "TRUE" : "FALSE"}
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-black/20 p-3">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Confidence Adjustment
              </p>

              <div className="mt-3 space-y-2">
                <p>
                  <span className="font-semibold text-slate-100">
                    Raw Confidence:
                  </span>{" "}
                  {confidenceAdjustment.raw}
                </p>

                <p>
                  <span className="font-semibold text-slate-100">
                    Governed Confidence:
                  </span>{" "}
                  {confidenceAdjustment.governed}
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-black/20 p-3">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Retrieval Evidence
              </p>

              <div className="mt-3 space-y-2">
                {scenario.chunks.map((chunk) => (
                  <div
                    key={chunk.title}
                    className="flex items-center justify-between gap-3 border-b border-slate-800 pb-2 last:border-b-0 last:pb-0"
                  >
                    <span>{chunk.title}</span>

                    <span className="text-slate-400">
                      {chunk.score} · {chunk.relevance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-black/20 p-3">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Triggered Policies
              </p>

              <div className="mt-3 space-y-2">
                {triggeredPolicies.map((policy) => (
                  <div
                    key={policy}
                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 font-mono text-xs text-slate-300"
                  >
                    {policy}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-black/20 p-3">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Policy Evaluation
              </p>

              <ul className="mt-3 space-y-2">
                <li>• High trust threshold: average score ≥ 0.80</li>
                <li>• Moderate trust range: average score 0.55–0.79</li>
                <li>• Low trust range: average score &lt; 0.55</li>
                <li>• Weak-context trigger: any critical chunk &lt; 0.50</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-800 bg-black/20 p-3">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Audit Trace
              </p>

              <div className="mt-3 space-y-2 font-mono text-xs">
                <p>policy_version=rag-governance-v0.1</p>
                <p>report_type=trust_review</p>
                <p>decision_trace=enabled</p>
                <p>audit_status=recorded</p>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleExport}
                className="w-full rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-blue-400 hover:text-blue-300"
              >
                {exported ? "Trust Report Exported" : "Export Trust Report"}
              </button>

              {exported && (
                <p className="mt-3 text-sm text-slate-400">
                  Trust report export simulated. In production, this would
                  generate an auditable PDF or JSON record.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}