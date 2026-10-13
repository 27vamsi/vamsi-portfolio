"use client";

import { useState } from "react";

// Only projects with a real public URL get a `code` link.
const PROJECTS = [
  {
    num: "01",
    cat: "infra",
    eyebrow: "Data Engineering",
    title: "Query Engine",
    what: "A SQL engine that queries Parquet files directly from cloud storage, without importing the data into a database first.",
    standout: "Scanned just 0.2% of the data using three layers of query optimization. Same answer, 99.8% less data scanned.",
    stack: "Python · Django · PyArrow · Polars · Celery · S3 / MinIO",
    code: "https://github.com/27vamsi/query-engine",
    live: "https://query-engine.vamsimarella.com/"
  },
  {
    num: "02",
    cat: "infra",
    eyebrow: "Cloud Infrastructure & Security",
    title: "VibeDeploy",
    what: "A deployment platform that automatically isolates each customer's data, tests for security gaps, and controls what AI agents can access.",
    standout: "200+ simulated attacks before every deploy. Even a forgotten database filter can't expose another customer's data.",
    stack: "Python · FastAPI · PostgreSQL RLS · AWS ECS · IAM · MCP · CDK",
    code: "https://github.com/27vamsi/vibedeploy",
    live: "http://console.15-135-203-192.sslip.io/"
  },
  {
    num: "03",
    cat: "infra",
    eyebrow: "Backend Infrastructure",
    title: "Feature Flags & Experimentation",
    what: "A system for rolling out features, running A/B experiments, and changing application behavior without redeploying code.",
    standout: "Sub-millisecond decisions, zero server calls per evaluation, and feature updates delivered in under a second.",
    stack: "Python · FastAPI · PostgreSQL · Redis · SSE · TypeScript",
    code: "https://github.com/27vamsi/Feature-Flags"
  },
  {
    num: "04",
    cat: "infra",
    eyebrow: "Quantitative Systems",
    title: "Adverse Selection Pipeline",
    what: "A research pipeline that measures how prices move against market makers after their orders get filled.",
    standout: "From raw exchange trades to a reproducible market-risk study, across six time horizons from 1 to 300 seconds.",
    stack: "Python · Polars · Parquet · WebSockets",
    code: "https://github.com/27vamsi/adverse-selection-pipeline"
  },
  {
    num: "05",
    cat: "infra",
    eyebrow: "Financial Infrastructure",
    title: "Multi-Exchange Trade Reconciliation",
    what: "Matches internal trades against actual exchange fills across Binance, Coinbase, and Kraken to detect missing, partial, or suspicious executions.",
    standout: "Database-enforced duplicate protection, replayable exchange events, and live discrepancy detection across three exchanges.",
    stack: "Python · FastAPI · PostgreSQL · SQLAlchemy · SSE · Next.js",
    code: "https://github.com/27vamsi/Trade-Reconciliation-Engine"
  },
  {
    num: "06",
    cat: "infra",
    eyebrow: "Real-Time Systems",
    title: "Multiplayer Game Server",
    what: "A real-time multiplayer game backend that handles matchmaking, move validation, disconnects, rematches, and leaderboards.",
    standout: "The server owns every move. Clients can't cheat by changing their local game state.",
    stack: "TypeScript · Nakama · WebSockets · PostgreSQL · React · Docker"
  },
  {
    num: "07",
    cat: "chain",
    eyebrow: "Blockchain Infrastructure",
    title: "CLAMM Tick Collector",
    what: "A Solidity system that reads liquidity distribution across concentrated-liquidity pools, including Uniswap V4-style protocols.",
    standout: "Gas-bounded liquidity scanning using bitmaps, bitwise math, and low-level Solidity assembly.",
    stack: "Solidity · EVM · CLAMM",
    code: "https://github.com/27vamsi/CLAMM-TICK-COLLECTOR"
  },
  {
    num: "08",
    cat: "chain",
    eyebrow: "Cross-Chain Infrastructure",
    title: "Cross-Chain ERC20 Bridge",
    what: "Moves tokens between two blockchains by locking tokens on one chain and issuing their equivalent on another.",
    standout: "Validator-signed transfers with nonce-based replay protection, verified across the complete two-chain lifecycle.",
    stack: "Solidity · Node.js · Hardhat · Ethers.js · ECDSA",
    code: "https://github.com/27vamsi/Tokens-bridge"
  },
  {
    num: "09",
    cat: "chain",
    eyebrow: "Blockchain Security",
    title: "Transaction Verification & Monitoring",
    what: "Verifies blockchain transactions using cryptographic proofs and monitors on-chain activity through live event streams.",
    standout: "Merkle proofs, multi-signature verification, and batched on-chain checks in one verification pipeline.",
    stack: "Python · FastAPI · Solidity · WebSockets · Keccak256",
    code: "https://github.com/27vamsi/merkle-proof"
  },
  {
    num: "10",
    cat: "ai",
    eyebrow: "AI & Applied Research",
    title: "Physics-Informed Fire Forecasting",
    what: "An AI system that detects fires in video and predicts how they may spread using neural networks and heat-transfer physics.",
    standout: "92% fewer false positives, 89% accuracy on high-risk objects, running at 12–15 FPS.",
    stack: "Python · PINNs · YOLOv8 · OpenCV · Kalman Filters",
    code: "https://github.com/27vamsi/PI-Neural-Networks"
  },
  {
    num: "11",
    cat: "ai",
    eyebrow: "Medical AI",
    title: "Endoscopic Disease Classification",
    what: "A deep-learning system that analyzes endoscopic images to identify and classify ten different pathological conditions.",
    standout: "10 disease classes. 92.3% classification accuracy using an ensemble of specialized neural networks.",
    stack: "Python · TensorFlow · CNN · Deep Learning",
    code: "https://github.com/27vamsi/Endoscopy-Python"
  },
  {
    num: "12",
    cat: "ai",
    eyebrow: "Computer Vision",
    title: "Vehicle & Taillight Tracking",
    what: "A computer vision system that tracks vehicles, detects brake lights, and identifies unusual driving behavior from video.",
    standout: "Three detection models working together at 30 FPS on 1080p video.",
    stack: "Python · YOLOv8 · Computer Vision · Object Tracking",
    code: "https://github.com/27vamsi/Modified-Vehicle-Tail-Light-detection-and-with-object-Tracking"
  }
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "infra", label: "Backend & Infra" },
  { key: "chain", label: "Blockchain" },
  { key: "ai", label: "AI & ML" }
];

