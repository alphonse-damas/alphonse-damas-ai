export const essays = [
  {
    title: "Why Most RAG Systems Fail Quietly",
    slug: "why-rag-systems-fail-quietly",
    pillar: "Pillar 1 — Governed AI Infrastructure",
    description:
      "Why AI systems can appear confident while operating on weak or incomplete evidence.",
    tags: ["RAG", "weak context", "confidence scoring", "AI governance"],
    content: (
      <>
        <h2>The Simple Problem</h2>
        <p>
          RAG stands for retrieval-augmented generation. In simple terms, it
          means an AI system first looks up information, then uses that
          information to answer a question.
        </p>

        <p>
          The danger is that the final answer may sound confident even when the
          information underneath it is weak, incomplete, outdated, or only
          loosely related to the question.
        </p>

        <h2>A Relatable Example</h2>
        <p>
          Imagine asking a very smart assistant to answer a question using a
          messy filing cabinet. If the assistant pulls the wrong folder, the
          final answer may still sound polished — but the foundation is weak.
        </p>

        <p>
          That is the quiet failure problem in many RAG systems. The system may
          not obviously crash. It may simply produce a smooth answer based on
          weak evidence.
        </p>

        <h2>Why This Fails Quietly</h2>
        <p>
          These systems often fail quietly because the user only sees the final
          answer. They may not see whether the system retrieved strong evidence,
          weak evidence, or barely relevant evidence.
        </p>

        <p>
          To a nontechnical user, the answer may feel authoritative. But behind
          the scenes, the system may have relied on poor context.
        </p>

        <h2>What Better Systems Should Do</h2>
        <p>
          A better system should evaluate the quality of the information before
          answering. If the evidence is strong, it can answer directly. If the
          evidence is mixed, it should qualify the answer. If the evidence is
          weak, it should refuse or ask for more information.
        </p>

        <p>
          That is not a weakness. That is responsible system behavior.
        </p>

        <h2>The Governance Lesson</h2>
        <p>
          The key lesson is simple: confidence should depend on evidence
          quality.
        </p>

        <p>
          An AI system should not only generate answers. It should explain
          whether the information behind the answer is strong enough to trust.
        </p>
      </>
    ),
  },

  {
    title: "Correlation Is Not a Business Strategy",
    slug: "correlation-is-not-a-business-strategy",
    pillar: "Pillar 2 — Commercial Decision Intelligence",
    description:
      "Why strong-looking metrics can still lead companies toward poor strategic decisions.",
    tags: [
      "causal inference",
      "experimentation",
      "pricing analytics",
      "decision systems",
    ],
    content: (
      <>
        <h2>The Simple Problem</h2>
        <p>
          Correlation means two things move together. Causation means one thing
          actually caused the other.
        </p>

        <p>
          Businesses often confuse the two. That can lead to expensive decisions
          based on misleading patterns.
        </p>

        <h2>A Relatable Example</h2>
        <p>
          Imagine a store notices that umbrella sales and raincoat sales rise on
          the same days. That does not mean umbrellas cause raincoat sales. It
          usually means both are responding to the same underlying condition:
          rain.
        </p>

        <p>
          Business data can create the same trap. Two numbers may move together,
          but that does not prove one caused the other.
        </p>

        <h2>Why This Matters</h2>
        <p>
          Suppose a company sees that customers who receive discount emails buy
          more products. It may assume the emails caused the extra purchases.
        </p>

        <p>
          But what if those customers were already loyal? What if they were
          going to buy anyway? In that case, the company may be giving discounts
          to people who did not need them.
        </p>

        <h2>What Better Systems Should Do</h2>
        <p>
          Better systems separate signal from assumption. They ask whether the
          business action actually caused the outcome, or whether the outcome
          would have happened anyway.
        </p>

        <p>
          That is why experiments, control groups, and careful comparison
          matter.
        </p>

        <h2>The Decision Lesson</h2>
        <p>
          The goal is not just to find patterns. The goal is to understand which
          actions are worth taking.
        </p>

        <p>
          A business strategy should be based on evidence that an intervention
          changes outcomes, not just on metrics that appear to move together.
        </p>
      </>
    ),
  },

  {
    title: "Why Pricing Experiments Often Mislead Companies",
    slug: "why-pricing-experiments-mislead-companies",
    pillar: "Pillar 2 — Commercial Decision Intelligence",
    description:
      "How pricing experiments can create misleading signals when customer segments respond differently.",
    tags: ["A/B testing", "elasticity", "customer segmentation", "governance"],
    content: (
      <>
        <h2>The Simple Problem</h2>
        <p>
          Pricing experiments test what happens when a company changes price for
          one group and compares the outcome to another group.
        </p>

        <p>
          The problem is that the average result can hide very different
          reactions across customer segments.
        </p>

        <h2>A Relatable Example</h2>
        <p>
          Imagine a restaurant raises prices and total revenue goes up. On the
          surface, the decision looks smart.
        </p>

        <p>
          But if loyal customers begin visiting less often, the short-term gain
          may hide a long-term problem.
        </p>

        <h2>Why Average Results Can Mislead</h2>
        <p>
          Suppose a streaming company raises the monthly price. Premium users
          may stay because they value the service. Budget users may cancel
          because the new price feels too high.
        </p>

        <p>
          If the premium users generate enough revenue, the test may look
          positive overall. But underneath the average, the company may be losing
          an important customer group.
        </p>

        <h2>What Better Systems Should Do</h2>
        <p>
          Better pricing systems should examine revenue, margin, conversion,
          retention, and segment-level behavior together.
        </p>

        <p>
          They should not only ask whether revenue increased. They should ask
          whether the increase is durable, fair, and strategically safe.
        </p>

        <h2>The Governance Lesson</h2>
        <p>
          A pricing experiment should not automatically lead to a full rollout
          just because the top-line number looks good.
        </p>

        <p>
          Good decision systems recommend proceed, delay, controlled pilot, or
          additional testing based on evidence quality and customer risk.
        </p>
      </>
    ),
  },
];