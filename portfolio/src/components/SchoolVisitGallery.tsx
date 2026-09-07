import { useState } from "react";

// Screen content area
const SCREEN_W = 720;
const SCREEN_H = 450; // 16:10

// MacBook Air M2, almost no bezel, notch at top
const BEZEL_T    = 6;   // tiny top strip above notch baseline (notch cuts into this)
const BEZEL_SIDE = 5;
const BEZEL_BOT  = 5;   // very thin chin
const NOTCH_W    = 110;
const NOTCH_H    = 22;
const LID_W      = SCREEN_W + BEZEL_SIDE * 2;
const LID_H      = BEZEL_T + NOTCH_H + SCREEN_H + BEZEL_BOT;
const BASE_W     = LID_W + 10; // barely wider
const BASE_H     = 22;

// Midnight / Space Gray color
const BODY = "#1c1c1e";
const BODY_LIGHT = "#2a2a2c";

interface Props { lang?: "no" | "en" }

const SCREENS = [
  {
    id: "map",
    src: "/images/in5320/map.jpg",
    labelNo: "Kartvisning",
    labelEn: "Map View",
    altNo: "Kartvisning av skoler med prioritet",
    altEn: "Map view of school priorities",
  },
  {
    id: "schoolpage",
    src: "/images/in5320/schoolpage.jpg",
    labelNo: "Skoledetaljside",
    labelEn: "School Detail",
    altNo: "Skoledetaljside",
    altEn: "School detail page",
  },
  {
    id: "inspectionstart",
    src: "/images/in5320/inspectionstartpage.jpg",
    labelNo: "Start inspeksjon",
    labelEn: "Start Inspection",
    altNo: "Startside for inspeksjon",
    altEn: "Inspection start page",
  },
  {
    id: "newinspection",
    src: "/images/in5320/newinspection.jpg",
    labelNo: "Ny inspeksjon",
    labelEn: "New Inspection",
    altNo: "Ny inspeksjonsskjerm",
    altEn: "New inspection screen",
  },
];

function MacBookAirM2({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center" }}>
      {/* ── Lid ── */}
      <div
        style={{
          width: LID_W,
          height: LID_H,
          borderRadius: "10px 10px 0 0",
          background: BODY,
          boxShadow: [
            `0 0 0 1px rgba(255,255,255,0.08)`,
            `0 16px 64px rgba(0,0,0,0.65)`,
            `inset 0 1px 0 rgba(255,255,255,0.07)`,
          ].join(", "),
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* Notch */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: NOTCH_W,
            height: NOTCH_H,
            background: BODY,
            borderRadius: "0 0 10px 10px",
            zIndex: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Camera */}
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#111",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.09)",
            }}
          />
        </div>

        {/* Screen content, fills lid edge-to-edge minus tiny bezels */}
        <div
          style={{
            position: "absolute",
            top: BEZEL_T + NOTCH_H,
            left: BEZEL_SIDE,
            right: BEZEL_SIDE,
            bottom: BEZEL_BOT,
            borderRadius: 2,
            overflow: "hidden",
            background: "#fff",
          }}
        >
          {children}
        </div>

        {/* Side bezels (thin strips) */}
        <div style={{ position: "absolute", top: BEZEL_T + NOTCH_H, left: 0, width: BEZEL_SIDE, bottom: BEZEL_BOT, background: BODY }} />
        <div style={{ position: "absolute", top: BEZEL_T + NOTCH_H, right: 0, width: BEZEL_SIDE, bottom: BEZEL_BOT, background: BODY }} />
      </div>

      {/* ── Hinge line ── */}
      <div
        style={{
          width: LID_W,
          height: 2,
          background: "rgba(0,0,0,0.6)",
        }}
      />

      {/* ── Base, very thin strip ── */}
      <div
        style={{
          width: BASE_W,
          height: BASE_H,
          borderRadius: "0 0 6px 6px",
          background: `linear-gradient(180deg, ${BODY_LIGHT} 0%, ${BODY} 100%)`,
          boxShadow: [
            `0 0 0 1px rgba(255,255,255,0.07)`,
            `0 6px 24px rgba(0,0,0,0.55)`,
          ].join(", "),
        }}
      />

      {/* ── Desk shadow ── */}
      <div
        style={{
          width: BASE_W + 40,
          height: 10,
          borderRadius: "0 0 50% 50%",
          background: "radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.28) 0%, transparent 80%)",
          marginTop: 1,
        }}
      />
    </div>
  );
}

export default function SchoolVisitGallery({ lang = "no" }: Props) {
  const isEn = lang === "en";
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="nibio-gallery">
      <div className="nibio-gallery-header">
        <h3 className="nibio-gallery-title">
          {isEn ? "Final Design: School Visit Planner" : "Ferdig design: School Visit Planner"}
        </h3>
        <p className="nibio-gallery-desc">
          {isEn
            ? "A webapp built on the DHIS2 platform for school inspectors, from prioritising schools on a map to logging inspections and comparing resources."
            : "En webapp bygget på DHIS2-plattformen for skoleinspektører, fra prioritering på kart til registrering av inspeksjoner og sammenligning av ressurser."}
        </p>
      </div>

      {/* Tab nav */}
      <div className="nibio-tabs" role="tablist">
        {SCREENS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === activeIdx}
            onClick={() => setActiveIdx(i)}
            className={"nibio-tab" + (i === activeIdx ? " active" : "")}
          >
            {isEn ? s.labelEn : s.labelNo}
          </button>
        ))}
      </div>

      {/* Mockup */}
      <div style={{ display: "flex", justifyContent: "center", overflowX: "auto" }}>
        <MacBookAirM2>
          <img
            src={SCREENS[activeIdx].src}
            alt={isEn ? SCREENS[activeIdx].altEn : SCREENS[activeIdx].altNo}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top left",
              display: "block",
            }}
          />
        </MacBookAirM2>
      </div>

      {/* Dots */}
      <div className="nibio-dots" style={{ marginTop: "1.5rem" }} role="tablist">
        {SCREENS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === activeIdx}
            aria-label={isEn ? s.labelEn : s.labelNo}
            onClick={() => setActiveIdx(i)}
            className={"nibio-dot" + (i === activeIdx ? " active" : "")}
          />
        ))}
      </div>
    </div>
  );
}