const COUNTS = {
  all: PROJECTS.length,
  infra: PROJECTS.filter((p) => p.cat === "infra").length,
  chain: PROJECTS.filter((p) => p.cat === "chain").length,
  ai: PROJECTS.filter((p) => p.cat === "ai").length
};

export default function Work() {
  const [active, setActive] = useState("all");
  const shown = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.cat === active);

  return (
    <section className="block band" id="work">
      <div className="wrap">
        <div className="block-head">
          <h2>Things I&apos;ve built</h2>
        </div>

        <div className="filters" id="filters">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={f.key === active ? "filter active" : "filter"}
              onClick={() => setActive(f.key)}
            >
              {f.label} <span className="n">{COUNTS[f.key]}</span>
            </button>
          ))}
        </div>

        <div className="grid" id="grid">
          {shown.map((p) => (
            <article className="proj" key={p.num} data-cat={p.cat}>
              <div className="p-eyebrow">
                <span className="pnum">{p.num}</span> / {p.eyebrow}
              </div>
              <h3 className="p-title">{p.title}</h3>
              <p className="p-what">{p.what}</p>
              <p className="p-standout">{p.standout}</p>
              <div className="p-stack">{p.stack}</div>
              {(p.code || p.live) && (
                <div className="p-cta">
                  {p.code && (
                    <a className="btn primary" href={p.code} target="_blank" rel="noopener">
                      Checkout code ↗
                    </a>
                  )}
                  {p.live && (
                    <a className="btn ghost" href={p.live} target="_blank" rel="noopener">
                      Live demo ↗
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
