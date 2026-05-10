"use client";

import { useMemo, useState } from "react";

type PreferenceStatus =
  | "Strong Bundle Fit"
  | "Segment-Specific Fit"
  | "Price-Sensitive"
  | "Weak Preference Signal";

export default function PreferenceIntelligence() {
  const [priceLevel, setPriceLevel] = useState(55);
  const [premiumSupport, setPremiumSupport] = useState(true);
  const [aiFeatures, setAiFeatures] = useState(true);
  const [fastDelivery, setFastDelivery] = useState(false);
  const [bundleDiscount, setBundleDiscount] = useState(10);
  const [showUseCase, setShowUseCase] = useState(false);

  const results = useMemo(() => {
    const featureValue =
      (premiumSupport ? 18 : 0) +
      (aiFeatures ? 15 : 0) +
      (fastDelivery ? 10 : 0) +
      bundleDiscount * 0.8;

    const pricePenalty = priceLevel * 0.55;

    const preferenceScore = Math.max(
      0,
      Math.min(100, 48 + featureValue - pricePenalty)
    );

    const premiumSegmentAppeal = Math.min(
      100,
      preferenceScore + (premiumSupport ? 14 : 0) + (aiFeatures ? 10 : 0)
    );

    const budgetSegmentAppeal = Math.max(
      0,
      preferenceScore + bundleDiscount * 1.2 - priceLevel * 0.35
    );

    const retentionStability =
      premiumSupport && bundleDiscount >= 10 ? "Moderate" : "Limited";

    let status: PreferenceStatus = "Segment-Specific Fit";

    if (preferenceScore >= 72 && premiumSegmentAppeal >= 80) {
      status = "Strong Bundle Fit";
    } else if (priceLevel >= 70 && budgetSegmentAppeal < 45) {
      status = "Price-Sensitive";
    } else if (preferenceScore < 45) {
      status = "Weak Preference Signal";
    }

    return {
      preferenceScore,
      premiumSegmentAppeal,
      budgetSegmentAppeal,
      retentionStability,
      status,
    };
  }, [priceLevel, premiumSupport, aiFeatures, fastDelivery, bundleDiscount]);

  return (
    <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-black/30 md:p-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Customer Preference Intelligence
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          Product Tradeoff Simulation
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
          This module simulates how customers may trade off price, product
          features, service quality, and bundled value when evaluating an offer.
        </p>

        <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <h3 className="text-base font-semibold text-white">
            How to Read This Module
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Adjust the offer design controls, then watch how the preference
            scores and recommendation change. The basic flow is: business
            choices → customer response → segment differences → tradeoff
            recommendation.
          </p>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <ExplanationCard
              title="Business Choices"
              body="Price level, bundle discount, premium support, AI features, and priority access represent what the company chooses to include in the offer."
            />

            <ExplanationCard
              title="Customer Response"
              body="The preference scores estimate how strongly customers may respond to that offer after weighing cost against perceived value."
            />

            <ExplanationCard
              title="Segment Differences"
              body="Premium customers and budget customers may react differently. One group may value support and features, while another may care more about price."
            />
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <button
            onClick={() => setShowUseCase(!showUseCase)}
            className="flex w-full items-center justify-between gap-4 text-left"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Example Use Case
              </p>

              <h3 className="mt-1 text-base font-semibold text-white">
                {showUseCase
                  ? "Collapse use case explanation"
                  : "Expand to inspect the use case, scoring logic, and offer choices"}
              </h3>
            </div>

            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              {showUseCase ? "Collapse" : "Expand"}
            </span>
          </button>

          {showUseCase && (
            <div className="mt-5">
              <p className="text-sm leading-6 text-slate-400">
                Suppose a software company is testing a new paid plan. A{" "}
                <span className="font-semibold text-slate-200">
                  Price Level of 65/100
                </span>{" "}
                means the offer is positioned as relatively expensive, but not
                at the very top of the market. A{" "}
                <span className="font-semibold text-slate-200">
                  Bundle Discount of 10%
                </span>{" "}
                means customers receive a modest discount for buying the package
                instead of purchasing features separately.
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <DefinitionCard
                  title="Overall Preference Score"
                  body="A score like 38/100 means the total offer is not broadly attractive yet. Customers may see some value, but the price, feature mix, or discount may need adjustment."
                />

                <DefinitionCard
                  title="Premium Segment Appeal"
                  body="A score like 52/100 means premium customers see moderate value, especially if the offer includes support or advanced features."
                />

                <DefinitionCard
                  title="Budget Segment Appeal"
                  body="A score like 28/100 means price-sensitive customers are unlikely to respond strongly. The offer may feel too expensive relative to the value."
                />

                <DefinitionCard
                  title="Retention Stability"
                  body="Moderate means the offer may help keep some customers, but the company should still monitor churn risk before scaling the offer broadly."
                />

                <DefinitionCard
                  title="Premium Support Included"
                  body="This means the package includes higher-touch support. Premium customers may value this more than budget customers."
                />

                <DefinitionCard
                  title="AI Features / Priority Access"
                  body="Excluded means those benefits are not part of the current offer. Adding them may increase appeal, but could also increase cost."
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <h3 className="text-lg font-semibold text-white">
            Offer Design Controls
          </h3>

          <div className="mt-6 space-y-5">
            <TradeoffSlider
              label="Price Level"
              value={priceLevel}
              min={20}
              max={90}
              step={5}
              suffix="/100"
              onChange={setPriceLevel}
            />

            <TradeoffSlider
              label="Bundle Discount"
              value={bundleDiscount}
              min={0}
              max={30}
              step={5}
              suffix="%"
              onChange={setBundleDiscount}
            />

            <Toggle
              label="Premium Support"
              value={premiumSupport}
              onChange={setPremiumSupport}
            />

            <Toggle
              label="AI-Enhanced Features"
              value={aiFeatures}
              onChange={setAiFeatures}
            />

            <Toggle
              label="Fast Delivery / Priority Access"
              value={fastDelivery}
              onChange={setFastDelivery}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <PreferenceMetric
              label="Overall Preference Score"
              value={`${Math.round(results.preferenceScore)}/100`}
            />

            <PreferenceMetric
              label="Premium Segment Appeal"
              value={`${Math.round(results.premiumSegmentAppeal)}/100`}
            />

            <PreferenceMetric
              label="Budget Segment Appeal"
              value={`${Math.round(results.budgetSegmentAppeal)}/100`}
            />

            <PreferenceMetric
              label="Retention Stability"
              value={results.retentionStability}
            />
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Tradeoff Recommendation
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              {results.status}
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              {buildPreferenceSummary(results.status)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TradeoffSlider({
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

function Toggle({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-4">
      <p className="font-medium text-white">{label}</p>

      <button
        onClick={() => onChange(!value)}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
          value ? "bg-cyan-400 text-slate-950" : "bg-slate-800 text-slate-300"
        }`}
      >
        {value ? "Included" : "Excluded"}
      </button>
    </div>
  );
}

function PreferenceMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
      <p className="text-sm text-slate-400">{label}</p>

      <p className="mt-2 text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

function ExplanationCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
      <p className="font-semibold text-white">{title}</p>

      <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
    </div>
  );
}

function DefinitionCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
      <p className="font-semibold text-white">{title}</p>

      <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
    </div>
  );
}

function buildPreferenceSummary(status: PreferenceStatus) {
  if (status === "Strong Bundle Fit") {
    return "The offer shows strong preference alignment, especially among premium customers. This bundle appears suitable for controlled rollout with continued monitoring of price-sensitive segments.";
  }

  if (status === "Price-Sensitive") {
    return "Customer preference appears constrained by price. The system recommends either reducing price exposure, increasing bundle value, or limiting rollout to less price-sensitive segments.";
  }

  if (status === "Weak Preference Signal") {
    return "The current offer does not create a strong enough preference signal. Additional feature, pricing, or bundle adjustments are recommended before testing at scale.";
  }

  return "The offer appears promising for selected customer groups, but broad deployment should depend on segment-level validation and experimentation results.";
}