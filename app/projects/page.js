"use client";

import Navbar from "../components/Navbar";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-deep text-gold-soft">
      <Navbar />

      <main className="flex-1">
        <section className="relative border-t border-neutral-900/80 bg-black/95 py-16 overflow-hidden">
          <div className="geometric-shape shape-circle top-16 left-16" />
          <div className="geometric-shape shape-square top-1/3 right-24" />
          <div className="geometric-shape shape-line bottom-1/4 left-1/4" />
          <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Publications Section */}
            <div id="publications" className="scroll-mt-20">
              <div className="mb-12 flex flex-col items-center">
                <h2 className="font-display text-4xl font-semibold text-gold-soft sm:text-5xl decorative-line">Publications</h2>
                <div className="mt-6 h-px w-32 bg-gradient-to-r from-transparent via-gold-soft/30 to-transparent" />
              </div>
              <div className="space-y-8">
                <div className="publication-card rounded-xl border border-neutral-800 bg-neutral-950/80 p-8 transition-all hover:border-neutral-700">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-gold-soft">
                        A Physics-Informed Computer Vision Framework for Firefighting Assistance
                      </h3>
                      <p className="mt-2 text-base text-gold-muted">
                        IEEE 9th International Conference on Information and Communication Technology (CICT), Chennai, India
                      </p>
                      <p className="mt-2 text-sm text-gold-muted/70">2025</p>
                    </div>
                    <a
                      href="https://ieeexplore.ieee.org/document/11399163"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 text-sm font-medium text-gold-soft underline-offset-4 hover:underline sm:mt-0"
                    >
                      IEEE Xplore →
                    </a>
                  </div>
                  <ul className="mt-8 space-y-3 text-base leading-relaxed text-gold-muted">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-gold-soft/60" />
                      <span>Engineered a PINN-based fire spread predictor embedding heat transfer PDEs into the loss function alongside YOLOv8 detection, achieving 98.12% accuracy and 0.85 IoU with Kalman filter tracking (6-DOF state, IOU association) reducing false alarms by 94%.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-gold-soft/60" />
                      <span>Integrated multi-physics modeling combining flame temperature estimation (525–3000°C), fuel load quantification across 26 object classes, and dynamic threshold adaptation achieving 85% prediction accuracy with real-time trajectory forecasting.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-gold-soft/60" />
                      <span>Built a grid-based fire spread analysis engine with directional prediction vectors, burn-time estimation, and environmental risk scoring for emergency response decision-making.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div id="projects" className="scroll-mt-20">
              <div className="section-divider" />
              <div className="mb-4 flex flex-col items-center">
                <h2 className="font-display text-4xl font-semibold text-gold-soft sm:text-5xl decorative-line">Projects</h2>
                <div className="mt-6 h-px w-32 bg-gradient-to-r from-transparent via-gold-soft/30 to-transparent" />
              </div>
            </div>

            {/* Backend & Infra Section */}
            <div id="backend-infra" className="scroll-mt-20">
              <h2 className="mb-6 text-center font-display text-3xl font-semibold text-gold-soft">Backend & Infra</h2>
              <div className="space-y-8">
                {/* Transaction Verification */}
                <div className="project-card rounded-xl border border-neutral-800 bg-neutral-950/80 p-8 transition-all hover:border-neutral-700">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-gold-soft">
                        Transaction Verification and Monitoring System
                      </h3>
                      <div className="tech-stack mt-3">
                        <span className="tech-badge text-sm px-3 py-1.5">Python</span>
                        <span className="tech-badge text-sm px-3 py-1.5">FastAPI</span>
                        <span className="tech-badge text-sm px-3 py-1.5">WebSockets</span>
                      </div>
                    </div>
                    <a
                      href="https://github.com/27vamsi/merkle-proof"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-gold-soft underline-offset-4 hover:underline"
                    >
                      Code →
                    </a>
                  </div>
                  <ul className="mt-6 space-y-3 text-base leading-relaxed text-gold-muted">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Built a blockchain transaction verification system using FastAPI, combining Merkle proof generation and multi-signature verification with a unified off-chain and on-chain verification flow.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Designed and deployed Solidity smart contracts for an on-chain verification registry, implementing batch verification to reduce gas costs versus per-transaction validation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Implemented real-time blockchain monitoring using WebSocket-based event subscriptions and async Python, enabling low-latency detection and processing of on-chain activity.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Developed a cryptographic verification pipeline using keccak256-based Merkle trees with sorted-pair optimization and efficient proof construction for transaction inclusion guarantees.</span>
                    </li>
                  </ul>
                </div>

                {/* OCR Enabled Bills Stock Monitoring */}
                <div className="project-card rounded-xl border border-neutral-800 bg-neutral-950/80 p-8 transition-all hover:border-neutral-700">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-gold-soft">
                        OCR Enabled Bills Stock Monitoring
                      </h3>
                      <div className="tech-stack mt-3">
                        <span className="tech-badge text-sm px-3 py-1.5">React Native</span>
                        <span className="tech-badge text-sm px-3 py-1.5">Tesseract</span>
                        <span className="tech-badge text-sm px-3 py-1.5">Firebase</span>
                        <span className="tech-badge text-sm px-3 py-1.5">Firestore</span>
                      </div>
                    </div>
                    <a
                      href="https://github.com/27vamsi/Bills-storing-App-"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-gold-soft underline-offset-4 hover:underline"
                    >
                      Code →
                    </a>
                  </div>
                  <ul className="mt-6 space-y-3 text-base leading-relaxed text-gold-muted">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Built a React Native bill management app with OCR using Tesseract to extract text from camera or gallery images.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Implemented Firebase Authentication with email verification and Firestore for user data storage.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Developed CRUD operations for bills with image capture, text extraction, and full-screen image viewing.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Integrated React Navigation with protected routes and conditional rendering based on authentication state.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Added camera and gallery permissions handling with image picker integration for bill capture workflows.</span>
                    </li>
                  </ul>
                </div>

                {/* Blogging App */}
                <div className="project-card rounded-xl border border-neutral-800 bg-neutral-950/80 p-8 transition-all hover:border-neutral-700">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-gold-soft">
                        Blogging App
                      </h3>
                      <div className="tech-stack mt-3">
                        <span className="tech-badge text-sm px-3 py-1.5">Node.js</span>
                        <span className="tech-badge text-sm px-3 py-1.5">Express.js</span>
                        <span className="tech-badge text-sm px-3 py-1.5">MongoDB</span>
                        <span className="tech-badge text-sm px-3 py-1.5">EJS</span>
                        <span className="tech-badge text-sm px-3 py-1.5">JWT</span>
                        <span className="tech-badge text-sm px-3 py-1.5">Multer</span>
                      </div>
                    </div>
                    <a
                      href="https://github.com/27vamsi/blogging-application"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-gold-soft underline-offset-4 hover:underline"
                    >
                      Code →
                    </a>
                  </div>
                  <ul className="mt-6 space-y-3 text-base leading-relaxed text-gold-muted">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Built a full-stack blogging platform using Node.js, Express.js, and MongoDB with JWT-based authentication, implementing secure password hashing via HMAC-SHA256 with salt, role-based access control (USER/ADMIN), and cookie-based session management for user authentication and authorization.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Developed a content management system with Multer for image uploads, MongoDB population for relational data queries, and server-side rendering using EJS templates with partials, enabling users to create, view, and manage blog posts with cover images.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Implemented a real-time commenting system with user associations and timestamps, utilizing Mongoose schema relationships and population to link comments to blogs and authors, creating an interactive user engagement feature.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Architected a production-ready application with environment variable configuration using dotenv, dynamic port assignment for cloud deployment, static file serving middleware, and MVC pattern separation across routes, controllers, models, and authentication services.</span>
                    </li>
                  </ul>
                </div>

                {/* URL Shortener */}
                <div className="project-card rounded-xl border border-neutral-800 bg-neutral-950/80 p-8 transition-all hover:border-neutral-700">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-gold-soft">
                        URL Shortener
                      </h3>
                      <div className="tech-stack mt-3">
                        <span className="tech-badge text-sm px-3 py-1.5">Node.js</span>
                        <span className="tech-badge text-sm px-3 py-1.5">Express.js</span>
                        <span className="tech-badge text-sm px-3 py-1.5">MongoDB</span>
                        <span className="tech-badge text-sm px-3 py-1.5">EJS</span>
                        <span className="tech-badge text-sm px-3 py-1.5">JWT</span>
                      </div>
                    </div>
                    <a
                      href="https://github.com/27vamsi/URL-SHORTNER"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-gold-soft underline-offset-4 hover:underline"
                    >
                      Code →
                    </a>
                  </div>
                  <ul className="mt-6 space-y-3 text-base leading-relaxed text-gold-muted">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Developed a full-stack URL shortener using Node.js, Express.js, and MongoDB, implementing RESTful APIs with cookie-based JWT authentication and role-based authorization (NORMAL/ADMIN) to secure user-specific URL management.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Built analytics tracking with MongoDB aggregation, capturing visit timestamps and click counts per shortened URL, enabling users to monitor link performance in real time.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Implemented server-side rendering with EJS templates and Express middleware, creating a responsive web interface for URL generation, user authentication, and dashboard views.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Architected a scalable MVC application with nanoid-based unique ID generation, MongoDB schema design with referential integrity, and middleware-based authentication flow, supporting user registration, login, and protected route access.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Blockchain Section */}
            <div id="blockchain" className="scroll-mt-20">
              <div className="section-divider" />
              <h2 className="mb-10 text-center font-display text-3xl font-semibold text-gold-soft">Blockchain</h2>
              <div className="space-y-8">
                {/* CLAMM Tick Collector */}
                <div className="project-card rounded-xl border border-neutral-800 bg-neutral-950/80 p-8 transition-all hover:border-neutral-700">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-gold-soft">
                        Smart Contract for CLAMM Tick collector
                      </h3>
                      <div className="tech-stack mt-3">
                        <span className="tech-badge text-sm px-3 py-1.5">Solidity</span>
                        <span className="tech-badge text-sm px-3 py-1.5">EVM</span>
                      </div>
                    </div>
                    <a
                      href="https://github.com/27vamsi/CLAMM-TICK-COLLECTOR/tree/main"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-gold-soft underline-offset-4 hover:underline"
                    >
                      Code →
                    </a>
                  </div>
                  <ul className="mt-6 space-y-3 text-base leading-relaxed text-gold-muted">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Built a unified tick data collection system supporting singleton CLAMM protocols such as Uniswap V4 and PancakeSwap Infinity, abstracting pool state, slot0, tick bitmaps, and liquidity reads behind a common interface.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Implemented gas-optimized bitmap scanning and word-level iteration to efficiently discover initialized ticks across entire pools and in price-local regions around the current tick.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Engineered direction-aware, gas-bounded tick traversal with precise handling of tick spacing, compressed ticks, word boundaries, and current-tick edge cases.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Applied Q96 fixed-point arithmetic, low-level bitwise math, and selective inline assembly to accurately profile liquidity for routing, arbitrage, and execution simulation use cases.</span>
                    </li>
                  </ul>
                </div>

                {/* Cross-Chain Bridge */}
                <div className="project-card rounded-xl border border-neutral-800 bg-neutral-950/80 p-8 transition-all hover:border-neutral-700">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-gold-soft">
                        Cross-Chain ERC20 Bridge
                      </h3>
                      <div className="tech-stack mt-3">
                        <span className="tech-badge text-sm px-3 py-1.5">Solidity</span>
                        <span className="tech-badge text-sm px-3 py-1.5">Node.js</span>
                        <span className="tech-badge text-sm px-3 py-1.5">Hardhat</span>
                        <span className="tech-badge text-sm px-3 py-1.5">Ethers.js</span>
                      </div>
                    </div>
                    <a
                      href="https://github.com/27vamsi/Tokens-bridge"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-gold-soft underline-offset-4 hover:underline"
                    >
                      Code →
                    </a>
                  </div>
                  <ul className="mt-6 space-y-3 text-base leading-relaxed text-gold-muted">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Implemented a bidirectional ERC20 bridge using lock-mint and burn-release semantics, coordinating state across two chains via on-chain events, off-chain message construction, and destination-chain execution.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Designed a validator-signed cross-chain authorization scheme using ECDSA with chainId + contract-address domain separation and monotonic nonces to prevent replay, cross-chain, and cross-contract signature reuse.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Built an event-driven relayer pipeline that subscribes to Solidity events, deterministically reconstructs signed payloads, and submits authenticated transactions using role-isolated validator and relayer keys.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Developed end-to-end Hardhat tests without mocks simulating the full bridge lifecycle, validating signature recovery, nonce enforcement, role permissions, and balance conservation across chains.</span>
                    </li>
                  </ul>
                </div>

                {/* Transaction Verification */}
                <div className="project-card rounded-xl border border-neutral-800 bg-neutral-950/80 p-8 transition-all hover:border-neutral-700">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-gold-soft">
                        Transaction Verification and Monitoring System
                      </h3>
                      <div className="tech-stack mt-3">
                        <span className="tech-badge text-sm px-3 py-1.5">Python</span>
                        <span className="tech-badge text-sm px-3 py-1.5">FastAPI</span>
                        <span className="tech-badge text-sm px-3 py-1.5">WebSockets</span>
                      </div>
                    </div>
                    <a
                      href="https://github.com/27vamsi/merkle-proof"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-gold-soft underline-offset-4 hover:underline"
                    >
                      Code →
                    </a>
                  </div>
                  <ul className="mt-6 space-y-3 text-base leading-relaxed text-gold-muted">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Built a blockchain transaction verification system using FastAPI, combining Merkle proof generation and multi-signature verification with a unified off-chain and on-chain verification flow.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Designed and deployed Solidity smart contracts for an on-chain verification registry, implementing batch verification to reduce gas costs versus per-transaction validation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Implemented real-time blockchain monitoring using WebSocket-based event subscriptions and async Python, enabling low-latency detection and processing of on-chain activity.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Developed a cryptographic verification pipeline using keccak256-based Merkle trees with sorted-pair optimization and efficient proof construction for transaction inclusion guarantees.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AI / ML Section */}
            <div id="ml-dl" className="scroll-mt-20">
              <div className="section-divider" />
              <h2 className="mb-10 text-center font-display text-3xl font-semibold text-gold-soft">AI / ML</h2>
              <div className="space-y-8">
                {/* Physics-Informed Neural Network Fire Forecasting System */}
                <div className="project-card rounded-xl border border-neutral-800 bg-neutral-950/80 p-8 transition-all hover:border-neutral-700">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-gold-soft">
                        Physics-Informed Neural Network Fire Forecasting System
                      </h3>
                      <div className="tech-stack mt-3">
                        <span className="tech-badge text-sm px-3 py-1.5">Python</span>
                        <span className="tech-badge text-sm px-3 py-1.5">PINN</span>
                        <span className="tech-badge text-sm px-3 py-1.5">YOLOv8</span>
                        <span className="tech-badge text-sm px-3 py-1.5">OpenCV</span>
                      </div>
                    </div>
                    <a
                      href="https://github.com/27vamsi/PI-Neural-Networks"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-gold-soft underline-offset-4 hover:underline"
                    >
                      Code →
                    </a>
                  </div>
                  <ul className="mt-6 space-y-3 text-base leading-relaxed text-gold-muted">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Engineered a PINN-based fire spread predictor embedding heat transfer physics with YOLOv8 detection achieving <strong className="text-gold-soft">98.12% accuracy</strong> and <strong className="text-gold-soft">0.85 IoU</strong>.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Implemented advanced temporal tracking using Kalman filters with 6-DOF state estimation and IOU-based object association, reducing false alarms by <strong className="text-gold-soft">94%</strong> through multi-modal filtering.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Developed dynamic threshold adaptation system calculating fire-size dependent success thresholds, achieving <strong className="text-gold-soft">85% prediction accuracy</strong> with real-time trajectory forecasting.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Integrated multi-physics modeling combining flame temperature estimation (<strong className="text-gold-soft">525-3000°C range</strong>), fuel load quantification across <strong className="text-gold-soft">26 object classes</strong>, and environmental risk scoring for hazard assessment.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-soft/60" />
                      <span>Built comprehensive fire spread analysis engine with grid-based tracking, directional prediction vectors, and burn-time estimation supporting emergency response decision-making systems.</span>
                    </li>
                  </ul>
                </div>

                {/* Multi-Class Endoscopic Disease Classification */}
                <div className="project-card rounded-xl border border-neutral-800 bg-neutral-950/80 p-8 transition-all hover:border-neutral-700">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-gold-soft">
                        Multi-Class Endoscopic Disease Classification System
                      </h3>
                      <div className="tech-stack mt-3">
                        <span className="tech-badge text-sm px-3 py-1.5">Python</span>
                        <span className="tech-badge text-sm px-3 py-1.5">TensorFlow</span>
                        <span className="tech-badge text-sm px-3 py-1.5">CNN</span>
                      </div>
                    </div>
                    <a
                      href="https://github.com/27vamsi/Endoscopy-Python"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-gold-soft underline-offset-4 hover:underline"
                    >
                      Code →
                    </a>
                  </div>
                  <ul className="mt-6 space-y-3 text-base leading-relaxed text-gold-muted">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-gold-soft/60" />
                      <span>Architected hierarchical binary CNN ensemble with one-vs-all classification strategy, achieving <strong className="text-gold-soft">92.3% accuracy</strong> and <strong className="text-gold-soft">0.89 AUC</strong> across <strong className="text-gold-soft">10 pathological classes</strong> using stratified Bootstrap resampling with <strong className="text-gold-soft">500 samples per class</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-gold-soft/60" />
                      <span>Engineered adaptive optimization framework with ReduceLROnPlateau scheduler (factor=0.5, patience=3), early stopping regularization, and dynamic learning rate decay from <strong className="text-gold-soft">1e-3 to 1e-6</strong> for optimal convergence.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-gold-soft/60" />
                      <span>Implemented multi-scale data augmentation pipeline with stochastic transformations (horizontal/vertical flips, <strong className="text-gold-soft">0.2 rotation variance</strong>), <strong className="text-gold-soft">224x224 pixel</strong> normalization, and automated class-balanced dataset synthesis.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-gold-soft/60" />
                      <span>Developed maximum likelihood ensemble classifier using sigmoid activation confidence scoring across independent binary models, enabling uncertainty quantification and robust pathological feature extraction.</span>
                    </li>
                  </ul>
                </div>

                {/* Multi-Modal Vehicle Tracking */}
                <div className="project-card rounded-xl border border-neutral-800 bg-neutral-950/80 p-8 transition-all hover:border-neutral-700">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-gold-soft">
                        Multi-Modal Vehicle Tracking and Taillight Detection System
                      </h3>
                      <div className="tech-stack mt-3">
                        <span className="tech-badge text-sm px-3 py-1.5">Python</span>
                        <span className="tech-badge text-sm px-3 py-1.5">YOLOv8</span>
                      </div>
                    </div>
                    <a
                      href="https://github.com/27vamsi/Modified-Vehicle-Tail-Light-detection-and-with-object-Tracking"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-gold-soft underline-offset-4 hover:underline"
                    >
                      Code →
                    </a>
                  </div>
                  <ul className="mt-6 space-y-3 text-base leading-relaxed text-gold-muted">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-gold-soft/60" />
                      <span>Architected multi-model ensemble system integrating <strong className="text-gold-soft">YOLOv8n</strong>, custom brake light, and taillight detection models with real-time object tracking achieving <strong className="text-gold-soft">30 FPS</strong> processing on <strong className="text-gold-soft">1080p video streams</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-gold-soft/60" />
                      <span>Implemented trajectory-based motion analysis with <strong className="text-gold-soft">30-frame sliding window</strong> tracking, computing Euclidean distance metrics and normalized deviation thresholds for anomalous driving behavior detection.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-gold-soft/60" />
                      <span>Developed adaptive visual tracking pipeline with dynamic color coding based on deviation analysis (<strong className="text-gold-soft">0.05 threshold</strong>), enabling real-time identification of erratic vehicle movements and lane departures.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-gold-soft/60" />
                      <span>Engineered synchronized multi-detection framework processing vehicle bounding boxes, brake light activation states, and taillight visibility with frame-level temporal correlation for comprehensive traffic analysis.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
