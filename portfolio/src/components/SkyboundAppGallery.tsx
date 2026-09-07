import { useState, useRef } from "react";
import HjemSkjerm from "../imports/HjemSkjerm";
import ForecastAir from "../imports/ForecastAir";
import ForecastAir1 from "../imports/ForecastAir-1";
import ForecastAirDetails from "../imports/ForecastAirDetails";
import ForecastAirDetails1 from "../imports/ForecastAirDetails-1";
import ForecastGround from "../imports/ForecastGround";
import ForecastGround1 from "../imports/ForecastGround-1";
import DetailedForecast4Hours from "../imports/DetailedForecast4Hours";
import DetailedForecast4Hours1 from "../imports/DetailedForecast4Hours-1";
import InformationHomeScreen from "../imports/InformationHomeScreen";

// Figma canvas: Material Design 3 Android, 412 × 892 px
const DESIGN_W = 412;
const DESIGN_H = 892;
const DISPLAY_W = 220;
const SCALE = DISPLAY_W / DESIGN_W;
const DISPLAY_H = Math.round(DESIGN_H * SCALE);

// Phone chrome measurements
const BEZEL_SIDE = 9;
const BEZEL_TOP  = 14;
const BEZEL_BOT  = 20;
const CORNER_R   = 40;
const PHONE_W    = DISPLAY_W + BEZEL_SIDE * 2;
const PHONE_H    = DISPLAY_H + BEZEL_TOP + BEZEL_BOT;

const SCREENS = [
  { id: "hjem",     labelNo: "Hjemskjerm",             labelEn: "Home Screen",          Component: HjemSkjerm },
  { id: "luft",     labelNo: "Luftprognose",            labelEn: "Air Forecast",          Component: ForecastAir },
  { id: "luft1",    labelNo: "Luftprognose (variant)",  labelEn: "Air Forecast (alt)",    Component: ForecastAir1 },
  { id: "luftdet",  labelNo: "Luftdetaljer",            labelEn: "Air Details",           Component: ForecastAirDetails },
  { id: "luftdet1", labelNo: "Luftdetaljer (variant)",  labelEn: "Air Details (alt)",     Component: ForecastAirDetails1 },
  { id: "bakke",    labelNo: "Bakkeprognose",           labelEn: "Ground Forecast",       Component: ForecastGround },
  { id: "bakke1",   labelNo: "Bakkeprognose (variant)", labelEn: "Ground Forecast (alt)", Component: ForecastGround1 },
  { id: "4timer",   labelNo: "4-timers prognose",       labelEn: "4-Hour Forecast",       Component: DetailedForecast4Hours },
  { id: "4timer1",  labelNo: "4-timers (variant)",      labelEn: "4-Hour (alt)",          Component: DetailedForecast4Hours1 },
  { id: "info",     labelNo: "Informasjon",             labelEn: "Information",           Component: InformationHomeScreen },
];

interface Props { lang?: "no" | "en" }

function AndroidPhone({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: PHONE_W,
        height: PHONE_H,
        borderRadius: CORNER_R,
        background: "linear-gradient(160deg, #1e1e22 0%, #111114 60%, #0d0d10 100%)",
        boxShadow: [
          "0 0 0 1px rgba(255,255,255,0.11)",
          "0 2px 0 1px rgba(255,255,255,0.06)",
          "0 24px 80px rgba(0,0,0,0.72)",
          "inset 0 1px 0 rgba(255,255,255,0.09)",
          "inset 0 -1px 0 rgba(0,0,0,0.6)",
        ].join(", "),
        position: "relative",
        flexShrink: 0,
        boxSizing: "border-box",
        padding: `${BEZEL_TOP}px ${BEZEL_SIDE}px ${BEZEL_BOT}px`,
      }}
    >
      {/* Volume buttons — left side */}
      {[28, 58, 90].map((top, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: -3,
            top,
            width: 3,
            height: i === 0 ? 18 : 30,
            borderRadius: "2px 0 0 2px",
            background: "rgba(255,255,255,0.13)",
          }}
        />
      ))}
      {/* Power button — right */}
      <div
        style={{
          position: "absolute",
          right: -3,
          top: 50,
          width: 3,
          height: 38,
          borderRadius: "0 2px 2px 0",
          background: "rgba(255,255,255,0.16)",
        }}
      />

      {/* Screen */}
      <div
        style={{
          width: DISPLAY_W,
          height: DISPLAY_H,
          borderRadius: CORNER_R - BEZEL_SIDE - 2,
          overflow: "hidden",
          position: "relative",
          background: "#000",
        }}
      >
        {/* Punch-hole camera */}
        <div
          style={{
            position: "absolute",
            top: 11,
            left: "50%",
            transform: "translateX(-50%)",
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#080808",
            zIndex: 10,
            boxShadow: "0 0 0 1.5px rgba(255,255,255,0.08)",
          }}
        />
        {/* Scaled design */}
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

      {/* Home pill */}
      <div
        style={{
          position: "absolute",
          bottom: 8,
          left: "50%",
          transform: "translateX(-50%)",
          width: 64,
          height: 4,
          borderRadius: 99,
          background: "rgba(255,255,255,0.22)",
        }}
      />
    </div>
  );
}

export default function SkyboundAppGallery({ lang = "no" }: Props) {
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
    <div className="skybound-gallery">
      <div className="skybound-gallery-header">
        <h3 className="skybound-gallery-title">
          {isEn ? "Final Design — Skybound App" : "Ferdig design — Skybound-appen"}
        </h3>
        <p className="skybound-gallery-desc">
          {isEn
            ? "10 polished screens built in Figma, reflecting iterations from user testing with PortalSpace's crew. Material Design 3 on Android."
            : "10 ferdigstilte skjermer laget i Figma, basert på iterasjoner fra brukertesting med PortalSpace-teamet. Material Design 3 på Android."}
        </p>
      </div>

      <div className="skybound-track-wrap">
        <div ref={trackRef} className="skybound-track">
          {SCREENS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => scrollTo(i)}
              className={"skybound-phone-btn" + (i === activeIdx ? " active" : "")}
              aria-label={isEn ? s.labelEn : s.labelNo}
              type="button"
            >
              <AndroidPhone>
                <s.Component />
              </AndroidPhone>
              <p
                style={{
                  marginTop: "0.75rem",
                  fontSize: "0.72rem",
                  color: "var(--color-text-muted)",
                  opacity: 0.7,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  textAlign: "center",
                }}
              >
                {isEn ? s.labelEn : s.labelNo}
              </p>
            </button>
          ))}
        </div>
        <div className="skybound-track-fade-l" />
        <div className="skybound-track-fade-r" />
      </div>

      <div className="skybound-dots" role="tablist" aria-label={isEn ? "Screen navigation" : "Skjermnavigasjon"}>
        {SCREENS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollTo(i)}
            type="button"
            role="tab"
            aria-selected={i === activeIdx}
            aria-label={isEn ? s.labelEn : s.labelNo}
            className={"skybound-dot" + (i === activeIdx ? " active" : "")}
          />
        ))}
      </div>
    </div>
  );
}
