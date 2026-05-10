const architectureLayers = [
  {
    label: "Knowledge Layer",
    description: "Prepares source material for retrieval.",
    steps: ["Documents", "Chunking", "Embeddings", "Vector Store"],
  },
  {
    label: "Governance Layer",
    description: "Evaluates whether retrieved context is trustworthy.",
    steps: ["Retrieval Policy", "Weak-Context Detection", "Trust Classification"],
  },
  {
    label: "Decision Layer",
    description: "Determines whether to answer, qualify, or refuse.",
    steps: ["Prompt Builder", "Response Mode", "Refusal Logic"],
  },
  {
    label: "Observability Layer",
    description: "Creates a traceable record of system behavior.",
    steps: ["Trace Logs", "Trust Report", "Auditability"],
  },
];

export default function ArchitectureFlow() {
  return (
    <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-950 p-4 md:p-6">
      <div className="grid gap-4">
        {architectureLayers.map((layer, layerIndex) => (
          <div key={layer.label}>
            <div className="rounded-2xl border border-slate-800 bg-[#0B1120] p-4">
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Layer {layerIndex + 1}
                </p>

                <h3 className="mt-2 text-lg font-bold text-white">
                  {layer.label}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {layer.description}
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-4">
                {layer.steps.map((step, stepIndex) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="flex min-h-16 flex-1 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-slate-200">
                      {step}
                    </div>

                    {stepIndex < layer.steps.length - 1 && (
                      <div className="hidden text-slate-500 md:block">→</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {layerIndex < architectureLayers.length - 1 && (
              <div className="flex justify-center py-2 text-slate-500">↓</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}