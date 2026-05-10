export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white px-10 py-20">
      <section className="max-w-5xl mx-auto">
        <p className="text-blue-400 uppercase tracking-widest mb-4">
          Resume
        </p>

        <h1 className="text-5xl font-bold mb-6">
          Alphonse Damas, Ph.D.
        </h1>

        <p className="text-2xl text-gray-300 mb-8">
          Senior Data Scientist | Applied ML, Experimentation & Decision Systems
        </p>

        <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-4xl">
          Senior analytics and decision systems leader with 15+ years of
          experience developing predictive models, experimentation frameworks,
          and operational decision systems supporting customer behavior,
          pricing strategy, forecasting, operational optimization, and
          enterprise decision-making.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="/resume/Alphonse_Damas_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 px-6 py-4 rounded-xl font-semibold"
          >
            Download Resume
          </a>

          <a
            href="https://www.linkedin.com/in/alphonse-damas-phd-609222212/"
            target="_blank"
            className="inline-block border border-gray-700 hover:border-blue-400 px-6 py-4 rounded-xl font-semibold"
          >
            LinkedIn
          </a>
        </div>

        {/* Core Expertise */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Core Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Enterprise Analytics Leadership",
              "Applied Machine Learning",
              "Experimentation & Causal Analysis",
              "Decision Systems & Scenario Modeling",
              "Pricing & Elasticity Analytics",
              "Forecasting & Operational Analytics",
              "AI Governance & Observability",
              "Model Validation & Monitoring",
              "Customer & Behavioral Analytics",
              "Executive Stakeholder Communication",
            ].map((skill) => (
              <div
                key={skill}
                className="border border-gray-800 bg-[#111827] rounded-xl p-5 text-gray-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Professional Experience
          </h2>

          <div className="space-y-10">

            <div className="border border-gray-800 bg-[#111827] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">
                QVC — Senior Manager, Data Science
              </h3>

              <p className="text-blue-400 mb-6">
                Dallas, TX | Apr 2019 – Feb 2025
              </p>

              <ul className="space-y-4 text-gray-300 leading-relaxed list-disc pl-6">
                <li>
                  Led predictive modeling and operational decision systems
                  supporting customer behavior, fulfillment optimization,
                  forecasting, and enterprise performance.
                </li>

                <li>
                  Designed predictive models reducing customer churn by
                  approximately 50%, generating multi-million-dollar impact.
                </li>

                <li>
                  Developed optimization models improving supply-chain
                  efficiency, reducing packing time and shipping costs.
                </li>

                <li>
                  Partnered with cross-functional stakeholders to translate
                  analytical insights into operational decisions.
                </li>
              </ul>
            </div>

            <div className="border border-gray-800 bg-[#111827] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">
                FlexMiner Analytics — Senior Manager
              </h3>

              <p className="text-blue-400 mb-6">
                Dallas, TX | Jan 2016 – Apr 2019
              </p>

              <ul className="space-y-4 text-gray-300 leading-relaxed list-disc pl-6">
                <li>
                  Built scalable analytics platforms supporting automated
                  model development, reporting, and operational decision support.
                </li>

                <li>
                  Implemented governance controls improving execution reliability
                  and data-quality validation.
                </li>

                <li>
                  Delivered predictive analytics across operational KPIs,
                  improving client outcomes by approximately 43% on average.
                </li>
              </ul>
            </div>

            <div className="border border-gray-800 bg-[#111827] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">
                Aetna • Alliance Data • USAA
              </h3>

              <p className="text-blue-400 mb-6">
                Healthcare, Financial Services & Customer Analytics
              </p>

              <ul className="space-y-4 text-gray-300 leading-relaxed list-disc pl-6">
                <li>
                  Developed predictive analytics, pricing models,
                  behavioral segmentation, experimentation frameworks,
                  and operational decision-support systems.
                </li>

                <li>
                  Designed conjoint-analysis and survey-based experimental
                  research supporting pricing and product decisions.
                </li>

                <li>
                  Co-developed patented risk-mitigated certificate of deposit
                  product at USAA Bank.
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Education
          </h2>

          <div className="border border-gray-800 bg-[#111827] rounded-2xl p-8">
            <div className="mb-8">
              <p className="text-2xl font-semibold">
                PhD — Quantitative Psychology
              </p>

              <p className="text-gray-400 mt-2">
                University of Virginia
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-2xl font-semibold">
                BA — Sociology / Psychology
              </p>

              <p className="text-gray-400 mt-2">
                University of Richmond
              </p>
            </div>
          </div>
        </section>

        {/* Honors */}
        <section>
          <h2 className="text-3xl font-bold mb-8">
            Honors & Recognition
          </h2>

          <div className="border border-gray-800 bg-[#111827] rounded-2xl p-8">
            <ul className="space-y-4 text-gray-300 leading-relaxed list-disc pl-6">
              <li>
                Patent Holder — Risk-Mitigated Certificate of Deposit Product
                (USAA Bank, 2012)
              </li>

              <li>
                QVC — Leading with Purpose Award (2020)
              </li>

              <li>
                Aetna — Two-Time Hackathon Winner (2015)
              </li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}