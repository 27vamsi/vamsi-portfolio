"use client";

import Navbar from "../components/Navbar";

export default function ExperiencePage() {
  const workExperience = [
    {
      title: "Backend & Blockchain Engineer",
      organization: "GlueX Protocol",
      dates: "Jan 2025 — Feb 2026",
      technologies: ["Python", "FastAPI", "AWS", "DynamoDB", "Ethereum", "Solidity", "asyncio"],
      sections: [
        {
          title: "DeFi Yield Service Infrastructure",
          responsibilities: [
            "Built and owned a yield aggregation engine spanning 35+ DeFi protocols, normalizing emissions, compounding schedules, reward inflation, utilization-based rate curves, and liquidity incentives into unified diluted APY, reward APY, borrow APY, and TVL metrics.",
            "Integrated CPAMM and CLAMM liquidity modules with swap functionalities and yield modeling including reserve dynamics, fee accrual, swap volume projections, tick-level liquidity concentration, and emission decay.",
            "Architected and deployed scalable AWS workloads (Lambda and EC2) supporting horizontal scaling, event-driven execution, and zero-downtime releases, with production-grade observability using structured JSON logs, CloudWatch metrics (p50–p99), dashboards, health checks, and alerts.",
            "Designed a low-latency multi-database architecture using DynamoDB (GSI-driven access) and Amazon Timestream, leveraging async I/O, batch writes, and cache-first query paths."
          ]
        },
        {
          title: "CoW Protocol Solver (Batch Auction Execution)",
          responsibilities: [
            "Contributed to batch auction settlement logic operating under strict 10–12 second block constraints, optimizing routing, liquidity traversal, and execution ordering before submission.",
            "Implemented pre-settlement simulation detecting slippage violations, liquidity exhaustion, revert scenarios, and deadline breaches prior to on-chain settlement.",
            "Integrated MEV-aware execution paths via private transaction builders and replay-safe ordering to reduce reverts."
          ]
        },
        {
          title: "Python Backend Architecture",
          responsibilities: [
            "Owned and shipped a production-grade async Python backend using FastAPI and asyncio, designing a greenfield async-first architecture enabling parallel execution, background tasks, and non-blocking I/O while handling thousands of concurrent requests with sub-10ms cached latency.",
            "Designed a high-performance multi-tier caching layer (8 specialized TTL/LRU caches), achieving 37.5% codebase reduction and 40% lower lock contention with consistently low tail latencies.",
            "Built fault-tolerant batch processing pipelines with deadlines, retries, timeout awareness, and per-task isolation, reliably processing 2000+ entities without cascading failures.",
            "Engineered async RPC orchestration layer coordinating hundreds of EVM calls per cycle using multicall batching, retry isolation, and rate-limit-aware scheduling."
          ]
        }
      ]
    },
    {
      title: "SDE Intern",
      organization: "Olive Technologies, Hyderabad",
      dates: "Nov 2023 — Jan 2024",
      technologies: ["React Native", "Node.js", "AWS EC2", "AWS Lambda", "OCR"],
      responsibilities: [
        "Contributed to the development of an internal inventory management platform using React.",
        "Prototyped a mobile stock management application using React Native to explore mobile-first inventory operations.",
        "Built and maintained Node.js REST APIs serving structured data with <300ms response times across datasets of 4.7K+ records.",
        "Investigated and resolved production runtime issues including cold starts and execution time limits, ensuring consistent application uptime."
      ]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-bg-deep text-gold-soft">
      <Navbar />

      <main className="flex-1">
        <section className="relative border-t border-neutral-900/80 bg-black/95 py-16 overflow-hidden">
          <div className="geometric-shape shape-circle top-20 right-20" />
          <div className="geometric-shape shape-line top-1/3 right-32" />
          <div className="geometric-shape shape-square bottom-40 left-10" />
          <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl space-y-4">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-gold-soft sm:text-5xl decorative-line">
                Work Experience
              </h1>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-soft/40 via-gold-soft/20 to-transparent" />

              <div className="space-y-12">
                {workExperience.map((exp, index) => (
                  <div key={index} className="relative pl-24">
                    {/* Timeline dot */}
                    <div className="absolute left-8 top-3 h-5 w-5 rounded-full border-2 border-gold-soft/60 bg-neutral-950" />

                    <div className="experience-card rounded-xl border border-neutral-800/50 bg-neutral-950/40 backdrop-blur-sm p-8 transition-all hover:border-neutral-700/50 hover:bg-neutral-950/60">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex-1">
                          <h3 className="font-display text-2xl font-semibold text-gold-soft">
                            {exp.title}
                          </h3>
                          <p className="mt-2 text-base text-gold-muted">{exp.organization}</p>
                          <p className="mt-3 text-sm font-medium text-gold-muted/80">
                            {exp.dates}
                          </p>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      {exp.sections ? (
                        <div className="mt-8 space-y-6">
                          {exp.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                              <h4 className="font-display text-lg font-semibold text-gold-soft mb-4">
                                {section.title}
                              </h4>
                              <ul className="space-y-3 text-base leading-relaxed text-gold-muted">
                                {section.responsibilities.map((responsibility, respIndex) => (
                                  <li key={respIndex} className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60 flex-shrink-0" />
                                    <span>{responsibility}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="mt-8 space-y-3 text-base leading-relaxed text-gold-muted">
                          {exp.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex} className="flex items-start gap-3">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60 flex-shrink-0" />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
