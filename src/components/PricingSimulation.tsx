"use client";

import { useMemo, useState } from "react";

type RiskLevel = "Low" | "Moderate" | "Elevated" | "High";
type RecommendationStatus =
  | "Proceed"
  | "Limited Rollout"
  | "Delay"
  | "Insufficient Evidence"
  | "High Uncertainty";

export default function PricingSimulation() {
  const [priceChange, setPriceChange] = useState(8);
  const [elasticity, setElasticity] = useState(1.2);
  const [competitorPressure, setCompetitorPressure] = useState(35);
  const [demandShock, setDemandShock] = useState(5);
  const [retentionRisk, setRetentionRisk] = useState(30);
  const [premiumTargeting, setPremiumTargeting] = useState(true);

  const results = useMemo(() => {
    const baseRevenue = 100;
    const baseMargin = 28;
    const baseConversion = 12;

    const demandImpact =
      -priceChange * elasticity -
      competitorPressure * 0.04 +
      demandShock * 0.35 +
      (premiumTargeting ? 2.5 : 0);

    const revenueImpact = priceChange + demandImpact * 0.55;
    const marginImpact = priceChange * 0.48 + (premiumTargeting ? 1.4 : 0);
    const conversionImpact = demandImpact * 0.38;
    const churnScore =
      retentionRisk + priceChange * 1.4 + competitorPressure * 0.25;

    let riskLevel: RiskLevel = "Low";
    if (churnScore >= 75) riskLevel = "High";
    else if (churnScore >= 55) riskLevel = "Elevated";
    else if (churnScore >= 35) riskLevel = "Moderate";

    const uncertaintyScore =
      competitorPressure * 0.45 +
      retentionRisk * 0.35 +
      Math.abs(demandShock) * 0.8 +
      elasticity * 8;

    let evidenceQuality = "Strong";
    if (uncertaintyScore >= 75) evidenceQuality = "Weak";
    else if (uncertaintyScore >= 50) evidenceQuality = "Moderate";

    let confidence = 82 - uncertaintyScore * 0.45;
    if (premiumTargeting) confidence += 6;
    confidence = Math.max(22, Math.min(92, confidence));

    let recommendation: RecommendationStatus = "Proceed";

    if (uncertaintyScore >= 78) {
      recommendation = "High Uncertainty";
    } else if (confidence < 45) {
      recommendation = "Insufficient Evidence";
    } else if (riskLevel === "High") {
      recommendation = "Delay";
    } else if (riskLevel === "Elevated" || evidenceQuality === "Moderate") {
      recommendation = "Limited Rollout";
    }

    if (revenueImpact < 0 && marginImpact < 1) {
      recommendation = "Delay";
    }

    const executiveSummary = buildExecutiveSummary({
      recommendation,
      revenueImpact,
      marginImpact,
      conversionImpact,
      riskLevel,
      evidenceQuality,
      premiumTargeting,
    });

    return {
      revenueImpact,
      marginImpact,
      conversionImpact,
      churnScore,
      riskLevel,
      evidenceQuality,
      confidence,
      recommendation,
      executiveSummary,
    };
  }, [
    priceChange,
    elasticity,
    competitorPressure,
    demandShock,
    retentionRisk,
    premiumTargeting,
  ]);

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-black/30 md:p-8">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Interactive Pricing Simulation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
            Executive Pricing Intervention Model
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
            Adjust commercial assumptions and observe how the system updates
            revenue, margin, conversion risk, confidence, and recommendation
            status.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-200">
          Scenario ID: MCDS-PRC-0427
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <h3 className="text-lg font-semibold text-white">
            Scenario Controls
          </h3>

          <div className="mt-6 space-y-6">
            <Slider
              label="Price Change"
              value={priceChange}
              min={-20}
              max={20}
              step={1}
              suffix="%"
              onChange={setPriceChange}
            />

            <Slider
              label="Elasticity Sensitivity"
              value={elasticity}
              min={0.4}
              max={2.5}
              step={0.1}
              onChange={setElasticity}
            />

            <Slider
              label="Competitor Pressure"
              value={competitorPressure}
              min={0}
              max={100}
              step={5}
              suffix="/100"
              onChange={setCompetitorPressure}
            />

            <Slider
              label="Demand Shock"
              value={demandShock}
              min={-25}
              max={25}
              step={1}
              suffix="%"
              onChange={setDemandShock}
            />

            <Slider
              label="Retention Risk"
              value={retentionRisk}
              min={0}
              max={100}
              step={5}
              suffix="/100"
              onChange={setRetentionRisk}
            />

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium text-white">
                    Premium Segment Targeting
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Limits rollout to less price-sensitive customers.
                  </p>
                </div>

                <button
                  onClick={() => setPremiumTargeting(!premiumTargeting)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    premiumTargeting
                      ? "bg-cyan-400 text-slate-950"
                      : "bg-slate-800 text-slate-300"
                  }`}
                >
                  {premiumTargeting ? "Enabled" : "Disabled"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <MetricCard
              label="Projected Revenue"
              value={`${formatSigned(results.revenueImpact)}%`}
              description="Estimated net revenue change"
            />
            <MetricCard
              label="Margin Impact"
              value={`${formatSigned(results.marginImpact)}%`}
              description="Estimated margin contribution"
            />
            <MetricCard
              label="Conversion Impact"
              value={`${formatSigned(results.conversionImpact)}%`}
              description="Estimated customer conversion movement"
            />
            <MetricCard
              label="Confidence Score"
              value={`${Math.round(results.confidence)}%`}
              description="Governed confidence after uncertainty adjustment"
            />
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Executive Recommendation
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {results.recommendation}
                </h3>
              </div>

              <StatusBadge status={results.recommendation} />
            </div>

            <p className="mt-5 text-base leading-7 text-slate-300">
              {results.executiveSummary}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
            <h3 className="text-lg font-semibold text-white">
              Decision Governance Summary
            </h3>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <GovernanceRow
                label="Evidence Quality"
                value={results.evidenceQuality}
              />
              <GovernanceRow
                label="Intervention Risk"
                value={results.riskLevel}
              />
              <GovernanceRow
                label="Forecast Sensitivity"
                value={
                  competitorPressure > 60 || Math.abs(demandShock) > 15
                    ? "Elevated"
                    : "Moderate"
                }
              />
              <GovernanceRow
                label="Confidence Adjustment"
                value="Applied"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
            <h3 className="text-lg font-semibold text-white">
              Commercial Audit Trace
            </h3>

            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>Simulation ID: MCDS-PRC-0427</p>
              <p>Policy Version: commercial-decision-policy-v1.0</p>
              <p>Confidence Governance: Enabled</p>
              <p>Recommendation Traceability: Active</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  suffix = "",
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="font-medium text-slate-200">{label}</label>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-300">
          {value}
          {suffix}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full accent-cyan-400"
      />
    </div>
  );
}

function MetricCard({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </div>
  );
}

function GovernanceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-1 font-semibold text-white">{value}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: RecommendationStatus }) {
  const styles: Record<RecommendationStatus, string> = {
    Proceed: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
    "Limited Rollout": "border-cyan-400/40 bg-cyan-400/10 text-cyan-300",
    Delay: "border-amber-400/40 bg-amber-400/10 text-amber-300",
    "Insufficient Evidence":
      "border-orange-400/40 bg-orange-400/10 text-orange-300",
    "High Uncertainty": "border-red-400/40 bg-red-400/10 text-red-300",
  };

  return (
    <span
      className={`rounded-full border px-4 py-2 text-sm font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function formatSigned(value: number) {
  const rounded = value.toFixed(1);
  return value > 0 ? `+${rounded}` : rounded;
}

function buildExecutiveSummary({
  recommendation,
  revenueImpact,
  marginImpact,
  conversionImpact,
  riskLevel,
  evidenceQuality,
  premiumTargeting,
}: {
  recommendation: RecommendationStatus;
  revenueImpact: number;
  marginImpact: number;
  conversionImpact: number;
  riskLevel: RiskLevel;
  evidenceQuality: string;
  premiumTargeting: boolean;
}) {
  if (recommendation === "Proceed") {
    return `Simulation results indicate favorable revenue and margin movement with manageable customer risk. Evidence quality is ${evidenceQuality.toLowerCase()}, and the current intervention appears suitable for broader rollout under monitored conditions.`;
  }

  if (recommendation === "Limited Rollout") {
    return `Evidence suggests potential commercial upside, with projected revenue impact of ${formatSigned(
      revenueImpact
    )}% and margin impact of ${formatSigned(
      marginImpact
    )}%. However, ${riskLevel.toLowerCase()} customer risk supports a controlled rollout rather than full deployment.${
      premiumTargeting
        ? " Premium segment targeting improves recommendation stability."
        : ""
    }`;
  }

  if (recommendation === "Delay") {
    return `The pricing intervention shows elevated business risk relative to the current projected benefit. Conversion impact is estimated at ${formatSigned(
      conversionImpact
    )}%, suggesting that additional testing should occur before broader implementation.`;
  }

  if (recommendation === "Insufficient Evidence") {
    return `Current evidence is not strong enough to support a confident pricing decision. The system recommends additional experimentation before committing to a commercial rollout.`;
  }

  return `Projected outcomes are highly sensitive to uncertain market assumptions, including competitor pressure, demand instability, and retention risk. The system recommends delaying deployment until stronger evidence is available.`;
}