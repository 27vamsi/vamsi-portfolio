"use client";

import { useState } from "react";

const RAD = Math.PI / 180;

// The instrument is drawn in a square 1000x1000 viewBox and scaled by CSS, so every ring, tick and
// marking scales together. The outermost ring sits at r=492, i.e. the "orbital system diameter" is
// essentially the rendered width of .dial-stage.
const C = 500;
const NODE_R = 408; // the ring the node badges sit on
// Node badges are positioned in HTML as a percentage of the stage, so their typography can stay a
// fixed pixel size while the rings scale. 408/1000 of the box = 40.8% out from the centre.
const NODE_PCT = (NODE_R / 1000) * 100;

const polar = (deg, r) => [C + Math.cos(-deg * RAD) * r, C + Math.sin(-deg * RAD) * r];

// One closed ring of `n` radial ticks between r0 and r1; every `every`-th tick runs `ext` longer.
const ticks = (n, r0, r1, every, ext) => {
  let d = "";
  for (let i = 0; i < n; i++) {
    const a = (i / n) * 360;
    const [x0, y0] = polar(a, r0);
    const [x1, y1] = polar(a, every && i % every === 0 ? r1 + ext : r1);
    d += `M${x0.toFixed(1)} ${y0.toFixed(1)}L${x1.toFixed(1)} ${y1.toFixed(1)}`;
  }
  return d;
};

// Sweep flag 0: our angles increase counter-clockwise on screen, which is SVG's negative direction.
const arc = (a0, a1, r) => {
  const [x0, y0] = polar(a0, r);
  const [x1, y1] = polar(a1, r);
  return `M${x0.toFixed(1)} ${y0.toFixed(1)}A${r} ${r} 0 ${Math.abs(a1 - a0) > 180 ? 1 : 0} 0 ${x1.toFixed(1)} ${y1.toFixed(1)}`;
};

// Evenly spaced at 60°, offset so no node lands dead on the horizontal axis : that keeps the
// widest labels from reaching as far sideways and is what lets the rings be this large.
// `side` decides which way the label and its connector run.
// `fx/fy/dur/delay` drive the label float; they are deliberately all different so the six labels
// never drift in unison.
const NODES = [
  { label: "Things I've Built", href: "#work", deg: 90, side: "t", icon: "cube", fx: "2px", fy: "-2px", dur: "7.2s", delay: "-1.1s" },
  { label: "Where I've Been", href: "#experience", deg: 30, side: "r", icon: "user", fx: "3px", fy: "2px", dur: "6.1s", delay: "-3.4s" },
  { label: "Published Work", href: "#writing", deg: -30, side: "r", icon: "doc", fx: "4px", fy: "-1px", dur: "7.8s", delay: "-0.6s" },
  { label: "Let's Connect", href: "#contact", deg: -90, side: "b", icon: "chat", fx: "-2px", fy: "2px", dur: "5.6s", delay: "-2.2s" },
  { label: "My Tech Stack", href: "#stack", deg: -150, side: "l", icon: "stack", fx: "-3px", fy: "-2px", dur: "6.9s", delay: "-4.3s" },
  { label: "What I Bring", href: "#focus", deg: 150, side: "l", icon: "layers", fx: "-4px", fy: "1px", dur: "7.5s", delay: "-5.1s" }
];

// 22x22 glyphs, stroked to match the hairline language of the rings.
const ICONS = {
  layers: "M11 2.6 2.8 7 11 11.4 19.2 7 11 2.6ZM2.8 11.6 11 16l8.2-4.4M2.8 15.9 11 20.3l8.2-4.4",
  cube: "M11 2.4 19.3 6.8v8.4L11 19.6 2.7 15.2V6.8L11 2.4ZM2.7 6.8 11 11.2l8.3-4.4M11 11.2v8.4",
  user: "M11 11.3a3.9 3.9 0 1 0 0-7.8 3.9 3.9 0 0 0 0 7.8ZM3.7 19.4a7.3 7.3 0 0 1 14.6 0",
  doc: "M5.3 2.8h7.2l3.6 3.6v12.8H5.3V2.8ZM12.5 2.8v3.6h3.6M8.1 11.4h5.8M8.1 15h5.8",
  chat: "M19 12.8a2.5 2.5 0 0 1-2.5 2.5H8l-4.4 3.9V5.3A2.5 2.5 0 0 1 6.1 2.8h10.4A2.5 2.5 0 0 1 19 5.3v7.5Z",
  stack: "M3.6 3.6h14.8v4.8H3.6V3.6ZM3.6 13.3h14.8v4.8H3.6v-4.8ZM7 6h.02M7 15.7h.02"
};

