const { useState, useEffect, useRef, useLayoutEffect, useMemo, useCallback } = React;
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => t * t * (3 - 2 * t);
function useScrollProgress(ref, opts = {}) {
  const [p, setP] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    let raf = 0;
    const tick = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      const scrolled = -rect.top;
      const prog = clamp(scrolled / Math.max(1, total));
      setP(prog);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    tick();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);
  return p;
}
function useInView(ref, margin = "0px 0px -15% 0px") {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
    }, { rootMargin: margin });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, margin]);
  return inView;
}
function range(p, a, b) {
  return clamp((p - a) / (b - a));
}
function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const check = () => {
      const device = document.documentElement.getAttribute("data-device");
      setM(device === "mobile" || window.innerWidth < 820);
    };
    check();
    window.addEventListener("resize", check);
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-device"] });
    return () => {
      window.removeEventListener("resize", check);
      obs.disconnect();
    };
  }, []);
  return m;
}
Object.assign(window, { useScrollProgress, useInView, range, clamp, lerp, smooth, useIsMobile });
function HeroSafe() {
  const pinRef = React.useRef(null);
  const p = useScrollProgress(pinRef);
  const tHeadline = range(p, 0, 0.25);
  const tSplit = range(p, 0.25, 0.45);
  const tUI = range(p, 0.4, 0.75);
  const tHand = range(p, 0.75, 1);
  const dashScale = lerp(0.82, 1, smooth(tUI));
  const dashOp = smooth(tUI);
  return /* @__PURE__ */ React.createElement("section", { ref: pinRef, className: "pinned", style: { height: "380vh" } }, /* @__PURE__ */ React.createElement("div", { className: "sticky dots" }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1 - tSplit,
    pointerEvents: "none"
  } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", maxWidth: 1200, padding: "0 40px" } }, /* @__PURE__ */ React.createElement("div", { className: "section-label", style: { justifyContent: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { opacity: smooth(tHeadline) } }, "EFG Hermes Research \xB7 2026")), /* @__PURE__ */ React.createElement("h1", { className: "hero-title", style: {
    transform: `scale(${lerp(1.08, 1, smooth(tHeadline))})`,
    letterSpacing: `${lerp(-0.02, -0.035, smooth(tHeadline))}em`
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-block",
    transform: `translateY(${lerp(-40, 0, smooth(tHeadline))}px) translateX(${lerp(0, -260, smooth(tSplit))}px)`,
    opacity: lerp(1, 0.15, smooth(tSplit))
  } }, "Conviction"), " ", /* @__PURE__ */ React.createElement("span", { className: "serif", style: {
    fontStyle: "italic",
    color: "var(--accent)",
    transform: `translateY(${lerp(40, 0, smooth(tHeadline))}px)`,
    display: "inline-block",
    opacity: lerp(1, 0.25, smooth(tSplit))
  } }, "in numbers"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-block",
    transform: `translateX(${lerp(0, 260, smooth(tSplit))}px)`,
    opacity: lerp(1, 0.15, smooth(tSplit))
  } }, "built on decades.")), /* @__PURE__ */ React.createElement("p", { className: "lede", style: {
    margin: "28px auto 0",
    textAlign: "center",
    opacity: smooth(tHeadline) * (1 - tSplit)
  } }, "Institutional research across MENA & frontier markets \u2014 equity, macro, and thematic coverage used by ", /* @__PURE__ */ React.createElement("em", null, "420+"), " buy-side desks."))), /* @__PURE__ */ React.createElement("div", { className: "hero-dashboard", style: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: dashOp
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    transform: `scale(${dashScale})`,
    width: "min(1180px, 92vw)",
    transformOrigin: "center"
  } }, /* @__PURE__ */ React.createElement(AssemblingDashboard, { progress: tUI }))), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 56,
    right: 56,
    bottom: 32,
    display: "flex",
    alignItems: "center",
    gap: 16,
    fontFamily: "var(--mono)",
    fontSize: 11,
    color: "var(--ink-faint)"
  } }, /* @__PURE__ */ React.createElement("span", { className: "caps", style: { color: "var(--ink-dim)" } }, "Scroll"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: 1, background: "var(--rule)", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: `${p * 100}%`,
    background: "var(--accent)"
  } })), /* @__PURE__ */ React.createElement("span", null, String(Math.round(p * 100)).padStart(3, "0"), "%"))));
}
function AssemblingDashboard({ progress }) {
  const parts = [
    range(progress, 0, 0.25),
    // frame + header
    range(progress, 0.15, 0.4),
    // left nav
    range(progress, 0.25, 0.5),
    // main chart
    range(progress, 0.4, 0.65),
    // stat tiles
    range(progress, 0.55, 0.8),
    // right rail
    range(progress, 0.7, 1)
    // bottom reports
  ];
  return /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--bg-2)",
    borderRadius: 14,
    border: "1px solid var(--rule-strong)",
    opacity: parts[0],
    transform: `translateY(${lerp(40, 0, parts[0])}px)`,
    boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 20px",
    borderBottom: "1px solid var(--rule)",
    fontSize: 12,
    fontFamily: "var(--mono)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 16, color: "var(--ink-dim)" } }, /* @__PURE__ */ React.createElement("span", null, "EFG \xB7 Research Terminal"), /* @__PURE__ */ React.createElement("span", null, "\xB7"), /* @__PURE__ */ React.createElement("span", null, "MENA / Equities")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { className: "caps", style: { color: "var(--accent)" } }, "Live"), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--ink-dim)" } }, "15:24 GST"))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "180px 1fr 260px", minHeight: 460 } }, /* @__PURE__ */ React.createElement("div", { style: {
    borderRight: "1px solid var(--rule)",
    padding: 18,
    opacity: parts[1],
    transform: `translateX(${lerp(-20, 0, parts[1])}px)`
  } }, ["Markets", "Coverage", "Reports", "Analysts", "Screener", "Macro"].map(
    (x, i) => /* @__PURE__ */ React.createElement("div", { key: x, style: {
      padding: "10px 0",
      fontSize: 13,
      color: i === 2 ? "var(--ink)" : "var(--ink-dim)",
      borderLeft: i === 2 ? "2px solid var(--accent)" : "2px solid transparent",
      paddingLeft: 10,
      marginLeft: -10
    } }, x)
  )), /* @__PURE__ */ React.createElement("div", { style: { padding: 20 } }, /* @__PURE__ */ React.createElement("div", { style: {
    opacity: parts[2],
    transform: `translateY(${lerp(20, 0, parts[2])}px)`
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-dim)", fontFamily: "var(--mono)" } }, "EGX 30 \xB7 INDEX"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 28, fontFamily: "var(--serif)" } }, "28,412.60 ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, color: "var(--green)" } }, "+1.24%"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, alignSelf: "flex-start" } }, ["1D", "1W", "1M", "1Y", "5Y"].map(
    (t, i) => /* @__PURE__ */ React.createElement("span", { key: t, style: {
      padding: "4px 10px",
      fontSize: 11,
      fontFamily: "var(--mono)",
      border: "1px solid var(--rule)",
      borderRadius: 4,
      color: i === 3 ? "var(--ink)" : "var(--ink-dim)",
      background: i === 3 ? "var(--bg-3)" : "transparent"
    } }, t)
  ))), /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 560 200", style: { width: "100%", height: 200 } }, [0, 1, 2, 3].map(
    (i) => /* @__PURE__ */ React.createElement("line", { key: i, x1: "0", x2: "560", y1: 50 * i + 10, y2: 50 * i + 10, stroke: "rgba(244,239,230,0.06)" })
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M0,150 C60,140 80,120 130,110 C180,100 200,130 240,120 C290,108 320,70 380,75 C420,78 460,55 500,40 L560,30",
      fill: "none",
      stroke: "var(--accent)",
      strokeWidth: "2",
      style: { strokeDasharray: 1400, strokeDashoffset: lerp(1400, 0, parts[2]) }
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M0,150 C60,140 80,120 130,110 C180,100 200,130 240,120 C290,108 320,70 380,75 C420,78 460,55 500,40 L560,30 L560,200 L0,200 Z",
      fill: "url(#g)",
      opacity: parts[2] * 0.3
    }
  ), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "g", x1: "0", x2: "0", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "var(--accent)" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "var(--accent)", stopOpacity: "0" }))))), /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 10,
    marginTop: 18,
    opacity: parts[3],
    transform: `translateY(${lerp(20, 0, parts[3])}px)`
  } }, [
    ["Coverage", "420", "issuers"],
    ["Analysts", "56", "across 9 desks"],
    ["Reports YTD", "1,284", "+18% vs \u201925"]
  ].map(
    ([k, v, s]) => /* @__PURE__ */ React.createElement("div", { key: k, style: { padding: 14, border: "1px solid var(--rule)", borderRadius: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--ink-dim)", textTransform: "uppercase", letterSpacing: "0.1em" } }, k), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 26, marginTop: 6 } }, v), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-faint)" } }, s))
  ))), /* @__PURE__ */ React.createElement("div", { style: {
    borderLeft: "1px solid var(--rule)",
    padding: 18,
    opacity: parts[4],
    transform: `translateX(${lerp(20, 0, parts[4])}px)`,
    fontSize: 12
  } }, /* @__PURE__ */ React.createElement("div", { className: "caps", style: { color: "var(--ink-dim)", marginBottom: 10 } }, "Top Picks"), [
    ["COMI", "Commercial Intl", "+2.14%", "BUY"],
    ["EMAAR", "Emaar Properties", "+0.87%", "BUY"],
    ["STC", "Saudi Telecom", "-0.42%", "HOLD"],
    ["QNBK", "QNB Group", "+1.33%", "BUY"]
  ].map(
    ([s, n, c, r]) => /* @__PURE__ */ React.createElement("div", { key: s, style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "9px 0",
      borderBottom: "1px solid var(--rule)",
      color: "rgb(164, 168, 20)"
    } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, s), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-faint)", fontSize: 10 } }, n)), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", color: c.startsWith("+") ? "var(--green)" : "var(--red)" } }, c), /* @__PURE__ */ React.createElement("div", { style: {
      fontSize: 9,
      color: "var(--accent)",
      fontFamily: "var(--mono)",
      letterSpacing: "0.1em"
    } }, r)))
  ))), /* @__PURE__ */ React.createElement("div", { style: {
    borderTop: "1px solid var(--rule)",
    padding: "12px 20px",
    display: "flex",
    gap: 14,
    fontSize: 11,
    fontFamily: "var(--mono)",
    opacity: parts[5],
    transform: `translateY(${lerp(20, 0, parts[5])}px)`
  } }, /* @__PURE__ */ React.createElement("span", { className: "caps", style: { color: "var(--accent)" } }, "Published today"), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--ink-dim)" } }, "Saudi Banks: Q1 preview \u2014 net interest margin resilience"), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--ink-faint)" } }, "\xB7"), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--ink-dim)" } }, "Egypt macro: IMF review implications")));
}
function HeroBold() {
  const pinRef = React.useRef(null);
  const p = useScrollProgress(pinRef);
  const tIntro = range(p, 0, 0.2);
  const tMap = range(p, 0.15, 0.5);
  const tCards = range(p, 0.4, 0.75);
  const tFinal = range(p, 0.7, 1);
  return /* @__PURE__ */ React.createElement("section", { ref: pinRef, className: "pinned", style: { height: "420vh" } }, /* @__PURE__ */ React.createElement("div", { className: "sticky", style: {
    background: `radial-gradient(circle at 50% ${lerp(120, 40, tMap)}%, rgba(255,130,0,${0.16 * smooth(tMap)}) 0%, transparent 60%), var(--bg)`
  } }, /* @__PURE__ */ React.createElement("div", { className: "gridlines", style: {
    position: "absolute",
    inset: -100,
    opacity: 0.35,
    transform: `translate3d(${p * -80}px, ${p * -60}px, 0) rotate(-2deg) scale(1.2)`
  } }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: `translate(-50%, -50%) rotate(${p * 120}deg) scale(${lerp(0.5, 1.8, smooth(tMap))})`,
    opacity: smooth(tMap) * 0.6,
    pointerEvents: "none"
  } }, [0, 1, 2].map(
    (i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: 600 + i * 200,
      height: 600 + i * 200,
      transform: `translate(-50%,-50%) rotate(${i * 40}deg)`,
      border: "1px dashed var(--rule-strong)",
      borderRadius: "50%"
    } })
  )), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: `translate(-50%, -50%) scale(${lerp(0.7, 1.1, smooth(tMap))})`,
    opacity: smooth(tMap) * (1 - tFinal * 0.6),
    pointerEvents: "none"
  } }, /* @__PURE__ */ React.createElement(MenaMap, { pulse: tMap })), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 40px",
    textAlign: "center"
  } }, /* @__PURE__ */ React.createElement("div", { className: "section-label", style: {
    justifyContent: "center",
    opacity: 1 - tFinal,
    transform: `translateY(${lerp(0, -20, tFinal)}px)`
  } }, /* @__PURE__ */ React.createElement("span", null, "EFG Hermes Research \xB7 MENA & Frontier")), /* @__PURE__ */ React.createElement("h1", { className: "hero-title", style: {
    maxWidth: 1100,
    transform: `translateY(${lerp(0, -40, tCards)}px)`,
    opacity: 1 - tCards * 0.4
  } }, "The", " ", /* @__PURE__ */ React.createElement("span", { className: "serif", style: { fontStyle: "italic", color: "var(--accent)" } }, "signal"), " ", "beneath", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-block",
    background: `linear-gradient(90deg, var(--ink) ${lerp(0, 100, tMap)}%, var(--ink-faint) ${lerp(0, 100, tMap)}%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text"
  } }, "emerging market noise.")), /* @__PURE__ */ React.createElement("p", { className: "lede", style: {
    marginTop: 28,
    opacity: (1 - tCards) * smooth(tIntro)
  } }, "Thirty years of on-the-ground MENA research. Delivered in a portal built for desks that move before the news does.")), /* @__PURE__ */ React.createElement(FloatingCards, { progress: tCards }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: smooth(tFinal),
    pointerEvents: tFinal > 0.5 ? "auto" : "none"
  } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { className: "caps", style: { color: "var(--accent)", marginBottom: 16 } }, "Institutional access"), /* @__PURE__ */ React.createElement("h2", { className: "section-title", style: { fontSize: "clamp(40px, 5.5vw, 80px)" } }, "See what the desks see."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12, justifyContent: "center", marginTop: 28 } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary" }, "Request access \u2192"), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost" }, "View sample report")))), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 56,
    bottom: 32,
    fontFamily: "var(--mono)",
    fontSize: 10,
    color: "var(--ink-faint)",
    lineHeight: 1.6
  } }, /* @__PURE__ */ React.createElement("div", null, "LAT 24.4539\xB0 N"), /* @__PURE__ */ React.createElement("div", null, "LON 54.3773\xB0 E"), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--accent)" } }, "CONVICTION.IDX ", (0.74 + p * 0.21).toFixed(3))), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    right: 56,
    bottom: 32,
    fontFamily: "var(--mono)",
    fontSize: 10,
    color: "var(--ink-faint)",
    textAlign: "right",
    lineHeight: 1.6
  } }, /* @__PURE__ */ React.createElement("div", null, "SESSION \xB7 OPEN"), /* @__PURE__ */ React.createElement("div", null, "LAST TICK \xB7 00:00:04 AGO"), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--accent)" } }, String(Math.round(p * 100)).padStart(3, "0"), " \xB7 SCROLL"))));
}
function MenaMap({ pulse }) {
  const cities = [
    { name: "Cairo", x: 440, y: 260, r: 10, tier: 1 },
    { name: "Riyadh", x: 620, y: 320, r: 12, tier: 1 },
    { name: "Dubai", x: 720, y: 340, r: 11, tier: 1 },
    { name: "Doha", x: 680, y: 330, r: 7, tier: 2 },
    { name: "Kuwait", x: 640, y: 290, r: 7, tier: 2 },
    { name: "Amman", x: 500, y: 250, r: 6, tier: 2 },
    { name: "Beirut", x: 495, y: 235, r: 6, tier: 2 },
    { name: "Casa.", x: 180, y: 270, r: 7, tier: 2 },
    { name: "Lagos", x: 300, y: 450, r: 8, tier: 3 },
    { name: "Nairobi", x: 540, y: 500, r: 7, tier: 3 },
    { name: "Karachi", x: 820, y: 350, r: 8, tier: 3 }
  ];
  return /* @__PURE__ */ React.createElement("svg", { width: "900", height: "640", viewBox: "0 0 900 640", style: { maxWidth: "90vw" } }, /* @__PURE__ */ React.createElement("g", { opacity: "0.18", fill: "var(--ink)" }, /* @__PURE__ */ React.createElement("path", { d: "M120,180 Q260,140 400,180 T680,200 Q780,220 820,270 L800,330 Q780,370 720,390 Q620,400 540,380 Q420,360 320,380 Q220,390 160,340 Q110,290 120,180 Z" }), /* @__PURE__ */ React.createElement("path", { d: "M260,400 Q360,380 440,420 T640,470 Q680,500 640,540 Q520,580 380,560 Q280,540 240,500 Q220,440 260,400 Z" })), [0, 1, 2].map(
    (i) => /* @__PURE__ */ React.createElement(
      "ellipse",
      {
        key: i,
        cx: "450",
        cy: "340",
        rx: 260 + i * 60,
        ry: 180 + i * 40,
        fill: "none",
        stroke: "var(--rule-strong)",
        strokeDasharray: "3 6"
      }
    )
  ), [[0, 1], [1, 2], [2, 3], [1, 4], [0, 5], [5, 6], [0, 7], [0, 8], [1, 10], [2, 10]].map(([a, b], i) => {
    const A = cities[a], B = cities[b];
    const show = clamp((pulse - 0.3) / 0.4);
    return /* @__PURE__ */ React.createElement(
      "line",
      {
        key: i,
        x1: A.x,
        y1: A.y,
        x2: B.x,
        y2: B.y,
        stroke: "var(--accent)",
        strokeWidth: "1",
        opacity: show * 0.4
      }
    );
  }), cities.map((c, i) => {
    const on = clamp((pulse - i * 0.04) * 3);
    return /* @__PURE__ */ React.createElement("g", { key: c.name }, /* @__PURE__ */ React.createElement("circle", { cx: c.x, cy: c.y, r: c.r * (1 + on * 0.6), fill: "var(--accent)", opacity: on * 0.18 }), /* @__PURE__ */ React.createElement("circle", { cx: c.x, cy: c.y, r: c.r * 0.6, fill: "var(--accent)", opacity: on }), c.tier === 1 && /* @__PURE__ */ React.createElement(
      "text",
      {
        x: c.x + c.r + 8,
        y: c.y + 4,
        fontFamily: "var(--mono)",
        fontSize: "11",
        fill: "var(--ink)",
        opacity: on
      },
      c.name.toUpperCase()
    ));
  }));
}
function FloatingCards({ progress }) {
  const cards = [
    {
      title: "Saudi Banks",
      subtitle: "Q1 net interest margin",
      tag: "OVERWEIGHT",
      x: -40,
      y: -30,
      rot: -6,
      delay: 0
    },
    {
      title: "Egypt Macro",
      subtitle: "FX liberalization watch",
      tag: "NEUTRAL",
      x: 34,
      y: -18,
      rot: 4,
      delay: 0.1
    },
    {
      title: "UAE Real Estate",
      subtitle: "Cycle maturity analysis",
      tag: "OVERWEIGHT",
      x: -28,
      y: 22,
      rot: -3,
      delay: 0.2
    },
    {
      title: "Frontier Flows",
      subtitle: "Pakistan / Kenya / Nigeria",
      tag: "SELECTIVE",
      x: 30,
      y: 28,
      rot: 5,
      delay: 0.3
    }
  ];
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none"
  } }, cards.map((c, i) => {
    const t = clamp((progress - c.delay) * 2);
    return /* @__PURE__ */ React.createElement("div", { key: i, style: {
      position: "absolute",
      left: `calc(50% + ${c.x}vw)`,
      top: `calc(50% + ${c.y}vh)`,
      transform: `translate(-50%, -50%) rotate(${c.rot * smooth(t)}deg) scale(${lerp(0.6, 1, smooth(t))})`,
      opacity: smooth(t) * (1 - clamp((progress - 0.85) * 6))
    } }, /* @__PURE__ */ React.createElement(ResearchCard, { ...c }));
  }));
}
function ResearchCard({ title, subtitle, tag }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: 280,
    padding: 18,
    borderRadius: 10,
    background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
    border: "1px solid var(--rule-strong)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("span", { className: "caps", style: { color: "var(--accent)" } }, "Research note"), /* @__PURE__ */ React.createElement("span", { className: "caps", style: { color: "var(--ink-dim)" } }, tag)), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 22, lineHeight: 1.1, marginBottom: 6 } }, title), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-dim)", fontSize: 13, marginBottom: 14 } }, subtitle), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4, alignItems: "flex-end", height: 36 } }, [0.4, 0.5, 0.35, 0.6, 0.72, 0.65, 0.8, 0.7, 0.9, 0.85].map(
    (h, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      flex: 1,
      height: `${h * 100}%`,
      background: i > 6 ? "var(--accent)" : "var(--rule-strong)",
      borderRadius: 2
    } })
  )));
}
function HeroMobile() {
  return /* @__PURE__ */ React.createElement("section", { style: { padding: "80px 24px 60px", position: "relative", background: "var(--bg)" } }, /* @__PURE__ */ React.createElement("div", { className: "section-label", style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, background: "var(--accent)", display: "inline-block" } }), "EFG \xB7 2026"), /* @__PURE__ */ React.createElement("h1", { className: "hero-title", style: {
    fontSize: "clamp(40px, 10vw, 56px)",
    lineHeight: 1.02,
    letterSpacing: "-0.03em",
    marginBottom: 24
  } }, "Conviction", " ", /* @__PURE__ */ React.createElement("span", { className: "serif", style: { fontStyle: "italic", color: "var(--accent)" } }, "in numbers"), ",", " ", "built on decades."), /* @__PURE__ */ React.createElement("p", { className: "lede", style: { marginBottom: 28 } }, "Institutional research across MENA & frontier markets \u2014 equity, macro, and thematic coverage used by ", /* @__PURE__ */ React.createElement("em", null, "420+"), " buy-side desks."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary", href: "#", style: { textAlign: "center" } }, "Request access"), /* @__PURE__ */ React.createElement("a", { className: "btn", href: "#", style: { textAlign: "center" } }, "See latest research \u2192")), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 40,
    paddingTop: 24,
    borderTop: "1px solid var(--rule)",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 16
  } }, /* @__PURE__ */ React.createElement(HeroStat, { big: "420", label: "Issuers" }), /* @__PURE__ */ React.createElement(HeroStat, { big: "56", label: "Analysts" }), /* @__PURE__ */ React.createElement(HeroStat, { big: "30y", label: "Coverage" })), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 36,
    padding: 20,
    borderRadius: 10,
    background: "var(--bg-2)",
    border: "1px solid var(--rule)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 10 } }, /* @__PURE__ */ React.createElement("span", { className: "caps", style: { color: "var(--accent)", fontSize: 11 } }, "Today"), /* @__PURE__ */ React.createElement("span", { className: "caps", style: { color: "var(--ink-dim)", fontSize: 11 } }, "Macro \xB7 Egypt")), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 22, lineHeight: 1.15, marginBottom: 8 } }, "FX normalization: what sticks after the float"), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-dim)", fontSize: 13 } }, "Mohamed Abu Basha \xB7 Head of Macro \xB7 4 min read")));
}
function HeroStat({ big, label }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 32, lineHeight: 1, marginBottom: 6 } }, big), /* @__PURE__ */ React.createElement("div", { className: "caps", style: { fontSize: 10, color: "var(--ink-dim)" } }, label));
}
Object.assign(window, { HeroSafe, HeroBold, HeroMobile });
function CoverageSafe() {
  const ref = React.useRef(null);
  const p = useScrollProgress(ref);
  const sectors = [
    {
      name: "Banks & Financials",
      code: "BNK",
      issuers: 68,
      change: "+1.2%",
      up: true,
      note: "Margin expansion theme \u2014 Saudi / UAE leading."
    },
    {
      name: "Real Estate",
      code: "RE",
      issuers: 41,
      change: "+0.6%",
      up: true,
      note: "UAE cycle maturity, Egypt reform optionality."
    },
    {
      name: "Energy & Petrochem",
      code: "NRG",
      issuers: 52,
      change: "-0.3%",
      up: false,
      note: "Crack spreads normalizing; selective entry."
    },
    {
      name: "Consumer & Retail",
      code: "CON",
      issuers: 47,
      change: "+0.9%",
      up: true,
      note: "F&B modernization, Gulf tourism tailwinds."
    },
    {
      name: "Telecom & Tech",
      code: "TMT",
      issuers: 33,
      change: "+2.1%",
      up: true,
      note: "AI capex, data-center land rush."
    },
    {
      name: "Healthcare",
      code: "HLT",
      issuers: 28,
      change: "+0.4%",
      up: true,
      note: "Insurance reform, pharma localization."
    },
    {
      name: "Industrials",
      code: "IND",
      issuers: 51,
      change: "-0.1%",
      up: false,
      note: "Giga-project suppliers; lumpy earnings."
    },
    {
      name: "Materials & Mining",
      code: "MTR",
      issuers: 22,
      change: "+1.6%",
      up: true,
      note: "Copper + lithium theme; Morocco phosphates."
    }
  ];
  return /* @__PURE__ */ React.createElement("section", { ref, style: { padding: "140px 0 160px", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { className: "shell" }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "sticky", top: 120 } }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Coverage \xB7 8 desks"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "Every sector that ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "serif", style: { fontStyle: "italic", color: "var(--accent)" } }, "matters"), " in MENA."), /* @__PURE__ */ React.createElement("p", { className: "lede", style: { marginTop: 24 } }, "420 issuers under active coverage, updated by analysts embedded in Cairo, Riyadh, Dubai and Nairobi."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 32, marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--rule)" } }, /* @__PURE__ */ React.createElement(Stat, { big: "420", label: "Issuers" }), /* @__PURE__ */ React.createElement(Stat, { big: "56", label: "Analysts" }), /* @__PURE__ */ React.createElement(Stat, { big: "9", label: "Sectors" }))), /* @__PURE__ */ React.createElement("div", null, sectors.map((s, i) => {
    const t = range(p, i * 0.08, i * 0.08 + 0.25);
    return /* @__PURE__ */ React.createElement("div", { key: s.code, style: {
      padding: "26px 0",
      borderBottom: "1px solid var(--rule)",
      display: "grid",
      gridTemplateColumns: "60px 1fr auto 100px",
      gap: 20,
      alignItems: "baseline",
      opacity: clamp(0.15 + t * 0.85),
      transform: `translateX(${lerp(-20, 0, t)}px)`,
      transition: "transform .3s ease-out"
    } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: { color: "var(--accent)" } }, s.code), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 26, marginBottom: 6 } }, s.name), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-dim)", fontSize: 14 } }, s.note)), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { color: "var(--ink-dim)" } }, s.issuers, " issuers"), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { color: s.up ? "var(--green)" : "var(--red)", textAlign: "right" } }, s.change));
  })))));
}
function Stat({ big, label }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 44, lineHeight: 1 } }, big), /* @__PURE__ */ React.createElement("div", { className: "caps", style: { color: "var(--ink-dim)", marginTop: 6 } }, label));
}
function CoverageBold() {
  const ref = React.useRef(null);
  const p = useScrollProgress(ref);
  const trackRef = React.useRef(null);
  const panels = [
    {
      code: "BNK",
      name: "Banks & Financials",
      hero: "68",
      heroLabel: "issuers",
      metric: "+1.2%",
      tag: "OVERWEIGHT",
      description: "MENA banks entering structural ROE regime. Saudi and UAE leading, Egypt catching up as FX clears.",
      highlights: ["Net interest margin resilience", "Corporate loan book expansion", "Cost-of-risk normalization"]
    },
    {
      code: "RE",
      name: "Real Estate",
      hero: "41",
      heroLabel: "issuers",
      metric: "+0.6%",
      tag: "OVERWEIGHT",
      description: "UAE late cycle, Saudi giga-project ecosystem, Egypt offering asymmetric reform beta.",
      highlights: ["Off-plan launch pace", "Rental yield vs. bond spreads", "Mortgage penetration"]
    },
    {
      code: "NRG",
      name: "Energy & Petrochem",
      hero: "52",
      heroLabel: "issuers",
      metric: "-0.3%",
      tag: "NEUTRAL",
      description: "Petrochem trough approaching; integrated refiners best positioned. Selective entry required.",
      highlights: ["Crack spread mean reversion", "Capex discipline returning", "ME-to-Asia trade flows"]
    },
    {
      code: "TMT",
      name: "Telecom, Media & Tech",
      hero: "33",
      heroLabel: "issuers",
      metric: "+2.1%",
      tag: "OVERWEIGHT",
      description: "Data-center build-out, AI enablement spend, and regional cloud sovereignty creating a new TMT cycle.",
      highlights: ["Saudi data-center land rush", "Fiber monetization", "AI-enablement capex"]
    },
    {
      code: "CON",
      name: "Consumer & Retail",
      hero: "47",
      heroLabel: "issuers",
      metric: "+0.9%",
      tag: "SELECTIVE",
      description: "Modern-format F&B, Gulf tourism spillover, and Egyptian disinflation are the three live theses.",
      highlights: ["QSR unit economics", "Tourism value capture", "Egypt disinflation trade"]
    }
  ];
  const panelWidthPct = 78;
  const translate = p * (panels.length - 1) * panelWidthPct;
  return /* @__PURE__ */ React.createElement("section", { ref, className: "pinned", style: { height: `${panels.length * 110}vh` } }, /* @__PURE__ */ React.createElement("div", { className: "sticky", style: { background: "var(--bg)" } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    zIndex: 3,
    padding: "80px 56px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    background: "linear-gradient(180deg, var(--bg), transparent)"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Coverage \xB7 horizontal"), /* @__PURE__ */ React.createElement("h2", { className: "section-title", style: { fontSize: "clamp(32px, 4vw, 54px)" } }, "Nine desks. ", /* @__PURE__ */ React.createElement("span", { className: "serif", style: { fontStyle: "italic", color: "var(--accent)" } }, "One shelf."))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-dim)" } }, /* @__PURE__ */ React.createElement("div", { className: "caps" }, "Scroll to pan"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 4, color: "var(--accent)" } }, String(Math.min(panels.length, Math.floor(p * panels.length) + 1)).padStart(2, "0"), " / ", String(panels.length).padStart(2, "0")))), /* @__PURE__ */ React.createElement("div", { ref: trackRef, style: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    gap: 40,
    padding: "0 11vw",
    transform: `translateX(-${translate}vw)`,
    willChange: "transform"
  } }, panels.map((pa, i) => {
    const center = i / (panels.length - 1);
    const dist = Math.abs(p - center);
    const focus = clamp(1 - dist * 2.5);
    return /* @__PURE__ */ React.createElement("div", { key: pa.code, style: {
      width: `${panelWidthPct - 4}vw`,
      flexShrink: 0,
      transform: `scale(${lerp(0.88, 1, focus)})`,
      opacity: lerp(0.25, 1, focus),
      transition: "opacity .3s ease"
    } }, /* @__PURE__ */ React.createElement(CoveragePanel, { data: pa, focus, idx: i }));
  })), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 56,
    right: 56,
    bottom: 40,
    zIndex: 3,
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontFamily: "var(--mono)",
    fontSize: 11,
    color: "var(--ink-faint)"
  } }, panels.map((pa, i) => {
    const center = i / (panels.length - 1);
    const dist = Math.abs(p - center);
    const focus = clamp(1 - dist * 2.5);
    return /* @__PURE__ */ React.createElement("div", { key: i, style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: focus > 0.5 ? "var(--accent)" : "var(--ink-faint)"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: focus > 0.5 ? 28 : 14,
      height: 2,
      background: "currentColor",
      transition: "width .4s"
    } }), /* @__PURE__ */ React.createElement("span", null, pa.code));
  }))));
}
function CoveragePanel({ data, focus, idx }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    height: "72vh",
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr",
    gap: 40,
    padding: 48,
    background: "linear-gradient(150deg, var(--bg-2), var(--bg-3))",
    border: "1px solid var(--rule-strong)",
    borderRadius: 20,
    position: "relative",
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    right: -80,
    bottom: -180,
    fontFamily: "var(--serif)",
    fontSize: 680,
    lineHeight: 1,
    color: "var(--accent)",
    opacity: 0.06,
    letterSpacing: "-0.08em",
    pointerEvents: "none"
  } }, String(idx + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--accent)", fontSize: 13, marginBottom: 20 } }, "[ ", data.code, " \xB7 DESK ", String(idx + 1).padStart(2, "0"), " ]"), /* @__PURE__ */ React.createElement("h3", { style: {
    fontFamily: "var(--serif)",
    fontWeight: 400,
    fontSize: "clamp(44px, 5vw, 72px)",
    lineHeight: 1,
    letterSpacing: "-0.025em",
    marginBottom: 28
  } }, data.name), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-dim)", fontSize: 17, lineHeight: 1.5, maxWidth: 540 } }, data.description)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 40, alignItems: "baseline" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono caps", style: { color: "var(--ink-faint)" } }, "Issuers"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 56 } }, data.hero)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono caps", style: { color: "var(--ink-faint)" } }, "30-day"), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: "var(--mono)",
    fontSize: 24,
    color: data.metric.startsWith("+") ? "var(--green)" : "var(--red)"
  } }, data.metric)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono caps", style: { color: "var(--ink-faint)" } }, "Stance"), /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    color: "var(--accent)",
    fontSize: 14,
    marginTop: 8,
    padding: "4px 10px",
    border: "1px solid var(--accent)",
    borderRadius: 4,
    display: "inline-block"
  } }, data.tag)))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono caps", style: { color: "var(--ink-faint)", marginBottom: 12 } }, "Sector index \xB7 1Y"), /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 400 140", style: { width: "100%" } }, [0, 1, 2].map(
    (i) => /* @__PURE__ */ React.createElement("line", { key: i, x1: "0", x2: "400", y1: 40 * i + 20, y2: 40 * i + 20, stroke: "var(--rule)" })
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: `M0,${100 - idx * 6} C40,${90 - idx * 8} 80,${80 - idx * 4} 120,${75 + idx * 3} S200,${55} 240,${50 - idx * 2} S320,${40 - idx * 3} 400,${30 - idx * 5}`,
      fill: "none",
      stroke: "var(--accent)",
      strokeWidth: "2"
    }
  ))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono caps", style: { color: "var(--ink-faint)", marginBottom: 12 } }, "Live theses"), data.highlights.map(
    (h, i) => /* @__PURE__ */ React.createElement("div", { key: h, style: {
      padding: "12px 0",
      borderTop: "1px solid var(--rule)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      transform: `translateX(${lerp(10, 0, focus)}px)`,
      opacity: focus,
      transition: "all .4s",
      transitionDelay: `${i * 60}ms`
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 15 } }, h), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { color: "var(--accent)", fontSize: 11 } }, "\u2192"))
  ))));
}
Object.assign(window, { CoverageSafe, CoverageBold });
const COVERED = {
  // ISO numeric codes (TopoJSON `id` field)
  818: {
    code: "EGY",
    name: "Egypt",
    companies: 18,
    mcap: "$42B",
    sectors: [
      { name: "Commercial International Ba\u2026", sector: "Financial Services" },
      { name: "Eastern Company", sector: "Consumer Staples" },
      { name: "Telecom Egypt", sector: "Telecommunications" },
      { name: "Fawry for Banking", sector: "Fintech" }
    ]
  },
  682: {
    code: "KSA",
    name: "Saudi Arabia",
    companies: 42,
    mcap: "$680B",
    sectors: [
      { name: "Saudi Aramco", sector: "Energy" },
      { name: "Al Rajhi Bank", sector: "Financial Services" },
      { name: "SABIC", sector: "Materials" },
      { name: "STC", sector: "Telecommunications" }
    ]
  },
  414: {
    code: "KWT",
    name: "Kuwait",
    companies: 14,
    mcap: "$118B",
    sectors: [
      { name: "Kuwait Finance House", sector: "Financial Services" },
      { name: "National Bank of Kuwait", sector: "Financial Services" }
    ]
  },
  634: {
    code: "QAT",
    name: "Qatar",
    companies: 12,
    mcap: "$165B",
    sectors: [
      { name: "Qatar National Bank", sector: "Financial Services" },
      { name: "Industries Qatar", sector: "Industrials" }
    ]
  },
  784: {
    code: "UAE",
    name: "UAE",
    companies: 24,
    mcap: "$340B",
    sectors: [
      { name: "Emirates NBD", sector: "Financial Services" },
      { name: "Emaar Properties", sector: "Real Estate" },
      { name: "DP World", sector: "Industrials" }
    ]
  },
  512: {
    code: "OMN",
    name: "Oman",
    companies: 9,
    mcap: "$28B",
    sectors: [
      { name: "Bank Muscat", sector: "Financial Services" },
      { name: "Oman Telecom", sector: "Telecommunications" }
    ]
  }
};
const COUNTRY_LABELS = {
  // Shown as gray labels
  792: "TURKEY",
  760: "SYRIA",
  368: "IRAQ",
  364: "IRAN",
  400: "JORDAN",
  887: "YEMEN",
  729: "SUDAN",
  434: "LIBYA",
  376: "ISRAEL",
  422: "LEBANON",
  48: "BAHRAIN"
};
const MAP_BBOX = { west: -5, east: 70, north: 45, south: 5 };
function project([lon, lat], W = 920, H = 620) {
  const { west, east, north, south } = MAP_BBOX;
  const x = (lon - west) / (east - west) * W;
  const y = (north - lat) / (north - south) * H;
  return [x, y];
}
function polygonToPath(rings) {
  return rings.map((ring) => {
    return ring.map((pt, i) => {
      const [x, y] = project(pt);
      return (i === 0 ? "M" : "L") + x.toFixed(1) + "," + y.toFixed(1);
    }).join("") + "Z";
  }).join("");
}
function geometryToPath(geom) {
  if (!geom) return "";
  if (geom.type === "Polygon") return polygonToPath(geom.coordinates);
  if (geom.type === "MultiPolygon") {
    return geom.coordinates.map((rings) => polygonToPath(rings)).join("");
  }
  return "";
}
function decodeTopology(topology, objectName) {
  const o = topology.objects[objectName];
  const arcs = topology.arcs;
  const { scale = [1, 1], translate = [0, 0] } = topology.transform || {};
  function decodeArc(i) {
    const reverse = i < 0;
    if (reverse) i = ~i;
    const arc = arcs[i];
    const out = [];
    let x = 0, y = 0;
    for (const [dx, dy] of arc) {
      x += dx;
      y += dy;
      out.push([x * scale[0] + translate[0], y * scale[1] + translate[1]]);
    }
    return reverse ? out.reverse() : out;
  }
  function assembleRing(arcIndices) {
    const ring = [];
    for (let k = 0; k < arcIndices.length; k++) {
      const seg = decodeArc(arcIndices[k]);
      if (k > 0) seg.shift();
      ring.push(...seg);
    }
    return ring;
  }
  function assemblePolygon(rings) {
    return rings.map(assembleRing);
  }
  return o.geometries.map((g) => {
    let coords = null;
    if (g.type === "Polygon") coords = assemblePolygon(g.arcs);
    else if (g.type === "MultiPolygon") coords = g.arcs.map((p) => assemblePolygon(p));
    return { id: g.id, properties: g.properties || {}, type: g.type, coordinates: coords };
  });
}
let _topoPromise = null;
function loadCountries() {
  if (_topoPromise) return _topoPromise;
  _topoPromise = fetch("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json").then((r) => r.json()).then((topo) => decodeTopology(topo, "countries"));
  return _topoPromise;
}
function useCountries() {
  const [features, setFeatures] = React.useState(null);
  React.useEffect(() => {
    loadCountries().then(setFeatures);
  }, []);
  return features;
}
const LABEL_COORDS = {
  818: [29.5, 27.5],
  // Egypt (interior)
  682: [45, 24],
  // Saudi
  414: [47.7, 29.5],
  // Kuwait
  634: [51.2, 25.3],
  // Qatar
  784: [54.5, 24],
  // UAE
  512: [56, 21],
  // Oman
  792: [35, 39],
  // Turkey
  760: [38, 35],
  // Syria
  368: [44, 33],
  // Iraq
  364: [53, 32],
  // Iran
  400: [36.5, 31.2],
  // Jordan
  887: [47, 15.5],
  // Yemen
  729: [30, 15],
  // Sudan
  434: [18, 27],
  // Libya
  376: [35, 31.5],
  // Israel
  422: [35.8, 34],
  // Lebanon
  48: [50.5, 26]
  // Bahrain
};
function labelPos(id) {
  const c = LABEL_COORDS[id];
  if (!c) return [0, 0];
  return project(c);
}
function RealMap({ hoveredId, selectedId, onHover, onSelect, revealIds, renderScale = 1 }) {
  const features = useCountries();
  if (!features) {
    return /* @__PURE__ */ React.createElement("div", { style: {
      width: "100%",
      aspectRatio: "920/620",
      background: "#E6EEEA",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#A7A6A6",
      fontFamily: "var(--mono)",
      fontSize: 12
    } }, "LOADING MAP\u2026");
  }
  const W = 920, H = 620;
  return /* @__PURE__ */ React.createElement("svg", { viewBox: `0 0 ${W} ${H}`, style: { width: "100%", height: "auto", display: "block", background: "#E6EEEA", borderRadius: 8 } }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("pattern", { id: "sea", width: "8", height: "8", patternUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("rect", { width: "8", height: "8", fill: "#E6EEEA" }))), features.map((f, idx) => {
    const id = f.id;
    const covered = COVERED[id];
    const isHover = hoveredId === id;
    const isSelected = selectedId === id;
    const d = geometryToPath(f);
    if (!d) return null;
    const firstPt = f.type === "Polygon" ? f.coordinates[0][0] : f.coordinates[0][0][0];
    if (firstPt) {
      const [lon, lat] = firstPt;
      if (lon < MAP_BBOX.west - 20 || lon > MAP_BBOX.east + 20 || lat < MAP_BBOX.south - 20 || lat > MAP_BBOX.north + 20) return null;
    }
    let fill, opacity = 1;
    if (covered) {
      if (isSelected || isHover) fill = "#2E7D5A";
      else
        fill = "#D7D9B6";
      if (revealIds && !revealIds.has(id)) {
        fill = "#ECECEC";
        opacity = 0.6;
      }
    } else {
      fill = "#ECECEC";
    }
    return /* @__PURE__ */ React.createElement(
      "path",
      {
        key: id || "f" + idx,
        d,
        fill,
        opacity,
        stroke: "#FFFFFF",
        strokeWidth: "0.8",
        vectorEffect: "non-scaling-stroke",
        style: { cursor: covered ? "pointer" : "default", transition: "fill 220ms ease, opacity 220ms ease" },
        onMouseEnter: () => covered && onHover && onHover(id),
        onMouseLeave: () => covered && onHover && onHover(null),
        onClick: () => covered && onSelect && onSelect(id)
      }
    );
  }), Object.keys(COUNTRY_LABELS).map((idStr) => {
    const id = +idStr;
    const [x, y] = labelPos(id);
    if (!x) return null;
    return /* @__PURE__ */ React.createElement(
      "text",
      {
        key: "l" + id,
        x,
        y,
        textAnchor: "middle",
        fontFamily: "var(--mono)",
        fontSize: "11",
        fontWeight: "500",
        fill: "#B8B8B8",
        style: { letterSpacing: "0.12em", pointerEvents: "none" }
      },
      COUNTRY_LABELS[id]
    );
  }), Object.entries(COVERED).map(([idStr, c]) => {
    const id = +idStr;
    const [x, y] = labelPos(id);
    if (!x) return null;
    const isHover = hoveredId === id;
    const isSelected = selectedId === id;
    const isSmall = ["KWT", "QAT", "UAE", "BHR"].includes(c.code);
    const label = c.name.toUpperCase();
    let color;
    if (isSelected || isHover) color = "#FFFFFF";
    else
      color = "#6B7340";
    if (isSmall && !(isSelected || isHover)) {
      const w = c.code === "KWT" ? 42 : c.code === "UAE" ? 32 : c.code === "QAT" ? 38 : 38;
      return /* @__PURE__ */ React.createElement("g", { key: "l" + id, style: { pointerEvents: "none" } }, /* @__PURE__ */ React.createElement("rect", { x: x - w / 2, y: y - 7, width: w, height: 12, fill: "#D7D9B6", stroke: "#FFFFFF", strokeWidth: "0.8" }), /* @__PURE__ */ React.createElement(
        "text",
        {
          x,
          y: y + 2,
          textAnchor: "middle",
          fontFamily: "var(--mono)",
          fontSize: "7.5",
          fontWeight: "700",
          fill: "#6B7340",
          style: { letterSpacing: "0.1em" }
        },
        label
      ));
    }
    return /* @__PURE__ */ React.createElement(
      "text",
      {
        key: "l" + id,
        x,
        y,
        textAnchor: "middle",
        fontFamily: "var(--mono)",
        fontSize: "12",
        fontWeight: "700",
        fill: color,
        style: { letterSpacing: "0.14em", pointerEvents: "none", transition: "fill 180ms ease" }
      },
      label
    );
  }));
}
function HoverTooltip({ id }) {
  const c = COVERED[id];
  if (!c) return null;
  const [lx, ly] = labelPos(id);
  const xPct = lx / 920 * 100;
  const yPct = ly / 620 * 100;
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: `${xPct}%`,
    top: `${yPct + 4}%`,
    transform: "translate(-10%, 0)",
    background: "#FFFFFF",
    padding: "14px 18px",
    border: "1px solid rgba(0,0,0,0.06)",
    boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
    borderRadius: 4,
    pointerEvents: "none",
    minWidth: 180,
    zIndex: 5
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 18, color: "#1D1D1B", marginBottom: 6 } }, c.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "#555", display: "flex", gap: 12 } }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("b", { style: { color: "#1D1D1B" } }, c.companies), " Companies"), /* @__PURE__ */ React.createElement("span", { style: { color: "#1D1D1B", fontWeight: 600 } }, c.mcap)));
}
function DetailPanel({ id, onClose }) {
  const c = COVERED[id];
  if (!c) return null;
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    right: 20,
    top: 20,
    bottom: 20,
    width: 360,
    background: "#FFFFFF",
    boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
    borderRadius: 8,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    zIndex: 10
  } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#124734", padding: "22px 24px", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 26, lineHeight: 1 } }, c.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, marginTop: 6, opacity: 0.9 } }, c.companies, " Companies")), /* @__PURE__ */ React.createElement("button", { onClick: onClose, style: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: 18,
    cursor: "pointer",
    padding: 4
  } }, "\u2715")), /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 20px", borderBottom: "1px solid #EEE" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#F7F7F5",
    border: "1px solid #E8E8E4",
    borderRadius: 999,
    padding: "8px 14px",
    fontSize: 13,
    color: "#888"
  } }, /* @__PURE__ */ React.createElement("span", null, "\u{1F50D}"), /* @__PURE__ */ React.createElement("span", null, "Search by company name or ticker"))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflowY: "auto", padding: "8px 0" } }, c.sectors.map(
    (s, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 20px",
      borderBottom: "1px solid #F2F2F0",
      cursor: "pointer"
    } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#888" } }, "\u{1F3E2}"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: "#1D1D1B", fontWeight: 500, marginBottom: 4 } }, s.name), /* @__PURE__ */ React.createElement("span", { style: {
      fontSize: 11,
      background: "#F0F0EC",
      padding: "3px 8px",
      borderRadius: 4,
      color: "#666"
    } }, s.sector))), /* @__PURE__ */ React.createElement("span", { style: { color: "#BBB" } }, "\u2192"))
  )), /* @__PURE__ */ React.createElement("div", { style: { padding: 16 } }, /* @__PURE__ */ React.createElement("button", { style: {
    width: "100%",
    background: "#124734",
    color: "#fff",
    border: "none",
    padding: "14px 20px",
    borderRadius: 6,
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer"
  } }, "View Full Country Page")));
}
function MapSafe() {
  const [hovered, setHovered] = React.useState(null);
  const [selected, setSelected] = React.useState(null);
  return /* @__PURE__ */ React.createElement("section", { style: { padding: "140px 0 160px", background: "#F7F7F5" } }, /* @__PURE__ */ React.createElement("div", { className: "shell" }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 60, maxWidth: 900 } }, /* @__PURE__ */ React.createElement("div", { className: "section-label", style: { color: "#A7A6A6" } }, "Geographic coverage"), /* @__PURE__ */ React.createElement("h2", { className: "section-title", style: { color: "#1D1D1B" } }, "Seven markets. ", /* @__PURE__ */ React.createElement("span", { className: "serif", style: { fontStyle: "italic", color: "#124734" } }, "One desk.")), /* @__PURE__ */ React.createElement("p", { className: "lede", style: { marginTop: 20, color: "#555" } }, "Hover a market to preview. Click to drill into coverage.")), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", background: "#FFFFFF", borderRadius: 12, padding: 0, boxShadow: "0 2px 16px rgba(0,0,0,0.04)", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(
    RealMap,
    {
      hoveredId: hovered,
      selectedId: selected,
      onHover: setHovered,
      onSelect: setSelected
    }
  ), hovered && hovered !== selected && /* @__PURE__ */ React.createElement(HoverTooltip, { id: hovered }), selected && /* @__PURE__ */ React.createElement(DetailPanel, { id: selected, onClose: () => setSelected(null) })))));
}
function MapBold() {
  const ref = React.useRef(null);
  const p = useScrollProgress(ref);
  const coveredIds = [818, 682, 414, 634, 784, 512];
  const tReveal = range(p, 0.1, 0.4);
  const tCycle = range(p, 0.42, 1);
  const cycleIdx = Math.min(Math.floor(tCycle * coveredIds.length), coveredIds.length - 1);
  const activeId = p > 0.42 ? coveredIds[cycleIdx] : null;
  const [userHover, setUserHover] = React.useState(null);
  const hovered = userHover || activeId;
  const revealIds = /* @__PURE__ */ new Set();
  const revealCount = Math.floor(tReveal * (coveredIds.length + 0.5));
  for (let i = 0; i < revealCount; i++) revealIds.add(coveredIds[i]);
  if (p > 0.4) coveredIds.forEach((id) => revealIds.add(id));
  return /* @__PURE__ */ React.createElement("section", { ref, className: "pinned", style: { height: "380vh" } }, /* @__PURE__ */ React.createElement("div", { className: "sticky", style: { background: "#F7F7F5", display: "flex", flexDirection: "column", padding: "56px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "section-label", style: { color: "#A7A6A6" } }, "Geographic coverage"), /* @__PURE__ */ React.createElement("h2", { className: "section-title", style: { color: "#1D1D1B", fontSize: "clamp(32px, 4vw, 56px)", maxWidth: 820 } }, "Seven markets. ", /* @__PURE__ */ React.createElement("span", { className: "serif", style: { fontStyle: "italic", color: "#124734" } }, "One desk."))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", fontFamily: "var(--mono)", fontSize: 11, color: "#A7A6A6", lineHeight: 1.6 } }, /* @__PURE__ */ React.createElement("div", null, p < 0.42 ? "MARKETS \xB7 LIGHTING UP" : "AUTO CYCLE \xB7 " + (COVERED[hovered]?.code || "\u2014")), /* @__PURE__ */ React.createElement("div", { style: { color: "#FF8200" } }, String(Math.round(p * 100)).padStart(3, "0"), "% \xB7 SCROLL"))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, position: "relative", background: "#FFFFFF", borderRadius: 12, boxShadow: "0 2px 20px rgba(0,0,0,0.06)", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { width: "100%", maxHeight: "100%" } }, /* @__PURE__ */ React.createElement(
    RealMap,
    {
      hoveredId: hovered,
      onHover: setUserHover,
      revealIds: p < 0.42 ? revealIds : null
    }
  ))), hovered && /* @__PURE__ */ React.createElement(HoverTooltip, { id: hovered })), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    gap: 4,
    marginTop: 20,
    justifyContent: "center"
  } }, coveredIds.map((id) => {
    const c = COVERED[id];
    return /* @__PURE__ */ React.createElement("div", { key: id, style: {
      padding: "6px 14px",
      fontFamily: "var(--mono)",
      fontSize: 11,
      background: hovered === id ? "#124734" : "transparent",
      color: hovered === id ? "#FFF" : "#666",
      border: "1px solid " + (hovered === id ? "#124734" : "#DDD"),
      letterSpacing: "0.08em"
    } }, c.code);
  }))));
}
Object.assign(window, { MapSafe, MapBold });
const NEWS = [
  {
    id: 1,
    tag: "Egypt",
    date: "Apr 17",
    read: "4 min",
    title: "FX normalization: what sticks after the float",
    dek: "Eighteen months in, the real economy is only now metabolizing the new exchange regime. Banks first, consumer staples next.",
    author: "Mohamed Abu Basha",
    role: "Head of Macro",
    kind: "Macro"
  },
  {
    id: 2,
    tag: "Saudi Arabia",
    date: "Apr 17",
    read: "6 min",
    title: "Giga-projects and the private sector multiplier",
    dek: "PIF capex is the headline; the second-order effects on building materials, logistics, and mid-cap industrials are the trade.",
    author: "Rawan Oueidat",
    role: "Lead \xB7 KSA Equities",
    kind: "Equity"
  },
  {
    id: 3,
    tag: "UAE",
    date: "Apr 16",
    read: "3 min",
    title: "Real estate: late cycle, but not the cycle you think",
    dek: "Supply is back, prices are cooling, and yet velocity is holding up. The mix is rotating from speculative to income.",
    author: "Ali Khalpey",
    role: "Financials \xB7 GCC",
    kind: "Equity"
  },
  {
    id: 4,
    tag: "Pakistan",
    date: "Apr 16",
    read: "5 min",
    title: "Frontier re-rating: banks, cement, fertilizer",
    dek: "IMF discipline plus political durability is a rare combination. We take the over on KSE100 earnings for 2026.",
    author: "Ayub Ansari",
    role: "Lead \xB7 Frontier",
    kind: "Strategy"
  },
  {
    id: 5,
    tag: "Morocco",
    date: "Apr 15",
    read: "4 min",
    title: "Phosphates, renewables, and the Africa bridge",
    dek: "OCP's capex cycle is the headline; the untold story is the renewable corridor to Europe and its multiplier on utilities.",
    author: "Jihane Benmansour",
    role: "MENA Macro",
    kind: "Macro"
  },
  {
    id: 6,
    tag: "GCC",
    date: "Apr 15",
    read: "7 min",
    title: "Banks: deposit beta and the end of easy NIMs",
    dek: "Repricing is done on the asset side; the fight from here is funding. We prefer names with sticky corporate deposit franchises.",
    author: "Elena Sanchez-Cabezudo",
    role: "Head of Banks Research",
    kind: "Equity"
  }
];
const FEATURED = NEWS[0];
const FILTERS = ["All", "Macro", "Equity", "Strategy"];
function NewsSafe() {
  const [filter, setFilter] = React.useState("All");
  const list = filter === "All" ? NEWS : NEWS.filter((n) => n.kind === filter);
  const featured = list[0] || FEATURED;
  const rest = list.slice(1);
  return /* @__PURE__ */ React.createElement("section", { style: { padding: "140px 0 160px", background: "#F7F7F5" } }, /* @__PURE__ */ React.createElement("div", { className: "shell" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, gap: 40, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 720 } }, /* @__PURE__ */ React.createElement("div", { className: "section-label", style: { color: "#A7A6A6" } }, "Latest"), /* @__PURE__ */ React.createElement("h2", { className: "section-title", style: { color: "#1D1D1B" } }, "Research ", /* @__PURE__ */ React.createElement("span", { className: "serif", style: { fontStyle: "italic", color: "#124734" } }, "in print."))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, FILTERS.map(
    (f) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: f,
        onClick: () => setFilter(f),
        className: "mono",
        style: {
          padding: "8px 16px",
          fontSize: 11,
          fontFamily: "var(--mono)",
          background: filter === f ? "#124734" : "transparent",
          color: filter === f ? "#FFF" : "#555",
          border: "1px solid " + (filter === f ? "#124734" : "#DDD"),
          letterSpacing: "0.08em",
          cursor: "pointer",
          textTransform: "uppercase"
        }
      },
      f
    )
  ))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "start" } }, /* @__PURE__ */ React.createElement("article", { style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: "100%",
    aspectRatio: "16/10",
    background: "linear-gradient(140deg, #124734, #0B2218)",
    display: "flex",
    alignItems: "flex-end",
    padding: 32,
    position: "relative",
    overflow: "hidden",
    borderRadius: 4
  } }, /* @__PURE__ */ React.createElement("svg", { style: { position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.22 }, viewBox: "0 0 600 400" }, /* @__PURE__ */ React.createElement("g", { stroke: "#FF8200", strokeWidth: "1.5", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M0,280 L80,260 L160,240 L240,190 L320,210 L400,140 L480,160 L560,100 L600,120" }), /* @__PURE__ */ React.createElement("path", { d: "M0,320 L80,310 L160,300 L240,260 L320,280 L400,220 L480,240 L560,180 L600,200", opacity: "0.5" })), [80, 160, 240, 320, 400, 480, 560].map(
    (x, i) => /* @__PURE__ */ React.createElement("circle", { key: i, cx: x, cy: [260, 240, 190, 210, 140, 160, 100][i], r: "3", fill: "#FF8200" })
  )), /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    position: "absolute",
    top: 24,
    left: 32,
    fontSize: 10,
    color: "#FF8200",
    letterSpacing: "0.12em"
  } }, featured.kind.toUpperCase(), " \xB7 ", featured.tag.toUpperCase())), /* @__PURE__ */ React.createElement("div", { style: { padding: "28px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 11, color: "#A7A6A6", letterSpacing: "0.1em", marginBottom: 14 } }, featured.date.toUpperCase(), " \xB7 ", featured.read.toUpperCase()), /* @__PURE__ */ React.createElement("h3", { style: {
    fontFamily: "var(--serif)",
    fontSize: "clamp(28px, 3vw, 42px)",
    lineHeight: 1.1,
    color: "#1D1D1B",
    marginBottom: 16,
    letterSpacing: "-0.015em"
  } }, featured.title), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 17, color: "#555", lineHeight: 1.55, marginBottom: 20, maxWidth: 620 } }, featured.dek), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#1D1D1B" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 32, height: 32, borderRadius: "50%", background: "#D7D9B6" } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 500 } }, featured.author), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#A7A6A6" } }, featured.role))))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 28 } }, rest.map(
    (n) => /* @__PURE__ */ React.createElement("article", { key: n.id, style: {
      paddingBottom: 28,
      borderBottom: "1px solid #E8E8E4",
      cursor: "pointer"
    } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 10, color: "#FF8200", letterSpacing: "0.12em", marginBottom: 8 } }, n.kind.toUpperCase(), " \xB7 ", n.tag.toUpperCase()), /* @__PURE__ */ React.createElement("h4", { style: {
      fontFamily: "var(--serif)",
      fontSize: 22,
      lineHeight: 1.2,
      color: "#1D1D1B",
      marginBottom: 8,
      letterSpacing: "-0.01em"
    } }, n.title), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, color: "#666", lineHeight: 1.5, marginBottom: 10 } }, n.dek), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 11, color: "#A7A6A6", letterSpacing: "0.08em" } }, n.date.toUpperCase(), " \xB7 ", n.read.toUpperCase(), " \xB7 ", n.author.toUpperCase()))
  ))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginTop: 80 } }, /* @__PURE__ */ React.createElement("a", { href: "#", style: {
    display: "inline-block",
    padding: "16px 32px",
    background: "#124734",
    color: "#fff",
    fontFamily: "var(--mono)",
    fontSize: 12,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    textDecoration: "none"
  } }, "Browse all reports \u2192"))));
}
function NewsBold() {
  const ref = React.useRef(null);
  const p = useScrollProgress(ref);
  const cards = NEWS;
  const trackT = range(p, 0.1, 0.95);
  const offset = -trackT * (cards.length - 1) * 520;
  return /* @__PURE__ */ React.createElement("section", { ref, className: "pinned", style: { height: "380vh" } }, /* @__PURE__ */ React.createElement("div", { className: "sticky", style: {
    background: "#0B2218",
    color: "#E3E3E2",
    padding: "56px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "section-label", style: { color: "#FF8200" } }, "Latest"), /* @__PURE__ */ React.createElement("h2", { className: "section-title", style: { color: "#FFF", fontSize: "clamp(32px, 4vw, 72px)", maxWidth: 820, lineHeight: 0.95 } }, "The desk,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "serif", style: { fontStyle: "italic", color: "#FF8200" } }, "this week."))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", fontFamily: "var(--mono)", fontSize: 11, color: "#A7A6A6", lineHeight: 1.6 } }, /* @__PURE__ */ React.createElement("div", null, String(Math.min(Math.floor(trackT * cards.length) + 1, cards.length)).padStart(2, "0"), " / ", String(cards.length).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { style: { color: "#FF8200" } }, String(Math.round(p * 100)).padStart(3, "0"), "% \xB7 SCROLL"))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    gap: 32,
    position: "absolute",
    transform: `translateX(${offset}px)`,
    willChange: "transform",
    height: "100%"
  } }, cards.map((n, i) => {
    const cardP = clamp(trackT * cards.length - i);
    return /* @__PURE__ */ React.createElement("article", { key: n.id, style: {
      width: 488,
      flexShrink: 0,
      background: "#124734",
      padding: 36,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      border: "1px solid rgba(255,255,255,0.08)",
      transform: `translateY(${lerp(24, 0, cardP)}px)`,
      opacity: lerp(0.4, 1, cardP),
      transition: "none"
    } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 10, color: "#FF8200", letterSpacing: "0.14em", marginBottom: 24 } }, String(i + 1).padStart(2, "0"), " \xB7 ", n.kind.toUpperCase(), " \xB7 ", n.tag.toUpperCase()), /* @__PURE__ */ React.createElement("h3", { style: {
      fontFamily: "var(--serif)",
      fontSize: 34,
      lineHeight: 1.1,
      color: "#FFF",
      marginBottom: 20,
      letterSpacing: "-0.015em"
    } }, n.title), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 16, color: "#C9CDBE", lineHeight: 1.55 } }, n.dek)), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 32, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.12)", display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: "#FFF" } }, n.author), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 10, color: "#A7A6A6", letterSpacing: "0.08em", marginTop: 4 } }, n.role.toUpperCase())), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 10, color: "#FF8200", letterSpacing: "0.1em" } }, n.date.toUpperCase(), " \xB7 ", n.read.toUpperCase())));
  }))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, marginTop: 28, justifyContent: "center" } }, cards.map((_, i) => {
    const idx = Math.floor(trackT * cards.length);
    return /* @__PURE__ */ React.createElement("div", { key: i, style: {
      width: i === idx ? 32 : 8,
      height: 2,
      background: i === idx ? "#FF8200" : "rgba(255,255,255,0.2)",
      transition: "width 300ms ease, background 300ms ease"
    } });
  }))));
}
Object.assign(window, { NewsSafe, NewsBold });
function StatsSafe() {
  const ref = React.useRef(null);
  const p = useScrollProgress(ref);
  const stats = [
    { value: 420, suffix: "", label: "Issuers under coverage", note: "MENA + frontier markets" },
    { value: 56, suffix: "", label: "Senior analysts", note: "Embedded across 9 desks" },
    { value: 30, suffix: "+", label: "Years of research", note: "Through every regional cycle" },
    { value: 1284, suffix: "", label: "Reports published YTD", note: "+18% vs. 2025" }
  ];
  return /* @__PURE__ */ React.createElement("section", { ref, style: { padding: "160px 0", background: "var(--bg-2)" } }, /* @__PURE__ */ React.createElement("div", { className: "shell" }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "By the numbers"), /* @__PURE__ */ React.createElement("h2", { className: "section-title", style: { maxWidth: 900, marginBottom: 80 } }, "Three decades of ", /* @__PURE__ */ React.createElement("span", { className: "serif", style: { fontStyle: "italic", color: "var(--accent)" } }, "conviction"), ", compounded."), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--rule)" } }, stats.map((s, i) => {
    const t = range(p, i * 0.1, i * 0.1 + 0.4);
    const shown = Math.round(s.value * smooth(t));
    return /* @__PURE__ */ React.createElement("div", { key: s.label, style: {
      background: "var(--bg-2)",
      padding: "40px 32px"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: "var(--serif)",
      fontSize: 88,
      lineHeight: 1,
      letterSpacing: "-0.03em"
    } }, shown.toLocaleString(), s.suffix), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink)", marginTop: 12, fontSize: 15 } }, s.label), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-faint)", marginTop: 4, fontSize: 13 } }, s.note));
  }))));
}
function StatsBold() {
  const ref = React.useRef(null);
  const p = useScrollProgress(ref);
  const steps = [
    { num: 420, label: "issuers under active coverage", sub: "Every name that matters in MENA + frontier." },
    { num: 56, label: "senior analysts on the ground", sub: "Cairo \xB7 Riyadh \xB7 Dubai \xB7 Nairobi \xB7 Karachi." },
    { num: 30, label: "years through every cycle", sub: "Since 1994. Founded with the region." },
    { num: 1284, label: "reports published this year", sub: "One every 3 hours, on average." }
  ];
  const idx = clamp(Math.floor(p * steps.length * 0.999), 0, steps.length - 1);
  const localP = p * steps.length - idx;
  const step = steps[idx];
  const counted = Math.round(step.num * smooth(clamp(localP * 1.4)));
  return /* @__PURE__ */ React.createElement("section", { ref, className: "pinned", style: { height: "340vh", background: "var(--bg-2)" } }, /* @__PURE__ */ React.createElement("div", { className: "sticky", style: { display: "flex" } }, /* @__PURE__ */ React.createElement("div", { style: {
    flexBasis: "38%",
    padding: "0 56px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 24,
    borderRight: "1px solid var(--rule)"
  } }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "By the numbers"), /* @__PURE__ */ React.createElement("h2", { className: "section-title", style: { fontSize: "clamp(34px, 3.6vw, 56px)" } }, "The research floor,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "serif", style: { fontStyle: "italic", color: "var(--accent)" } }, "in four numbers.")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 40 } }, steps.map(
    (s, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "14px 0",
      borderTop: "1px solid var(--rule)",
      opacity: i === idx ? 1 : 0.4,
      transition: "opacity .4s"
    } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
      color: i === idx ? "var(--accent)" : "var(--ink-faint)",
      fontSize: 11
    } }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, color: i === idx ? "var(--ink)" : "var(--ink-dim)" } }, s.label))
  ))), /* @__PURE__ */ React.createElement("div", { style: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "0 80px",
    position: "relative",
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: "50%",
    left: 60,
    transform: `translateY(-50%) translateX(${-localP * 80}px)`,
    fontFamily: "var(--serif)",
    fontSize: "clamp(240px, 40vw, 520px)",
    lineHeight: 0.85,
    letterSpacing: "-0.05em",
    color: "var(--accent)",
    whiteSpace: "nowrap",
    opacity: 0.96
  } }, counted.toLocaleString()), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", zIndex: 2, marginTop: "auto", marginBottom: 80 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 40, maxWidth: 620, lineHeight: 1.1 } }, step.label), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16, color: "var(--ink-dim)", fontSize: 17, maxWidth: 560 } }, step.sub)), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 80,
    right: 80,
    bottom: 40,
    display: "flex",
    gap: 6
  } }, steps.map(
    (_, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { flex: 1, height: 2, background: "var(--rule)", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: {
      height: "100%",
      width: `${clamp(p * steps.length - i) * 100}%`,
      background: "var(--accent)"
    } }))
  )))));
}
function TerminalSafe() {
  const ref = React.useRef(null);
  const p = useScrollProgress(ref);
  const features = [
    { title: "Unified search", desc: "One prompt across reports, filings, earnings transcripts, and analyst models." },
    { title: "Live sector flows", desc: "Real-time order flow and analyst conviction deltas, streamed to the desktop." },
    { title: "Report workbench", desc: "Mark up any PDF, attach comments, and sync with your OMS in a single pane." }
  ];
  return /* @__PURE__ */ React.createElement("section", { ref, style: { padding: "160px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "shell" }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: 60, opacity: clamp(p * 3) } }, /* @__PURE__ */ React.createElement("div", { className: "section-label", style: { justifyContent: "center" } }, "The terminal"), /* @__PURE__ */ React.createElement("h2", { className: "section-title", style: { maxWidth: 900, margin: "0 auto" } }, "A workbench ", /* @__PURE__ */ React.createElement("span", { className: "serif", style: { fontStyle: "italic", color: "var(--accent)" } }, "built"), " for the buy-side.")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, features.map((f, i) => {
    const t = range(p, i * 0.15, i * 0.15 + 0.3);
    return /* @__PURE__ */ React.createElement("div", { key: f.title, style: {
      padding: "28px 0",
      borderTop: "1px solid var(--rule)",
      opacity: clamp(0.2 + t * 0.8),
      transform: `translateY(${lerp(12, 0, t)}px)`
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 30, marginBottom: 10 } }, f.title), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-dim)", fontSize: 16, lineHeight: 1.5 } }, f.desc));
  })), /* @__PURE__ */ React.createElement("div", { style: {
    transform: `translateY(${lerp(30, -30, p)}px)`
  } }, /* @__PURE__ */ React.createElement(AssemblingDashboard, { progress: 1 })))));
}
function TerminalBold() {
  const ref = React.useRef(null);
  const p = useScrollProgress(ref);
  const highlights = [
    {
      title: "Unified search",
      sub: "One prompt across reports, filings, earnings calls, analyst models.",
      x: 62,
      y: 22,
      anchor: [78, 16]
    },
    {
      title: "Live conviction deltas",
      sub: "Watch analyst stances shift the moment they update.",
      x: 20,
      y: 48,
      anchor: [38, 54]
    },
    {
      title: "Report workbench",
      sub: "Mark up any PDF, sync annotations with your OMS.",
      x: 70,
      y: 72,
      anchor: [58, 80]
    }
  ];
  const activeIdx = clamp(Math.floor(p * highlights.length * 0.99), 0, highlights.length - 1);
  return /* @__PURE__ */ React.createElement("section", { ref, className: "pinned", style: { height: "320vh" } }, /* @__PURE__ */ React.createElement("div", { className: "sticky", style: {
    background: "radial-gradient(ellipse at 50% 0%, var(--bg-3), var(--bg))",
    padding: "100px 56px 40px"
  } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: 30 } }, /* @__PURE__ */ React.createElement("div", { className: "section-label", style: { justifyContent: "center" } }, "The terminal"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "A workbench ", /* @__PURE__ */ React.createElement("span", { className: "serif", style: { fontStyle: "italic", color: "var(--accent)" } }, "built"), " for the desk.")), /* @__PURE__ */ React.createElement("div", { style: {
    position: "relative",
    margin: "40px auto 0",
    width: "min(1240px, 92vw)",
    transform: `scale(${lerp(1.04, 1, clamp(p * 4))})`,
    transformOrigin: "top center"
  } }, /* @__PURE__ */ React.createElement(AssemblingDashboard, { progress: 1 }), highlights.map((h, i) => {
    const on = i === activeIdx ? 1 : 0;
    return /* @__PURE__ */ React.createElement("div", { key: i, style: {
      position: "absolute",
      left: `${h.x}%`,
      top: `${h.y}%`,
      opacity: lerp(0.15, 1, on),
      transform: `translate(-50%, -50%) scale(${lerp(0.92, 1, on)})`,
      transition: "all .5s cubic-bezier(.2,.7,.2,1)",
      pointerEvents: "none",
      zIndex: on ? 5 : 2
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      background: "var(--bg)",
      border: "1px solid var(--accent)",
      borderRadius: 10,
      padding: "14px 18px",
      maxWidth: 280,
      boxShadow: on ? "0 12px 40px rgba(0,0,0,0.6)" : "none"
    } }, /* @__PURE__ */ React.createElement("div", { className: "mono caps", style: { color: "var(--accent)", fontSize: 10 } }, String(i + 1).padStart(2, "0"), " / ", String(highlights.length).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 22, marginTop: 6, lineHeight: 1.1 } }, h.title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--ink-dim)", marginTop: 6, lineHeight: 1.4 } }, h.sub)), /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      left: "50%",
      top: "100%",
      marginTop: 14,
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--accent)",
      transform: "translateX(-50%)",
      boxShadow: `0 0 0 ${6 + Math.sin(Date.now() / 400) * 2}px rgba(255,130,0,0.18)`
    } }));
  })), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 56,
    right: 56,
    bottom: 40,
    display: "flex",
    gap: 20,
    justifyContent: "center",
    fontFamily: "var(--mono)",
    fontSize: 11
  } }, highlights.map(
    (h, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: i === activeIdx ? "var(--accent)" : "var(--ink-faint)"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: i === activeIdx ? 28 : 14,
      height: 2,
      background: "currentColor",
      transition: "width .4s"
    } }), /* @__PURE__ */ React.createElement("span", null, h.title))
  ))));
}
function CTASection() {
  const ref = React.useRef(null);
  const inView = useInView(ref);
  return /* @__PURE__ */ React.createElement("section", { ref, style: { padding: "180px 56px 120px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    maxWidth: 1360,
    margin: "0 auto",
    padding: "100px 80px",
    borderRadius: 24,
    background: "linear-gradient(150deg, var(--bg-2), #0B2218)",
    border: "1px solid var(--rule-strong)",
    position: "relative",
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    right: -150,
    top: -100,
    width: 500,
    height: 500,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255,130,0,0.22), transparent 70%)"
  } }), /* @__PURE__ */ React.createElement("div", { className: `fadein ${inView ? "in" : ""}`, style: { maxWidth: 780, position: "relative" } }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Institutional access"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "See what the ", /* @__PURE__ */ React.createElement("span", { className: "serif", style: { fontStyle: "italic", color: "var(--accent)" } }, "desks"), " see."), /* @__PURE__ */ React.createElement("p", { className: "lede", style: { marginTop: 24 } }, "Access to the terminal is by request. We onboard new buy-side firms on a rolling basis."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, marginTop: 40 } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary" }, "Request access \u2192"), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost" }, "Download sample report")))), /* @__PURE__ */ React.createElement("div", { style: {
    maxWidth: 1360,
    margin: "80px auto 0",
    display: "flex",
    justifyContent: "space-between",
    padding: "40px 0",
    borderTop: "1px solid var(--rule)",
    color: "var(--ink-faint)",
    fontSize: 13
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { className: "nav-logo" }, /* @__PURE__ */ React.createElement("div", { className: "mark" })), /* @__PURE__ */ React.createElement("span", null, "EFG Hermes Research \xB7 Prototype by IKEN Technology")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 24 }, className: "mono" }, /* @__PURE__ */ React.createElement("span", null, "\xA9 2026"), /* @__PURE__ */ React.createElement("span", null, "Licensed by FRA / CMA"), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--accent)" } }, "Data delayed 15m"))));
}
Object.assign(window, { StatsSafe, StatsBold, TerminalSafe, TerminalBold, CTASection });
const { useState: mUseState, useEffect: mUseEffect, useRef: mUseRef } = React;
function Reveal({ children, delay = 0, y = 24, ...rest }) {
  const ref = mUseRef(null);
  const [on, setOn] = mUseState(false);
  mUseEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ React.createElement("div", { ref, style: {
    opacity: on ? 1 : 0,
    transform: on ? "translateY(0)" : `translateY(${y}px)`,
    transition: `opacity .7s cubic-bezier(.2,.7,.2,1) ${delay}s, transform .8s cubic-bezier(.2,.7,.2,1) ${delay}s`,
    ...rest.style
  }, ...rest }, children);
}
function Stagger({ children, base = 0, step = 0.08, y = 20 }) {
  return React.Children.map(
    children,
    (c, i) => /* @__PURE__ */ React.createElement(Reveal, { delay: base + i * step, y }, c)
  );
}
function Counter({ to, suffix = "", duration = 1400, format }) {
  const ref = mUseRef(null);
  const [val, setVal] = mUseState(0);
  mUseEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return /* @__PURE__ */ React.createElement("span", { ref }, format ? format(val) : val.toLocaleString(), suffix);
}
function MobileNav() {
  const [scrolled, setScrolled] = mUseState(false);
  mUseEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ React.createElement("nav", { className: "nav", style: {
    padding: "14px 20px",
    position: "sticky",
    top: 0,
    background: scrolled ? "color-mix(in srgb, var(--bg) 92%, transparent)" : "linear-gradient(180deg, color-mix(in srgb, var(--bg) 88%, transparent), transparent)",
    borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
    transition: "all .3s"
  } }, /* @__PURE__ */ React.createElement("div", { className: "nav-logo" }, /* @__PURE__ */ React.createElement("div", { className: "mark" }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13 } }, "EFG Research")), /* @__PURE__ */ React.createElement("a", { href: "#", className: "nav-cta", style: { padding: "6px 10px", fontSize: 11 } }, "Access"));
}
function MHero() {
  const [tick, setTick] = mUseState(0);
  mUseEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1e3);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ React.createElement("section", { style: {
    padding: "60px 22px 40px",
    position: "relative",
    background: "var(--bg)",
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: -100,
    right: -80,
    width: 360,
    height: 360,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255,130,0,0.18), transparent 70%)",
    pointerEvents: "none"
  } }), /* @__PURE__ */ React.createElement("div", { className: "dots", style: { position: "absolute", inset: 0, opacity: 0.5 } }), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(Reveal, { delay: 0.05 }, /* @__PURE__ */ React.createElement("div", { className: "section-label", style: { marginBottom: 16 } }, /* @__PURE__ */ React.createElement("span", null, "EFG \xB7 MENA Research \xB7 2026"))), /* @__PURE__ */ React.createElement("h1", { style: {
    fontFamily: "var(--serif)",
    fontWeight: 400,
    fontSize: 46,
    lineHeight: 1.04,
    letterSpacing: "-0.03em",
    margin: 0,
    marginBottom: 20
  } }, ["Conviction", "in", "numbers,"].map(
    (w, i) => /* @__PURE__ */ React.createElement(Reveal, { key: i, delay: 0.15 + i * 0.08, y: 18 }, /* @__PURE__ */ React.createElement("span", { style: {
      display: "inline-block",
      marginRight: 10,
      ...w === "in" || w === "numbers," ? { fontStyle: "italic", color: w === "in" || w === "numbers," ? "var(--accent)" : void 0 } : {}
    } }, w))
  ), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Reveal, { delay: 0.45, y: 18 }, /* @__PURE__ */ React.createElement("span", null, "built on decades."))), /* @__PURE__ */ React.createElement(Reveal, { delay: 0.6 }, /* @__PURE__ */ React.createElement("p", { className: "lede", style: { marginBottom: 24, fontSize: 15 } }, "Institutional research across MENA & frontier markets \u2014 used by 420+ buy-side desks.")), /* @__PURE__ */ React.createElement(Reveal, { delay: 0.72 }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary", href: "#", style: { justifyContent: "center" } }, "Request access"), /* @__PURE__ */ React.createElement("a", { className: "btn btn-ghost", href: "#", style: { justifyContent: "center" } }, "Latest research \u2192"))), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 32,
    paddingTop: 22,
    borderTop: "1px solid var(--rule)",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 12
  } }, /* @__PURE__ */ React.createElement(Stagger, { base: 0.85, step: 0.1 }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 30, lineHeight: 1, marginBottom: 6 } }, /* @__PURE__ */ React.createElement(Counter, { to: 420 })), /* @__PURE__ */ React.createElement("div", { className: "caps", style: { fontSize: 10, color: "var(--ink-dim)" } }, "Issuers")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 30, lineHeight: 1, marginBottom: 6 } }, /* @__PURE__ */ React.createElement(Counter, { to: 56 })), /* @__PURE__ */ React.createElement("div", { className: "caps", style: { fontSize: 10, color: "var(--ink-dim)" } }, "Analysts")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 30, lineHeight: 1, marginBottom: 6 } }, /* @__PURE__ */ React.createElement(Counter, { to: 30, suffix: "y" })), /* @__PURE__ */ React.createElement("div", { className: "caps", style: { fontSize: 10, color: "var(--ink-dim)" } }, "Coverage")))), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 24,
    display: "flex",
    gap: 10,
    alignItems: "center",
    fontFamily: "var(--mono)",
    fontSize: 10,
    color: "var(--ink-faint)"
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "var(--accent)",
    boxShadow: `0 0 0 ${3 + Math.sin(tick) * 2}px rgba(255,130,0,0.24)`,
    transition: "box-shadow .6s"
  } }), /* @__PURE__ */ React.createElement("span", null, "LIVE \xB7 SESSION ", String(tick % 60).padStart(2, "0"), ":", String(tick * 17 % 60).padStart(2, "0"), " GST"))));
}
function MTicker() {
  const items = [
    ["EGX30", "28,412.60", "+1.24%", "up"],
    ["TASI", "12,104.82", "+0.68%", "up"],
    ["DFM", "4,870.15", "-0.12%", "dn"],
    ["ADX", "9,622.04", "+0.42%", "up"],
    ["BRENT", "$84.22", "+0.51%", "up"],
    ["QE", "10,688.33", "+0.28%", "up"],
    ["KSE", "7,245.90", "-0.33%", "dn"]
  ];
  const doubled = [...items, ...items];
  return /* @__PURE__ */ React.createElement("div", { className: "ticker", style: { padding: "10px 0", fontSize: 11, gap: 18, background: "var(--bg-2)" } }, /* @__PURE__ */ React.createElement("div", { className: "ticker-track", style: { gap: 18 } }, doubled.map(
    (x, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "ticker-item" }, /* @__PURE__ */ React.createElement("span", { className: "sym" }, x[0]), /* @__PURE__ */ React.createElement("span", { className: "val" }, x[1]), /* @__PURE__ */ React.createElement("span", { className: x[3] }, x[2]))
  )));
}
function MCoverage() {
  const pillars = [
    { k: "Equity", d: "Fundamental coverage on 420 issuers across MENA and frontier.", n: "420" },
    { k: "Macro", d: "Deep country notes \u2014 FX, inflation, rates, politics.", n: "18" },
    { k: "Strategy", d: "Top-down positioning, factor views, thematic baskets.", n: "24" },
    { k: "Thematic", d: "Deep-dives: fintech, IPOs, energy transition, digital infra.", n: "36" }
  ];
  return /* @__PURE__ */ React.createElement("section", { style: { padding: "72px 22px", background: "var(--bg)" } }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Coverage")), /* @__PURE__ */ React.createElement(Reveal, { delay: 0.1 }, /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: "var(--serif)", fontSize: 34, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "12px 0 28px" } }, "Every ", /* @__PURE__ */ React.createElement("span", { style: { fontStyle: "italic", color: "var(--accent)" } }, "angle"), " on the region.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, pillars.map(
    (p, i) => /* @__PURE__ */ React.createElement(Reveal, { key: p.k, delay: 0.1 + i * 0.1, y: 16 }, /* @__PURE__ */ React.createElement(CoverageCard, { pillar: p }))
  )));
}
function CoverageCard({ pillar }) {
  const [hovered, setHovered] = mUseState(false);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      onPointerDown: () => setHovered(true),
      onPointerUp: () => setHovered(false),
      onPointerLeave: () => setHovered(false),
      style: {
        padding: "18px 16px",
        border: "1px solid var(--rule)",
        borderRadius: 8,
        background: "var(--bg-2)",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: 14,
        alignItems: "center",
        transform: hovered ? "scale(0.98)" : "scale(1)",
        borderColor: hovered ? "var(--accent)" : "var(--rule)",
        transition: "all .25s cubic-bezier(.2,.7,.2,1)"
      }
    },
    /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 22, marginBottom: 6 } }, pillar.k), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-dim)", fontSize: 13, lineHeight: 1.45 } }, pillar.d)),
    /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: "var(--mono)",
      fontSize: 11,
      color: "var(--accent)",
      letterSpacing: "0.1em"
    } }, pillar.n), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, color: "var(--ink-faint)", marginTop: 2, letterSpacing: "0.1em", textTransform: "uppercase" } }, "reports"))
  );
}
function MMap() {
  const ref = mUseRef(null);
  const [visible, setVisible] = mUseState(false);
  mUseEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const markets = [
    ["Egypt", "EGX 30", "156 issuers"],
    ["Saudi Arabia", "TASI", "142 issuers"],
    ["UAE", "DFM \xB7 ADX", "72 issuers"],
    ["Qatar", "QE", "24 issuers"],
    ["Kuwait", "KSE", "38 issuers"],
    ["Morocco", "MASI", "18 issuers"],
    ["Pakistan", "KSE-100", "22 issuers"],
    ["Kenya", "NSE", "14 issuers"]
  ];
  const cityDots = [[130, 100, "CAI"], [175, 120, "RUH"], [210, 118, "DXB"], [195, 116, "DOH"], [185, 105, "KWI"], [70, 90, "CMN"], [240, 130, "KHI"]];
  return /* @__PURE__ */ React.createElement("section", { ref, style: { padding: "72px 22px", background: "var(--bg-2)" } }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Coverage map")), /* @__PURE__ */ React.createElement(Reveal, { delay: 0.1 }, /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: "var(--serif)", fontSize: 34, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "12px 0 24px" } }, "MENA & ", /* @__PURE__ */ React.createElement("span", { style: { fontStyle: "italic", color: "var(--accent)" } }, "frontier"), ".")), /* @__PURE__ */ React.createElement(Reveal, { delay: 0.2 }, /* @__PURE__ */ React.createElement("div", { style: {
    height: 220,
    borderRadius: 10,
    background: "radial-gradient(circle at 55% 45%, rgba(255,130,0,0.16), transparent 60%), var(--bg)",
    border: "1px solid var(--rule)",
    position: "relative",
    overflow: "hidden",
    marginBottom: 20
  } }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 350 220", style: { width: "100%", height: "100%" } }, /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M40,80 Q120,55 200,70 T320,95 L310,145 Q240,165 170,155 Q100,150 60,130 Z",
      fill: "rgba(227,227,226,0.12)",
      stroke: "var(--rule-strong)",
      strokeWidth: "0.5",
      style: {
        strokeDasharray: 1400,
        strokeDashoffset: visible ? 0 : 1400,
        transition: "stroke-dashoffset 2s ease-out"
      }
    }
  ), cityDots.slice(1).map((c, i) => {
    const from = cityDots[0];
    return /* @__PURE__ */ React.createElement(
      "line",
      {
        key: i,
        x1: from[0],
        y1: from[1],
        x2: c[0],
        y2: c[1],
        stroke: "var(--accent)",
        strokeWidth: "0.5",
        opacity: visible ? 0.3 : 0,
        style: { transition: `opacity .8s ease ${0.4 + i * 0.1}s` }
      }
    );
  }), cityDots.map(
    ([x, y, l], i) => /* @__PURE__ */ React.createElement("g", { key: i, style: {
      opacity: visible ? 1 : 0,
      transition: `opacity .5s ease ${0.3 + i * 0.12}s, transform .5s ease ${0.3 + i * 0.12}s`
    } }, /* @__PURE__ */ React.createElement("circle", { cx: x, cy: y, r: "8", fill: "var(--accent)", opacity: "0.18" }, /* @__PURE__ */ React.createElement("animate", { attributeName: "r", values: "8;14;8", dur: `${2.2 + i * 0.2}s`, repeatCount: "indefinite" }), /* @__PURE__ */ React.createElement("animate", { attributeName: "opacity", values: "0.18;0.05;0.18", dur: `${2.2 + i * 0.2}s`, repeatCount: "indefinite" })), /* @__PURE__ */ React.createElement("circle", { cx: x, cy: y, r: "3", fill: "var(--accent)" }), /* @__PURE__ */ React.createElement("text", { x: x + 8, y: y + 3, fontSize: "8", fontFamily: "var(--mono)", fill: "var(--ink-dim)" }, l))
  )))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 } }, markets.map(
    ([c, i, n], idx) => /* @__PURE__ */ React.createElement(Reveal, { key: c, delay: 0.3 + idx * 0.05, y: 14 }, /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 12px", border: "1px solid var(--rule)", borderRadius: 6 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500 } }, c), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--ink-faint)", fontFamily: "var(--mono)", marginTop: 2 } }, i), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-dim)", marginTop: 4 } }, n)))
  )));
}
function MNews() {
  const stories = [
    ["Macro", "Egypt FX normalization: what sticks after the float", "Mohamed Abu Basha \xB7 4 min"],
    ["Equity", "Saudi banks Q1: net interest margin resilience", "Waleed Ramadan \xB7 6 min"],
    ["Thematic", "UAE real estate: cycle maturity call", "Ahmed Hazem \xB7 8 min"],
    ["Frontier", "Pakistan IMF program \u2014 flows outlook", "Raza Jafri \xB7 5 min"],
    ["Strategy", "MENA Q2 positioning: overweight KSA banks", "Simon Kitchen \xB7 7 min"]
  ];
  const [filter, setFilter] = mUseState("All");
  const filters = ["All", "Macro", "Equity", "Thematic", "Frontier", "Strategy"];
  const filtered = filter === "All" ? stories : stories.filter((s) => s[0] === filter);
  return /* @__PURE__ */ React.createElement("section", { style: { padding: "72px 22px", background: "var(--bg)" } }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Latest research")), /* @__PURE__ */ React.createElement(Reveal, { delay: 0.1 }, /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: "var(--serif)", fontSize: 34, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "12px 0 20px" } }, "Published ", /* @__PURE__ */ React.createElement("span", { style: { fontStyle: "italic", color: "var(--accent)" } }, "this week"), ".")), /* @__PURE__ */ React.createElement(Reveal, { delay: 0.2 }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    gap: 8,
    overflowX: "auto",
    marginBottom: 20,
    paddingBottom: 4,
    scrollbarWidth: "none"
  }, className: "no-scrollbar" }, filters.map(
    (f) => /* @__PURE__ */ React.createElement("button", { key: f, onClick: () => setFilter(f), style: {
      padding: "6px 12px",
      fontSize: 11,
      fontFamily: "var(--mono)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      border: "1px solid",
      borderColor: filter === f ? "var(--accent)" : "var(--rule)",
      background: filter === f ? "var(--accent)" : "transparent",
      color: filter === f ? "#1D1D1B" : "var(--ink-dim)",
      borderRadius: 20,
      whiteSpace: "nowrap",
      cursor: "pointer",
      transition: "all .2s"
    } }, f)
  ))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column" } }, filtered.map(
    (s, i) => /* @__PURE__ */ React.createElement(Reveal, { key: s[1], delay: 0.1 + i * 0.08, y: 14 }, /* @__PURE__ */ React.createElement("a", { href: "#", style: {
      padding: "20px 0",
      borderBottom: "1px solid var(--rule)",
      display: "block"
    } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 10 } }, /* @__PURE__ */ React.createElement("span", { className: "caps", style: { color: "var(--accent)" } }, s[0]), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--ink-faint)", fontFamily: "var(--mono)" } }, new Date(Date.now() - i * 864e5).toLocaleDateString("en-GB", { day: "2-digit", month: "short" }))), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 20, lineHeight: 1.2, marginBottom: 8 } }, s[1]), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-dim)", fontSize: 12 } }, s[2])))
  )));
}
function MStats() {
  const stats = [
    { num: 420, suffix: "", label: "Issuers under coverage", sub: "Across MENA + frontier" },
    { num: 56, suffix: "", label: "Senior analysts", sub: "Embedded on 9 desks" },
    { num: 30, suffix: "+", label: "Years of research", sub: "Every regional cycle" },
    { num: 1284, suffix: "", label: "Reports YTD", sub: "+18% vs \u201925" }
  ];
  return /* @__PURE__ */ React.createElement("section", { style: { padding: "72px 22px", background: "var(--bg-2)" } }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "By the numbers")), /* @__PURE__ */ React.createElement(Reveal, { delay: 0.1 }, /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: "var(--serif)", fontSize: 34, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "12px 0 28px" } }, "Three decades, ", /* @__PURE__ */ React.createElement("span", { style: { fontStyle: "italic", color: "var(--accent)" } }, "compounded"), ".")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--rule)" } }, stats.map(
    (s, i) => /* @__PURE__ */ React.createElement(Reveal, { key: s.label, delay: 0.15 + i * 0.1, y: 16 }, /* @__PURE__ */ React.createElement("div", { style: { background: "var(--bg-2)", padding: "24px 18px", height: "100%" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 44, lineHeight: 1, letterSpacing: "-0.03em" } }, /* @__PURE__ */ React.createElement(Counter, { to: s.num, suffix: s.suffix, duration: 1800 })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, marginTop: 10 } }, s.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-faint)", marginTop: 4 } }, s.sub)))
  )));
}
function MTerminal() {
  const [tickIdx, setTickIdx] = mUseState(0);
  const ref = mUseRef(null);
  const [inView, setInView] = mUseState(false);
  mUseEffect(() => {
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  mUseEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setTickIdx((i) => i + 1), 900);
    return () => clearInterval(id);
  }, [inView]);
  const basePath = [78, 72, 66, 58, 52, 50, 46, 42, 38, 34, 30, 24, 20, 18, 16];
  const offset = tickIdx % 30;
  const pts = basePath.map((y, i) => {
    const phase = Math.sin((i + offset) * 0.5 + tickIdx * 0.2) * 3;
    return [i * (320 / (basePath.length - 1)), y + phase];
  });
  const pathD = pts.map(([x, y], i) => (i ? "L" : "M") + x.toFixed(1) + "," + y.toFixed(1)).join(" ");
  const closedD = pathD + ` L 320,100 L 0,100 Z`;
  const basePrice = 28412.6;
  const price = (basePrice + Math.sin(tickIdx * 0.3) * 18).toFixed(2);
  const delta = (1.24 + Math.sin(tickIdx * 0.3) * 0.05).toFixed(2);
  return /* @__PURE__ */ React.createElement("section", { ref, style: { padding: "72px 22px", background: "var(--bg)" } }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "The terminal")), /* @__PURE__ */ React.createElement(Reveal, { delay: 0.1 }, /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: "var(--serif)", fontSize: 34, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "12px 0 20px" } }, "A workbench ", /* @__PURE__ */ React.createElement("span", { style: { fontStyle: "italic", color: "var(--accent)" } }, "built"), " for the desk.")), /* @__PURE__ */ React.createElement(Reveal, { delay: 0.2, y: 24 }, /* @__PURE__ */ React.createElement("div", { style: {
    borderRadius: 10,
    overflow: "hidden",
    border: "1px solid var(--rule)",
    background: "var(--bg-2)",
    marginBottom: 24,
    boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    padding: "10px 14px",
    borderBottom: "1px solid var(--rule)",
    display: "flex",
    justifyContent: "space-between",
    fontSize: 10,
    fontFamily: "var(--mono)",
    color: "var(--ink-dim)"
  } }, /* @__PURE__ */ React.createElement("span", null, "EFG \xB7 Research"), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--accent)", display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    background: "var(--accent)",
    animation: "livepulse 1.4s infinite"
  } }), "LIVE")), /* @__PURE__ */ React.createElement("div", { style: { padding: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--ink-dim)", fontFamily: "var(--mono)", marginBottom: 4 } }, "EGX 30 \xB7 INDEX"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 24, display: "flex", alignItems: "baseline", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontVariantNumeric: "tabular-nums" } }, price), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--green)", fontFamily: "var(--mono)" } }, "+", delta, "%")), /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 320 100", style: { width: "100%", height: 90, marginTop: 10 } }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "mg", x1: "0", x2: "0", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "var(--accent)", stopOpacity: "0.35" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "var(--accent)", stopOpacity: "0" }))), /* @__PURE__ */ React.createElement("path", { d: closedD, fill: "url(#mg)", style: { transition: "d .9s ease" } }), /* @__PURE__ */ React.createElement("path", { d: pathD, fill: "none", stroke: "var(--accent)", strokeWidth: "1.5", style: { transition: "d .9s ease" } }), /* @__PURE__ */ React.createElement(
    "circle",
    {
      cx: pts[pts.length - 1][0],
      cy: pts[pts.length - 1][1],
      r: "3",
      fill: "var(--accent)"
    },
    /* @__PURE__ */ React.createElement("animate", { attributeName: "r", values: "3;5;3", dur: "1.4s", repeatCount: "indefinite" })
  ))), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid var(--rule)" } }, [["COMI", "+2.14%", "BUY"], ["EMAAR", "+0.87%", "BUY"], ["STC", "-0.42%", "HOLD"]].map((r, i) => {
    const flashing = tickIdx % 3 === i;
    return /* @__PURE__ */ React.createElement("div", { key: r[0], style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 14px",
      borderBottom: "1px solid var(--rule)",
      fontSize: 12,
      background: flashing ? "rgba(255,130,0,0.06)" : "transparent",
      transition: "background .4s"
    } }, /* @__PURE__ */ React.createElement("span", null, r[0]), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", color: r[1].startsWith("+") ? "var(--green)" : "var(--red)" } }, r[1]), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "var(--accent)", fontFamily: "var(--mono)" } }, r[2]));
  })))), [
    ["Unified search", "One prompt across reports, filings, earnings transcripts."],
    ["Live conviction deltas", "Watch analyst stances shift the moment they update."],
    ["Report workbench", "Mark up any PDF, sync with your OMS."]
  ].map(
    ([t, d], i) => /* @__PURE__ */ React.createElement(Reveal, { key: t, delay: 0.15 + i * 0.12, y: 14 }, /* @__PURE__ */ React.createElement("div", { style: { padding: "18px 0", borderTop: "1px solid var(--rule)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--serif)", fontSize: 22, marginBottom: 6 } }, t), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-dim)", fontSize: 14, lineHeight: 1.45 } }, d)))
  ));
}
function MCTA() {
  return /* @__PURE__ */ React.createElement("section", { style: { padding: "60px 22px" } }, /* @__PURE__ */ React.createElement(Reveal, { y: 30 }, /* @__PURE__ */ React.createElement("div", { style: {
    padding: "40px 24px",
    borderRadius: 14,
    background: "linear-gradient(150deg, var(--bg-2), #0B2218)",
    border: "1px solid var(--rule-strong)",
    position: "relative",
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    right: -120,
    top: -80,
    width: 320,
    height: 320,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255,130,0,0.24), transparent 70%)",
    pointerEvents: "none"
  } }), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Institutional access"), /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: "var(--serif)", fontSize: 30, lineHeight: 1.05, margin: "10px 0 16px" } }, "See what the ", /* @__PURE__ */ React.createElement("span", { style: { fontStyle: "italic", color: "var(--accent)" } }, "desks"), " see."), /* @__PURE__ */ React.createElement("p", { className: "lede", style: { fontSize: 14, marginBottom: 24 } }, "Access to the terminal is by request. We onboard new buy-side firms on a rolling basis."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { justifyContent: "center" } }, "Request access \u2192"), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost", style: { justifyContent: "center" } }, "Download sample report"))))), /* @__PURE__ */ React.createElement(Reveal, { delay: 0.2 }, /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 40,
    padding: "24px 0",
    borderTop: "1px solid var(--rule)",
    color: "var(--ink-faint)",
    fontSize: 12,
    textAlign: "center"
  } }, "EFG Hermes Research \xB7 Prototype by IKEN Technology \xB7 \xA9 2026")));
}
function MobileApp() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(MobileNav, null), /* @__PURE__ */ React.createElement(MHero, null), /* @__PURE__ */ React.createElement(MTicker, null), /* @__PURE__ */ React.createElement(MCoverage, null), /* @__PURE__ */ React.createElement(MMap, null), /* @__PURE__ */ React.createElement(MNews, null), /* @__PURE__ */ React.createElement(MStats, null), /* @__PURE__ */ React.createElement(MTerminal, null), /* @__PURE__ */ React.createElement(MCTA, null));
}
Object.assign(window, { MobileApp });
const TWEAK_DEFAULTS = (
  /*EDITMODE-BEGIN*/
  {
    "theme": "dark",
    "device": "desktop",
    "heroVariant": "safe",
    "coverageVariant": "safe",
    "mapVariant": "safe",
    "newsVariant": "bold",
    "statsVariant": "safe",
    "terminalVariant": "safe",
    "accent": "#FF8200"
  }
);
function Nav() {
  return /* @__PURE__ */ React.createElement("nav", { className: "nav" }, /* @__PURE__ */ React.createElement("div", { className: "nav-logo" }, /* @__PURE__ */ React.createElement("div", { className: "mark" }), /* @__PURE__ */ React.createElement("span", null, "EFG Research")), /* @__PURE__ */ React.createElement("div", { className: "nav-links" }, /* @__PURE__ */ React.createElement("a", { href: "#" }, "Markets"), /* @__PURE__ */ React.createElement("a", { href: "#" }, "Coverage"), /* @__PURE__ */ React.createElement("a", { href: "#" }, "Reports"), /* @__PURE__ */ React.createElement("a", { href: "#" }, "Analysts"), /* @__PURE__ */ React.createElement("a", { href: "#" }, "About")), /* @__PURE__ */ React.createElement("a", { href: "#", className: "nav-cta", style: { backgroundColor: "rgb(18, 71, 52)" } }, "Request access"));
}
function Ticker() {
  const items = [
    ["EGX30", "28,412.60", "+1.24%", "up"],
    ["TASI", "12,104.82", "+0.68%", "up"],
    ["DFM", "4,870.15", "-0.12%", "dn"],
    ["ADX", "9,622.04", "+0.42%", "up"],
    ["QE", "10,418.77", "+0.91%", "up"],
    ["MASI", "14,226.30", "-0.23%", "dn"],
    ["KSE", "7,984.41", "+1.02%", "up"],
    ["BRENT", "$84.22", "+0.51%", "up"],
    ["USD/EGP", "47.82", "-0.08%", "dn"],
    ["USD/SAR", "3.7504", "+0.00%", "up"],
    ["GOLD", "$2,418.50", "+0.34%", "up"]
  ];
  const doubled = [...items, ...items];
  return /* @__PURE__ */ React.createElement("div", { className: "ticker" }, /* @__PURE__ */ React.createElement("div", { className: "ticker-track" }, doubled.map(
    (t, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "ticker-item" }, /* @__PURE__ */ React.createElement("span", { className: "sym" }, t[0]), /* @__PURE__ */ React.createElement("span", { className: "val" }, t[1]), /* @__PURE__ */ React.createElement("span", { className: t[3] }, t[2]))
  )));
}
function ScrollRail({ chapters }) {
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight / 2;
      let found = 0;
      chapters.forEach((c, i) => {
        const el = document.getElementById(c.id);
        if (el && el.offsetTop <= y) found = i;
      });
      setActive(found);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [chapters]);
  return /* @__PURE__ */ React.createElement("div", { className: "scroll-rail" }, chapters.map(
    (c, i) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: c.id,
        className: `chapter ${i === active ? "active" : ""}`,
        onClick: () => document.getElementById(c.id).scrollIntoView({ behavior: "auto" })
      },
      /* @__PURE__ */ React.createElement("span", null, String(i + 1).padStart(2, "0")),
      /* @__PURE__ */ React.createElement("span", { className: "tick" }),
      /* @__PURE__ */ React.createElement("span", null, c.label)
    )
  ));
}
function TweakToggle({ value, onChange, options = ["safe", "bold"] }) {
  return /* @__PURE__ */ React.createElement("div", { className: "tweak-toggle" }, options.map(
    (opt) => /* @__PURE__ */ React.createElement("button", { key: opt, className: value === opt ? "on" : "", onClick: () => onChange(opt) }, opt)
  ));
}
function TweaksPanel({ visible, state, setState }) {
  const allToBold = () => setState({
    heroVariant: "bold",
    coverageVariant: "bold",
    mapVariant: "bold",
    newsVariant: "bold",
    statsVariant: "bold",
    terminalVariant: "bold"
  });
  const allToSafe = () => setState({
    heroVariant: "safe",
    coverageVariant: "safe",
    mapVariant: "safe",
    newsVariant: "safe",
    statsVariant: "safe",
    terminalVariant: "safe"
  });
  if (!visible) return null;
  return /* @__PURE__ */ React.createElement("div", { className: "tweaks-panel" }, /* @__PURE__ */ React.createElement("h3", null, "Tweaks \xB7 Section Variants"), /* @__PURE__ */ React.createElement("div", { className: "tweak-row" }, /* @__PURE__ */ React.createElement("label", null, "Device"), /* @__PURE__ */ React.createElement(TweakToggle, { value: state.device || "desktop", onChange: (v) => setState({ device: v }), options: ["desktop", "mobile"] })), /* @__PURE__ */ React.createElement("div", { className: "tweak-row" }, /* @__PURE__ */ React.createElement("label", null, "Theme"), /* @__PURE__ */ React.createElement(TweakToggle, { value: state.theme || "dark", onChange: (v) => setState({ theme: v }), options: ["dark", "light"] })), /* @__PURE__ */ React.createElement("div", { className: "tweak-row" }, /* @__PURE__ */ React.createElement("label", null, "Hero"), /* @__PURE__ */ React.createElement(TweakToggle, { value: state.heroVariant, onChange: (v) => setState({ heroVariant: v }) })), /* @__PURE__ */ React.createElement("div", { className: "tweak-row" }, /* @__PURE__ */ React.createElement("label", null, "Coverage"), /* @__PURE__ */ React.createElement(TweakToggle, { value: state.coverageVariant, onChange: (v) => setState({ coverageVariant: v }) })), /* @__PURE__ */ React.createElement("div", { className: "tweak-row" }, /* @__PURE__ */ React.createElement("label", null, "Map"), /* @__PURE__ */ React.createElement(TweakToggle, { value: state.mapVariant, onChange: (v) => setState({ mapVariant: v }) })), /* @__PURE__ */ React.createElement("div", { className: "tweak-row" }, /* @__PURE__ */ React.createElement("label", null, "News"), /* @__PURE__ */ React.createElement(TweakToggle, { value: state.newsVariant, onChange: (v) => setState({ newsVariant: v }) })), /* @__PURE__ */ React.createElement("div", { className: "tweak-row" }, /* @__PURE__ */ React.createElement("label", null, "Stats"), /* @__PURE__ */ React.createElement(TweakToggle, { value: state.statsVariant, onChange: (v) => setState({ statsVariant: v }) })), /* @__PURE__ */ React.createElement("div", { className: "tweak-row" }, /* @__PURE__ */ React.createElement("label", null, "Terminal"), /* @__PURE__ */ React.createElement(TweakToggle, { value: state.terminalVariant, onChange: (v) => setState({ terminalVariant: v }) })), /* @__PURE__ */ React.createElement("div", { className: "tweak-row", style: { gap: 8 } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost", style: { padding: "6px 10px", fontSize: 11 }, onClick: allToSafe }, "All safe"), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { padding: "6px 10px", fontSize: 11 }, onClick: allToBold }, "All bold")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, fontSize: 10, color: "var(--ink-faint)", fontFamily: "var(--mono)", lineHeight: 1.5 } }, "Safe = reveal-on-scroll. Bold = pinned / horizontal / cinematic."));
}
function App() {
  const [tweakMode, setTweakMode] = React.useState(false);
  const [state, setStateInternal] = React.useState(TWEAK_DEFAULTS);
  const setState = (patch) => setStateInternal((s) => {
    const next = { ...s, ...patch };
    window.parent?.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*");
    return next;
  });
  React.useEffect(() => {
    const onMsg = (e) => {
      if (e.data?.type === "__activate_edit_mode") setTweakMode(true);
      if (e.data?.type === "__deactivate_edit_mode") setTweakMode(false);
    };
    window.addEventListener("message", onMsg);
    window.parent?.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", state.theme || "dark");
    document.documentElement.setAttribute("data-device", state.device || "desktop");
  }, [state.theme, state.device]);
  const isMobile = state.device === "mobile";
  const chapters = [
    { id: "hero", label: "Hero" },
    { id: "coverage", label: "Coverage" },
    { id: "map", label: "Map" },
    { id: "news", label: "News" },
    { id: "stats", label: "Numbers" },
    { id: "terminal", label: "Terminal" },
    { id: "cta", label: "Access" }
  ];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, isMobile ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(TweaksPanel, { visible: tweakMode, state, setState }), /* @__PURE__ */ React.createElement(MobileApp, null)) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Nav, null), /* @__PURE__ */ React.createElement(ScrollRail, { chapters }), /* @__PURE__ */ React.createElement(TweaksPanel, { visible: tweakMode, state, setState }), /* @__PURE__ */ React.createElement("div", { id: "hero", "data-screen-label": "01 Hero" }, state.heroVariant === "bold" ? /* @__PURE__ */ React.createElement(HeroBold, null) : /* @__PURE__ */ React.createElement(HeroSafe, null)), /* @__PURE__ */ React.createElement("div", { style: { background: "var(--bg-2)", padding: "0 56px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1360, margin: "0 auto" } }, /* @__PURE__ */ React.createElement(Ticker, null))), /* @__PURE__ */ React.createElement("div", { id: "coverage", "data-screen-label": "02 Coverage" }, state.coverageVariant === "bold" ? /* @__PURE__ */ React.createElement(CoverageBold, null) : /* @__PURE__ */ React.createElement(CoverageSafe, null)), /* @__PURE__ */ React.createElement("div", { id: "map", "data-screen-label": "03 Map" }, state.mapVariant === "bold" ? /* @__PURE__ */ React.createElement(MapBold, null) : /* @__PURE__ */ React.createElement(MapSafe, null)), /* @__PURE__ */ React.createElement("div", { id: "news", "data-screen-label": "04 News" }, state.newsVariant === "bold" ? /* @__PURE__ */ React.createElement(NewsBold, null) : /* @__PURE__ */ React.createElement(NewsSafe, null)), /* @__PURE__ */ React.createElement("div", { id: "stats", "data-screen-label": "05 Stats" }, state.statsVariant === "bold" ? /* @__PURE__ */ React.createElement(StatsBold, null) : /* @__PURE__ */ React.createElement(StatsSafe, null)), /* @__PURE__ */ React.createElement("div", { id: "terminal", "data-screen-label": "06 Terminal" }, state.terminalVariant === "bold" ? /* @__PURE__ */ React.createElement(TerminalBold, null) : /* @__PURE__ */ React.createElement(TerminalSafe, null)), /* @__PURE__ */ React.createElement("div", { id: "cta", "data-screen-label": "07 CTA" }, /* @__PURE__ */ React.createElement(CTASection, null))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
