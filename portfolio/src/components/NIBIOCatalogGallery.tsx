import { useState, useRef } from "react";
import CatalogOverview from "../imports/CatalogOverview";
import CatalogAiSearch from "../imports/CatalogAiSearch";
import CatalogProject from "../imports/CatalogProject";
import FilterProjectName from "../imports/FilterProjectName";
import FilterProjectNameActive from "../imports/FilterProjectNameActive";

// Figma design canvas: 1101 × 737 px
const DESIGN_W = 1101;
const DESIGN_H = 737;

// Display width inside the frame
const SCREEN_W = 760;
const SCALE    = SCREEN_W / DESIGN_W;
const SCREEN_H = Math.round(DESIGN_H * SCALE);

// MacBook Air M2 chrome — minimal bezels, notch at top
const BEZEL_T    = 6;
const BEZEL_SIDE = 5;
const BEZEL_BOT  = 5;
const NOTCH_W    = 120;
const NOTCH_H    = 24;
const LID_W      = SCREEN_W + BEZEL_SIDE * 2;
const LID_H      = BEZEL_T + NOTCH_H + SCREEN_H + BEZEL_BOT;
const BASE_W     = LID_W + 10;
const BASE_H     = 22;

const BODY       = "#1c1c1e";
const BODY_LIGHT = "#2a2a2c";

const SCREENS = [
  { id: "overview",      labelNo: "Katalog­oversikt",  labelEn: "Catalog Overview",  Component: CatalogOverview },
  { id: "ai-search",     labelNo: "AI-søk",             labelEn: "AI Search",          Component: CatalogAiSearch },
  { id: "project",       labelNo: "Prosjektside",        labelEn: "Project Detail",     Component: CatalogProject },
  { id: "filter",        labelNo: "Filter­panel",        labelEn: "Filter Panel",       Component: FilterProjectName },
  { id: "filter-active", labelNo: "Aktivt filter",       labelEn: "Active Filter",      Component: FilterProjectNameActive },
];

interface Props { lang?: "no" | "en" }

function MacBookAirM2({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
      {/* ── Lid ── */}
      <div
        style={{
          width: LID_W,
          height: LID_H,
          borderRadius: "10px 10px 0 0",
          background: BODY,
          boxShadow: [
            "0 0 0 1px rgba(255,255,255,0.08)",
            "0 16px 64px rgba(0,0,0,0.65)",
            "inset 0 1px 0 rgba(255,255,255,0.07)",
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

        {/* Screen area — edge-to-edge with tiny bezels */}
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
          {/* Scale container */}
          <div
            style={{
              width: DESIGN_W,
              height: DESIGN_H,
              transform: `scale(${SCALE})`,
              transformOrigin: "top left",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            {children}
          </div>
        </div>

        {/* Side bezel strips */}
        <div style={{ position: "absolute", top: BEZEL_T + NOTCH_H, left: 0, width: BEZEL_SIDE, bottom: BEZEL_BOT, background: BODY }} />
        <div style={{ position: "absolute", top: BEZEL_T + NOTCH_H, right: 0, width: BEZEL_SIDE, bottom: BEZEL_BOT, background: BODY }} />
      </div>

      {/* ── Hinge ── */}
      <div style={{ width: LID_W, height: 2, background: "rgba(0,0,0,0.6)" }} />

      {/* ── Base ── */}
      <div
        style={{
          width: BASE_W,
          height: BASE_H,
          borderRadius: "0 0 6px 6px",
          background: `linear-gradient(180deg, ${BODY_LIGHT} 0%, ${BODY} 100%)`,
          boxShadow: [
            "0 0 0 1px rgba(255,255,255,0.07)",
            "0 6px 24px rgba(0,0,0,0.55)",
          ].join(", "),
        }}
      />

      {/* ── Desk shadow ── */}
      <div
        style={{
          width: BASE_W + 60,
          height: 14,
          borderRadius: "0 0 50% 50%",
          background: "radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.25) 0%, transparent 80%)",
          marginTop: 1,
        }}
      />
    </div>
  );
}

export default function NIBIOCatalogGallery({ lang = "no" }: Props) {
  const isEn = lang === "en";
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollTo(idx: number) {
    setActiveIdx(idx);
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[idx] as HTMLElement;
    if (!card) return;
    card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  return (
    <div className="nibio-gallery">
      <div className="nibio-gallery-header">
        <h3 className="nibio-gallery-title">
          {isEn ? "Final Design — NIBIO Data Catalog" : "Ferdig design — NIBIO datakatalog"}
        </h3>
        <p className="nibio-gallery-desc">
          {isEn
            ? "Interactive prototype built in Figma, showing the complete data catalog — search, filtering, and project detail views."
            : "Interaktiv prototype laget i Figma som viser hele datakatalogens flyt — søk, filtrering og prosjektdetaljvisning."}
        </p>
      </div>

      {/* Tabs */}
      <div className="nibio-tabs" role="tablist">
        {SCREENS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === activeIdx}
            onClick={() => scrollTo(i)}
            className={"nibio-tab" + (i === activeIdx ? " active" : "")}
          >
            {isEn ? s.labelEn : s.labelNo}
          </button>
        ))}
      </div>

      {/* Scrollable strip */}
      <div className="nibio-track-wrap">
        <div ref={trackRef} className="nibio-track">
          {SCREENS.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => scrollTo(i)}
              className={"nibio-screen-btn" + (i === activeIdx ? " active" : "")}
              aria-label={isEn ? s.labelEn : s.labelNo}
            >
              <MacBookAirM2>
                <s.Component />
              </MacBookAirM2>
              <p className="nibio-screen-label">{isEn ? s.labelEn : s.labelNo}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="nibio-dots" role="tablist" aria-label={isEn ? "Screen navigation" : "Skjermnavigasjon"}>
        {SCREENS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === activeIdx}
            aria-label={isEn ? s.labelEn : s.labelNo}
            onClick={() => scrollTo(i)}
            className={"nibio-dot" + (i === activeIdx ? " active" : "")}
          />
        ))}
      </div>
    </div>
  );
}