// Precomputed geometry : none of this depends on state, so it is built once at module scope.
const OUTER_TICKS = ticks(120, 472, 488, 10, 8);
const MID_TICKS = ticks(72, 318, 332, 6, 6);
const INNER_TICKS = ticks(60, 206, 224, 5, 6);
const COMB = ticks(180, 252, 272, 0, 0);
const MID_ARCS = Array.from({ length: 8 }, (_, i) => arc(i * 45 + 5, i * 45 + 40, 352));
const SPOKES = NODES.map((n) => {
  const [x0, y0] = polar(n.deg, 290);
  const [x1, y1] = polar(n.deg, NODE_R - 26);
  return `M${x0.toFixed(1)} ${y0.toFixed(1)}L${x1.toFixed(1)} ${y1.toFixed(1)}`;
}).join("");
const NODE_SEGS = NODES.map((n) => arc(n.deg - 21, n.deg + 21, NODE_R));

export default function HudDial() {
  // Which node is hovered/focused, so its arc segment on the node ring can light up. Driven by
  // React rather than by mutating the DOM, and it never changes any element's box : see .nd below.
  const [active, setActive] = useState(-1);

  return (
    <div className="dial-wrap">
      <div className="dial-stage">
        <svg className="hud" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
          <defs>
            <radialGradient id="hdcore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
              <stop offset="55%" stopColor="var(--accent)" stopOpacity="0.07" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Outer bezel : oscillates +/-5 degrees */}
          <g className="hd-osc hd-osc--outer">
            <circle className="hd-ring hd-ring--hair" cx={C} cy={C} r="492" />
            <path className="hd-ticks" d={OUTER_TICKS} />
          </g>

          <circle className="hd-ring" cx={C} cy={C} r="452" />

          {/* Node ring. Swings in lockstep with .dial-nav (same keyframes + duration) so the
              highlight segments and spokes stay registered under their badges. */}
          <g className="hd-osc hd-osc--nodes">
            <circle className="hd-ring hd-ring--lit" cx={C} cy={C} r={NODE_R} />
            {NODE_SEGS.map((d, i) => (
              <path key={d} className={"hd-seg" + (active === i ? " is-on" : "")} d={d} />
            ))}
            <path className="hd-spoke" d={SPOKES} />
          </g>

          {/* Middle band : counter-oscillates +/-3 degrees */}
          <g className="hd-osc hd-osc--mid">
            <circle className="hd-ring hd-ring--hair" cx={C} cy={C} r="372" />
            {MID_ARCS.map((d, i) => (
              <path key={d} className="hd-arc" d={d} style={{ animationDelay: `${i * -1.4}s` }} />
            ))}
            <path className="hd-ticks" d={MID_TICKS} />
            <circle className="hd-ring" cx={C} cy={C} r="312" />
          </g>

          {/* Fine radial markings */}
          <path className="hd-comb" d={COMB} />

          {/* Inner band : oscillates +/-2 degrees */}
          <g className="hd-osc hd-osc--inner">
            <circle className="hd-ring hd-ring--hair" cx={C} cy={C} r="228" />
            <path className="hd-ticks" d={INNER_TICKS} />
          </g>

          <circle className="hd-ring hd-ring--dash" cx={C} cy={C} r="186" />

          {/* Core */}
          <circle className="hd-glow" cx={C} cy={C} r="168" />
          <circle className="hd-core" cx={C} cy={C} r="124" />
          <circle className="hd-ring hd-ring--lit" cx={C} cy={C} r="124" />
          <path className="hd-glyph" d="M464 478 436 500 464 522M536 478 564 500 536 522M513 468 487 532" />
        </svg>

        {/* Labels are real anchors in HTML, not SVG text: their type stays a fixed pixel size at
            every stage size, they keep native keyboard focus, and the float is a CSS transform. */}
        <nav className="dial-nav" aria-label="Sections">
          {NODES.map((n, i) => {
            const [x, y] = [
              50 + Math.cos(-n.deg * RAD) * NODE_PCT,
              50 + Math.sin(-n.deg * RAD) * NODE_PCT
            ];
            return (
              <a
                key={n.href}
                className={"nd nd--" + n.side}
                href={n.href}
                style={{ left: `${x.toFixed(3)}%`, top: `${y.toFixed(3)}%` }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(-1)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(-1)}
              >
                <span className="nd-badge" aria-hidden="true">
                  <svg viewBox="0 0 22 22" fill="none">
                    <path d={ICONS[n.icon]} />
                  </svg>
                </span>
                <span className="nd-label">
                  {/* Only this inner span animates, so the anchor's own box never moves and the
                      pointer target can't slide out from under the cursor. */}
                  <span style={{ "--fx": n.fx, "--fy": n.fy, animationDuration: n.dur, animationDelay: n.delay }}>
                    {n.label}
                  </span>
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
