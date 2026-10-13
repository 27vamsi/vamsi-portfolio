import ContactTiles from "./components/ContactTiles";
import HudDial from "./components/HudDial";
import SocialRail from "./components/SocialRail";
import Stack from "./components/Stack";
import ThemeToggle from "./components/ThemeToggle";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      {/* No nav bar: the dial in the hero is the only navigation. */}
      <div className="theme-float">
        <ThemeToggle />
      </div>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-wrap hero-grid">
            <div className="hero-text">
              <div className="hero-role kicker">
                <span className="tick" />
                Backend Engineer · AI Systems · Web3
              </div>
              <h1>
                <span className="lead">Sesha Sai</span>
                <em>Vamsi</em> Marella
              </h1>
              <div className="rule" aria-hidden="true">
                <span />
                <i />
                <i />
              </div>
              <p className="statement">
                From <em>0 to 1</em>.
                <br />
                From <em>1 to n</em>.
              </p>
              <p className="hero-lede">
                I&apos;ve built trading engines, backend platforms, data systems, and blockchain
                infrastructure.{" "}
                <span>
                  I like owning a product from its first implementation through the hard engineering
                  that follows.
                </span>
              </p>
              <div className="cta-row">
                <a className="btn primary" href="#work">
                  See what I&apos;ve built <span aria-hidden="true">→</span>
                </a>
                <a className="btn ghost" href="#contact">
                  Get in touch <span aria-hidden="true">✉</span>
                </a>
              </div>
              <SocialRail />
            </div>

            <HudDial />
          </div>

          <div className="wrap hero-wrap hero-foot">
            <a className="scroll-cue" href="#focus">
              <svg viewBox="0 0 16 24" fill="none" aria-hidden="true">
                <rect x="0.8" y="0.8" width="14.4" height="22.4" rx="7.2" stroke="currentColor" strokeWidth="1.2" />
                <path d="M8 6v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              Scroll to explore
            </a>
          </div>
        </section>

        {/* FOCUS */}
        <section className="block" id="focus">
          <div className="wrap">
            <div className="block-head">
              <h2>What I bring to the table</h2>
              <p>
                Most of my work has been behind the scenes: the APIs, execution engines, databases,
                and infrastructure that make a product work.
              </p>
            </div>
            <div className="cards">
              <div className="card">
                <span className="num">A.</span>
                <h3>Backend &amp; Infrastructure</h3>
                <p>
                  I&apos;ve built APIs, query engines, and transaction systems from scratch.
                  Concurrency, caching, databases, cloud infrastructure, and the occasional
                  production bug that takes an entire day to find.
                </p>
                <ul>
                  <li>Python, FastAPI, asyncio</li>
                  <li>PostgreSQL, Redis, AWS</li>
                  <li>Query engines &amp; data pipelines</li>
                  <li>Concurrency &amp; performance</li>
                </ul>
              </div>
              <div className="card">
                <span className="num">B.</span>
                <h3>Web3 &amp; Blockchain</h3>
                <p>
                  I spent a good part of my engineering career on DeFi infrastructure. Not just
                  interacting with smart contracts, but building the systems that find routes,
                  calculate prices, execute trades, and talk to liquidity pools.
                </p>
                <ul>
                  <li>DEX aggregators &amp; trade routing</li>
                  <li>Solidity, EVM &amp; smart contracts</li>
                  <li>Protocol AMM &amp; yield logic</li>
                  <li>Cross-chain execution infra</li>
                </ul>
              </div>
              <div className="card">
                <span className="num">C.</span>
                <h3>AI &amp; Research</h3>
                <p>
                  I&apos;ve worked on machine learning and computer vision, from experimenting with
                  model architectures to implementing inference systems. I also have experience with
                  academic research.
                </p>
                <ul>
                  <li>Machine learning &amp; neural nets</li>
                  <li>Computer vision</li>
                  <li>Model inference</li>
                  <li>Academic research</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <Work />

        {/* EXPERIENCE */}
        <section className="block" id="experience">
          <div className="wrap">
            <div className="block-head">
              <h2>Where I&apos;ve been</h2>
            </div>
            <div className="xp">
              <div className="xp-row">
                <div className="xp-when">
                  May 2026 –{" "}
                  <br />
                  Sept 2026
                </div>
                <div className="xp-body">
                  <h3>Founding Engineer</h3>
                  <div className="org">OneCent Labs</div>
                  <p>Built and operated real-time trade routing, settlement, pricing, and indexing infrastructure.</p>
                  <ul className="xp-list">
                    <li>Built and run a real-time trade routing and settlement engine that has processed $1.6M+ in live volume, averaging 386 successful settlements/day.</li>
                    <li>Built the core bidding pipeline around a 4.85s hard deadline, maintaining a 99.3% valid-response rate for requests coming every 6 seconds.</li>
                    <li>Cut worst-case response time 7× from 20.3s to 2.9s by reducing 780 candidate routes to 17 before network calls, running survivors across 32 workers, and fixing async and connection-pool bottlenecks.</li>
                    <li>Built route search across 20K+ assets and 38K+ liquidity pools using bounded multi-hop search, liquidity-aware ranking, fanout limits, and request-size-aware pruning to stay within the bidding budget.</li>
                    <li>Built pricing and indexing systems with path simulation, outlier filtering, confidence scoring, batched RPC discovery, and zero-downtime repricing of 7,900+ records.</li>
                    <li>Integrated 74 protocol adapters across 91 chain-specific setups; reverse-engineered undocumented pricing logic and validated results to 1e-4 tolerance against forked-chain execution.</li>
                    <li>Hardened production with async connection pooling, caching, request deduplication, circuit breakers, rate limits, retries, and backoff; also reduced 240MB/hr of duplicate logs and added request tracing, failure capture, and replay tooling.</li>
                    <li>Root-caused silent production failures across APIs, contracts, DNS, and networking, including 200 OK responses that dropped submissions and TCP connects that consumed the full execution deadline; owned deployments and monitoring across AWS/GCP.</li>
                  </ul>
                  <div className="tags">
                    <span className="tag">Python</span>
                    <span className="tag">asyncio</span>
                    <span className="tag">EVM</span>
                    <span className="tag">Routing</span>
                    <span className="tag">AWS</span>
                    <span className="tag">GCP</span>
                  </div>
                </div>
              </div>
              <div className="xp-row">
                <div className="xp-when">
                  Jan 2025 –{" "}
                  <br />
                  Feb 2026
                </div>
                <div className="xp-body">
                  <h3>Backend Engineer</h3>
                  <div className="org">GlueX Protocol</div>
                  <p>Owned async backend services, yield aggregation, data pipelines, and production operations.</p>
                  <ul className="xp-list">
                    <li>Built and owned an async Python/FastAPI backend handling thousands of concurrent requests with non-blocking I/O, parallel execution, background jobs, and sub-10ms cached response times.</li>
                    <li>Built a yield aggregation service across 55+ DeFi protocols, standardizing reward schedules, lending rates, liquidity incentives, and pool data into consistent APY, borrow-rate, and TVL metrics.</li>
                    <li>Designed 8 specialized TTL/LRU caches, reducing codebase complexity by 37.5% and lock contention by 40%; built fault-tolerant batch pipelines processing 2,000+ pools and yield sources per run.</li>
                    <li>Engineered async RPC orchestration for hundreds of EVM calls per cycle using batching, retries, timeout isolation, and rate-limit-aware scheduling; designed low-latency data paths with DynamoDB, Timestream, async writes, and cache-first reads.</li>
                    <li>Deployed and operated workloads on AWS Lambda and EC2 with horizontal scaling, event-driven jobs, zero-downtime releases, structured logs, dashboards, alerts, health checks, and p50–p99 latency monitoring.</li>
                  </ul>
                  <div className="tags">
                    <span className="tag">FastAPI</span>
                    <span className="tag">asyncio</span>
                    <span className="tag">DynamoDB</span>
                    <span className="tag">Timestream</span>
                    <span className="tag">AWS Lambda</span>
                    <span className="tag">EC2</span>
                  </div>
                </div>
              </div>
              <div className="xp-row">
                <div className="xp-when">
                  Nov 2023 –{" "}
                  <br />
                  Jan 2024
                </div>
                <div className="xp-body">
                  <h3>Software Development Engineer Intern</h3>
                  <div className="org">Olive Technologies</div>
                  <ul className="xp-list">
                    <li>Built Node.js inventory REST APIs and request validation, plus a React Native OCR capture flow that converted scanned bills into structured JSON for backend ingestion.</li>
                  </ul>
                  <div className="tags">
                    <span className="tag">Node.js</span>
                    <span className="tag">REST APIs</span>
                    <span className="tag">React Native</span>
                    <span className="tag">OCR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STACK */}
        <section className="block band" id="stack">
          <div className="wrap">
            <div className="block-head">
              <h2>My tech stack</h2>
            </div>
            <Stack />
          </div>
        </section>

        {/* RESEARCH + EDUCATION */}
        <section className="block" id="writing">
          <div className="wrap">
            <div className="block-head">
              <h2>Published work</h2>
            </div>
            <div className="split">
              <div className="panel">
                <div className="kicker">Publication · IEEE</div>
                <h3>A Physics-Informed Computer Vision Framework for Firefighting Assistance</h3>
                <p>
                  Firefighters move through smoke-filled rooms with almost no information about what
                  is about to catch next. Pure vision models are no help there: they see objects,
                  not thermodynamics. This paper puts the physics back in with a framework that fuses
                  real-time object detection with heat-transfer modelling, so the system reasons
                  about conduction, convection, and radiation rather than pattern-matching flames.
                </p>
                <p>
                  Detected objects are scored for ignition risk from their material properties and
                  thermal response, and a physics-informed neural network predicts how the fire will
                  spread across the scene. Grounding the predictions in conservation laws cut false
                  positives by <b>92%</b> and reached <b>89% accuracy</b> on high-risk object
                  identification and spread forecasting at <b>12–15 FPS</b>, fast enough to run on
                  the equipment a crew actually carries.
                </p>
                <div className="meta">
                  IEEE 9th Intl. Conference on Information &amp; Communication Technology (CICT) ·
                  Chennai · <b>2025</b>
                </div>
                <a
                  className="pub-cta"
                  href="https://ieeexplore.ieee.org/document/11399163"
                  target="_blank"
                  rel="noopener"
                >
                  Read the paper on IEEE Xplore ↗
                </a>
              </div>
              <div className="panel">
                <div className="kicker">Education</div>
                <div className="edu-list">
                  <div className="edu-item">
                    <h3>Vellore Institute of Technology</h3>
                    <div className="sub">B.Tech, Computer Science and Engineering · Chennai</div>
                    <div className="yr">Sept 2021 – July 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="block band contact" id="contact">
          <div className="wrap contact-inner">
            <h2>
              Let&apos;s <em>connect</em>.
            </h2>
            <p>
              Open to backend, infrastructure, and founding engineering roles. Happy to talk
              systems, ideas, or opportunities.
            </p>
            <ContactTiles />
            <div style={{ marginTop: "22px" }}>
              <a className="btn ghost" href="https://vamsimarella.com" target="_blank" rel="noopener">
                vamsimarella.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-inner">
          <span>© 2026 Sesha Sai Vamsi Marella</span>
          <span>Hyderabad, India · UTC+5:30</span>
        </div>
      </footer>
    </>
  );
}
