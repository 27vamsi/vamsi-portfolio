"use client";

import Navbar from "../components/Navbar";

export default function PublicationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-deep text-gold-soft">
      <Navbar />

      <main className="flex-1">
        <section className="border-t border-neutral-900/80 bg-black/95 py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-4">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-gold-soft sm:text-5xl">
                Publications
              </h1>
            </div>

            <div className="space-y-8">
              <div className="rounded-xl border border-neutral-800 bg-neutral-950/80 p-8 transition-all hover:border-neutral-700">
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
        </section>
      </main>
    </div>
  );
}
